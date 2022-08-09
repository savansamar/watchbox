import { Dimensions, StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import BottomSlider, { BottomSheetRef } from './BottomSlider'
import TouchableText from '../Button/TouchableText'
import { MARGIN_BOTTOM, PADDING_HORIZONTAL } from '../../constant/style'
import { FlatList } from 'react-native-gesture-handler'
import PressImage from '../Button/PressImage'
import { Images } from '../../constant/images'
import Watches from '../Item/Watches'
import { Fonts } from '../../constant/fonts'
import { Colors } from '../../constant/colors'
import Press from '../Button/Press'
import { useNavigation } from '@react-navigation/native'
import { GlobalStackParam } from '../../navigation/stack/globalStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import PopUp from '../Modal/PopUp'


let {height,width}=Dimensions.get('screen')



interface RNModalProp{
    visible:boolean,
    close:()=>void,
}

const BrandList = (Props:RNModalProp) => {
    const ref=React.useRef<BottomSheetRef>(null)
    const [show,setShow]=React.useState<boolean>(true)
    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
    
    const onPress=React.useCallback(()=>{
        const isActive=ref.current?.isActive()
        if(isActive) {
            ref.current?.scrollTo(0)
        }
        else {
            ref.current?.scrollTo(-300)
        }
    },[])

    React.useEffect(()=>{
        setShow(Props.visible)
        onPress()
    },[Props.visible])

    const close=()=>{
        setShow(false)
        setTimeout(()=>{
            Props.close()
        },0)
    }

    if(show){

    return (

        <PopUp show={show} onClose={close} height={height-100} max={height-100} borderRadius={25} >
    
        <View style={styles.top}>
            <TouchableText name='ROLEX'  />
            <TouchableOpacity activeOpacity={0.5} style={styles.row} onPress={close}>
                <PressImage disable={true} image={Images.back} style={styles.image} />
            <TouchableText  disable={true} name='GO BACK'   />
            </TouchableOpacity>
        </View>
        
       <FlatList
            ListHeaderComponent={()=><Text style={styles.title}>Add Favorite Brand Families</Text>}
            numColumns={3}
            data={[1,2,3,4,5,6,7]}
            columnWrapperStyle={{width:'31.3%',marginVertical:7}}
            contentContainerStyle={{flexGrow:1}}
            renderItem={()=><Watches />}
            ListFooterComponent={()=>  
            <View style={styles.bottom}>
                <Press name='NEXT' onPress={()=>navigation.navigate('AddGrail')} />
            </View>}
        />
        </PopUp>
  )
    }
    else return <View />
}

export default BrandList

const styles = StyleSheet.create({
    container:{

    },
    top:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:PADDING_HORIZONTAL,
        marginTop:14,
        marginBottom:8
    },
    row:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        height:12,
        width:12,marginRight:5
    },
    title:{
        fontSize:24,
        lineHeight:28,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack,
        letterSpacing:-0.9,
        paddingHorizontal:24,
        marginVertical:10,
        marginBottom:5
    },
    bottom:{
        paddingVertical:15,
        paddingHorizontal:PADDING_HORIZONTAL,
        width:"100%",
        marginTop:40
    }
})