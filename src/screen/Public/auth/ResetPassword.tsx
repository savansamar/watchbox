import { ScrollViewProps,ScrollView ,StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { PADDING_HORIZONTAL, TOP_FROM_HEADER } from '../../../constant/style'
import InputBox, { InputBoxProp } from '../../../component/textInput/InputBox'
import { Images } from '../../../constant/images'
import { Fonts } from '../../../constant/fonts'
import Press from '../../../component/Button/Press'
import TextImage from '../../../component/Button/TextImage'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
const text="Type your new password."

const ResetPassword = () => {

  //state
  const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
  const [password,setPassword]=React.useState<string>('')
  const [confirmPassword,setConfirmPassword]=React.useState<string>('')

    let check:boolean=(password.length>0&& confirmPassword.length>0)?false:true

  const headerPropRef:HeaderProps={
    background:"light",
    leftIcon:Images.back,
    onPressLeft:()=>navigation.navigate('SignIn')
  }

  const scrollPropRef:ScrollViewProps={
    style:styles.scrollView,
    bounces:false,
    contentContainerStyle:{flexGrow:1}
  }

  const inputPropRef:InputBoxProp={
      onChangeText(e){},
  }

  const _box=()=>{
    return(
      <>
        <Text style={styles.signUp}>Reset password</Text>
        <Text style={styles.descText}>{text}</Text>
        <InputBox 
            {...inputPropRef} 
            placeholder='New password (8+ Characters)'
            value={password}
            onChangeText={(e)=>setPassword(e)}
        />
         <InputBox 
            {...inputPropRef} 
            placeholder='Confirm password'
            value={confirmPassword}
            onChangeText={(e)=>setConfirmPassword(e)}
        />
      </>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header {...headerPropRef} />
      <ScrollView {...scrollPropRef}>
        {_box()}
        <View style={styles.bottom}>
        <Press
          spaceVertical={24} 
          name='SET NEW PASSWORD'
          onPress={()=>{}}
        />
        </View>
      </ScrollView>
    </View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white
  },
  scrollView:{
    flex:1,
    paddingHorizontal:PADDING_HORIZONTAL
  },
  signUp:{
    fontSize:32,
    lineHeight:40.7,
    marginTop:TOP_FROM_HEADER,
    marginBottom:22,
    fontFamily:Fonts.regular
  },
  inputContainer:{

  },
  bottom:{
    flex:1,
    justifyContent:"flex-end"
  },
  descText:{
    fontSize:12,
    fontFamily:Fonts.medium,
    color:Colors.darkBlack,
    marginBottom:22,
    lineHeight:18.3
  }

})