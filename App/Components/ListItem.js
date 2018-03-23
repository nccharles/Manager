import React, { Component } from 'react';
import { View,TouchableWithoutFeedback, Text} from 'react-native';
import {Colors} from '../Themes'
import {Actions} from 'react-native-router-flux'
class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({employee: this.props.employee});
  }
  render() {
    const { empname,email,phone,shift} = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
      <View style={styles.card}>
        <Text style={styles.titleStyle}> {empname}
        </Text>
        <Text style={styles.bodyStyle}> Email:{email} |Phone: {phone} |Shift: {shift}.
        </Text>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles={
  titleStyle: {
    fontSize: 18,
    paddingLeft: 0,
    padding: 10,
    color: Colors.text
  },
  bodyStyle: {
    fontSize: 12,
    paddingLeft: 0,
    padding: 2,
    color: Colors.text
  },
  card: {
    marginLeft: 15,
    borderBottomWidth: 1,
     borderBottomColor: Colors.fire,
  }
}
export default ListItem;
