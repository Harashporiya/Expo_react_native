import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, ImageBackground } from 'react-native';

function AddMarvekMovies() {
  const [Hero_Name, setHero_Name] = useState('');
  const [Real_Name, setReal_Name] = useState('');
  const [Superpower, setSuperpower] = useState('');
  const [ImageURI, setImageURI] = useState('');
 
 

  const handleSubmit = async () => {

    if(!Hero_Name.trim() || !Real_Name.trim() || !Superpower.trim() || !ImageURI.trim() ){
      Alert.alert("error","All fields are required")
    }

    try {
      const response = await axios.post("http://192.168.125.101:5002/movies/add/marvel", {
        Hero_Name,
        Real_Name,
        Image: ImageURI,
        Superpower
      });
      Alert.alert("Success", "Added successfully!");
      console.log('Response:', response.data);
      setHero_Name("");
      setReal_Name("");
      setImageURI("");
      setSuperpower("");
    
    } catch (error) {
      console.log('Error submitting the form:', error);
      // Alert.alert("Error","error");
    }
  };
  

  return (
    <ImageBackground 
      source={{uri: "https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg"}} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Marvel Movies</Text>
        <TextInput
          placeholder='Image URL'
          keyboardType='url'
          value={ImageURI}
          onChangeText={setImageURI}
          style={styles.input}
        />
        <TextInput
          placeholder='Hero Name'
          value={Hero_Name}
          onChangeText={setHero_Name}
          style={styles.input}
        />
        <TextInput
          placeholder='Real Name'
          value={Real_Name}
          onChangeText={setReal_Name}
          style={styles.input}
        />
        <TextInput
          placeholder='SuperPower'
          value={Superpower}
          onChangeText={setSuperpower}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    fontSize: 20,
    width: '100%',
    maxWidth: 330,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 300,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
});

export default AddMarvekMovies;
