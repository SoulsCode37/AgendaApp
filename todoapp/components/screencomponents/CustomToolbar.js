import React from 'react';
import { Toolbar } from 'react-native-material-ui';

export default class CustomToolbar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Toolbar
            leftElement={'menu'}
            rightElement={{
                actions: ['description', 'layers', 'add'],
                menu: {
                    icon: "more-vert",
                    labels: ["Lunedì precedente", "Lunedì sucessivo"]
                }
            }}
            onLeftElementPress={this.props.onToggleSlide()}
            onRightElementPress={ (e) => { 
                if (e.action === 'layers') {
                   alert("Elementi copiati sul giorno corrente");
                }
            }}
          />
        );
    }
}