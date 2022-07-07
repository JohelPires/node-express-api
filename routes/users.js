import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

let users = []

//all routes here starts with /users

router.get('/', (req, res) => {
  console.log(users)

  res.send(users)
})

router.post('/', (req, res) => {
  console.log('Post Route Reached')
  const user = req.body
  users.push({ ...user, id: uuidv4() })
  res.send(`User ${req.body.firstName} added to database`)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const foundUser = users.find((user) => user.id === id)
  res.send(foundUser)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  users = users.filter((user) => user.id != id)
  res.send(`User id: ${id} deleted.\n ${users}`)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { firstName, lastName, age } = req.body
  const user = users.find((user) => user.id === id)

  if (firstName) user.firstName = firstName
  if (lastName) user.lastName = lastName
  if (age) user.age = age

  res.send(`User ${user.firstName} updated.`)
})

export default router
