import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableHighlight,
    KeyboardAvoidingView
} from 'react-native'
import BackButton from '../components/BackButton'
import BottomButton from '../components/BottomButton'
import TopBackgroundImage from '../components/TopBackgroundImage'
import InfoButton from '../components/InfoButton'

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
                behavior={'padding'}
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
                        <InfoButton
                            title='Aonde encontrar o nº de protocolo? >'
                            onPress={this.goToProtocolNumberInformation}
                        />
                        <TextInput
                            style={[styles.textInput, styles.containerItem]}
                            placeholder='0000000'
                            keyboardType='numeric'
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />
                        <InfoButton
                            title='Aonde encontrar essa senha? >'
                            onPress={this.goToPasswordInformationScreen}
                        />
                    </View>
                </ScrollView>
                <SafeAreaView>
                    <BottomButton
                        title='Continuar'
                        onPress={this.issueCertificateAction}
                    />
                </SafeAreaView>
                <BackButton navigation={this.props.navigation} />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
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
        borderRadius: 5,
        backgroundColor: '#F4F7FA',
        padding: 16,
        color: '#444B58'
    }
});
