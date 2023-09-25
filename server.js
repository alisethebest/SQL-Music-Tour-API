// DEPENDENCIES
require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");

const eventsRoutes = require("./routes/events");
const stagesRoutes = require("./routes/stages");

app.use("/events", eventsRoutes);
app.use("/stages", stagesRoutes);
// Initialize Sequelize with the connection string from the .env file
const sequelize = new Sequelize(process.env.PG_URI);

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

// CONFIGURATION / MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

testConnection(); // Invoke the function to test the database connection

// ROOT
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tour API",
  });
});

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
