import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableHighlight
} from 'react-native'
import Card from '../components/Card'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        origin: 'Adobe',
        device: 'iOS 5s',
        date: '23/07/2019',
        time: '20:00'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        origin: 'Adobe',
        device: 'iOS 5s',
        date: '23/07/2019',
        time: '20:00'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        origin: 'Adobe',
        device: 'iOS 5s',
        date: '23/07/2019',
        time: '20:00'
    },
];

export default class HomeScreen extends Component {

    state = {
        dataSource: DATA
    }

    goToIssueNewCertificate = () => {
        this.props.navigation.navigate('IssueNewCertificateScreen')
    }

    goToCertificateDetails = () => {
        this.props.navigation.navigate('CertificateDetailsScreen')
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={styles.contentView}>
                            <View>
                                <Text style={styles.title}>Olá Franciely!</Text>
                                <Text style={styles.subtitle}>Agora você pode assinar qualquer tipo
de documentos em 1 só clique!</Text>
                            </View>
                            <TouchableHighlight
                                onPress={this.goToCertificateDetails}
                            >
                                <Card
                                    name='Franciely Ap Ch Correa'
                                    expirationDate='06/2023'
                                />
                            </TouchableHighlight>
                            <Text style={styles.historicTitle}>Histórico de uso</Text>
                            <FlatList
                                data={this.state.dataSource}
                                renderItem={({ item }) => <HistoricItem item={item} />}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </SafeAreaView>
                </ScrollView>
                <View style={styles.bottomView}>
                    <SafeAreaView>
                        <TouchableHighlight
                            style={styles.plusButton}
                            onPress={this.goToIssueNewCertificate}
                        >
                            <Image
                                source={require('../assets/plus_button/plus_button.png')}
                                resizeMode='contain'
                            />
                        </TouchableHighlight>
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}

function HistoricItem({ item }) {
    return (
        <View>
            <View style={styles.historicItem}>
                <Text style={[styles.historicItemText, { fontWeight: '400', marginBottom: 4 }]}>Assinatura via Aplicação</Text>
                <Text style={[styles.historicItemText, { fontWeight: '400', marginBottom: 4 }]}>{item.date}</Text>
            </View>
            <View style={styles.historicItem}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.historicItemText}>Origem:</Text>
                    <Text style={[styles.historicItemText, { color: '#04549C' }]}> {item.origin}</Text>
                </View>
            </View>
            <View style={styles.historicItem}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.historicItemText}>Dispositivo:</Text>
                    <Text style={[styles.historicItemText, { color: '#04549C' }]}> {item.device}</Text>
                </View>
                <Text style={styles.historicItemText}>{item.time}</Text>
            </View>
            <View style={styles.historicSeparetor} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EFF4'
    },
    contentView: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 50,
        fontWeight: '300',
        color: '#04549C'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '300',
        marginVertical: 16,
        color: '#444B58'
    },
    historicTitle: {
        fontSize: 16,
        fontWeight: '300',
        marginVertical: 32,
        color: '#04549C'
    },
    historicItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    historicItemText: {
        fontWeight: '300',
        fontSize: 12,
        color: '#444B58'
    },
    historicSeparetor: {
        width: '100%',
        height: 1,
        backgroundColor: '#CCCCCC',
        marginBottom: 16
    },
    bottomView: {
        height: 64,
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.16,
        shadowRadius: 10,
        elevation: 1
    },
    plusButton: {
        height: '100%',
        marginTop: -32
    }
});
