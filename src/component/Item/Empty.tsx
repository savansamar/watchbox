import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchableText from '../Button/TouchableText'
import PressImage from '../Button/PressImage'
import { Images } from '../../constant/images'
import { PADDING_HORIZONTAL } from '../../constant/style'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'

interface EmptyProp{
    onPress?:()=>void,
    title?:string
}

function Empty(Props:EmptyProp){
    const title=Props.title?Props.title:"Add your dream watch"

    const _addWatch=()=>{
        return(
            <View style={styles.emptyView}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>Add your collection here to keep track of important details about your watches.</Text>
                <TouchableText 
                    name='+ ADD WATCH' 
                    containerStyle={styles.containerStyle} 
                    textStyle={styles.textStyle} 
                    onPress={Props.onPress}
                />
            </View>
        )
    }

    const _bottom=()=>{
        return(
            <View style={styles.bottomView}>
                <View style={styles.row}>
                    <PressImage image={Images.logoSymbol} style={styles.bottomImage} />
                    <Text style={styles.bottomText}>Keep tabs on a watch to buy or trade at a later date</Text>
                </View>
                <View style={styles.row}>
                    <PressImage image={Images.logoSymbol} style={styles.bottomImage} />
                    <Text style={styles.bottomText}>If not in stock, get notified when a watch on your wishlist becomes available</Text>
                </View>
                <View style={styles.row}>
                    <PressImage image={Images.logoSymbol} style={styles.bottomImage} />
                    <Text style={styles.bottomText}>Keep an inspirational collection for your personal WatchBox growth</Text>
                </View>
            </View>
        )
    }

   const _listEmpty=()=>{
    return(
        <>
            {_addWatch()}
            {_bottom()}
        </>
    )
}


  return (
    <View style={styles.container}>
           
            {_listEmpty()}

    </View>
  )
}

export default Empty

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    scroll:{
        flex:1,
    },
    emptyView:{
        paddingHorizontal:PADDING_HORIZONTAL,
        marginTop:70,
        marginBottom:65,
        alignItems:"center"
    },
    title:{
        fontSize:24,
        lineHeight:28,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack,
        letterSpacing:-1,
        marginBottom:20
    },
    description:{
        fontSize:12,
        lineHeight:18.3,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,
        textAlign:"center",
        width:"95%",
        marginBottom:24,
        letterSpacing:0.7
    },
    containerStyle:{
        width:146,
        borderWidth:1,
        borderColor:Colors.darkBlack,
        justifyContent:"center",
        alignItems:"center",
        height:32
    },
    textStyle:{
        fontSize:10,
        lineHeight:16,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,letterSpacing:0.2
    },
    bottomView:{
        width:"100%",
        paddingHorizontal:PADDING_HORIZONTAL,
        alignItems:"center",
        backgroundColor:Colors.lightOrange,
        paddingTop:32,
        alignSelf:"center"
    },
    row:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginBottom:32,
    },
    bottomImage:{
        height:32,
        width:32,
        tintColor:Colors.fadedGrey,
        marginRight:24
    },
    bottomText:{
        fontSize:12,
        letterSpacing:0.4,
        lineHeight:16,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,
        width:"65%"
    },
    contentContainerStyle:{
        paddingTop:20,
        //alignItems:"center",
        paddingHorizontal:16
    },
    columnWrapperStyle:{
        width:"50%",
        marginBottom:5
    }
})