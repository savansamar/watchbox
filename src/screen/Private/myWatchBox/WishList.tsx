import { FlatList, ListRenderItem,  StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import Watch from '../../../component/Item/Watch'
import Empty from '../../../component/Item/Empty'
import { NewWatches } from '../../../constant/intrefaces/watch'
import WishListNotification from '../../../component/animated/WishListNotification'
import wishListNotification from '../../../component/animated/WishListNotification'

function WishList(){


    const [data,setData]=React.useState(NewWatches)

    

const _renderItem:ListRenderItem<any>=React.useCallback(({item,index})=>{
    return(
        <Watch key={index} item={item} like={true} />
    )
},[])


React.useEffect(()=>{
},[])

  return (
    <View style={styles.container}>
        <WishListNotification />
            <FlatList 
                windowSize={1}
                maxToRenderPerBatch={1}
                initialNumToRender={1}
                contentContainerStyle={styles.contentContainerStyle}
                data={data}
                renderItem={_renderItem}
                ListEmptyComponent={()=><Empty />}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapperStyle}
                showsVerticalScrollIndicator={false}
                keyExtractor={(_,index)=>index.toString()}
            />

    </View>
  )
}

export default WishList

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