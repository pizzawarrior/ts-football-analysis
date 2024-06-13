import { FormatDataRow } from "./FormatDataRow";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalsAnalysis";

export interface Analyzer {
    run(matches: FormatDataRow[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

// using static methods will create the instance for each class
export class GenerateSummary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    static consoleLogWinsSummary(teamName: string): GenerateSummary {
        return new GenerateSummary(new WinsAnalysis(teamName), new ConsoleReport());
    }

    static consoleLogAverageScorePerGameSummary(teamName: string): GenerateSummary {
        return new GenerateSummary(new AverageGoalsAnalysis(teamName), new ConsoleReport())
    }

    static generateHtmlWinsSummary(teamName: string): GenerateSummary {
        return new GenerateSummary(new WinsAnalysis(teamName), new HtmlReport(teamName))
    }

    buildAndPrintReport(matches: FormatDataRow[]): void {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report)
    }
}
