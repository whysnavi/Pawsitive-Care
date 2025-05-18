import { useRouter } from 'expo-router';
import { Text } from 'moti';
import { Alert, Linking, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {
  const router = useRouter(); // ✅ fixed — removed the extra 'x'

  const handleBadge = () => {
    Alert.alert('🏅 Badge Unlocked!', 'You earned a Pawsitive Hero badge for helping a stray!');
  };

  const handleVetChat = () => {
    const phoneNumber = '919999999999';
    const message = 'Hi, I’d like to consult a vet via Pawsitive Care.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Could not open WhatsApp. Please make sure it is installed.');
    });
  };

  const handleDonate = () => {
    const upiUrl = 'upi://pay?pa=donate@upi&pn=Pawsitive%20Care&cu=INR';
    Linking.openURL(upiUrl).catch(() => {
      Alert.alert('Error', 'Could not open UPI payment. Make sure your UPI app is installed.');
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', delay: 300 }}
        style={styles.title}
      >
        🐾 Pawsitive Care
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/report')}>
        <Text style={styles.buttonText}>📸 Report a Stray</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/adopt')}>
        <Text style={styles.buttonText}>🐶 View Adoption List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/delivery')}>
        <Text style={styles.buttonText}>🚚 Doorstep Delivery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleVetChat}>
        <Text style={styles.buttonText}>🧑‍⚕️ Chat with a Vet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleBadge}>
        <Text style={styles.buttonText}>🏅 My Badges</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleDonate}>
        <Text style={styles.buttonText}>💰 Support Animal Care</Text>
      </TouchableOpacity>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fdf6ec',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 15,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
