import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PopUp, { PopUpProp } from '../../../component/Modal/PopUp'
import { Colors } from '../../../constant/colors'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import { Images } from '../../../constant/images'
import PressImage from '../../../component/Button/PressImage'
import Press from '../../../component/Button/Press'


export interface AddWishListProp extends PopUpProp {
    onPress?:()=>void
}


const AddWishList = (Props:AddWishListProp) => {


  return (
   <PopUp 
        {...Props} 
        backgroundColor={Colors.darkBlack}
        borderRadius={1} 
        height={287}
        max={287}
    >
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>We don’t see this watch in your watchbox! </Text>
                <PressImage image={Images.activeCloseIcon} style={styles.close} onPress={Props.onClose} />
            </View>
            <Text style={styles.desc}>Would you like to add it now?</Text>
            <Press 
                name="YES" 
                onPress={Props.onPress}
            />
              <Press 
                containerStyle={{borderColor:'transparent',marginBottom:16}} 
                name="I'll Add & sell this later" 
            />
        </View>

   </PopUp>
  )
}

export default AddWishList

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:PADDING_HORIZONTAL,
        paddingVertical:PADDING_HORIZONTAL+4
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
        color:Colors.white,
        letterSpacing:-0.9,
        width:"90%"
    },
    close:{
        height:20,
        width:20,tintColor:Colors.white
    },
    desc:{
        fontSize:14,
        lineHeight:16,
        marginBottom:35,
        fontFamily:Fonts.regular,
        color:Colors.white
    }
})