import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Lecture from './screens/root/lecture';
import Home from './screens/root/home';
import Status from './screens/root/status';
import Profile from './screens/root/profile';

export default function App() {
  return (
    <SafeAreaView>
      {/* <Lecture /> */}
      <Home/>
      {/* <Profile/> */}
      {/* <Status/> */}
    </SafeAreaView>
  );
}
