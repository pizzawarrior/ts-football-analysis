"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const GenerateSummary_1 = require("./GenerateSummary");
let csvFileName = 'football.csv';
// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader(csvFileName);
// create an instance of MatchReader and pass in the object that satisfies the DataReader interface
const newMatch = new MatchReader_1.MatchReader(csvFileReader);
newMatch.load();
// use static methods to run operations instead of having to create an instance of each class
const logWinsSummary = GenerateSummary_1.GenerateSummary.consoleLogWinsSummary('Man United');
logWinsSummary.buildAndPrintReport(newMatch.matches);
const logAverageScorePerGameSummary = GenerateSummary_1.GenerateSummary.consoleLogAverageScorePerGameSummary('Man United');
logAverageScorePerGameSummary.buildAndPrintReport(newMatch.matches);
const htmlWinsSummary = GenerateSummary_1.GenerateSummary.generateHtmlWinsSummary('Wins_Analysis.html');
htmlWinsSummary.buildAndPrintReport(newMatch.matches);
