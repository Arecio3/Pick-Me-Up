import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
    {
        id: "Uber-X-123",
        title: "Sedan",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-XL-456",
        title: "SUV",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX-123",
        title: "Luxury",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
]

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-gray-800 flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 rounded-full bg-black z-50`}
        >
          <Icon name="chevron-left" type="fontawesome" color="white" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl text-white`}>
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>

      <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item: { id, title, image, multiplier }, item}) => (
          <TouchableOpacity onPress={() => setSelected(item)} style={tw`flex-row items-center justify-between px-10 border-t border-gray-700 ${id === selected?.id && "bg-gray-600" }`}>
              <Image 
              style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain"
              }}
              source={{ uri: image }}
              />
              <View style={tw`-ml-6`}>
                  <Text style={tw`text-xl font-semibold text-gray-400`}>{title}</Text>
                  <Text style={tw`text-gray-300`}>{travelTimeInformation.duration.text}</Text>
              </View>
              <Text style={tw`text-xl text-white`}>$100</Text>
          </TouchableOpacity>
      )}
      />

      <View style={tw`items-end`}>
          <TouchableOpacity disabled={!selected} style={tw`bg-green-900 py-3 p-3 bottom-8 m-3 rounded-full ${!selected && 'bg-gray-300'}`}>
              <Text style={tw`text-center text-white text-xl`}>Selected {selected?.title}</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
