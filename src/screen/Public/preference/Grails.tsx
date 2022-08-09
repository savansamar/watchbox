import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { HEADER_HEIGHT, PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import InputBox, { InputBoxProp } from '../../../component/textInput/InputBox'
import { Images } from '../../../constant/images'
import GrailsList from '../../../component/FlatList/GrailsList'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'

const Grails = () => {

  const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()

  const inputRef:InputBoxProp={
    onChangeText(){},
    containerStyle:{backgroundColor:Colors.lightOrange},
    inputContainerStyle:{borderBottomWidth:0,borderRadius:7,overflow:"hidden"},
    leftImage:Images.searchIcon,
    placeholder:'Search for grail...'
  }

  const _header=()=>{
    return(
      <View style={styles.header}>
      <View style={styles.headerSection}>
        <View style={styles.searchView}>
          <InputBox  {...inputRef} />
        </View>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text style={styles.rightTitle}>SKIP</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
 
  return (
    <View style={styles.container}>
      {_header()}
      <View style={styles.listSection}>
        <GrailsList />
      </View>
    </View>
  )
}

export default Grails

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white
  },
  header:{
    height:HEADER_HEIGHT,
    width:"100%",
    paddingHorizontal:PADDING_HORIZONTAL,
    justifyContent:"flex-end"
   
  },
  headerSection:{
    height:56,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    width:"100%"
  },
  rightTitle:{
    color:Colors.darkBlack,
    fontFamily:Fonts.medium,
    fontSize:13,
    textAlignVertical:"center",
  
},
searchView:{
  marginRight:PADDING_HORIZONTAL,
  flexGrow:1,
  height:56,
},

title:{
  fontSize:24,
  lineHeight:28,
  fontFamily:Fonts.regular,
  paddingHorizontal:PADDING_HORIZONTAL,
  marginTop:24,
  marginBottom:32,letterSpacing:-0.4
},
listSection:{
  flex:1
}

})