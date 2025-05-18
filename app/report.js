import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';


export default function ReportStray() {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  const handleCapture = async () => {
    try {
      // Request location permission
      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
      if (locationStatus !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required.');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);

      // Request camera permission
      const camStatus = await ImagePicker.requestCameraPermissionsAsync();
      if (camStatus.status !== 'granted') {
        Alert.alert('Permission Denied', 'Camera permission is required.');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({ base64: true });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      } else {
        Alert.alert('Cancelled', 'No image was captured.');
      }

    } catch (error) {
      Alert.alert('Error', 'Something went wrong: ' + error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📸 Report a Stray</Text>
      <Button title="Capture Photo & Location" onPress={handleCapture} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {location && (
        <Text style={styles.text}>
          Location: {location.latitude.toFixed(5)}, {location.longitude.toFixed(5)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' },
  header: { fontSize: 22, marginBottom: 20, color: 'white' },
  image: { width: 250, height: 250, marginTop: 20 },
  text: { marginTop: 15, color: 'white' },
});
