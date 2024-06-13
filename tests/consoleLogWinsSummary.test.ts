import { CsvFileReader } from "../src/CsvFileReader";
import { MatchReader } from "../src/MatchReader";
import { FormatDataRow } from "../src/FormatDataRow";
import { dateStringtoDate } from "../src/utils";
import fs from 'fs';
import { GenerateSummary } from "../src/GenerateSummary";

jest.mock("../src/GenerateSummary");
jest.mock('fs');

describe("static function named 'consoleLogWinsSummary'", () => {
    it ("should be mocked on the 'GenerateSummary' class", () => {
        const mockConsoleLogWinsSummary = jest.fn();
        const MockGenerateSummary = GenerateSummary as jest.Mocked<typeof GenerateSummary>;
        MockGenerateSummary.consoleLogWinsSummary.mockImplementation(mockConsoleLogWinsSummary);
    });
})


describe('CsvFileReader', () => {
    it('reads and parses CSV files correctly', () => {
        const fileContent = '12/06/2024,Man United,Chelsea,2,1,H,Smith';
        jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(fileContent);

        const csvFileReader = new CsvFileReader('dummy.csv');
        csvFileReader.read();

        expect(csvFileReader.data).toEqual([['12/06/2024', 'Man United', 'Chelsea', '2', '1', 'H', 'Smith']])
    });
});
