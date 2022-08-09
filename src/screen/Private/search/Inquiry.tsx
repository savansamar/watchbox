import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PopUp, { PopUpProp } from '../../../component/Modal/PopUp'
import { Colors } from '../../../constant/colors'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import { Images } from '../../../constant/images'
import PressImage from '../../../component/Button/PressImage'
import Press from '../../../component/Button/Press'



const Inquiry = (Props:PopUpProp) => {


  return (
   <PopUp 
        {...Props} 
        backgroundColor={Colors.darkBlack}
        borderRadius={1} 
        height={326}
        max={326}
    >
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>I’m inquiring about…</Text>
                <PressImage image={Images.activeCloseIcon} style={styles.close} onPress={Props.onClose} />
            </View>
            <Press 
                containerStyle={{borderColor:Colors.extraLightGreen,marginBottom:16}} 
                color={Colors.extraLightGreen} 
                name="Purchasing this watch" 
            />
              <Press 
                containerStyle={{borderColor:Colors.extraLightRed,marginBottom:16}} 
                color={Colors.extraLightRed} 
                name="Selling or Trading this watch" 
            />
              <Press 
                containerStyle={{borderColor:Colors.extraLightGrey,marginBottom:16}} 
                color={Colors.extraLightGrey} 
                name="I have some questions" 
            />
        </View>

   </PopUp>
  )
}

export default Inquiry

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:PADDING_HORIZONTAL,
        paddingVertical:PADDING_HORIZONTAL+4
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:35
    },
    title:{
        fontSize:14,
        lineHeight:16.3,
        fontFamily:Fonts.regular,
        color:Colors.white
    },
    close:{
        height:20,
        width:20,tintColor:Colors.white
    }
})