import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import Progress, { ProgressProps } from './Progress'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'
import { Images } from '../../constant/images'

const IMAGE_HEIGHT=16
const SPACE_LEFT=IMAGE_HEIGHT*3

interface OrderTrackProp{
    index?:number
} 

const OrderTrack = (Props:OrderTrackProp) => {

    const [index,setIndex]=React.useState<number>(1)

React.useEffect(()=>{
    if(Props.index) setIndex(Props.index)
    else setIndex(1)
},[Props.index])

    const firstText=(e:number):TextStyle=>{
        return{color:index==e?Colors.darkBlack:index>e?Colors.grey:Colors.fadedWhite}
    }
   const firsBg=(e:number):ViewStyle=>{
    return {backgroundColor:index==e?Colors.darkBlack:index>e?Colors.grey:'transparent'}
   }


   const tintColor=(e:number):ImageStyle=>{
        return {tintColor:Colors.white }
    }


    const progressPropRef:ProgressProps={
        style:styles.progressView,
        max:100,
        duration:0,
        backgroundColor:Colors.fadedWhite,
        activeColor:Colors.grey
      }

      const color:TextStyle={

      }

      const background:ViewStyle={

      }

  return (
    <View style={styles.progress}>
        <View style={[styles.section,{marginLeft:SPACE_LEFT}]}>
            <View style={styles.rowS}>
                <View style={[styles.index,firsBg(1)]}> 
                    {
                        index>1?
                        <Image source={Images.checkIcon} style={[styles.image,tintColor(1)]} />
                        :
                        <Text style={[styles.indexText]}>1</Text>
                    }
                </View>
                <Progress 
                    {...progressPropRef}
                    value={index>1?100:0}
                />
            </View>
            <Text style={[styles.name,firstText(1)]}>Shipping</Text>
        </View>

        <View style={styles.section}>
            <View style={styles.rowS}>
                <View style={[styles.index,firsBg(2)]}>
                {
                        index>2?
                        <Image source={Images.checkIcon} style={[styles.image,tintColor(1)]} />
                        :
                        <Text style={[styles.indexText]}>2</Text>
                    }
                </View>
                <Progress 
                    {...progressPropRef}
                    value={index>2?100:0}

                />
            </View>
            <Text numberOfLines={2} style={[styles.name,firstText(2)]}>Payment</Text>
        </View>

        <View style={[styles.section]}>
            <View style={styles.rowS}>
                <View style={[styles.index,firsBg(3)]}>
                {
                        index>3?
                        <Image source={Images.checkIcon} style={[styles.image,tintColor(1)]} />
                        :
                        <Text style={[styles.indexText]}>3</Text>
                    }
                </View>
            </View>
            <Text numberOfLines={2} style={[styles.name,firstText(3)]}>Summary</Text>
        </View>
    </View>
  )
}

export default OrderTrack

const styles = StyleSheet.create({
    progress:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        alignSelf:"center"
    },
    section:{
    },
    progressView:{
        width:72,
        height:1,
    },
    index:{
        height:IMAGE_HEIGHT,
        width:IMAGE_HEIGHT,
        backgroundColor:Colors.white,
        borderRadius:16,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:Colors.fadedWhite
    },
    indexText:{
        fontSize:9,
        color:Colors.fadedGrey,
        fontFamily:Fonts.regular
    },
    rowS:{
        flexDirection:"row",
        justifyContent:'flex-start',
        alignItems:"center",
    },
    name:{
        fontSize:10,
        fontFamily:Fonts.medium,
        color:Colors.fadedWhite,
        right:20,
        height:20,
        width:64,
        textAlign:"center"
    },
    image:{
        height:10,
        width:10,
    }
    
})