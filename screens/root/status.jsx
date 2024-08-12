import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {status} from '../../constants/index';
import Layout from '../../components/ui/layout';
import * as ProgressStatus from 'react-native-progress';

export default function Status() {
  return (
    <Layout>
    <View className='bg-purple-50'>
    <ScrollView  vertical={true} showsVerticalScrollIndicator={false} className="w-full gap-3">
        {status.map((item, index) => (
          <View
            className="flex-1 w-full h-fit p-5 bg-white rounded-md flex-row items-center"
            style={item.bg}
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
          <ProgressStatus.Bar progress={item.pro} width={180} color={item.fill} unfilledColor={'#e6e1f9'} borderColor={'transparent'} />
          </View>
          </View>
        ))}
      </ScrollView>
    </View>
    </Layout>
  );
}
