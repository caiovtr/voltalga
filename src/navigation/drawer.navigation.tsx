import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from '../styles/colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { TabNavigation } from './tab.navigation';
import { Camera } from '../screens/Camera'
import React from 'react';
type DrawerParamList = {
    Tab: undefined
    Camera: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
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
                backgroundColor: colors.secondary,
            },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen name='Tab' component={TabNavigation}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: 'Perfil',
                    drawerIcon: () => (
                        <AntDesign name="user" size={24} color="white" />
                    ),
                }}
            />
            <Drawer.Screen name='Camera' component={Camera}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="camera" size={24} color={colors.white} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}