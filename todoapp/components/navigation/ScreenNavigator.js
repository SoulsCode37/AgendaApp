import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';

const Navigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen }
},
{
  initialRouteName: "Login"
}
);

const Container = createAppContainer(Navigator);

export default class ScreenNavigator extends React.Component {
    render() {
        return (<Container/>);
    }
}

