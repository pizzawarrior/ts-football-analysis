"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    formatSingleRow(row) {
        return [
            (0, utils_1.dateStringtoDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5], // type assertion: override TS behavior
            row[6]
        ];
    }
}
exports.MatchReader = MatchReader;
