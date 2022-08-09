import { Dimensions, StyleSheet, Text, View,Modal } from 'react-native'
import React ,{useEffect, useImperativeHandle} from 'react'
import { Gesture, GestureDetector, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { Colors } from '../../constant/colors';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

const {height:SCREEN_HEIGHT} =Dimensions.get('window');
const MAX_TRANSLATE_Y=-SCREEN_HEIGHT + 100

export interface BottomSheetProp{
    fromBottom?:1|2|3|4|5|6|7|8|9|10,
    children?:React.ReactNode
}

export type BottomSheetRef={
    scrollTo:(destination:number)=>void,
    isActive:()=>boolean
}

const BottomSlider = React.forwardRef<BottomSheetRef,BottomSheetProp>(({
    children,
    fromBottom
},ref) => {

    const [show,setSHow]=React.useState(true)
    const translateY=useSharedValue(0)
    const context=useSharedValue({y:0})  
    const active=useSharedValue(false)
    const scrollEnabled=useSharedValue(false)
    const [enable,setEnable]=React.useState<boolean>(false)

    
    const scrollTo=React.useCallback((destination:number)=>{
        'worklet'
        active.value=destination !==0
        if(destination ===MAX_TRANSLATE_Y){
            console.log("Done")
            scrollEnabled.value=!scrollEnabled.value
        }
        translateY.value=withSpring(destination,{damping:50})
    },[])



    const isActive=React.useCallback(()=>{
        return active.value
    },[])

    useImperativeHandle(ref,()=>({scrollTo,isActive}),
        [scrollTo,isActive])

    const gesture=Gesture.Pan()
    .onStart(event=>{
        context.value={y:translateY.value}
    })
    .onUpdate((event)=>{
        translateY.value=event.translationY+ context.value.y
        translateY.value=Math.max(translateY.value,MAX_TRANSLATE_Y)
        console.log("===",translateY.value)
    })
    .onEnd(()=>{
        if(translateY.value > -SCREEN_HEIGHT/3){
           scrollTo(0)
        }
        else if(translateY.value < -SCREEN_HEIGHT/1.3){
           scrollTo(MAX_TRANSLATE_Y)
        }
    })


    useEffect(()=>{
       setTimeout(()=>{
        scrollTo(-SCREEN_HEIGHT/1.2)
        console.log("on USEE")
       },200)
    },[fromBottom])

    


    const bottomSheetStyle=useAnimatedStyle(()=>{
        const borderRadius=interpolate(
                            translateY.value,
                            [MAX_TRANSLATE_Y+50,MAX_TRANSLATE_Y],
                            [25,5],
                            Extrapolate.CLAMP,
                            )

        return{
            borderRadius,
            transform:[{
                translateY:translateY.value
            }]
        }
    })

  return (
    <GestureDetector gesture={gesture}>
            <Animated.View 
                style={[styles.container,bottomSheetStyle]}
            >
               {children}
               <View style={{height:SCREEN_HEIGHT/7}} />
            </Animated.View>
        
    </GestureDetector>
  )
})

export default BottomSlider

const styles = StyleSheet.create({
    container:{
       height:SCREEN_HEIGHT,
        width:"100%",
        backgroundColor:Colors.white,
        position:"absolute",
        top:SCREEN_HEIGHT,
        borderRadius:20,
        overflow:'hidden'
    },
    back:{
        height:SCREEN_HEIGHT,
        width:"100%",
        backgroundColor:'rgba(52, 52, 52, 0.8)',
        zIndex:9999,
        position:"absolute"
    }
})