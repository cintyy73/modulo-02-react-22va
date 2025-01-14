import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
       No existe la ruta error 404
       <Button colorScheme='pink' as={Link} to='/'>Ir a home</Button>
    </div>
  )
}

export default NotFound
