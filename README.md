# Project Title
JourneyNook

Checkout the Backend code at: [JourneyNook API Repository](https://github.com/b-like-bahar/JourneyNook.git)

## Overview

JourneyNook is an AI-powered travel itinerary planner that helps users generate personalized trip plans tailored to their preferences. Whether you're planning a quick getaway or a long vacation, JourneyNook simplifies the process by automatically creating detailed itineraries based on the number of days, budget, and trip type. In addition to itinerary creation, users can explore cities and discover key landmarks and attractions within each destination, gaining insights into must-see locations.

### APIs
OpenAI API: The OpenAI API powers the AI-driven itinerary generation feature in JourneyNook.

### API Routes:
The JourneyNook backend provides several API routes to access cities, attractions, and generate trip itineraries. Below is an overview of the available API endpoints and their functions.
 ***Base URL***
 - For local development: http://localhost:PORT
 - Replace PORT with the value from your .env file, typically 8080.
   
***Available API Endpoints***
 1. ***Cities API (/cities)***
      - GET /cities: Fetches a list of all cities.
      - GET /cities/:cityId: Fetches details for a specific city using the cityId.
      - GET /cities/:cityId/attractions: Fetches all attractions for a specific city by cityId.
        
2. ***Attractions API (/attractions)***
      - GET /attractions/:attractionId: Fetches details of a specific attraction by attractionId.
      
 3. ***Itinerary API  (/itinerary)***
      - POST /itinerary: Generates a trip itinerary based on the input data (days, budget, number of people, and trip type).
      - Request Body: Include the necessary data for generating an itinerary (days, budget, number of people, and trip type).
      - Middleware: Input data is validated by tripInputValidator.

## Full Project Setup 
**Note:**  
This repository was created specifically to house the backend code for the JourneyNook project, which was previously part of a combined repository containing both frontend and backend. To streamline development and deployment, the frontend and backend have been separated into their own dedicated repositories.


To run the complete project, follow the steps for both the frontend and backend:

### Backend Setup
1. **Clone this repository:**
   ```bash
   https://github.com/b-like-bahar/JourneyNook-api.git
2. **Install dependencies:**
      ```bash
   npm install
3. **Set up environment variables:**  
   The project requires a `.env` file for configuration. You can create this file based on the `.env.example` provided in the repository. 

   Copy the `.env.example` file and rename it to `.env`.

   Then, open the `.env` file and update the following variable with your own values:

    - DB_LOCAL_DBNAME: The name of your local database (e.g., journeynook).
    - DB_LOCAL_USER: The username for your database (e.g., root).
    - DB_LOCAL_PASSWORD: The password for your database user.
    - CORS_ORIGIN: The URLs that can access the backend API, including your local frontend (e.g., http://localhost:5173) and/or the 
         production URL (https://journeynook.netlify.app).
    - OPENAI_API_KEY: Your OpenAI API key for integrating OpenAI services.

3. **Run the backend server:**
   ```bash
   npm start
4. **Access the API:**
   Once the server is running, you can access the backend API at:
   ```bash
   http://localhost:PORT
   (The port can be anything you set up for your backend)
   ### Database Setup



### MySQL Setup

This project uses **MySQL** for the database and **Knex.js** for managing migrations and seeds.

Follow these steps to set up **MySQL** for the project, including creating a database, user, and selecting the correct database.

1. ***Install MySQL***
If you haven't installed **MySQL** yet, download and install it from [MySQL’s official site](https://dev.mysql.com/downloads/).

 2. ***Open MySQL Command Line or Workbench***
Once MySQL is installed, you can either open **MySQL Workbench** or access the MySQL command line by running:
    ```bash
    mysql -u root -p

You'll be prompted for your MySQL root password

 3. ***Create a New MySQL Database***
To create a new database for your project, run the following SQL command:
    ```bash
    CREATE DATABASE journeynook;
This will create a database named journeynook.

4. ***Select the Database***
Once the database is created, select it to start using it:
    ```bash
    USE journeynook;
5. ***Update Your .env File***
   Make sure the database name, user, and password match what you created in MySQL.

6. ***Run Migrations:***
   ```bash
   npx knex migrate:latest
7. ***Seed the Database:***
   ```bash
   npx knex seed:run
Once the migrations and seeds have been applied, your database will be ready for use!

   
### OpenAI API Key Setup
This project uses the OpenAI API to integrate AI-powered features. To enable these features, you'll need to obtain an OpenAI API key and set it in your .env file.

Steps to Set Up the OpenAI API Key:

1. ***Sign up for OpenAI (or log in if you already have an account):***

- Go to [OpenAI's official website](https://chatgpt.com/c/671433da-151c-8007-9a12-6f9d22827f2b#:~:text=OpenAI%27s%20official%20website) and sign up for an account. If you already have an account, simply log in.
- OpenAI offers a free tier with limited usage, but for extensive use of the API, you may need to subscribe to a paid plan. (If the intinerary in JourneyNook is not generating for you, you may need to subscribe to a pain plan)

2. ***Generate an API key:***
- After logging in, navigate to the API Keys section in your Dashboard.
- Click Create new secret key and copy the API key. Note: Make sure to copy the key immediately, as OpenAI will not show it again after you leave the page.

3. ***Update Your .env File:***
Paste your API key in the .env file
    ```bash
    OPENAI_API_KEY=sk-your-openai-api-key

4. **Save the `.env` file** and restart the application. Once configured, the AI-powered features should now work. If you encounter any issues or reach the free usage limits, consider upgrading to a paid plan for uninterrupted functionality.

### Frontend Setup

1. **Clone this repository:**
   ```bash
   git clone https://github.com/b-like-bahar/JourneyNook.git
   
2. **Install dependencies:**
   ```bash
   npm install

3. **Set up environment variables:**  
   The project requires a `.env` file for configuration. You can create this file based on the `.env.example` provided in the repository. 

   Copy the `.env.example` file and rename it to `.env`.

   Then, open the `.env` file and update the following variable with the correct value for example:

   ```bash
   VITE_API_URL=http://localhost:8080
   
   (The port can be anything you set up for your backend)
4. **Run the development server:**
   ```bash
    npm run dev
   