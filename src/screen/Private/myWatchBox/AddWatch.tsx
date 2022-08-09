import { Image, ScrollViewProps, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/colors'
import Header, { HeaderProps } from '../../../component/Header/Header'
import { Images } from '../../../constant/images'
import { GlobalStackParam } from '../../../navigation/stack/globalStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { PADDING_HORIZONTAL } from '../../../constant/style'
import PressImage from '../../../component/Button/PressImage'
import { Fonts } from '../../../constant/fonts'
import TouchableText from '../../../component/Button/TouchableText'
import Press from '../../../component/Button/Press'
import PopUP from '../../../component/Modal/PopUp'

const WATCH_HEIGHT=343
const WATCH_WIDTH=343
const paperDes="Add the purchase receipt details for this watch."
const conditionDesc="Select the condition that best describes this watch."
const insuranceDes="Add the insurance papers details for this watch"
const recordsDes="Add the service records details for this watch"

interface PickItemProps{
    title?:string,
    onPress?:()=>void,
    description?:string
}
const PickItem=(Props:PickItemProps)=>{
    let desc:boolean=Props.description && Props.description !==undefined ? true:false
    return(
        <TouchableOpacity activeOpacity={0.5} style={styles.pickItemView} onPress={Props.onPress} >
            <View style={[styles.rowB,{marginBottom:10}]}>
                <Text style={styles.title}>{Props.title}</Text>
                <Image source={desc?Images.greenMark:Images.dropRight} style={desc?styles.greenMark:styles.dropRight} />
            </View>
            {desc&&
                <Text style={styles.brand_Name} >{Props?.description}</Text>
            }
        </TouchableOpacity>
    )
}


interface TitleProps{
    title?:string,
    description?:string,
    onClose?:()=>void,
    children?:React.ReactNode
}

const Title=(Props:TitleProps)=>{
    return(
        <View style={modal.container}>
                <View style={styles.rowB}>
                    <Text style={modal.title}>{Props.title}</Text>
                    <PressImage image={Images.activeCloseIcon} onPress={Props.onClose} />
                </View>
                <Text style={[styles.linkText,{color:Colors.darkGrey,marginBottom:48}]}>{Props.description}</Text>
                <View style={{flex:1,width:"100%"}}>
                        {Props.children}
                </View>
        </View>
    )
}



interface ImageBoxProps{
    fill?:boolean
}

const ImageBox=(Props:ImageBoxProps)=>{
    const border:ViewStyle={
        borderStyle:Props.fill?'solid':"dashed",
        borderColor:!Props.fill?Colors.darkBlack:"transparent"
    }
    return(
        <TouchableOpacity activeOpacity={0.5} style={[styles.ImageBox,border]} >
            {
                Props.fill?
                    <Image source={Images.watchFour} style={styles.imageBox} />
                :<Image source={Images.addIcon} style={styles.addIcon} />
            }
        </TouchableOpacity>
    )
}


const AddWatch = () => {
    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
    const [showModal,setShowModal]=React.useState<boolean>(false)
    const [value,setValue]=React.useState<string>('')
    const [watchCondition,setWatchCondition]=React.useState<string>('')
    const [papers,setPapers]=React.useState<string>('')
    const [insurance,setInsurance]=React.useState<string>('')
    const [service,setService]=React.useState<string>('')


    const _setValue=()=>setValue('')

    const headerPropRef:HeaderProps={
        leftIcon:Images.back,
        background:"light",
        title:"Add Watch",
        onPressLeft(){navigation.goBack()},
        rightIcon:Images.threeDot
    }

    const scrollPropRef:ScrollViewProps={
        showsVerticalScrollIndicator:false,
        bounces:false,
        contentContainerStyle:styles.contentContainerStyle
    }

    const _watch=()=>{
        
        return(
            <View style={{marginBottom:32}}>
                <PressImage image={Images.watchTwo} style={styles.watch} />
                <View style={{alignItems:"center"}}>
                    <Text style={styles.brand_Name}>ROLEX</Text>
                    <Text style={styles.name}>Submariner Green 2010</Text>
                    <Text style={styles.model}>260221</Text>
                </View>
            </View>
        )
    }

    const _selectImage=()=>{
        return(
            <View style={styles.selectImageView}>
                <View style={styles.rowB}>
                    <Text style={styles.title}>Photos</Text>
                    <TouchableText name='What should I include?' textStyle={styles.linkText} />
                </View>
                <View style={styles.rowS}>
                    {
                        Array(4).fill(0).map(()=><ImageBox fill={false} />)
                    }
                </View>
                <Text style={styles.model}>First image will be the main photo. Drag your photos to change the order.</Text>
            </View>
        )
    }

    const _bottom=()=>{
        return(
            <View style={styles.bottom}>
                <Press name='ADD WATCH' onPress={()=>setShowModal(true)} />
            </View>
        )
    }


    const _modal=()=>{
        const _rows=()=>{
            return(
                <>
                <View style={[styles.rowS,{marginBottom:8}]}>
                        <View style={modal.line} />
                        <View style={modal.lineTwo} />
                        <View style={modal.lineThree} />
                        <View style={modal.lineTwo} />
                        <View style={modal.lineThree} />
                </View>
                <View style={[styles.rowB,{marginBottom:0}]}>
                    <Text style={modal.lightText}>Poor</Text>
                    <Text style={modal.lightText} >Excellent</Text>
                </View>
                </>
            )
        }

        return(
            <Title title='Watch Condition' description={conditionDesc} onClose={_setValue}>
                <TouchableOpacity style={[styles.rowB,{marginBottom:30}]} onPress={()=>setWatchCondition('Working: Good, Cosmetic: Perfect')} >
                    <Text style={styles.title}>Mechanical condition:</Text>
                    <Text style={modal.regularText}>Weak</Text>
                </TouchableOpacity>
                {_rows()}
                
                <TouchableOpacity style={[styles.rowB,{marginBottom:30,marginTop:48}]} onPress={()=>setWatchCondition('Working: Good, Cosmetic: Perfect')}>
                    <Text style={styles.title}>Cosmetic condition</Text>
                    <Text style={modal.regularText}>Perfect</Text>
                </TouchableOpacity>
                {_rows()}
                <View style={{marginTop:60}}>
                    <Press 
                        name='SAVE DETAILS' 
                        onPress={_setValue}
                    />
                </View>
            </Title>
           
        )
    }

    const _papers=()=>{
        let first="I have the original box & papers"
        let second="I only have the original box"
        let three="I only have the original papers"
        let four="I do not own the original box or papers"

        return(
            <Title title='Box/Papers' description={paperDes} onClose={_setValue} >
                <Press backgroundColor={papers===first?Colors.lightGreen :Colors.lightOrange} color={Colors.darkBlack} name={first} onPress={()=>setPapers(first)} />
                <Press backgroundColor={papers===second?Colors.lightGreen :Colors.lightOrange} color={Colors.darkBlack} spaceVertical={8} name={second} onPress={()=>setPapers(second)} />
                <Press backgroundColor={papers===three?Colors.lightGreen :Colors.lightOrange} color={Colors.darkBlack} spaceVertical={8} name={second} onPress={()=>setPapers(three)} />
                <Press backgroundColor={papers===four?Colors.lightGreen :Colors.lightOrange} color={Colors.darkBlack} spaceVertical={8} name={second} onPress={()=>setPapers(four)} />
                
                <View style={{marginTop:42}}>
                    <Press 
                        name='SAVE DETAILS' 
                        onPress={_setValue}
                    />
                </View>
            </Title>
            
        )
    }

    const _insurance=()=>{
        let first="I have all insurance papers"
        let second="I don’t have insurance papers"
        return(
            <Title title='Insurance Papers' description={insuranceDes} onClose={_setValue} >
                <Press backgroundColor={insurance===first?Colors.lightGreen :Colors.lightOrange} color={Colors.darkBlack} name={first} onPress={()=>setInsurance(first)} />
                <Press backgroundColor={insurance===second?Colors.lightGreen :Colors.lightOrange} color={Colors.darkBlack} spaceVertical={8} name={second} onPress={()=>setInsurance(second)} />
                <View style={{marginTop:42}}>
                    <Press 
                        name='SAVE DETAILS' 
                        onPress={_setValue}
                    />
                </View>
            </Title>
        )
    }

    const _records=()=>{
        let first="I have service records"
        let second="I don’t have any service records"
        return(
            <Title title='Service Records' description={recordsDes} onClose={_setValue} >
                <Press backgroundColor={service===first?Colors.lightGreen :Colors.lightOrange} color={Colors.darkBlack} name={first} onPress={()=>setService(first)} />
                <Press backgroundColor={service===second?Colors.lightGreen :Colors.lightOrange} color={Colors.darkBlack} spaceVertical={8} name={second} onPress={()=>setService(second)} />
                <View style={{marginTop:42}}>
                    <Press 
                        name='SAVE DETAILS'
                        onPress={_setValue}
                     />
                </View>
            </Title>
        )
    }
   

  return (
    <View style={styles.container}>
        <Header {...headerPropRef} />
        <ScrollView {...scrollPropRef}>
        {_watch()}
        {_selectImage()}
            <PickItem title='Watch condition' description={watchCondition} onPress={()=>setValue('condition')}/>
            <PickItem title='Box/Papers' description={papers}  onPress={()=>setValue('box')}/>
            <PickItem title='Insurance Papers' description={insurance} onPress={()=>setValue('insurance')}/>
            <PickItem title='Service Records'  description={service} onPress={()=>setValue('records')}/>
            <View style={{height:80}} />
        </ScrollView>
        {_bottom()}
        <PopUP 
            show={value==='condition'} 
            onClose={_setValue}
            height={500}
            max={500}
            borderRadius={25}
        >
            {_modal()}
        </PopUP>
        <PopUP 
            show={value==='box'} 
            onClose={_setValue}
            height={552}
            max={552}
            borderRadius={25}
        >
            {_papers()}
        </PopUP>
        <PopUP 
            show={value==='insurance'} 
            onClose={_setValue}
            height={406}
            max={406}
            borderRadius={25}
        >
            {_insurance()}
        </PopUP>
        <PopUP 
            show={value==='records'} 
            onClose={_setValue}
            height={406}
            max={406}
            borderRadius={25}
        >
            {_records()}
        </PopUP>
      
    </View>
  )
}

export default AddWatch

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    contentContainerStyle:{
        paddingHorizontal:PADDING_HORIZONTAL,
        paddingVertical:12,
        paddingBottom:20
    },
    watch:{
        height:WATCH_HEIGHT,
        width:WATCH_WIDTH,
        resizeMode:"contain",
    },
    brand_Name:{
        marginVertical:8,
        fontSize:12,
        lineHeight:18.3,
        fontFamily:Fonts.regular,
        color:Colors.darkGrey,
        letterSpacing:1
      },
      name:{
        fontSize:20,
        fontFamily:Fonts.medium,
        color:Colors.darkBlack,
        letterSpacing:-0.5,
      },
      model:{
        fontSize:10,
        lineHeight:18.3,
        fontFamily:Fonts.regular,
        color:Colors.grey,
        letterSpacing:0.5,
        marginVertical:8
      },
      selectImageView:{
        padding:20,
      },
      rowB:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:20

      },
    title:{
        fontSize:14,
        lineHeight:16,
        color:Colors.darkBlack,
        fontFamily:Fonts.medium,
        letterSpacing:-0.18
    },
    linkText:{
        fontSize:12,
        lineHeight:18.3,
        color:"#493add",
        fontFamily:Fonts.medium
    },
    ImageBox:{
        height:80,
        width:80,
        borderWidth:1,
        borderStyle:"dashed",
        marginRight:8,
        justifyContent:"center",
        alignItems:"center"
    },
    rowS:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'flex-start'
    },
    addIcon:{
        height:20,
        width:20,
        resizeMode:"contain",
        tintColor:"black"
    },
    imageBox:{
        height:80,
        width:80,

    },
    dropRight:{
        height:25,
        width:25
    },
    greenMark:{
        height:20,
        width:20
    },
    pickItemView:{
        width:"100%",
        paddingHorizontal:16,
        paddingVertical:16,
        marginVertical:8
    },
    bottom:{
        position:"absolute",
        bottom:0,
        alignSelf:"center",
        paddingVertical:24,
        paddingHorizontal:PADDING_HORIZONTAL,
        width:"100%",
        backgroundColor:Colors.white
    },

})

