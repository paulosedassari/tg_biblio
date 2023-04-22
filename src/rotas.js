import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import SplashScreen from './telas/SplashScreen';
import Onboarding from './telas/Onboarding';
import Principal from './telas/Principal';
import Login from './telas/Login';
import CriarConta from './telas/CriarConta';
import Detalhes from './telas/Detalhes';

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Tab.Screen name="CriarConta" component={CriarConta} options={{ headerShown: false }} />
        <Tab.Screen name="Detalhes" component={Detalhes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}