import React, { Component } from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class InfoButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={[
                    styles.containerSubItem,
                    this.props.style
                ]}
                onPress={this.props.onPress}
            >
                <Text style={[
                    styles.containerSubItemText,
                    {
                        textAlign: this.props.textAlign || 'left'
                    }
                ]}>
                    {this.props.title}
                </Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    containerSubItem: {
        marginVertical: 8,
        width: '100%'
    },
    containerSubItemText: {
        color: '#444B58',
        fontSize: 12,
        textAlign: 'left'
    }
});