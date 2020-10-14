import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
const Stack = createStackNavigator();
import First from '../screens/TodoScreen';
import Second from '../screens/ApiCallThunk';
import Multiple from '../screens/Multiple';

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Multiple" headerMode={'none'}>
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Second" component={Second} />
      <Stack.Screen name="Multiple" component={Multiple} />
    </Stack.Navigator>
  );
}
