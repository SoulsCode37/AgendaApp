import React from 'react';
import Modal from "react-native-modal";
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import CustomButton from '../screencomponents/CustomButton';
import PopupComponent from './PopupComponent';

export default class EditPopup extends React.Component {
    render () {
        return (
          <View>
            <Modal isVisible={this.props.isVisible}  onBackdropPress={this.props.toggle}>
              <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 25}}>
                <Text style={{paddingTop: 5, paddingLeft: 15, fontSize: 18, fontWeight: 'bold', paddingBottom: 10}}>Modifica attività</Text>
                <PopupComponent defaultText={this.props.taskDescription} title="Task Description" textStyle={styles.text} inputboxStyle={styles.inputBox}/>
                <PopupComponent defaultText={this.props.activityDescription} title="Activity Description" textStyle={styles.text} inputboxStyle={styles.inputBox}/>

                <View style={{flexDirection: 'row', paddingBottom: 140}}>
                    <PopupComponent defaultText={this.props.taskID} title="TaskID" textStyle={styles.text} inputboxStyle={styles.inputBoxSmall}/>
                    <PopupComponent defaultText={this.props.activityID} title="ActivityID" textStyle={styles.text} inputboxStyle={styles.inputBoxSmall}/>
                    <PopupComponent defaultText={this.props.duration} title="Description" textStyle={styles.text} inputboxStyle={styles.inputBoxSmall}/>
                </View>

                <CustomButton 
                 text="Salva Modifiche"
                 textStyle={styles.loginButtonText}
                 backStyle={styles.loginButton} 
                 onButtonPress={() => alert("Modifiche salvate")}/>
              </View>
            </Modal>
          </View>
        )
      }
}

const styles = StyleSheet.create({
  text: {
    color: '#848383', 
    paddingBottom: 10
  },
  inputBox: {
    width: Dimensions.get('window').width / 2 + 125, height: 100,  
    marginLeft: 10,
    paddingLeft: 15,
    paddingRight: 15,
    color: 'black',
    marginBottom: 20, 
    borderRadius: 15, 
    borderColor: 'white', 
    borderWidth: 2, 
    backgroundColor: '#eae8e8'},
  inputBoxSmall: {
    width: 90,  
    marginLeft: 10,
    paddingLeft: 20,
    paddingRight: 15,
    color: 'black',
    marginBottom: 20, 
    borderRadius: 15, 
    borderColor: 'white', 
    borderWidth: 2, 
    backgroundColor: '#eae8e8'},
  loginButton: {
    backgroundColor: '#079efc',
    marginLeft: 90, 
    marginBottom: 10,
    height: 30, 
    width: 140, 
    borderRadius: 35, 
    },
  loginButtonText: {
    color: 'white',
    fontSize: 15
    },
});