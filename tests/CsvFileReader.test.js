"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const CsvFileReader_1 = require("../src/CsvFileReader");
jest.mock('fs');
describe('CsvFileReader', () => {
    it('reads and parses CSV files correctly', () => {
        const fileContent = '12/06/2024,Man United,Chelsea,2,1,H,N Smith';
        const fsSpy = jest.spyOn(fs_1.default, 'readFileSync').mockReturnValueOnce(fileContent);
        const csvFileReader = new CsvFileReader_1.CsvFileReader('dummy.csv');
        csvFileReader.read();
        expect(csvFileReader.data).toEqual([['12/06/2024', 'Man United', 'Chelsea', '2', '1', 'H', 'N Smith']]);
        fsSpy.mockRestore();
    });
});
