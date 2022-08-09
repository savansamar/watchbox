import { StyleSheet, Text, View,FlatList,TouchableOpacity, ListRenderItem, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/colors'
import { TopTabData } from '../../constant/static_data'
import { PADDING_HORIZONTAL } from '../../constant/style'
import { Fonts } from '../../constant/fonts'

export interface TopTabItemProp{
    id:string|number,
    name:string
}

interface TopTabProps{
    data:TopTabItemProp[],
    onPress:(e:string)=>void
}

const TopTab = (Props:TopTabProps) => {
    const [data,setData]=React.useState<TopTabItemProp[]>(Props.data)
    const [selected,setSelected]=React.useState('My WatchBox')

    const _renderItem:ListRenderItem<TopTabItemProp>=({item,index})=>{

        const textColor:TextStyle={color:selected !==item.name?Colors.grey:Colors.white}
        const borderBottomColor:ViewStyle={borderBottomColor:selected===item.name?Colors.white:'transparent'}

        const onPress=(e:string)=>{
            setSelected(e)
            Props.onPress(e)
        }

        return(
            <TouchableOpacity 
                activeOpacity={0.5} 
                key={index} 
                style={[styles.container,borderBottomColor]} 
                onPress={()=>onPress(item.name)}
            >
                <Text style={[styles.text,textColor]}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

  return (
    <View>
    <FlatList
            style={styles.style}
            data={data}
            renderItem={_renderItem}
            horizontal
            contentContainerStyle={styles.contentContainerStyle}
    />
    </View>
  )
}

export default TopTab

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:3,
        height:"100%",
        justifyContent:"center",
        paddingHorizontal:10,
        marginRight:8,
        
    },
    text:{
        fontSize:12,
        letterSpacing:1,
        color:Colors.white,
        fontFamily:Fonts.medium
    },
    style:{
    },
    contentContainerStyle:{
        paddingLeft:PADDING_HORIZONTAL,
        backgroundColor:Colors.darkBlack,
        flexGrow:1,
        height:40,
    }
})