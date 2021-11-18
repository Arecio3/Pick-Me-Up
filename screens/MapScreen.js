import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'twrnc'
const MapScreen = () => {
    return (
        <View>
            <Text>Map Screen</Text>

            <View styles={tw`h-1/2`}></View>
            <View styles={tw`h-1/2`}></View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
