import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View,Text } from 'react-native'

function MarvelButton() {
    const navigation = useNavigation();
  return (
    <View>
        <Text style={{color:"white",fontSize:20}} onPress={()=>navigation.navigate("MoviesShow")}>Marvel Universe</Text>
    </View>
  )
}

export default MarvelButton
