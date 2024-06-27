import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';

function Profile() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image style={styles.image} source={{uri: "https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg"}} />
      </View>
      <Text style={styles.name}>UserName</Text>
      <View style={styles.separator} />
      <Text style={styles.name}>Programming Languages - C | C++ | Frontend - JavaScripts | React_js | CSS | HTML |
       Tailwind_CSS | React_Native | Backend - Node_js | Express_js | MongoDb</Text>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 20, color: 'white' }} >Edit</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.List}>
      <Text style={styles.actor}>Your Favourite Actor</Text>
      {/* <TextInput style={styles.input} placeholder=' Your Favourite Actor '/> */}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'mediumblue',
    padding: 20,
    alignItems: 'center',
    
  },
  circle: {
    width: 150,
    height: 150,
    borderColor: 'blue',
    borderWidth: 4,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: 'deepskyblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
  },
  name: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, 
  },
  separator: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '100%',
    marginVertical: 10,
  },
  actor:{
    fontSize:20,
    color:"white",
    padding:10,

  },
  List:{
    backgroundColor:"mediumblue",
    
  }
});

export default Profile;
