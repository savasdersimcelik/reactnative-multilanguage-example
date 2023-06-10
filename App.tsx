import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { I18nextProvider } from 'react-i18next';
import i18next from './src/language';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <I18nextProvider i18n={i18next}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='DetailScreen' component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  )

}

export default App;