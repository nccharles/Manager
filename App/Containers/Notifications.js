import React from 'react'
import { View, Text } from 'react-native'

class Notifications extends React.Component {

  componentDidMount() {
    const { nav } = this.props


  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#a064fb', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 35}}>Notifications</Text>
      </View>
    );
  }
}

export default Notifications
