import { ScrollView, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { Images } from '../../../constant/images'
import { Fonts } from '../../../constant/fonts'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import Preferences from './Preferences'
import OrderTrack from '../../../component/animated/OrderTrack'
import PaymentInfo from './PaymentInfo'
import Settings from './Settings'
import Help from './Help'
import { PopUpProp } from '../../../component/Modal/PopUp'
import AccountDelete from './AccountDelete'

interface TabProps{
    onCallBack:(e:string)=>void
}

const Tab=React.memo((Props:TabProps)=>{

    const [index,setIndex]=React.useState<number>(1)
    
    const setColor=(e:number):TextStyle=>{
        return {
            fontFamily:e===index?Fonts.medium:Fonts.regular,
            color:e===index?Colors.white:Colors.fadedWhite
        }
    }
    const setBorder=(e:number):ViewStyle=>{
        return {
            borderBottomColor:e===index?Colors.white:'transparent'
        }
    }

    
    const onPress=React.useCallback((e:number,s:string)=>{
        setIndex(e)
        setTimeout(()=>{
            Props.onCallBack(s)
        },0)
    },[])

    return(
        <View style={styles.tabView}>
            <TouchableOpacity activeOpacity={0.6} style={[styles.tab,setBorder(1)]}  onPress={()=>onPress(1,"Preferences")} >
                <Text style={[styles.tabText,setColor(1)]}>Preferences</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={[styles.tab,setBorder(2)]} onPress={()=>onPress(2,"Payment Info")} >
                <Text style={[styles.tabText,setColor(2)]}>Payment Info</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={[styles.tab,setBorder(3)]} onPress={()=>onPress(3,"Settings")} >
                <Text style={[styles.tabText,setColor(3)]}>Settings</Text>
            </TouchableOpacity>
            
        </View>
    )
})


function Profile(){

    const [status,setStatus]=React.useState<string>('Preferences')
    const [help,setHelp]=React.useState(false)
    const [showAccountDelete,setShowAccountDelete]=React.useState<boolean>(false)
  
  const accountDeletePropRef:PopUpProp={
    show:showAccountDelete,
    onClose:()=>setShowAccountDelete(false)
  }

    const headerPropRef:HeaderProps={
        leftIcon:Images.back,
        leftImageStyle:{tintColor:Colors.white},
        title:"Profile",
        rightIcon:Images.helpIcon,
        onPressRight:()=>setHelp(true)
    }

    const _callBack=React.useCallback((e:string)=>{
        setStatus(e)
    },[])

   

    const helpProp:PopUpProp={
        onClose:()=>setHelp(false),
        show:help
    }

  return (
    <View style={styles.container}>
      <AccountDelete {...accountDeletePropRef} />
        <Header {...headerPropRef} />
        <Help {...helpProp} />
        <Tab onCallBack={_callBack} />
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow:1}}
        >
         {status==='Preferences' && <Preferences  />}
         {status === 'Payment Info'&& <PaymentInfo /> }
         {status === 'Settings' && <Settings onDelete={()=>setShowAccountDelete(true)} /> }
        </ScrollView>
        
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    tabView:{
        backgroundColor:Colors.darkBlack,
        paddingHorizontal:PADDING_HORIZONTAL,
        flexDirection:"row",
        alignItems:"center",
        paddingTop:12
    },
    tab:{
        borderBottomColor:Colors.white,
        borderBottomWidth:2,
        paddingBottom:8,
        bottom:0.1,
        paddingHorizontal:9,
        marginRight:10
    },
    tabText:{
        fontSize:13,
        lineHeight:16,
        fontFamily:Fonts.medium,
        color:Colors.white
    },
    
})