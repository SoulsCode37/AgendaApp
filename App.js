import React from 'react';
import { StatusBar } from 'react-native';
import ScreenNavigator from './todoapp/components/navigation/ScreenNavigator';

// x Daniel, Tutti i componenti esterni:
// Popup: https://github.com/react-native-community/react-native-modal
// Agenda: https://github.com/wix/react-native-calendars
// Toolbar: https://github.com/xotahal/react-native-material-ui/blob/master/docs/Toolbar.md
// Side menu: https://github.com/react-native-community/react-native-side-menu
// Navigation: https://facebook.github.io/react-native/docs/navigation

export default class App extends React.Component {
  constructor() {
    super();
    
    init();
  }

  render() {
    return (
      <ScreenNavigator></ScreenNavigator>
    );
  }
}

function init() {
  StatusBar.setHidden(true);
}