import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from "./drawer.navigation";
import { MenuTabs } from "./MenuTab/MenuBottomTab.navigation"
import { useAuth } from "../hook/auth"
import { Loading } from "../components/Loading"


export function Navigation() {
    const { user, loading } = useAuth()
    if (loading) {
        return <Loading />
    }
    return (
        <NavigationContainer>
            {user?.token ? <DrawerNavigation /> : <MenuTabs />}
        </NavigationContainer>
    )
}