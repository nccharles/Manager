import React, { Component } from 'react'
import { AppLoading, Asset, Font} from 'expo';
import {Button} from 'native-base';
import { FontAwesome ,Ionicons,Feather} from '@expo/vector-icons';
import { StatusBar,StyleSheet, Modal,Dimensions,ImageBackground,Text,TextInput,KeyboardAvoidingView, View,TouchableOpacity,Image } from 'react-native';
const { width, height } = Dimensions.get("window");
import styles from './Styles/LoginScreenStyle'
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return true
}
export default class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isReady: false,
    }
  }
  async _loadAssetsAsync() {
    const imageAssets= cacheImages([
      background=require("../Images/login1_bg.png"),
      mark = require("../Images/login1_mark.png"),
     lockIcon = require("../Images/login1_lock.png"),
     personIcon = require("../Images/login1_person.png"),
    ]);

    const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }
  render () {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
      <StatusBar barStyle = "light-content" hidden = {false}/>
     <ImageBackground source={background} style={styles.background} resizeMode="cover">

      <View style={styles.markWrap}>
          <Image source={mark} style={styles.mark} resizeMode="contain" />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholder="Username" 
              placeholderTextColor="#FFF"
              style={styles.input} 
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholderTextColor="#FFF"
              placeholder="Password" 
              style={styles.input} 
              secureTextEntry
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity activeOpacity={.5}>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5} onPress={() =>navigate('Home')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.signupWrap}>
            <Text style={styles.accountText}>Don't have an account?</Text>
            <TouchableOpacity activeOpacity={.5} onPress={() =>navigate('Signup')}>
              <View>
                <Text style={styles.signupLinkText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
     </ImageBackground>
     </View>
    )
  }
}
