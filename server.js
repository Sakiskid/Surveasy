const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// Use apiRoutes with express, and allow body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(apiRoutes);

// Define Middleware
if (process.env.NODE_ENV === "production") {
    app.use(express.static('./client/build'));
}

// Connect to the Mongo DB
mongoose.connect(
    // Use MONGODB URI from environment, otherwise use local database
    process.env.MONGODB_URI || "mongodb://localhost/surveydb",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);


// Send every HTML route to React App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Listen on env port
app.listen(PORT, () => {
    console.log("Listening on port", PORT + "...");
});