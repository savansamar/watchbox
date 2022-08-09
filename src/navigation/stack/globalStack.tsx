import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { WatchDetails } from '../../component/Item/Watch';
import Blog from '../../screen/Private/feed/Blog';
import AddWatch from '../../screen/Private/myWatchBox/AddWatch';
import CreateWatch from '../../screen/Private/myWatchBox/CreateWatch';
import Status from '../../screen/Private/orderStatus/Status';
import Chat from '../../screen/Private/search/Chat';
import SingleWatch from '../../screen/Private/search/SingleWatch';
import ConfirmUser from '../../screen/Public/auth/ConfirmUser';
import LostPassword from '../../screen/Public/auth/LostPassword';
import PickUserForm from '../../screen/Public/auth/PickUserName';
import ResetPassword from '../../screen/Public/auth/ResetPassword';
import SignIn from '../../screen/Public/auth/Signin';
import SignUp from '../../screen/Public/auth/SignUp';
import UserForm from '../../screen/Public/auth/UserForm';
import Welcome from '../../screen/Public/auth/Welcome';
import AddGrail from '../../screen/Public/preference/AddGrail';
import ClientAdvisor from '../../screen/Public/preference/ClientAdvisor';
import EnthusiastLevel from '../../screen/Public/preference/EnthusiastLevel';
import FavouriteBrand from '../../screen/Public/preference/FavoriteBrands';
import Grails from '../../screen/Public/preference/Grails';
import Slider from '../../screen/Slider/Slider';
import Tabs from '../tab';

export type GlobalStackParam={
    Slider:undefined,
    SignUp:undefined,
    LostPassword:undefined,
    SignIn:undefined,
    ResetPassword:undefined,
    Welcome:undefined,
    ConfirmUser:undefined,
    UserForm:undefined,
    PickUserForm:undefined,
    EnthusiastLevel:undefined,
    FavouriteBrand:undefined,
    AddGrail:undefined,
    Grails:undefined,
    ClientAdvisor:undefined,
    Tabs:undefined,
    Blog:undefined,
    CreateWatch:undefined,
    AddWatch:undefined,
    SingleWatch:{item:WatchDetails},
    Chat:undefined,
    OrderStatus:undefined
} 

const Stack=createNativeStackNavigator<GlobalStackParam>()


const GlobalStack = () => {
    
    const options={
            headerShown:false,
            headerTransparent:true,
            headerTitle:"",
            headerBackVisible:false,
            gestureEnabled:true
        
    }
    
    const StackOption:any={
        animation:"none"
    }
    return(
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name='Slider' component={Slider} options={StackOption} />
            <Stack.Screen name='SignUp' component={SignUp} options={StackOption} />
            <Stack.Screen name='SignIn' component={SignIn} options={StackOption} />
            <Stack.Screen name='LostPassword' component={LostPassword} options={StackOption} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} options={StackOption} />
            <Stack.Screen name='Welcome' component={Welcome} options={StackOption} />
            <Stack.Screen name='ConfirmUser' component={ConfirmUser} options={StackOption} />
            <Stack.Screen name='UserForm' component={UserForm} options={StackOption} />
            <Stack.Screen name='PickUserForm' component={PickUserForm} options={StackOption} />
            <Stack.Screen name='EnthusiastLevel' component={EnthusiastLevel} options={StackOption} />
            <Stack.Screen name='FavouriteBrand' component={FavouriteBrand} options={StackOption} />
            <Stack.Screen name='AddGrail' component={AddGrail} options={StackOption} />
            <Stack.Screen name='Grails' component={Grails} options={StackOption} />
            <Stack.Screen name='ClientAdvisor' component={ClientAdvisor} options={StackOption} />

            <Stack.Screen name='Tabs' component={Tabs} options={StackOption} />
            
            <Stack.Screen name='Blog' component={Blog} options={StackOption} />

            <Stack.Screen name='CreateWatch' component={CreateWatch} options={StackOption} />
            <Stack.Screen name='AddWatch' component={AddWatch} options={StackOption} />
            <Stack.Screen name='SingleWatch' component={SingleWatch} options={StackOption} />
            <Stack.Screen name='Chat' component={Chat} options={StackOption} />
            <Stack.Screen name='OrderStatus' component={Status} options={StackOption} />
            
            {/* <Stack.Screen name='Demo' component={Demo} options={{
                animation:"none",
                customAnimationOnGesture:true,
                contentStyle:{
                    backgroundColor:"yellow",

                },
                gestureEnabled:true,
                
            }}  /> */}
        </Stack.Navigator>
    )
}

export default GlobalStack
