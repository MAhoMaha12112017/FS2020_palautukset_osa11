import React from 'react'

const Persons = ({persons, filter, deletePerson}) => {
  const personsToShow = persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

  const handleDeletionClick = (id, name) => {
    const confirmation = window.confirm(`Delete ${name}?`)
    if (confirmation) { deletePerson(id) }
  }
    
  return (
    <div>
      {personsToShow.map(person => 
        <p key={person.name}>
        {person.name} {person.number} 
        <button type="button" onClick={() => handleDeletionClick(person.id, person.name)} >delete</button>
        </p>
        )}
    </div>
  )
}

export default Persons