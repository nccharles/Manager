import React, { Component } from 'react'
import { Font } from 'expo';
import {connect} from 'react-redux'
import { employeeUpdate,employeeCreate} from '../actions'
import { Ionicons,Feather, FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';
import { StyleSheet,Modal,Text,Picker,View,Image,ImageBackground,TextInput,TouchableOpacity } from 'react-native'
import {Colors} from '../Themes/'
import styles from '../Containers/Styles/SignUpScreenStyle'
import LoginScreen from '../Containers/LoginScreen'
const backIcon = require("../Images/back.png");
const personIcon = require("../Images/signup_person.png");
const lockIcon = require("../Images/signup_lock.png");
const emailIcon = require("../Images/signup_email.png");
const birthdayIcon = require("../Images/signup_birthday.png");

 class EmployeeForm extends Component {
  render () {
    return (
      <View style={styles.container}>
    
          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Name"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
                value={this.props.empname} 
                onChangeText={value => this.props.employeeUpdate({ prop: 'empname', value})}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={emailIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Email"
                placeholderTextColor="#FFF" 
                underlineColorAndroid='transparent'
                value={ this.props.email} 
                onChangeText={value => this.props.employeeUpdate({ prop: 'email', value})}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Ionicons style={styles.inputIcon} 
                  resizeMode="contain" 
                  name="ios-call-outline" size={32} color='#fff'/>
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="+250 700 000 000"
                placeholderTextColor="#FFF" 
                underlineColorAndroid='transparent' 
                value={ this.props.phone}
                onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value})}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Ionicons style={styles.inputIcon} 
                  resizeMode="contain" 
                  name="ios-calendar-outline" size={32} color='#fff'/>
              </View>
              <Picker
                style={[styles.pick, styles.whiteFont]}
                underlineColorAndroid='transparent' 
                selectedValue={this.props.shift}
                onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
                >
              <Picker.Item label="Monday" value="Monday"/>
              <Picker.Item label="Tuesday" value="Tuesday"/>
              <Picker.Item label="Wednesday" value="Wednesday"/>
              <Picker.Item label="Thursday" value="Thursday"/>
              <Picker.Item label="Friday" value="Friday"/>
              <Picker.Item label="Saturday" value="Saturday"/>
              <Picker.Item label="Sunday" value="Sunday"/>
              </Picker>
            </View>
          </View>
      </View>
    )
  }
};

const mapStateToProps = (state) => {
  const {empname, phone , email, shift} = state.employeeForm
   return { empname, phone, email, shift};
}
export default connect(mapStateToProps,{ employeeUpdate})(EmployeeForm)