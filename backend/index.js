require("dotenv").config();
const express = require("express");
const { google } = require("googleapis");
const axios = require("axios");
const fs = require("fs");

const app = express();
app.use(express.json());

// Load Google service account credentials
const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_CREDENTIALS, // Path to service account key file
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = process.env.SPREADSHEET_ID; // Your Google Sheet ID
const HUME_API_URL = "https://api.hume.ai/v0/evi/configs"; // API to be patched
const HUME_API_KEY = process.env.HUME_API_KEY;

// Route to post data to Google Spreadsheet
app.post("/add-data", async (req, res) => {
    try {
        const { name, email, gender, scenario, age } = req.body; // Expecting JSON input

        // Validate input
        if (!name || !email || !gender || !scenario ) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        if (!age) {
            age= ''
        }
        // Append data to Google Sheets
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: "Sheet1!A1", // Adjust based on your sheet structure
            valueInputOption: "RAW",
            resource: { values: [[name, email, gender, age, scenario]] },
        });

        res.json({ message: "Data added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error adding data" });
    }
});

// Route to patch another API
app.patch("/update-hume", async (req, res) => {
    try {
        const { configId, version, Description } = req.body;
        if (!configId || !version || !Description) {
            return res.status(400).json({ error: "Missing required parameters" });
        }
        trimmedDescription = Description.substring(0, 256);
        const payload = {
            prompt: {
                text: trimmedDescription
            }
        };
        
        console.log(req.body)
        const response = await axios.patch(
            `${HUME_API_URL}/${configId}/version/${version}`,
            { 
                // version_description: trimmedDescription,
                payload
            },
            {
                headers: {
                    "X-Hume-Api-Key": HUME_API_KEY,
                    "Content-Type": "application/json"
                },
            }
        );

        res.json({ message: "Hume API updated successfully", data: response.data });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: "Error updating Hume API", details: error.response?.data });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
