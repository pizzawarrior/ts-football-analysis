import fs from 'fs';
import { MatchReader } from "../src/MatchReader";

jest.mock('fs');

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
