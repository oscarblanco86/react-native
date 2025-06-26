import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        showsPointsOfInterest={false}
        style={styles.map}
        initialRegion={{
          // latitude: 37.78825,
          // longitude: -122.4324,
          latitude: 14.769144,
          longitude: -88.783625,

          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
export default MapScreen;
