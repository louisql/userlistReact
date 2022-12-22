import logo from './logo.svg';
import './App.css';

import NewUser from "./components/NewUser/NewUser";
import ListUser from "./components/ListUser/ListUser";

import { useState } from 'react';

function App() {
  const [listUsers, setlistUsers] = useState([
    { name: 'Luigi', age:'66', id: 'g1' },
    { name: 'Mario!', age:'66', id: 'g2' }
  ]);


  const addUserHandler = (enteredName, enteredAge) => {
    setlistUsers(prevState  => {
      const updatedUsers = [...prevState];
      updatedUsers.unshift({ name: enteredName, age: enteredAge, id: Math.random().toString() });
      return updatedUsers;
    });
  }

  let content = "";


  if (listUsers.length > 0) {
    content = (
      <ListUser items={listUsers}  />
    );
  }

  return (
    <div className="App">
      <div id="goal-form">
        <NewUser onAddUser={addUserHandler} />
      </div>
      <div id="goals">
        {content}
      </div>
    </div>
  );
}

export default App;
