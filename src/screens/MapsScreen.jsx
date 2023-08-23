import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useRoute } from "@react-navigation/native";

const MapsScreen = () => {
  const {
    params: { locationName, postLocation },
  } = useRoute();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    setLocation(postLocation);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        // minZoomLevel={15}
        showUserLocation={true}
      >
        {location && (
          <Marker
            title={locationName}
            coordinate={location}
            description="Hello"
          />
        )}
      </MapView>
    </View>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
