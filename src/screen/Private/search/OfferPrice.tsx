import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import PopUp, { PopUpProp } from '../../../component/Modal/PopUp'
import { Colors } from '../../../constant/colors'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import { Images } from '../../../constant/images'
import PressImage from '../../../component/Button/PressImage'
import Press from '../../../component/Button/Press'



const OfferPrice = (Props:PopUpProp) => {


  return (
   <PopUp 
        {...Props} 
        backgroundColor={Colors.darkBlack}
        borderRadius={1} 
        height={320}
        max={320}
    >
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>I offer for this watch:</Text>
                <PressImage image={Images.activeCloseIcon} style={styles.close} onPress={Props.onClose} />
            </View>

            <TextInput 
                style={styles.input}
                placeholder='$1,000'
                placeholderTextColor={Colors.grey}
            
            />
            <Press 
                containerStyle={{borderColor:Colors.white}} 
                color={Colors.white} 
                name="OFFER NOW" 
            />
              <Press 
                containerStyle={{borderWidth:0}}
                color={Colors.white} 
                name="SKIP OFFER" 
                spaceVertical={10}
            />
              
        </View>

   </PopUp>
  )
}

export default OfferPrice

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
    },
    input:{
        width:264,
        borderBottomWidth:0.2,
        borderBottomColor:Colors.white,
        fontSize:40,
        color:Colors.grey,
        fontFamily:Fonts.extraLight,
        marginBottom:30,
        alignSelf:"center",
        textAlign:"center"
    }
})