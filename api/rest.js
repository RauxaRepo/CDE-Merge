const bodyParser = require('body-parser')
const app = require('express')()
const sgMail = require('@sendgrid/mail')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/send-email', function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // res.send(req.body.name)
  const msg = {
    to: req.body.email,
    from: 'frederick.jaime@publicis.com',
    subject: `TEST email ${req.body.name}`,
    html: req.body.html
  }
  sgMail
    .send(msg)
    .then(() => {
      res.send('Email Sent')
      console.log('Email Sent')
    })
    .catch(error => {
      res.send(error)
      console.log(error)
    })
})
app.all('/getJSON', (req, res) => {
  res.json({ data: 'data' })
})

module.exports = app
