import fs, { readFileSync } from 'fs';

export class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) {}

    read(): string[][] {
        this.data = fs
        .readFileSync(this.filename, {
            encoding: "utf-8"
        })
            .trim()
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })
            return this.data;
        }
}
