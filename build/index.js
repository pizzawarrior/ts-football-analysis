"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const GenerateSummary_1 = require("./GenerateSummary");
// load and parse the csv file
let csvFileName = 'football.csv';
const parseCsvFile = MatchReader_1.MatchReader.newMatch(csvFileName);
parseCsvFile.load();
// use static methods to run operations instead of having to create an instance of each class
const logWinsSummary = GenerateSummary_1.GenerateSummary.consoleLogWinsSummary('Man United');
logWinsSummary.buildAndPrintReport(parseCsvFile.matches);
const logAverageScorePerGameSummary = GenerateSummary_1.GenerateSummary.consoleLogAverageScorePerGameSummary('Man United');
logAverageScorePerGameSummary.buildAndPrintReport(parseCsvFile.matches);
const htmlWinsSummary = GenerateSummary_1.GenerateSummary.generateHtmlWinsSummary('Wins_Analysis.html');
htmlWinsSummary.buildAndPrintReport(parseCsvFile.matches);
