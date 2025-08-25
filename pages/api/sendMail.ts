import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // TODO: Replace with your SMTP credentials
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // e.g., smtp.gmail.com
    port: 465,
    secure: true,
    auth: {
      user: 'YOUR_EMAIL@gmail.com',
      pass: 'YOUR_APP_PASSWORD',
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: '2023kucp1128@iiitkota.ac.in', // your email
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
