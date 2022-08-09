
import { Dimensions, StyleSheet,  NativeSyntheticEvent, NativeScrollEvent, View, ViewStyle } from 'react-native'
import React ,{useEffect} from 'react'
import { Gesture, GestureDetector, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { Colors } from '../../constant/colors';
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const {height:SCREEN_HEIGHT} =Dimensions.get('window');

export interface PopUpProp{
    children?:React.ReactNode,
    show?:boolean,
    onClose:()=>void,
    height?:number,
    max?:number,
    borderRadius?:number,
    backgroundColor?:string,
    scrollable?:boolean
}

export type BottomSheetRef={
    scrollTo:(destination:number)=>void,
    isActive:()=>boolean
}

const PopUp = (Props:PopUpProp) => {

    const [MAX_TRANSLATE_Y,setMax]=React.useState(-SCREEN_HEIGHT+100)
    const navigation=useNavigation()

    const translateY=useSharedValue(0)
    const context=useSharedValue({y:0})  
    const active=useSharedValue(false)
    const [close,setClose]=React.useState<boolean>(false)
    const [show,setShow]=React.useState<boolean>(Boolean(Props.show))

    const backgroundColor:ViewStyle={
        backgroundColor:Props.backgroundColor?Props.backgroundColor:Colors.white
    }

    
    const [scroll,setScroll]=React.useState(false)
    
    const scrollTo=React.useCallback((destination:number)=>{
        'worklet'
        active.value=destination !==0
        translateY.value=withSpring(destination,{damping:50})
    },[])



    const gesture=Gesture.Pan()
    .onStart(event=>{
        context.value={y:translateY.value}
    })
    .onUpdate((event)=>{
        console.log("ee===")
        translateY.value=event.translationY+ context.value.y
        if(translateY.value<MAX_TRANSLATE_Y){
            runOnJS(setScroll)(true)
        }
        else{
            runOnJS(setScroll)(false)
        }
        translateY.value=Math.max(translateY.value,MAX_TRANSLATE_Y)

    })
    .onEnd(()=>{

        if(translateY.value > -SCREEN_HEIGHT/3){
           scrollTo(0)
           runOnJS(setClose)(true)
           runOnJS(setScroll)(false)
        }
        else if(translateY.value > -SCREEN_HEIGHT/1.3){
            runOnJS(setScroll)(false)
           scrollTo(translateY.value)

        }
        else if(translateY.value < -SCREEN_HEIGHT/1.3){
            if(Props.scrollable===false) runOnJS(setScroll)(false)
            //else runOnJS(setScroll)(true)
           scrollTo(MAX_TRANSLATE_Y)
        }
    })


    const closeModal=(e:number)=>{
        scrollTo(0)
        Props.onClose()
        setTimeout(()=>{
            setShow(false)
        },e)
    }

    useEffect(()=>{
       if(close) closeModal(500)
    },[close])


    // useEffect(()=>{ 
    //     if(Props.scrollTo) 
    //     {
    //         scrollTo(Props.scrollTo)
    //         setScroll(false)
    //     }
    // },[Props.scrollTo])

   
    useFocusEffect(React.useCallback(()=>{
        if(Props.show){
            navigation.setOptions({tabBarStyle:{display:"none"}})
            setTimeout(()=>{
                setShow(true)
                let to=Number(Props.height)>0?Props.height:SCREEN_HEIGHT/3
                let max=Number(Props.max)>0?Props.max:SCREEN_HEIGHT-100
                scrollTo(-1*Number(to))
                setClose(false)
                setMax(-1*Number(max))
            },100)
        }
        else{
            console.log("gd grtdrtdr")
            navigation.setOptions({tabBarStyle:{display:"flex"}})
            closeModal(400)
        }
    },[Props.show]))

    

    const bottomSheetStyle=useAnimatedStyle(()=>{
        let minRadius=Props.borderRadius?Props.borderRadius:5
        const borderRadius=interpolate(
                            translateY.value,
                            [MAX_TRANSLATE_Y+50,MAX_TRANSLATE_Y],
                            [25,minRadius],
                            Extrapolate.CLAMP,
                            )

        return{
            borderRadius,
            transform:[{
                translateY:translateY.value
            }]
        }
    })

const onScroll=React.useCallback((e:NativeSyntheticEvent<NativeScrollEvent>)=>{
    const {x,y}=e.nativeEvent.contentOffset
    if(y===0){
        setScroll(false)
    }
  
},[])
if(show){
  return (
    <GestureHandlerRootView style={styles.section}>
    <GestureDetector gesture={gesture}>
            <Animated.View 
                style={[styles.container,bottomSheetStyle,backgroundColor]}
                >
                    <ScrollView 
                        scrollEventThrottle={16} 
                        scrollEnabled={scroll} 
                        bounces={false} 
                        onScroll={onScroll}
                        //style={{flex:1}}
                        contentContainerStyle={{flexGrow:1}}
                        showsVerticalScrollIndicator={false}
                    >
                            {Props.children}
                        
                        <View style={{height:SCREEN_HEIGHT+MAX_TRANSLATE_Y}} />
                    </ScrollView>
            </Animated.View>
    </GestureDetector>
    </GestureHandlerRootView>
  )
}
return <></>
}

export default PopUp

const styles = StyleSheet.create({
    section:{
        height:"100%",width:"100%",
        position:"absolute",
        backgroundColor:'rgba(60,60,60,0.7)',
        zIndex:999999999
    },
    container:{
        backgroundColor:Colors.white,
        top:SCREEN_HEIGHT,
        borderRadius:20,
        overflow:'hidden',
        flex:1
    },
    back:{
        height:SCREEN_HEIGHT,
        width:"100%",
        backgroundColor:'rgba(52, 52, 52, 0.8)',
        zIndex:9999,
        position:"absolute"
    },
    demo:{
        height:400,
        width:"100%",
        backgroundColor:"yellow"
    }
})