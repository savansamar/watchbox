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


const AccountDelete = (Props:AddWishListProp) => {


  return (
   <PopUp 
        {...Props} 
        borderRadius={25} 
        height={287}
        max={287}
    >
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Confirm account deletion</Text>
                <PressImage image={Images.activeCloseIcon} style={styles.close} onPress={Props.onClose} />
            </View>
            <Text style={styles.desc}>By selecting confirm, your account details will be permanently deleted and you will lose access to all of your account's data and content.</Text>
            <Press 
                name="CONFIRM"
                backgroundColor={"#d85a1b"} 
                onPress={Props.onPress}
            />
              <Press 
                name="GO BACK" 
                spaceVertical={4}
                backgroundColor={Colors.white}
                color={Colors.darkBlack}
            
            />
        </View>

   </PopUp>
  )
}

export default AccountDelete

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
        color:Colors.darkBlack,
        letterSpacing:-0.9,
        width:"90%"
    },
    close:{
        height:20,
        width:20
    },
    desc:{
        fontSize:12,
        lineHeight:14,
        marginBottom:35,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack,

    }
})