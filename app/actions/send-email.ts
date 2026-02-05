"use server";

import sgMail from "@sendgrid/mail";

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "Please fill out all fields." };
    }

    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL || !process.env.SENDGRID_TO_EMAIL) {
        console.error("Missing SendGrid environment variables");
        return { error: "Server configuration error. Please try again later." };
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const content = {
        to: process.env.SENDGRID_TO_EMAIL,
        from: process.env.SENDGRID_FROM_EMAIL, // Must be verified in SendGrid
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
    };

    try {
        await sgMail.send(content);
        return { success: true };
    } catch (error: any) {
        console.error("SendGrid Error:", error.response?.body || error);
        return { error: "Failed to send message. Please try again." };
    }
}

export async function subscribeToNewsletter(email: string) {
    if (!email || !email.includes("@")) {
        return { error: "Please provide a valid email address." };
    }

    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL || !process.env.SENDGRID_TO_EMAIL) {
        console.error("Missing SendGrid environment variables");
        return { error: "Server configuration error." };
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const content = {
        to: process.env.SENDGRID_TO_EMAIL,
        from: process.env.SENDGRID_FROM_EMAIL,
        subject: `New Newsletter Subscriber: ${email}`,
        text: `A new user has subscribed to the newsletter: ${email}`,
        html: `
      <h1>New Newsletter Subscriber</h1>
      <p>A new user has joined your mailing list:</p>
      <p><strong>Email:</strong> ${email}</p>
    `,
    };

    try {
        await sgMail.send(content);
        return { success: true };
    } catch (error: any) {
        console.error("SendGrid Newsletter Error:", error.response?.body || error);
        return { error: "Failed to subscribe. Please try again." };
    }
}
