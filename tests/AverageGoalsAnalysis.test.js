"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AverageGoalsAnalysis_1 = require("../src/analyzers/AverageGoalsAnalysis");
const MatchResult_1 = require("../src/MatchResult");
describe('AverageGoalsAnalysis', () => {
    it('returns the correct average value of scores from all games played', () => {
        const matches = [
            [new Date(2024, 5, 28), 'Man United', 'Chelsea', 2, 1, MatchResult_1.MatchResult.HomeTeamWon, 'N Smith'],
            [new Date(2024, 5, 25), 'Chelsea', 'Man United', 1, 2, MatchResult_1.MatchResult.AwayTeamWon, 'T Jones'],
            [new Date(2024, 5, 30), 'Man United', 'Liverpool', 0, 0, MatchResult_1.MatchResult.Draw, 'M Taylor']
        ];
        const averageGoalsAnalysis = new AverageGoalsAnalysis_1.AverageGoalsAnalysis('Man United');
        const result = averageGoalsAnalysis.run(matches);
        expect(result).toBe('Man United averaged 1.3 points per game for this season');
    });
});
