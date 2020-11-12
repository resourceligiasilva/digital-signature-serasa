import React, { Component, useEffect } from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableHighlight,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import BackButton from '../components/BackButton'
import BottomButton from '../components/BottomButton'
import TopBackgroundImage from '../components/TopBackgroundImage'
import InfoButton from '../components/InfoButton'
import BackgroundImage from '../components/BackgroundImage'

import CertificateService from '../services/CertificateService'

export default class IssueCertificateScreen extends Component {

    state = {
        protocol: '',
        password: ''
    }

    goToProtocolNumberInformation = () => {
        this.props.navigation.navigate('ProtocolNumberInformation')
    }

    goToPasswordInformationScreen = () => {
        this.props.navigation.navigate('PasswordInformationScreen')
    }

    issueCertificateAction = () => {
        CertificateService.issueCertificate(this.state.protocol, this.state.password)
            .then((response) => {
                if (!response) { return }
                this.props.navigation.navigate('IssueCertificateInformationScreen')
            })
    }


    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS=='ios'?'padding':null}
                style={styles.safeArea}
            >
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <TopBackgroundImage />
                    <View style={styles.scrollViewContent}>
                        <Text style={styles.containerItem}>
                            Insira o protocolo e senha que você recebeu quando foi em um ponto de atendimento
                        </Text>
                        <TextInput
                            style={[styles.textInput, styles.containerItem]}
                            placeholder='00000XXXXXXXXXX'
                            onChangeText={protocol => this.setState({ protocol })}
                            value={this.state.protocol}
                        />
                        <TextInput
                            style={[styles.textInput, styles.containerItem]}
                            placeholder='0000000'
                            keyboardType='numeric'
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />
                    </View>
                </ScrollView>
                <SafeAreaView>
                    <TouchableHighlight
                        style={styles.continueButton}
                        onPress={this.issueCertificateAction}
                    >
                        <Text style={styles.continueButtonText}>
                            Continuar
                        </Text>
                    </TouchableHighlight>
                </SafeAreaView>
                <BackButton navigation={this.props.navigation} />
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '32%',
        paddingHorizontal: '5%',
    },
    scrollViewContent: {
        width: '100%'
    },
    containerItem: {
        marginVertical: 8,
        color: '#444B58'
    },
    containerSubItem: {
        marginVertical: 8,
        width: '100%'
    },
    containerSubItemText: {
        color: '#444B58',
        fontSize: 12,
        textAlign: 'left'
    },
    textInput: {
        borderRadius: 10,
        backgroundColor: 'transparent',
        padding: 10,
        color: '#444B58',
        borderWidth: 1,
        borderColor: '#e0e0e1'
    },
    continueButton: {
        position: 'absolute',
        left: 16,
        bottom: 16,
        right: 16,
        backgroundColor: '#B82E7C',
        padding: 16,
        borderRadius: 15,
        marginTop: 16,
    },
    continueButtonText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ffffff'
    }
});
