# Event Management Application

This is a full-stack event management application that allows users to create, update, and manage events, track sessions, and integrate with an external API to fetch weather information for event locations. This application uses Node.js, MongoDB, and includes deployment on Render and Netlify.

## Features

- User Registration and Login
- Create, Read, Update, and Delete (CRUD) operations for events
- Track user sessions
- Integrate with a weather API to fetch and display weather information for event locations
- Secure storage of user information and sessions

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- React.js
- Axios
- JWT (JSON Web Tokens)
- Render (for backend deployment)
- Netlify (for frontend deployment)

## Setup

### Backend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/event-management-app.git
   cd event-management-app/backend   

2. **Install dependencies:**
    ```bash
    npm install

3. **Create a .env file in the backend directory with the following content:**
   ```bash
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
4.**Run the backend server:**
    ```bash
       npm start
## Frontend

1.**Navigate to the frontend directory:**

      cd ../frontend
       
2.**Install dependencies:**
     
      npm install

3.**Create a .env file in the frontend directory with the following content:**

    REACT_APP_API_URL=http://localhost:5000/api

4.**Run the frontend development server:**

    npm start


