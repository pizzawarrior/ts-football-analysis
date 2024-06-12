"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlReport {
    constructor(fileName) {
        this.fileName = fileName;
    }
    print(report) {
        const htmlPayload = `
        <div>
        <h1>Analysis Report</h1>
        <p>${report}</p>
        </div>
        `;
        try {
            fs_1.default.writeFileSync(`/Users/ME/desktop/${this.fileName}`, htmlPayload);
            console.log(`${this.fileName} has been saved to the desktop`);
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.HtmlReport = HtmlReport;
