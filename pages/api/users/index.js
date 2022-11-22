import prisma from '../../../lib/prisma'
import { createUser, getUsers } from '../../../lib/prisma/users'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { users, error } = await getUsers()
      if (error) throw new Error(error)
      return res.status(200).json({ users })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  // Run if the request was a post request
  if (req.method == "POST") {
    try {
    // Get email, password from the request body
    const { email, password } = req.body;

    // Create a new user
    
    const user = await createUser(email, password );
    // return created user
    return res.status(200).json({ success: true, user});
    }  catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }


  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler