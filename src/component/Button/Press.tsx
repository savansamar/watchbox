import { TouchableOpacity, StyleSheet, Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { BUTTON_HEIGHT } from '../../constant/style'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'

export interface ButtonProps{
    name?:string,
    style?:StyleProp<ViewStyle>,
    textStyle?:StyleProp<TextStyle>,
    spaceVertical?:number,
    spaceHorizontal?:number,
    onPress?:()=>void,
    backgroundColor?:string,
    color?:string,
    disable?:boolean,
    containerStyle?:StyleProp<ViewStyle>
}

const Press = (Props:ButtonProps) => {
    const CONTAINER:ViewStyle={
        ...styles.button,
        backgroundColor:Props?.disable?Colors.grey:Props.backgroundColor?Props.backgroundColor: Colors.darkBlack,
        marginVertical:Props?.spaceVertical?Props.spaceVertical:0,
        marginHorizontal:Props?.spaceHorizontal?Props.spaceHorizontal:0,
    }
    const TEXT:TextStyle={
        ...styles.text,
        color:Props.color?Props.color:Colors.white
    }

   
  return (
    <TouchableOpacity disabled={Props.disable} activeOpacity={0.5} style={[CONTAINER,Props.style,Props.containerStyle]} onPress={Props.onPress} >
        <Text style={[TEXT,Props.textStyle]}>{Props.name}</Text>
    </TouchableOpacity>
  )
}

export default Press

const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.darkBlack,
        height:BUTTON_HEIGHT,
        borderWidth:1.3,
        borderColor:Colors.white,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:13,
        fontFamily:Fonts.medium,
        color:Colors.white,
        letterSpacing:0.4
    }
})