import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";

let csvFileName = 'football.csv';

// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader(csvFileName);

// create an instance of MatchReader and pass in the object that satisfies the DataReader interface
const newMatch = new MatchReader(csvFileReader);
newMatch.load();

//  test analyze data:
let totalWins: number = 0;
for (let game of newMatch.matches) {
    if (game[1] === 'Man United' && game[5] === MatchResult.HomeTeamWon || game[2] === 'Man United' && game[5] === MatchResult.AwayTeamWon) {
        totalWins++;
    }
}
console.log(`Manchester United has ${totalWins} wins for this season`)
