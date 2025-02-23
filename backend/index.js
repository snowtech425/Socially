require("dotenv").config();
const express = require("express");
const { google } = require("googleapis");
const axios = require("axios");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(
    cors({
      origin: ["http://localhost:3000", "https://your-frontend.vercel.app"], // Replace with your frontend URL
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true, // Allow cookies if needed
    })
  );

// Load Google service account credentials
const auth = new google.auth.GoogleAuth({
    credentials: {
        type: "service_account",
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Fix newlines
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        auth_uri: process.env.GOOGLE_AUTH_URI,
        token_uri: process.env.GOOGLE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_CERT,
        client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT,
        universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
    },
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
