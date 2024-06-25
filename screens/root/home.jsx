import React from 'react';
import {Button, Image, ScrollView, Text, TextInput, View} from 'react-native';
import {scroll,account} from '../../constants/index';

const home = () => {
  return (
    <View className="w-full h-full">
      <View className="mt-[10%] w-full items-center">
        <Image
          className="rounded-full w-24 h-24 items-center"
          source={require('../../assets/assets/images/person.jpg')}
        />
        <Text className="mt-2 font-semibold text-lg text-center">
          Alfrin Poulose
        </Text>
        <Text className="text-center">alfrinpoulose@gmail.com</Text>
      </View>
      <View className="mt-10">
        <Text className="mb-3 text-lg font-semibold">Course You're Taking</Text>
        <ScrollView horizontal={true} className='w-full gap-3'>
          {scroll.map((item, index) => (
            <View className="w-fit h-fit p-4 bg-red-500 rounded-md" style={item.bg} key={index}>
              <Text className="text-md font-md text-green-500">
                {item.label}
              </Text>
              <Text className="text-sm text-gray-500">{item.time}</Text>
            </View>
          ))}
        </ScrollView>
        <View>
          <Text className='mt-10'>Account</Text>
          <ScrollView className='w-full gap-3 mt-4'>
          {account.map((item, index) => (
            <View className="w-fit h-fit p-4 bg-red-500 rounded-md" style={item.bg} key={index}>
              <Text className="text-md font-md text-green-500">
                {item.label}
              </Text>
            </View>
          ))}
        </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default home;
