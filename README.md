
```markdown
# Safar-Bike Taxi Booking Website

## Project Description
Safar-Bike is a modern taxi booking website designed to provide an intuitive platform for both users (passengers) and captains (drivers). The system enables users to book rides easily while allowing captains to log in and manage their ride information. The website is designed with React and Vite, offering a smooth user experience with dynamic navigation, authentication, and registration features for both user types. 

### Key Features
1. **User Registration & Login:**
   - Users can register with their personal details, including their first name, last name, email, and password.
   - Users can log in to their accounts to book rides.

2. **Captain Registration & Login:**
   - Captains (drivers) can register with their personal and vehicle details, such as vehicle type, number plate, and capacity.
   - Captains can log in to manage their ride assignments.

3. **Authentication:**
   - Both users and captains authenticate using their email and password, receiving JWT tokens to access protected routes and services.

4. **Home Page:**
   - The landing page includes a call-to-action button to guide users to the login page, offering an inviting and easy-to-navigate interface.

5. **Responsive Design:**
   - The website is responsive, ensuring a seamless experience across different devices.

## Technologies Used
- **React**: A JavaScript library used for building the user interface.
- **Vite**: A next-generation frontend tool that enables faster development with its hot module replacement.
- **Tailwind CSS**: A utility-first CSS framework used to style the application with custom designs and layouts.
- **React Router**: A routing library to handle navigation between the various pages, such as Home, User Login, and Captain Login.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/palsoumaditya/safar-bike-taxi-booking.git
   ```
2. Navigate to the project directory:
   ```bash
   cd safar-bike-taxi-booking/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project
1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Structure
```plaintext
frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── logo/
│   │   │   └── logo.png
│   │   └── home/
│   │       └── home.jpg
│   ├── components/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Userlogin.jsx
│   │   └── Captainlogin.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## API Overview

### `/user/register` Endpoint
- **HTTP Method**: `POST`
- **Description**: Registers a new user in the system.

### `/user/login` Endpoint
- **HTTP Method**: `POST`
- **Description**: Authenticates a user and returns an authentication token along with user details.

### `/user/logout` Endpoint
- **HTTP Method**: `GET`
- **Description**: Logs out the authenticated user by invalidating their JWT token.

### `/user/profile` Endpoint
- **HTTP Method**: `GET`
- **Description**: Fetches the profile of the authenticated user.

### `/captain/register` Endpoint
- **HTTP Method**: `POST`
- **Description**: Registers a new captain in the system.

### `/captain/login` Endpoint
- **HTTP Method**: `POST`
- **Description**: Authenticates a captain and returns an authentication token along with captain details.

### `/captain/logout` Endpoint
- **HTTP Method**: `GET`
- **Description**: Logs out the authenticated captain by invalidating their JWT token.

### `/captain/profile` Endpoint
- **HTTP Method**: `GET`
- **Description**: Fetches the profile of the authenticated captain.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Contact
For any questions or inquiries, please contact [soumadityapal@outlook.com](mailto:soumadityapal@outlook.com).
```

You can copy this content into a `README.md` file in your project repository to provide a detailed overview and setup instructions for contributors and developers.
