import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import EntryIcon from '../assets/icons/entry'; // Path to your EntryIcon component
import HomeIcon from '../assets/icons/home'; // Path to your HomeIcon component
import PersonIcon from '../assets/icons/person'; // Path to your PersonIcon component
import EntryScreen from '../main/entry/entry.screen';
import HomeScreen from '../main/home/home.screen';
import ProfileScreen from '../main/profile/profile.screen';

const Tab = createBottomTabNavigator();

const TabLayout: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color}) => {
          switch (route.name) {
            case 'Home':
              return <HomeIcon  color={color}   />;
            case 'Entry':
              return <EntryIcon  color={color}   />;
            case 'Profile':
              return <PersonIcon color={color}  />;
            default:
              return null;
          }
        },
        tabBarStyle: {
          borderTopWidth: 0, 
          elevation: 0,
          shadowOpacity: 0, 
        },
        tabBarActiveTintColor: '#057B9F',
      })}
    >
      <Tab.Screen name="Home"  options={{title:"Beranda",headerShown:false}} component={HomeScreen} />
      <Tab.Screen name="Entry" options={{title:"Pembukuan",headerShown:false}} component={EntryScreen} />
      <Tab.Screen name="Profile" options={{title:"Profil",headerShown:false}} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabLayout;
