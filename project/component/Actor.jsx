import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {Api_Url} from "../FecthedApi/Api"

function Actor() {
  const [actorName, setActorName] = useState('');
  const [image, setImage] = useState('');

  const handler = async () => {
    
    if(!actorName.trim() || !image.trim()){
      Alert.alert("error","All fields are required.")
    }

    try {
      const response = await axios.post(`${Api_Url}/actors/add/actor`, {
        actorName:actorName,
        Image:image
      });
      setActorName("")
      setImage("")
      Alert.alert("Success","Actor Name Successfully")
      console.log(response.data);
    } catch (error) {
      console.log(error, "Error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Actor</Text>
      <TextInput
        placeholder='Actor Name'
        value={actorName}
        onChangeText={(Text)=>setActorName(Text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Image URL'
        value={image}
        onChangeText={(Text)=>setImage(Text)}
        style={styles.input}
      />
      <Button title="Submit" onPress={handler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumblue',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Actor;
