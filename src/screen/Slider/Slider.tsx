import { StyleSheet, Text, View,ScrollView, ScrollViewProps, Image, Dimensions, StatusBar} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Header, { HeaderProps } from '../../component/Header/Header'
import { Images } from '../../constant/images'
import { Colors } from '../../constant/colors'
import Press from '../../component/Button/Press'
import { HEADER_HEIGHT, MARGIN_BOTTOM, PADDING_HORIZONTAL, TOP_FROM_HEADER } from '../../constant/style'
import PressImage from '../../component/Button/PressImage'
import Progress, { ProgressProps } from '../../component/animated/Progress'
import { Fonts } from '../../constant/fonts'
import { GlobalStackParam } from '../../navigation/stack/globalStack'

const WIDTH=Dimensions.get('screen').width

const titleOne:string="Access the world’s largest global inventory"
const titleTwo:string="Discover, explore and learn"
const titleThree:string="Quick, easy access to your own personal advisor"
const titleFour:string="Show & tell with other passionate collectors"

const Slider = () => {
    const navigation=useNavigation<NativeStackNavigationProp<GlobalStackParam>>()
    const [title,setTitle]=React.useState<string>(titleOne)
    const [sliderState, setSliderState] = React.useState({ currentPage: 1 });


    let scrollRef=React.useRef<ScrollView|null>(null)

    const setSliderPage = (event: any) => {
      const { currentPage } = sliderState;
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.round(x / WIDTH);
        setSliderState({
          currentPage: indexOfNextScreen+1,
        });
    };
  
    const onScrollTo=(index:number)=>{
      if(index<4){
      scrollRef.current?.scrollTo({
        x:WIDTH*index,
        animated:true
      })
      }
      else{
        navigation.navigate('SignUp')
      }
      
    }
  
  
    React.useEffect(()=>{
      onScrollTo(0)
    },[])

    React.useEffect(()=>{
      setTimeout(()=>{
        if(sliderState.currentPage !==0){
          if(sliderState.currentPage==1) setTitle(titleOne)
          if(sliderState.currentPage==2) setTitle(titleTwo)
          if(sliderState.currentPage==3) setTitle(titleThree)
          if(sliderState.currentPage==4) setTitle(titleFour)
        }
      },500)
      
    },[sliderState.currentPage])



  const headerRef:HeaderProps={
    rightTitle:"SIGN IN",
    containerStyle:styles.HeaderContainerStyle,
    onPressRight:()=>navigation.navigate('SignIn')
  }

  const scrollPropRef:ScrollViewProps={
    style:styles.style,
    horizontal:true,
    pagingEnabled:true,
    decelerationRate:"fast",
    scrollEventThrottle:16,
    contentContainerStyle:{flexGrow:1},
    bounces:false,
    showsHorizontalScrollIndicator:false,
    onScroll:(e:any)=>setSliderPage(e)
  
  }

  const progressPropRef:ProgressProps={
    style:styles.progress,
    max:100,
    value:100,
    duration:0
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'light-content'} />
    <Header {...headerRef} />
     <ScrollView ref={scrollRef} {...scrollPropRef} >
        <Image source={Images.frontOne} style={styles.imageStyle} />
        <Image source={Images.frontTwo} style={styles.imageStyle} />
        <Image source={Images.frontThree} style={styles.imageStyle} />
        <Image source={Images.frontFour} style={styles.imageStyle} />
     </ScrollView>
        <View style={styles.logo}>
          <PressImage disable={true} image={Images.logo} style={styles.logoImage} />
        </View>
      
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
            <Progress 
                  {...progressPropRef}
                  value={sliderState.currentPage >=1?100:0}
                  duration={sliderState.currentPage >=1?600:0} 
                />
                <Progress 
                  {...progressPropRef} 
                  value={sliderState.currentPage >=2?100:0}
                  duration={sliderState.currentPage>=2?600:0}
                />
                <Progress 
                  {...progressPropRef} 
                  value={sliderState.currentPage >=3?100:0}
                  duration={sliderState.currentPage>=3?600:0}
                  
                />
                <Progress 
                  {...progressPropRef}
                  value={sliderState.currentPage >=4?100:0}
                  duration={sliderState.currentPage>=4?600:0} 
                />
                
            </View>
            <Press  
              name='GET STARTED' 
              onPress={()=>{
                setTimeout(()=>onScrollTo(sliderState.currentPage),0)
              }} 
            />
        </View>
    
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    style:{
      flex:1,
      backgroundColor:Colors.darkBlack,
      position:"absolute",
      height:"100%",
      width:"100%"
    },
    imageStyle:{
      height:Dimensions.get('screen').height,
      width:Dimensions.get('screen').width,
      resizeMode:"contain",
    },
    HeaderContainerStyle:{
      zIndex:9999,
    },
    logo:{
      position:"absolute",
      width:WIDTH,
      height:100,
      top:HEADER_HEIGHT+TOP_FROM_HEADER,
      alignItems:"center"
    },
    logoImage:{
      width:214,
      resizeMode:"contain",
      height:24,
      borderColor:"white"
    },
    content:{
      position:"absolute",
      width:WIDTH,
      marginTop:HEADER_HEIGHT,
      bottom:MARGIN_BOTTOM,
      paddingHorizontal:PADDING_HORIZONTAL
      
    },
    info:{
    },
    row:{
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row"
    },
    progress:{
      width:48,
      height:2,
      marginBottom:HEADER_HEIGHT*0.5,
      marginHorizontal:4
    },
    title:{
      marginBottom:HEADER_HEIGHT*0.5,
      fontSize:16,
      lineHeight:22.8,
      color:Colors.white,
      fontFamily:Fonts.regular,
      alignSelf:"center",
      width:"70%",
      textAlign:"center",
      letterSpacing:0.4
    }
})