import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, text, html } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail", // e.g., 'gmail', 'yahoo', 'hotmail'
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    try {
      // Send mail with defined transport object
      let info = await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to, // list of receivers
        subject, // Subject line
        text, // plain text body
        html, // html body
      });

      res.status(200).json({ message: "Email sent successfully", info });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error sending email", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
