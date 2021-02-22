import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Agenda} from 'react-native-calendars';
import AgendaTask from './AgendaTask';

export default class AgendaScreen extends Component {

  render() {
    return (
      <Agenda
        items={this.props.agendaTools.items}
        selected={'2017-09-01'}
        loadItemsForMonth={this.props.agendaTools.loadDays()}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        onDayChange={(day)=>{this.handleDayChange(day)}}
      />
    );
  }
  
  handleDayChange(day) {
    this.props.agendaTools.currentDay = day.dateString;
  }

  renderItem(item) {
    return (
      <AgendaTask 
        onSelect={() => this.handleSelect(item)} 
        onDeselect={() => this.handleDeselect(item)} 
        activityId={item.ActivityId}
        taskId={item.TaskId}
        text={item.TaskDescription}
        subText={item.JobDescription}
        duration={item.Duration} />
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>Niente da fare qua</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }



  handleDeselect(item) {
   this.props.selectionHandler.removeSelectedItem(item);
  }

  handleSelect(item) {
  this.props.selectionHandler.addSelectedItem(item);
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});