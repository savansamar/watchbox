import { ScrollView, ScrollViewProps, StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { Images } from '../../../constant/images'
import { Fonts } from '../../../constant/fonts'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
import PressImage from '../../../component/Button/PressImage'
import InputBox from '../../../component/textInput/InputBox'
import Press from '../../../component/Button/Press'

export interface PickItemProps{
    title:string,
    name:string,
    onPress:()=>void,
    onChange?:(e:string)=>void,
    editable?:boolean
}

export const  PickItem=(Props:PickItemProps)=>{
    return(
        <View style={styles.fieldView}>
                <Text style={styles.fieldTitle} >{Props.title}</Text>
                <View style={styles.row}>
                    <TextInput 
                        style={styles.textInput} 
                        value={Props.name} 
                        onChangeText={Props.onChange} 
                        editable={Props.editable}
                    />
                    {
                        !Props.editable &&
                        <PressImage image={Images.dropRight} onPress={Props.onPress} />
                    }
                </View>
        </View>
    )
} 




const CreateWatch = () => {

    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
    const [value,setValue]=React.useState<string>('')

    const headerPropRef:HeaderProps={
        leftIcon:Images.back,
        background:"light",
        title:"Add Watch",
        onPressLeft(){navigation.goBack()}
    }

    const scrollPropRef:ScrollViewProps={
        contentContainerStyle:styles.contentContainerStyle,
        bounces:false,
        showsVerticalScrollIndicator:false
    }

    const _top=()=>{
        return(
            <View style={styles.topView}>
                <Text style={styles.title}>Create your watch</Text>
                <Text style={styles.desc} >Enter the information below and our expert team will add the watch to the catalog.</Text>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <Header {...headerPropRef} />
        <ScrollView {...scrollPropRef} >
            {_top()}
            <PickItem title='Brand' name='Select Brand' onPress={()=>{}} />
            <PickItem title='Family' name='Select Family' onPress={()=>{}} />
            <PickItem 
                editable={true} 
                title='Reference Number' 
                name='Enter reference number' 
                onChange={(e)=>setValue(e)} 
                onPress={()=>{}} 
            />
            <PickItem 
                editable={true} 
                title='Model Name' 
                name='Enter model name' 
                onChange={(e)=>setValue(e)} 
                onPress={()=>{}} 
            />
        </ScrollView>
            <View style={styles.bottom}>
            <Press name='CONTINUE' onPress={()=>navigation.navigate('AddWatch')} />
            </View>
    </View>
  )
}

export default CreateWatch

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    topView:{
        marginTop:10,
        marginBottom:24
    },
    title:{
        fontSize:28,
        lineHeight:40,
        fontFamily:Fonts.regular,
        letterSpacing:-0.7,
        marginBottom:22
    },
    desc:{
        fontSize:12,
        color:Colors.darkGrey,
        fontFamily:Fonts.regular,
        letterSpacing:-0.6
    },
    contentContainerStyle:{
        paddingHorizontal:PADDING_HORIZONTAL
    },
    fieldView:{
        marginBottom:24
    },
    fieldSection:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:56,
        width:"100%",
        borderBottomWidth:1,
        paddingRight:12,
        borderBottomColor:Colors.grey,
        backgroundColor:"red"
    },
    fieldTitle:{
        fontSize:10,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack
    },
    fieldDesc:{
        fontSize:14,
        lineHeight:20,
        fontFamily:Fonts.regular,
        color:Colors.grey
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        borderBottomWidth:1,
        paddingRight:12,
        borderBottomColor:Colors.grey,
    },
    textInput:{
        flex:1,
        height:56,
        textAlign:"left",
        textAlignVertical:"center",
        fontSize:14,
        lineHeight:20,
        fontFamily:Fonts.regular,
        color:Colors.grey
    },
    bottom:{
        position:"absolute",
        bottom:24,
        width:"84%",
        //width:327,
        alignSelf:"center"
    }
})