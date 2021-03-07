import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/persons'
// const baseUrl = 'https://puhelinluettelo-b-matti.herokuapp.com/api/persons'
const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data)
}

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then(response => response.data)
}

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then(response => response)
}

const updateNumber = (person, newNumber) => {
  const editedPerson = {...person}
  editedPerson.number = newNumber
  return axios.put(`${baseUrl}/${person.id}`, editedPerson).then(response => response.data)
}

const numberServices = { getAll, create, deletePerson, updateNumber }
export default numberServices