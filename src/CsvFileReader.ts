import fs, { readFileSync } from 'fs';

export abstract class CsvFileReader<CsvFile> {
    data: CsvFile[] = [];

    constructor(public filename: string) {}

    abstract formatSingleRow(row: string[]): CsvFile

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
