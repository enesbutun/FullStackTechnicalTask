# Sleep Tracker App

This is the Sleep Tracker application.

## Run Locally

### Server

- Navigate to server application `cd /server` in terminal
- Install dependencies by running `npm i` in terminal
- Start the DB (Postgresql) container with `docker compose up`
- Create .env file and put the following definition for DB url
  ```js
  DATABASE_URL = "postgresql://root:root@localhost:5432/sleeper";
  ```
- **TODO**: What else is needed?
- Finally start the server with `npm run dev`

### Client

- Navigate to client application folder `cd /client`
- Install dependencies by running `npm i`
- Run `npm run dev` in terminal


# Cynomi Tech Task

## Project Description

The project is a web application built with React and TypeScript. It demonstrates core competencies in frontend, backend, and database integration. The application allows users to input sleep data, which is then stored in a MongoDB Atlas database. Users can also view the stored data in a table format.

## Technologies Used

- **Frontend:**
  - React
  - TypeScript
  - Axios
  - React-Router-Dom
  - React-Toastify
  - React-Datepicker
  - Date-fns
  - CSS for styling

- **Backend:**
  - Node.js
  - Express.js
  - Mongoose
  - dotenv

- **Database:**
  - MongoDB (with Mongoose for ORM)

## Components

### 1. `SleepForm.tsx`

The `SleepForm` component is responsible for rendering a form that allows users to input their sleep data, including their name, gender, sleep duration, and date. It uses the following libraries:

- **Axios:** To make HTTP requests to the backend API.
- **React-Toastify:** To show success or error messages upon form submission.
- **React-Datepicker:** To provide a date picker for selecting the date.
- **Date-fns:** To format the date before sending it to the backend.

