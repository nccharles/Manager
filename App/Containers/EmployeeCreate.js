import React, { Component } from 'react'
import { Font } from 'expo';
import {connect} from 'react-redux'
import EmployeeForm from '../Components/EmployeeForm'
import { employeeUpdate,employeeCreate} from '../actions'
import { Ionicons,Feather, FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';
import { StyleSheet,Modal,Text,Picker,View,Image,ImageBackground,TextInput,TouchableOpacity } from 'react-native'
import {Colors} from '../Themes/'
import styles from './Styles/SignUpScreenStyle'
import LoginScreen from '../Containers/LoginScreen'
const background = require("../Images/login1_bg.png");
const backIcon = require("../Images/back.png");
const personIcon = require("../Images/signup_person.png");
const lockIcon = require("../Images/signup_lock.png");
const emailIcon = require("../Images/signup_email.png");
const birthdayIcon = require("../Images/signup_birthday.png");

 class EmployeeCreate extends Component {
   onButtonPress() {
     const {empname,email,phone,shift} = this.props;
     this.props.employeeCreate({empname,email,phone,shift: shift || 'Monday'})
   }
  render () {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        >
        <EmployeeForm {...this.props}/>
          <View style={styles.footerContainer}>

            <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Create</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
};

const mapStateToProps = (state) => {
  const {empname, phone , email, shift} = state.employeeForm
   return { empname, phone, email, shift};
}
export default connect(mapStateToProps,{ employeeUpdate, employeeCreate})(EmployeeCreate)