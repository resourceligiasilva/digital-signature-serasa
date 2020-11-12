import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    ImageBackground,
    KeyboardAvoidingView, TouchableHighlight, Platform
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
                <View style={styles.navigation}>
                    <Text> Crie sua senha</Text>
                 </View>

                <KeyboardAvoidingView
                    behavior={Platform.OS=='ios'?'padding':null}
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
                                keyboardType='numeric'
                            />
                            <TextInput
                                style={[
                                    styles.textInputPass,
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
                                keyboardType='numeric'
                            />
                        </View>
                    </ScrollView>
                    <SafeAreaView>

                        <TouchableHighlight
                            style={styles.emitButton}
                            display={this.state.issueCertificateDisplay}
                            onPress={this.createPasswordAction}
                        >
                            <Text style={styles.emitButtonText}>
                                Emitir Certificado
                            </Text>
                        </TouchableHighlight>
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
        flex: 1,
        width:'100%',
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
        justifyContent: 'center',
        marginBottom: 10,
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
        borderRadius: 10,
        backgroundColor: 'transparent',
        padding: 10,
        color: '#444B58',
        borderWidth: 1,
        borderColor: '#e0e0e1',
        marginBottom:10,
    },
    textInputPass: {
        borderRadius: 10,
        backgroundColor: 'transparent',
        padding: 10,
        color: '#444B58',
        borderWidth: 1,
        borderColor: '#e0e0e1',
        marginBottom:30,
    },
    navigation: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent:'center',
        top:0,
    },
    emitButton: {
        position: 'absolute',
        left: 16,
        bottom: 16,
        right: 16,
        backgroundColor: '#B82E7C',
        padding: 16,
        borderRadius: 15,
        marginTop: 16,
        color: '#ffffff',

    },
    emitButtonText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ffffff'
    }
});
