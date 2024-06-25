import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Name from './screens/auth/name';
import Home from './screens/root/home';
import Status from './screens/root/status';

export default function App() {
  return (
    <SafeAreaView>
      {/* <Name /> */}
      {/* <Home/> */}
      <Status/>
    </SafeAreaView>
  );
}
