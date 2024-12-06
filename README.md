# API Documentation

## User Endpoints

### POST /user/register

Register a new user.

#### Request Body

- `fullname` (object, required)
  - `firstname` (string, required): First name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): Last name of the user.
- `email` (string, required): Email address of the user. Must be a valid email format.
- `password` (string, required): Password for the user account. Must be at least 8 characters long.

#### Response

- `201 Created`: User successfully registered.
  - `token` (string): Authentication token for the user.
  - `user` (object): User object containing user details.
- `400 Bad Request`: Validation error.
  - `errors` (array): Array of validation error messages.

#### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}