import { StyleSheet, Text, TouchableOpacity, View,Image, FlatList, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'
import { PADDING_HORIZONTAL } from '../../constant/style'
import PressImage from '../Button/PressImage'
import { Images } from '../../constant/images'
import { NewWatches, WatchProps } from '../../constant/intrefaces/watch'
import Progress from '../animated/Progress'

interface ItemProps{
  item:WatchProps,
  
}

const Item=(Props:ItemProps)=>{

  const SECTION:ViewStyle={
    flex:0.8,
    justifyContent:"flex-end",
    alignItems:"center",
  }

  return(
    <TouchableOpacity activeOpacity={0.5} style={styles.itemView}>
      <Image source={Props?.item?.image} style={styles.image} />
      <View style={SECTION}>
      <Text numberOfLines={1} style={styles.brandName}>{String(Props.item.brand_name).toUpperCase()}</Text>
      <Text numberOfLines={2} style={styles.name}>{Props.item.name}</Text>
      <View style={styles.row}>
        <TouchableOpacity activeOpacity={0.5} style={styles.logoContainer}>
          <Image source={Images.logoSymbol} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.collection}>{Props.item.collection} Collections</Text>
      </View>
      </View>
    </TouchableOpacity>
  )
}


interface ArrivedWatchesProp{
  title?:string
} 

const ArrivedWatches = React.memo((Props:ArrivedWatchesProp) => {
  let title:string=Props.title?Props.title:"5 New Arrivals for You"

  const [data,setData]=React.useState<WatchProps[]>(NewWatches)
  const [index,setIndex]=React.useState<number>(1)

  React.useEffect(()=>{
    setData(NewWatches)
  },[])

  const viewabilityConfig = React.useRef({
    waitForInteraction: true,
    minimumViewTime: 5,
    viewAreaCoveragePercentThreshold:100
  })

  const onViewableItemsChanged = React.useCallback(({ viewableItems, changed }) => {
   
    if(changed[0].index){
        setIndex(changed[0].index+2)
    }
    else{
      setIndex(1)
    }    
  },[])
  
  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
          data={data}
          horizontal
          renderItem={({item,index})=><Item key={index} item={item} />}
          keyExtractor={(_,index)=>index.toString()}
          contentContainerStyle={styles.contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig.current}
        
      />
      <View style={{paddingLeft:PADDING_HORIZONTAL,marginTop:36}}>
       <Progress 
            style={styles.progress}
            activeColor={Colors.darkBlack}
            backgroundColor={Colors.lightDark}
            max={data.length?data.length:data.length}
            value={index}
            duration={1200}
       />
       </View>
    </View>
  )
})

export default ArrivedWatches

const styles = StyleSheet.create({
  container:{
    width:"100%",
    marginBottom:32
  },
  title:{
    marginBottom:32,
    fontSize:24,
    lineHeight:28,
    color:Colors.darkBlack,
    fontFamily:Fonts.regular,
    paddingHorizontal:PADDING_HORIZONTAL,letterSpacing:-0.4
  },
  itemView:{
    height:346,
    width:240,
    alignItems:"center",
  },
  image:{
    height:228,
    width:153,
    resizeMode:"cover",
    //marginTop:16,
    // shadowColor:"red",
    // shadowOffset:{width:0,
    // height:0},
    // shadowRadius:0.4,
    // shadowOpacity:20
  },
  brandName:{
    fontSize:12,lineHeight:18.3,
    color:Colors.darkGrey,
    fontFamily:Fonts.regular,
    letterSpacing:-0.4
  },
  name:{
    fontSize:14,
    fontFamily:Fonts.medium,
    color:Colors.darkBlack,
    letterSpacing:-0.4,
    lineHeight:20,
    textAlign:"center",
    width:160
  },
  logoContainer:{
    height:18,
    width:18,
    backgroundColor:Colors.darkBlack,
    borderRadius:18,
    justifyContent:"center",
    alignItems:"center"
  },
  logo:{
    height:18,
    width:18,
    tintColor:Colors.white
  },
  row:{
    flexDirection:"row",
    alignItems:"center",
  },
  collection:{
    fontSize:12,lineHeight:18.3,
    color:Colors.darkGrey,
    fontFamily:Fonts.regular,
    letterSpacing:-0.4,
    left:10
  },
  contentContainerStyle:{
    flexGrow:1,
    paddingLeft:PADDING_HORIZONTAL,
    alignItems:"center"
  },
  progress:{
    height:2,
    width:'100%'
},
})