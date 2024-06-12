import { OutputTarget } from "../GenerateSummary";

export class ConsoleReport implements OutputTarget {
    print(report: string): void {
        console.log(report)
    }
}
