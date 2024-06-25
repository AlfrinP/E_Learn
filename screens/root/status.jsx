import React from 'react'
import { View,ScrollView,Text, Image } from 'react-native'
import {status} from '../../constants/index';

const Status = () => {
  return (
    <View>
      <ScrollView vertical={true} className='w-full gap-3 mt-4'>
          {status.map((item, index) => (
            <View className="w-fit h-fit p-4 bg-red-500 rounded-md flex-row items-center" style={item.bg} key={index}>
            <Image source={item.img} className='w-10 h-10'/>
              <Text className="text-md font-md text-green-500">
                {item.label}
              </Text>
            </View>
          ))}
        </ScrollView>
    </View>
  )
}

export default Status
