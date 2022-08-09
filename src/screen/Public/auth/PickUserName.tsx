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

const PickUserForm = () => {

    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
    const [userName,setUserName]=React.useState<string>('')

    const headPropsRef:HeaderProps={
        background:'light',
        leftIcon:Images.back,
        onPressLeft:()=>navigation.goBack(),
        rightTitle:"SKIP",
        onPressRight:()=>{}
    }
    const scrollRef:ScrollViewProps={
      showsHorizontalScrollIndicator:false,
      bounces:false,
      contentContainerStyle:styles.scroll
    }

    const inputPropRef:InputBoxProp={
          onChangeText(e){setUserName(e)},
          placeholder:"@socialnickname",
          value:userName,
          error:""
    }

  return (
    <View style={styles.container}>
    <Header {...headPropsRef} />
     <ScrollView {...scrollRef} >
        <Text style={styles.title}>Welcome Elon!Pick a username.</Text>
        <Text style={styles.desc}>This keeps your sharing activity anonymous, if you choose a non-identifying monicker.</Text>
        <View>
          <InputBox {...inputPropRef} />
        </View>
        <View style={styles.bottom}>
            <Press  name={`NEXT`} onPress={()=>navigation.navigate('EnthusiastLevel')} />
        </View>
     </ScrollView>
    </View>
  )
}

export default PickUserForm

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
        width:"70%",
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
        width:"85%",
        color:Colors.darkBlack,

    },
   bottom:{
    flex:1,
    justifyContent:"flex-end",
    marginBottom:MARGIN_BOTTOM
   }
})