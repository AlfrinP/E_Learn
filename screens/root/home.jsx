import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import Layout from '../../components/ui/layout';
import * as Progress from 'react-native-progress';
import Notifiction from '../../assets/assets/images/notification.svg';
import WhitePlay from '../../assets/assets/images/white-play-button.svg';
import {status} from '../../constants/index';

export default function home() {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full">
        <View className="mt-2 flex-row justify-between">
          <View className='flex-row'>
          <Image
            className="rounded-full w-16 h-16"
            source={require('../../assets/assets/images/person.jpg')}
          />
          <View className="ml-2">
            <Text className="font-semibold text-lg text-black">
              Hey, Alfrin👋
            </Text>
            <Text className="mt-1">Let's get started</Text>
          </View>
          </View>
          <Notifiction width={30} height={30}/>
        </View>
        <View className="bg-[#7672eb] p-3 rounded-3xl w-full mt-7">
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
        <View className='w-full gap-1'>
        <Text className='font-bold pt-4'>Choose Your Course</Text>
        <View className='flex-row gap-2'>
        <View className='bg-[#7672eb] w-fit h-fit p-3 rounded-lg pr-10'>
          <View>
            <Text className='text-white'>UI/UX Design</Text>
            <View className='flex-row  mt-2'>
            <Text className='text-blue-400 text-[10px]'>03 Classes</Text>
            <Image source={require('../../assets/assets/images/ui-ux.png')} className="w-16 h-16"/>
            </View>
            <View className='bg-blue-300  p-1 h-7 w-7 items-center rounded'>
            <WhitePlay width={20} height={20}/>
            </View>
          </View>
        </View>
        <View className='bg-[#67cdd8] w-fit h-fit p-3 rounded-lg pr-10'>
          <View>
            <Text className='text-white'>Derivation</Text>
            <View className='flex-row mt-2'>
            <Text className='text-cyan-200 text-[10px]'>05 Classes</Text>
            <Image source={require('../../assets/assets/images/derivation.png')} className="w-16 h-16"/>
            </View>
            <View className='bg-[#84E9F4]  p-1 h-7 w-7 items-center rounded'>
            <WhitePlay width={20} height={20}/>
            </View>
          </View>
        </View>
        </View>
        <View className='flex-row gap-2'>
        <View className='bg-[#81b9e8] w-fit h-fit p-3 rounded-lg pr-10'>
          <View>
            <Text className='text-white'>Photoshop</Text>
            <View className='flex-row'>
            <Text className='text-cyan-200 text-[10px] mt-2'>08 Classes</Text>
            <Image source={require('../../assets/assets/images/photoshop.png')} className="w-16 h-16"/>
            </View>
            <View className='bg-[#b6d5ee]  p-1 h-7 w-7 items-center rounded'>
            <WhitePlay width={20} height={20}/>
            </View>
          </View>
        </View>
        <View className='bg-pink-400 w-fit h-fit p-3 rounded-lg pr-10'>
          <View>
            <Text className='text-white'>Business</Text>
            <View className='flex-row'>
            <Text className='text-pink-200 text-[10px] mt-2'>03 Classes</Text>
            <Image source={require('../../assets/assets/images/bussiness.png')} className="w-16 h-16"/>
            </View>
            <View className='bg-[#f8c1c1]  p-1 h-7 w-7 items-center rounded'>
            <WhitePlay width={20} height={20}/>
            </View>
          </View>
        </View>
        </View>
        </View>
        <View>
          <Text className='pt-3 pb-2 font-bold'>Today's Lecture</Text>
        </View>
        <ScrollView  vertical={true} showsVerticalScrollIndicator={false} className="w-full gap-3">
        {status.map((item, index) => (
          <View
            className="flex-1 w-full h-fit p-5 bg-white rounded-md flex-row items-center"
            style={item.bg}
            key={index}>
            <Image source={item.img} className="w-10 h-10" />
            <View className="pl-2">
              <Text className="text-md font-md text-green-500">
                {item.label}
                {index + 1}
              </Text>
              <Text className="text-md font-md text-green-500">
                {item.state}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      </ScrollView>
    </Layout>
  );
}
