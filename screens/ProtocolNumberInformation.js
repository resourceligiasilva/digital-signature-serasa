import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from 'react-native'
import BottomButton from '../components/BottomButton'

const screenWidth = Math.round(Dimensions.get('window').width)

export default class ProtocolNumberInformation extends Component {
    goBack = () => {
        this.props.navigation.goBack();
    }

    topImageStyle = () => {
        return {
            width: screenWidth,
            height: screenWidth / 2.36
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={this.topImageStyle()}
                    source={require('../assets/blue_square_top/blue_square_top.png')}
                    resizeMode='contain'
                />
                <SafeAreaView style={styles.contentView}>
                    <Text style={styles.title}>
                        Como encontrar o nº de protocolo?
                        </Text>
                    <Text style={styles.description}>
                        Você pode encontrá-lo tanto no termo de titularidade que você recebeu no ponto de atendimento quanto em seu e-mail de confirmação de compra.
                        </Text>
                    <Image
                        style={styles.infoImage}
                        source={require('../assets/protocol_number_information/protocol_number_information.png')}
                        resizeMode='contain'
                    />
                    <BottomButton
                        title='Voltar'
                        onPress={this.goBack}
                    />
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    contentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginVertical: 16,
        fontSize: 16,
        color: '#454C59',
        paddingHorizontal: 32
    },
    description: {
        fontSize: 14,
        textAlign: 'left',
        width: '100%',
        color: '#454C59',
        paddingHorizontal: 32
    },
    infoImage: {
        flex: 1,
        marginVertical: 16,
        paddingHorizontal: 32
    }
});