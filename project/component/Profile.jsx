import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

function Profile() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [actorCount, setActorCount] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.125.101:5002/add/add/bio");
      setData(response.data);
    } catch (error) {
      console.log("Error fetching bio data:", error);
    }
  };

  const fetchActors = async () => {
    try {
      const response = await axios.get("http://192.168.125.101:5002/actors/all/actors");
      setData1(response.data);
      setActorCount(response.data.length);  
    } catch (error) {
      console.log("Error fetching actors data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
      fetchActors();
    }, 1000);

    fetchData();
    fetchActors();

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Image style={styles.image} source={{ uri: "https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" }} />
        </View>
        <Text style={styles.name}>UserName</Text>
        <View style={styles.separator} />
        {data.map((item) => (
          <View key={item._id}>
            <Text style={styles.bioText}>{item.editBio}</Text>
          </View>
        ))}
        <View style={styles.separator} />
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate("Bio")}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Favorite Actor Name List</Text>
        <Text style={styles.actorCount}>Total Actors: {actorCount}</Text>
        {data1.map((item) => (
          <View key={item._id} style={styles.actorContainer}>
            <Text style={styles.actorName}>{item.actorName}</Text>
            <Image style={styles.actorImage} source={{ uri: item.Image }} />
          </View>
        ))}
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate("Actor")}>
          <Text style={styles.buttonText}>Add Actor</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "mediumblue",
    padding: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: 'blue',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  name: {
    color: 'white',
    fontSize: 24,
    marginTop: 10,
  },
  separator: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '100%',
    marginVertical: 10,
  },
  bioText: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  editButton: {
    width: 120,
    height: 40,
    backgroundColor: 'deepskyblue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  section: {
    backgroundColor: 'mediumblue',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  actorCount: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
  actorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  actorName: {
    color: 'white',
    fontSize: 24,
    flex: 1,
  },
  actorImage: {
    width: 70,
    height:70,
    borderRadius: 50,
  },
});

export default Profile;
