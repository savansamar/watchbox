import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Watch, { WatchDetails } from '../../../component/Item/Watch'
import { PADDING_HORIZONTAL } from '../../../constant/style'

interface MyBrandsProps{
    brand:WatchDetails[],
    callBack:(e:WatchDetails)=>void
}

function MyBrands(Props:MyBrandsProps){

    const _renderItem:ListRenderItem<WatchDetails>=React.useCallback(({item,index})=>{
        return(
            <Watch item={item} like={'deActive'} callBack={()=>Props.callBack(item)} />
        )
    },[])


  return (
    <View>
        <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            data={Props.brand} 
            renderItem={_renderItem}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapperStyle}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default React.memo(MyBrands)

const styles = StyleSheet.create({
    columnWrapperStyle:{
        width:"50%",
    },
    contentContainerStyle:{
        paddingHorizontal:PADDING_HORIZONTAL,
        paddingBottom:200
    }
})