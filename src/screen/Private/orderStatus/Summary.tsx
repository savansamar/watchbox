import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OfferInWatch } from '../search/Offer'
import { Colors } from '../../../constant/colors'
import { Fonts } from '../../../constant/fonts'
import PressImage from '../../../component/Button/PressImage'
import { Images } from '../../../constant/images'
let address="John Smith 145 Glock Street United States 82732 New York New York"


interface SummaryProp{
    onEdit:(e:number)=>void
}

const Summary = (Props:SummaryProp) => {
  return (
    <View style={{flex:1}}>
      <OfferInWatch />
      <View style={styles.border} />
      <View style={styles.row}>
        <Text style={styles.title}>Shipping</Text>
            <PressImage image={Images.editIcon} onPress={()=>Props.onEdit(1)} />
      </View>
      <Text style={[styles.name,{width:"30%"}]}>{address}</Text>
      <View style={styles.row}>
        <Text style={styles.title}>Payment</Text>
            <PressImage image={Images.editIcon} onPress={()=>Props.onEdit(2)} />
      </View>
      <Text style={[styles.name,{width:"70%"}]}>MasterCard **** 7829</Text>
    </View>
  )
}

export default Summary

const styles = StyleSheet.create({
    border:{
        borderColor:Colors.fadedWhite,
        borderWidth:0.3,
        width:Dimensions.get('screen').width,
        right:24,
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:24,
        marginBottom:20
    },
    title:{
        fontSize:14,
        lineHeight:16,
        fontFamily:Fonts.semiBold,
        color:Colors.darkBlack
    },
    name:{
        fontSize:12,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack,
        marginBottom:20
    }
})