import { BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Mensagem, Perfil } from '../../screens';
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors'

type MenuTabParam = {
    Mensagem: undefined
    Perfil: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Perfil">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return(
        <Tab.Navigator
            screenOptions = {{
                tabBarActiveBackgroundColor: colors.secondary,
                tabBarActiveTintColor: colors.white,
                headerShown: false,
                tabBarInactiveBackgroundColor: colors.secondary,
                tabBarInactiveTintColor: colors.white,
            }}
            >
            <Tab.Screen name='Perfil' component={Perfil}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={24} color={colors.white}/>
                    ),
                }}
            />
            <Tab.Screen name='Mensagem' component={Mensagem}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="message1" size={24} color={colors.white}/>
                    ),
                }}
            />
       </Tab.Navigator>
    )
}