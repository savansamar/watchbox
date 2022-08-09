import { TouchableOpacity, StyleSheet, Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { BUTTON_HEIGHT } from '../../constant/style'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'
import PressImage from './PressImage'
import { Images } from '../../constant/images'

export interface TextImageProp{
    name?:string,
    style?:StyleProp<ViewStyle>,
    textStyle?:StyleProp<TextStyle>,
    spaceVertical?:number,
    spaceHorizontal?:number,
    onPress?:()=>void,
    backgroundColor?:string,
    color?:string,
    image?:string
}

const TextImage = (Props:TextImageProp) => {
    const CONTAINER:ViewStyle={
        ...styles.button,
        backgroundColor:Props?.backgroundColor?Props.backgroundColor:Colors.white,
        marginVertical:Props?.spaceVertical?Props.spaceVertical:0,
        marginHorizontal:Props?.spaceHorizontal?Props.spaceHorizontal:0,
       
    }
    const TEXT:TextStyle={
        ...styles.text,
        color:Props?.color?Props.color:Colors.darkBlack
    }

  return (
    <TouchableOpacity activeOpacity={0.5} style={[CONTAINER,Props.style]} onPress={Props.onPress} >
        <View style={{flex:1}}>
            {Props.image &&
                <PressImage disable={true} image={Props.image} />
            }
        </View>
        <View >
                <Text style={[TEXT,Props.textStyle]}>{Props.name}</Text>
        </View>
        <View style={{flex:1}} />
    </TouchableOpacity>
  )
}

export default TextImage

const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.darkBlack,
        height:BUTTON_HEIGHT,
        borderWidth:1,
        borderColor:Colors.grey,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingHorizontal:15,
      marginBottom:8
    },
    text:{
        fontSize:13,
        fontFamily:Fonts.medium,
        color:Colors.white,
        letterSpacing:0.4
    }
})