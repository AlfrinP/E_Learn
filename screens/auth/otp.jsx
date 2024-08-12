import {Image, Text, TextInput, View} from 'react-native';
import CustomButton from '../../components/ui/button';
import Layout from '../../components/ui/layout';
import {useNavigation} from '@react-navigation/native';


export default function OTP() {
  const navigation = useNavigation();
  return (
    <Layout>
      <View className="flex items-center justify-between flex-col w-full h-full ">
        <View className="flex-1 flex items-center justify-center flex-col gap-5 w-full bg-white">
          <Image source={require('../../assets/assets/images/otp-page.jpg')} />
          <View className="flex items-center justify-center flex-col gap-5">
            <Text className="w-full text-3xl text-center text-black">
              Verify OTP
            </Text>
            <View className="h-16 w-full">
              <Text className="text-base text-center flex-1">
                Please enter the 4 digit vertification code that is send to you
                at
                <Text className="text-blue-400"> +91 xxxxxxx</Text>
              </Text>
            </View>
          </View>
          <View className="min-w-full min-h-fit py-2 flex flex-row items-center justify-evenly">
            <View className="w-12 border-[1px] border-gray-400 rounded-md">
              <TextInput keyboardType="numeric" />
            </View>
            <View className="w-12 border-[1px] border-gray-400 rounded-md">
              <TextInput keyboardType="numeric" />
            </View>
            <View className="w-12 border-[1px] border-gray-400 rounded-md">
              <TextInput keyboardType="numeric" />
            </View>
            <View className="w-12 border-[1px] border-gray-400 rounded-md">
              <TextInput keyboardType="numeric" />
            </View>
          </View>
          <View className="w-full flex items-end justify-end">
            <Text>
              Don't receive the code ?
              <Text className="text-[#5c4eb3] underline"> resend code</Text>
            </Text>
          </View>
          <View className="w-full flex items-center justify-center">
            <CustomButton text="verify" onPress={()=>navigation.navigate('Dashboard')} />
          </View>
        </View>
      </View>
    </Layout>
  );
}
