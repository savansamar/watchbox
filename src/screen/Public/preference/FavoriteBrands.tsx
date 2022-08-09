import { StyleSheet, Text, View ,ScrollView, ScrollViewProps,TouchableOpacity} from 'react-native'
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
import InputBox, { InputBoxProp } from '../../../component/textInput/InputBox'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import Category from '../../../component/FlatList/Category'
import { BrandCategory, BrandCategoryProp } from '../../../constant/static_data'
import BrandList from '../../../component/animated/BrandList'

const TITLE="Add favorite brands"

const FavouriteBrand = () => {

    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
    const [Brand,setBrand]=React.useState<BrandCategoryProp[]>(BrandCategory)
    const [showBottomSheet,setShowBottomSheet]=React.useState<boolean>(false)

    const check:boolean=Brand.length=== 0?true:false

    const headPropsRef:HeaderProps={
        background:'light',
        leftIcon:Images.back,
        onPressLeft:()=>navigation.goBack(),
        rightTitle:"SKIP",
        onPressRight:()=>{setShowBottomSheet(!showBottomSheet)}
    }
   
    const InputBoxPropRef:InputBoxProp={
        onChangeText(e) { },
        containerStyle:styles.containerStyle,
        inputContainerStyle:styles.inputContainerStyle,
        placeholder:"Search for brand",
        leftImage:Images.searchIcon
        
    }

    const _brandCategory=()=>{
        const onSelectCategory=React.useCallback((item:BrandCategoryProp[])=>{
        },[])
        return <Category data={Brand} callBack={onSelectCategory} />
    }


  


  return (

        <View style={styles.container}>
        <Header {...headPropsRef} />
        <View style={styles.scroll} >
         <Text style={styles.title}>{TITLE}</Text>
                <InputBox {...InputBoxPropRef} />
                <View style={styles.section}>
                {_brandCategory()}
            </View> 
        </View>
        <BrandList 
            visible={showBottomSheet} 
            close={()=>setShowBottomSheet(!showBottomSheet)} 
        />
        </View>
  )
}

export default FavouriteBrand

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    section:{
    flex:1
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
        width:"85%",
        color:Colors.darkBlack,
        
    },
    scroll:{
        paddingHorizontal:PADDING_HORIZONTAL,
        flexGrow:1,
    },
    desc:{
        fontSize:12,lineHeight:18.3,
        fontFamily:Fonts.regular,
        letterSpacing:0.5,
        marginBottom:24,
        width:"95%"
    },
   bottom:{
    flex:1,
    justifyContent:"flex-end",
    marginBottom:MARGIN_BOTTOM
   },
   category:{
    flex:1
   },
  


   containerStyle:{
    backgroundColor:Colors.lightOrange,
    marginTop:8,
    marginBottom:32
   },
   inputContainerStyle:{
    borderBottomWidth:0
   }
   
})