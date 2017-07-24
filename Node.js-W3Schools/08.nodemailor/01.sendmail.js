let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

let mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',  //'myfriend@yahoo.com, myotherfriend@yahoo.com'
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    //html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(err, info) {
    if(err) {
        console.log(err);
    } else {
        console.log('Email sent:' + info.response);
    }
});