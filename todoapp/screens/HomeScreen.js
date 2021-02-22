import React from 'react';
import CustomAgenda from '../components/screencomponents/agenda/CustomAgenda';
import CustomToolbar from '../components/screencomponents/CustomToolbar';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import SideMenu from 'react-native-side-menu';
import CustomSlide from '../components/screencomponents/slide/CustomSlide';
import SelectionHandler from '../other/SelectionHandler';
import AgendaTools from '../other/AgendaService';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            slideOpen: false
        }

        this.selectionHandler = new SelectionHandler();
        this.agendaTools = new AgendaTools();
    }
    
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.back}>
              <SideMenu isOpen={this.state.slideOpen} openMenuOffset={Dimensions.get('window').height / 2 - 40} bounceBackOnOverdraw={true} menu={<CustomSlide />}>
                <CustomToolbar agendaTools={this.agendaTools} selectionHandler={this.selectionHandler} onToggleSlide={() => this.handleToggleSlide.bind(this)}/>
                <CustomAgenda agendaTools={this.agendaTools} selectionHandler={this.selectionHandler}/>
              </SideMenu>
            </View>
        );
    }

    handleToggleSlide() {
        this.setState({ slideOpen: true});
    }
}
const styles = StyleSheet.create({
    back: {
        height: Dimensions.get('window').height,
    }
});