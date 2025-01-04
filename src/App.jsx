
import { VStack } from '@chakra-ui/react'
import { LoginForm } from './components/LoginForm'
import { UserDashboard } from './components/UserDashboard'
import { useAuth } from './context/AuthContext'
import { Display } from './components/count/Display'
import { Controls } from './components/count/Controls'

function App() {
 const { user} = useAuth()
  return (
    <VStack>
     {user ? <UserDashboard /> :  <LoginForm />}
     <Display/>
     <Controls />
    </VStack>
  )
}

export default App
