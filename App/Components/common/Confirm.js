import React, { Component } from 'react';
import { View, Text,Modal,TouchableOpacity  } from 'react-native';
const Confirm = ({children, visible, onAccept,onDecline}) => {
    const {containerStyle,textStyle,Buttons,buttonContainer, cardSectionStyle}= styles;
   return (
       <View>
      <Modal 
       visible={visible}
       transparent
       animationType="slide"
       onRequestClose={() => {}}
       >
           <View style={containerStyle}>
               <View style={cardSectionStyle}>
               <Text style={textStyle}>{children}</Text> 
               </View>
               <View style={buttonContainer}>
               <TouchableOpacity style={Buttons}  onPress={onAccept}><Text>Yes</Text></TouchableOpacity>
               <TouchableOpacity style={Buttons} onPress={onDecline}><Text>No</Text></TouchableOpacity>  
                
               </View>
           </View>
       </Modal>
       </View>
      
   )
};

const styles = {
    cardSectionStyle:{
justifyContent: 'center',
backgroundColor: '#fff',
padding: 20
    },
    containerStyle:{
      backgroundColor: 'rgba(0, 0, 0,0.75)',
      position: 'relative',
      flex: 1,
      justifyContent: 'center'
    },
    buttonContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    Buttons: {
        backgroundColor: 'grey',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',

    }

};

export {Confirm};
