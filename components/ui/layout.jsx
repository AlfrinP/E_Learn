import React from 'react';
import {View} from 'react-native';

export default function Layout({children}) {
  return <View className="p-5 w-full h-full">{children}</View>;
}
