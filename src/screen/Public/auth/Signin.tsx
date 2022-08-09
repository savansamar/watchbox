import { ScrollViewProps,ScrollView ,StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
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
const text="Creating an account means you’re OK with our "

const SignIn = () => {

  //state
  const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
  const [email,setEmail]=React.useState<string>('')
  const [password,setPassword]=React.useState<string>('')
  let check:boolean=(email.length>0&& password.length>0)?false:true

  const headerPropRef:HeaderProps={
    rightTitle:"SIGN UP",
    background:"light",
    onPressRight:()=>navigation.navigate('SignUp')
  }

  const scrollPropRef:ScrollViewProps={
    style:styles.scrollView,
    bounces:false
  }

  const inputPropRef:InputBoxProp={
      onChangeText(e){
      },
  }

  const _box=()=>{
    return(
      <>
        <Text style={styles.signUp}>Sign In</Text>
        <InputBox 
            {...inputPropRef} 
            placeholder='Email address'
            value={email}
            onChangeText={(e)=>setEmail(e)}
            keyboardType='email-address'
        />
        <InputBox 
            {...inputPropRef} 
            placeholder='Password (8 + Character)'
            secureImage={Images.eye}
            value={password}
            onChangeText={(e)=>setPassword(e)}
        />
        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('LostPassword')}>
            <Text style={styles.privacyText}>Lost Password?
        </Text>
        </TouchableOpacity>
      </>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header {...headerPropRef} />
      <ScrollView {...scrollPropRef}>
        {_box()}
        <Press 
          spaceVertical={24} 
          name='SIGN IN'
          onPress={()=>navigation.navigate('ClientAdvisor')} 
        />
        <Text style={styles.orText}>OR</Text>
        <TextImage image={Images.apple} name='SIGN IN WITH APPLE' />
        <TextImage image={Images.fb} name='SIGN IN WITH FACEBOOK' />
        <TextImage image={Images.google} name='SIGN IN WITH GOOGLE' />
      </ScrollView>
    </View>
  )
}

export default SignIn

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
    marginBottom:36,
    fontFamily:Fonts.regular,
    color:Colors.darkBlack
  },
  inputContainer:{

  },
  privacyText:{
    marginTop:TOP_FROM_HEADER+3,
    fontSize:10,
    lineHeight:18.3,
    letterSpacing:0.4,
    fontFamily:Fonts.medium,
    color:Colors.darkBlack,
    width:"70%"
  },
  dark:{
    fontFamily:Fonts.medium,
    color:Colors.darkBlack
  },
  orText:{
    fontSize:10,
    lineHeight:18.3,
    letterSpacing:-0.13,
    fontFamily:Fonts.regular,
    color:Colors.grey,
    alignSelf:"center",
    marginBottom:24,
  }
})