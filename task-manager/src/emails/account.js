const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = 'SG.';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sunil@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome ${name}!, Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sunil@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Good bye, ${name}! I hope see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
