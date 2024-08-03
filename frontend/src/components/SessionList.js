import React, { useEffect, useState } from "react";
import { getSessions } from "../services/api";

const SessionList = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const sessions = await getSessions();
        setSessions(sessions);
      } catch (error) {
        console.error("Failed to fetch sessions:", error);
      }
    };
    fetchSessions();
  }, []);

  return (
    <div className="session-container">
      <h2>Sessions</h2>
      <ul>
        {sessions.map((session) => (
          <li key={session._id}>
            <p>Login Time: {new Date(session.loginTime).toLocaleString()}</p>
            <p>
              Logout Time:{" "}
              {session.logoutTime
                ? new Date(session.logoutTime).toLocaleString()
                : "N/A"}
            </p>
            <p>IP Address: {session.ipAddress}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionList;
