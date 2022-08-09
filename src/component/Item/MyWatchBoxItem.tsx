import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { WatchDetails } from './Watch'
import PressImage from '../Button/PressImage'
import { Fonts } from '../../constant/fonts'
import { Colors } from '../../constant/colors'
import TouchableText from '../Button/TouchableText'
import { Images } from '../../constant/images'
import PopUp from '../Modal/PopUp'
const HEIGHT=128

export interface MyWatchBoxItemProps{
  item:WatchDetails,
  callBack:(e:WatchDetails|string)=>void
}

const MyWatchBoxItem = (Props:MyWatchBoxItemProps) => {

const onPressDot=()=>{
Props.callBack('option')
}

  return (
    
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <PressImage disable={true} image={Props.item.image} style={styles.image} />
      <View style={styles.section}>
          <View>
            <View style={styles.row}>
              <Text style={styles.brand_Name}>{Props.item.brand_name}</Text>
              <PressImage image={Images.threeDot} onPress={onPressDot} />
            </View>
              <Text style={styles.name}>{Props.item.name}</Text>
              <Text style={styles.model}>260221</Text>
          </View>
          <View style={styles.bottom}>
            <TouchableText name='SELL' containerStyle={styles.active} textStyle={styles.activeTextStyle} onPress={()=>Props.callBack('sell')} />
            <TouchableText name='VIEW' containerStyle={[styles.active,styles.deActive]} textStyle={[styles.activeTextStyle,styles.deActiveText]} />
          </View>
      </View>
    </TouchableOpacity>
  )
}

export default MyWatchBoxItem

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:HEIGHT,
   flexDirection:"row",
   alignItems:"flex-start",
   marginBottom:20,
  },
  image:{
    height:'100%',
    width:128,
    resizeMode:"contain",
    marginRight:20,
  },
  section:{
    flex:1,
    alignSelf:"stretch"
  },
  brand_Name:{
    marginVertical:8,
    fontSize:12,
    lineHeight:18.3,
    fontFamily:Fonts.regular,
    color:Colors.darkGrey,
    letterSpacing:0.5
  },
  name:{
    fontSize:14,
    lineHeight:16,
    fontFamily:Fonts.medium,
    color:Colors.darkBlack,
    letterSpacing:0.5
  },
  model:{
    fontSize:12,
    lineHeight:18.3,
    fontFamily:Fonts.regular,
    color:Colors.grey,
    letterSpacing:0.5,
    marginVertical:8
  },
  bottom:{
    flex:1,
    flexDirection:"row",
    alignItems:'flex-end',
    justifyContent:"space-around"
  },
  active:{
    backgroundColor:Colors.darkBlack,
    width:88,
    height:32,
    justifyContent:"center",
    alignItems:"center"
  },
  activeTextStyle:{
    color:Colors.white,
    fontSize:12,
    lineHeight:16
  },
  deActive:{
    backgroundColor:Colors.white,
    borderWidth:1.2,
    borderColor:Colors.darkBlack
  },
  deActiveText:{
    color:Colors.darkBlack,
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  }

})