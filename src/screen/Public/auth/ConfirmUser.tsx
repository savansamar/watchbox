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

const ConfirmUser = () => {

    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()

    const headPropsRef:HeaderProps={
        background:'light',
        leftIcon:Images.back,
        rightTitle:"NO,THAT'S NOT ME",
        rightTitleStyle:{color:Colors.darkBlack},
        onPressLeft:()=>navigation.goBack()

    }
    const scrollRef:ScrollViewProps={
      showsHorizontalScrollIndicator:false,
      bounces:false,
      contentContainerStyle:styles.scroll
    }

  return (
    <View style={styles.container}>
    <Header {...headPropsRef} />
     <ScrollView {...scrollRef} >
        <Text style={styles.title}>Well,Hello!</Text>
        <Text style={styles.desc}>Please confirm that you are Elon Musk.</Text>
        <View style={styles.bottom}>
            <Press name={`THAT'S ME`} onPress={()=>navigation.navigate('UserForm')} />
        </View>
     </ScrollView>
    </View>
  )
}

export default ConfirmUser

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
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,

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