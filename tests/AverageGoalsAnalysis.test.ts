
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

        expect(result).toBe('Man United averaged 1 points per game for this season');
    });

    it('returns the correct response when no games with the given team name were recorded', () => {
        const matches: FormatDataRow[] = [];
        const averageGoalsAnalysis = new AverageGoalsAnalysis('Man United');
        const result = averageGoalsAnalysis.run(matches);

        expect(result).toBe('Man United did not play any games this season');
    });

    it('returns the correct response when the given team scored 0 points for the season', () => {
        const matches: FormatDataRow[] = [
            [new Date(2024, 5, 28), 'Man United', 'Chelsea', 0, 1, MatchResult.AwayTeamWon, 'N Smith'],
            [new Date(2024, 5, 25), 'Chelsea', 'Man United', 1, 0, MatchResult.HomeTeamWon, 'T Jones'],
            [new Date(2024, 5, 30), 'Man United', 'Liverpool', 0, 0, MatchResult.Draw, 'M Taylor']
        ];

        const averageGoalsAnalysis = new AverageGoalsAnalysis('Man United');
        const result = averageGoalsAnalysis.run(matches);

        expect(result).toBe('Man United averaged 0 points per game for this season');
    })
})
