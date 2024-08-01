import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigation } from "./loginStack.navigation";
import { MenuTabs } from "./MenuTab/MenuBottomTab.navigation"

export function Navigation() {
    return (
        <NavigationContainer>
            <LoginNavigation />
        </NavigationContainer>
    )
}