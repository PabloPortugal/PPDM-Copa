import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "./pages/Home";
import Notification from "./pages/Notifications";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

import {Entypo, FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        >
            <Tab.Screen name="Inicio" 
            component={Home}
            options={{
                tabBarIcon: ({size,color}) => (
                    <Entypo name="home" size={size} color={color} />
                )

            }}
            />

            <Tab.Screen 
            name="Search" 
            component={Search}
            options={{
                tabBarIcon: ({size,color}) => (
                    <FontAwesome name="search" size={size} color={color} />
                )

            }}
            />
            <Tab.Screen 
            name="Soccer" 
            component={Notification}
            options={{
                tabBarIcon: ({size,color}) => (
                    <FontAwesome name="soccer-ball-o" size={size} color={color} />
                )

            }}
           />

            <Tab.Screen 
            name="Jogos" 
            component={Profile}
            options={{
                tabBarIcon: ({size,color}) => (
                    <MaterialCommunityIcons name="soccer-field"  size={size} color={color} />
                )

            }}
            />

        </Tab.Navigator>
    )
}