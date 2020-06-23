import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    ImageBackground,
    KeyboardAvoidingView
} from 'react-native'
import BackButton from '../components/BackButton'
import BottomButton from '../components/BottomButton'

import CertificateService from '../services/CertificateService'

export default class CreatePasswordScreen extends Component {

    state = {
        password: '',
        confirmPassword: '',
        issueCertificateDisplay: 'none',
        enableEditable: false
    }

    onChangePassword = (password) => {
        this.setState(() => (
            {
                password,
                enableEditable: password !== ''
            }
        ))
        this.checkPasswords(password, this.state.confirmPassword)
    }

    onChangeConfirmPassword = (confirmPassword) => {
        this.setState(() => (
            { confirmPassword }
        ))
        this.checkPasswords(this.state.password, confirmPassword)
    }

    checkPasswords = (password, confirmPassword) => {
        let isValidPassword = (
            password !== ''
            && confirmPassword !== ''
            && password === confirmPassword
        )
        this.setState(() => (
            {
                issueCertificateDisplay: isValidPassword ? 'flex' : 'none'
            }
        ))
    }

    createPasswordAction = () => {
        CertificateService.createPassword(this.state.password)
            .then((response) => {
                if (!response) { return }
                this.props.navigation.navigate('ECPFSuccessScreen')
            })
    }

    render() {
        return (
            <ImageBackground
                source={require('../assets/background_1/background_1.png')}
                style={styles.container}
            >
                <KeyboardAvoidingView
                    behavior={'padding'}
                    style={styles.container}
                >
                    <ScrollView contentContainerStyle={styles.scrollView}>
                        <View
                            source={require('../assets/background_1/background_1.png')}
                            style={styles.scrollViewContent}
                        >
                            <View style={styles.titleView}>
                                <Text style={styles.titleText}> Crie a sua</Text>
                                <Text style={[
                                    styles.titleText,
                                    { fontWeight: "bold" }
                                ]}> senha de uso</Text>
                            </View>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={text => this.onChangePassword(text)}
                                value={this.state.password}
                                placeholder='Crie sua senha'
                                autoCompleteType='password'
                                secureTextEntry={true}
                            />
                            <TextInput
                                style={[
                                    styles.textInput,
                                    {
                                        opacity: this.state.enableEditable ? 1 : 0.3
                                    }
                                ]}
                                onChangeText={text => this.onChangeConfirmPassword(text)}
                                value={this.state.confirmPassword}
                                placeholder='Confirme a sua senha'
                                autoCompleteType='password'
                                secureTextEntry={true}
                                editable={this.state.enableEditable}
                            />
                        </View>
                    </ScrollView>
                    <SafeAreaView>
                        <BottomButton
                            title='Emitir ertificado'
                            display={this.state.issueCertificateDisplay}
                            onPress={this.createPasswordAction}
                        />
                    </SafeAreaView>
                </KeyboardAvoidingView>
                <BackButton
                    blue={true}
                    navigation={this.props.navigation}
                />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
    titleView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleText: {
        textAlign: 'center',
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
        marginVertical: 8,
        color: '#9198A5'
    }
});
