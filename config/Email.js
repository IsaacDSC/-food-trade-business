const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: 'food-trade-business@outlook.com',
        pass: 'secret(!@#)'
            // user: '********@gmail.com',
            // pass: '********'
    }
})




exports.transporter = transporter