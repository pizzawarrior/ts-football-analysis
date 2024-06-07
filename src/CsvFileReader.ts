import fs, { readFileSync } from 'fs';
import { MatchResult } from './MatchResult';

type RowTuple = [Date, string, string, number, number, MatchResult, string]

export abstract class CsvFileReader {
    data: RowTuple[] = [];

    constructor(public filename: string) {}

    abstract formatSingleRow(row: string[]): RowTuple

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
            // .map(this.formatSingleRow)
    }
}
