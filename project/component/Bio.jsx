import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native';

function Bio() {
    const [edit, setEdit] = useState("");

    const handler = async () => {
        try {
            const response = await axios.post("http://192.168.125.101:5002/add/editbio", {
                editBio: edit, 
            });
            // console.log(response.data);
            setEdit("")
            Alert.alert("Success", "Edit Successful");
        } catch (error) {
            console.log(error, "error");
            Alert.alert("error");
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
        flex: 1,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textarea: {
        borderColor: 'gray',
        borderWidth: 2,
        marginVertical: 10,
        padding: 10,
        fontSize: 20,
        width: '100%',
        maxWidth: 330,
        borderRadius: 8,
        height: 100, 
        textAlignVertical: 'top', 
    }
});

export default Bio;
