import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Check from '../../assets/assets/images/compleated.svg';
import DownArrow from '../../assets/assets/images/drop-down.svg';
import {videoData} from '../../constants';
import Video from 'react-native-video';

export default function Lecture() {
  const [expandedLesson, setExpandedLesson] = useState(null);

  const toggleLesson = index => {
    if (expandedLesson === index) {
      setExpandedLesson(null);
    } else {
      setExpandedLesson(index);
    }
  };

  return (
    <ScrollView vertical={true} className="w-full h-full">
      <View>
        <Video
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          resizeMode="cover"
          className="h-56 w-full"
          controls
        />
      </View>
      <View className="px-5 w-full h-full pt-5">
        <View className="flex flex-row w-full items-center justify-between mb-5">
          <View>
            <Text className="text-black text-lg font-bold">Introduction</Text>
            <Text className="">Fundamentals of maths</Text>
          </View>
          <TouchableOpacity className="flex flex-row gap-2 items-center justify-center border-[1px] border-[#5c4eb3] px-1 pb-3 pt-1 rounded-lg">
            <Check width={20} height={20} />
            <Text className="pr-2">Mark as Completed</Text>
          </TouchableOpacity>
        </View>
        <View>
          {videoData.map((item, lessonIndex) => (
            <>
              <TouchableOpacity
                className="flex flex-row items-center justify-between py-5 px-3 bg-white border-[1px] border-gray-300 rounded-lg mb-5"
                onPress={() => toggleLesson(lessonIndex)}
                key={item.title}>
                <Text className="text-black font-semibold text-base">
                  Lesson {lessonIndex + 1}
                </Text>
                <DownArrow width={20} height={20} />
              </TouchableOpacity>

              {expandedLesson === lessonIndex &&
                item.videos.map((video) => (
                  <View
                    className="flex flex-row items-center justify-between p-4"
                    key={video.subtitle}>
                    <View className="flex flex-row items-center justify-start gap-2">
                      <Check />
                      <Text className="capitalize">{video.subtitle}</Text>
                    </View>
                    <Text>{video.time}</Text>
                  </View>
                ))}
            </>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
