import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader('football.csv')
reader.read()

enum gameResult {
    HomeTeamWon = 'H',
    AwayTeamWon = 'A',
    Draw = 'D'
}

// test analyze data:
    let totalWins: number = 0;
    for (let game of reader.data) {
        if (game[1] === 'Man United' && game[5] === gameResult.HomeTeamWon || game[2] === 'Man United' && game[5] === gameResult.AwayTeamWon) {
            totalWins++;
        }
    }
    console.log(`Manchester United has ${totalWins} wins for this season`)
