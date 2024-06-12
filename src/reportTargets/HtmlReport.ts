import fs from 'fs'
import { OutputTarget } from "../GenerateSummary";

export class HtmlReport implements OutputTarget {
    constructor(public fileName: string) {}
    print(report: string): void {
        const htmlPayload = `
        <div>
        <h1>Analysis Report</h1>
        <p>${report}</p>
        </div>
        `
        try {
            fs.writeFileSync(`/Users/ME/desktop/${this.fileName}`, htmlPayload);
            console.log(`${this.fileName} has been saved to the desktop`)
        } catch (err) {
            console.error(err);
        }
    }
}
