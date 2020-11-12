import React, { Component } from 'react'
import { Alert, View, SafeAreaView } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import BackgroundImage from '../components/BackgroundImage'
import DialogInput from 'react-native-dialog-input'

export default class MobileDesktopInfoScreen extends Component {

    state = {
        isDialogVisible: false,
        email: ''
    }

    goToECPFInfo = () => {
        this.props.navigation.navigate('ECPFInfoScreen')
    }

    showDialog = (isDialogVisible) => {
        this.setState({ isDialogVisible })
    }

    changeEmail = (email) => {
        this.setState({
            email,
            isDialogVisible: false
        })
        this.goToECPFInfo()
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#04549C' }}>
                <BackgroundImage
                    aspectRatio={0.5018181818}
                    source={require('../assets//blue_men_background_2/blue_men_background_2.png')}
                />
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        padding: 16
                    }}>
                        <SecondaryButton
                            style={{ marginBottom: 16 }}
                            title='Já tenho o programa instalado'
                            onPress={this.goToECPFInfo}
                        />
                        <PrimaryButton
                            title='Enviar programa via e-mail'
                            onPress={() => { this.showDialog(true) }}
                        />
                    </View>
                </SafeAreaView>
                <DialogInput isDialogVisible={this.state.isDialogVisible}
                    title={"Insira o seu e-mail"}
                    hintInput={"E-mail"}
                    submitText={'Enviar'}
                    cancelText={'Voltar'}
                    submitInput={(email) => { this.changeEmail(email) }}
                    closeDialog={() => { this.showDialog(false) }}>
                </DialogInput>
            </View>
        )
    }
}
