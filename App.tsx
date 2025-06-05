import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content" />
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
