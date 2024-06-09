import fs, { readFileSync } from 'fs';

// accepts a generic type do we can use different data types. Convention is single letter name.
export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public filename: string) {}

    abstract formatSingleRow(row: string[]): T;

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
            .map(this.formatSingleRow)
    }
}
