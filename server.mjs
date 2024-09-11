import express from 'express';
import next from 'next';
import multer from 'multer';
import { createTransport } from 'nodemailer';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const upload = multer({ dest: '/tmp' });

  server.use('/api/send-email', upload.single('file'), async (req, res) => {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'oldcolonyflotila@gmail.com',
      subject: 'Uploaded CV',
      text: 'A new CV has been uploaded.',
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  server.all('*', (req, res) => handle(req, res));

  server.listen(4000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:4000');
  });
});
