import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const PreviewPage = ({ formData, onClose, onBack }) => {
    const handleSend = async () => {
        try {
            await axios.post(
                "https://localhost:5001/api/LsiNotification",
                formData
            ); // Adjust the URL based on your .NET API configuration
            alert("Data sent successfully");
            onClose();
        } catch (error) {
            alert("Error sending data");
        }
    };

    const handleBack = () => {
        onBack(formData);
    };

    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                    {Object.keys(formData).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{formData[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button
                variant="primary"
                className="mt-3 me-2"
                onClick={handleSend}
            >
                Send
            </Button>
            <Button
                variant="secondary"
                className="mt-3 me-2"
                onClick={handleBack}
            >
                Back
            </Button>
        </div>
    );
};

export default PreviewPage;
