import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PressImage from '../Button/PressImage'
import { Images } from '../../constant/images'
import { Fonts } from '../../constant/fonts'
import { Colors } from '../../constant/colors'
import { PADDING_HORIZONTAL } from '../../constant/style'

const Items=()=>{
    return(
        <View style={styles.items}>
            <PressImage image={Images.watchFive} style={styles.image} />
            <Text style={styles.brandName}>ROLEX</Text>
            <Text style={styles.name}>Chronometre a Resonance</Text>
            <Text style={styles.description}>5001-001</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.addButton}>ADD GRAIL</Text>
            </TouchableOpacity>            
        </View>
    )
}



const GrailsList = React.forwardRef(() => {
    return (
      <FlatList 
          data={[1,2,3,4,5,6,7,8,9]}
          renderItem={()=><Items />}
          ListHeaderComponent={()=><Text style={styles.title}>Popular grails</Text>}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
      />
    )
  })

export default GrailsList

const styles = StyleSheet.create({
    items:{
        paddingBottom:5,
        width:"50%",
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        height:150,
        width:150,
        resizeMode:"contain"
    },
    columnWrapperStyle:{
        marginVertical:5
    },
    contentContainerStyle:{
        paddingHorizontal:24
    },
    brandName:{
        fontSize:12,
        lineHeight:18.3,
        fontFamily:Fonts.medium,
        color:Colors.darkGrey,
        textAlign:"center"
    },
    name:{
        fontSize:14,
        lineHeight:16,
        fontFamily:Fonts.semiBold,
        color:Colors.darkBlack,
        textAlign:"center",
        marginVertical:3,
        letterSpacing:-0.4,
        width:128

    },
    description:{
        fontFamily:Fonts.light,
        fontSize:10,lineHeight:12,
        color:Colors.darkGrey,
        letterSpacing:-0.4,
        width:128,
        textAlign:"center"


    },
    button:{
        height:32,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        width:128,
        marginVertical:5
    },
    addButton:{
        fontSize:10,
        lineHeight:16,
        color:Colors.darkBlack,
        fontFamily:Fonts.medium,
        letterSpacing:-0.4,
        paddingHorizontal:16
    },
    title:{
        fontSize:24,
        lineHeight:28,
        fontFamily:Fonts.regular,
        marginTop:24,
        marginBottom:32,letterSpacing:-0.4
      },
})