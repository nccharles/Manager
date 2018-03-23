import React, { Component } from 'react'
import { AppLoading, Asset, Font} from 'expo';
import {Button} from 'native-base';
import { FontAwesome ,Ionicons,Feather} from '@expo/vector-icons';
import { Actions} from 'react-native-router-flux'
import { StatusBar,StyleSheet,ActivityIndicator, Modal,Dimensions,ImageBackground,Text,TextInput,KeyboardAvoidingView, View,TouchableOpacity,Image } from 'react-native';
const { width, height } = Dimensions.get("window");
import styles from './Styles/LoginScreenStyle'
import {Colors} from '../Themes'
import {connect} from 'react-redux'
import { emailChanged,passwordChanged, loginUser} from '../actions'
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
 class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isReady: false,
    }
  }
  onButtonPress() {
    const { email, password} = this.props;

    this.props.loginUser({ email, password})
  }
  onEmailChange(text){
  this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  async _loadAssetsAsync() {
    const imageAssets= cacheImages([
      background=require("../Images/login1_bg.png"),
      emailIcon=require("../Images/signup_email.png"),
      loadIcon=require("../Images/loading.gif"),
      mark = require("../Images/login1_mark.png"),
     lockIcon = require("../Images/login1_lock.png"),
     personIcon = require("../Images/login1_person.png"),
    ]);

    const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }
  renderButton(){
    if(this.props.loading){
      return  <Image style={styles.loadingImage} source={loadIcon} />

    }
    return (<Text style={styles.buttonText}>Sign In</Text>)
  }
  renderError() {
  if (this.props.error){
 return (
  <View style={{backgroundColor: Colors.transparent}}>
  <Text style={styles.errorTextStyle}>
  {this.props.error}
  </Text>
  </View>
 )
  }  
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
        {this.renderError()}
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={emailIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput 
              placeholder="example@gmail.com" 
              placeholderTextColor="#FFF"
              style={styles.input} 
              underlineColorAndroid="transparent"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}

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
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </View>
          <TouchableOpacity activeOpacity={.5}>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5} onPress={this.onButtonPress.bind(this)}>
            <View style={styles.button}>
              {this.renderButton()}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.signupWrap}>
            <Text style={styles.accountText}>Don't have an account?</Text>
            <TouchableOpacity activeOpacity={.5} onPress={() =>Actions.signup()}>
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
const mapStateToProps = ({auth}) => {
  const { email, password, error, loading} = auth;
  return {email, password, error, loading};
}
export default connect(mapStateToProps, {emailChanged, 
  passwordChanged,
loginUser})(LoginScreen)