import React from "react";
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOG_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavs from "./NavFavs";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`flex-1 bg-gray-900`}>
            <Text style={tw`text-center py-5 text-xl text-gray-400`}>Good Morning, Arecio</Text>
            {/* Where to */}
            <View style={tw`border-t border-gray-600 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete 
                    placeholder="Where to ?"
                    debounce={400}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOG_MAPS_KEY,
                        language: "en"
                    }}
                    returnKeyType={"search"}
                    minLength={2}
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        }))
                        navigation.navigate("RideOptionsCard");
                    }}
                    />
                </View>
                <NavFavs />
            </View>

            <View style={tw`flex-row justify-evenly py-2 mt-auto border-t border-gray-600`}>
                <TouchableOpacity 
                style={tw`flex flex-row justify-between bg-indigo-800 w-24 px-4 py-3 rounded-full`}
                onPress={() => navigation.navigate('RideOptionsCard')}
                >
                    <Icon name="car" type="font-awesome" color="white" size={16}/>
                    <Text style={tw`text-white text-center ml-2`}>Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row justify-between bg-yellow-500 w-24 px-4 py-3 rounded-full`}>
                    <Icon name="fast-food" type="ionicon" color="black" size={16}/>
                    <Text style={tw`text-center ml-2`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 10,
        fontSize: 18,
        color: '#6B7280'
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})
