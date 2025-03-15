// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();
    const adminEmail = process.env.EMAIL_USER;

    // Improved validation and logging
    if (!adminEmail) {
      console.error('EMAIL_USER environment variable is not set');
      return NextResponse.json(
        { message: 'Server configuration error: Missing email configuration' },
        { status: 500 }
      );
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email with the following details:');
    console.log(`From: ${email}`);
    console.log(`To: ${adminEmail}`);
    console.log(`Subject: ${subject}`);

    // Create a transporter object using SMTP transport
    let transporter;
    try {
      // Get email configuration from environment variables
      const emailHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
      const emailPort = parseInt(process.env.EMAIL_PORT || '587', 10);
      const emailUser = process.env.EMAIL_USER;
      const emailPass = process.env.EMAIL_PASS;
      
      if (!emailUser || !emailPass) {
        throw new Error('Missing email credentials. Please set EMAIL_USER and EMAIL_PASS environment variables.');
      }
      
      console.log(`Setting up email transport with host: ${emailHost}, port: ${emailPort}`);
      
      transporter = nodemailer.createTransport({
        host: emailHost,
        port: emailPort,
        secure: emailPort === 465, // true for 465, false for other ports
        auth: {
          user: emailUser,
          pass: emailPass,
        },
        debug: true, // Enable debug output
      });
      
      // Verify connection configuration
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (smtpError) {
      console.error('SMTP Configuration Error:', smtpError);
      return NextResponse.json(
        { message: 'Email server connection failed. Please check your email configuration.' },
        { status: 500 }
      );
    }

    // Setup email data for confirmation to the user
    const mailOptions = {
      from: adminEmail, // Sender address
      to: email, // User's email address
      subject: "Thank you for contacting us", // Subject line
      html: getUserEmailTemplate(name), // HTML body
    };

    // Setup email data for notification to the admin
    const mailOptionsAdmin = {
      from: `"${name}" <${adminEmail}>`, // Use adminEmail as sender to avoid spam filters
      replyTo: email, // Set reply-to as the user's email
      to: adminEmail, // Admin email address
      subject: `New Contact Form: ${subject}`, // Subject line from the form
      html: getCompanyEmailTemplate(name, email, subject, message), // HTML body
    };

    // Send emails with better error handling
    try {
      // First, send email to admin (this is more important)
      const adminInfo = await transporter.sendMail(mailOptionsAdmin);
      console.log('Admin notification sent: %s', adminInfo.messageId);
      
      // Then, send confirmation to user
      const userInfo = await transporter.sendMail(mailOptions);
      console.log('User confirmation sent: %s', userInfo.messageId);

      return NextResponse.json({ 
        message: 'Email sent successfully',
        adminMessageId: adminInfo.messageId,
        userMessageId: userInfo.messageId
      }, { status: 200 });
    } catch (emailError: unknown) {
      console.error('Error sending email:', emailError);
      return NextResponse.json({ 
        message: 'Failed to send email. Please try again later.',
        error: emailError instanceof Error ? emailError.message : 'Unknown email error'
      }, { status: 500 });
    }
  } catch (error) {
    console.error('General error in contact API:', error);
    return NextResponse.json({ 
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

function getUserEmailTemplate(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4299E1; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f8f8f8; }
          .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Contacting Us</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to us. We have received your message and appreciate your interest in our services.</p>
            <p>Our team will review your inquiry and get back to you as soon as possible, usually within 1-2 business days.</p>
            <p>In the meantime, feel free to explore our website for more information about our services.</p>
            <p>Best regards,<br>The Team</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function getCompanyEmailTemplate(name: string, email: string, subject: string, message: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4299E1; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f8f8f8; }
          .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}