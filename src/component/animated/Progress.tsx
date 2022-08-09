import { StyleSheet, Text, View,Animated, Dimensions, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { Easing } from 'react-native-reanimated'
import { Colors } from '../../constant/colors'

const WIDTH=Dimensions.get('screen').width

export interface ProgressProps{
  width?:number,
  height?:number,
  activeColor?:string,
  backgroundColor?:string,
  duration?:number,
  value?:number,
  max?:number,
  borderRadius?:number,
  spaceVertical?:number,
  style?:StyleProp<ViewStyle>
}


const Progress = (Props:ProgressProps) => {
    let progress=React.useRef(new Animated.Value(0)).current
    let duration=Props?.duration !==0?Props.duration:1000
    let max=Props.value?Props.value:0
    let backgroundColor=Props.backgroundColor?Props.backgroundColor:Colors.lightDark
    let width=Props.width?Props.width:WIDTH
    let activeColor=Props.activeColor?Props.activeColor:Colors.white
    let height=Props.height?Props.height:20
    let maximum=Props.max?Props.max:0
    let borderRadius=Props.borderRadius?Props.borderRadius:0
    let marginVertical=Props.spaceVertical?Props.spaceVertical:0

    React.useEffect(()=>{   
        Animated.timing(progress, {
            toValue:max,
            duration:duration,
            useNativeDriver:false,
            easing:Easing.ease 
          }).start();
    },[Props.value])

    let value=progress.interpolate({
      inputRange:[0,maximum],
      outputRange:['0%','100%']
    })

    const CONTAINER:ViewStyle={
      ...styles.container,height,width,backgroundColor,borderRadius,marginVertical,

    }

  return (
    <View style={[CONTAINER,Props.style]}>
      <Animated.View style={{...styles.view,backgroundColor:activeColor ,width:value}} />
    </View>
  )
}

export default Progress

const styles = StyleSheet.create({

    container:{
        width:"60%",
        height:40,
        overflow:"hidden"
    },
    view:{
        backgroundColor:'white',
        width:"100%",
        height:"100%",
        

    }
})