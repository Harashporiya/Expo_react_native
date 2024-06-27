import React from 'react'
import { Text, View } from 'react-native'
import MoviesShow from './MoviesShow'
import DcMovies from './DcMovies'

function Home() {
  return (
    <View>
      {/* <Text style={{fontSize:30}}>Hello</Text> */}
      {/* <MoviesShow /> */}
      <DcMovies />
    </View>
  )
}

export default Home
