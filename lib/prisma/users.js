import prisma from '.'

export async function getUsers() {
  try {
    const users = await prisma.user.findMany()
    return { users }
  } catch (error) {
    return { error }
  }
}

// CREATE
export const createUser = async ( email, password) => {
  const user = await prisma.user.create({
    data: {
      email,
      password
    //   user: { connect: { email: session?.user?.email } },
    
    },
  });
  

  return user;
}


export async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({ where: { id } })
    return { user }
  } catch (error) {
    return { error }
  }
}