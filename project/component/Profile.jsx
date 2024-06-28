import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

function Profile() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.125.101:5002/add/add/bio");
      setData(response.data);
     
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(()=>{
      fetchData()
    },1000); 

  
    fetchData();

    
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
        {data && data.map((item) => (
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
        <Text style={styles.sectionTitle}>Your Favorite Actor Name List Add</Text>
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumblue',
    alignItems: 'center',
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
    color: 'white',
  },
  section: {
    backgroundColor: 'mediumblue',
    // marginTop: 20,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
});

export default Profile;
