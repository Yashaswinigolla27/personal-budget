const express = require('express');
const app = express();
const port = 3030;

app.use('/', express.static('public'));



const fs = require('fs');
// Read the JSON file
const jsonData = fs.readFileSync('budget.json', 'utf8');
// Parse the JSON data
const budgetData = JSON.parse(jsonData);
// Access the budget data using the 'budget' variable
console.log(budgetData);


app.get('/hello', (req, res) => {
    res.send('Hello World!!');
});

app.get('/budget', (req, res) => {
    res.json(budgetData);
});


app.listen(port, () => {
    console.log(`serving at http://localhost:${port}`)
});

