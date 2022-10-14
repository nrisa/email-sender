const express = require("express");
const nodemailer = require('nodemailer');
const route = express.Router();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'botsendenoreply@gmail.com',
        pass: 'wypshauopgmdtbmt',
    }
}); 

route.post('/text-mail', (req, res) => {
    const {to, subject, text} = req.body;

    const mailData = {
        from: 'botsendenoreply@gmail.com',
        to, subject, text
    }

    transporter.sendMail(mailData, (error, info) => {
        if(error){
            return console.log('message error : ', error)
        }

        res.status(200).send({message: "Mail Send Succcess!", message_id: info.messageId})
    })
})

module.exports = route

