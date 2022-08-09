import { StyleSheet, Text, TouchableOpacity, View,Image, FlatList, ViewStyle, Dimensions, ListRenderItem } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'
import { PADDING_HORIZONTAL } from '../../constant/style'
import PressImage from '../Button/PressImage'
import { Images } from '../../constant/images'
import { NewWatches, WatchProps } from '../../constant/intrefaces/watch'
import Progress from '../animated/Progress'

const {width}=Dimensions.get('screen')

interface ItemProps{
  item:WatchProps,
  index:number|string
  
}

const Item=(Props:ItemProps)=>{

  const SECTION:ViewStyle={
    flex:0.8,
    flexGrow:1,
    justifyContent:"center",
  }

  return(
    <TouchableOpacity activeOpacity={0.5} style={styles.itemView}>
        <PressImage disable={true} image={Images.userImage} style={styles.userImage} />
      <Image source={Props?.item?.image} style={styles.image} />
      <View style={SECTION}>
      <Text numberOfLines={1} style={styles.brandName}>{String(Props.item.brand_name).toUpperCase()}</Text>
      <Text style={styles.name}>{Props.item.name}</Text>
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


const StaffList = React.memo(() => {

  const [data,setData]=React.useState<WatchProps[]>([])
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
   
    console.log("Changed",changed[0].index)
    if(changed[0].index){
        setIndex(changed[0].index+1)
    }
    else{
        setIndex(1)
    }    
  },[])
  

  let _renderItem:ListRenderItem<WatchProps>=({item,index})=>{
if(index %3==0){
    return(
        <View style={styles.renderItem}>
            <Item key={index} index={index} item={data[index]} />
            {
                index+2 <=data.length-1
                &&
                <>
                  <Item key={index+1} index={index+1} item={data[index+1]} />
                  <Item key={index+2} index={index+2} item={data[index+2]} />
                </>
            }
            
        </View>
    )
}
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Staff Picks - Patek Philippe</Text>
      <FlatList 
          data={data}
          renderItem={_renderItem}
          keyExtractor={(_,index)=>index.toString()}
          contentContainerStyle={styles.contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          horizontal
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig.current}
        
      />
     
      <View style={{paddingLeft:PADDING_HORIZONTAL,marginTop:36}}>
       <Progress 
            style={styles.progress}
            activeColor={Colors.darkBlack}
            backgroundColor={Colors.lightDark}
            max={data.length?data.length-1:data.length}
            value={index}
            duration={1200}
       />
       </View>
    </View>
  )
})

export default StaffList

const styles = StyleSheet.create({
  container:{
    width:"100%",
  },

  renderItem:{
  },
  userImage:{
    height:32,
    width:32,
    resizeMode:"contain",
    top:5
  },

  title:{
    marginBottom:32,
    fontSize:24,
    lineHeight:28,
    color:Colors.darkBlack,
    fontFamily:Fonts.regular,
    paddingHorizontal:PADDING_HORIZONTAL,letterSpacing:-0.4,
  },
  itemView:{
    width:width/1.1,
    flexDirection:"row",
    alignItems:"flex-start",
    marginBottom:32
  },
  columnWrapperStyle:{
    width:width/1.1,
    flexDirection:"row",
  },
  index:{
    fontSize:47,color:Colors.yellow,
    fontFamily:Fonts.regular,
    textAlign:"center",
    minWidth:32,
    
  },

  image:{
    height:96,
    width:96,
    resizeMode:"contain",
    marginHorizontal:8
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
    textAlign:"left",
    marginVertical:4
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
    marginTop:16
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
    alignItems:"center",
  },
  progress:{
    height:2,
    width:'100%'
},
})