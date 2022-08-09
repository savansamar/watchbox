import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import InputBox from '../../../component/textInput/InputBox'
import { Images } from '../../../constant/images'
import { SearchCategoryItems, SearchCategoryProps } from '../../../constant/searchCategory'
import SearchCategory from '../../../component/FlatList/SearchCategory'
import MyBrands from './MyBrands'
import { WatchDetails } from '../../../component/Item/Watch'
import { MyWatchBoxItemList } from '../../../constant/intrefaces/watch'
import Filter, { FilterProps } from './Filter'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
import { Fonts } from '../../../constant/fonts'


const Search = () => {

  const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
  const [category,setCategory]=React.useState<SearchCategoryProps[]>(SearchCategoryItems)
  const [selectedCategory,setSelectedCategory]=React.useState<SearchCategoryProps>()
  const [myBrands,setMyBrands]=React.useState<WatchDetails[]>(MyWatchBoxItemList)
  const [showFilter,setShowFilter]=React.useState<boolean>(false)

const callBack=React.useCallback(()=>setShowFilter(true),[])

const onChangeText=React.useCallback((e:string)=>{

},[])

const onPressWatch=React.useCallback((e:WatchDetails):void=>{
  navigation.navigate('SingleWatch',{item:e})
},[])

  const _customHeader=()=>{

    return(
      <View style={header.container}>
        <StatusBar barStyle={'dark-content'} />
        <View  style={{height:56}} />
        <InputBox 
          inputStyle={header.inputStyle}
          inputContainerStyle={header.inputContainerStyle}
          leftImage={Images.searchIcon}
          onChangeText={onChangeText}
          leftTitle="FILTER"
          onPressLeftTitle={callBack}
          placeholder='Search'
        />
      </View>
    )
  }

  const filterPropRef:FilterProps={
    show:showFilter,
    onClose:()=>setShowFilter(false)
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      {_customHeader()}
      <Filter {...filterPropRef} />
      <SearchCategory data={category} onPress={(e)=>setSelectedCategory(e)} />
      {selectedCategory?.title =='My Brands' && <MyBrands brand={myBrands} callBack={onPressWatch} />}

      {!selectedCategory&&
        <View style={styles.info}>
            <Text style={header.title}>No results</Text>
            <Text style={header.desc} >Try another filter.Need help finiding something? Contact us.</Text>
        </View>}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white,
  },
  info:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
})

const header=StyleSheet.create({
  container:{
    height:112,
    width:'100%',
    paddingHorizontal:PADDING_HORIZONTAL,
    backgroundColor:Colors.white
  },
  inputStyle:{
    backgroundColor:Colors.lightOrange,
  },
  inputContainerStyle:{
    borderBottomColor:"transparent",
    backgroundColor:Colors.lightOrange,
  },
  title:{
    fontSize:24,
    fontFamily:Fonts.regular,
    color:Colors.darkBlack,
    letterSpacing:-0.7,
    marginVertical:10
  },
  desc:{
    fontSize:12,
    fontFamily:Fonts.regular,
    color:Colors.darkBlack,
    letterSpacing:-0.7,
    width:'70%',
    textAlign:"center"
  },
})