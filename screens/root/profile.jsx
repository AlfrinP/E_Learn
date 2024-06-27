import React from 'react';
import { Button, Image, ScrollView, Text, TextInput, View } from 'react-native';
import { scroll, account } from '../../constants/index';
import Layout from '../../components/ui/layout';
import * as Progress from 'react-native-progress';
import Information from '../../assets/assets/images/information.svg';
import Payment from '../../assets/assets/images/payment-history.svg';
import Back from '../../assets/assets/images/back-arrow.svg';

const Profile = () => {
  return (
    <Layout>
      <View className="w-full h-full">
        <View className="mt-[10%] w-full items-center">
          <Image
            className="rounded-full w-24 h-24 items-center"
            source={require('../../assets/assets/images/person.jpg')}
          />
          <Text className="mt-2 font-semibold text-lg text-center">
            Alfrin Poulose
          </Text>
          <Text className="text-center mt-2 text-[12px]">alfrinpoulose@gmail.com</Text>
        </View>
        <View className="mt-5">
          <Text className="mb-3 text-lg font-semibold">Course You're Taking</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full gap-3">
            {scroll.map((item, index) => (
              <View className="w-fit h-fit p-4 rounded-md" style={{ backgroundColor: item.bg }} key={index}>
                <Text className="text-md font-md text-white">
                  {item.label}
                </Text>
                <Text className="text-[10px] text-white">{item.time}</Text>
                <View className="flex-row">
                  <Text className="text-white pr-2">{item.value}</Text>
                  <View>
                    <Progress.Bar
                      progress={item.pro}
                      width={90}
                      color={'white'}
                      unfilledColor={item.fill}
                      borderColor={'transparent'}
                      className="mt-2"
                    />
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
          <View>
            <Text className="mt-5 text-lg font-semibold">Account</Text>
            <View className="w-full gap-3 mt-1">
              <View className="w-fit h-fit p-4 bg-white rounded-md flex-row justify-between">
                <View className="flex-row items-center">
                  <Information />
                  <Text className="text-md font-md pl-2">
                    Educational Information
                  </Text>
                </View>
                <Back />
              </View>
              <View className="w-fit h-fit p-4 bg-white rounded-md flex-row justify-between">
                <View className="flex-row items-center">
                  <Payment />
                  <Text className="text-md font-md pl-2">
                    Payment History
                  </Text>
                </View>
                <Back />
              </View>
              <View className="w-fit h-fit p-4 bg-white rounded-md flex-row justify-between">
                <View className="flex-row items-center">
                  <Information />
                  <Text className="text-md font-md pl-2">
                    Account Information
                  </Text>
                </View>
                <Back />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Profile;
