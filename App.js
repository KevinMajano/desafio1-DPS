import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Desafio1 from './components/ejercicio1';
import Desafio2 from './components/ejercicio2';
import Desafio3 from './components/ejercicio3';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ejercicio 1" component={Desafio1} />
        <Tab.Screen name="Ejercicio 2" component={Desafio2} />
        <Tab.Screen name="Ejercicio 3" component={Desafio3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
