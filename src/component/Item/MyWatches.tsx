import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/colors'
import PressImage from '../Button/PressImage'
import { Images } from '../../constant/images'
import { Fonts } from '../../constant/fonts'

const MyWatches = () => {
  return (
    <View style={{marginVertical:40}} >
        <View style={styles.section}>
            <View style={styles.imageContainer}>
                <PressImage image={Images.watchSix} style={styles.image} />
            </View>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>AUDEMARS PIGUET</Text>
                    <Text style={styles.name}>Royal Oak  26315ST </Text>
                    <Text style={styles.name}>2019 </Text>
                </View>
        </View>
    </View>
  )
}

export default MyWatches

const styles = StyleSheet.create({
    section:{
        flexDirection:"row",
        width:271,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    imageContainer:{
        height:96,
        width:96,
        backgroundColor:Colors.white,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        height:96,
        width:96,
        resizeMode:"contain"
    },
    title:{
        fontSize:14,
        lineHeight:18.3,
        letterSpacing:-0.18,
        fontFamily:Fonts.medium,
        color:Colors.white,
       
    },
    row:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
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
    info:{
       
        alignSelf:"stretch",
        alignItems:"flex-start",
        marginHorizontal:20,
        flex:1,paddingVertical:5
    },
    infoTitle:{
        fontSize:12,
        fontFamily:Fonts.regular,
        color:Colors.grey,
        lineHeight:18.3,
        letterSpacing:-0.18
    },
    name:{
        fontSize:14,
        fontFamily:Fonts.medium,
        color:Colors.grey,
        lineHeight:18.3,
        letterSpacing:-0.18 
    }
})