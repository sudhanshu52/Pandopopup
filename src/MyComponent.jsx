import { useContext } from 'react';
import  {myContext}from './MyContext';

function MyComponent() {
  const { text, setText } = useContext(myContext);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello, Guys how r you!')}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;