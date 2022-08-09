import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PopUp, { PopUpProp } from '../../../component/Modal/PopUp'
import { Colors } from '../../../constant/colors'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import { Images } from '../../../constant/images'
import PressImage from '../../../component/Button/PressImage'
import Press from '../../../component/Button/Press'
import { SpecsProps, staticCaseDial, staticSpecsFunction, staticSpecsStrap, staticWatchDetails } from '../../../constant/spcs'


const Item=(Props:SpecsProps)=>{
    return(
        <View style={styles.row}>
            <Text style={styles.name}>{Props.name}</Text>
            <Text style={styles.value}>{Props.value}</Text>
        </View>
    )
}



const Specs = (Props:PopUpProp) => {


  return (
   <PopUp 
        {...Props} 
        height={Dimensions.get('screen').height-100}
        borderRadius={25}
    >
        <View style={styles.container}>
            <View style={[styles.row]}>
                <Text style={styles.title}>Specs</Text>
                <PressImage image={Images.activeCloseIcon} style={styles.close} onPress={Props.onClose} />
            </View>
           <View style={[styles.row,{marginVertical:35}]}>
                <Text style={styles.header}>WATCH DETAILS</Text>
           </View>
           {
            staticWatchDetails.map((ele)=><Item name={ele.name} value={ele.value} />)
           }
           <View style={[styles.row,{marginVertical:35}]}>
                <Text style={styles.header}>CASE DIAL</Text>
           </View>

           {
            staticCaseDial.map((ele)=><Item name={ele.name} value={ele.value} />)
           }
           <View style={[styles.row,{marginVertical:35}]}>
                <Text style={styles.header}>FUNCTION</Text>
           </View>
           {
            staticSpecsFunction.map((ele)=><Item name={ele.name} value={ele.value} />)
           }

            <View style={[styles.row,{marginVertical:35}]}>
                <Text style={styles.header}>STRAP/BRACELET</Text>
           </View>
           {
            staticSpecsStrap.map((ele)=><Item name={ele.name} value={ele.value} />)
           }
        </View>
        <View style={{height:40}} />

   </PopUp>
  )
}

export default Specs

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:PADDING_HORIZONTAL,
        paddingVertical:PADDING_HORIZONTAL+4
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    title:{
        fontSize:24,
        lineHeight:28,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack
    },
    header:{
        fontSize:12,
        lineHeight:16,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack
    },
    close:{
        height:20,
        width:20,tintColor:Colors.darkBlack
    },
    name:{
        fontSize:10,
        marginBottom:16,
        color:Colors.grey,
        fontFamily:Fonts.regular,
        letterSpacing:0.8
    },
    value:{
        fontSize:10,
        marginBottom:16,
        color:Colors.darkBlack,
        fontFamily:Fonts.regular,
        letterSpacing:0.4
    }
})