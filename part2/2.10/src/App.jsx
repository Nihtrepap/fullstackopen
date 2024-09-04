import { useState } from 'react'
import Filter from './components/Filter';
import AddPersonForm from './components/AddPersonForm';
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [filter, setFilter] = useState('');
  const checkIfPersonExist = (newName) => {
    if(persons.some(p => p.name == newName)){
      alert(`${newName} is already added to the phonebook`);
      return true;
    }
    return false;
  }

  const addNewPerson = (person) => {
    console.log("add human", person)
    person.id =persons.length+1;
    if(!checkIfPersonExist(person.name)){
      setPersons([...persons, person]);
      filterPersons(filter);
    }
  }

  const filterPersons = (filter) => {
    setFilter(filter);
  };

 const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilterChange={filterPersons} />
      <AddPersonForm addNewPerson={addNewPerson} />
      <h2>Numbers</h2>
      <Person persons={filteredPersons} />
    </div>
  )
}

export default App