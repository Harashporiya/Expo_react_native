import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View,Text } from 'react-native'

function DcButton() {
    const navigation = useNavigation();
  return (
    <View>
        <Text style={{color:"white",fontSize:20}} onPress={()=>navigation.navigate("DcMovies")}>Dc Universe</Text>
    </View>
  )
}

export default DcButton
