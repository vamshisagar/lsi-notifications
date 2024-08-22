import React from "react";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";

const EditPreviewPage = ({
    formData,
    onBack,
    fetchLsiItem,
    backtoHomePage,
}) => {
    const handleUpdate = async () => {
        try {
            console.log(formData);
            await axios.put(
                `https://localhost:5001/api/LsiNotification/${formData.lsi}`,
                formData
            );

            fetchLsiItem();
            backtoHomePage();
        } catch (error) {
            alert("Error updating LSI");
        }
    };

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

    const handleBack = () => {
        onBack(formData);
    };

    return (
        <>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td className="first-column">Status</td>
                        <td style={getStatusCellStyle()}>{formData.status}</td>
                    </tr>
                    <tr>
                        <td className="first-column">LSI Number</td>
                        <td>{formData.lsi}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Team</td>
                        <td>{formData.team}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Start Time</td>
                        <td>{formData.startTime}</td>
                    </tr>
                    {formData.status === "Mitigated" && (
                        <tr>
                            <td className="first-column">End Time</td>
                            <td>{formData.endTime}</td>
                        </tr>
                    )}
                    <tr>
                        <td className="first-column">Impact Type</td>
                        <td>{formData.impactType}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Locations</td>
                        <td>{formData.locations}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Subject</td>
                        <td>{formData.subject}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Description</td>
                        <td>{formData.description}</td>
                    </tr>
                    {(formData.status === "Investigating" ||
                        formData.status === "Mitigating") && (
                        <tr>
                            <td className="first-column">Next Update</td>
                            <td>{formData.nextUpdate}</td>
                        </tr>
                    )}
                    <tr>
                        <td className="first-column">DRI Engaged</td>
                        <td>{formData.driEngaged}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Azure CRI</td>
                        <td>{formData.azureCri}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Email Recipients</td>
                        <td>{formData.recipients}</td>
                    </tr>
                </tbody>
            </Table>

            <Button
                variant="warning"
                className="mt-3 me-2"
                onClick={handleUpdate}
            >
                Update
            </Button>
            <Button
                variant="outline-secondary"
                className="mt-3 me-2"
                onClick={handleBack}
            >
                Back to form
            </Button>
        </>
    );
};

export default EditPreviewPage;
