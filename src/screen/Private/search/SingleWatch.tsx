import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollViewProps, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import PressImage from '../../../component/Button/PressImage'
import { Images } from '../../../constant/images'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { WatchDetails } from '../../../component/Item/Watch'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
import { ScrollView } from 'react-native-gesture-handler'
import Progress, { ProgressProps } from '../../../component/animated/Progress'
import { Fonts } from '../../../constant/fonts'
import Press from '../../../component/Button/Press'
import ReviewHeader from '../../../component/Header/ReviewHeader'
import ArrivedWatches from '../../../component/FlatList/ArrivedWatches'
import { PopUpProp } from '../../../component/Modal/PopUp'
import Inquiry from './Inquiry'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import TouchableText from '../../../component/Button/TouchableText'
import Specs from './Specs'
import AddWishList, { AddWishListProp } from './AddWishlist'
import OfferPrice from './OfferPrice'

const {width:WIDTH,height:HEIGHT}=Dimensions.get('screen')
let desc="Pre-Owned Rolex Submariner No Date Vintage (5513) self - winding automatic watch, features a 40mm stainless steel case surrounding a black dial with a red Syrian signing"

interface InfoTextProp{
    text:string
}
const InfoText=(Props:InfoTextProp)=>{
    return(
        <View style={[header.rowS,{marginBottom:16,alignItems:"flex-start",width:"70%"}]}>
        <View style={styles.dash} />
        <Text style={[styles.brand,{color:Colors.darkBlack,width:"100%"}]}>{Props.text}</Text>
         </View>
    )
}


