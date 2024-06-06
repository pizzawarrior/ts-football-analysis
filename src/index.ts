import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CsvFileReader('football.csv')
reader.read()

//  test analyze data:
    let totalWins: number = 0;
    for (let game of reader.data) {
        if (game[1] === 'Man United' && game[5] === MatchResult.HomeTeamWon || game[2] === 'Man United' && game[5] === MatchResult.AwayTeamWon) {
            totalWins++;
        }
    }
    // console.log(`Manchester United has ${totalWins} wins for this season`)
