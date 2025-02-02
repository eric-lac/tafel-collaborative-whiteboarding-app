import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/users'

const createUser = async newUser => {
  console.log(newUser)
  const response = await axios.post(baseUrl, newUser)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createUser
}