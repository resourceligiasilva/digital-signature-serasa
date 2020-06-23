import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import BackgroundImage from '../components/BackgroundImage'
import Swiper from 'react-native-swiper'
import LocalStorageHelper from '../helpers/LocalStorageHelper';

export default class TutorialScreen extends Component {
    componentDidMount() {
        LocalStorageHelper.saveFirstAccess()
    }

    goToIntro = () => {
        this.props.navigation.navigate('Intro')
    }

    render() {
        return (
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                paginationStyle={styles.paginationView}
                dotStyle={styles.dotView}
                activeDotStyle={styles.activeDotView}
            >
                <View style={styles.slideSview}>
                    <BackgroundImage
                        aspectRatio={0.398467433}
                        source={require('../assets/slider_1/slider_1.png')}
                    />
                    <TouchableHighlight
                        onPress={this.goToIntro}
                    >
                        <Text style={styles.slideSviewText}>Iniciar</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.slideSview}>
                    <BackgroundImage
                        aspectRatio={0.4594894562}
                        isBottomAlign={true}
                        source={require('../assets/slider_2/slider_2.png')}
                    />
                    <TouchableHighlight
                        onPress={this.goToIntro}
                    >
                        <Text style={[
                            styles.slideSviewText,
                            { color: '#ffffff' }
                        ]}>Iniciar</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.slideSview}>
                    <BackgroundImage
                        aspectRatio={0.3338709677}
                        source={require('../assets/slider_3/slider_3.png')}
                    />
                    <TouchableHighlight
                        onPress={this.goToIntro}
                    >
                        <Text style={[
                            styles.slideSviewText,
                            { color: '#ffffff' }
                        ]}>Iniciar</Text>
                    </TouchableHighlight>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slideSview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
        paddingVertical: 32
    },
    slideSviewText: {
        fontSize: 16,
        fontWeight: '300',
        color: '#444B58'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    paginationView: {
        flex: 1,
        justifyContent: 'flex-start',
        marginHorizontal: 16
    },
    dotView: {
        backgroundColor: '#04549C',
        width: 12,
        height: 12,
        borderRadius: 6,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 4,
        marginBottom: 4
    },
    activeDotView: {
        backgroundColor: '#04549C',
        width: 16,
        height: 16,
        borderRadius: 8,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 4,
        marginBottom: 4
    }
})