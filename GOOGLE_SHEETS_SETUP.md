# Google Sheets Integration Setup

This guide will help you connect your registration form directly to Google Sheets so that every registration automatically adds a new row to your spreadsheet.

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Sukkur Academy Registrations"
4. Add these headers in the first row (A1 to T1):

```
A1: Timestamp
B1: Student Name
C1: Father's Name
D1: Email
E1: Phone
F1: WhatsApp
G1: Date of Birth
H1: Gender
I1: CNIC/B-Form
J1: Current Class
K1: Board
L1: School
M1: Previous Marks
N1: Selected Subjects
O1: Exam Preparation
P1: Batch Preference
Q1: Address
R1: Emergency Contact
S1: Medical Conditions
T1: Previous Tuition
U1: Goals
V1: How they heard about us
```

## Step 2: Set up Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete the default code and paste this script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Create timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Karachi',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    // Prepare row data
    const rowData = [
      timestamp,
      data.student_name || '',
      data.father_name || '',
      data.email || '',
      data.phone || '',
      data.whatsapp || '',
      data.date_of_birth || '',
      data.gender || '',
      data.cnic || '',
      data.current_class || '',
      data.board || '',
      data.school || '',
      data.previous_marks || '',
      data.selected_subjects || '',
      data.exam_preparation || '',
      data.batch_preference || '',
      data.address || '',
      data.emergency_contact || '',
      data.medical_conditions || '',
      data.previous_tuition || '',
      data.goals || '',
      data.hear_about_us || ''
    ];
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Registration added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Sukkur Academy Registration API is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. Click **Save** (Ctrl+S)
4. Click **Deploy** → **New deployment**
5. Choose **Web app** as the type
6. Set these settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
7. Click **Deploy**
8. **Copy the Web App URL** (you'll need this for the website)

## Step 3: Update Website Code

1. Open `src/pages/Registration.jsx`
2. Find the `sendToGoogleSheets` function and update the URL:

```javascript
const sendToGoogleSheets = async (formData) => {
  const GOOGLE_SHEETS_URL = 'YOUR_WEB_APP_URL_HERE'; // Replace with your actual URL
  
  const data = {
    student_name: formData.fullName,
    father_name: formData.fatherName,
    email: formData.email,
    phone: formData.phone,
    whatsapp: formData.whatsapp || '',
    date_of_birth: formData.dateOfBirth || '',
    gender: formData.gender || '',
    cnic: formData.cnic || '',
    current_class: formData.currentClass,
    board: formData.board,
    school: formData.school || '',
    previous_marks: formData.previousMarks || '',
    selected_subjects: formData.selectedSubjects.join(', '),
    exam_preparation: formData.examPreparation || '',
    batch_preference: formData.batchPreference || '',
    address: formData.address,
    emergency_contact: formData.emergencyContact || '',
    medical_conditions: formData.medicalConditions || '',
    previous_tuition: formData.previousTuition || '',
    goals: formData.goals || '',
    hear_about_us: formData.hearAboutUs || ''
  };

  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Google Sheets Error:', error);
    return false;
  }
};
```

## Step 4: Test the Integration

1. Deploy your website to Vercel
2. Fill out a test registration
3. Check your Google Sheet - you should see a new row added
4. The timestamp will be in Pakistan timezone

## Benefits of Google Sheets Integration

✅ **Real-time data:** Registrations appear instantly in your sheet
✅ **Easy to manage:** Sort, filter, and analyze registration data
✅ **Backup:** All data is safely stored in Google Drive
✅ **Collaboration:** Share the sheet with other staff members
✅ **Export:** Download as Excel, CSV, or PDF anytime
✅ **Free:** No additional costs

## Troubleshooting

### If data is not appearing in the sheet:

1. **Check the Web App URL** - Make sure it's correct in the code
2. **Check Apps Script logs** - Go to Apps Script → Executions
3. **Verify deployment** - Make sure the web app is deployed and accessible
4. **Check browser console** - Look for any JavaScript errors

### If you get CORS errors:

1. In Apps Script, add this to the beginning of your `doPost` function:
```javascript
function doPost(e) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  
  // Rest of your code...
}
```

## Security Notes

- The Web App URL is public but only accepts POST requests
- No sensitive data is exposed in the URL
- Google Sheets data is protected by your Google account security
- You can revoke access anytime from Apps Script

---

**Need Help?** 
- Google Apps Script Documentation: https://developers.google.com/apps-script
- Contact with specific error messages if you encounter issues
