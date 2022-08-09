import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Colors } from '../../constant/colors'

const Touch=Animated.createAnimatedComponent(TouchableOpacity)

const {height:GLOBAL_HEIGHT,width:GLOBAL_WIDTH}=Dimensions.get('screen')

const PADDING=3
const SWITCH_TO=GLOBAL_WIDTH*0.12-(GLOBAL_WIDTH*0.12/2)-PADDING
const HEIGHT=GLOBAL_HEIGHT*0.03
const WIDTH=GLOBAL_WIDTH*0.12

interface Props{
    activeBackgroundColor?:string,
    deActiveBackgroundColor?:string,
    active?:boolean

}

const RNSwitch = (Props:Props) => {

    let [enableSwitch,setSwitch]=React.useState<boolean>(!!Props?.active)
    let toLeft=useSharedValue(0)

    let left=useAnimatedStyle(()=>{
        let move=interpolate(toLeft.value,[0,SWITCH_TO],[0,SWITCH_TO])
        return{
            left:withTiming(move,{duration:600}),
            //backgroundColor:enableSwitch?Colors.darkBlack:Colors.white
        }
    })

    
    React.useEffect(()=>{
        
        if(enableSwitch)toLeft.value=SWITCH_TO
        else toLeft.value=0
    },[enableSwitch])

    React.useEffect(()=>{
            setSwitch(!!Props.active)
    },[Props.active])

    
    const onSwitch=()=>{
        setSwitch(!enableSwitch)
    }

    const SWITCH_STYLE=[styles.switchView,left]
    const switchView=[styles.view]
    return (
        <View style={switchView}>
        <Touch style={SWITCH_STYLE} onPress={onSwitch} />
    </View>
  )
}

export default RNSwitch

const styles = StyleSheet.create({
    view:{
        height:HEIGHT,
        width:WIDTH,
        borderRadius:HEIGHT,
        backgroundColor:Colors.darkBlack,
        overflow:"hidden",
        padding:PADDING
    },
    switchView:{
            height:'100%',
            width:"50%",
            backgroundColor:Colors.white,
            borderRadius:HEIGHT,
            left:SWITCH_TO*0
    }
})