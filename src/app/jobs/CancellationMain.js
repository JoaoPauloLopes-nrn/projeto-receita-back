import Mail from '../../lib/Mail';

class CancellationMail {
    get key() {
        return 'CancellationMail';
    }

    async handle({ data }) {
        await Mail.sendMail({});
    }
}

export default new CancellationMail();
