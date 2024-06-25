import React from 'react';
import {SafeAreaView, View} from 'react-native';

export default function Layout({children}) {
  return <SafeAreaView className="p-5 w-full h-full">{children}</SafeAreaView>;
}
