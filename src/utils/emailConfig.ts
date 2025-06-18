// EmailJS Configuration Guide
// 
// To set up EmailJS for your contact form:
// 
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{message}} - message content
//    - {{to_email}} - your email (chavdaravi805@gmail.com)
// 
// 4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
// 5. Replace the placeholder values in Contact.tsx:
//    - YOUR_SERVICE_ID
//    - YOUR_TEMPLATE_ID  
//    - YOUR_PUBLIC_KEY
//
// Example EmailJS template:
// Subject: New Contact Form Message from {{from_name}}
// 
// You have received a new message from your portfolio contact form:
// 
// Name: {{from_name}}
// Email: {{from_email}}
// 
// Message:
// {{message}}
// 
// Reply to: {{from_email}}

export const emailConfig = {
  // Replace these with your actual EmailJS credentials
  serviceId: 'service_jpu48lz',
  templateId: 'template_7zryuo8', 
  publicKey: 'PozR8NweRc2xQjBVH'
};