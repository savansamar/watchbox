import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTab from './CustomeTab';
import { FeedStack, InboxStack, MyWatchBoxStack, SearchStack } from '../stack/tabStack';
import { Images } from '../../constant/images';
import Index from '../../screen/Private/myWatchBox/Index';
import Search from '../../screen/Private/search/Search';
import Profile from '../../screen/Private/inbox/Profile';




export type TabScreen={
    Feed:{active:string,deActive:string},
    Search:{active:string,deActive:string},
    MyWatchBox:{active:string,deActive:string}
    Inbox:{active:string,deActive:string},
}


const feed={
    active:Images.calendarIcon,
    deActive:Images.activeCalendar
}
const search={
    active:Images.Search,
    deActive:Images.activeSearch
}
const myWatchBox={
    active:Images.activeFeed,
    deActive:Images.activeWatchBoxIcon
}
const inbox={
    active:Images.chatIcon,
    deActive:Images.chatIcon
}


const Tab = createBottomTabNavigator<TabScreen>();

export default function Tabs() {


  const [hideTab,setHideTab]=React.useState<boolean>(false)

  return (
      <Tab.Navigator 
        tabBar={props=><CustomTab {...props} />}
        initialRouteName={'Feed'}
        screenOptions={{
          headerShown:false,
          headerTransparent:true,
          tabBarStyle:{display:hideTab?'none':'flex'}
        }}
      >
        <Tab.Screen name="Feed" component={FeedStack} initialParams={feed} />
        <Tab.Screen name="Search" component={Search} initialParams={search} />
        <Tab.Screen name="MyWatchBox" component={Index} initialParams={myWatchBox} />
        {/* <Tab.Screen name="MyWatchBox" component={MyWatchBoxStack} initialParams={myWatchBox} /> */}
        <Tab.Screen name="Inbox" component={Profile} initialParams={inbox} />


      </Tab.Navigator>
  );
}