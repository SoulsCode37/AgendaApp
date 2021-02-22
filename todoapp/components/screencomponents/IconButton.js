import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-material-ui';
import PropTypes from 'prop-types'

export default class ImageButton extends React.Component {
    render() {
        return ( 
            <View>
                <TouchableOpacity  activeOpacity={0.5}  onPress={this.props.onImagePress} >
                 <View style={[this.props.extraStyle, this.props.customStyle,  {justifyContent: 'center', alignItems: 'center'}]}>
                    <Icon size={this.props.size} name={this.props.imageName} color={this.props.color} />
                 </View>
                </TouchableOpacity>
            </View>
        );
    }
}

ImageButton.propTypes = {
    imageName: PropTypes.string.isRequired,
    onImagePress: PropTypes.func,
    color: PropTypes.string,
    customStyle: PropTypes.object,
    extraStyle: PropTypes.object
}

ImageButton.defaultProps = {
    onImagePress: () => {console.log("Default icon press")},
    color: 'white',
    extraStyle: {},
    customStyle: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 2,
    }
}