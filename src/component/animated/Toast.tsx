import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/colors'
import { Images } from '../../constant/images'
import { Fonts } from '../../constant/fonts'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { useFocusEffect } from '@react-navigation/native'

const Touch=Animated.createAnimatedComponent(TouchableOpacity)

const Toast = () => {

    const scaleRef=useSharedValue(0)
    const style=useAnimatedStyle(()=>{
        const value=interpolate(scaleRef.value,[0,1],[-120,40],Extrapolate.CLAMP)
        return{
            top:withTiming(value,{duration:800})
        }
    })

    const onPress=React.useCallback(()=>{
        scaleRef.value=!scaleRef.value?1:0
    },[])

    useFocusEffect(React.useCallback(()=>{
        scaleRef.value=1
    },[]))
    

  return (
    <Animated.View style={[styles.container,style]} onStartShouldSetResponder={e=>true} >
        <Touch
            activeOpacity={0.5} 
            style={[styles.imageContainer]}
           onPress={onPress}
            
        >
        <Image source={Images.redCloseIcon} style={styles.image} />
      </Touch>
      <View style={styles.section}>
        <Text style={styles.title} >Error Headline</Text>
        <Text style={styles.text}>Some description of this error</Text>
      </View>
    </Animated.View>
  )
}

export default Toast

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        height:80,
        width:"95%",
        marginHorizontal:12,
        backgroundColor:Colors.fadedDark,
        borderRadius:10,
        top:40,
        zIndex:9999,
        alignSelf:"center",

        flexDirection:"row",
        alignItems:"center"
    },
    imageContainer:{
        height:48,
        width:48,
        borderRadius:40,
        backgroundColor:Colors.darkBlack,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:16,
        marginRight:4
    },
    image:{
        height:"50%",
        width:"50%"
    },
    section:{
        marginLeft:16
    },
    title:{
        fontSize:12,
        lineHeight:18,
        color:Colors.white,
        fontFamily:Fonts.medium,
        letterSpacing:1
    },
    text:{
        fontSize:12,
        lineHeight:18,
        color:Colors.white,
        fontFamily:Fonts.regular,
        letterSpacing:0.6,
        marginTop:8
    }
})