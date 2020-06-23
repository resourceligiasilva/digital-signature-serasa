import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import LocalStorageHelper from '../helpers/LocalStorageHelper';

export default class SplashScreen extends Component {
    componentDidMount() {
        if (__DEV__) {
            this.checkFirstAccess();
        } else {
            setTimeout(this.checkFirstAccess, 3000);
        }

        // this.registerForPushNotification();
    }

    checkFirstAccess = () => {
        LocalStorageHelper.getFirstAccess((isFirstAccess) => {
            console.log('firstAccess: ', isFirstAccess);
            if (!isFirstAccess) {
                LocalStorageHelper.getCertificate((hasCertificate) => {
                    this.props.navigation.navigate(hasCertificate ? 'HomeScreen' : 'MainApp');
                });
            } else {
                this.props.navigation.navigate('Tutorial');
            }
        });
    }

    registerForPushNotification = async () => {
        const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = status;

        if (status !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        if (finalStatus !== 'granted') { return; }

        let token = await Notifications.getExpoPushTokenAsync();
        console.log('token: ', token);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/splash.png')}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
