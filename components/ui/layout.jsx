import React from 'react';
import {View} from 'react-native';

export default function Layout({children}) {
  return <View className="flex-1 p-2 pt-10">{children}</View>;
}
