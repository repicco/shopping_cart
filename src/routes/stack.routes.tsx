import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Cart} from '../pages';

export type StackParamList = {
  Home: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const StackRoutes = () => {
  console.log('Renderizou StackRoutes');
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
