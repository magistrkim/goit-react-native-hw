import { useState, useEffect } from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  TextInput,
} from "react-native";

const CreatePostsScreen = () => {
  const [postName, setPostName] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [postLocation, setPostLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoUri, setPhotoUri] = useState("");
  const navigation = useNavigation();

useEffect(() => {
  (async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync();
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setPostLocation(coords);
    } catch (error) {
      console.log(error);
    }
  })();
}, [photoUri]);

  const newPostData = {
    postName: postName || "Без назви",
    locationName: locationName || "Без назви",
    postLocation,
    photoUri,
  };
  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();
        setHasPermission(status === "granted");
      } catch (error) {
        console.log(error);
      }
    })();
    return handleReset;
  }, []);

  if (!hasPermission) {
    return <Text>There is no access to camera</Text>;
  }
  const handleSubmit = async () => {
    if (!photoUri) {
      setPhotoUri("");
      return;
    }
    if (!postLocation) {
      try {
      } catch (error) {
        console.log(error);
      }
      return;
    }
    console.log(newPostData);
    navigation.navigate("Posts");
    handleReset();
  };
  const handleReset = () => {
    setPostName(null);
    setLocationName(null);
    setPostLocation(null);
    setPhotoUri("");
  };
  const isButtonDisabled = photoUri;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.imageWrapper}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Camera type={type} ref={setCameraRef} style={{ flex: 1 }}>
              <ImageBackground src={photoUri} style={styles.image}>
                <TouchableOpacity
                  style={styles.cameraIconWrapper}
                  onPress={async () => {
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      await MediaLibrary.createAssetAsync(uri);
                      setPhotoUri(uri);
                    }
                  }}
                >
                  <FontAwesome
                    name="camera"
                    size={22}
                    color="#BDBDBD"
                    style={styles.cameraIcon}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </Camera>
          </TouchableOpacity>
          <Text style={styles.imageDescription}>
            {!photoUri ? "Завантажте фото" : "Редагувати фото"}
          </Text>
          <TextInput
            placeholder="Назва..."
            style={styles.input}
            onChangeText={setPostName}
            value={postName}
          />
          <View style={styles.locationWrapper}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={styles.mapIcon}
            />
            <TextInput
              placeholder="Місцевість..."
              style={[styles.input, styles.locationInput]}
              onChangeText={setLocationName}
              value={locationName}
            />
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.publishBtn, isButtonDisabled && styles.enableBtn]}
            disabled={!isButtonDisabled}
          >
            <Text
              style={[
                styles.publishBtnText,
                isButtonDisabled && styles.enableBtnText,
              ]}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.removeBtn} onPress={handleReset}>
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 32,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#f6f6f6",
    marginBottom: 8,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    backgroundColor: "transparent",
  },
  cameraIconWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  cameraIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -11 }, { translateY: -11 }],
  },
  imageDescription: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 48,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    color: "#212121",
    marginBottom: 16,
  },
  locationWrapper: {
    position: "relative",
    marginBottom: 32,
  },
  locationInput: {
    paddingLeft: 28,
    marginBottom: 0,
  },
  mapIcon: {
    position: "absolute",
    bottom: 16,
  },
  publishBtn: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    alignItems: "center",
  },
  enableBtn: {
    backgroundColor: "#FF6C00",
  },
  publishBtnText: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#BDBDBD",
  },
  enableBtnText: {
    color: "#FFFFFF",
  },
  removeBtn: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
