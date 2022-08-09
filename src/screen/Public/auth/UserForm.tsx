import { StyleSheet, Text, View ,ScrollView, TouchableOpacity, ScrollViewProps} from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { Images } from '../../../constant/images'
import { Fonts } from '../../../constant/fonts'
import { MARGIN_BOTTOM, PADDING_HORIZONTAL } from '../../../constant/style'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
import Press from '../../../component/Button/Press'
import InputBox, { InputBoxProp } from '../../../component/textInput/InputBox'

const UserForm = () => {

    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()

    const headPropsRef:HeaderProps={
        background:'light',
        leftIcon:Images.back,
        onPressLeft:()=>navigation.goBack()
    }
    const scrollRef:ScrollViewProps={
      showsHorizontalScrollIndicator:false,
      bounces:false,
      contentContainerStyle:styles.scroll
    }

    const inputPropRef:InputBoxProp={
          onChangeText(e){}
    }

  return (
    <View style={styles.container}>
    <Header {...headPropsRef} />
     <ScrollView {...scrollRef} >
        <Text style={styles.title}>Tell us about yourself</Text>
        <Text style={styles.desc}>Enter your first and last name below.</Text>
        <View>
          <InputBox {...inputPropRef} placeholder='First Name' />
          <InputBox {...inputPropRef}  placeholder='Last Name' />
        </View>
        <View style={styles.bottom}>
            <Press name={`CONFIRM`} onPress={()=>navigation.navigate('PickUserForm')} />
        </View>
     </ScrollView>
    </View>
  )
}

export default UserForm

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    imageStyle:{
        height:45,
        width:45,
        resizeMode:"cover",
    },
    title:{
        marginBottom:22,
        fontSize:28,
        lineHeight:40.7,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack,
        letterSpacing:-0.4

    },
    scroll:{
        paddingHorizontal:PADDING_HORIZONTAL,
        flexGrow:1
    },
    desc:{
        fontSize:12,lineHeight:18.3,
        fontFamily:Fonts.regular,
        letterSpacing:0.5,
        marginBottom:24,
        color:Colors.darkBlack,

    },
   bottom:{
    flex:1,
    justifyContent:"flex-end",
    marginBottom:MARGIN_BOTTOM
   }
})