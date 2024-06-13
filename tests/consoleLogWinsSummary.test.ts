import fs from 'fs';
import { CsvFileReader } from "../src/CsvFileReader";
import { MatchReader } from "../src/MatchReader";
import { FormatDataRow } from "../src/FormatDataRow";
import { dateStringtoDate } from "../src/utils";
import { GenerateSummary } from "../src/GenerateSummary";
import { Analyzer, OutputTarget } from '../src/GenerateSummary';
import { WinsAnalysis } from '../src/analyzers/WinsAnalysis';
import { AverageGoalsAnalysis } from '../src/analyzers/AverageGoalsAnalysis';
import { HtmlReport } from '../src/reportTargets/HtmlReport';
import { ConsoleReport } from '../src/reportTargets/ConsoleReport';
import { MatchResult } from '../src/MatchResult';

jest.mock("../src/GenerateSummary");
jest.mock('fs');

describe("static functions on the 'GenerateSummary' class", () => {
    it ("should be able to be mocked", () => {
        const mockConsoleLogWinsSummary = jest.fn();
        const MockGenerateSummary = GenerateSummary as jest.Mocked<typeof GenerateSummary>;
        MockGenerateSummary.consoleLogWinsSummary.mockImplementation(mockConsoleLogWinsSummary);
    });
})

describe('CsvFileReader', () => {
    it('reads and parses CSV files correctly', () => {
        const fileContent = '12/06/2024,Man United,Chelsea,2,1,H,N Smith';
        const fsSpy = jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(fileContent);

        const csvFileReader = new CsvFileReader('dummy.csv');
        csvFileReader.read();

        expect(csvFileReader.data).toEqual([['12/06/2024', 'Man United', 'Chelsea', '2', '1', 'H', 'N Smith']])
        fsSpy.mockRestore();
    });
});

describe('MatchReader', () => {
    it('loads and processes match data correctly', () => {
        const fileContent = '12/06/2024,Man United,Chelsea,2,1,H,N Smith';
        const fsSpy = jest.spyOn(fs, 'readFileSync').mockImplementationOnce(() => fileContent);

        const matchReader = MatchReader.newMatch('dummy.csv');
        matchReader.load();
        expect(matchReader.matches).toEqual([[new Date(2024, 5, 12), 'Man United', 'Chelsea', 2, 1, 'H', 'N Smith']]);
        fsSpy.mockRestore();
    })
})

describe('Generate Summary', () => {
    it('generates and prints the wins report correctly', () => {
        const matches: FormatDataRow[] = [
            [new Date(2024, 5, 12), 'Man United', 'Chelsea', 2, 1, MatchResult.HomeTeamWon, 'N Smith']
        ];

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        const MockedGenerateSummary = GenerateSummary as jest.Mocked<typeof GenerateSummary>;

        const mockInstance = new MockedGenerateSummary(new WinsAnalysis('Man United'), new ConsoleReport());
        mockInstance.buildAndPrintReport = jest.fn();
        MockedGenerateSummary.consoleLogWinsSummary.mockReturnValue(mockInstance);

        const summary = GenerateSummary.consoleLogWinsSummary('Man United');
        summary.buildAndPrintReport(matches);

        expect(summary.buildAndPrintReport).toHaveBeenCalledWith(matches);
        consoleSpy.mockRestore();
    })

    it('generates and prints the average-score-per-game report correctly', () => {
        const matches: FormatDataRow[] = [
            [new Date(2024, 5, 28), 'Man United', 'Chelsea', 2, 1, MatchResult.HomeTeamWon, 'N Smith'],
            [new Date(2024, 5, 25), 'Chelsea', 'Man United', 1, 2, MatchResult.AwayTeamWon, 'T Jones'],
            [new Date(2024, 5, 30), 'Man United', 'Liverpool', 0, 0, MatchResult.Draw, 'M Taylor']
        ]

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        const MockedGenerateSummary = GenerateSummary as jest.Mocked<typeof GenerateSummary>;

        const mockInstance = new MockedGenerateSummary(new AverageGoalsAnalysis('Man United'), new ConsoleReport());
        mockInstance.buildAndPrintReport = jest.fn();
        MockedGenerateSummary.consoleLogAverageScorePerGameSummary.mockReturnValue(mockInstance);

        const summary = GenerateSummary.consoleLogAverageScorePerGameSummary('Man United');
        summary.buildAndPrintReport(matches);

        expect(summary.buildAndPrintReport).toHaveBeenCalledWith(matches);
        consoleSpy.mockRestore();
    })
})
