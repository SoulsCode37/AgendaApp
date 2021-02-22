import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import IconButton from '../IconButton';
import PropTypes from 'prop-types'

export default class SlideComponent extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onComponentPress}  style={styles.back} activeOpacity={0.5}>
               <IconButton onImagePress={this.props.onComponentPress} color="#079efc" imageName={this.props.icon} />
               <Text style={{color: 'white', marginTop: 3}}>
                   {this.props.text}
               </Text>
            </TouchableOpacity>
        );
    }
}

SlideComponent.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onComponentPress: PropTypes.func,
}

SlideComponent.defaultProps = {
    onComponentPress: () => {alert("Default")},
}

const styles = StyleSheet.create({
    back: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 10,
    }
});