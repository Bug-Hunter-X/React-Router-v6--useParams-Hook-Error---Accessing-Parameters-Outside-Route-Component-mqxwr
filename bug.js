In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered by a route.  This can lead to errors like `Cannot read properties of undefined (reading 'someParam')` because the route parameters won't be available in that context.

```javascript
// Incorrect usage
function MyComponent() {
  const { id } = useParams(); // Error! useParams must be inside a Route component
  // ...
}
```