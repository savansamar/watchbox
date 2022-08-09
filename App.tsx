import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  React.useEffect(()=>{
    SplashScreen.hide()
  },[])

  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'dark-content'} />
      <Navigation />
    </>
  )
}

export default App

const styles = StyleSheet.create({})