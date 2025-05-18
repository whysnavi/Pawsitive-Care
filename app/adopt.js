import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const animals = [
  {
    id: '1',
    name: 'Tommy',
    breed: 'Indie',
    status: 'Available',
    img: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_2439.jpg',
  },
  {
    id: '2',
    name: 'Luna',
    breed: 'Labrador',
    status: 'Available',
    img: 'https://images.dog.ceo/breeds/labrador/n02099712_4317.jpg',
  },
];


export default function Adopt() {
  const handleAdopt = (name) => {
    Alert.alert('Thank you!', `You expressed interest in adopting ${name}.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🐾 Available for Adoption</Text>
      <FlatList
        data={animals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.breed}>{item.breed}</Text>
            <Text style={styles.status}>Status: {item.status}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAdopt(item.name)}
            >
              <Text style={styles.buttonText}>Adopt</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold' },
  breed: { fontSize: 16, color: '#666' },
  status: { marginTop: 5, marginBottom: 10 },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