export default function SingleWatch() {

    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
    const route=useRoute<RouteProp<GlobalStackParam>>()
    const [watchINfo,setWatchInfo]=React.useState<WatchDetails|undefined>(route.params?.item)
    const [showInquiry,setShowInquiry]=React.useState<boolean>(false)
    const [viewSpecs,setViewSpecs]=React.useState<boolean>(false)
    const [addWishlist,setAddWishList]=React.useState<boolean>(false)
    const [showPrice,setShowPrice]=React.useState<boolean>(true)

    let scrollRef=React.useRef<ScrollView|null>(null)
    
    const closeInquiryModal=React.useCallback((e:boolean)=>{
        setShowInquiry(e)
    },[showInquiry])

    


    const _customHeader=()=>{
        return(
            <View style={header.container}>
                <View style={header.row}>
                    <PressImage image={Images.back} onPress={()=>navigation.goBack()} />
                    <View style={header.rowS}>
                        <PressImage image={Images.shareIcon} style={{marginRight:10}} onPress={()=>closeInquiryModal(true)} />
                        <PressImage image={ addWishlist ? Images.starIcon:Images.darkStarIcon} onPress={()=>setAddWishList(!addWishlist)} />
                    </View>
                </View>
            </View>
        )
    }


    const _carousel=()=>{

        console.log("Carausal")
        const [index,setIndex]=React.useState<number>(0)

        const onScroll=React.useCallback((e:NativeSyntheticEvent<NativeScrollEvent>)=>{
            let index=e.nativeEvent.contentOffset.x
            if(index){
                let value:number=Math.round(index/WIDTH)
                setIndex(value)
                return
            }
            setIndex(0)
        },[])

        const scrollViewPropRef:ScrollViewProps={
            horizontal:true,
            contentContainerStyle:{flexGrow:1},
            pagingEnabled:true,
            scrollEventThrottle:16,
            decelerationRate:"fast",
            contentInsetAdjustmentBehavior:"always",
            bounces:false,
            showsHorizontalScrollIndicator:false,
            onScroll:onScroll
            
        }
        const progressPropRef:ProgressProps={
            style:styles.progressView,
            max:100,
            duration:0,
            backgroundColor:Colors.grey,
            activeColor:Colors.white
          }
        return(
            <View style={styles.carousel}>
                <ScrollView ref={scrollRef} {...scrollViewPropRef} >
                    <Image style={styles.imageCarousel} source={Images.frontOne} />
                    <Image style={styles.imageCarousel} source={Images.watchBlack} />
                    <Image style={styles.imageCarousel} source={Images.frontOne} />
                    <Image style={styles.imageCarousel} source={Images.watchBlack} />
                </ScrollView>
                <View style={styles.progress}>
                    <View style={header.rowS}>
                        <Progress 
                            {...progressPropRef}
                            value={index>=0?100:0}
                            duration={index>=0?600:1}
                        />
                        <Progress 
                            {...progressPropRef}
                            value={index>=1?100:0}
                            duration={index>=1?600:1}
                        />
                        <Progress 
                            {...progressPropRef}
                            value={index>=2?100:0}
                            duration={index>=2?600:1}
                        />
                        <Progress 
                            {...progressPropRef}
                            value={index>=3?100:0}
                            duration={index>=3?600:1}
                        />
                    </View>
                </View>
            </View>
        )    
    }

    const _watchInfo=()=>{

        const _viewAllSpecs=React.useCallback(()=>{
            setViewSpecs(true)
        },[])

        return(
            <View style={styles.infoView}>
                <Text style={styles.brand}>{watchINfo?.brand_name}</Text>
                <Text style={styles.name}>{watchINfo?.name}</Text>
                <Text style={styles.version}>RH34H7</Text>
                <Text style={styles.price}>$96</Text>
                <View style={header.rowC}>
                    <View style={[header.rowS]}>
                        <PressImage disable={true} image={Images.logoSymbol} style={styles.imageDesc} />
                        <Text style={[styles.brand,{marginLeft:10}]}>82 Collections </Text>
                    </View>
                    <View style={[header.rowS,{marginLeft:10}]}>
                        <View style={styles.grail}>
                            <Image style={{height:12,width:12}} source={Images.grail} />
                        </View>
                        <Text style={[styles.brand,{marginLeft:10}]}>82 Collections </Text>
                    </View>
                </View>
                <Press 
                    containerStyle={{width:"100%",marginTop:27}} 
                    name="BUY NOW" 
                    onPress={()=>navigation.navigate('OrderStatus')}  
                />
                <TouchableOpacity 
                    activeOpacity={0.5} 
                    style={styles.rowC}  
                    onPress={()=>navigation.navigate('Chat')} 
                >
                    <PressImage disable={true} image={Images.userImage}  style={{marginRight:10}}/>
                    <Text style={styles.brand}>MESSAGE TEAM</Text>
                </TouchableOpacity>
                <Text style={styles.brand} >{desc}</Text>
                <Text style={[styles.brand,styles.linkText]} >Read More</Text>

                <View style={styles.qualityView}>
                    <View style={{width:"60%"}}>
                        <InfoText text='No box or papers' />
                        <InfoText text='Specific Warranty Conditions Apply' />
                        <InfoText text='40mm case' />
                        <InfoText text='Year:1996' />
                    </View>
                    <View style={{flexGrow:1}}>
                        <Image source={Images.WBIcon} style={styles.WB} />
                    </View>
                </View>

                <TouchableText 
                    textStyle={[styles.brand,{color:Colors.lightBlue}]} 
                    containerStyle={[styles.linkText]}  
                    onPress={_viewAllSpecs} 
                    name="View All Specs"
                />
            </View>
        )
    }

    const _parentScrollPropRef:ScrollViewProps={
        bounces:false,
        showsVerticalScrollIndicator:false
    }

    const popUpRef:PopUpProp={
        show:showInquiry,
        onClose:React.useCallback(()=>setShowInquiry(false),[])
    }
    const specRef:PopUpProp={
        show:viewSpecs,
        onClose:React.useCallback(()=>{setViewSpecs(false)},[])
    }
    const wishlistRef:AddWishListProp={
        show:addWishlist,
        onClose:React.useCallback(()=>{setAddWishList(false)},[]),
        onPress:React.useCallback(()=>{},[])
    }

    const offerPrice:PopUpProp={
        show:showPrice,
        onClose:()=>setShowPrice(false)
    }



    return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'dark-content'} />
      <Inquiry {...popUpRef} />
      <AddWishList {...wishlistRef} />
        <Specs {...specRef} />
        <OfferPrice {...offerPrice} />
    {_customHeader()}
      <ScrollView {..._parentScrollPropRef}>
            {_carousel()}
            {_watchInfo()}
            <ReviewHeader />
            <View style={{marginTop:50}}>
                <ArrivedWatches title='You may also like' />
            </View>
            <View style={{height:40}} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    dash:{
        height:1,
        width:10,
        backgroundColor:Colors.darkBlack,
        marginRight:10,
        top:7
    },
    WB:{
        height:144,
        width:144
    },

    carousel:{
        height:319,
        width:WIDTH,
        marginBottom:20
    },
    imageCarousel:{
        height:"100%",
        width:WIDTH,
        resizeMode:"cover",
        zIndex:1
    },
    progress:{
        width:"100%",
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        bottom:20
    },
    progressView:{
        width:48,
        height:2,
        marginHorizontal:4
    },
    infoView:{
        alignItems:"center",
        paddingHorizontal:PADDING_HORIZONTAL
    },
    brand:{
        fontSize:12,
        lineHeight:18.3,
        fontFamily:Fonts.regular,
        letterSpacing:0.7,
        color:Colors.darkGrey
    },
    name:{
        fontSize:20,
        fontFamily:Fonts.medium,
        letterSpacing:-0.4,
        color:Colors.darkBlack
    },
    version:{
        fontSize:12,
        lineHeight:18.3,
        fontFamily:Fonts.regular,
        letterSpacing:1,
        color:Colors.grey
    },
    price:{
        marginVertical:25,
        fontSize:24,
        fontFamily:Fonts.light,
        color:Colors.darkGrey,
        lineHeight:28,
        letterSpacing:0.4
    },
    imageDesc:{
        backgroundColor:Colors.darkBlack,
        tintColor:Colors.white,
        borderRadius:10,

    },
    grail:{
        borderWidth:1,
        borderRadius:10,
        borderColor:Colors.darkBlack,
        height:20,
        width:20,
        justifyContent:"center",
        alignItems:"center"
    },
    linkText:{
        width:"100%",
        color:Colors.lightBlue,
        marginVertical:24,
        textAlign:"left"
    },
    qualityView:{
        flexDirection:"row",
        width:"100%"
    },
    rowC:{
        flexDirection:"row",
        justifyContent:"center",
        borderWidth:1,
        height:48,
        alignItems:"center",
        width:"100%",
        marginBottom:27,
        marginTop:8
    }
})

const header=StyleSheet.create({
    container:{
        width:"100%",paddingHorizontal:PADDING_HORIZONTAL,
        justifyContent:"flex-end",
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:72,
        marginBottom:16
    },
    rowS:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    rowC:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }
})