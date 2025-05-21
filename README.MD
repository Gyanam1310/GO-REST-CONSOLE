# Go Rest Console

A simple web-based REST API client to interact with the [Go REST public API](https://gorest.co.in/public-api/users).  
Allows sending GET, POST, and PUT requests with live response display.

## Features

- Enter request URL and select HTTP method (GET, POST, PUT)  
- Validate request URL input with error messages  
- Send JSON request body with keys: `id`, `name`, `email`, `gender`, `status`  
- Display HTTP response status code and formatted JSON response  
- Authorization header included automatically for secure requests

## Getting Started

1. Open the HTML file in your browser.  
2. Enter a valid API endpoint URL (default: `https://gorest.co.in/public-api/users`).  
3. Choose the HTTP request method.  
4. For POST/PUT, enter a valid JSON body in the textarea.  
5. Submit the form and view the response status and body below.

## Important Notes

- Do **not** remove or alter the prefilled HTML/JS structure.  
- Ensure the request body JSON keys are double-quoted.  
- URL validation will show "Required*" error if empty on submit.

## Technologies Used

- HTML, CSS (Roboto font)  
- JavaScript (Fetch API)  

## API Reference

[Go REST API Documentation](https://gorest.co.in/)

---

Feel free to customize and extend this console for your own API testing and learning.
