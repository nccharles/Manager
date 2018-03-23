import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Map extends React.Component {


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: '#63bcfc', alignItems: 'center', justifyContent: 'center', borderColor: 'gray', borderWidth: 1}}>
        <Text style={{fontSize: 35}}>Map</Text>
        <TouchableOpacity style={{backgroundColor: '#333333', marginTop: 50, padding: 15}}
          onPress={() =>navigate('Home')}
        >
          <Text style={{color: 'white'}}>GO TO PROFILE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Map
