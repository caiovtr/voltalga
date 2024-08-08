import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { MenuTabs } from './MenuTab/MenuBottomTab.navigation';
import { Login, Register } from "../screens"
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors'

type DrawerParamList = {
    Login: undefined
    Register: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Login'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: colors.secondary
            },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen name='Login' component={Login}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: 'Perfil',
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Register' component={Register}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: 'Perfil',
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.white} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}