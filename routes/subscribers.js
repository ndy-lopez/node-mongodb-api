const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

// Create a subscriber
router.post("/", (req, res) => {
  res.send("Subscriber created");
});

// Read all subscribers
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read one subscriber by ID
router.get("/:id", (req, res) => {
  res.send(`Subscriber with ID ${req.params.id}`);
});

// Update a subscriber by ID
router.patch("/:id", (req, res) => {
  res.send(`Updated subscriber with ID ${req.params.id}`);
});

// Delete a subscriber by ID
router.delete("/:id", (req, res) => {
  res.send(`Deleted subscriber with ID ${req.params.id}`);
});

module.exports = router;
