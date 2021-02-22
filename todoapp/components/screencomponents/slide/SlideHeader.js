import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import IconButton from '../IconButton';

export default class SlideHeader extends React.Component {
    render() {
        return (
            <View style={styles.header}>
               <IconButton color='white' extraStyle={{paddingTop: 26}} size={55} imageName='account-circle'></IconButton>
               <Text style={styles.headerText}>admin</Text>
               <Text style={{color: 'white', top: 28, right: 44}}>Example Lower text</Text>
            </View>
        );
    }
}

const fixedDimensions = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headerText: {
        color: 'white', 
        fontSize: 18, 
        marginLeft: 5, 
        marginTop: 10, 
        fontWeight: 'bold'
    },
    header: {
        height: 55,
        width: fixedDimensions ,
        flexDirection: 'row',
        backgroundColor: '#464749',
    }
});