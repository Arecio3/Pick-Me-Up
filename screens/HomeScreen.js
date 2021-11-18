import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import logo from '../assets/logo2.png';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOG_MAPS_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();
    
    return (
        <SafeAreaView style={tw`bg-gray-900 h-full`}>
            <View style={tw`p-5`}>
                <Image 
                style={{
                    width: 100, 
                    height: 100,
                    resizeMode: 'contain',
                    marginTop: 5
                }}
                source={logo}/>

                <GooglePlacesAutocomplete 
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                placeholder="Pick up Location"
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18,
                    },
                }}
                returnKeyType={"search"}
                onPress={(data, details = null) => {
                    // Push data to redux store
                    dispatch(
                        setOrigin({
                        // Grabs data from API
                        location: details.geometry.location,
                        description: data.description,
                    })
                    );
                    dispatch(setDestination(null));
                }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                minLength={2}
                query={{
                    key: GOOG_MAPS_KEY,
                    language: 'en',
                }}
                />
            <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
