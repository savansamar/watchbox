import { StyleSheet, Text, View,TouchableOpacity,Image, ViewStyle } from 'react-native'
import React from 'react'
import { PADDING_HORIZONTAL } from '../../constant/style'
import { Fonts } from '../../constant/fonts'
import { Images } from '../../constant/images'
import { Colors } from '../../constant/colors'
import PressImage from '../Button/PressImage'

export interface WatchDetails{
    id?:number|string
    image?:any,
    name?:string,
    brand_name?:string,
    collection?:number,
    version?:string
}

interface WatchDetailsProps{
    item:WatchDetails,
    like?:boolean|'deActive',
    showCollection?:boolean,
    callBack?:()=>void
  }


const Watch = (Props:WatchDetailsProps) => {
  const [like,setLike]=React.useState<boolean|string>(false)

    const SECTION:ViewStyle={
        justifyContent:"flex-end",
        alignItems:"center",
      }

      React.useEffect(()=>{
        let check:boolean=Props.like===undefined||false?false: Props.like==='deActive'?false :true
        setLike(check)
      },[Props.like])


  return (
    <>
    <TouchableOpacity activeOpacity={0.5} style={styles.itemView}onPress={Props.callBack} >
    <Image source={Props?.item?.image} style={styles.image} />

    <View style={SECTION}>
      <Text numberOfLines={1} style={styles.brandName}>{String(Props.item.brand_name).toUpperCase()}</Text>
      <Text numberOfLines={2} style={styles.name}>{Props.item.name}</Text>
      <Text numberOfLines={2} style={styles.description}>RN G A RG 2016</Text>

          {
            Props.showCollection
            &&
            <View style={styles.row}>
              <TouchableOpacity activeOpacity={0.5} style={styles.logoContainer}>
                <Image source={Images.logoSymbol} style={styles.logo} />
              </TouchableOpacity>
              <Text style={styles.collection}>{Props.item.collection} Collections</Text>
            </View>
          }
    </View>

  </TouchableOpacity>
          {
            Props.like&&
            <PressImage image={!like?Images.starDeActiveIcon:Images.starIcon} style={styles.starIcon} onPress={()=>setLike(!like)} />
          }
    </>
  )
}

export default Watch

const styles = StyleSheet.create({
    itemView:{
        //height:346,
        width:'100%',
        alignItems:"center",
        marginBottom:16,
      },
      image:{
        height:139,
        width:153,
        resizeMode:"contain",
        marginVertical:20,
        //marginTop:16,
        // shadowColor:"red",
        // shadowOffset:{width:0,
        // height:0},
        // shadowRadius:0.4,
        // shadowOpacity:20,
        marginBottom:15
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
        lineHeight:16,
        textAlign:"center",
        width:144,
        marginTop:6.3
      },
      description:{
        fontSize:10,
        lineHeight:12.3,
        fontFamily:Fonts.medium,
        color:Colors.grey,
        letterSpacing:0.5,
        textAlign:"center",
        width:90,
        marginTop:5
      },
      logoContainer:{
        height:18,
        width:18,
        backgroundColor:Colors.darkBlack,
        borderRadius:18,
        justifyContent:"center",
        alignItems:"center",
        marginRight:8

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
    starIcon:{
      height:18,
      width:18,
      zIndex:9999,
      position:"absolute",
      right:15,
      top:15
    }
})