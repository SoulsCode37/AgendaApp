import React from 'react';
import { Text, View, TextInput } from 'react-native';

export default class PopupComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            valueText: this.props.defaultText + ""
        }
    }

    render() {
        return (
            <View>
                <Text style={[this.props.textStyle, {paddingLeft: 15}]}>{this.props.title}</Text>
                <TextInput multiline={true} style={this.props.inputboxStyle} value={this.state.valueText} onChangeText={(text) => this.setState({valueText: text})}/>
            </View>
        );
    }
}