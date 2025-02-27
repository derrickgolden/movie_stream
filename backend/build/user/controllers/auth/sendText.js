"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSMS = void 0;
const africastalking = require('africastalking');
require('dotenv').config();
// Initialize the Africa's Talking SDK
const apiKey = process.env.SMS_APIKEY;
const username = process.env.SMS_USERNAME;
const credentials = {
    apiKey, // Replace with your API key
    username // Use 'sandbox' for testing or your username for production
};
const AT = africastalking(credentials);
// Get the SMS service
const sms = AT.SMS;
// Function to send an SMS
const sendSMS = async (to, message) => {
    try {
        const response = await sms.send({
            to, // Array of recipients
            message, // Message text
            from: 'JAP_TECH' // Sender ID (optional, requires approval)
        });
        const { statusCode, status } = response.SMSMessageData.Recipients[0];
        console.log(response.SMSMessageData.Recipients[0]);
        if (statusCode === 100) {
            return ({ success: true, msg: "", response });
        }
        else {
            return ({ success: false, msg: `Client did not receive the message. Africa's talking returns with status ${status}.`, response });
        }
    }
    catch (error) {
        console.error('Error Sending SMS:', error);
        return ({ success: false, msg: "Something went wrong while sendng the message to client.", error });
    }
};
exports.sendSMS = sendSMS;
// Example Usage
// sendSMS(['+254714475702'], 'Hello! This is a test message from Africa\'s Talking.');
//# sourceMappingURL=sendText.js.map