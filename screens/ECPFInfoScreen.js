import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native'
import BackgroundImage from '../components/BackgroundImage'
import LocalStorageHelper from '../helpers/LocalStorageHelper'

export default class ECPFInfoScreen extends Component {

    goToHome = () => {
        this.props.navigation.navigate('HomeScreen')
    }

    saveCertificate = () => {
        LocalStorageHelper.saveCertificate();
    }

    componentDidMount() {
        this.saveCertificate()
    }

    render() {
        return (
            <View style={styles.container}>
                <BackgroundImage
                    aspectRatio={0.4922711058}
                    source={require('../assets/eCPF_background/eCPF_background.png')}
                />
                <SafeAreaView>
                    <TouchableHighlight
                        onPress={this.goToHome}
                    >
                        <Text style={styles.bottomButtonTitle}>
                            Ir para a Carteira
                        </Text>
                    </TouchableHighlight>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 32,
        backgroundColor: '#982881'
    },
    bottomButtonTitle: {
        fontSize: 16,
        fontWeight: '300',
        color: '#ffffff'
    }
})
