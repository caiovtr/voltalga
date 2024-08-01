import { BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Slide1, Slide2 } from '../../screens';
import { Entypo, Feather } from '@expo/vector-icons';
import { Perfil } from '../../screens/Perfil';
import { Mensagem } from '../../screens/Mensagem';

type MenuTabParam = {
    Mensagem: undefined
    Perfil: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return(
        <Tab.Navigator>
            <Tab.Screen name='Mensagem' component={Mensagem}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="slideshare" size={24} colors="black"/>
                    )
                }}
            />
            <Tab.Screen name='Perfil' component={Perfil}
                options={{
                    tabBarIcon: () => (
                        <Feather name="sliders" size={24} colors="black"/>
                    )
                }}
            />
       </Tab.Navigator>
    )
}