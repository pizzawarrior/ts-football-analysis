
import { AverageGoalsAnalysis } from "../src/analyzers/AverageGoalsAnalysis";
import { MatchResult } from "../src/MatchResult";
import { FormatDataRow } from "../src/FormatDataRow";

describe('AverageGoalsAnalysis', () => {
    it('returns the correct average value of scores from all games played', () => {
        const matches: FormatDataRow[] = [
            [new Date(2024, 5, 28), 'Man United', 'Chelsea', 2, 1, MatchResult.HomeTeamWon, 'N Smith'],
            [new Date(2024, 5, 25), 'Chelsea', 'Man United', 1, 2, MatchResult.AwayTeamWon, 'T Jones'],
            [new Date(2024, 5, 30), 'Man United', 'Liverpool', 0, 0, MatchResult.Draw, 'M Taylor']
        ];

        const averageGoalsAnalysis = new AverageGoalsAnalysis('Man United');
        const result = averageGoalsAnalysis.run(matches);

        expect(result).toBe('Man United averaged 1.3 points per game for this season')
    })
})
