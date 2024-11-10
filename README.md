# Node Pages Project

## Overview

This project served as a hands-on exploration of **server fundamentals in vanilla Node.js**. The main objective was to gain a deep understanding of how the **request** and **response** objects work under the hood, as well as how data flows from clients to servers. Along the way, I learned about working with **events**, **streams**, **handling HTTP requests**, and **managing data storage** in a Node.js environment without the help of external frameworks like Express.

## Key Learning Objectives

1. **Server Basics**:
   - Understanding how Node.js creates a basic HTTP server to handle client requests and send appropriate responses.
   - Learning the foundational concepts that more advanced frameworks (like Express) later abstract, such as routing and managing request methods.

2. **Request and Response Handling**:
   - Examining the anatomy of HTTP requests (methods like `GET` and `POST`) and how servers interpret and respond to these requests.
   - Learning to serve static files (like HTML and CSS) in response to `GET` requests, and handling dynamic routes and methods.

3. **Working with Streams**:
   - Using streams to handle incoming data in chunks, which is crucial for efficiently managing large volumes of data in `POST` and `PUT` requests.

4. **File Operations**:
   - Implementing file handling using Node’s `fs` module, including reading, writing, and appending data. 
   - Using synchronous and asynchronous methods for data storage, and understanding the advantages of each.

5. **Creating and Managing Routes**:
   - Learning to handle different routes, respond to various request types (`GET`, `POST`, `PUT`, `DELETE`), and define custom routes based on the needs of the client.

6. **Basic CRUD Operations**:
   - Practicing the basic CRUD operations (`Create`, `Read`, `Update`, and `Delete`) within a Node.js server context, which forms the foundation for data management in web applications.

## Features Implemented

- **Basic HTTP Server**: Configured in `server.js`, able to handle `GET`, `POST`, `PUT`, and `DELETE` requests.
- **Serving Static Files**: Added functionality to serve `index.html` and `style.css` for client-side rendering and styling.
- **Dynamic Route Handling**: Responded to dynamic requests like `/greeting` with custom messages based on client input.
- **Data Persistence**: Implemented data storage with `fs.appendFileSync` and `fs.writeFileSync` to record incoming messages to `hi_log.txt`.
- **404 Error Handling**: Custom 404 responses to handle undefined routes, improving the user experience.

## Notable Tasks and Challenges

1. **Setting Up Dynamic Responses for POST Requests**:
   - Managed `POST` requests to respond dynamically based on the request body content, demonstrating the flexibility of server responses.

2. **CRUD Operations**:
   - Practiced fundamental CRUD operations by creating, reading, updating, and deleting data stored in text files on the server.

3. **Integrating External APIs**:
   - Implemented a `GET` request to the PokeAPI to retrieve Pokémon data and dynamically respond with the retrieved information.

4. **Testing with Postman**:
   - Used Postman to test server responses, which allowed me to test various request methods beyond just `GET` requests in the browser.

5. **Using a Templating Engine (Pug)**:
   - Set up a simple templating engine to render dynamic content, allowing HTML to be generated on the server side before being sent to the client.

## Tools and Dependencies

- **Node.js**: Built-in modules like `http`, `fs`, and `path` to manage server functionality and file handling.
- **nodemon**: Used for development to automatically restart the server on code changes.
- **Postman**: Tested various server routes and HTTP methods to ensure functionality.
- **Pug**: A templating engine for generating dynamic HTML.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git

