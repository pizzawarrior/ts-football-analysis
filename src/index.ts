import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { GenerateSummary } from "./GenerateSummary";


let csvFileName = 'football.csv';

// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader(csvFileName);

// create an instance of MatchReader and pass in the object that satisfies the DataReader interface
const newMatch = new MatchReader(csvFileReader);
newMatch.load();

// create instances of all classes and pass in required objects
const consoleLogWinsSummary = new GenerateSummary(new WinsAnalysis(), new ConsoleReport())
const consoleLogAverageScorePerGameSummary = new GenerateSummary(new AverageGoalsAnalysis(), new ConsoleReport())

consoleLogWinsSummary.buildAndPrintReport(newMatch.matches)
consoleLogAverageScorePerGameSummary.buildAndPrintReport(newMatch.matches)

// generate html wins report
const generateHtmlWinsSummary = new GenerateSummary(new WinsAnalysis, new HtmlReport('Wins_Summary.html'))
generateHtmlWinsSummary.buildAndPrintReport(newMatch.matches)
