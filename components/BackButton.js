import React, { Component } from 'react'
import { TouchableHighlight, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default class BackButton extends Component {
    _onPress = () => {
        this.props.navigation.goBack();
    }

    imageSource = () => {
        if (this.props.blue === true) {
            return require('../assets/blue_back_button/blue_back_button.png')
        }
        return require('../assets/white_back_button/white_back_button.png')
    }

    backButtonStyle = () => {
        return {
            position: 'absolute',
            top: getStatusBarHeight(),
            left: 0,
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
                    this.backButtonStyle()
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