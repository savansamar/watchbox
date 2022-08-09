import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PopUp, { PopUpProp } from '../../../component/Modal/PopUp'
import { Colors } from '../../../constant/colors'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import { Images } from '../../../constant/images'
import PressImage from '../../../component/Button/PressImage'
import Press from '../../../component/Button/Press'
import InputBox from '../../../component/textInput/InputBox'


export interface AddWishListProp extends PopUpProp {
    onPress?:()=>void
}


const AddNewCard = (Props:AddWishListProp) => {


  return (
   <PopUp 
        {...Props} 
        borderRadius={25} 
        height={540}
        max={540}
        
    >
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Add new card</Text>
                <PressImage  image={Images.activeCloseIcon} style={styles.close} onPress={Props.onClose} />
            </View>
            <Text style={styles.desc}>Enter the details below</Text>
            <InputBox 
                onChangeText={()=>{}}
                bottomSpace={24}
                title="Cardholder's Name"
            />
            <InputBox 
                onChangeText={()=>{}}
                bottomSpace={24}
                title="Card Number"
            />
            <View style={styles.row}>
            <InputBox 
                onChangeText={()=>{}}
                containerStyle={{flex:1}}
                title="Expiry Date"
            />
            <View style={{marginHorizontal:10}} />
            <InputBox 
                onChangeText={()=>{}}
                containerStyle={{flex:0.5}}
                title="CVC"
            />
            </View>
        </View>

            <View style={styles.bottom}>
            <Press name='ADD NEW CARD'  />
            </View>
   </PopUp>
  )
}

export default AddNewCard

const styles = StyleSheet.create({
    bottom:{
        borderTopColor:Colors.fadedGrey,
        borderTopWidth:0.4,
        paddingHorizontal:PADDING_HORIZONTAL,
        paddingVertical:PADDING_HORIZONTAL-8,

    },
    container:{
        paddingHorizontal:PADDING_HORIZONTAL,
        paddingVertical:PADDING_HORIZONTAL+4,
        
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-start",
        marginBottom:16
    },
    title:{
        fontSize:24,
        lineHeight:28,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack,
        letterSpacing:-0.9,
        width:"90%"
    },
    close:{
        height:20,
        width:20,
    },
    desc:{
        fontSize:12,
        lineHeight:16,
        marginBottom:35,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack
    }
})