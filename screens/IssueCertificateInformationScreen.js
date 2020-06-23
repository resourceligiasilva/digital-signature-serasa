import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableHighlight
} from 'react-native'
import BackgroundImage from '../components/BackgroundImage'

export default class IssueCertificateInformationScreen extends Component {

    goToCreatePassword = () => {
        this.props.navigation.navigate('CreatePasswordScreen')
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.content} >
                    <Text style={styles.title}>
                        Atenção!
                    </Text>
                    <Text style={styles.description}>
                        O próximo passo é o mais importante do
                        processo da sua emissão!
                    </Text>
                    <Text style={styles.description}>
                        Você irá criar a senha de uso, que será usado
                        em todas as operações com o seu certificado.
                    </Text>
                    <Text style={styles.description}>
                        Essa senha não pode ser recuperada, então
                        guarde ela com cuidado.
                    </Text>
                </View>
                <View style={{ flex: 1 }} >
                    <BackgroundImage
                        aspectRatio={0.62}
                        source={require('../assets/blue_men_background/blue_men_background.png')}
                    />
                    <TouchableHighlight
                        style={styles.continueButton}
                        onPress={this.goToCreatePassword}
                    >
                        <Text style={styles.continueButtonText}>
                            Continuar
                        </Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 16,
        backgroundColor: '#04549C'
    },
    content: {
        padding: 16
    },
    title: {
        color: '#ffffff',
        fontSize: 50,
        fontWeight: '100'
    },
    description: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '100',
        textAlign: 'left',
        marginVertical: 8
    },
    backgroundMan: {
        width: '100%'
    },
    continueButton: {
        position: 'absolute',
        left: 16,
        bottom: 16,
        right: 16,
        backgroundColor: '#B82E7C',
        padding: 16,
        borderRadius: 15,
    },
    continueButtonText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ffffff'
    }
});
