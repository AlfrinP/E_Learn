import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import Profile from '../../assets/assets/images/profile.svg';
import CustomButton from '../../components/ui/button';
import Layout from '../../components/ui/layout';
import {useNavigation} from '@react-navigation/native';

export default function Name() {
  const navigation = useNavigation();

  const goToOTPScreen = () => {
    navigation.navigate('Password'); // Navigate to the OTP screen
  };
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
            <View className="w-full border-[1px] border-gray-400 rounded-md flex flex-row items-center justify-center pl-5">
              <Profile width={20} height={20} />
              <TextInput
                placeholder="Enter Name"
                keyboardType="text"
                className="flex-grow pl-2"
              />
            </View>
          </View>
        </View>
        <CustomButton
          text="join now"
          onPress={() => navigation.navigate('Password')}
        />
      </View>
    </Layout>
  );
}
