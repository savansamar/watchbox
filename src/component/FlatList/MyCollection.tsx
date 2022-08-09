import { FlatList, StyleSheet, Text, View ,TouchableOpacity, Dimensions, NativeScrollEvent, NativeSyntheticEvent, ViewToken} from 'react-native'
import React from 'react'
import MyWatches from '../Item/MyWatches'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'
import PressImage from '../Button/PressImage'
import { Images } from '../../constant/images'
import Progress from '../animated/Progress'
import { PADDING_HORIZONTAL } from '../../constant/style'

const {width}=Dimensions.get('screen')

interface TitleProps{
    title?:string,
    showImage?:boolean
}
export const Title=(Props:TitleProps)=>{
    let text=Props.title?Props.title:'MY WB COLLECTION'
    return(
        <View style={styles.row}>
            {
                Props.showImage &&
                <TouchableOpacity activeOpacity={0.5} style={styles.grailContainerImage}>
                <PressImage disable={true} image={Images.grail} style={styles.grailImage} />
            </TouchableOpacity>
            }
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}





const MyCollection = React.memo(() => {

const [index,setIndex]=React.useState<number>(0)
const [data,setData]=React.useState<any[]>([])


React.useEffect(()=>{
    let obj
    let value=[]
    for(let i =0;i<20;i++){
        obj={id:i}
        value.push(obj)
    }
    setData([1,2,3,4,5,6,7,8])
    setIndex(1)
    

},[])

    const onScroll=(e:NativeSyntheticEvent<NativeScrollEvent>)=>{}


   const viewabilityConfig = React.useRef({
    waitForInteraction: true,
    minimumViewTime: 5,
    viewAreaCoveragePercentThreshold:100
  })
  
  const onViewableItemsChanged = React.useCallback(({ viewableItems, changed }) => {
   
    console.log("Changed",changed[0].index)
    if(changed[0].index){
        setIndex(changed[0].index)
    }    
  },[])
  


    return (
      <View>
        <View style={{paddingHorizontal:PADDING_HORIZONTAL}}>
            <Title />
        </View>
       <FlatList 
            data={data}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig.current}
            renderItem={({item,index})=><MyWatches />}
            onScroll={onScroll}
            scrollEventThrottle={16}
            horizontal
            contentContainerStyle={{paddingHorizontal:24}}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            bounces={false}
            keyExtractor={(_,index)=>index.toString()}
       />
       <View style={{paddingLeft:PADDING_HORIZONTAL}}>
       <Progress 
            style={styles.progress}
            activeColor={Colors.grey}
            backgroundColor={Colors.darkGrey}
            max={data.length?data.length-1:data.length}
            value={index}
            duration={1200}
       />
       </View>
      </View>
    )
  })

export default MyCollection

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:56
    },
    grailContainerImage:{
        height:24,
        width:24,
        borderRadius:20,
        borderWidth:1,
        borderColor:Colors.white,
        justifyContent:"center",
        alignItems:"center",
        marginRight:10
    } ,  
    grailImage:{
        height:10,
        width:10,
        tintColor:Colors.white
    },
    title:{
        fontSize:14,
        lineHeight:18.3,
        letterSpacing:-0.18,
        fontFamily:Fonts.medium,
        color:Colors.white,
       
    },
    progress:{
        height:1.2,
        width:width
    },
    height:{
        height:56,
        width:200,
        backgroundColor:"red",
        marginRight:10
    }
})