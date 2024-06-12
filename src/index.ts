import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { GenerateSummary } from "./GenerateSummary";


let csvFileName = 'football.csv';

// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader(csvFileName);

// create an instance of MatchReader and pass in the object that satisfies the DataReader interface
const newMatch = new MatchReader(csvFileReader);
newMatch.load();

// use static methods to run operations instead of having to create an instance of each class
const logWinsSummary = GenerateSummary.consoleLogWinsSummary('Man United')
logWinsSummary.buildAndPrintReport(newMatch.matches)

const logAverageScorePerGameSummary = GenerateSummary.consoleLogAverageScorePerGameSummary('Man United')
logAverageScorePerGameSummary.buildAndPrintReport(newMatch.matches)

const htmlWinsSummary = GenerateSummary.generateHtmlWinsSummary('Wins_Analysis.html')
htmlWinsSummary.buildAndPrintReport(newMatch.matches)
