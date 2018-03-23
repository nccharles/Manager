import React, { Component } from 'react';
import { StackNavigator,TabNavigator,DrawerNavigator, TabBarBottom,NavigationActions } from 'react-navigation';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../Themes'
import {SocialIcon} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import ProfileScreen from '../Containers/ProfileScreen'
import LoginScreen from '../Containers/LoginScreen'
import SignUpScreen from '../Containers/SignUpScreen'
import CalenderScreen from '../Containers/CalenderScreen'
import MyProfile from '../Containers/Profile1'
import MainProfile from '../Containers/Profile2'
import NiceProfile from '../Containers/Profile4'
import Myproducts from '../Containers/Product1'
const Tabbs =TabNavigator(
  {
    Home: { screen: MainProfile },
    Profile: {
       screen: MyProfile,
       headerMode: 'none',
       header: null,
       navigationOptions: {
        header: null,
    }  
    },
    Gallery: { screen: NiceProfile },
    Products: { 
      screen: Myproducts, 
      navigationOptions: {
        tabBarLabel: 'MainProfile',
        tabBarVisible: false,
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Gallery') {
          iconName = `ios-images${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Products') {
          iconName = `ios-briefcase${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.fire,
      inactiveTintColor: Colors.windowTint,
      style: {
        backgroundColor: Colors.transparent
        },
    },
    animationEnabled: false,
    swipeEnabled: true,
  }
);
const Main = DrawerNavigator({
  Home: {
    screen: MyProfile,
  },
  settings: {
    screen: NiceProfile,
  },
});
const AppNavigator = StackNavigator ({
  
  Login: {
    screen: LoginScreen,
    headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  
  },
  Signup: {
    screen: SignUpScreen,
    headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }  
  },
  Calender: {
    screen: MyProfile,
    headerMode: 'none',
    header: null, 
    navigationOptions: {
      header: null,
  }  
  },
  Home: {
    screen: Tabbs,
  },
  },
  {
    initialRouteName: 'Login',
  },
);

export default class AppNavigation extends React.Component {
    render() {
      return <AppNavigator />;
    }
  }