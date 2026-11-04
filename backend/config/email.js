const SibApiV3Sdk = require('@getbrevo/brevo');

const sendEmail = async ({ to, subject, html }) => {
  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: "Zeta AI Labs", email: "sanjibku78@gmail.com" },
        to: [{ email: to }],
        subject: subject,
        htmlContent: html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email via Brevo API');
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error.message || error);
    throw error;
  }
};

module.exports = sendEmail;