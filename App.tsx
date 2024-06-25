import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Name from './screens/auth/name';
import Home from './screens/root/home';

export default function App() {
  return (
    <SafeAreaView>
      {/* <Name /> */}
      <Home/>
    </SafeAreaView>
  );
}
