import express from 'express'

const router = express.Router()

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
  },
  {
    firstName: 'Joe',
    lastName: 'Satriani',
    age: 50,
  },
]

//all routes here starts with /users

router.get('/', (req, res) => {
  console.log(users)

  res.send(users)
})

router.post('/', (req, res) => {
  console.log('Post Route Reached')

  const user = req.body

  users.push(user)
  res.send(`User ${req.body.firstName} added to database`)
})

export default router
