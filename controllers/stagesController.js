const { Stage } = require('../models');  // Import your Stage model

// List all stages
exports.index = async (req, res) => {
  const stages = await Stage.findAll();
  res.json(stages);
};

// Show a single stage by ID
exports.show = async (req, res) => {
  const stage = await Stage.findByPk(req.params.id);
  if (!stage) {
    return res.status(404).json({ message: 'Stage not found' });
  }
  res.json(stage);
};

// Create a new stage
exports.create = async (req, res) => {
  const stage = await Stage.create(req.body);
  res.status(201).json(stage);
};

// Update an existing stage
exports.update = async (req, res) => {
  const stage = await Stage.findByPk(req.params.id);
  if (!stage) {
    return res.status(404).json({ message: 'Stage not found' });
  }
  await stage.update(req.body);
  res.json(stage);
};

// Delete a stage
exports.delete = async (req, res) => {
  const stage = await Stage.findByPk(req.params.id);
  if (!stage) {
    return res.status(404).json({ message: 'Stage not found' });
  }

}