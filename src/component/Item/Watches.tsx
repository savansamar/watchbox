import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PressImage from '../Button/PressImage'
import { Images } from '../../constant/images'
import { Fonts } from '../../constant/fonts'
import { Colors } from '../../constant/colors'

interface WatchesProp{
  type?:'Horizontal'
}

const Watches = (Props:WatchesProp) => {
  return (
    <View style={[styles.container,Props.type !=='Horizontal' &&{width:'100%'}]}>
        <PressImage image={Images.watchOne} style={{height:104,width:104,alignSelf:"center"}} />
        <Text style={styles.text}>GMT MASTER</Text>
    </View>
  )
}

export default React.memo(Watches)

const styles = StyleSheet.create({
  container:{
    marginHorizontal:3,
    justifyContent:"space-between",
    paddingVertical:10,
  },
  text:{
    alignSelf:"center",
    marginTop:16,
    fontSize:12,
    fontFamily:Fonts.regular,
    color:Colors.darkBlack

  }
})