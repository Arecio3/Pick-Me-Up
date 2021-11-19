import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

const data = [
    { 
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, Tampa, FL",
    },
    { 
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Working Street, Downtown Tampa, FL",
    },
]

const NavFavs = () => {
    return (

        <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View 
                style={[tw`bg-gray-600`, { height: 0.5 }]}
            />
        )}
        renderItem={({item: { location, destination, icon }}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <Icon 
                    style={tw`mr-4 rounded-full bg-indigo-500 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg text-gray-100`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavFavs

const styles = StyleSheet.create({})
