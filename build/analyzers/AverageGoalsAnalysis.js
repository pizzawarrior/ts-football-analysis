"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AverageGoalsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class AverageGoalsAnalysis {
    constructor(teamName = 'Man United') {
        this.teamName = teamName;
    }
    run(matches) {
        let totalPointsScored = 0;
        let totalGamesPlayed = 0;
        for (let game of matches) {
            if (game[1] === this.teamName && game[5] === MatchResult_1.MatchResult.HomeTeamWon) {
                totalPointsScored += game[3];
                totalGamesPlayed += 1;
            }
            else if (game[2] === this.teamName && game[5] === MatchResult_1.MatchResult.AwayTeamWon) {
                totalPointsScored += game[4];
                totalGamesPlayed += 1;
            }
            else if (game[1] === this.teamName && game[5] === MatchResult_1.MatchResult.Draw || game[2] === this.teamName && game[5] === MatchResult_1.MatchResult.Draw) {
                totalGamesPlayed += 1;
            }
        }
        if (totalGamesPlayed === 0) {
            return `${this.teamName} did not play any games this season`;
        }
        let averageScore = (totalPointsScored / totalGamesPlayed).toFixed(1);
        return `${this.teamName} averaged ${averageScore} points per game for this season`;
    }
}
exports.AverageGoalsAnalysis = AverageGoalsAnalysis;
