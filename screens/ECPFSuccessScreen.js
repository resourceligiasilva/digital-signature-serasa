import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ImageBackground
} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Card from '../components/Card'
import InfoButton from '../components/InfoButton'

import CertificateService from '../services/CertificateService'

export default class ECPFSuccessScreen extends Component {

    state = {
        certificate: {
            name: '',
            expirationDate: ''
        }
    }

    componentWillMount() {
        CertificateService.getCertificate()
            .then(certificate => { this.setState({ certificate }) })
    }

    goToMobileDesktopInfo = () => {
        this.props.navigation.navigate('MobileDesktopInfoScreen')
    }

    render() {
        return (
            <ImageBackground
                source={require('../assets/background_2/background_2.png')}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.contentView}>
                        <Text style={styles.title}>Parabéns!</Text>
                        <View>
                            <Text style={styles.subtitle}>Seu e-CPF foi emitido com sucesso!</Text>
                            <Card
                                name='Franciely Ap Ch Correa'
                                expirationDate='06/2023'
                            />
                        </View>
                        <View>
                            <PrimaryButton
                                title='Continuar'
                                onPress={this.goToMobileDesktopInfo}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 50,
        fontWeight: '300',
        color: '#1D4F91',
        marginTop: 16
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#444B58',
        textAlign: 'center',

    }
});
