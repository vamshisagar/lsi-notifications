import React from "react";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";

const EditPreviewPage = ({ formData, onClose, onUpdateSuccess }) => {
    const handleUpdate = async () => {
        try {
            console.log(formData);
            console.log(formData.lsi);
            await axios.put(
                `https://localhost:5001/api/LsiNotification/${formData.lsi}`,
                formData
            );
            alert("Data updated successfully");
            onUpdateSuccess();
            onClose();
        } catch (error) {
            alert("Error updating LSI");
        }
    };

    return (
        <Modal show={true} onHide={onClose} dialogClassName="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>Edit Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
