#### Backend API Documentation

## `/user/register` Endpoint

### HTTP Method
`POST` 

**Description**

Registers a new user in the system.

**Request Body**

- `fullname` (object, required)
  - `firstname` (string, required): User's first name, must be at least 3 characters long.
  - `lastname` (string, optional): User's last name.
- `email` (string, required): User's email address, must be a valid email.
- `password` (string, required): User's password, must be at least 8 characters long.

**Example Request**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

**Validation Rules**

- `email` must be a valid email address.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 8 characters long.

**Example Responses**

- **201 Created**
  - **Description**: User registered successfully.
  - **Body**:
    ```json
    {
      "token": "string",
      "user": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string"
        // ...other user fields...
      }
    }
    ```
- **400 Bad Request**
  - **Description**: Validation errors or missing required fields.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "body"
        }
      ]
    }
    ```
- **500 Internal Server Error**
  - **Description**: An unexpected error occurred on the server.
```

