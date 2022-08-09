import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import { Card } from '../orderStatus/Payment'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Images } from '../../../constant/images'
import Press from '../../../component/Button/Press'


export default function PaymentInfo() {
  return (
   
    <View style={styles.container}>
    <Card 
        selected={true} 
        card='Master' 
        rightIcon={Images.threeDot} 
        imageStyle={styles.image} 
        onPress={()=>{}} 
    />
     <Card 
        selected={true} 
        card='Visa' 
        rightIcon={Images.threeDot} 
        imageStyle={styles.image} 
        onPress={()=>{}} 
    />
    <View style={styles.bottom}>
    <Press 
        name='+ ADD NEW METHOD'
        containerStyle={styles.containerStyle}
        color={Colors.darkBlack}
    />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        marginVertical:24,
        paddingHorizontal:PADDING_HORIZONTAL
    },
    image:{
        backgroundColor:"transparent",
        tintColor:Colors.yellow
    },
    containerStyle:{
        backgroundColor:Colors.white,
        borderWidth:1,
        borderColor:Colors.darkBlack
    },
    bottom:{
        flex:1,
        justifyContent:"flex-end"
    }
})