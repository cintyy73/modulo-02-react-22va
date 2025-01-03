
import { VStack } from '@chakra-ui/react'
import { LoginForm } from './components/LoginForm'
import { UserDashboard } from './components/UserDashboard'
import { useAuth } from './context/AuthContext'

function App() {
 const { user} = useAuth()
  return (
    <VStack>
     {user ? <UserDashboard /> :  <LoginForm />}
    </VStack>
  )
}

export default App
