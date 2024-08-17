# ItemHub

[Live Website](https://login-reg-temp.web.app/)

ItemHub is your one-stop destination for finding high-quality products at competitive prices. We strive to offer a wide range of items across multiple categories, ensuring that every customer finds exactly what they're looking for. Whether it's the latest tech gadgets, home essentials, or fashion trends, we have it all. Our easy-to-use platform makes shopping a seamless and enjoyable experience.

## Features

- **Product Search**: Search for products by name.
- **Categorization**:
  - Filter products by brand name.
  - Categorize by price range.
  - Sort by category .
- **Sorting**:
  - Sort products by price (Low to High, High to Low).
  - Sort products by date (Newest first).
- **User Authentication**: Secure user login and registration using Firebase.

## Project Setup

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)
- A Firebase account for authentication.

### Installation

1. **Clone the Repository**:
   ```bash

   cd Item-hub-client
   ```

2. **Backend Setup**:

   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `server` directory and add your environment variables:
     ```
     MONGO_URI=your_mongo_db_connection_string
     PORT=5000
     FIREBASE_API_KEY=your_firebase_api_key
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**:

   - Navigate to the `client` directory:
     ```bash
     cd ../client
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `client` directory and add your Firebase configuration:
     ```
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Access the Website**:

   - Open your browser and navigate to `http://localhost:3000`.

## Running the Project Locally

1. Ensure MongoDB is running on your local machine or use a cloud MongoDB service like MongoDB Atlas.
2. Start the backend server as described above.
3. Start the frontend server as described above.
4. Access the site at `http://localhost:3000`.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Authentication**: Firebase

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
