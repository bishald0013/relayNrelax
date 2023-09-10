import sg from '@sendgrid/mail';

export default class SendEmailService {
    constructor() {
        this.sg = sg.setApiKey(process.env.SG_API_KEY);
    }

    sendEmail = async (to, subject, text) => {
        try {
            
            const msg = {
                to: to,
                from: 'bishaldeb282@gmail.com',
                subject: subject,
                html: text,
            }

            this.sg.send(msg).then(() => {return {status: true, message: "Email sent successfully"}}).catch((err) => {return {status: false, message: err.message}});

        } catch (error) {
            return error.message
        }
    }
}