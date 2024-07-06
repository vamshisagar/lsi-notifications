import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const PreviewPage = ({ formData, onClose, onBack, onSendSuccess }) => {
    const handleSend = async () => {
        try {
            console.log(formData);
            await axios.post(
                "https://localhost:5001/api/LsiNotification",
                formData
            ); // Adjust the URL based on your .NET API configuration
            alert("Data sent successfully");
            onClose();
            onSendSuccess();
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
                    {Object.entries(formData).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>
                                {typeof value === "object"
                                    ? JSON.stringify(value)
                                    : value}
                            </td>
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
