import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

function DcMovies() {
  const [dcData, setDcData] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const [dcResponse, additionalResponse] = await Promise.all([
        axios.get("http://192.168.125.101:5001/dc"),
        axios.get("http://192.168.125.101:5001/movies/dc/add")
      ]);
      setDcData(dcResponse.data);
      setAdditionalData(additionalResponse.data);
    } catch (error) {
      setError(error.message || "An error occurred while fetching data.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000); 

    fetchData();

    return () => clearInterval(interval); 
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loader}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const renderItem = (item) => (
    <View key={item._id} style={styles.item}>
      <Image source={{ uri: item.Image }} style={styles.image} />
      <Text style={styles.heroName}>{item.Hero_Name}</Text>
      <Text style={styles.label}>Real Name: <Text style={styles.value}>{item.Real_Name}</Text></Text>
      <Text style={styles.label}>Superpower: <Text style={styles.value}>{item.Superpower}</Text></Text>
      <Text style={styles.label}>First Appearance: <Text style={styles.value}>{item.First_Appearance}</Text></Text>
      <Text style={styles.label}>Costume Quirk: <Text style={styles.value}>{item.Costume_Quirk}</Text></Text>
      <Text style={styles.label}>Catchphrase: <Text style={styles.value}>{item.Catchphrase}</Text></Text>
      <Text style={styles.label}>Backstory: <Text style={styles.value}>{item.Backstory}</Text></Text>
      <Text style={styles.label}>Most Useless Moment: <Text style={styles.value}>{item.Most_Useless_Moment}</Text></Text>
    </View>
  );

  const renderMovies = (item) => (
    <View key={item._id} style={styles.item}>
      <Image source={{ uri: item.Image }} style={styles.image} />
      <Text style={styles.heroName}>{item.Hero_Name}</Text>
      <Text style={styles.label}>Real Name: <Text style={styles.value}>{item.Real_Name}</Text></Text>
      <Text style={styles.label}>Superpower: <Text style={styles.value}>{item.Superpower}</Text></Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {dcData.map(renderItem)}
      <Text style={styles.title}>ADD</Text>
      {additionalData.map(renderMovies)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  heroName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 5,
  },
  value: {
    fontWeight: '400',
    color: '#777',
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title:{
    fontSize:24,
    marginLeft:150,
    fontWeight:"bold",
    marginBottom:20,
  },
});

export default DcMovies;
