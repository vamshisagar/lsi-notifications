import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Badge } from "react-bootstrap";
import axios from "axios";
import NewLsiForm from "./NewLsiForm";
import PreviewPage from "./PreviewPage";
import EditLsiForm from "./EditLsiForm";
import EditPreviewPage from "./EditPreviewPage";
import ViewLsiPage from "./ViewLsiPage";
import DeleteLsiPage from "./DeleteLsiPage";

const HomePage = () => {
    const [lsiList, setLsiList] = useState([]);
    const [formData, setFormData] = useState(null);
    const [editLsiData, setEditLsiData] = useState(null);
    const [viewLsiData, setViewLsiData] = useState(null);
    const [deleteLsiData, setDeleteLsiData] = useState(null);

    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [isEditFormModalOpen, setIsEditFormModalOpen] = useState(false);
    const [isEditPreviewModalOpen, setIsEditPreviewModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const fetchLsiList = async () => {
        try {
            const response = await axios.get(
                "https://localhost:5001/api/LsiNotification"
            );
            setLsiList(response.data);
        } catch (error) {
            console.error("Error fetching LSI list:", error);
        }
    };

    useEffect(() => {
        fetchLsiList();
    }, []);

    const openFormModal = () => setIsFormModalOpen(true);
    const closeFormModal = () => setIsFormModalOpen(false);

    const openPreviewModal = (data) => {
        setFormData(data);
        setIsPreviewModalOpen(true);
    };
    const closePreviewModal = () => setIsPreviewModalOpen(false);

    const handleBackToForm = (data) => {
        setFormData(data);
        setIsPreviewModalOpen(false);
        setIsFormModalOpen(true);
    };

    const handleBackToEditForm = (data) => {
        setEditLsiData(data);
        setIsEditPreviewModalOpen(false);
        setIsEditFormModalOpen(true);
    };

    const openEditFormModal = (lsiData) => {
        setEditLsiData(lsiData);
        setIsEditFormModalOpen(true);
    };
    const closeEditFormModal = () => setIsEditFormModalOpen(false);

    const openEditPreviewModal = (lsiData) => {
        setEditLsiData(lsiData);
        setIsEditPreviewModalOpen(true);
    };
    const closeEditPreviewModal = () => setIsEditPreviewModalOpen(false);

    const openViewModal = (lsiData) => {
        setViewLsiData(lsiData);
        setIsViewModalOpen(true);
    };
    const closeViewModal = () => setIsViewModalOpen(false);

    const openDeleteModal = (lsiData) => {
        setDeleteLsiData(lsiData);
        setIsDeleteModalOpen(true);
    };
    const closeDeleteModal = () => setIsDeleteModalOpen(false);

    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `https://localhost:5001/api/LsiNotification/${id}`
            );
            fetchLsiList();
        } catch (error) {
            console.error("Error deleting LSI record:", error);
        }
    };

    return (
        <div className="container mt-5">
            <Button onClick={openFormModal} className="mx-3">
                Create New LSI
            </Button>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>Lsi</th>
                        <th>Status</th>
                        <th>Service</th>
                        <th>Start Time</th>
                        <th>Next Update</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {lsiList.map((lsi, index) => (
                        <tr key={index}>
                            <td>{lsi.lsi}</td>
                            <td className="align-middle">
                                {lsi.status === "Investigating" && (
                                    <Badge pill bg="danger">
                                        Investigating
                                    </Badge>
                                )}
                                {lsi.status === "Mitigated" && (
                                    <Badge pill bg="success">
                                        Mitigated
                                    </Badge>
                                )}
                                {lsi.status === "Mitigating" && (
                                    <Badge pill bg="warning" text="dark">
                                        Mitigating
                                    </Badge>
                                )}
                            </td>
                            <td>{lsi.team}</td>
                            <td>{lsi.startTime}</td>
                            <td>
                                {lsi.status === "Mitigated"
                                    ? ""
                                    : lsi.nextUpdate}
                            </td>
                            <td>
                                <Button
                                    variant="info"
                                    className="me-2"
                                    onClick={() => openViewModal(lsi)}
                                >
                                    View
                                </Button>
                                <Button
                                    variant="warning"
                                    className="me-2"
                                    onClick={() => openEditFormModal(lsi)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() => openDeleteModal(lsi)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modals for creating and editing and Deleting LSIs */}

            {/* Open New Lsi Form */}
            <Modal
                show={isFormModalOpen}
                onHide={closeFormModal}
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create New LSI</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewLsiForm
                        initialData={formData}
                        onClose={closeFormModal}
                        onPreview={openPreviewModal}
                    />
                </Modal.Body>
            </Modal>

            {/* Open New Lsi Preview Form */}
            <Modal
                show={isPreviewModalOpen}
                onHide={closePreviewModal}
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {formData && (
                        <PreviewPage
                            formData={formData}
                            onClose={closePreviewModal}
                            onBack={handleBackToForm}
                            onSendSuccess={fetchLsiList}
                        />
                    )}
                </Modal.Body>
            </Modal>

            {/* Open Edit Lsi Form */}
            <Modal
                show={isEditFormModalOpen}
                onHide={closeEditFormModal}
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit LSI</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditLsiForm
                        lsiData={editLsiData}
                        onClose={closeEditFormModal}
                        onPreview={openEditPreviewModal}
                    />
                </Modal.Body>
            </Modal>

            {/* Open Edit Lsi Preview Form */}
            <Modal
                show={isEditPreviewModalOpen}
                onHide={closeEditPreviewModal}
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        <EditPreviewPage
                            formData={editLsiData}
                            onBack={handleBackToEditForm}
                            fetchLsiItem={fetchLsiList}
                            backtoHomePage={closeEditPreviewModal}
                        />
                    }
                </Modal.Body>
            </Modal>

            {/* Open View Lsi Form */}
            <Modal
                show={isViewModalOpen}
                onHide={closeViewModal}
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>View LSI</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ViewLsiPage
                        lsiData={viewLsiData}
                        onClose={closeViewModal}
                    />
                </Modal.Body>
            </Modal>

            {/* Open Delete Lsi Form */}
            <Modal
                show={isDeleteModalOpen}
                onHide={closeDeleteModal}
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete LSI</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DeleteLsiPage
                        lsiData={deleteLsiData}
                        onDelete={handleDelete}
                        onClose={closeDeleteModal}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default HomePage;
