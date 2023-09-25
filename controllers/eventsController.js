const { Event } = require("../models"); // replace with your actual Event model

exports.index = async (req, res) => {
  const events = await Event.findAll({
    order: [["date", "ASC"]],
  });
  res.json(events);
};

exports.show = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  res.json(event);
};

exports.create = async (req, res) => {
  const event = await Event.create(req.body);
  res.json(event);
};

exports.update = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  await event.update(req.body);
  res.json(event);
};

exports.delete = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  await event.destroy();
  res.json({ message: "Event deleted" });
};
