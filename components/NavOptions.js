import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'
    const data = [
        {
            id: '123',
            title: 'Pick up a ride',
            image: 'https://links.papareact.com/3pn',
            screen: 'MapScreen',
        },
        {
            id: '456',
            title: 'Order food',
            image: 'https://links.papareact.com/28w',
            screen: 'EatScreen',
        },
    ]
const NavOptions = () => {
    return (
        <FlatList 
        data={data}
        horizontal
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
            style={tw`justify-center items-center p-2 pl-6 pb-8 pt-4 bg-gray-800 mt-2 mr-4 w-40 rounded-lg`}
            >
                <View>
                    <Image 
                        style={{ width: 120, height: 120, resizeMode: 'contain'}}
                        source={{ uri: item.image }}
                    />
                    <Text style={tw`text-gray-400 font-semibold text-lg mt-2`}>{item.title}</Text>
                    <Icon 
                        type='ant-design'
                        name="arrowright"
                        color="white"
                        style={tw`p-2 bg-green-900 rounded-full w-10 mt-4`}
                    />
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavOptions