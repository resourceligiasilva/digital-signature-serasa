import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

export default class PrimaryButton extends Component {

    render() {
        return (
            <TouchableHighlight
                style={[
                    styles.button,
                    {
                        display: this.props.display || 'flex'
                    }
                ]}
                {...this.props}
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
        backgroundColor: '#af1685',
        padding: 16,
        borderRadius: 15,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ffffff'
    }
});