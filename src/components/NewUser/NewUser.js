import React, { useState } from "react";
import './NewUser.css'

import Button from "../UI/Button/Button";

import Modal from "react-modal";

const NewUser = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if (name.trim().length === 0) {
      setErrorMessage("Please enter a name.");
      setModalIsOpen(true);
      return;
    } else if (age.trim().length === 0 || age < 0) {
      setErrorMessage("Please enter a non-negative age.");
      setModalIsOpen(true);
      return;
    }

    setName("");
    setAge("");

    props.onAddUser(name, age);
  };


  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label>Username</label>
        <input type="text" onChange={nameInputChangeHandler} value={name}/>
        <label>Age (Years)</label>
        <input type="number" onChange={ageInputChangeHandler} value={age}/>
        <Button type="submit">Add user</Button>
      </form>

      {/* Modal component */}
      <Modal isOpen={modalIsOpen} className="my-modal">
        <h1>Error</h1>
        <p>{errorMessage}</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal> 
    </div>
  );
};

export default NewUser;
