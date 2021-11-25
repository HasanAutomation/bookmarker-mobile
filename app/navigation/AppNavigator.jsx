import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import NewBookmark from '../screens/NewBookmark';
import AddBookmarkButton from './AddBookmarkButton';
import Account from '../screens/Account';
import Admin from '../screens/Admin';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        headerTitle: 'Bookmarks',
        tabBarLabel: 'Bookmarks',
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='home' size={size} color={color} />
        ),
      }}
      name='Home'
      component={Home}
    />
    <Tab.Screen
      name='Search'
      component={Search}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='search-web' size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name='Add'
      options={({ navigation }) => ({
        tabBarButton: () => (
          <AddBookmarkButton onPress={() => navigation.navigate('Add')} />
        ),
      })}
      component={NewBookmark}
    />
    <Tab.Screen
      name='Admin'
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name='controller-classic'
            size={size}
            color={color}
          />
        ),
      }}
      component={Admin}
    />

    <Tab.Screen
      name='Account'
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='account' size={size} color={color} />
        ),
      }}
      component={Account}
    />
  </Tab.Navigator>
);
