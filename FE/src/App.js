import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import numberServices from './services/numberServices'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  const addPerson = (e) => {
    e.preventDefault()

    const personSearched = persons.find(person => person.name.toUpperCase() === newName.toUpperCase())
    if (personSearched) {
      const confirmation = window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)
      if (confirmation) { 
        numberServices.updateNumber(personSearched, newNumber)
        .then(editedPerson => {
          let editedPersonList = [...persons]
          editedPersonList = editedPersonList.map(person => person.id !== editedPerson.id ? person : editedPerson)
          setPersons(editedPersonList)
          setErrorMessage(`${newName}: number changed`)
          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000);
        })
        .catch(error => {
          setErrorMessage(`${newName} already removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000);
          setPersons(persons.filter(person => person.name !== newName))
          setNewName('')
          setNewNumber('')
        })
      }
    } else {
      numberServices.create({name: newName, number: newNumber})
      .then(response => {
        setPersons(persons.concat(response))
        setErrorMessage(`${newName} added to Phonebook`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        // console.log('numberServices.create - error', error.response.data.error)
        setErrorMessage(error.response.data.error)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  }

  const deletePerson = (id) => {
    numberServices.deletePerson(id)
    let editedPersonList = [...persons]
    editedPersonList = editedPersonList.filter(person => person.id !== id)
    setPersons(editedPersonList) 
    setErrorMessage(`Person removed from Phonebook`)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000);
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  useEffect(() => {
    numberServices.getAll()
      .then(response => setPersons(response))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      {errorMessage ? <Notification message={errorMessage} /> : null}
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson}/>
    </div>
  )
}

export default App