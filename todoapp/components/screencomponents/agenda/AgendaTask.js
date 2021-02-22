import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import IconButton from '../IconButton';
import PropTypes from 'prop-types'
import EditPopup from '../EditPopup';

export default class AgendaTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            color: 'white',
            editVisible: false
        }
    }
 
    handleLongPress() {
        if(!this.state.selected) {
            this.setState({selected: true, color: '#a3dbff'});
            this.props.onSelect();
        }
    }

    handlePress() {
        if(this.state.selected) {
            this.setState({selected: false, color: 'white'});
            this.props.onDeselect();
        }
    }

    render() {
    
        return (
            <View>
                <EditPopup taskID={this.props.taskId} activityID={this.props.activityId} taskDescription={this.props.text} activityDescription={this.props.subText} duration={this.props.duration} isVisible={this.state.editVisible} toggle={() => this.toggleEdit()}></EditPopup>
                <View style={{flex: 1, flexDirection: 'row'}}> 
                    <IconButton color='#079efc' onImagePress={() => this.toggleEdit()} imageName='edit' extraStyle={{paddingLeft: Dimensions.get('window').width / 2 + 25}}/>
                    <IconButton color='#079efc' onImagePress={this.props.onDeletePress} imageName='delete' />
                </View>
                <TouchableOpacity onPress={() => this.handlePress()} onLongPress={() => this.handleLongPress()} activeOpacity={0.5}>
                  <View style={[styles.item, { backgroundColor: this.state.color}]}>
                    <Text style={{color: '#909396'}}>
                       ActivityID {this.props.activityId}  TaskID {this.props.taskId} Duration {this.props.duration}h
                    </Text>
                    <Text style={{color: '#dee1e5', paddingTop: 10}}>
                        Task Description
                    </Text>
                    <Text style={{paddingLeft: 20}}>
                      {this.props.text}
                    </Text>
                    <Text style={{color: '#dee1e5', paddingTop: 10}}>
                        Job Description
                    </Text>
                    <Text style={{paddingLeft: 20}}>
                      {this.props.subText}
                    </Text>
                  </View>
                </TouchableOpacity>
            </View>
        );
    }

    toggleEdit() {
        this.setState({ editVisible: !this.state.editVisible });
    }
}

AgendaTask.propTypes = {
    text: PropTypes.string.isRequired,
    onDeletePress: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func
}

AgendaTask.defaultProps = {
    onDeletePress: () => {},
    onSelect: () => {},
    onDeselect: () => {}
}

const styles = StyleSheet.create({
    item: {
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 2
    },
});