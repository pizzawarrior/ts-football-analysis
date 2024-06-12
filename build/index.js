"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
let csvFileName = 'football.csv';
// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader(csvFileName);
// create an instance of MatchReader and pass in the object that satisfies the DataReader interface
const newMatch = new MatchReader_1.MatchReader(csvFileReader);
newMatch.load();
//  test analyze data:
let totalWins = 0;
for (let game of newMatch.matches) {
    if (game[1] === 'Man United' && game[5] === MatchResult_1.MatchResult.HomeTeamWon || game[2] === 'Man United' && game[5] === MatchResult_1.MatchResult.AwayTeamWon) {
        totalWins++;
    }
}
console.log(`Manchester United has ${totalWins} wins for this season`);
