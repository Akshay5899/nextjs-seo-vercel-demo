import nodemailer from "nodemailer";

const smtpHost = process.env.EMAIL_SMTP_HOST || "smtp.gmail.com";
const smtpPort = Number(process.env.EMAIL_SMTP_PORT || 465);
const smtpUser = process.env.EMAIL_SMTP_USER;
const smtpPass = process.env.EMAIL_SMTP_PASSWORD;
const emailTo = process.env.EMAIL_TO || "akshaykhot5899@gmail.com";
const emailFrom = process.env.EMAIL_FROM || smtpUser || "no-reply@nextjs-seo-vercel-demo.vercel.app";

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  requireTLS: smtpPort === 587,
  auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
});

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Please fill in all fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!smtpUser || !smtpPass) {
      return new Response(
        JSON.stringify({ error: "Email sending is not configured. Please set EMAIL_SMTP_USER and EMAIL_SMTP_PASSWORD." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
      replyTo: email,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send enquiry. Please try again later." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
