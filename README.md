# CS-465 Travlr Getaways Full Stack Web Application

## Overview

Travlr Getaways is a full stack travel booking application developed using the MEAN stack architecture. The application provides customers with the ability to browse travel packages while allowing administrators to manage trip information through a secure single-page application (SPA). The project demonstrates frontend and backend development, database integration, API creation, authentication, and deployment concepts.

---

# Architecture

## Frontend Development Comparison

Throughout this project, two different frontend approaches were utilized: traditional Express-rendered web pages and an Angular single-page application (SPA).

### Express HTML Frontend

The customer-facing website was built using Express and Handlebars templates.

- The server generates HTML pages before sending them to the browser.
- Each user action that requires new data results in a request to the server and a page reload.
- Rendering occurs on the server side.
- The application structure follows a Model-View-Controller (MVC) pattern.

### Angular Single-Page Application (SPA)

The administrative interface was developed using Angular.

- The browser loads the application once.
- Angular dynamically updates page content without requiring full page reloads.
- Data is retrieved through API calls to the backend.
- Components create a modular and reusable architecture.

The SPA provides a faster, more responsive user experience and richer functionality than traditional server-rendered pages.

## Why MongoDB Was Used

MongoDB was selected because it stores data as flexible JSON-like documents, integrates naturally with JavaScript applications, scales effectively, and allows schema flexibility as application requirements evolve.

---

# Functionality

## JSON and JavaScript

JavaScript is a programming language used to create application logic, while JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging information.

JSON serves as the communication layer between Angular, Express, and MongoDB:

1. Angular sends requests to the API.
2. Express processes requests.
3. MongoDB stores and retrieves data.
4. Express returns JSON responses.
5. Angular displays the data.

## Refactoring and Reusable Components

Examples of refactoring during development included:

- Replacing hardcoded data with API-driven content.
- Creating reusable Angular components.
- Moving API requests into shared services.
- Centralizing authentication functionality.

Benefits of reusable UI components include:

- Reduced code duplication
- Easier maintenance
- Consistent user interfaces
- Improved scalability
- Faster development cycles

---

# Testing

## Methods, Endpoints, and Security

The application uses standard RESTful API methods:

| Method | Purpose |
|----------|----------|
| GET | Retrieve data |
| POST | Create data |
| PUT | Update data |
| DELETE | Remove data |

Example endpoints:

- `/api/trips`
- `/api/login`
- `/api/register`

Testing verified:

- Correct HTTP status codes
- Proper JSON responses
- Database updates
- Error handling
- Authentication functionality

Security testing included:

- JWT authentication validation
- Protected route access
- Authorization checks
- Invalid login testing
- Unauthorized access attempts

---

# Reflection

This course strengthened my understanding of full stack web development by providing hands-on experience with frontend frameworks, backend services, databases, APIs, authentication, and deployment concepts.

## Skills Developed

### Frontend Development

- Angular SPA development
- Component-based architecture
- Routing and navigation
- Form validation

### Backend Development

- Node.js and Express
- RESTful API design
- Middleware implementation
- Authentication and authorization

### Database Management

- MongoDB
- Mongoose
- CRUD operations
- Data modeling

### Testing and Debugging

- API testing
- Error handling
- Troubleshooting client-server communication
- Browser developer tools

### Software Engineering Practices

- MVC architecture
- Refactoring
- Reusable component design
- Full stack integration

The experience gained from this course has improved my ability to design, build, test, and maintain modern web applications, making me a stronger candidate for software development roles.

---

## Technologies Used

- Angular
- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- HTML5
- CSS3
- Handlebars (HBS)
- JSON Web Tokens (JWT)
