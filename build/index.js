"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const AverageGoalsAnalysis_1 = require("./analyzers/AverageGoalsAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const GenerateSummary_1 = require("./GenerateSummary");
let csvFileName = 'football.csv';
// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader(csvFileName);
// create an instance of MatchReader and pass in the object that satisfies the DataReader interface
const newMatch = new MatchReader_1.MatchReader(csvFileReader);
newMatch.load();
// create instances of all classes and pass in required objects
const generateWinsSummary = new GenerateSummary_1.GenerateSummary(new WinsAnalysis_1.WinsAnalysis(), new ConsoleReport_1.ConsoleReport());
const generateAverageScorePerGameSummary = new GenerateSummary_1.GenerateSummary(new AverageGoalsAnalysis_1.AverageGoalsAnalysis(), new ConsoleReport_1.ConsoleReport());
generateWinsSummary.buildAndPrintReport(newMatch.matches);
generateAverageScorePerGameSummary.buildAndPrintReport(newMatch.matches);
