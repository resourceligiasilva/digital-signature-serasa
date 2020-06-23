import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

export default class SecondaryButton extends Component {

    render() {
        return (
            <TouchableHighlight
                {...this.props}
                style={[
                    styles.button,
                    this.props.style,
                    {
                        display: this.props.display || 'flex'
                    }
                ]}
            >
                <Text style={styles.buttonText}>
                    {this.props.title}
                </Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        padding: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ffffff'
    }
});