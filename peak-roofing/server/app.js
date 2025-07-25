const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
const app = express();
const port = 8080;
/////////////*************** TO RUN SERVER => node app.js *****************//////////////

// CORS (Cross-Origin Resource Sharing) to allow requests from client-side JavaScript
// running on a different origin (domain, protocol, or port) than the server.
// This is necessary because the server and client are running on different ports.
// The cors middleware will add the necessary Access-Control-Allow-Origin header to the response,
// allowing the request to be processed.
app.use(cors({
    origin: ['http://localhost:3000'], // Allow requests from localhost:3000
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.json());

// App Password
// hbox gchx zpsa ttrq
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "newpeakroofinglead@gmail.com",
        pass: "hbox gchx zpsa ttrq"
    }

})


// This is a route handler for the root URL ('/')
app.get("/", (req, res) => {
  res.send("Server Running");
});

app.post("/submittingHOInfo", (req, res) => {
//   console.log(req.body)
//   res.send(202);

    // Log the data received from the client (optional for debugging)
    console.log("Received data:", req.body);

    // Setup the email options
    let mailOptions = {
        from: "newpeakroofinglead@gmail.com",
        to: "joshchavarria01@gmail.com",  // You can also use req.body to send dynamic email if needed
        subject: "NEW LEAD INCOMING",
        text: `Hello, a new lead has been submitted! Address: ${req.body.address}, Zip: ${req.body.zip}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("Error sending email:", err);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent: " + info.response);
            res.status(210).send("Email sent successfully!");
        }
    })

});

app.listen(port, () => {
  console.log("SERVER STARTED ON PORT: " + port);
});
