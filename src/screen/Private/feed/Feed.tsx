import { ScrollViewProps, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { Images } from '../../../constant/images'
import { globalStyles } from '../../../styles/styles'
import { Fonts } from '../../../constant/fonts'
import { MARGIN_BOTTOM, PADDING_HORIZONTAL } from '../../../constant/style'
import { ScrollView } from 'react-native-gesture-handler'
import ArrivedWatches from '../../../component/FlatList/ArrivedWatches'
import ReviewHeader from '../../../component/Header/ReviewHeader'
import Ranking from '../../../component/FlatList/Ranking'
import Community from '../../../component/FlatList/Cummunity'
import StaffList from '../../../component/FlatList/StaffList'
import PressImage from '../../../component/Button/PressImage'
import BondCollection from '../../../component/FlatList/BondColleaction'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
import { useNavigation } from '@react-navigation/native'

const Feed = () => {

  const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()


  const onPressTitle=React.useCallback(()=>{
    navigation.navigate('Blog')
  },[])



  const headerPropRef:HeaderProps={
    leftIcon:Images.logoSymbol,
    leftImageStyle:[globalStyles.logoStyle,{tintColor:Colors.white,right:10}],
    rightIcon:Images.iconProfile
  }
  const scrollPropRef:ScrollViewProps={
    style:styles.scroll,
    contentContainerStyle:styles.contentContainerStyle,
    showsVerticalScrollIndicator:false
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} barStyle={'light-content'} />
      <Header {...headerPropRef} />
        <Text style={styles.title}>Evening, Elon</Text>
        <ScrollView {...scrollPropRef} >
          <ArrivedWatches />
          <ReviewHeader />
          <View style={{marginTop:48}}>
            <Ranking />
          </View>
          <View style={{marginTop:48}}>
            <Community />
          </View>
          <View style={{marginTop:48}}>
            <ReviewHeader background={Colors.extraLightOrange} hideTitleIcon={true} />
          </View>
          <View style={{marginTop:48}}>
            <StaffList />
          </View>
          <View style={{marginTop:48}}>
            <PressImage image={Images.handWatch} style={styles.image} />
          </View>
          <View style={{marginTop:48}}>
            <BondCollection />
          </View>
          <View style={{marginTop:48}}>
            <ReviewHeader />
          </View>
          <View style={{marginTop:48}}>
            <Ranking />
          </View>
          <View style={{marginTop:48}}>
            <ReviewHeader background={Colors.lightGreen} buttonTitle={'READ ARTICLE'} onPress={onPressTitle} />
          </View>

          <View style={{height:100}} />
        </ScrollView>

    </View>
  )
}

export default Feed

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white
  },
  title:{
    fontSize:32,
    lineHeight:40,
    color:Colors.white,
    fontFamily:Fonts.regular,
    backgroundColor:Colors.darkBlack,
    paddingHorizontal:PADDING_HORIZONTAL,
    paddingBottom:13
  },
  scroll:{
    flex:1
  },
  contentContainerStyle:{
    flexGrow:1,
    marginVertical:MARGIN_BOTTOM
  },
  image:{
    height:375,
    width:"100%",
    resizeMode:"cover"
  }
})