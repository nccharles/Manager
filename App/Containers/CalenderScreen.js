import React, { Component } from 'react'
import {
  Text,
  StatusBar,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import {Colors} from '../Themes/'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
const loading = require('../Images/loading.gif')

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent'
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  loadingImage: {
    width: 60,
    height: 60
  }
}

const Slide = props => {
  return (<View style={styles.slide}>
    <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
    {
      !props.loaded && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>)
}

export default class CalenderScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgList: [
        'https://gitlab.pro/yuji/demo/uploads/d6133098b53fe1a5f3c5c00cf3c2d670/DVrj5Hz.jpg_1',
        'https://gitlab.pro/yuji/demo/uploads/2d5122a2504e5cbdf01f4fcf85f2594b/Mwb8VWH.jpg',
        'https://gitlab.pro/yuji/demo/uploads/4421f77012d43a0b4e7cfbe1144aac7c/XFVzKhq.jpg',
        ],
      loadQueue: [0, 0, 0]
    }
    this.loadHandle = this.loadHandle.bind(this)
  }
  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
      <StatusBar backgroundColor='blue' barStyle='light-content' />
        <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={false}>
          {
            
            this.state.imgList.map((item, i) => <Slide
              key={i} 
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              uri={item}
              i={i}
              />)
          }
        </Swiper>
        <TouchableOpacity onPress={() =>navigate('Home')} style={{backgroundColor: Colors.fire,height:50, justifyContent: 'flex-end', alignItems: 'stretch'}}>
          <Text style={{padding: 20, color: "#fff",textAlign: 'center'}}>Get Login -></Text>
        </TouchableOpacity>
      </View>
    )
  }
}
