import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

export default class BottomButton extends Component {

    render() {
        return (
            <TouchableHighlight
                style={[
                    styles.backButton,
                    {
                        display: this.props.display || 'flex'
                    }
                ]}
                {...this.props}
            >
                <Text style={styles.backButtonText}>
                    {this.props.title}
                </Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    backButton: {
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#9198A5',
        padding: 16
    },
    backButtonText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#04549C'
    }
});