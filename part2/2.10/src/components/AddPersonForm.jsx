import React, { useState } from 'react';

const AddPersonForm = ({ addNewPerson }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dsadsa")
    const newPerson = { name:newName, number: newNumber };
      addNewPerson(newPerson);
      setNewName('');  
      setNewNumber('');  
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
            required 
          />
        </label>
        <br/>
        <label>
          Number:
          <input 
            type="text" 
            value={newNumber} 
            onChange={(e) => setNewNumber(e.target.value)} 
            required 
          />
        </label>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddPersonForm;
