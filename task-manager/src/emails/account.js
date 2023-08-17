const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = '';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: 'sunil@gmail.com',
    from: 'sunil@gmail.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually get to you...'
})
