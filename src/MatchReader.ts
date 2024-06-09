import { dateStringtoDate } from "./utils"
import { MatchResult } from "./MatchResult"
import { CsvFileReader } from "./CsvFileReader"

type RowTuple = [Date, string, string, number, number, MatchResult, string]

export class MatchReader extends CsvFileReader<RowTuple> {
    formatSingleRow(row: string[]): RowTuple {
        return [
            dateStringtoDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult, // type assertion: override TS behavior
            row[6]
        ]
    }
}
