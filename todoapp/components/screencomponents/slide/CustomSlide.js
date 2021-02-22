import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SlideHeader from './SlideHeader';
import SlideBody from './SlideBody';

//079efc
export default class CustomSlide extends React.Component {
    render() {
        return (
            <View style={styles.back}>
                <SlideHeader/>
                <SlideBody/>
            </View>
        );
    }
}

const fixedDimensions = Dimensions.get('window').width;

const styles = StyleSheet.create({
    back: {
        backgroundColor: '#464749',
        height: Dimensions.get('window').height,
        width: fixedDimensions,
        flexDirection: 'column'
    }
});