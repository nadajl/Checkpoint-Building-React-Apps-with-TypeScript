import React from 'react';

// Define the prop types
interface GreetingProps {
  name: string;
}

// Functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
