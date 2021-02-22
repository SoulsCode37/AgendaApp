import React from 'react';
import { View, StyleSheet, TextInput, Dimensions, Text } from 'react-native';
import CustomButton from '../components/screencomponents/CustomButton';
import Authentication from '../login/Authentication';
import { StackActions, NavigationActions } from 'react-navigation';

const version = 0.1;

export default class LoginScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            text: 'admin',
            resultText: 'Development Mode'
        }
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.back}>
                <Text style={styles.title}>TODO App</Text>
                <TextInput autoCapitalize = 'none' caretHidden={true} placeholder="Nome Utente" value={this.state.text} style={styles.textInput} onChangeText={(text) => this.updateText(text)}/>
                <CustomButton 
                 text="Accesso"
                 textStyle={styles.loginButtonText}
                 backStyle={styles.loginButton} 
                 onButtonPress={this.handleButtonPress.bind(this)}/>
                <Text style={[styles.smallText, {marginLeft: 125}]}>{this.state.resultText}</Text>
                <Text style={styles.smallText}>Version {version}</Text>
            </View>
        );
    }

    updateText(text) {
        this.setState({text: text, resultText: ''});
    }

    handleButtonPress() {
        var authentication = new Authentication(this.state.text);
        var result = authentication.authenticate();
        if(result.result == 1)
        this.resetNavigation('Home', this.props.navigation);
        this.setState({resultText: result.getMessage()});
    }

    resetNavigation(target, navigation) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: target }),
            ],
          });
          navigation.dispatch(resetAction);
    }
}

const styles = StyleSheet.create({
    smallText: {
        color: 'white',
        fontSize: 14,
        marginLeft: 5,
        marginBottom: Dimensions.get('window').height / 2 - 50,
    },
    title: {
        margin: 100,
        marginRight: 0,
        marginBottom: 80,
        marginLeft: 100,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    back: {
        backgroundColor: '#191a1c',
        height: Dimensions.get('window').height
    },
    textInput: {
        paddingLeft: 15,
        color: 'white',
        marginBottom: 30, 
        marginLeft: 70, 
        height: 40, 
        width: 230, 
        borderRadius: 25, 
        borderColor: 'white', 
        borderWidth: 2, 
        backgroundColor: '#191a1c',
    },
    loginButton: {
        backgroundColor: '#588fe8',
        marginLeft: 110, 
        marginBottom: 10,
        height: 30, 
        width: 140, 
        borderRadius: 35, 
    },
    loginButtonText: {
        color: 'white',
        fontSize: 15
    },
});