import React, { Component } from 'react'
import { TouchableHighlight, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default class CloseButton extends Component {
    _onPress = () => {
        this.props.navigation.goBack();
    }

    imageSource = () => {
        return require('../assets/white_close_button/white_close_button.png')
    }

    closeButtonStyle = () => {
        return {
            position: 'absolute',
            top: getStatusBarHeight(),
            right: 0,
            padding: 16,
            backgroundColor: 'transparent'
        };
    }

    render() {
        return (
            <TouchableHighlight
                onPress={this._onPress}
                style={[
                    this.props.style,
                    this.closeButtonStyle()
                ]}
                activeOpacity={1}
            >
                <Image
                    source={this.imageSource()}
                    resizeMode='contain'
                    style={{
                        width: 24,
                        height: 24
                    }}
                />
            </TouchableHighlight>
        )
    }
}