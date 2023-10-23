import axios from 'axios';

const sendEmail = async (req, res) => {
  if (req.method === 'POST') {
    const elasticEmailApiKey = '0950592D744721F604603EFE7474EA98470EC0E052BE8B2F8C397B558C3D85BC9E08DF75516C4C42B09659F640676545';
    const senderEmail = 'example@example.com';

    const emailData = req.body;

    try {
      const response = await axios.post('https://api.elasticemail.com/v2/email/send', emailData, {
        params: {
          apikey: elasticEmailApiKey,
        },
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default sendEmail;