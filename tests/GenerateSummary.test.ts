import fs from 'fs';
import { FormatDataRow } from "../src/FormatDataRow";
import { GenerateSummary } from "../src/GenerateSummary";
import { WinsAnalysis } from '../src/analyzers/WinsAnalysis';
import { AverageGoalsAnalysis } from '../src/analyzers/AverageGoalsAnalysis';
import { HtmlReport } from '../src/reportTargets/HtmlReport';
import { ConsoleReport } from '../src/reportTargets/ConsoleReport';
import { MatchResult } from '../src/MatchResult';

jest.mock("../src/GenerateSummary");
jest.mock('fs')

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
        ];

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        const MockedGenerateSummary = GenerateSummary as jest.Mocked<typeof GenerateSummary>;

        const mockInstance = new MockedGenerateSummary(new AverageGoalsAnalysis('Man United'), new ConsoleReport());
        mockInstance.buildAndPrintReport = jest.fn();
        MockedGenerateSummary.consoleLogAverageScorePerGameSummary.mockReturnValue(mockInstance);

        const summary = GenerateSummary.consoleLogAverageScorePerGameSummary('Man United');
        summary.buildAndPrintReport(matches);

        expect(summary.buildAndPrintReport).toHaveBeenCalledWith(matches);
        consoleSpy.mockRestore();
    });

    it('generates and saves Html reports correctly', () => {
        const matches: FormatDataRow[] = [
            [new Date(2024, 5, 28), 'Man United', 'Chelsea', 2, 1, MatchResult.HomeTeamWon, 'N Smith'],
        ];

        const fsSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {});
        const MockedGenerateSummary = GenerateSummary as jest.Mocked<typeof GenerateSummary>;

        const mockInstance = {
            analyzer: new WinsAnalysis('Man United'),
            outputTarget: new HtmlReport('report.html'),
            buildAndPrintReport: jest.fn(() => {
              const report = mockInstance.analyzer.run(matches);
              mockInstance.outputTarget.print(report);
            })
          };

        MockedGenerateSummary.generateHtmlWinsSummary.mockReturnValue(mockInstance);

        const summary = GenerateSummary.generateHtmlWinsSummary('report.html');
        summary.buildAndPrintReport(matches);

        expect(summary.buildAndPrintReport).toHaveBeenCalledWith(matches);
        expect(fsSpy).toHaveBeenCalledWith('/Users/ME/desktop/report.html', expect.any(String));
        fsSpy.mockRestore();
    });
})
