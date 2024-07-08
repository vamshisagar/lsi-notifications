import React from "react";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";

const EditPreviewPage = ({ formData, onClose, onUpdateSuccess }) => {
    const shouldDisplayRow = (key) => {
        if (
            (key === "nextUpdate" &&
                formData.status !== "Investigating" &&
                formData.status !== "Mitigating") ||
            (key === "endTime" && formData.status !== "Mitigated")
        ) {
            return false;
        }
        return true;
    };

    const handleUpdate = async () => {
        try {
            // console.log(formData);
            // console.log(formData.lsi);
            await axios.put(
                `https://localhost:5001/api/LsiNotification/${formData.lsi}`,
                formData
            );
            // alert("Data updated successfully");
            onUpdateSuccess();
            onClose();
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

    return (
        <Modal show={true} onHide={onClose} dialogClassName="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>Edit Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Status</td>
                            <td style={getStatusCellStyle()}>
                                {formData.status}
                            </td>
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleUpdate}>
                    Update
                </Button>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditPreviewPage;
