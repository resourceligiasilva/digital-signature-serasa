import React, { Component } from 'react'
import {
    Image,
    Dimensions
} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const screenWidth = Math.round(Dimensions.get('window').width)

export default class TopBackgroundImage extends Component {

    topImageStyle = () => {
        console.log('screenWidth: ', screenWidth)
        let componentAspectRatio = 2.66
        let componentHeight = screenWidth / componentAspectRatio
        let imageAspectRatio = 0.7389
        let imageHeight = screenWidth / imageAspectRatio
        let imageTop = -(imageHeight - componentHeight - getStatusBarHeight())

        return {
            position: 'absolute',
            top: imageTop,
            left: 0,
            width: screenWidth,
            height: imageHeight
        }
    }

    render() {
        return (
            <Image
                source={require('../assets/blue_rounded_square_top/blue_rounded_square_top.png')}
                style={this.topImageStyle()}
                resizeMode='contain'
            />
        )
    }
}