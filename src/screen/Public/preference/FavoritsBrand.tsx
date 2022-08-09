import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Watches from '../../../component/Item/Watches'

function FavoritesBrand(){

  console.log("Brand+++")

  return (
       <FlatList 
                contentContainerStyle={{flexGrow:1,marginTop:24}}
                data={Array(20000).fill(20)}
                renderItem={()=><Watches />}
                keyExtractor={(_,index)=>index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
  )
}

export default React.memo(FavoritesBrand)

const styles = StyleSheet.create({})