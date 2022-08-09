import { Dimensions, ScrollView, ScrollViewProps, StatusBar, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import PressImage from '../../../component/Button/PressImage'
import { Images } from '../../../constant/images'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import TouchableText from '../../../component/Button/TouchableText'
import { Fonts } from '../../../constant/fonts'
import Press from '../../../component/Button/Press'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
import Toast from '../../../component/animated/Toast'

const {width}=Dimensions.get('screen')
const IMAGE_HEIGHT=290
const desc="In Focus: Greubel Forsey Double Tourbillon 30° Technique"
const info="The first time I saw the Greubel Forsey Double Technique Tourbillon 30° it was the rose gold version, and I refused to take it off my wrist for over three hours. I was amazed that a watch with a 47.5mm case could wear so comfortably. The black ADLC treated titanium version brings a welcomed weight reduction to the watch and provides the perfect backdrop to highlight the watchmaking within. When looking at the watch, I’m amazed at how the case just disappears and acts as a canvas for Greubel Forsey’s Double Tourbillon 30° system."

const Blog = () => {

    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
    const [notification,setNotification]=React.useState<boolean>(false)

    const _customHeader=()=>{
        return(
            <View style={styles.headerView}>
                <PressImage image={Images.back} style={styles.backImage} onPress={()=>navigation.goBack()} />
                <TouchableText 
                    name='SHARE' 
                    textStyle={styles.title}
                    onPress={()=>setNotification(!notification)} 
                />
            </View>
        )
    }

    const _user=()=>(
        <View style={styles.userSection}>
            <PressImage image={Images.userImage} style={styles.userImage} />
            <Text style={styles.byText}>WRITTEN BY</Text>
            <Text style={styles.userName}>TODD SEARLE</Text>
            <TouchableText 
                containerStyle={styles.containerStyle} 
                textStyle={styles.textStyle} name="VIEW MORE ARTICLES" 
            />
        </View>
    )

const scrollRef:ScrollViewProps={
    showsVerticalScrollIndicator:false,
    contentContainerStyle:styles.contentContainerStyle
}

  return (
    <View style={styles.container}>
        <Toast />
    <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent={true} />
    <ScrollView {...scrollRef} >
      <PressImage disable={true} image={Images.handWatch} style={styles.headerImage} />
      {_customHeader()}
      <View style={styles.section}>
            <Text style={styles.blogTitle}>BUYING GUIDES</Text>
            <Text style={styles.blog_Desc}>{desc}</Text>
            <Text style={styles.infoText}>{info}</Text>
            <Image source={Images.handWatch} style={styles.blogImage} />
            <Text style={styles.infoText}>{info}</Text>
            <Image source={Images.handWatch} style={styles.blogImage} />
            <Text style={styles.infoText}>{info}</Text>
            <Text style={styles.list} >The Specs</Text>
            <Text style={styles.infoListText}>Model: Greubel Forsey Double Tourbillon 30° Technique Black</Text>
            <Text style={styles.infoListText}>Case Size + Material: 47.5mm case in black ADLC coated titanium</Text>
            <Text style={styles.infoListText}>Caseback: Exhibition caseback</Text>
            <Text style={styles.infoListText}>Movement: Hand-wound mechanical movement with Double Tourbillon 30°; features outer tourbillon 4-minutes rotation, and inner tourbillon 60-seconds rotation </Text>
            <Text style={styles.infoListText}>Functions: Hours and minutes, small seconds, power reserve indicator</Text>
            <Text style={styles.infoListText}>Strap/Bracelet: Alligator strap with deployant buckle</Text>
            <Text style={styles.infoListText}>Greubel Forsey Double Tourbillon 30° Technique</Text>

            <Press style={styles.Press} name="GREUBEL FORSEY ON WATCHBOX" />

            {_user()}

      </View>
      <View style={{height:50}} />
    </ScrollView>
    
    </View>
  )
}

export default Blog

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerImage:{
        height:IMAGE_HEIGHT,
        width:width,
        resizeMode:"cover",
    },
    headerView:{
        position:"absolute",
        top:62,
        flexDirection:"row",
        paddingHorizontal:PADDING_HORIZONTAL,
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%"
    },
    backImage:{
        tintColor:Colors.white,
        height:24,
        width:24,
        resizeMode:"contain"
    },
    title:{
        fontSize:12,lineHeight:16,
        color:Colors.white,
        fontFamily:Fonts.medium
    },
    contentContainerStyle:{
        flexGrow:1
    },
    section:{
        paddingHorizontal:PADDING_HORIZONTAL,
        width:"100%",
        alignItems:"center",
    },
    blogTitle:{
        fontSize:12,
        lineHeight:18.3,
        color:Colors.darkGrey,
        fontFamily:Fonts.regular,
        marginTop:12,
        letterSpacing:1
    },
    blog_Desc:{
        fontSize:28,
        lineHeight:40.3,
        letterSpacing:-0.9,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack,
        marginBottom:32,
        textAlign:"center",
        width:"100%",
        marginTop:12
    },
    infoText:{
        fontSize:12,
        lineHeight:18.3,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,
        letterSpacing:0.1,
        marginBottom:24
    },
    blogImage:{
        height:218,
        width:'100%',
        resizeMode:"cover",
        marginBottom:24
    },
list:{
    fontSize:24,
    lineHeight:28,
    fontFamily:Fonts.regular,
    color:Colors.darkBlack,
    letterSpacing:0.1,
    marginBottom:24,
    width:"100%",
    textAlign:"left"
},
infoListText:{
    fontSize:12,
    lineHeight:18.3,
    fontFamily:Fonts.medium,
    color:Colors.darkBlack,
    letterSpacing:0.1,
    marginBottom:10,
    width:"100%"
},
Press:{
    width:'100%',
    margin:34,
    marginBottom:26,
    marginTop:33.8
},
userSection:{
    paddingVertical:32,
    width:"100%",
    alignItems:"center"
},
userImage:{
    height:120,
    width:120,
    marginBottom:24,
    resizeMode:"cover"
},
byText:{
    fontSize:10,
    lineHeight:18.3,
    color:Colors.lightDark,
    fontFamily:Fonts.regular,
    letterSpacing:1
},
userName:{
    fontSize:14,
    lineHeight:20,
    marginTop:8,
    marginBottom:16,
    color:Colors.darkBlack,
    fontFamily:Fonts.medium,
    letterSpacing:1
},
containerStyle:{
    borderWidth:1.3,
    borderColor:Colors.darkBlack,
    height:32,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:PADDING_HORIZONTAL/1.5
},
textStyle:{

}

})