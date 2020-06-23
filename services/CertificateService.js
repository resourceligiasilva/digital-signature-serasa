
const MOKJSONs = {
    certificate: {
        name: 'Franciely Ap Ch Correa',
        expirationDate: '06/2023'
    }
}

export default class CertificateService {

    static getCertificate() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOKJSONs.certificate);
            }, 300);
        })
    }

    static issueCertificate(protocol, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 300);
        })
    }

    static createPassword(password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 300);
        })
    }

}
