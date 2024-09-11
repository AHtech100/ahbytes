import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, country, type, service, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // Use TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // Compose the email content for your company
  const emailContent = `
    Name: ${name}
    Email: ${email}
    Country: ${country}
    Type: ${type} (Business/Personal)
    Service: ${service}
    Message: ${message}
  `;

  // Compose the HTML thank you email for the customer
  const customerEmailHTML = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Thank You for Your Order, ${name}!</h2>
      <p>We have received your request for the following service:</p>
      <ul>
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Type:</strong> ${type}</li>
        <li><strong>Country:</strong> ${country}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
      <p>We will review your request and get back to you as soon as possible.</p>
      <p>If you have any questions, feel free to reach out to us at <a href="mailto:info@ahbytes.com">info@ahbytes.com</a> or call us at +1 517 3121641.</p>
      <br>
      <p>Best Regards,</p>
      <p><strong>AH BYTES Team</strong></p>
      <img src="https://i.imghippo.com/files/Vw5nW1726034625.png" alt="AH Bytes Logo" style="width: 120px;">
    </div>
  `;

  try {
    // Send email to your company
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@ahbytes.com", // or any other email address you want to send to
      subject: 'New Service Order',
      text: emailContent
    });

    // Send thank you email to the customer
    await transporter.sendMail({
      from: `"AH BYTES" <${process.env.SMTP_USER}>`, 
      to: email, // Customer's email
      subject: 'Thank You for Your Order',
      html: customerEmailHTML // Send the HTML formatted email
    });

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
