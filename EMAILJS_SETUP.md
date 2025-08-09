# EmailJS Setup Instructions

To receive registration data directly to your email, you need to set up EmailJS (free service).

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID** (e.g., `service_xyz123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Subject:
```
New Student Registration - {{student_name}}
```

### Template Content:
```
New Student Registration for The Sukkur Academy

PERSONAL INFORMATION:
• Student Name: {{student_name}}
• Father's Name: {{father_name}}
• Email: {{email}}
• Phone: {{phone}}
• WhatsApp: {{whatsapp}}
• Date of Birth: {{date_of_birth}}
• Gender: {{gender}}
• CNIC/B-Form: {{cnic}}

ACADEMIC INFORMATION:
• Current Class: {{current_class}}
• Board: {{board}}
• School: {{school}}
• Previous Marks: {{previous_marks}}

COURSE SELECTION:
• Selected Subjects: {{selected_subjects}}
• Exam Preparation: {{exam_preparation}}
• Batch Preference: {{batch_preference}}

CONTACT INFORMATION:
• Address: {{address}}
• Emergency Contact: {{emergency_contact}}

ADDITIONAL INFORMATION:
• Medical Conditions: {{medical_conditions}}
• Previous Tuition: {{previous_tuition}}
• Academic Goals: {{goals}}
• How they heard about us: {{hear_about_us}}

Registration Date: {{registration_date}}

---
This registration was submitted through The Sukkur Academy website.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz123`)

## Step 4: Get Public Key

1. Go to "Account" in EmailJS dashboard
2. Find your **Public Key** (e.g., `abc123xyz`)

## Step 5: Update Website Configuration

1. Open `src/pages/Registration.jsx`
2. Find these lines around line 98-100:
```javascript
const serviceID = 'service_sukkur_academy'; // Replace with your Service ID
const templateID = 'template_registration'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

3. Replace with your actual values:
```javascript
const serviceID = 'service_xyz123'; // Your actual Service ID
const templateID = 'template_xyz123'; // Your actual Template ID  
const publicKey = 'abc123xyz'; // Your actual Public Key
```

4. Update the email address on line 103:
```javascript
to_email: 'your-actual-email@gmail.com', // Your actual email
```

## Step 6: Test the Setup

1. Deploy your website to Vercel
2. Fill out and submit a test registration
3. Check your email - you should receive the registration details

## Troubleshooting

### If emails are not being received:

1. **Check Spam/Junk folder** - EmailJS emails sometimes go to spam initially
2. **Verify your email service** - Make sure your email service is properly connected in EmailJS
3. **Check browser console** - Look for any JavaScript errors
4. **Verify template variables** - Make sure all variable names match exactly

### Free Plan Limits:

- EmailJS free plan allows **200 emails per month**
- This should be sufficient for academy registrations
- If you need more, consider upgrading to a paid plan

## Security Notes

- The Public Key is safe to use in frontend code
- Your email credentials are stored securely on EmailJS servers
- Students cannot see your email configuration

## Alternative Email Addresses

You can send registration emails to multiple addresses by:
1. Adding CC/BCC fields in your EmailJS template
2. Or creating multiple email services

---

**Need Help?** 
- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact: Include your specific error messages if you encounter issues
