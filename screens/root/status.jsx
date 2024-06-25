import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {status} from '../../constants/index';
import Layout from '../../components/ui/layout';

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
    </View>
    </Layout>
  );
}
