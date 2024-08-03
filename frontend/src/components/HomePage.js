import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { createEvent } from "../services/api";
import { getEvents } from "../services/api";
const HomePage = ({ loginUser }) => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getEvents();
        setEvents(events);
      } catch (error) {
        setError(true);
        console.error("Failed to fetch events:", error);
      }
    };
    fetchEvents();
  }, [events]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEvents = await createEvent({
        name,
        date,
        location,
        description,
      });
      setEvents([...newEvents, events]);
    } catch (error) {
      console.error("Event creation failed:", error);
    }
  };

  return (
    <div className="home-container">
      <h1 className="events-head">Welcome to Event Management App</h1>
      <div>
        <form className="home-form" onSubmit={handleSubmit}>
          <div>
            <label>Name :</label>
            <input
              placeholder="Enter Event"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Date :</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Location :</label>
            <input
              placeholder="Enter Location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="desc-div">
            <label>Description :</label>
            <textarea
              value={description}
              rows="4"
              cols={50}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="write about event..."
            />
          </div>
          <button type="submit">Create Event</button>
          {loginUser && error && <p>please login user</p>}
        </form>
        <div>
          <h2 className="events-head">Events</h2>
          <ul>
            {events.length > 0 ? (
              events.map((event) => (
                <li key={event._id}>
                  <h3>{event.name}</h3>
                  <p>{event.description}</p>
                  <p>{new Date(event.date).toLocaleDateString()}</p>
                  <p>{event.location}</p>
                </li>
              ))
            ) : (
              <div className="no-events">
                <h4>There are no events yet</h4>
                <p>Let's create</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
