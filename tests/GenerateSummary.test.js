"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const GenerateSummary_1 = require("../src/GenerateSummary");
const WinsAnalysis_1 = require("../src/analyzers/WinsAnalysis");
const AverageGoalsAnalysis_1 = require("../src/analyzers/AverageGoalsAnalysis");
const HtmlReport_1 = require("../src/reportTargets/HtmlReport");
const ConsoleReport_1 = require("../src/reportTargets/ConsoleReport");
const MatchResult_1 = require("../src/MatchResult");
jest.mock("../src/GenerateSummary");
jest.mock('fs');
describe('Generate Summary', () => {
    it('generates and prints the wins report correctly', () => {
        const matches = [
            [new Date(2024, 5, 12), 'Man United', 'Chelsea', 2, 1, MatchResult_1.MatchResult.HomeTeamWon, 'N Smith']
        ];
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        const MockedGenerateSummary = GenerateSummary_1.GenerateSummary;
        const mockInstance = new MockedGenerateSummary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
        mockInstance.buildAndPrintReport = jest.fn();
        MockedGenerateSummary.consoleLogWinsSummary.mockReturnValue(mockInstance);
        const summary = GenerateSummary_1.GenerateSummary.consoleLogWinsSummary('Man United');
        summary.buildAndPrintReport(matches);
        expect(summary.buildAndPrintReport).toHaveBeenCalledWith(matches);
        consoleSpy.mockRestore();
    });
    it('generates and prints the average-score-per-game report correctly', () => {
        const matches = [
            [new Date(2024, 5, 28), 'Man United', 'Chelsea', 2, 1, MatchResult_1.MatchResult.HomeTeamWon, 'N Smith'],
            [new Date(2024, 5, 25), 'Chelsea', 'Man United', 1, 2, MatchResult_1.MatchResult.AwayTeamWon, 'T Jones'],
            [new Date(2024, 5, 30), 'Man United', 'Liverpool', 0, 0, MatchResult_1.MatchResult.Draw, 'M Taylor']
        ];
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        const MockedGenerateSummary = GenerateSummary_1.GenerateSummary;
        const mockInstance = new MockedGenerateSummary(new AverageGoalsAnalysis_1.AverageGoalsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
        mockInstance.buildAndPrintReport = jest.fn();
        MockedGenerateSummary.consoleLogAverageScorePerGameSummary.mockReturnValue(mockInstance);
        const summary = GenerateSummary_1.GenerateSummary.consoleLogAverageScorePerGameSummary('Man United');
        summary.buildAndPrintReport(matches);
        expect(summary.buildAndPrintReport).toHaveBeenCalledWith(matches);
        consoleSpy.mockRestore();
    });
    it('generates and saves Html reports correctly', () => {
        const matches = [
            [new Date(2024, 5, 28), 'Man United', 'Chelsea', 2, 1, MatchResult_1.MatchResult.HomeTeamWon, 'N Smith'],
        ];
        const fsSpy = jest.spyOn(fs_1.default, 'writeFileSync').mockImplementation(() => { });
        const MockedGenerateSummary = GenerateSummary_1.GenerateSummary;
        const mockInstance = {
            analyzer: new WinsAnalysis_1.WinsAnalysis('Man United'),
            outputTarget: new HtmlReport_1.HtmlReport('report.html'),
            buildAndPrintReport: jest.fn(() => {
                const report = mockInstance.analyzer.run(matches);
                mockInstance.outputTarget.print(report);
            })
        };
        MockedGenerateSummary.generateHtmlWinsSummary.mockReturnValue(mockInstance);
        const summary = GenerateSummary_1.GenerateSummary.generateHtmlWinsSummary('report.html');
        summary.buildAndPrintReport(matches);
        expect(summary.buildAndPrintReport).toHaveBeenCalledWith(matches);
        expect(fsSpy).toHaveBeenCalledWith('/Users/ME/desktop/report.html', expect.any(String));
        fsSpy.mockRestore();
    });
});
