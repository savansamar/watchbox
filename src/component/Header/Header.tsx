import { StyleSheet, Text, View, ViewStyle, StyleProp, TouchableOpacity, TextStyle, ImageStyle, StatusBar } from 'react-native'
import React from 'react'
import { useHeaderHeight } from '@react-navigation/elements'
import { Colors } from '../../constant/colors'
import { HEADER_HEIGHT, PADDING_HORIZONTAL } from '../../constant/style'
import { Fonts } from '../../constant/fonts'
import PressImage from '../Button/PressImage'
import { Images } from '../../constant/images'

export interface HeaderProps{
    leftIcon?:string,
    rightIcon?:string,
    title?:string,
    leftTitle?:string,
    rightTitle?:string,
    children?:React.ReactNode,
    containerStyle?:StyleProp<ViewStyle>,
    background?:'dark'|'light',
    onPressRight?:()=>void,
    onPressLeft?:()=>void,
    leftImageStyle?:StyleProp<ImageStyle>,
    rightTitleStyle?:StyleProp<TextStyle>,
    rightImageStyle?:StyleProp<ImageStyle>,

}




const Header = (Props:HeaderProps) => {

    const height=HEADER_HEIGHT
    const CONTAINER:ViewStyle={
        ...styles.container,
        height:height,
        backgroundColor:(Props?.background) ==='light'?Colors.white:Colors.darkBlack
    }

    const RightTitle:TextStyle={
        ...styles.rightTitle,
        color:Props?.background ==='light'?Colors.darkBlack:Colors.white
    }

    const _left=()=>{
        return(
            <View style={styles.leftSection}>
               {
                Props.leftIcon &&
                <PressImage image={Props.leftIcon} style={Props.leftImageStyle} onPress={Props.onPressLeft} />
               }
            </View>
        )
    }
    const _center=()=>{
        const color:TextStyle={color:Props.background==='light'?Colors.darkBlack:Colors.white}
        return(
            <View style={styles.centerSection} >
                 {Props.title &&<Text style={[styles.title,color]}>{Props.title}</Text>}
            </View>
        )
    }


    const _right=()=>{
        return(
            <View style={styles.rightSection} >
                 {
                    Props.rightTitle && 
                    <TouchableOpacity activeOpacity={0.5} onPress={Props.onPressRight} >
                    <Text style={[RightTitle,Props.rightTitleStyle]}>{Props.rightTitle}</Text>
                    </TouchableOpacity>
                 }
                 {
                    Props.rightIcon &&
                    <PressImage style={Props.rightImageStyle} image={Props.rightIcon} onPress={Props.onPressRight} />
                 }
            </View>
        )
    }

  return (
    <View style={[CONTAINER,Props.containerStyle]}>
        <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={Props.background==='light'?'dark-content':'light-content'} />
      <View style={styles.section}>
          {_left()}
          {_center()}
          {_right()} 
      </View>
      {Props.children}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.darkBlack,
        justifyContent:"flex-end",
        paddingBottom:20
    },
    section:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:PADDING_HORIZONTAL,
    },
    leftSection:{
        flexDirection:"row",
        alignItems:"center",
        flex:1,
        justifyContent:"flex-start"
    },
    rightSection:{
        flexDirection:"row",
        alignItems:"center",
        flex:1,
        justifyContent:"flex-end"
    },
    centerSection:{
        flexDirection:"row",
        alignItems:"center",
    },
    rightTitle:{
        color:Colors.white,
        fontFamily:Fonts.medium,
        fontSize:13
    },
    title:{
        fontSize:14,
        fontFamily:Fonts.medium,
    }
})