import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function ReportStrayScreen() {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  const handleCapture = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission denied for location!');
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);

    const result = await ImagePicker.launchCameraAsync({ base64: true });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📸 Report a Stray</Text>
      <Button title="Capture Photo & Location" onPress={handleCapture} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {location && (
        <Text style={styles.text}>
          Location: {location.latitude}, {location.longitude}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 22, marginBottom: 20 },
  image: { width: 250, height: 250, marginTop: 20 },
  text: { marginTop: 15 },
});
