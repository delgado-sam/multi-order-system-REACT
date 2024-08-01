# Multi-Order System

The Multi-Order System is a web application designed to allow users to browse multiple restaurants, place orders, and manage their orders in a centralized food court environment. Users can mix and match items from different restaurants, customize their orders, and track the status of their orders in real-time.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Technologies Used](#technologies-used)

## Features

- Restaurant Browsing: Users can browse through a list of available restaurants, each with detailed information and menu options.
- Order Customization: Customize orders with dietary preferences, special instructions, and ingredient options.
- Centralized Pickup: Orders from multiple restaurants can be picked up at a single location.
- - User Accounts: Users can create accounts, view their order history, and participate in a loyalty program.
- Responsive Design: The application is fully responsive and works across devices including desktops, tablets, and mobile phones.

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/multi-order-system.git
cd multi-order-system
```

### Install dependencies for the client

```bash
cd client
npm install
```

### Install dependencies for the server

```bash
cd ../server
npm install
```

## Running the Application

You can use the root package.json to run both client and server concurrently.

### 1. In the root directory, start the client and server

```bash
npm run dev
```

### 2. Runs the app in the development mode

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Testing

### Run tests for the client

```bash
cd client
npm test
```

## Technologies Used

Frontend:
React.js
Material-UI (MUI) for styling and UI components
React Router for navigation
Axios

Backend:
Node.js
Express.js
MongoDB for the database
UUID for generating unique IDs
