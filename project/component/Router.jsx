import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login'
import Profile from './Profile';
import Bio from './Bio'; 
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen 
            name="Login"
            component={Login}
        />
          <Stack.Screen 
          name="Profile"
          component={Profile}
        />
         <Stack.Screen 
          name='Bio'
          component={Bio}
        />
    </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default Router
