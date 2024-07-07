import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native';
import {Api_Url} from "../../../FecthedApi/Api"
import  AsyncStorage from "@react-native-async-storage/async-storage"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation =useNavigation();


  const handleSubmit = async () => {
   
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    try {
      const response = await axios.post(`${Api_Url}/user/login`, {
        email,
        password,
      });
      setEmail("");
      setPassword("");
      navigation.navigate("Home")
      Alert.alert("Success", "Login successful!");
      // console.log(response.data.token);
      const token = response.data.token;
      await AsyncStorage.setItem('token', token);
      // console.log("Token saved successfully:", token); 
    } catch (error) {
      console.log(error, "Error");
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: "https://learningzila.com/wp-content/uploads/2023/07/istockphoto-1281150061-612x612-1.jpg" }} 
        style={styles.image}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput 
        placeholder='Email' 
        style={styles.input} 
        keyboardType='email-address' 
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput 
        placeholder='Password' 
        style={styles.input} 
        secureTextEntry 
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.buttonContainer}>
        <Button 
          title='LOGIN' 
          color='blue'
          onPress={handleSubmit}
        />
      </View>
     
      <Text style={styles.footerText}>Don't have an account? <Text onPress={()=>navigation.navigate("SignUp")} style={{color:"blue",fontSize:20}}>SignUp</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: "blue",
    fontFamily: "sans-serif",
    fontWeight: 'normal',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    fontSize: 20,
    width: '100%',
    maxWidth: 330,
  },
  buttonContainer: {
    width: 300,
    marginTop: 10,
  
  },
  image: {
    width: 250,
    height: 250,
  },
  footerText: {
    marginTop: 20,
    fontSize: 20,
    color: 'gray',
  },
});

export default Login;
