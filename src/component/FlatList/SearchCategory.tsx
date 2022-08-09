import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { SearchCategoryProps } from '../../constant/searchCategory'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'
import { PADDING_HORIZONTAL } from '../../constant/style'

interface SearchCategory{
    data:SearchCategoryProps[],
    onPress:(e:SearchCategoryProps)=>void
}

function SearchCategory(Props:SearchCategory) {

    const [selected,setSelected]=React.useState<SearchCategoryProps>()
    const onSelect=(e:SearchCategoryProps)=>{
        setSelected(e)
        setTimeout(()=>{
            Props.onPress(e)
        },0)
    }

    const _renderItem:ListRenderItem<SearchCategoryProps>=React.useCallback(({item,index})=>{
        const borderStyle:ViewStyle={
            borderColor:selected?.title===item.title?Colors.darkBlack:"transparent"
        }
        
        return(
            <TouchableOpacity activeOpacity={0.5} style={[styles.button,borderStyle]} onPress={()=>onSelect(item)} >
                <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
        )
    },[selected])
  return (
    <View style={{marginVertical:8}}>
        <FlatList 
            data={Props.data}
            renderItem={_renderItem}
            contentContainerStyle={styles.contentContainerStyle}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}
export default React.memo(SearchCategory)

const styles = StyleSheet.create({
    contentContainerStyle:{
        flexGrow:1,
        paddingHorizontal:PADDING_HORIZONTAL
    },
    button:{
        height:40,
        paddingHorizontal:16,
        justifyContent:"center",
        marginRight:8,
        borderWidth:1.5,
        borderColor:Colors.darkBlack
    },
    text:{
        fontSize:12,
        lineHeight:16,
        color:Colors.darkBlack,
        fontFamily:Fonts.medium,letterSpacing:0.5,
    }
})