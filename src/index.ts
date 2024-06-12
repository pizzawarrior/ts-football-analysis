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
const generateWinsSummary = new GenerateSummary(new WinsAnalysis(), new ConsoleReport())
const generateAverageScorePerGameSummary = new GenerateSummary(new AverageGoalsAnalysis(), new ConsoleReport())

generateWinsSummary.buildAndPrintReport(newMatch.matches)
generateAverageScorePerGameSummary.buildAndPrintReport(newMatch.matches)
