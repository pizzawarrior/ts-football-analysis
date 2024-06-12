"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(teamName = 'Man United') {
        this.teamName = teamName;
    }
    run(matches) {
        let totalWins = 0;
        for (let game of matches) {
            if (game[1] === this.teamName && game[5] === MatchResult_1.MatchResult.HomeTeamWon || game[2] === this.teamName && game[5] === MatchResult_1.MatchResult.AwayTeamWon) {
                totalWins++;
            }
        }
        return `${this.teamName} has ${totalWins} wins for the season`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
