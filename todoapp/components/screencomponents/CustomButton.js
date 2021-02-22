import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class CustomButton extends React.Component {
    render(){
        return (
            <View>
                <TouchableOpacity  activeOpacity={0.5}  onPress={this.props.onButtonPress} >
                 <View style={[this.props.backStyle,  {justifyContent: 'center', alignItems: 'center'}]}>
                   <Text style={this.props.textStyle}>{this.props.text}</Text>
                 </View>
                </TouchableOpacity>
            </View>
        );
    }
}