Here’s an updated version of your `README.md` to reflect the new information:

```markdown
# Safar-Bike, Taxi Booking Website

## Overview
Safar-Bike is a taxi booking website designed to offer users an easy way to book rides. It supports two user types: passengers (referred to as "Users") and drivers (referred to as "Captains"). The website includes a home page, login functionalities for both users and captains, and allows users to sign in as either.

## Technologies Used
- React
- Vite
- Tailwind CSS
- React Router

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

## Components

### Home Component
**Filepath:** `src/pages/Home.jsx`

The Home component is the landing page for the website. It features a background image, logo, and a call-to-action button that directs users to the login page.

### User Login Component
**Filepath:** `src/pages/Userlogin.jsx`

The User Login component allows users to log in with their email and password. It also provides a link to create a new account.

### Captain Login Component
**Filepath:** `src/pages/Captainlogin.jsx`

The Captain Login component allows captains to log in using their email and password. It also includes a link to create a new account.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Contact
For any questions or inquiries, please contact [soumadityapal@outlook.com](mailto:soumadityapal@outlook.com).
```

