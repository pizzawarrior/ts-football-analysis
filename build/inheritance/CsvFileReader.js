"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// accepts a generic type so we can use different data types as arguments. Convention is single letter name.
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8"
        })
            .trim()
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map(this.formatSingleRow);
    }
}
exports.CsvFileReader = CsvFileReader;
