import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputBox from '../../../component/textInput/InputBox'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Colors } from '../../../constant/colors'
import { Images } from '../../../constant/images'
import { Fonts } from '../../../constant/fonts'
import PressImage from '../../../component/Button/PressImage'
import TouchableText from '../../../component/Button/TouchableText'
import { ScrollView } from 'react-native-gesture-handler'

export const OfferInWatch=()=>{
    return(
        <View style={styles.offerItem}>
                <PressImage image={Images.watchFive} style={styles.offerImage} />
                <View style={styles.info}>
                    <Text style={styles.brandName}>ROLEX</Text>
                    <Text style={styles.name}>Submariner No Date Vintage 1966</Text>
                    <Text style={styles.desc}>REF 5513 | SKU#4356689</Text>
                   
                </View>
            </View>
    )
}

const Offers=()=>{
    return(
        <View style={styles.offersView}>
           <OfferInWatch />
            <OfferInWatch />
            <View style={{marginLeft:102}}>
            <View style={styles.rowS}>
                        <Text style={styles.price}>$58,000</Text>
                        <Text style={styles.prevPrice}>$68,000</Text>
                    </View>
                    <TouchableText containerStyle={styles.containerStyle} textStyle={styles.textStyle} name="START CHECKOUT" />
            </View>
        </View>
    )
}

export default function Offer() {
  return (
    <View style={{flex:1,backgroundColor:Colors.darkBlack}}>
    <ScrollView
        contentContainerStyle={{paddingHorizontal:PADDING_HORIZONTAL}}
        showsVerticalScrollIndicator={false}
>


    <InputBox 
        onChangeText={()=>{}}
        leftImage={Images.searchIcon}
        inputContainerStyle={styles.inputContainerStyle}
        leftImageStyle={{tintColor:Colors.fadedGrey}}
        placeholder='Search'
        inputStyle={{color:Colors.fadedGrey}}
        />
    <Offers />
    <Offers />
        </ScrollView>
</View>
  )
}

const styles = StyleSheet.create({
    inputContainerStyle:{
        height:42,
        backgroundColor:Colors.fadedBlack,
        borderBottomColor:'transparent',
        marginTop:40,
        marginBottom:12
    },
    offersView:{
        backgroundColor:Colors.white,
        marginBottom:12,
    },
    offerItem:{
        flexDirection:"row",
        paddingVertical:14,
    },
    offerImage:{
        height:102,
        width:102,
        resizeMode:"contain"
    },
    brandName:{
        fontSize:13,
        color:Colors.darkGrey,
        fontFamily:Fonts.regular,
        lineHeight:16,
        letterSpacing:0.7
    },
    name:{
        fontSize:12,
        color:Colors.darkBlack,
        fontFamily:Fonts.medium,
        lineHeight:16,
        letterSpacing:0.7,
        marginVertical:8
    },
    desc:{
        fontSize:12,
        color:Colors.grey,
        fontFamily:Fonts.regular,
        lineHeight:15,
        letterSpacing:0.7,
    },
    info:{
        width:"70%",
        top:10
    },
    rowS:{
        flexDirection:"row",
        alignItems:"flex-start",
    },
    price:{
     marginBottom:16,
     fontSize:16,
     lineHeight:20,
     color:Colors.darkBlack,
     fontFamily:Fonts.medium   
    },
    prevPrice:{
        marginBottom:14,
        fontSize:14,
        lineHeight:18,
        color:Colors.grey,
        fontFamily:Fonts.medium  ,
        textDecorationLine:"line-through" ,
        marginLeft:5
       },
       containerStyle:{
        backgroundColor:Colors.darkBlack,
        alignSelf:"flex-start",
        paddingHorizontal:16,
        height:24,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:10
       },
       textStyle:{
        color:Colors.white,
        fontSize:10,
        fontFamily:Fonts.regular
       }
})