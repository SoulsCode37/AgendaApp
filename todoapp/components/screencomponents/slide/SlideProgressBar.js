import React from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';

export default class SlideProgressBar extends React.Component {
    render () {
        return (
            <View style={{paddingLeft: 20, paddingTop: 20}}>
                <Text style={{color: 'white', paddingBottom: 10}}>{this.props.statusTitle}</Text>
                <Progress.Bar borderColor='white' color='white' progress={0.3} width={200} />
            </View>
        );
    }
}