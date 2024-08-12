import {Text, TouchableOpacity} from 'react-native';

export default function CustomButton({text, onPress}) {
  return (
    <TouchableOpacity
      className="h-14 w-full text-center bg-[#5c4eb3] flex items-center justify-center rounded-md"
      onPress={onPress}>
      <Text className="text-base text-white capitalize">{text}</Text>
    </TouchableOpacity>
  );
}
