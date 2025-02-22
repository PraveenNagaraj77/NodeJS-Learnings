# Node.js HTTP Server

## Overview
This project demonstrates how to create a simple HTTP server using Node.js. It handles different routes and serves responses based on the requested URL.

## Features
- Creates an HTTP server using Node.js.
- Handles multiple routes (`/`, `/projects`, `/dashboard`).
- Sends appropriate responses based on the requested URL.
- Returns a `404` message for undefined routes.
- Uses `res.writeHead()` to set HTTP headers.
- Sends responses using `res.end()`.

## Key Learnings

### Creating an HTTP Server
- The `http.createServer()` method is used to create a server that listens for requests and sends responses.
- The server listens on a specified port using `server.listen(port, callback)`.

### Handling HTTP Requests & Responses
- `req.url` is used to capture the requested URL.
- Different routes (`/`, `/projects`, `/dashboard`) are handled using conditional statements.
- `res.writeHead(statusCode, headers)` sets the response status code and headers.
- `res.end(data)` sends the response body and ends the request-response cycle.

### Routing in Node.js
- Conditional logic is used to check `req.url` and serve different responses.
- If an unhandled route is accessed, a `404 Not Found` response is sent.

### Error Handling
- A default case ensures that users accessing unknown routes receive an appropriate response (`404 Not Found`).

## How to Run the Server

```sh
# Install Node.js if not already installed.
# Save the code in a file (e.g., server.js).
# Open a terminal and navigate to the file location.
node server.js
