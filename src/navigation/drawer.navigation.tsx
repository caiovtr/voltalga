import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { Login, Register, Perfil, Mensagem } from '../screens/index'
import { MenuTabs } from './MenuTab/MenuBottomTab.navigation';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors'

type DrawerParamList = {
    Tab: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}
export function StackNavigation() {
    const Stack = createDrawerNavigator<DrawerParamList>()
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
            <Drawer.Screen name='Tab' component={MenuTabs}
                options={{
                    drawerLabel: 'Perfil',
                    HeaderTitle: 'Perfil',
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.white} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}