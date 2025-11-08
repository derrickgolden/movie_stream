import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../baseUrl';

const ConvertSrtToVtt = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select an SRT file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post(`${baseUrl}/upload`, formData, {
                responseType: 'blob', // Ensure the response is treated as a file
            });

            // Create a download link for the converted VTT file
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'converted.vtt'); // Download filename
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error('Error uploading the file:', error);
            alert('Failed to convert the file.');
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>SRT to VTT Converter</h1>
            <input type="file" accept=".srt" onChange={handleFileChange} />
            <br /><br />
            <button onClick={handleUpload}>Upload and Convert</button>
        </div>
    );
};

export default ConvertSrtToVtt;
