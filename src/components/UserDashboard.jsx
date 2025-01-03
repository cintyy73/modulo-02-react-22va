import { Button, Stack, Text } from "@chakra-ui/react"
import { useAuth } from "../context/AuthContext"

export const UserDashboard = () => {
    const { user, logout} = useAuth()
  return (
    <Stack>
        <Text>Bienvenido {user.username}</Text>
        <Button onClick={logout}>Cerrar sesión</Button>
    </Stack>
  )
}
