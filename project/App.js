import 'react-native-gesture-handler'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from "./component/Signup";
import Login from './component/Login';
import Home from './component/Home';
import MoviesShow from './component/MoviesShow';
import Profile from './component/Profile';
import DcAddMovies from './component/DcAddMovies';
import AddMarvelMovies from './component/AddMarvelMovies';
import Bio from './component/Bio';
import Actor from './component/Actor';
import { StatusBar } from 'react-native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      >
      <Drawer.Screen name='Profile'
        component={Profile}
      />
        <Drawer.Screen
          name="SignUp"
          component={Signup}
          options={{ title: 'Sign Up' }}
        />
        <Drawer.Screen
          name="LogIn"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'DC Universe',
            // headerTitle: () => <MarvelButton />,
            // headerRight: () => <DcButton />,
            headerStyle: {
              backgroundColor: "blue",
            },
          }}
        />
        <Drawer.Screen
          name="MoviesShow"
          component={MoviesShow}
          options={{ title: 'Marvel Universe' }}
        />
        {/* <Drawer.Screen
          name="DcMovies"
          component={DcMovies}
          options={{ title: 'DC Universe' }}
        /> */}

        <Drawer.Screen
          name='Dc Movies Add'
          component={DcAddMovies}
        />
        <Drawer.Screen
          name='Marvel Movies Add'
          component={AddMarvelMovies}
        />
        <Drawer.Screen 
          name='Bio'
          component={Bio}
        />
        <Drawer.Screen
          name='Actor'
          component={Actor}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    <StatusBar 
      barStyle={"light-content"}
    
    />
    </>
  );
}

export default App;
