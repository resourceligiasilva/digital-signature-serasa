import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Switch,
    StyleSheet
} from 'react-native'
import CloseButton from '../components/CloseButton'

export default class CertificateDetailsScreen extends Component {

    state = {
        isNotificationEnabled: true
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        source={require('../assets/eCPF_card_background/eCPF_card_background.png')}
                        resizeMode='cover'
                    />
                    <View style={styles.cardContentView}>
                        <Image source={require('../assets/white_logo/white_logo.png')} />
                        <View style={styles.cardTitles}>
                            <Text style={[
                                styles.cardTexts,
                                { fontSize: 32, fontWeight: '400' }
                            ]}>e-CPF</Text>
                            <Text style={[
                                styles.cardTexts,
                                { fontWeight: '400' }
                            ]}>Validade</Text>
                        </View>
                        <View style={styles.cardTitles}>
                            <Text style={styles.cardTexts}>Franciely Ap Ch Correa</Text>
                            <Text style={styles.cardTexts}>06/2023</Text>
                        </View>
                        <CloseButton navigation={this.props.navigation} />
                    </View>
                </View>
                <View style={styles.contentView}>
                    <View style={styles.sectionView}>
                        <Text>Notificação</Text>
                        <Switch
                            value={this.state.isNotificationEnabled}
                            onValueChange={(isNotificationEnabled) => this.setState({ isNotificationEnabled })}
                        />
                    </View>
                    <Text style={styles.notificationInfo}>
                        As notificações ligadas são importantes para o uso do certificado digital de forma mais rápida.
                    </Text>
                    <View style={styles.sectionView}>
                        <Text style={{ color: '#FF0D18' }}>Excluir certificado</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EFF4'
    },
    contentView: {
        padding: 16
    },
    cardContentView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        padding: 24
    },
    cardTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 4
    },
    cardTexts: {
        color: 'white',
        fontSize: 16,
        fontWeight: '300'
    },
    sectionView: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    notificationInfo: {
        textAlign: 'center',
        fontSize: 15,
        color: '#848388',
        marginBottom: 8
    }
});