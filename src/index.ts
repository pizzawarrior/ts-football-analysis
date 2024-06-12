import { MatchReader } from "./MatchReader";
import { GenerateSummary } from "./GenerateSummary";

// load and parse the csv file
let csvFileName = 'football.csv';
const parseCsvFile = MatchReader.newMatch(csvFileName)
parseCsvFile.load();

// use static methods to run operations instead of having to create an instance of each class
const logWinsSummary = GenerateSummary.consoleLogWinsSummary('Man United')
logWinsSummary.buildAndPrintReport(parseCsvFile.matches)

const logAverageScorePerGameSummary = GenerateSummary.consoleLogAverageScorePerGameSummary('Man United')
logAverageScorePerGameSummary.buildAndPrintReport(parseCsvFile.matches)

const htmlWinsSummary = GenerateSummary.generateHtmlWinsSummary('Wins_Analysis.html')
htmlWinsSummary.buildAndPrintReport(parseCsvFile.matches)
