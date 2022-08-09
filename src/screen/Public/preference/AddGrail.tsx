import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { Images } from '../../../constant/images'
import { MARGIN_BOTTOM, PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import PressImage from '../../../component/Button/PressImage'
import TouchableText from '../../../component/Button/TouchableText'
import Press from '../../../component/Button/Press'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'

const AddGrail = () => {

  const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()

  const headerPropRef:HeaderProps={
    background:"light",
    rightTitle:"SKIP",
    leftIcon:Images.back,
    onPressRight:()=>navigation.navigate('Grails'),
    onPressLeft:()=>navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Header  {...headerPropRef} />
      <Text style={styles.title}>Add Your Grail Watch</Text>
      <Text style={styles.desc }>Select your one and ultimate time piece for your collection in the future. </Text>
      <View style={styles.imageView}>
          <PressImage image={Images.groupSquare} style={styles.image} />
        <View style={styles.info}>
          <PressImage image={Images.grail}  />
          <Text style={styles.grailText}>My Grail</Text>
          <TouchableText 
            disable={false} 
            onPress={()=>{navigation.navigate('Grails')}} 
            name='+ ADD GRAIL' 
            containerStyle={styles.containerStyle}  
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Press name='NEXT' onPress={()=>navigation.navigate('ClientAdvisor')} />
      </View>
    </View>
  )
}

export default AddGrail

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white
  },
  title:{
    letterSpacing:-0.4,
    marginTop:10,
    marginBottom:22,
    paddingHorizontal:PADDING_HORIZONTAL,
    fontSize:24,
  lineHeight:28,
  fontFamily:Fonts.regular,
  color:Colors.darkBlack,
  },
  desc:{
    paddingHorizontal:PADDING_HORIZONTAL, fontSize:12,
    lineHeight:18.3,
    fontFamily:Fonts.regular,
    color:Colors.darkBlack,
    letterSpacing:-0.4,
    width:"90%"
  },
  imageView:{
    height:311,
    width:311,
    marginTop:45,
    alignSelf:"center",
  },
  image:{
    height:311,
    width:311,
    resizeMode:"contain",
    position:"absolute",
    zIndex:999
  },
  info:{
    height:311,
    width:311,
    justifyContent:"center",
    alignItems:"center"
  },
  grailText:{
    letterSpacing:-0.4,
    paddingHorizontal:PADDING_HORIZONTAL,
    fontSize:24,
  lineHeight:28,
  fontFamily:Fonts.regular,
  color:Colors.darkBlack,
  marginVertical:24,
  textAlign:"center"
  },


  containerStyle:{
    borderWidth:1,
    paddingHorizontal:24,
    paddingVertical:8,
    alignSelf:"center"
  },
  bottom:{
    flex:1,
    justifyContent:"flex-end",
    paddingHorizontal:PADDING_HORIZONTAL,
    marginBottom:MARGIN_BOTTOM
  }
})