const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://masa:${password}@sandbox.yspsv.mongodb.net/puhelinluettelo_3_12?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const PersonSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', PersonSchema)

if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })
  person.save().then(response => {
    console.log(`added ${response.name} number ${response.number} to phonebook`)
    // console.log('response', response)
    mongoose.connection.close()
  })
}
if (process.argv.length === 3) {
  Person.find({}).then(response => {
    console.log('phonebook:')
    response.forEach(element => {
      console.log(element.name, element.number)
    })
    mongoose.connection.close()
  })
}

