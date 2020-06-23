import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View {...this.props}>
                <Image
                    style={{
                        width: '100%'
                    }}
                    source={require('../assets/eCPF_card/eCPF_card.png')}
                    resizeMode='contain'
                />
                <View style={styles.cardContentView}>
                    <View>
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
                            <Text style={styles.cardTexts}>{this.props.name}</Text>
                            <Text style={styles.cardTexts}>{this.props.expirationDate}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    }
});

