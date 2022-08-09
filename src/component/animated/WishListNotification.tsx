import { StyleSheet, Text, View,TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/colors'
import { Images } from '../../constant/images'
import { Fonts } from '../../constant/fonts'
import PressImage from '../Button/PressImage'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useFocusEffect } from '@react-navigation/native'

interface WishListNotificationProp{
    show?:boolean,
    close?:()=>void
}

const WishListNotification = (Props:WishListNotificationProp) => {

    const translateY=useSharedValue(Dimensions.get('screen').height)

    const style=useAnimatedStyle(()=>{
        return{
            transform:[
                {
                    translateY:withTiming(translateY.value,{duration:600})
                }
            ]
        }
    })


    const onClose=()=>{
        translateY.value=Dimensions.get('screen').height
    }

    useFocusEffect(React.useCallback(()=>{
        translateY.value=-Dimensions.get('screen').height/25
    },[]))

  return (
    <Animated.View  style={[styles.view,style]}>
        <PressImage image={Images.activeCloseIcon} style={styles.close} onPress={onClose} />
        <View style={styles.section}>
            <Image source={Images.starIcon} style={styles.image} />
            <Text style={styles.text} >Tap star to remove from Wishlist</Text>
        </View>
    </Animated.View>
  )
}

export default WishListNotification

const styles = StyleSheet.create({
    view:{
        width:'90%',
        backgroundColor:Colors.lightOrange,
        position:"absolute",
        shadowColor:Colors.grey,
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.6,
        shadowRadius:20,
        paddingHorizontal:28,
        paddingVertical:20,
        zIndex:9999,
        alignSelf:"center",
        bottom:0,
        borderRadius:5,
        elevation:20
    },
    section:{
        flexDirection:"row",
        alignItems:"center"
    },
    image:{
        height:24,
        width:24,
        resizeMode:"contain",
        marginRight:24
    },
    text:{
        fontSize:12,
        lineHeight:18,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,
        letterSpacing:-0.6
    },
    close:{
        position:"absolute",
        zIndex:999,
        bottom:-5,
        right:-20,
        height:15,
        width:15
    }
})