const express = require("express");
const router = express.Router();
const stagesController = require("../controllers/stagesController");

// List all stages
router.get("/", stagesController.index);

// Show a single stage by ID
router.get("/:id", stagesController.show);

// Create a new stage
router.post("/", stagesController.create);

// Update an existing stage
router.put("/:id", stagesController.update);

// Delete a stage
router.delete("/:id", stagesController.delete);

module.exports = router;
