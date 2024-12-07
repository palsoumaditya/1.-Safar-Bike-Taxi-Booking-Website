
# Backend API Documentation

## `/user/register` Endpoint

### HTTP Method
`POST`

### Description
Registers a new user in the system.

### Request Body
- `fullname` (object, required)
  - `firstname` (string, required): User's first name, must be at least 3 characters long.
  - `lastname` (string, optional): User's last name.
- `email` (string, required): User's email address, must be a valid email.
- `password` (string, required): User's password, must be at least 8 characters long.

### Example Request

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

### Validation Rules
- `email` must be a valid email address.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 8 characters long.

### Example Responses

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

## `/user/login` Endpoint

### HTTP Method
`POST`

### Description
Authenticates a user and returns an authentication token along with user details.

### Request Body
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Must be at least 8 characters long.

### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Validation Rules
- `email` is required and must be a valid email address.
- `password` is required and must be at least 8 characters long.

### Example Responses

- **200 OK**
  - **Description**: User authenticated successfully.
  - **Body**:
    ```json
    {
      "token": "jwt_token_string",
      "user": {
        "_id": "user_id_string",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
        // ...other user fields...
      }
    }
    ```

- **400 Unauthorized**
  - **Description**: Invalid email or password.
  - **Body**:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```

## `/user/logout` Endpoint

### HTTP Method
`GET`

### Description
Logs out the authenticated user by invalidating their JWT token.

### Headers
- `Authorization` (string, required): Bearer token obtained during login.

### Example Request

```json
{
  "headers": {
    "Authorization": "Bearer jwt_token_string"
  }
}
```

### Example Responses

- **200 OK**
  - **Description**: User logged out successfully.
  - **Body**:
    ```json
    {
      "message": "Logout successfully"
    }
    ```
- **400 Unauthorized**
  - **Description**: Invalid token or token already blacklisted.
  - **Body**:
    ```json
    {
      "error": "Unauthorized"
    }
    ```

## `/user/profile` Endpoint

### HTTP Method
`GET`

### Description
Fetches the profile of the authenticated user.

### Headers
- `Authorization` (string, required): Bearer token obtained during login.

### Example Request

```json
{
  "headers": {
    "Authorization": "Bearer jwt_token_string"
  }
}
```

### Example Responses

- **200 OK**
  - **Description**: User profile fetched successfully.
  - **Body**:
    ```json
    {
      "user": {
        "_id": "user_id_string",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
        // ...other user fields...
      }
    }
    ```

- **400 Unauthorized**
  - **Description**: Invalid token or user not authenticated.
  - **Body**:
    ```json
    {
      "error": "Unauthorized"
    }
    ```
```


```