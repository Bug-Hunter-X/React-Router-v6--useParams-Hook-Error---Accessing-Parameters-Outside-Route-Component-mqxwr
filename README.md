# React Router v6: useParams Hook Error

This repository demonstrates a common error when using the `useParams` hook in React Router v6 and provides a solution.

The error occurs when attempting to access route parameters outside of a component that's rendered within a route.  This leads to an error because the parameters aren't available in that context.

The `bug.js` file showcases the incorrect usage, while `bugSolution.js` demonstrates the proper way to access route parameters.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.