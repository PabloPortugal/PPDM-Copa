import Routes from './src/routes';
import React from 'react-native';
import {NavigationContainer} from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}


