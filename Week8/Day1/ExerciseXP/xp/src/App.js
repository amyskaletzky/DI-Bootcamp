import logo from './logo.svg';
import './App.css';
import React from 'react';
import { myelement, sum } from './ex2';
import UserFavoriteColors from './ex3';
import Exercise4 from './ex4';

function App() {
  // ex1
  const ex1 = React.createElement('h1', null, 'I do not use JSX!');

  //ex3
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };


  return (
    <>
      {/* ex1 */}
      <div>
        {ex1}
      </div>

      {/* ex2 */}
      <h1>Hello World!</h1>
      {myelement}
      <h2>React is {sum} times better with JSX</h2>

      {/* ex3 */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      <ul>``
        <UserFavoriteColors userObj={user} />
      </ul>

      {/* ex4 */}
      <Exercise4 />

    </>
  );
}



export default App;
