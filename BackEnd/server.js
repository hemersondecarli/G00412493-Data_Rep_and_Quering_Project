// Import modules
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Configure body-parser for handling JSON and URL-encoded data
const bodyParser = require("body-parser");

// Here we are configuring express to use body-parser as middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  //mongodb acc
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.uawxsvj.mongodb.net/');
}

// Define the schema for the 'pokemon_gg' collection
const pokeSchema = new mongoose.Schema({
  location: String,
  cover: String,
  description: String,
  date: String
});

// Create a model based on the schema
const pokeModel = mongoose.model('pokemon_gg', pokeSchema);

// DELETE endpoint to delete a pokemon by ID
app.delete('/api/trip/:id', async (req, res) => {
  console.log("Delete: " + req.params.id);

  let trip = await pokeModel.findByIdAndDelete(req.params.id);
  res.send(trip);
});

// PUT endpoint to update a pokemon by ID
app.put('/api/trip/:id', async(req, res) => {
  console.log("Update: " + req.params.id);

  let trip = await pokeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(trip);
});

// POST endpoint to create a new pokemon
app.post('/api/trip', (req, res) => {
  console.log(req.body);

  pokeModel.create({
    location: req.body.location,
    cover: req.body.cover,
    description: req.body.description,
    date: req.body.date
  })
  .then(() => { res.send("Trip Created"); })
  .catch(() => { res.send("Trip NOT Created"); });

});

// GET endpoint to retrieve all pokemons
app.get('/', (req, res) => {
  res.send('PokeWorld!');
});

app.get('/api/trips', async(req, res) => {
  let trips = await pokeModel.find({});
  res.json(trips);
});

app.get('/api/trip/:identifier', async (req, res) => {
  console.log(req.params.identifier);

  let trip = await pokeModel.findById(req.params.identifier);
  res.send(trip);
});

// Start the server
app.listen(port, () => {
  console.log(`poke App listening on port ${port}`);
});
