const { members } = require('./mockdata/members');

const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware (both api.use lines) intercepts the incoming data and formats it in a way thats acceptable before it reaches the post api
/*
The express.urlencoded({extended: true}) method is a method built into Express.js. It takes incoming POST data 
and converts it to key/value pairings that can be accessed in the req.body object

extended: true option set inside the method call informs our server that there may be sub-array data nested in it as well, so it needs 
to look as deep into the POST data as possible to parse all of the data correctly.
*/

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//
function filterByQuery(query, membersArray) {
    let filteredResults = membersArray;
    if (query.dept) {
        filteredResults = filteredResults.filter(members => members.dept === query.dept);
    }
    if (query.name) {
        filteredResults = filteredResults.filter(members => members.name === query.name);
    }
    return filteredResults;
};

app.get('/api/members', (req, res) => {
    let results = members;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

function findById(id, animalsArray) {
    const result = animals.filter(animal => animal.id === id)[0];
    return result;
}

app.get('/api/members/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
      } else {
        res.send(404);
      }
});

app.post('/api/members', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});


// Use ->     http://localhost:3001/     and add whatever api route to test
