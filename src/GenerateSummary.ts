import { FormatDataRow } from "./FormatDataRow";

export interface Analyzer {
    run(matches: FormatDataRow[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class GenerateSummary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: FormatDataRow[]): void {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report)
    }
}
