import React from 'react';
import {Image, Text, TextInput, View, Button} from 'react-native';
import CustomButton from '../../components/ui/button';
import Layout from '../../components/ui/layout';
import Phone from '../../assets/assets/images/phone.svg';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();
  return (
    <Layout>
      <View className="flex items-center justify-center flex-col w-full h-full bg-white">
        <View className=" flex items-center justify-center flex-col gap-5 mb-5">
          <Image
            source={require('../../assets/assets/images/login-page.jpg')}
          />
          <View className="flex items-center justify-center flex-col">
            <Text className="w-full text-3xl text-center text-black">
              Login to your account
            </Text>
            <Text className="w-full text-lg text-center">
              Login with your phone number
            </Text>
          </View>
          <View className="w-full min-h-fit p-2 flex  items-center justify-between">
            <View className="min-w-full border-[1px] border-gray-400 rounded-md flex flex-row items-center p-1">
              <View className="w-fit h-fit object-contain p-1 ">
                <Phone width={30} height={30} />
              </View>
              <Text className="text-xl font-bold text-black">+91</Text>
              <TextInput keyboardType="text" className="" />
            </View>
          </View>
        </View>
        <CustomButton
          text="join now"
          onPress={() =>
            navigation.navigate('Name')}
        />
        <View className="w-full flex items-center justify-center mt-5">
          <Text>
            Don't have a account ?
            <Text className="text-[#5c4eb3]"> Create an Account</Text>
          </Text>
        </View>
      </View>
    </Layout>
  );
}

export default Login;
