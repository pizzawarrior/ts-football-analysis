import { MatchResult } from "./MatchResult";
import { dateStringtoDate } from "./utils";

type FormatDataRow = [Date, string, string, number, number, MatchResult, string]

interface DataReader {
 read(): void;
 data: string[][]
}

export class MatchReader {
    matches: FormatDataRow[] = []

    constructor(public reader: DataReader) {
        this.reader = reader
    }

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map(
            (row: string[]): FormatDataRow => {
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
