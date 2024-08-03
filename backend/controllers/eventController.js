const Event = require("../models/Event");
const jwt = require("jsonwebtoken");

const createEvent = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name, date, location, description } = req.body;
    const event = new Event({
      userId: decoded.userId,
      name,
      date,
      location,
      description,
    });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEvents = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const events = await Event.find({ userId: decoded.userId });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createEvent, getEvents, updateEvent, deleteEvent };
