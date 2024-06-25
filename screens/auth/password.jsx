import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import CustomButton from '../../components/ui/button';
import Layout from '../../components/ui/layout';
import Lock from '../../assets/assets/images/password-lock.svg';
import EyeOpen from '../../assets/assets/images/dont-view.svg';
import Check from '../../assets/assets/images/compleated.svg';
import CheckOk from '../../assets/assets/images/compleated-light.svg';

function Password() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [validations, setValidations] = useState({
    length: false,
    number: false,
    symbol: false,
    lowercase: false,
    uppercase: false,
  });

  const handlePasswordChange = password => {
    setPassword(password);
    checkPasswordValidations(password);
  };

  const checkPasswordValidations = password => {
    const validationsCopy = {...validations};
    validationsCopy.length = password.length >= 8;
    validationsCopy.number = /\d/.test(password);
    validationsCopy.symbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    validationsCopy.lowercase = /[a-z]/.test(password);
    validationsCopy.uppercase = /[A-Z]/.test(password);
    setValidations(validationsCopy);
  };

  const renderValidationIcon = isValid => {
    return isValid ? (
      <Check width={20} height={20} />
    ) : (
      <CheckOk width={20} height={20} />
    );
  };

  return (
    <Layout>
      <View className="flex items-center justify-center flex-col w-full h-full bg-white">
        <View className="flex-grow flex items-center justify-center flex-col gap-5 mb-5">
          <Image
            source={require('../../assets/assets/images/password-page.jpg')}
          />
          <View className="flex items-center justify-center flex-col">
            <Text className="w-full text-3xl text-center text-black">
              Set a Strong Password
            </Text>
            <Text className="w-full text-lg text-center">
              Set a strong password for your account
            </Text>
          </View>
          <View className="w-full min-h-fit p-2 flex  items-center justify-between">
            <View className="min-w-full border-[1px] border-gray-400 rounded-md flex flex-row items-center p-1">
              <View className="w-fit h-fit object-contain p-1 ">
                <Lock width={30} height={30} />
              </View>
              <TextInput
                keyboardType="text"
                secureTextEntry={open ? false : true}
                className="flex-grow"
                onChangeText={handlePasswordChange}
              />
              <TouchableOpacity
                className="w-fit h-fit object-contain p-1"
                onPress={() => setOpen(!open)}>
                <EyeOpen width={30} height={30} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex items-start justify-center pl-2 gap-2">
            <View className="flex flex-row items-center justify-start w-full">
              {renderValidationIcon(validations.lowercase)}
              <Text className="w-full text-sm text-start ml-2 text-gray-500">
                Should contain at least 8 characters
              </Text>
            </View>

            <View className="flex flex-row items-center justify-start w-full">
              {renderValidationIcon(validations.lowercase)}
              <Text className="w-full text-sm text-start ml-2 text-gray-500">
                Should contain at least one number
              </Text>
            </View>
            <View className="flex flex-row items-center justify-start w-full">
              {renderValidationIcon(validations.lowercase)}
              <Text className="w-full text-sm text-start ml-2 text-gray-500">
                Should contain at least one symbol(@#$%^)
              </Text>
            </View>
            <View className="flex flex-row items-center justify-start w-full">
              {renderValidationIcon(validations.lowercase)}
              <Text className="w-full text-sm text-start ml-2 text-gray-500">
                Should contain a lowercase (small) letter (a-z)
              </Text>
            </View>
            <View className="flex flex-row items-center justify-start w-full">
              {renderValidationIcon(validations.lowercase)}
              <Text className="w-full text-sm text-start ml-2 text-gray-500">
                Should contain a uppercase (capital) letter (A-Z)
              </Text>
            </View>
          </View>
        </View>
        <CustomButton text="Submit" />
      </View>
    </Layout>
  );
}

export default Password;
