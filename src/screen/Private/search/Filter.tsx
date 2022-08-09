import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import PopUp, { PopUpProp } from '../../../component/Modal/PopUp'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Colors } from '../../../constant/colors'
import { Fonts } from '../../../constant/fonts'
import PressImage from '../../../component/Button/PressImage'
import { Images } from '../../../constant/images'
import { filterData } from '../../../constant/static_data'
import Press from '../../../component/Button/Press'
import { filterBrand, FilterItemsProps, filterModel } from '../../../constant/filter'

interface SelectProps{
    item:FilterItemsProps
}

const Select=(Props:SelectProps)=>{
    const [check,setCheck]=React.useState<boolean>(false)

    return(
<View style={[styles.row,{justifyContent:"flex-start"}]}>
                <TouchableOpacity activeOpacity={0.5} style={styles.mark} onPress={()=>setCheck(!check)} >
                    {
                        check && <Image source={Images.checkIcon} style={styles.check} />
                    }
                </TouchableOpacity>
                <Text style={[styles.itemText,{fontSize:13,marginLeft:10,color:Colors.darkGrey}]}>{Props.item.name}</Text>
            </View>
    )
}


export interface FilterItemProp{
    id:number|string,
    name:string,
}

interface ItemProps{
    item:FilterItemsProps[],
    name?:string
}
const Item=(Props:ItemProps)=>{

    const [active,setActive]=React.useState<boolean>(false)


    const item:ViewStyle={
        paddingVertical:0,
    }
    return(
        <View style={[item]}>
        <View style={[styles.row,{marginBottom:26}]}>
            <Text style={styles.itemText}>{Props.name}</Text>
            <PressImage 
                image={!active?Images.addIcon:Images.minusIcon} 
                style={[styles.close,{tintColor:Colors.darkBlack}]} 
                onPress={()=>setActive(!active)}
                />
        </View>
       {
        active&& 
        Props.item.map((ele)=>{
            return(
                <Select item={ele} />
            )
        })
       }
        </View>
    )
}


export interface FilterProps extends PopUpProp{

}

const Filter = (Props:FilterProps) => {
 
    
    const PopUpPropRef:FilterProps={
        show:Props.show,
        onClose:Props.onClose,
        borderRadius:25,
    }

  return (
    <PopUp {...PopUpPropRef} >
        <View style={styles.container}>
            <View style={{paddingHorizontal:PADDING_HORIZONTAL}}>
                <View style={styles.row}>
                    <Text style={styles.title} >Filter</Text>
                    <PressImage image={Images.activeCloseIcon} style={styles.close} onPress={Props.onClose} />
                </View>
                <Item name='BRAND' item={filterBrand} />
                <Item name='MODEL' item={filterModel} />
                <Item name='CASE SIZE' item={filterModel} />
                <Item name='SENDER' item={filterModel} />


                
                </View>
        </View>
            <View style={styles.bottom}>
                <Press name='SHOW RESULT' />
                <Press backgroundColor='white' color={Colors.darkBlack} name='CLEAR ALL' />
            </View>
    </PopUp>
  )
}

export default Filter

const styles = StyleSheet.create({
    container:{
        paddingVertical:PADDING_HORIZONTAL+4,
        flex:1
    },
    title:{
        fontSize:24,
        lineHeight:28,
        color:Colors.darkBlack,
        fontFamily:Fonts.regular,
        letterSpacing:-0.7
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:32
    },
    close:{
        height:20,
        width:20,
        resizeMode:"contain"
    },
    bottom:{
        justifyContent:"flex-end",
        alignSelf:"center",
        borderTopWidth:0.4,
        borderTopColor:Colors.grey,
        paddingVertical:20,
        width:"100%",
        paddingHorizontal:PADDING_HORIZONTAL,
        backgroundColor:Colors.white
    },
    itemText:{
        fontSize:14,
        color:Colors.darkBlack,
        fontFamily:Fonts.medium
    },
    mark:{
        height:24,
        width:24,
        borderWidth:1,
        borderColor:Colors.darkBlack,
        justifyContent:"center",
        alignItems:"center"
    },
    check:{
        height:16,
        width:16
    }
})







