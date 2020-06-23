
export default class EmailService {

    static sendEmail(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 300);
        })
    }

}
