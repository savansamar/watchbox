import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../../screen/Private/feed/Feed';
import Search from '../../screen/Private/search/Search';
import Index from '../../screen/Private/myWatchBox/Index';
import Inbox from '../../screen/Private/inbox/Inbox';
import Profile from '../../screen/Private/inbox/Profile';

type TabStack = {
    FeedStack:undefined;
    SearchStack:undefined,
    WatchBoxStack:undefined,
    ProfileStack:undefined
  };
  
  
  export type TabStackParam=TabStack 
  
  
  const Stack=createNativeStackNavigator<TabStackParam>()
  
  let options={
      headerShown:false,
  }
  


export const FeedStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
            <Stack.Screen name='FeedStack' component={Feed} />
        </Stack.Navigator>
  )
}
export const SearchStack = () => {
    return (
      <Stack.Navigator screenOptions={options}>
              <Stack.Screen name='SearchStack' component={Search} />
          </Stack.Navigator>
    )
  }
  export const MyWatchBoxStack = () => {
    return (
      <Stack.Navigator screenOptions={options}>
              <Stack.Screen name='WatchBoxStack' options={{
              }}  component={Index} />
          </Stack.Navigator>
    )
  }
  export const InboxStack = () => {
    return (
      <Stack.Navigator screenOptions={options}>
              <Stack.Screen name='ProfileStack' component={Profile} />
          </Stack.Navigator>
    )
  }

