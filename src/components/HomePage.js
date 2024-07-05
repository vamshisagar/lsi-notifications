import React, { useState, useEffect } from "react";
import { Container, Button, Table } from "react-bootstrap";
import axios from "axios";
import LsiFormModal from "./LsiFormModal";
import PreviewModal from "./PreviewModal";

function HomePage() {
    const [showFormModal, setShowFormModal] = useState(false);
    const [showPreviewModal, setShowPreviewModal] = useState(false);
    const [formData, setFormData] = useState({});
    const [lsiNotifications, setLsiNotifications] = useState([]);

    useEffect(() => {
        fetchLsiNotifications();
    }, []);

    const fetchLsiNotifications = async () => {
        try {
            const response = await axios.get(
                "https://localhost:5001/api/LsiNotification"
            );
            setLsiNotifications(response.data);
        } catch (error) {
            console.error("Error fetching LSI notifications", error);
        }
    };

    const handleFormSubmit = (data) => {
        setFormData(data);
        setShowFormModal(false);
        setShowPreviewModal(true);
    };

    const handleSend = async () => {
        try {
            await axios.post(
                "https://localhost:5001/api/LsiNotification",
                formData
            );
            setShowPreviewModal(false);
            fetchLsiNotifications();
        } catch (error) {
            console.error("Error sending LSI notification", error);
        }
    };

    const handleEdit = (data) => {
        setFormData(data);
        setShowPreviewModal(false);
        setShowFormModal(true);
    };

    return (
        <Container>
            <Button onClick={() => setShowFormModal(true)}>Create LSI</Button>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>LSI Number</th>
                        <th>Team</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {lsiNotifications.map((lsi) => (
                        <tr key={lsi.id}>
                            <td>{lsi.lsiNumber}</td>
                            <td>{lsi.team}</td>
                            <td>{lsi.status}</td>
                            <td>
                                <Button onClick={() => handleEdit(lsi)}>
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <LsiFormModal
                show={showFormModal}
                onHide={() => setShowFormModal(false)}
                onSubmit={handleFormSubmit}
                formData={formData}
            />
            <PreviewModal
                show={showPreviewModal}
                onHide={() => setShowPreviewModal(false)}
                formData={formData}
                onSend={handleSend}
                onEdit={() => handleEdit(formData)}
            />
        </Container>
    );
}

export default HomePage;
