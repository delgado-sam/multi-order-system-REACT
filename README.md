Multi-Order System
Overview
The Multi-Order System is a web application designed to allow users to browse multiple restaurants, place orders, and manage their orders in a centralized food court environment. Users can mix and match items from different restaurants, customize their orders, and track the status of their orders in real-time.

Features
Restaurant Browsing: Users can browse through a list of available restaurants, each with detailed information and menu options.
Order Customization: Customize orders with dietary preferences, special instructions, and ingredient options.
Centralized Pickup: Orders from multiple restaurants can be picked up at a single location.
User Accounts: Users can create accounts, view their order history, and participate in a loyalty program.
Responsive Design: The application is fully responsive and works across devices including desktops, tablets, and mobile phones.

Technologies Used
Frontend:
React.js
Material-UI (MUI) for styling and UI components
React Router for navigation
Backend:
Node.js
Express.js
MongoDB for the database
UUID for generating unique IDs
Dev Tools:
Nodemon for auto-restarting the server during development
Concurrently for running the client and server simultaneously
Other Libraries:
Axios for API calls
Cors for handling cross-origin requests
Body-Parser for parsing incoming request bodies

Installation
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/multi-order-system.git
cd multi-order-system
Install dependencies:

For the server:

bash
Copy code
cd server
npm install
For the client:

bash
Copy code
cd ../client
npm install
Run the development environment:

Go back to the root directory and run:

bash
Copy code
npm run dev
This will start both the client and server using concurrently.

Access the application:

Open your browser and navigate to http://localhost:3000.
