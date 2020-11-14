import AsyncStorage from "@react-native-async-storage/async-storage";

const LocalStorageKey = {
    firstAccess: 'firstAccess',
    certificate: 'certificate',
}

export default class LocalStorageHelper {
    static getFirstAccess(e) {
        AsyncStorage.getItem(LocalStorageKey.firstAccess)
            .then((value) => {
                e(value != 'true');
            }).catch((error) => {
                e(true);
            })
    }

    static async saveFirstAccess() {
        try {
            console.log('saving first access.');
            await AsyncStorage.setItem(LocalStorageKey.firstAccess, 'true');
        } catch (error) {
            console.log('error on saving first access: ', error);
        }
    };

    static getCertificate(e) {
        AsyncStorage.getItem(LocalStorageKey.certificate)
            .then((value) => {
                e(value == 'true');
            }).catch((error) => {
                e(false);
            })
    }

    static async saveCertificate() {
        try {
            console.log('saving certificate.');
            await AsyncStorage.setItem(LocalStorageKey.certificate, 'true');
        } catch (error) {
            console.log('error on saving certificate: ', error);
        }
    };
}