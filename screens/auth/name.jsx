import React from 'react';
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import Profile from '../../assets/assets/images/profile.svg';
import CustomButton from '../../components/ui/button';
import Layout from '../../components/ui/layout';

export default function Name() {
  return (
    <Layout>
      <View className="flex items-center justify-between flex-col w-full h-full bg-white">
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
          <View className="min-w-full min-h-fit py-2 flex  items-center justify-between">
            <View className="w-full border-2 border-red-200 rounded-lg">
              <TextInput
                placeholder="Enter Name"
                keyboardType="text"
                className="min-w-full"
              />
            </View>
            {/* <Profile width={120} height={40} /> */}
          </View>
        </View>
        <CustomButton text="submit" />
      </View>
    </Layout>
  );
}
