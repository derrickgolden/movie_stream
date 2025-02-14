const africastalking = require('africastalking');

// Initialize the Africa's Talking SDK
const credentials = {
    apiKey: '426e9abef19709e4bfa2fea62381f54c1636b0379a8eb22c958a407d8c2400ba', // Replace with your API key
    username: 'Japtech' // Use 'sandbox' for testing or your username for production
};
const AT = africastalking(credentials);

// Get the SMS service
const sms = AT.SMS;

// Function to send an SMS
export const sendSMS = async (to: string[], message: string) => {
    try {
        const response = await sms.send({
            to, // Array of recipients
            message, // Message text
            from: 'JAP_TECH' // Sender ID (optional, requires approval)
        });

        // console.log('SMS Sent:', response);
        return ({success: true, msg: "", response})
    } catch (error) {
        console.error('Error Sending SMS:', error);
        return ({success: false, msg: "", error});
    }
};

// Example Usage
// sendSMS(['+254714475702'], 'Hello! This is a test message from Africa\'s Talking.');
