import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
// import Profile from '../../assets/assets/images/profile.svg';
import CustomButton from '../../components/ui/button';
import Layout from '../../components/ui/layout';

function Login() {
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
            <View className="w-full border-[1px] border-gray-400 rounded-md">
              <TextInput keyboardType="text" className="min-w-full" />
            </View>
            {/* <Profile width={120} height={40} /> */}
          </View>
        </View>
        <CustomButton text="join now" />
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
