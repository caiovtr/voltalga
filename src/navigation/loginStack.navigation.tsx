import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Login, Register, Slide1, Slide2 } from '../screens/index'
import { Mensagem } from '../screens/Mensagem';
type LoginStackParamList = {
    Login: undefined
    Register: undefined
    Mensagem: undefined
    Perfil: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
    navigation: LoginScreenNavigationProp
}
export function LoginNavigation() {
    const Stack = createStackNavigator<LoginStackParamList>()
    return (
        <Stack.Navigator id='login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Mensagem' component={Mensagem} />
        </Stack.Navigator>
    )
}