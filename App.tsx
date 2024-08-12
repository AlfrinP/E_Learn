import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Name from './screens/auth/name';
import OTP from './screens/auth/otp';
import Password from './screens/auth/password';
import Login from './screens/auth/login';

import HomeDark from './assets/assets/images/home_g.svg';
import HomeLight from './assets/assets/images/home_b.svg';
import WidgetLight from './assets/assets/images/class-dark.svg';
import WidgetDark from './assets/assets/images/class-light.svg';
import NotificationsDark from './assets/assets/images/profile.svg';
import NotificationsLight from './assets/assets/images/profile.svg';

import Home from './screens/root/home';
import Lecture from './screens/root/lecture';
import Profile from './screens/root/profile';

// Screen names
const homeName = 'Home';
const lectureName = 'Lecture';
const profileName = 'Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 55,
          borderTopWidth: 0, // Remove top border
          elevation: 0,
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          backgroundColor: '#ffffff', // Note: Make sure your colors are as intended
          paddingVertical: 5,
          borderTopWidth: 0,
        },
        tabBarIcon: ({focused, size}) => {
          let icon;
          if (route.name === homeName) {
            icon = focused ? (
              <HomeLight width={size} height={size} />
            ) : (
              <HomeDark width={size} height={size} />
            );
          } else if (route.name === lectureName) {
            icon = focused ? (
              <WidgetLight width={size} height={size} />
            ) : (
              <WidgetDark width={size} height={size} />
            );
          } else if (route.name === profileName) {
            icon = focused ? (
              <NotificationsLight width={size} height={size} />
            ) : (
              <NotificationsDark width={size} height={size} />
            );
          }
          return icon;
        },
      })}>
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={lectureName} component={Lecture} />
      <Tab.Screen name={profileName} component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
          },
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
