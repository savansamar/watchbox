import { StyleSheet, Text, View,TouchableOpacity, Image, ViewStyle, TextStyle, ImageStyle } from 'react-native'
import React from 'react'
import PressImage from '../Button/PressImage'
import { Images } from '../../constant/images'
import { PADDING_HORIZONTAL } from '../../constant/style'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'

interface ReviewHeaderProp{
    background?:string,
    title?:string,
    brand_name?:string,
    name?:string,
    hideTitleIcon?:boolean,
    buttonTitle?:string,
    onPress?:()=>void
}

const ReviewHeader = (Prop:ReviewHeaderProp) => {

    let background:ViewStyle={backgroundColor:Prop.background?Prop.background:Colors.darkBlack}
    let color:TextStyle={color:Prop.background?Colors.darkBlack:Colors.white}
    let border:ViewStyle={borderColor:Prop.background?Colors.darkBlack:Colors.white}
    let tint:ImageStyle={tintColor:Prop.background?Colors.darkBlack:Colors.white}
    let btn=Prop.buttonTitle?Prop.buttonTitle:"WATCH REVIEW"

    
    return (
    <View style={styles.container}>

    <Text style={styles.title}>Review by Tim Mosso</Text>

      <PressImage image={Images.watchBlack} style={styles.image} />
      <View style={[styles.section,background]}>
        <View style={styles.row}>
            {
                !Prop.hideTitleIcon &&
                <TouchableOpacity activeOpacity={0.5} style={[styles.grail,border]} >
                <Image source={Images.grail} style={[styles.imageGrail,tint]} />
            </TouchableOpacity>
            }
            <Text style={[styles.brandName,color]}>ELON'S GRAIL</Text>
        </View>
        <Text style={[styles.name,color]}>F.P. Journe Souveraine Chronometre a Resonance “24 hr”</Text>
        
        <View style={styles.row_between}>
            <TouchableOpacity activeOpacity={0.5} style={[styles.touchText,border]} onPress={Prop.onPress} >
                <Text style={[styles.text,color]} >{btn}</Text>
            </TouchableOpacity>
            <Text style={[styles.text,color]} >5m.2s</Text>
        </View>
      
      </View>
    </View>
  )
}

export default ReviewHeader

const styles = StyleSheet.create({
    container:{
    },
    image:{
        height:280,
        width:"100%",
        resizeMode:"cover"
    },
    section:
    {
        paddingVertical:24,
        paddingHorizontal:PADDING_HORIZONTAL,
        backgroundColor:Colors.darkBlack
    },
    row:{
        flexDirection:"row",
        alignItems:"center"
    },
    grail:{
        height:24,
        width:24,
        borderRadius:24,
        borderWidth:1.3,
        borderColor:Colors.white,
        justifyContent:"center",
        alignItems:"center",
        marginRight:8
    },
    imageGrail:{
        height:12,
        width:12,
        resizeMode:"contain",
        tintColor:Colors.white
    },
    brandName:{
        fontSize:12,
        fontFamily:Fonts.regular,
        color:Colors.white,
        letterSpacing:-0.4,
        lineHeight:20
    },
    name:{
        fontSize:20,
        lineHeight:28,
        fontFamily:Fonts.medium,
        color:Colors.white,
        letterSpacing:-0.9,
        width:"100%",
        marginVertical:10
    },
    row_between:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

    },
    touchText:{
        width:158,
        height:32,
        borderWidth:1.3,
        borderColor:Colors.white,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:Colors.white,
        fontSize:12,
        fontFamily:Fonts.medium
    },
    title:{
        margin:24,
        position:"absolute",
        backgroundColor:Colors.darkBlack,
        top:0,
        zIndex:9999,
        paddingVertical:5,
        paddingHorizontal:13,
        color:Colors.white,
        fontFamily:Fonts.medium,
        fontSize:12
    }
})