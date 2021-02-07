import express from "express"
import expressAsyncHandler from "express-async-handler"
import nodemailer from "nodemailer";

const nodemailerRouter = express.Router()

nodemailerRouter.post('/', (req, res) => {
    // Prepare output.
    const output = `
   <h1>miroMIRO</h1>
   <p>You have received a contact request.</p>
   <h3>Details:</h3>
   <ul>
       <li>Name: ${req.body.name}</li>
       <li>Email: ${req.body.email}</li>
   </ul>
   <h3>Message:</h3>
   <p>${req.body.message}</p>
   `

    // Nodemailer code.
    let transporter = nodemailer.createTransport({
        host: "smtp.miromiro.tech",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "contact@miromiro.tech", //
            pass: "gddMYQA(E8", //
        },
        ignoreTLS: true // don't know why is needed, but it doesn't work without it.
    });

    transporter.sendMail({
        from: '"miroMIRO" <contact@miromiro.tech>', // sender address
        to: "ramirovazquez@miromiro.tech, rlva40239545@gmail.com", // list of receivers
        subject: "Contact Request", // Subject line
        text: "", // plain text body
        html: output, // html body
    }, (err, info) => {
        if (err) {
            res.send({ error: err })
        } else {
            res.send({ success: true })
        }
    });

})

export default nodemailerRouter;