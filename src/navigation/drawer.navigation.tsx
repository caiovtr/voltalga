import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from '../styles/colors';
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { TabNavigation } from './tab.navigation';
import { Camera } from '../screens/Camera'
import { Imagens } from '../screens/Imagens'
import { ScreenQrCode, ScreenLocation, ScreenLocationMapOrDest, ScreenAcelerometro } from '../screens';
import React from 'react';
type DrawerParamList = {
    Tab: undefined
    Camera: undefined
    Imagem: undefined
    QrCode: undefined
    Localização: undefined
    LocationMapOrDest: undefined
    Acelerometro: undefined
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
            <Drawer.Screen name='Imagem' component={Imagens}
                options={{
                    drawerIcon: () => (
                        <FontAwesome name="picture-o" size={24} color={colors.white}/>
                    ),
                }} 
            />
            <Drawer.Screen name='QrCode' component={ScreenQrCode}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="qrcode-scan" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Localização' component={ScreenLocation}
                options={{
                    drawerIcon: () => (
                        <FontAwesome5 name="map-marked-alt" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='LocationMapOrDest' component={ScreenLocationMapOrDest}
                options={{
                    drawerIcon: () => (
                        <FontAwesome5 name="map-marked-alt" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Acelerometro' component={ScreenAcelerometro}
                options={{
                    drawerIcon: () => (
                        <AntDesign name="car" size={24} color="black" />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}