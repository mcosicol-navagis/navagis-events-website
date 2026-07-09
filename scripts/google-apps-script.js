/**
 * Paste this entire file into the Google Apps Script editor
 * (Extensions → Apps Script inside your target Google Sheet).
 *
 * Deploy as Web App:
 *   Execute as: Me
 *   Who has access: Anyone
 *
 * Copy the deployment URL → set it as NEXT_PUBLIC_SCRIPT_URL in .env.local
 */

const SHEET_NAME = "Registrations";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp",
        "First Name",
        "Last Name",
        "Email",
        "Company Name",
        "Job Title",
        "Phone",
        "I'm interested in hearing about (Select all that apply)",
        "I would like to attend the exclusive tour of the Google Chicago office",
      ]);
    }

    sheet.appendRow([
      new Date().toISOString(),
      data.firstName   || "",
      data.lastName    || "",
      data.email       || "",
      data.companyName || "",
      data.jobTitle    || "",
      data.phone       || "",
      data.interests   || "",
      data.wantsTour   ? "Yes" : "No",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Quick smoke-test — run this manually in the editor to verify sheet access
function testSetup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log("Connected to: " + ss.getName());
}
