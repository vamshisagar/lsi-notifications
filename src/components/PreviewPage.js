import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const PreviewPage = ({ formData, onClose, onBack, onSendSuccess }) => {
    const getStatusCellStyle = () => {
        if (formData.status === "Investigating") {
            return { backgroundColor: "red", color: "white" };
        }
        if (formData.status === "Mitigating") {
            return { backgroundColor: "yellow" };
        }
        if (formData.status === "Mitigated") {
            return { backgroundColor: "green", color: "white" };
        }
        return {};
    };

    const handleSend = async () => {
        try {
            console.log(formData);
            await axios.post(
                "https://localhost:5001/api/LsiNotification",
                formData
            ); // Adjust the URL based on your .NET API configuration
            // alert("Data sent successfully");
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
                    <tr>
                        <td>Status</td>
                        <td style={getStatusCellStyle()}>{formData.status}</td>
                    </tr>
                    <tr>
                        <td>LSI Number</td>
                        <td>{formData.lsi}</td>
                    </tr>
                    <tr>
                        <td>Team</td>
                        <td>{formData.team}</td>
                    </tr>
                    <tr>
                        <td>Start Time</td>
                        <td>{formData.startTime}</td>
                    </tr>
                    {formData.status === "Mitigated" && (
                        <tr>
                            <td>End Time</td>
                            <td>{formData.endTime}</td>
                        </tr>
                    )}
                    <tr>
                        <td>Impact Type</td>
                        <td>{formData.impactType}</td>
                    </tr>
                    <tr>
                        <td>Locations</td>
                        <td>{formData.locations}</td>
                    </tr>
                    <tr>
                        <td>Subject</td>
                        <td>{formData.subject}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{formData.description}</td>
                    </tr>
                    {(formData.status === "Investigating" ||
                        formData.status === "Mitigating") && (
                        <tr>
                            <td>Next Update</td>
                            <td>{formData.nextUpdate}</td>
                        </tr>
                    )}
                    <tr>
                        <td>DRI Engaged</td>
                        <td>{formData.driEngaged}</td>
                    </tr>
                    <tr>
                        <td>Azure CRI</td>
                        <td>{formData.azureCri}</td>
                    </tr>
                    <tr>
                        <td>Email Recipients</td>
                        <td>{formData.recipients}</td>
                    </tr>
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
