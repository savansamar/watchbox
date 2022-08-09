import { StyleSheet, Text, View ,FlatList, TouchableOpacity, ViewStyle, ListRenderItem} from 'react-native'
import React from 'react'
import { BrandCategory, BrandCategoryProp } from '../../constant/static_data'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'
import Press from '../Button/Press'
import { MARGIN_BOTTOM } from '../../constant/style'
var counter=0
interface ItemProp{
    item:BrandCategoryProp,
    onPress:(e:BrandCategoryProp)=>void
}

const Item=(Props:ItemProp)=>{
    
    console.log("_++",counter++)

    const [active,setActive]=React.useState<boolean>(Props.item.selected)

    const CONTAINER:ViewStyle={
        ...styles.container,
        borderWidth:1.5,
        borderColor: active?Colors.darkBlack:'transparent'
    }

    const onPress=()=>{
        setActive(!active)
    }

    return(
        <TouchableOpacity activeOpacity={0.5} style={CONTAINER} onPress={onPress} >
                <Text style={styles.text}>{Props.item?.name} </Text>
        </TouchableOpacity>
    )
}


export interface CategoryProp{
    data:BrandCategoryProp[],
    callBack:(e:BrandCategoryProp[])=>void,

}

function Category(Props:CategoryProp){

    const [data,setData]=React.useState<BrandCategoryProp[]>(Props.data)

    const callBack=(e:BrandCategoryProp)=>{
    
        let old:BrandCategoryProp[]=[...data]
            for(let i=0;i<old?.length;i++){
                if(old[i].name===e.name){
                    old[i]={...old[i],['selected']:!old[i].selected}            
                }
            }
            setData(old)
            Props.callBack(old)

    }


    let _renderItem:ListRenderItem<BrandCategoryProp>=({item,index})=>{
        return(
            <Item key={index} item={item} onPress={callBack} />
        )
    }



  return (
    <View style={{flexGrow:1}}>
     <View style={{flex:1}}>
     <FlatList
            data={data}
            //ListHeaderComponent={()=><View style={{height:100,width:"100%",backgroundColor:"red"}} />}
           // ListHeaderComponentStyle={{backgroundColor:"red"}}
            contentContainerStyle={styles.contentContainerStyle}
            style={styles.style}
            renderItem={_renderItem}
            keyExtractor={(item:BrandCategoryProp,index)=>item.id.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={5}
            columnWrapperStyle={styles.columnWrapperStyle}
            bounces={false}
         />
     </View>
        <View style={{marginBottom:MARGIN_BOTTOM}} >
            <Press 
                name={`NEXT`} 
                onPress={()=>Props.callBack(data)}
            />
        </View>
    </View>
  )
}

export default React.memo(Category)

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        backgroundColor:Colors.lightOrange,
        margin:4,
        borderRadius:0,
        height:40,
        justifyContent:"center",
        alignItems:"center"
        
    },
    text:{
        fontSize:12,
        lineHeight:16,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack
    },
    style:{
    },
    contentContainerStyle:{
        flexGrow:1
    },
    columnWrapperStyle:{
        flexWrap:"wrap",
    }
})