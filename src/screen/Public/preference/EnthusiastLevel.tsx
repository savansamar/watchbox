import { StyleSheet, Text, View ,ScrollView, ScrollViewProps} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
import { Colors } from '../../../constant/colors'
import { Fonts } from '../../../constant/fonts'
import { MARGIN_BOTTOM, PADDING_HORIZONTAL } from '../../../constant/style'
import Press from '../../../component/Button/Press'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { Images } from '../../../constant/images'
import PressImage from '../../../component/Button/PressImage'

interface ItemProp{
    image?:string,
    onPress:()=>void,
    title?:string
}

export const EnthusiasItem=(Prop:ItemProp)=>{
    const [active,setActive]=React.useState<boolean>(false)

    const onPress=()=>{
        Prop.onPress()
        setActive(!active)
    }

    

    return(
        <View style={[styles.image,{opacity:active?0.3:1}]}>
            <Text style={styles.titleItem}>{Prop.title}</Text>
               <PressImage image={Prop.image} style={styles.image} onPress={onPress} /> 
        </View>
    )
}

const EnthusiastLevel = () => {

    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
    const [selected_category,setSelectedCategory]=React.useState<string>('')
    const check:boolean=selected_category.length === 0?true:false

    console.log(check,selected_category)

    const headPropsRef:HeaderProps={
        background:'light',
        leftIcon:Images.back,
        onPressLeft:()=>navigation.goBack(),
        rightTitle:"SKIP",
        onPressRight:()=>navigation.navigate('FavouriteBrand')
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
        <Text style={styles.title}>What is your watch enthusiast level? </Text>
        <Text style={styles.desc} >We’d like to learn more about your watch collecting and preferences to give you a customized experience.</Text>
        <View style={styles.category}>
            <EnthusiasItem image={Images.noviceIcon} title={'Novice'} onPress={()=>setSelectedCategory('Novice')} />
            <EnthusiasItem image={Images.enthusiastIcon} title={'Enthusiast'} onPress={()=>setSelectedCategory('Enthusiast')} />
            <EnthusiasItem image={Images.collectorIcon} title={'Collector'} onPress={()=>setSelectedCategory('Collector')} />
        </View>
        <Text style={styles.statusText}>I'M DEALER</Text>
        <View style={styles.bottom}>
            <Press 
                disable={check} 
                name={`NEXT`} 
                onPress={()=>navigation.navigate('FavouriteBrand')} 
            />
        </View>
     </ScrollView>
    </View>
  )
}

export default EnthusiastLevel

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
        width:"85%",
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
        width:"95%",
        color:Colors.darkBlack,

    },
   bottom:{
    flex:1,
    justifyContent:"flex-end",
    marginBottom:MARGIN_BOTTOM
   },
   category:{
    marginTop:20
   },
   image:{
    height:80,
    width:'100%',
    resizeMode:"cover",
    marginBottom:8
   },
   titleItem:{
    position:"absolute",
    zIndex:9990,
    color:Colors.white,
    fontFamily:Fonts.regular,
    fontSize:18,
    margin:16
   },
   statusText:{
    fontSize:13,
    lineHeight:16,
    fontFamily:Fonts.medium,
    color:Colors.darkGrey,
    textAlign:"center",
    marginTop:16,
    letterSpacing:1
   }
})