const modal=StyleSheet.create({
    title:{
        fontSize:24,
        lineHeight:28,
        color:Colors.darkBlack,
        fontFamily:Fonts.regular,
        letterSpacing:-0.5
    },
    container:{
        flex:1,
        paddingHorizontal:PADDING_HORIZONTAL,
        paddingVertical:PADDING_HORIZONTAL+4
    },
    regularText:{
        fontSize:12,
        lineHeight:12,
        fontFamily:Fonts.regular,
        color:Colors.fadedDark
    },
    line:{
        width:'30%',
        borderBottomColor:Colors.fadedGrey,
        borderBottomWidth:1,
        height:10,
        borderLeftWidth:1,
        borderLeftColor:Colors.fadedGrey
    },
    lineTwo:{
        width:'15%',
        borderBottomColor:Colors.fadedGrey,
        borderBottomWidth:1,
        height:10,
        borderLeftWidth:1,
        borderLeftColor:Colors.fadedGrey
    },
    lineThree:{
        width:'18%',
        borderBottomColor:Colors.fadedGrey,
        borderBottomWidth:1,
        height:10,
        borderRightWidth:1,
        borderRightColor:Colors.fadedGrey
    },
    lightText:{
        fontSize:10,
        lineHeight:12,
        letterSpacing:-0.4,
        color:Colors.grey,
        fontFamily:Fonts.medium
    }
})