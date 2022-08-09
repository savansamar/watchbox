import { StyleSheet, Text, View ,TouchableOpacity, StyleProp, ViewStyle, TextStyle} from 'react-native'
import React from 'react'
import { StyleProps } from 'react-native-reanimated'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'

interface Props{
  name?:string,
  onPress?:()=>void,
  containerStyle?:StyleProp<ViewStyle>,
  textStyle?:StyleProp<TextStyle>,
  disable?:boolean
}

const TouchableText = (Props:Props) => {
  return (
    <TouchableOpacity disabled={Props?.disable?true:false} activeOpacity={0.5} style={[Props.containerStyle]} onPress={Props.onPress} >
      <Text style={[{
        fontSize:12,
        color:Colors.darkBlack,
        fontFamily:Fonts.medium

      },Props.textStyle]}>{Props.name}</Text>
    </TouchableOpacity>
  )
}

export default TouchableText

const styles = StyleSheet.create({})