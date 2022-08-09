import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import PopUp, { PopUpProp } from '../../../component/Modal/PopUp'
import { BUTTON_HEIGHT, PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import { Colors } from '../../../constant/colors'
import PressImage from '../../../component/Button/PressImage'
import { Images } from '../../../constant/images'
import InputBox from '../../../component/textInput/InputBox'
import Press from '../../../component/Button/Press'

const {height}=Dimensions.get('screen')

export default function Help(Props:PopUpProp) {
  return (
    <PopUp 
        {...Props} 
        height={(height-100)}
        max={(height)-100}
        borderRadius={25}
    >
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.helpText}>HELP</Text>
                <PressImage image={Images.activeCloseIcon} onPress={Props.onClose} />
            </View>
            <Text  style={styles.title} >Have any questions?</Text>
            <Text style={[styles.helpText,{fontFamily:Fonts.regular,marginBottom:28}]} >You can email app@thewatchbox.com or fill the form below.</Text>
            <TextInput
                multiline={true}
                numberOfLines={20}
                style={styles.input}
                placeholder="Write message..."
                placeholderTextColor={Colors.grey}
            />
        <Press name='SUBMIT' spaceVertical={30} backgroundColor={Colors.grey} />
        </View>
    </PopUp>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:PADDING_HORIZONTAL,
        marginVertical:PADDING_HORIZONTAL+10
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    helpText:{
        fontSize:12,
        fontFamily:Fonts.medium,
        letterSpacing:1,
        color:Colors.darkBlack
    },
    title:{
        fontSize:24,
        fontFamily:Fonts.regular,
        letterSpacing:-0.7,
        color:Colors.darkBlack,
        marginVertical:24
    },
    input:{
        backgroundColor:Colors.lightOrange,
        height:440,
        padding:10,
        textAlignVertical:"top"
        
    }
})