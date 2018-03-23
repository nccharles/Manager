import React, { Component } from 'react'
import {Constants} from 'expo'
import { FontAwesome ,Ionicons,Feather} from '@expo/vector-icons';
import { View, Text, StyleSheet,Animated,ScrollView,Image} from 'react-native';
import FriendList from '../Components/FriendList'
import {Colors} from '../Themes/'
HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 80
PROFILE_IMAGE_MIN_HEIGHT = 40
import styles from './Styles/ProfileScreenStyle'

export default class ProfileScreen extends Component {
  constructor(props){
    super(props)
    this.state ={
      scrollY: new Animated.Value(0)
    }
  }
  render () {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    })
    const ProfileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT,PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp',
    })
    const ProfileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT /2), HEADER_MAX_HEIGHT + 5],
      extrapolate: 'clamp',
    })
    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })
    const headerTitleBottom= this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MAX_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MAX_HEIGHT + 26],
      outputRange: [-20, -20, -20 , 0],
      extrapolate: 'clamp',
    }) 
    return (
      <View style={styles.container}>
      <Animated.View style={
        {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: Colors.fire,
          height: headerHeight,
          zIndex: headerZindex,
          alignItems: 'center',
        }
      }>
      <Animated.View style={{position: 'absolute', bottom: headerTitleBottom}}>
      <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>NC Charles</Text></Animated.View>
      </Animated.View>
      <ScrollView style={{marginBottom:0}}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{nativeEvent:{contentOffset: {y: this.state.scrollY}}}]
      )}
      style={{flex: 1}}>
      <Animated.View style={
        {
          height: ProfileImageHeight,
          width: ProfileImageHeight,
          borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
          borderColor: '#FFF',
          borderWidth: 3,
          overflow: 'hidden',
          marginTop: ProfileImageMarginTop,
          marginLeft: 10,
         }
      }>
      <Image style={styles.imageprofile} source={require('../Images/me.jpg')}/>
      </Animated.View>
      <View>
        <Text style={styles.profileName}>NC Charles</Text>
      </View>
      <FriendList/>
      </ScrollView> 
    </View>
    )
  }
}
