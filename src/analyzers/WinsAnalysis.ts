import { Analyzer } from "../GenerateSummary";
import { FormatDataRow } from "../FormatDataRow";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
    constructor(public teamName: string = 'Man United') {}

    run(matches: FormatDataRow[]): string {
        let totalWins: number = 0;
        for (let game of matches) {
            if (game[1] === this.teamName && game[5] === MatchResult.HomeTeamWon || game[2] === this.teamName && game[5] === MatchResult.AwayTeamWon) {
                totalWins++;
            }
        }
        return `${this.teamName} has ${totalWins} wins for the season`;
    }
}
