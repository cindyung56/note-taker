// Import required modules and js files
const express = require("express");
const fs = require("fs");
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// PORT to connect to server and start using express
const PORT = process.env.port || 3001;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use the public folder
app.use(express.static('public'));

// initial link should go to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// /notes should go to the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})


// connecting back-end to front-end

app.get('/api/notes', (req, res) => {
    console.log(`${req.method} request received`);
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if(err){
            console.error(err);
        }
        const storedData = JSON.parse(data);
        res.json(storedData); 
    })
})

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    // console.log(newNote);
    console.log(`${req.method} request received`);

    if (req.body){
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                newNote.id = uuidv4();
                console.log(newNote);
                const parsedData = JSON.parse(data);
                parsedData.push(newNote);
                fs.writeFile("./db/db.json", JSON.stringify(parsedData), (err) => {
                    err? console.error(err) : console.log("Successfully updated!")
                })
            }
        })
    } else {
        console.error("Error in adding tip");
    }

})

// listen to PORT, start server upon running
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);