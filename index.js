let formEl = document.getElementById("consoleForm");
let requestUrlInput = document.getElementById("requestUrl");
let requestBodyEl = document.getElementById("requestBody");
let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");
let requestMethodEl = document.getElementById("requestMethod");

formEl.addEventListener("submit", function(event) {
    event.preventDefault();

    let methodValue = requestMethodEl.value; // Get the selected HTTP method
    let url = requestUrlInput.value; // Get the request URL
    let options = {
        method: methodValue,
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Add the request body for POST and PUT methods
    if (methodValue === "POST" || methodValue === "PUT") {
        options.body = JSON.stringify(requestBodyEl.value);
    }

    // Make the fetch request
    fetch(url, options)
        .then(function(response) {
            responseStatusEl.value = response.status; // Display response status
            return response.json();
        })
        .then(function(jsonData) {
            responseBodyEl.textContent = JSON.stringify(jsonData, null, 4); // Pretty print response JSON
        });
});

// Update UI or handle changes to the request method (optional)
requestMethodEl.addEventListener("change", function() {
    console.log(`Request method changed to: ${requestMethodEl.value}`);
});