## Objective
This project is aimed at extending OOP in Typescsript, using various conventional approaches including inheritance and composition. The theme of the project is to take raw football (european soccer) data from a .csv file, parse it, format it, and perform basic analyses on it.

## Environment/ Frameworks
We use Node for package management, and Jest for the testing suite.

## Running This Project
Make sure you are in the root directory <br/>
- To run the project:
`npm start`

- To run tests:
`npm t`

- In the `index.ts` file you are able to specify the filename of the csv you would like to parse.
- You are also able to specify the team name that you would like to run analyses on. 'Man United' has been provided by default.
- The `GenerateSummary` class takes an `Analyzer` and an `OutputTarget` interface as arguments. There are two options for each of these: For the `Analyzer` we can either select `WinsAnalysis`, which will calculate the total wins for the specified team for the season, or `AverageGoalsAnalysis`, which will return the average goals across all games played for the specified team for the season. For `OutputTarget`, we can either choose `ConsoleReport`, which will log the result of the selected Analyzer to the console, or `HtmlReport`, which will save the result as an HTML file to the desktop.

## Class Implementation
<img width="1041" alt="Inheritance" src="https://github.com/pizzawarrior/ts-football-analysis/assets/94874182/8843dbaa-e4c4-4754-82c9-22d0e2a4207d"> \
\
<img width="1047" alt="Composition" src="https://github.com/pizzawarrior/ts-football-analysis/assets/94874182/9c98143d-d7c3-4780-b0c2-6db4e7770980">
