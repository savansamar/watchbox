import { Dimensions, ImageStyle, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import PressImage from '../../../component/Button/PressImage'
import { Images } from '../../../constant/images'
import { Fonts } from '../../../constant/fonts'
import { Colors } from '../../../constant/colors'
import AddNewCard from './AddNewCard'

interface CardProp{
    card:string,
    onPress:()=>void,
    selected:boolean,
    rightIcon?:any,
    imageStyle?:StyleProp<ImageStyle>
}
export const Card=(Props:CardProp)=>{

    let card=Props.card==='Master'?Images.masterIcon:Images.visaIcon
    let img=Props.rightIcon?Props.rightIcon:Images.yellowCheckIcon

return(
    <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={Props.onPress} >
        <PressImage image={card} style={styles.card} />
        <Text numberOfLines={1} style={styles.text}>MasterCard ****2321</Text>
        {Props.selected && 
        <PressImage image={img} style={[styles.card,{backgroundColor:Colors.yellow,borderRadius:20},Props.imageStyle]} />
        }
      </TouchableOpacity>
)
}

interface PaymentProp{
    onAdd?:()=>void
}

const Payment = (Props:PaymentProp) => {

    const [selected,setSelect]=React.useState<boolean>(false)
    const [show,setShow]=React.useState<boolean>(false)
    

    
  return (
    <View style={{flex:1}}>
       
        <Card selected={selected} card='Master' onPress={()=>setSelect(!selected)} />
        <Card selected={!selected} card='Visa' onPress={()=>setSelect(!selected)} />

        <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={Props.onAdd} >
            <PressImage disable={true} image={Images.addIcon} style={styles.add} />
            <Text numberOfLines={1} style={styles.text}>Add new card</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
    button:{
        height:56,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomColor:Colors.fadedWhite,
        borderBottomWidth:0.5,
        marginBottom:8
    },
    card:{
        height:24,
        width:24,
        marginHorizontal:12
    },
    text:{
        fontSize:14,
        lineHeight:16.3,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,
        flex:1
    },
    add:{
        height:24,
        width:24,
        marginHorizontal:12,
        tintColor:Colors.fadedGrey
    },
    pop:{
        position:"absolute",
        height:Dimensions.get('screen').height,
        width:"100%",
        zIndex:999999,
        backgroundColor:"red"
    }
})