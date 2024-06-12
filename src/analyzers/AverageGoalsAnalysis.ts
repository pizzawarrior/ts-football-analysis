import { Analyzer } from "../GenerateSummary";
import { FormatDataRow } from "../FormatDataRow";
import { MatchResult } from "../MatchResult";

export class AverageGoalsAnalysis implements Analyzer {
    constructor(public teamName: string = 'Man United') {}

    run(matches: FormatDataRow[]): string {
        let totalPointsScored = 0;
        let totalGamesPlayed = 0
        for (let game of matches) {
            if (game[1] === this.teamName && game[5] === MatchResult.HomeTeamWon) {
                totalPointsScored += game[3];
                totalGamesPlayed += 1;
            } else if (game[2] === this.teamName && game[5] === MatchResult.AwayTeamWon) {
                totalPointsScored += game[4];
                totalGamesPlayed += 1;
            }
        }
        if (totalGamesPlayed === 0) {
            return `${this.teamName} did not play any games this season`;
        }

        let averageScore = Math.round(totalPointsScored / totalGamesPlayed);
        return `${this.teamName} averaged ${averageScore} points per game for this season`
    }
}
