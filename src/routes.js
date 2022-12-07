import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "./pages/Home";
import Notification from "./pages/Notifications";
import Profile from "./pages/Profile";
import Search from "./pages/Search";


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        >
            <Tab.Screen name="Sami" component={Home}/>
            <Tab.Screen name="Mauro" component={Search}/>
            <Tab.Screen name="Sakura" component={Notification}/>
            <Tab.Screen name="Perfil" component={Profile}/>

        </Tab.Navigator>
    )
}