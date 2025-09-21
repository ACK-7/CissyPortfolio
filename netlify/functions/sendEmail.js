const { Resend } = require("resend");

// Make sure to set the RESEND_API_KEY environment variable in Netlify!
const resend = new Resend(process.env.RESEND_API_KEY);

// The email address you want to receive the contact form submissions on.
const TO_EMAIL = "asiimac3@gmail.com"; // IMPORTANT: Change this to your email address!

// The email address you are sending from.
// NOTE: This needs to be a verified domain on Resend,
// but you can use onbarding@resend.dev for testing.
const FROM_EMAIL = "onboarding@resend.dev";

exports.handler = async (event) => {
  // We only care about POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Name, email, and message are required.",
        }),
      };
    }

    await resend.emails.send({
      from: `Contact Form <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `New message from ${name} on your portfolio`,
      html: `
        <p>You received a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email." }),
    };
  }
};
