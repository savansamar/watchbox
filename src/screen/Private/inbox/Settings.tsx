import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import { BUTTON_HEIGHT, PADDING_HORIZONTAL } from '../../../constant/style'
import InputBox from '../../../component/textInput/InputBox'
import { Images } from '../../../constant/images'
import { Fonts } from '../../../constant/fonts'
import RNSwitch from '../../../component/animated/RNSwitch'
import TouchableText from '../../../component/Button/TouchableText'
import AccountDelete from './AccountDelete'
import { PopUpProp } from '../../../component/Modal/PopUp'

interface SettingsProp{
  onDelete?:()=>void
}


export default function Settings(Props:SettingsProp) {

  

  return (
    <View style={styles.container}>
      <InputBox 
        onChangeText={()=>{}}
        title='Email'
        titleStyle={styles.titleStyle}
        placeholder="email"
        rightImage={Images.editIcon}
        bottomSpace={24}
        inputStyle={{paddingLeft:0}}
      />
      <InputBox 
        onChangeText={()=>{}}
        title='Password'
        titleStyle={styles.titleStyle}
        placeholder="password"
        rightImage={Images.editIcon}
        secureTextEntry={true}
        inputStyle={{paddingLeft:0}}
      />
      <View style={styles.row}>
        <Text style={styles.darkText} >Push Notifications</Text>
        <RNSwitch />
      </View>

      <InputBox 
        onChangeText={()=>{}}
        title='Country'
        titleStyle={styles.titleStyle}
        placeholder="country"
        rightImage={Images.editIcon}
        secureTextEntry={true}
        inputStyle={{paddingLeft:0}}
        bottomSpace={24}
      />
      <InputBox 
        onChangeText={()=>{}}
        title='Currency'
        titleStyle={styles.titleStyle}
        placeholder="currency"
        rightImage={Images.editIcon}
        secureTextEntry={true}
        inputStyle={{paddingLeft:0}}
      //  bottomSpace={24}
      />
      <View style={styles.row}>
        <TouchableText name='Delete Account' textStyle={styles.textStyle} onPress={Props.onDelete} />
      </View>
      <View style={[styles.row,{marginTop:0}]}>
        <TouchableText name='Sign out' textStyle={styles.textStyle} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:PADDING_HORIZONTAL,
        marginVertical:24
    },
    titleStyle:{
        color:Colors.darkBlack,

    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:24,
        borderBottomWidth:0.2,
        borderBottomColor:Colors.grey,
        height:BUTTON_HEIGHT
    },
    darkText:{
        fontSize:14,
        fontFamily:Fonts.semiBold,
        color:Colors.darkBlack,
    },
    textStyle:{color:"#d85a1b",fontSize:14,fontFamily:Fonts.medium}
})