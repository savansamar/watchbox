import { ScrollView, ScrollViewProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { Images } from '../../../constant/images'
import PressImage from '../../../component/Button/PressImage'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import TouchableText from '../../../component/Button/TouchableText'
import MyWatches from '../../../component/Item/MyWatches'
import MyCollection, { Title } from '../../../component/FlatList/MyCollection'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
const DESC="I’m C’Quon Gottlieb, I was born on a 32 square mile Slice of Paradise called St.Thomas, Virgin Islands. I’m a Scorpio, I enjoy long walks on the beach , 6th Grade Geography bee champ and oh yeah I LOVE WATCHES!"
const info="My team and I look forward to making your Watchbox experience a completely transparent and comfortable one. We’re here to share our obsession and expertise with you."

const ClientAdvisor = () => {

    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()

    const headerPropRef:HeaderProps={
        leftIcon:Images.logoSymbol,
        background:"light",
        leftImageStyle:styles.logoStyle
    }

    const scrollPropRef:ScrollViewProps={
        showsVerticalScrollIndicator:false,
        style:styles.scroll,
        contentContainerStyle:styles.contentContainerStyle
    }

    const _user=()=>{
        return(
            <View style={styles.userView}>
                <PressImage image={Images.userImage} style={styles.userImageStyle} />
            </View>
        )
    }
    const _info=()=>{
        return(
            <View style={{paddingHorizontal:PADDING_HORIZONTAL}}>
                <Text style={styles.title}>MEET YOUR ADVISORY TEAM:</Text>
                <Text  style={styles.teamName}>C’Q’s  Team</Text> 
                <Text style={styles.description}>{DESC}</Text> 
                <TouchableText 
                    textStyle={styles.touchableText} 
                    containerStyle={styles.containerStyle} 
                    name="WATCH  MY BIO" 
                />              
            </View>
        )
    }


  return (
    <View style={styles.container}>
      <Header {...headerPropRef} />
      <ScrollView {...scrollPropRef}>
      {_user()}
      <View style={styles.scrollSection}>
             {_info()}
            <MyCollection />
            <View style={{paddingHorizontal:PADDING_HORIZONTAL}}>
                <Title showImage={true}  title='MY GRILL WATCH' />
                <MyWatches />
                <Text style={styles.description}>{info}</Text>
                <Text style={[styles.description,{marginVertical:15}]}>Cheers</Text>
                <Text style={[styles.description,{marginVertical:15}]}>C’Q Gottlie</Text>
            </View>
      </View>
      </ScrollView>

      <View style={styles.bottom}>
        <PressImage 
            image={Images.back} 
            style={styles.backImage}
            onPress={()=>navigation.navigate('Tabs')} 
        />
      </View>

    </View>
  )
}

export default ClientAdvisor

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    scrollSection:{
        flex:1,
        paddingVertical:22,
        backgroundColor:Colors.darkBlack
    },
    logoStyle:{
        height:23,
        width:48,
    },
    userView:{
        height:184,
        //inside image width 184
        width:'100%',
        marginBottom:22,
       // marginTop:10,
        alignItems:"center",
        backgroundColor:Colors.white

    },
    userImageStyle:{
        height:184,
        width:184,
        resizeMode:"contain",
    },
    scroll:{
        flex:1,
    },
    contentContainerStyle:{
        //paddingVertical:22
    },
    title:{
        fontSize:14,
        letterSpacing:-0.18,
        lineHeight:18,
        fontFamily:Fonts.medium,
        color:Colors.white,
        marginVertical:10
    },
    teamName:{
        fontSize:32,
        lineHeight:40,
        letterSpacing:0.4,
        fontFamily:Fonts.regular,
        marginBottom:22,
        color:Colors.yellow,
    },
    description:{
        fontSize:12,
        lineHeight:18,
        letterSpacing:-0.18,
        fontFamily:Fonts.medium,
        color:Colors.white,
        textAlign:"left"
    },
    touchableText:{
        color:Colors.white,
        fontSize:10,
        fontFamily:Fonts.medium,
        letterSpacing:-0.18
    },
    containerStyle:{
        width:152,
        height:32,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:Colors.white,
        marginTop:32
    },
    bottom:{
        height:64,
        width:64,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        backgroundColor:Colors.white,
        position:'absolute',
        bottom:20,
        right:24,
        
        shadowColor:Colors.white,
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.1,
        shadowRadius:5,
        elevation:1
    },
    backImage:{
        height:28,
        width:28,
        transform:[{
            rotate:"180deg"
        }]
    }
})