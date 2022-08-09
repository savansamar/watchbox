import { FlatList, ListRenderItem, StatusBar, StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import PressImage from '../../../component/Button/PressImage'
import { Images } from '../../../constant/images'
import TouchableText from '../../../component/Button/TouchableText'
import { Fonts } from '../../../constant/fonts'
import { messageData } from '../../../constant/mesage'
import InputBox from '../../../component/textInput/InputBox'
import Offer from './Offer'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'





export interface MessageProps{
    id:string|number,
    message:string,
    image?:any,
}

interface ChatsProps{
    message?:MessageProps,
    current?:boolean
}
const Message=(Props:ChatsProps)=>{

    const  Align:ViewStyle={
        alignSelf:Props.message?.id===1?"flex-end":"flex-end",
    }
    const bg:ViewStyle={
        backgroundColor:Props.message?.id===1?Colors.lightGreen:Colors.fadedBlack,
        borderTopLeftRadius:Props.message?.id==1?10:0,
        borderTopRightRadius:Props.message?.id==1?0:10
    }
const color:TextStyle={
    color:Props.message?.id==1?Colors.darkBlack:Colors.white,
    fontSize:13,
    lineHeight:16,
    fontFamily:Fonts.regular,
}

    return(
        <TouchableOpacity style={[styles.rowS,Align]}>
            {
                Props.message?.id !==1 &&
                <View style={styles.image}>
                    <PressImage image={Images.userImage} style={styles.userImage} />
                </View>
            }
        <View style={[message.container,bg]} >
            <Text style={[color]} >{Props.message?.message}</Text>
        </View>
        </TouchableOpacity>
    )
}



const Chat = () => {

    const [type,setType]=React.useState<string>('WB Chat')
    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()

const _customHeader=()=>{


    return(
        <View style={styles.headerView}> 
            <View style={{marginTop:50,marginBottom:30}} >
                <PressImage image={Images.activeCloseIcon} style={styles.close} onPress={()=>navigation.goBack()} />
            </View>
            <View style={styles.rowS}>
                <TouchableText 
                    name='WB Chat'
                    containerStyle={[styles.containerStyle,{borderColor:type==='WB Chat'?Colors.white:"transparent"}]}  
                    textStyle={[styles.textTitle,{fontFamily:type==='WB Chat'?Fonts.medium:Fonts.regular}]}
                    onPress={()=>setType('WB Chat')}
                />
                <TouchableText 
                    name='Offers'
                    containerStyle={[styles.containerStyle,{borderColor:type==='Offers'?Colors.white:"transparent"}]}  
                    textStyle={[styles.textTitle,{fontFamily:type==='Offers'?Fonts.medium:Fonts.regular}]}
                    onPress={()=>setType('Offers')} 
                />
            </View>
        </View>
    )
}

const _renderItem:ListRenderItem<MessageProps>=React.useCallback(({item,index})=>{
    return(
        <Message message={item} current={item.id == 1} />
    )
},[])
  return (
    <View style={styles.container}>
    <StatusBar barStyle={'light-content'} />
        {_customHeader()}
       {
        type ==='WB Chat' &&
        <>
         <View style={styles.section}>
            <FlatList 
                data={messageData}
                renderItem={_renderItem}
                contentContainerStyle={styles.contentContainerStyle}
            />
        </View>
        <View style={styles.bottom}>
            <TextInput 
                placeholder='Write here'
                placeholderTextColor={Colors.grey}
                style={styles.textInput}
            />
            <View style={{height:48,justifyContent:"center"}}>
                <PressImage image={Images.cameraIcon} style={message.camera} />
            </View>
        </View>
        </>
       }
       {type==='Offers' && <Offer />}
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({

    

    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    headerView:{
        backgroundColor:Colors.fadedBlack,
        width:"100%",
        paddingHorizontal:PADDING_HORIZONTAL
    },
    close:{
        tintColor:Colors.white
    },
    rowS:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    containerStyle:{
        borderBottomWidth:2,
        paddingBottom:15,
        marginRight:30
    },
    textTitle:{
        fontSize:16,
        color:Colors.white,
        lineHeight:20,
        letterSpacing:0.2
        
    },
    section:{
        flex:1,
        backgroundColor:Colors.darkBlack
    },
    bottom:{
        backgroundColor:Colors.darkBlack,
        borderTopWidth:0.5,
        borderTopColor:Colors.fadedDark,
        width:"100%",
        height:100,
        position:"absolute",
        bottom:0,
        zIndex:999,
        paddingHorizontal:PADDING_HORIZONTAL,
        flexDirection:"row",
        alignSelf:"center",
        justifyContent:"center",
        paddingTop:13
        
    },
    contentContainerStyle:{
        paddingHorizontal:PADDING_HORIZONTAL
    },
    image:{
        height:40,width:40,
        marginRight:20,
        borderRadius:40,
        backgroundColor:Colors.lightGreen,
        overflow:"hidden"
    },
    userImage:{
        height:40,
        width:40,
    },
    textInput:{
        backgroundColor:Colors.fadedDark,
        height:48,
        width:"90%",
        borderRadius:40,
        paddingLeft:16,
        marginRight:10
    },
    inputContainerStyle:{
        height:42,
        backgroundColor:Colors.fadedBlack,
        borderBottomColor:'transparent',
        marginTop:40,
        marginBottom:12
    },
    offersView:{
        paddingVertical:14,
        backgroundColor:Colors.white
    },
    offerItem:{
        flexDirection:"row",
        alignItems:"flex-start"
    },
    offerImage:{
        height:102,
        width:102,
        justifyContent:"center"
    },
    brandName:{
        fontSize:12,
        color:Colors.darkGrey,
        fontFamily:Fonts.regular,
        lineHeight:16,
        letterSpacing:0.7
    },
    name:{
        fontSize:12,
        color:Colors.darkBlack,
        fontFamily:Fonts.medium,
        lineHeight:16,
        letterSpacing:0.7,
        marginVertical:2,
    },
    desc:{
        fontSize:10,
        color:Colors.grey,
        fontFamily:Fonts.regular,
        lineHeight:15,
        letterSpacing:0.7
    }
})


const message=StyleSheet.create({
    container:{
        marginVertical:20,
        paddingHorizontal:24,
        paddingVertical:12,
        backgroundColor:Colors.fadedBlack,
        maxWidth:'85%',
        flexDirection:"row",
        alignSelf:"flex-start",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    camera:{
        height:18,
        width:18
    }
})