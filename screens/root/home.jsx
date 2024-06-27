import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import Layout from '../../components/ui/layout';
import * as Progress from 'react-native-progress';
import Notifiction from '../../assets/assets/images/notification.svg';
import WhitePlay from '../../assets/assets/images/white-play-button.svg';
import {status,dashboard} from '../../constants/index';

export default function Home() {
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
          <TouchableOpacity><Notifiction width={30} height={30}/></TouchableOpacity>
        </View>
        <ScrollView horizontal={true} className="gap-2 mt-7">
        {dashboard.map((item, index) => (
        <View className="p-3 rounded-3xl" key={index} style={{ backgroundColor: item.bg }}>
          <View className='flex-row '>
            <View>
            <Text className='mb-3 text-white'>{item.status}</Text>
            <Text className='mb-3 text-white text-xl'>{item.title}</Text>
            <View className='mb-4 flex-row items-center'>
            <Text className='text-white pr-2'>{item.value}</Text>
            <View>
            <Progress.Bar progress={item.pro} width={150} color={'white'} unfilledColor={item.fill} borderColor={'transparent'} />
            </View>
            </View>
            </View>
            <View>
            <Image source={require('../../assets/assets/images/3d-art-illution.png')} className="w-36 h-36"/>
          </View>
          </View>
          <TouchableOpacity className='px-4 py-2 w-[30%] rounded-full absolute bottom-5 left-3' style={{ backgroundColor: item.fill }}>
                <Text className='text-center text-white'>Continue</Text>
            </TouchableOpacity>
        </View>
        ))}
        </ScrollView>
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
            <TouchableOpacity className='bg-blue-300  p-1 h-7 w-7 items-center rounded'>
            <WhitePlay width={20} height={20}/>
            </TouchableOpacity>
          </View>
        </View>
        <View className='bg-[#67cdd8] w-fit h-fit p-3 rounded-lg pr-10'>
          <View>
            <Text className='text-white'>Derivation</Text>
            <View className='flex-row mt-2'>
            <Text className='text-cyan-200 text-[10px]'>05 Classes</Text>
            <Image source={require('../../assets/assets/images/derivation.png')} className="w-16 h-16"/>
            </View>
            <TouchableOpacity className='bg-[#84E9F4]  p-1 h-7 w-7 items-center rounded'>
            <WhitePlay width={20} height={20}/>
            </TouchableOpacity>
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
            <TouchableOpacity className='bg-[#b6d5ee]  p-1 h-7 w-7 items-center rounded'>
            <WhitePlay width={20} height={20}/>
            </TouchableOpacity>
          </View>
        </View>
        <View className='bg-pink-400 w-fit h-fit p-3 rounded-lg pr-10'>
          <View>
            <Text className='text-white'>Business</Text>
            <View className='flex-row'>
            <Text className='text-pink-200 text-[10px] mt-2'>03 Classes</Text>
            <Image source={require('../../assets/assets/images/bussiness.png')} className="w-16 h-16"/>
            </View>
            <TouchableOpacity className='bg-[#f8c1c1]  p-1 h-7 w-7 items-center rounded'>
            <WhitePlay width={20} height={20}/>
            </TouchableOpacity>
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
            key={index}>
            <View className='p-2 rounded-lg' style={{ backgroundColor: item.bg }}>
            <Image source={item.img} className="w-10 h-10" />
            </View>
            <View className="pl-2">
              <Text className="text-md font-bold text-black">
                {item.label}
              </Text>
              <Text className="text-[10px] font-md" style={{ color: item.fill }}>
                {item.state}
              </Text>
            </View>
            <View className='absolute top-11 right-5'>
          <Progress.Bar progress={item.pro} width={180} color={item.fill} unfilledColor={'#e6e1f9'} borderColor={'transparent'} />
          </View>
          </View>
        ))}
      </ScrollView>
      </ScrollView>
    </Layout>
  );
}
