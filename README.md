# Podcast App

## Overview
The Podcast App is a web application developed as a capstone project for the CodeSpace Software Development Program. It allows users to browse various podcast shows, play episodes, and track their favorite episodes. The app is built using [framework/technology], making use of the podcast API to fetch relevant data.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation
To run the Podcast App locally, follow these steps:

1. Clone the repository:
    ```
    git clone https://github.com/your-username/podcast-app.git
    ```

2. Navigate to the project directory:
    ```
    cd podcast-app
    ```

3. Install dependencies:
    ```
    npm install
    ```

## Usage
### Development Server
Run the app in development mode:
    ```
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Production Build
To build the app for production:
    ```
    npm run build
    ```
    This command creates an optimized production build in the `build` folder.

## Technology Stack
- **[Framework/Technology]:** The framework used for the project React.Js.

- **[Additional Technologies]:** Also used supabase for authentication, database data fetching and adding favourites to the user's account.

## Project Structure
Describe the organization of the project's code. Highlight important directories or files.
```lua
podcast-app/
|-- public/
|-- src/
|   |-- components/
|   |-- pages/
|   |-- services/
|   |-- styles/
|   |-- App.js
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md

# Deployment
The Podcast App is deployed to Netlify. Visit the live app at Your Netlify URL.

# Configuration
API Configuration
The app fetches data from the Podcast API. Ensure that the API is accessible and properly configured in the app.

# Favicon and Metatags
The app uses RealFaviconGenerator for favicon generation and MetaTags.io for metatag information. Update the URLs in the generated HTML files with absolute Netlify URLs.

# Contributing
If you would like to contribute to the development of the Podcast App, please follow the contribution guidelines.

# License
This project is licensed under the MIT License.