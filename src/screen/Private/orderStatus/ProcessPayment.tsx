import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PressImage from '../../../component/Button/PressImage'
import { Images } from '../../../constant/images'
import { Fonts } from '../../../constant/fonts'
import { Colors } from '../../../constant/colors'

const ProcessPayment = () => {
  return (
    <View style={{flex:1}}>
     <PressImage image={Images.loaderIcon} style={styles.loader} />
     <Text style={styles.title}>We are processing your payment</Text>
     <Text style={styles.desc}>Maecenas a dui eget ante viverra venenatis. In hac habse platea dictumst.</Text>
    </View>
  )
}

export default ProcessPayment

const styles = StyleSheet.create({
  loader:{
    height:34,
    width:34,
    marginTop:40
  },
  title:{
    fontFamily:Fonts.regular,
    letterSpacing:-0.7,
    fontSize:28,
    lineHeight:28,
    color:Colors.darkBlack,
    marginVertical:20,
    width:'80%'
  },
  desc:{
    fontFamily:Fonts.regular,
    letterSpacing:-0.3,
    fontSize:12,
    lineHeight:16,
    color:Colors.darkBlack,
    width:'80%'
  }
})