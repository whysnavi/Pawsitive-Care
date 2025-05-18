import { useRouter } from 'expo-router';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const items = [
  {
    id: '1',
    name: 'Dog Food',
    price: '₹499',
    img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  },
  {
    id: '2',
    name: 'Pet Shampoo',
    price: '₹299',
    img: 'https://cdn-icons-png.flaticon.com/512/678/678406.png',
  },
  {
    id: '3',
    name: 'Medicine Kit',
    price: '₹699',
    img: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
  },
];

export default function Delivery() {
  const router = useRouter();

  const handleOrder = (name) => {
    Alert.alert('✅ Order Confirmed', `Your order for "${name}" will be delivered shortly!`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.replace('/')}>
        <Text style={styles.backButton}>← Back to Home</Text>
      </TouchableOpacity>

      <Text style={styles.title}>📦 Delivery Essentials</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleOrder(item.name)}
            >
              <Text style={styles.buttonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  backButton: {
    color: '#007AFF',
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    marginBottom: 10,
    color: 'gray',
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
