import fs, { readFileSync } from 'fs';
import { dateStringtoDate } from './utils';
import { MatchResult } from './MatchResult';


type RowTuple = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader {
    data: RowTuple[] = [];

    constructor(public filename: string) {}

    read(): void {
        this.data = fs
        .readFileSync(this.filename , {
            encoding: "utf-8"
        })
            .trim()
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })
            .map((row: string[]): RowTuple => {
                return [
                    dateStringtoDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult, // type assertion: override TS behavior
                    row[6]
                ]
            })
    }
}
