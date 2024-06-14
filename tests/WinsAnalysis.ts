import { WinsAnalysis } from "../src/analyzers/WinsAnalysis";
import { FormatDataRow } from "../src/FormatDataRow";
import { MatchResult } from "../src/MatchResult";

describe('WinsAnalysis', () => {
    it('returns the correct sum of total games won by a given team', () => {
        const matches: FormatDataRow[] = [
            [new Date(2024, 5, 28), 'Man United', 'Chelsea', 2, 1, MatchResult.HomeTeamWon, 'N Smith'],
            [new Date(2024, 5, 25), 'Chelsea', 'Man United', 1, 2, MatchResult.AwayTeamWon, 'T Jones'],
            [new Date(2024, 5, 30), 'Man United', 'Liverpool', 0, 0, MatchResult.Draw, 'M Taylor']
        ];

        const winsAnalysis = new WinsAnalysis('Man United');
        const result = winsAnalysis.run(matches);

        expect(result).toBe('Man United has 2 wins for the season');
    })
})
