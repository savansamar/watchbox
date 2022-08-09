import { ScrollViewProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
import { Images } from '../../../constant/images'
import PressImage from '../../../component/Button/PressImage'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { Fonts } from '../../../constant/fonts'
import OrderTrack from '../../../component/animated/OrderTrack'
import InputBox from '../../../component/textInput/InputBox'
import { ScrollView } from 'react-native-gesture-handler'
import Shipping from './Shipping'
import Press from '../../../component/Button/Press'
import Payment from './Payment'
import AddNewCard from './AddNewCard'
import Summary from './Summary'
import ProcessPayment from './ProcessPayment'

const SHIPPING="Enter your shipping address"
const PAYMENT="Choose payment method"


const Status = () => {
    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
    const [orderStatus,setOrderStatus]=React.useState<string>('Shipping')
    const [index,setIndex]=React.useState<number>(1)
    const [show,setShow]=React.useState<boolean>(false)

    useFocusEffect(React.useCallback(()=>{
        setIndex(1)
        setOrderStatus('Shipping')
    },[]))

    React.useMemo(()=>{
        if(index===1) setOrderStatus('Shipping')
        else if(index===2) setOrderStatus('Payment')
        else if(index===3)setOrderStatus('Summary')
        else setOrderStatus('Process')
    },[index])

    const _customHeader=()=>{
        return(
            <View style={header.container}>
                <View style={header.row}>
                    <PressImage image={Images.back} onPress={()=>navigation.goBack()} />
                    <Text style={header.title}>{orderStatus}</Text>
                </View>
            </View>
        )
    }

    const _bottom=()=>{
        return(
            <View style={[styles.bottom,index==4&& styles.border]}>
            {
                index===4?
                <Press 
                    containerStyle={styles.press}
                    textStyle={{color:Colors.darkBlack}}
                    name='DONE'
                />
                :
                <>
                    <View style={styles.row}>
                <Text style={[header.title,{textAlign:"left",left:1}]}>Total</Text>
                <Text style={[styles.price]}>$32,45,900</Text>
            </View>
            <Text style={styles.desc} >Including free shipping</Text>
            <Press 
                name={ index===3?'CHECKOUT':`GO TO ${index===1?'PAY':'SUMMARY'}`}  
                containerStyle={styles.containerStyle} 
                onPress={()=>setIndex(index+1)}
            />
                </>
            }
        </View>
        )
    }


    const scrollRef:ScrollViewProps={
        contentContainerStyle:{paddingHorizontal:PADDING_HORIZONTAL,flexGrow:1},
        showsVerticalScrollIndicator:false,
        bounces:false
    }

  return (
    <View style={styles.container}>
        {_customHeader()}
        <OrderTrack index={index} />
        <AddNewCard show={show}  onClose={()=>setShow(false)} />
        <ScrollView {...scrollRef} >
            {index<3&&<Text style={styles.title}>{index==1?SHIPPING:PAYMENT}</Text>}
            {orderStatus==='Shipping' && <Shipping />}
            {orderStatus==='Payment' && <Payment onAdd={()=>setShow(true)} />}
            {orderStatus ==='Summary' && <Summary onEdit={(e)=>setIndex(e)} />}
            {orderStatus==='Process' && <ProcessPayment />}
            <View style={{height:50}} />
        </ScrollView>
        {_bottom()}
           
    </View>
  )
}

export default Status

const styles = StyleSheet.create({

    press:{backgroundColor:Colors.white,borderWidth:1,borderColor:Colors.darkBlack,marginBottom:16},
    border:{
        borderWidth:0.3,
        borderColor:Colors.fadedGrey
    },
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    section:{
        flex:1,
        paddingHorizontal:PADDING_HORIZONTAL
    },
    title:{
        fontSize:14,
        lineHeight:16,
        fontFamily:Fonts.semiBold,
        marginTop:38,
        marginBottom:25,
        color:Colors.darkBlack
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        justifyContent:"space-between",
      //  justifyContent:"center"
    },
    bottom:{
        paddingHorizontal:PADDING_HORIZONTAL,
        paddingVertical:19
    },
    price:{
        fontSize:14,
        lineHeight:16,
        fontFamily:Fonts.regular,
        color:Colors.darkGrey
    },
    desc:{
        fontSize:10,
        marginTop:4,
        fontFamily:Fonts.regular,
        color:Colors.fadedGrey
    },
    containerStyle:{
        marginTop:16,
        marginBottom:15
    }
})

const header=StyleSheet.create({
    container:{
        width:"100%",paddingHorizontal:PADDING_HORIZONTAL,
        justifyContent:"flex-end",
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:72,
        marginBottom:16
    },
    rowS:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    rowC:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        flex:1,
        textAlign:"center",
        fontSize:14,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,
        right:8
    }
})