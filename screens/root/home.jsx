import React from 'react';
import {View, Image, Text, Touchable, TouchableOpacity} from 'react-native';
import Layout from '../../components/ui/layout';
import * as Progress from 'react-native-progress';

export default function home() {
  return (
    <Layout>
      <View className="w-full h-full">
        <View className="mt-2 flex-row ">
          <View className='flex-row'>
          <Image
            className="rounded-full w-16 h-16"
            source={require('../../assets/assets/images/person.jpg')}
          />
          <View className="ml-2">
            <Text className="font-semibold text-lg text-black">
              Hey, Alfrin Poulose
            </Text>
            <Text className="mt-1">Let's get started</Text>
          </View>
          </View>
        </View>
        <View className="bg-[#7672eb] p-3 rounded-3xl w-full mt-4">
          <View className='flex-row justify-between'>
            <View>
            <Text className='mb-3 text-white'>Ongoing</Text>
            <Text className='mb-3 text-white text-xl'>3D Arts & Illustration</Text>
            <View className='mb-4'>
            <Progress.Bar progress={0.5} width={180} color={'white'} unfilledColor={'#abb3ee'} borderColor={'transparent'} />
            </View>
            </View>
            <View>
            <Image source={require('../../assets/assets/images/3d-art-illution.png')} className="w-36 h-36"/>
          </View>
          </View>
          <TouchableOpacity className='px-4 bg-[#abb3ee] py-2 w-[30%] rounded-full absolute bottom-5 left-3'>
                <Text className='text-center text-white'>Continue</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
