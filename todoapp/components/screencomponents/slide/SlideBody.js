import React from 'react';
import SlideProgressBar from '../slide/SlideProgressBar';
import { Text, View, Dimensions } from 'react-native';
import SlideComponent from './SlideComponent';

// Idk
const version = 0.1;

export default class SlideBody extends React.Component {
    render () {
        return (
            <View>
                <SlideProgressBar statusTitle='Weekly status'/>
               
                <SlideComponent onComponentPress={() => alert("Settings pressed")} text="Settings" icon="settings" />
                <SlideComponent onComponentPress={() => alert("Example pressed")} text="Example componenet" icon="assignment" />
                <SlideComponent onComponentPress={() => alert("Help pressed")} text="Help" icon="help" />
                <SlideComponent onComponentPress={() => alert("Logout pressed")} text="Logout" icon="exit-to-app" />
                <Text style={{color: 'white', paddingLeft: 5, paddingTop: Dimensions.get('window').height / 3 + 120}}>Version {version}</Text>
            </View>
        );
    }
}