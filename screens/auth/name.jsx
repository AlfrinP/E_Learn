import React from 'react';
import {Button, Image, Text, TextInput, View} from 'react-native';

export default function Name() {
  return (
    <View className="flex items-center justify-between flex-col w-full h-full">
      <View className="flex-1 flex items-center justify-center flex-col gap-5">
        <Image source={require('../../assets/assets/images/name-page.jpg')} />
        <View className="flex items-center justify-center flex-col">
          <Text className="w-full text-3xl text-center text-black">
            Enter Your name
          </Text>
          <Text className="w-full text-lg text-center">
            Enter your full name for your account
          </Text>
        </View>
        <View className="min-w-full min-h-fit px-10 py-2 flex  items-center justify-between bg-blue-600">
          <Image />
          <TextInput
            placeholder="Enter Name"
            keyboardType="text"
            className="min-w-full bg-red-500"
          />
        </View>
      </View>
      <View className="h-10">
        <Button title="Submit" />
      </View>
    </View>
  );
}
