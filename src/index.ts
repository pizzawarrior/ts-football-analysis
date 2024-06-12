import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { GenerateSummary } from "./GenerateSummary";


let csvFileName = 'football.csv';

// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader(csvFileName);

// create an instance of MatchReader and pass in the object that satisfies the DataReader interface
const newMatch = new MatchReader(csvFileReader);
newMatch.load();

// create instances of all classes and pass in required objects
const winsAnalysis = new WinsAnalysis()
const averageGoalsAnalysis = new AverageGoalsAnalysis()
const consoleReport = new ConsoleReport()
const generateWinsSummary = new GenerateSummary(winsAnalysis, consoleReport)
const generateAverageScorePerGameSummary = new GenerateSummary(averageGoalsAnalysis, consoleReport)

generateWinsSummary.buildAndPrintReport(newMatch.matches)
generateAverageScorePerGameSummary.buildAndPrintReport(newMatch.matches)
