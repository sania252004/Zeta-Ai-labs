const Contact = require("../models/Contact");
const sendEmail = require("../config/email");

const submitContact = async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      businessEmail,
      phone,
      message,
    } = req.body;

    // Validate required fields
    if (!fullName || !businessEmail || !message) {
      return res.status(400).json({
        success: false,
        message: "Full name, business email and message are required.",
      });
    }

    // 1. Save contact enquiry to MongoDB
    const contact = await Contact.create({
      fullName,
      companyName,
      businessEmail,
      phone,
      message,
    });

    console.log("Contact saved to MongoDB:", contact._id);

    // 2. Send notification to official Zeta AI Labs email
    try {
      await sendEmail({
        to: process.env.ZOHO_EMAIL,
        subject: `New Project Enquiry - ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Project Enquiry</h2>

            <p><strong>Full Name:</strong> ${fullName}</p>

            <p>
              <strong>Company:</strong>
              ${companyName || "Not provided"}
            </p>

            <p>
              <strong>Business Email:</strong>
              ${businessEmail}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone || "Not provided"}
            </p>

            <p><strong>Message:</strong></p>

            <p>${message}</p>

            <hr>

            <p>
              This enquiry was submitted through the
              <strong>Zeta AI Labs website</strong>.
            </p>
          </div>
        `,
      });

      console.log("Zoho notification email sent successfully.");
    } catch (emailError) {
      console.error(
        "Email notification failed:",
        emailError.message
      );
    }

    // 3. Send response to frontend
    res.status(201).json({
      success: true,
      message: "Project enquiry submitted successfully.",
      data: contact,
    });

  } catch (error) {
    console.error("Contact submission error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while submitting the enquiry.",
    });
  }
};

module.exports = {
  submitContact,
};