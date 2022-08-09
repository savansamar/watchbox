import { ImageStyle, StyleProp, StyleSheet, Text, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { BUTTON_HEIGHT } from '../../constant/style'
import { Colors } from '../../constant/colors'
import { Fonts } from '../../constant/fonts'
import PressImage from '../Button/PressImage'
import { Images } from '../../constant/images'

export interface InputBoxProp extends TextInputProps {
    placeholder?:string,
    value?:string,
    placeholderTextColor?:string,
    onChangeText:(e:string)=>void,
    secureImage?:string,
    error?:string,
    containerStyle?:StyleProp<ViewStyle>,
    inputContainerStyle?:StyleProp<ViewStyle>,
    inputStyle?:StyleProp<TextStyle>,
    leftImageStyle?:StyleProp<ImageStyle>,
    rightImageStyle?:StyleProp<ImageStyle>,
    leftImage?:string,
    rightImage?:string,
    onPressLeftImage?:()=>void,
    onPressRightImage?:()=>void,
    title?:string,
    leftTitle?:string,
    onPressLeftTitle?:()=>void,
    bottomSpace?:number,
    titleStyle?:StyleProp<TextStyle>
    
}

function InputBox(Prop:InputBoxProp){

    const isError:boolean=!!(Prop?.error)?true:false
    const [secureText,setSecureText]=React.useState<boolean>(!!Prop?.secureImage)
    const [error,setError]=React.useState<boolean>(isError)
    let spaceBottom:ViewStyle={marginBottom:Number(Prop?.bottomSpace)>0?Prop.bottomSpace:8}

    const CONTAINER:ViewStyle={
        ...styles.container,
        marginBottom:error?0:8,

    }
    
    React.useEffect(()=>{
        setError(isError)
    },[Prop.error])

    return(
        <View style={[CONTAINER,spaceBottom,Prop.containerStyle]}>
            {Prop.title &&
            <Text style={[styles.title,Prop.titleStyle]}>{Prop.title}</Text>
            }
            <View style={[styles.inputContainer,Prop.inputContainerStyle]}>

                {Prop?.leftImage && 
                    <PressImage 
                        image={Prop.leftImage} 
                        style={[styles.image,Prop.leftImageStyle]} 
                        onPress={Prop.onPressLeftImage} 
                    /> 
                }
                <TextInput 
                    style={[styles.textInputContainer,{marginRight:secureText?10:0},Prop.inputStyle]}
                    placeholderTextColor={Colors.grey}
                    {...Prop}
                   onChangeText={(e)=>Prop.onChangeText(e)}
                    secureTextEntry={secureText}
                />
               {Prop?.secureImage &&  
                <PressImage 
                    image={Images.eye} 
                    onPress={()=>setSecureText(!secureText)} 
                />
                }
                {
                    Prop.rightImage && 
                    <PressImage 
                        image={Prop.rightImage} 
                    />
                }
                {
                    Prop.leftTitle &&
                    <TouchableOpacity activeOpacity={0.5} onPress={Prop.onPressLeftTitle} >
                        <Text style={styles.leftTitle}>{Prop.leftTitle}</Text>
                    </TouchableOpacity>
                }
            </View>
           {
            error &&
            <View style={styles.errorContainer}>
                <PressImage image={Images.redCloseIcon} style={styles.errorImage} onPress={()=>setError(!error)} />
                <Text style={styles.errorText} >{Prop.error}</Text>
            </View>
           }
        </View>
    )
}
export default InputBox

const styles = StyleSheet.create({
    container:{
        marginBottom:8,
    },
    inputContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:BUTTON_HEIGHT,
        borderBottomWidth:0.4,
        borderBottomColor:Colors.grey,
    },
    textInputContainer:{
        flex:1,
        fontSize:14,
        color:Colors.darkBlack,
        fontFamily:Fonts.medium,
        textAlign:'left',
        marginRight:10,
        height:"100%",
        paddingHorizontal:10,
    },
    errorContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        marginVertical:8
    },
    errorImage:{
        height:11,
        width:11
    },
    errorText:{
        fontSize:11,
        lineHeight:18.3,
        fontFamily:Fonts.medium,
        marginLeft:5,
        color:Colors.darkGrey
    },
    image:{
        height:20,width:20,
        marginLeft:16,
        tintColor:Colors.darkGrey
    },
    leftTitle:{
        fontSize:10,
        lineHeight:16,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,
        marginRight:16,
        letterSpacing:0.5
    },
    title:{
        fontSize:10,
        fontFamily:Fonts.regular,
        color:Colors.darkBlack        
    }
})