const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 8080; // Change to your desired port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can change this based on your email provider
    auth: {
      user: 'your-email@gmail.com', // Replace with your email address
      pass: 'your-password', // Replace with your email password
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com', // Replace with the recipient's email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email not sent');
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});