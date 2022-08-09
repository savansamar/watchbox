import { StyleSheet, Text, View ,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { Images } from '../../../constant/images'
import { Fonts } from '../../../constant/fonts'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'

const Welcome = () => {

    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()

    const headPropsRef:HeaderProps={
        background:'light',
        leftIcon:Images.logoSymbol,
        leftImageStyle:styles.imageStyle,
    }

  return (
    <View style={styles.container}>
    <Header {...headPropsRef} />
     <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Welcome to Watchbox</Text>
        <Text style={styles.desc}>We sent an email to elon@spacex.com to confirm your account.</Text>
        <View style={styles.row}>
            <View>
                <Text style={styles.desc}>Didn’t receive an email? </Text>
            </View>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('ConfirmUser')} >
                <Text style={[styles.desc,styles.border]}>Resend email</Text>
            </TouchableOpacity>
        </View>
     </ScrollView>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    imageStyle:{
        height:45,
        width:45,
        resizeMode:"cover",
        right:10
    },
    title:{
        marginBottom:22,
        fontSize:28,
        lineHeight:40.7,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack,
        letterSpacing:-0.9
    },
    scroll:{
        paddingHorizontal:PADDING_HORIZONTAL
    },
    desc:{
        fontSize:12,lineHeight:18.3,
        fontFamily:Fonts.regular,
        letterSpacing:0.5,
        marginBottom:24,
        color:Colors.darkBlack,

    },
    row:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    border:{
        textDecorationLine:"underline",
        fontFamily:Fonts.medium
    }
})