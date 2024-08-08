# Pos System

## Development Tools

- **Node.js**
- **React.js**
- **Visual Studio Code**
- **Git**

## Web App Architecture

- **Backend:** A simple REST API using JSON Server running on `https://localhost:5000`.
- **Frontend:** Built with React, running on `https://localhost:3000`. Key technologies include React Router DOM, React-To-Print, React Toastify, Axios, and Bootstrap.

## Backend Setup

1. Ensure Node.js is installed.
2. Install JSON Server by running `npm install -g json-server`.
3. Create a `db.json` file.
4. Populate `db.json` with sample data.
5. Start the JSON Server with `json-server --watch db.json --port 5000`.

## Frontend Setup

1. Install React by running `npx create-react-app your-app-name`.
2. Clean up the default React template.
3. Create two pages: Home and POS, using React Router DOM.
4. Integrate Bootstrap for styling.
5. Design the application's layout.
6. Develop the Home page.
7. Develop the POS page.
