import { TouchableOpacity, StyleSheet, Text, StyleProp, ViewStyle, TextStyle, Image, ImageStyle } from 'react-native'
import React from 'react'
import { BUTTON_HEIGHT } from '../../constant/style'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'

export interface PressImageProps{
    image?:string|any,
    style?:StyleProp<ImageStyle>,
    spaceVertical?:number,
    spaceHorizontal?:number,
    resizeMode?:'contain'|'cover'|'centre',
    onPress?:()=>void,
    disable?:boolean
}

const PressImage = (Props:PressImageProps) => {
    let mode:any=Props.resizeMode?Props.resizeMode:'cover'
    const dis=Props?.disable?true:false
  return (
    <TouchableOpacity disabled={dis} activeOpacity={0.5} onPress={Props.onPress}>
       <Image source={Props.image} style={[styles.container,Props.style]}  />
    </TouchableOpacity>
  )
}

export default PressImage

const styles = StyleSheet.create({
    
    container:{
        height:20,
        width:20,
    }
})