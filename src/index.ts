import fs, { readFileSync } from 'fs';

const matches = fs
.readFileSync('football.csv', {
    encoding: "utf-8"
})
    .trim()
    .split('\n')
    .map((row: string): string[] => {
        return row.split(',')
    })

// test analyze data:
const manUnitedWins = (games: string[][]) => {
    let totalWins: number = 0;
    for (let game of games) {
        if (game[1] === 'Man United' && game[5] === 'H' || game[2] === 'Man United' && game[5] === 'A') {
            totalWins++;
        }
    }
    return totalWins;
}

console.log(manUnitedWins(matches))
