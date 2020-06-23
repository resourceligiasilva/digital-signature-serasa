import React, { Component } from 'react'
import { Image, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width)

export default class BackgroundImage extends Component {

    imageStyle = () => {
        return {
            position: 'absolute',
            left: 0,
            width: screenWidth,
            height: screenWidth / this.props.aspectRatio
        }
    }

    imagePositionAlign = () => {
        if (this.props.isBottomAlign === true) {
            return { bottom: 0 }
        }
        return { top: 0 }
    }

    render() {
        return (
            <Image
                style={[
                    this.imageStyle(),
                    this.imagePositionAlign()
                ]}
                source={this.props.source}
                resizeMode='cover'
            />
        )
    }
}
