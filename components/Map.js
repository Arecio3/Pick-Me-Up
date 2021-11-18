import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const Map = () => {
    // Grabs location
    const origin = useSelector(selectOrigin);
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map} 
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
     }}
     mapType="mutedStandard"
    >
        {origin?.location && (
            <Marker
            coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng
            }}
            title={"Pick Up"}
            description={origin.description}
            identifier="origin"
            />
        )}
    </MapView>
    </View>
  );
}

export default Map;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});