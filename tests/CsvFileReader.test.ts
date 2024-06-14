import fs from 'fs'
import { CsvFileReader } from "../src/CsvFileReader";

jest.mock('fs');

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
