import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native';
import {Api_Url} from "../../../FecthedApi/Api"

function Bio() {
    const [edit, setEdit] = useState("");

    const handler = async () => {

        if(!edit.trim()){
            Alert.alert("error","All fields are required.")
        }
        try {
            const response = await axios.post(`${Api_Url}/add/editbio`, {
                editBio: edit, 
            });
            // console.log(response.data);
            setEdit("")
            Alert.alert("Success", "Edit Successful");
        } catch (error) {
            console.log(error, "error");
            // Alert.alert("error");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Edit Bio</Text>
            <TextInput
                placeholder='Edit'
                style={styles.textarea}
                value={edit}
                onChangeText={(text) => setEdit(text)} 
                multiline={true}
                numberOfLines={4} 
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
    headerText: {
        fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    },
    textarea: {
        borderColor: 'gray',
        borderWidth: 2,
        marginVertical: 10,
        fontSize: 20,
        maxWidth: 390,
        height: 100, 
        textAlignVertical: 'top', 
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
           borderRadius: 5,
    }
});

export default Bio;
