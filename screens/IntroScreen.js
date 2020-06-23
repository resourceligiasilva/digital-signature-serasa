import React, { Component } from 'react'
import {
    ImageBackground,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

export default class IntroScreen extends Component {

    goToIssueCertificateScreen = () => {
        this.props.navigation.navigate('IssueCertificate');
    }

    render() {
        return (
            <ImageBackground source={require('../assets/purple_rounded_square_background/purple_rounded_square_background.png')} style={styles.container}>
                <Text style={styles.containerItem}>O que você deseja fazer?</Text>
                <TouchableHighlight
                    style={[styles.button, styles.containerItem]}
                    onPress={this.goToIssueCertificateScreen}
                >
                    <Text style={styles.buttonText}>Emitir certificado</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.button, styles.containerItem]}
                    onPress={this.goToIssueCertificateScreen}
                >
                    <Text style={styles.buttonText}>Importar certificado</Text>
                </TouchableHighlight>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32
    },
    containerItem: {
        marginVertical: 8
    },
    button: {
        width: '100%',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        padding: 16
    },
    buttonText: {
        fontSize: 16,
        color: '#04549C'
    }
});