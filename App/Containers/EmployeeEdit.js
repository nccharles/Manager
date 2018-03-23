import React, { Component } from 'react'
import { Font } from 'expo';
import _ from 'lodash'
import {connect} from 'react-redux'
import Communications from 'react-native-communications'
import EmployeeForm from '../Components/EmployeeForm'
import { employeeUpdate,employeeSave,employeeDelete} from '../actions'
import { Ionicons,Feather, FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';
import { StyleSheet,Modal,Text,Picker,View,Image,ImageBackground,TextInput,TouchableOpacity } from 'react-native'
import {Colors} from '../Themes/'
import styles from './Styles/SignUpScreenStyle'
import LoginScreen from '../Containers/LoginScreen'
import { Confirm } from '../Components/common';
const background = require("../Images/login1_bg.png");
const backIcon = require("../Images/back.png");
const personIcon = require("../Images/signup_person.png");
const lockIcon = require("../Images/signup_lock.png");
const emailIcon = require("../Images/signup_email.png");
const birthdayIcon = require("../Images/signup_birthday.png");

 class EmployeeEdit extends Component {
   state ={ showModal: false};
   componentWillMount() {
     _.each(this.props.employee, (value, prop) => {
       this.props.employeeUpdate({ prop, value});
     });
   }
   onButtonPress() {
     const {empname,email,phone,shift} = this.props;
     this.props.employeeSave({empname,email,phone,shift, uid: this.props.employee.uid})
   }
   onTextPress() {
const {phone, shift} = this.props
Communications.text(phone, `Your Upcoming Schedule is on ${shift}`)
   }
   onAccept(){
    const {uid} = this.props.employee;
    this.props.employeeDelete({ uid })
   }
   onDecline(){
     this.setState({ showModal: false});
   }
  render () {
    return (
      <View style={styles.container}> 
        <ImageBackground 
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        >
        <EmployeeForm/>
          <View style={styles.footerContainer}>

            <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Save Changes</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onTextPress.bind(this)}>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Send Schedule</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ showModal: !this.state.showModal})}>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Fire Employee</Text>
              </View>
            </TouchableOpacity>
            <Confirm 
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
            >
            <Text style={styles.whiteFont}>Are you sure you want to delete this?</Text>
            </Confirm>
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
export default connect(mapStateToProps,{ employeeUpdate,employeeDelete, employeeSave})(EmployeeEdit)