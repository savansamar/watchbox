import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import { Fonts } from '../../../constant/fonts'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import PressImage from '../../../component/Button/PressImage'
import { Images } from '../../../constant/images'
import Watch from '../../../component/Item/Watch'
import { MyWatchBoxItemList } from '../../../constant/intrefaces/watch'
import TouchableText from '../../../component/Button/TouchableText'

const GrailWatch = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Grail Watch</Text>
        <View>
          <PressImage image={Images.grailWatchIcon} style={styles.grailImage} />
          <View style={styles.item}>
            <Watch item={MyWatchBoxItemList[0]} />    
          </View>
        </View>
        <TouchableText name='CHANGE GRAIL' containerStyle={styles.containerStyle} textStyle={styles.textStyle} />
    </View>
  )
}

export default GrailWatch

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white,
    paddingHorizontal:PADDING_HORIZONTAL,
  },
  title:{
    fontSize:24,
    lineHeight:28,
    fontFamily:Fonts.regular,
    color:Colors.darkBlack,
    marginTop:PADDING_HORIZONTAL,
    marginBottom:PADDING_HORIZONTAL+15,
    letterSpacing:-0.6  
    
  },
  grailImage:{
    height:343,
    width:"100%"
  },
  item:{
    position:"absolute",
    alignSelf:"center",
    top:-30
  },
  containerStyle:{
    height:32,
    paddingHorizontal:14,
    borderWidth:1.3,
    borderColor:Colors.darkBlack,
    alignItems:"center",
    alignSelf:"center",
    marginVertical:23,
    justifyContent:"center"
  },
  textStyle:{
    fontSize:10,
    lineHeight:16,
    fontFamily:Fonts.medium,
    color:Colors.darkBlack,letterSpacing:0.5
  }
})