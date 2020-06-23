import React from 'react'
import { StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './screens/HomeScreen'
import IntroScreen from './screens/IntroScreen'
import SplashScreen from './screens/SplashScreen'
import ECPFInfoScreen from './screens/ECPFInfoScreen'
import TutorialScreen from './screens/TutorialScreen'
import ECPFSuccessScreen from './screens/ECPFSuccessScreen'
import CreatePasswordScreen from './screens/CreatePasswordScreen'
import IssueCertificateScreen from './screens/IssueCertificateScreen'
import MobileDesktopInfoScreen from './screens/MobileDesktopInfoScreen'
import CertificateDetailsScreen from './screens/CertificateDetailsScreen'
import ProtocolNumberInformation from './screens/ProtocolNumberInformation'
import PasswordInformationScreen from './screens/PasswordInformationScreen'
import IssueNewCertificateScreen from './screens/IssueNewCertificateScreen'
import IssueCertificateInformationScreen from './screens/IssueCertificateInformationScreen'

import * as firebase from "firebase"

export default class App extends React.Component {
    render() {
        return <SplashContainer / >
    }
}

{ /* Config firebase conection */ }
const firebaseConfig = {
    apiKey: "AIzaSyDISnTxKc-IKgsFO1_Jdl3h3P3Q2H6FAoI",
    authDomain: "digital-signature-7426f.firebaseapp.com",
    databaseURL: "https://digital-signature-7426f.firebaseio.com",
    projectId: "digital-signature-7426f",
    storageBucket: "digital-signature-7426f.appspot.com",
    messagingSenderId: "339753394032",
    appId: "1:339753394032:web:fd4283803dab1f2b6a79b5"
};

firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 0,
        backgroundColor: 'transparent'
    }
});

const AppContainer = createAppContainer(
    createStackNavigator({
        Intro: {
            screen: IntroScreen,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        },
        IssueCertificate: {
            screen: IssueCertificateScreen,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        },
        ProtocolNumberInformation: {
            screen: ProtocolNumberInformation,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        },
        PasswordInformationScreen: {
            screen: PasswordInformationScreen,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        },
        IssueCertificateInformationScreen: {
            screen: IssueCertificateInformationScreen,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        },
        CreatePasswordScreen: {
            screen: CreatePasswordScreen,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        },
        ECPFSuccessScreen: {
            screen: ECPFSuccessScreen,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        },
        MobileDesktopInfoScreen: {
            screen: MobileDesktopInfoScreen,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        },
        ECPFInfoScreen: {
            screen: ECPFInfoScreen,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        },
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        },
        IssueNewCertificateScreen: {
            screen: IssueNewCertificateScreen,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        },
        CertificateDetailsScreen: {
            screen: CertificateDetailsScreen,
            navigationOptions: {
                headerShown: false,
                headerStyle: styles.header
            }
        }
    }, { headerBackTitleVisible: false })
);

const SplashContainer = createAppContainer(
    createStackNavigator({
        Splash: SplashScreen,
        MainApp: AppContainer,
        Tutorial: TutorialScreen
    }, {
        headerMode: 'none',
        transitionConfig: () => ({ screenInterpolator: () => null }),
    })
);