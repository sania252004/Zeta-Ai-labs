const Newsletter = require("../models/Newsletter");
const sendEmail = require("../config/email");

const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required." });
    }

    const existingSubscriber = await Newsletter.findOne({ email: email.toLowerCase().trim() });
    if (existingSubscriber) {
      return res.status(409).json({ success: false, message: "This email is already subscribed." });
    }

    const subscriber = await Newsletter.create({ email: email.toLowerCase().trim() });

    try {
      await sendEmail({
        to: process.env.ZOHO_EMAIL,
        subject: "⚡ New Subscriber Alert | Zeta AI Labs",
        html: `
          <div style="background-color: #090d16; padding: 40px 15px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <table role="presentation" style="max-width: 540px; width: 100%; margin: 0 auto; background-color: #0f172a; border-radius: 12px; overflow: hidden; border: 1px solid #334155; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);" cellspacing="0" cellpadding="0">
              
              <!-- Header Section -->
              <tr>
                <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 24px; text-align: center; border-bottom: 1px solid #334155;">
                  <div style="display: inline-block; width: 44px; height: 44px; line-height: 44px; background: #0284c7; color: #ffffff; border-radius: 10px; font-size: 20px; font-weight: bold; margin-bottom: 12px;">⚡</div>
                  <h1 style="color: #ffffff; margin: 0 0 4px 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">ZETA AI LABS</h1>
                  <p style="color: #38bdf8; margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">New Lead Notification</p>
                </td>
              </tr>

              <!-- Body Section -->
              <tr>
                <td style="padding: 32px 28px; background-color: #0f172a;">
                  <p style="color: #cbd5e1; font-size: 15px; line-height: 1.5; margin: 0 0 20px 0;">
                    A new visitor just subscribed to your official platform newsletter. Here are the subscriber details:
                  </p>

                  <!-- Email Box Container -->
                  <table role="presentation" style="width: 100%; background-color: #1e293b; border: 1px solid #334155; border-left: 4px solid #38bdf8; border-radius: 6px;" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="padding: 16px 20px;">
                        <p style="color: #94a3b8; font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; margin: 0 0 4px 0;">Subscriber Email</p>
                        <p style="color: #ffffff; font-size: 16px; font-weight: 700; margin: 0; word-break: break-all;">${subscriber.email}</p>
                      </td>
                    </tr>
                  </table>

                  <!-- Meta Info -->
                  <table role="presentation" style="width: 100%; margin-top: 24px; border-top: 1px solid #334155; padding-top: 16px;" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="color: #94a3b8; font-size: 12px;">
                        Status: <strong style="color: #4ade80;">Active Lead</strong>
                      </td>
                      <td style="color: #94a3b8; font-size: 12px; text-align: right;">
                        ${new Date().toLocaleString()}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer Section -->
              <tr>
                <td style="background-color: #090d16; padding: 16px 24px; text-align: center; border-top: 1px solid #334155;">
                  <p style="color: #64748b; font-size: 11px; margin: 0;">
                    Zeta AI Labs Automated System &bull; All Rights Reserved
                  </p>
                </td>
              </tr>

            </table>
          </div>
        `,
      });
      console.log("Dark-themed professional notification email sent successfully.");
    } catch (emailError) {
      console.error("Newsletter email notification failed:", emailError);
    }

    return res.status(201).json({
      success: true,
      message: "Thank you for subscribing!",
      data: subscriber,
    });

  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

module.exports = { subscribeNewsletter };