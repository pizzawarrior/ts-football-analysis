"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateSummary = void 0;
class GenerateSummary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.GenerateSummary = GenerateSummary;
