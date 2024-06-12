"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateSummary = void 0;
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const AverageGoalsAnalysis_1 = require("./analyzers/AverageGoalsAnalysis");
// using static methods will create the instance for each class
class GenerateSummary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static consoleLogWinsSummary(teamName) {
        return new GenerateSummary(new WinsAnalysis_1.WinsAnalysis(teamName), new ConsoleReport_1.ConsoleReport());
    }
    static consoleLogAverageScorePerGameSummary(teamName) {
        return new GenerateSummary(new AverageGoalsAnalysis_1.AverageGoalsAnalysis(teamName), new ConsoleReport_1.ConsoleReport());
    }
    static generateHtmlWinsSummary(teamName) {
        return new GenerateSummary(new WinsAnalysis_1.WinsAnalysis(teamName), new HtmlReport_1.HtmlReport(teamName));
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.GenerateSummary = GenerateSummary;
