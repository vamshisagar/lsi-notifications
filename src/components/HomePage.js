import React, { useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import NewLsiForm from "./NewLsiForm";
import PreviewPage from "./PreviewPage";
import LsiList from "./LsiList";

const HomePage = () => {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [formData, setFormData] = useState(null);
    const lsiListRef = useRef();

    const openFormModal = () => {
        setIsFormModalOpen(true);
    };

    const closeFormModal = () => {
        setIsFormModalOpen(false);
    };

    const openPreviewModal = (data) => {
        setFormData(data);
        setIsPreviewModalOpen(true);
    };

    const closePreviewModal = () => {
        setIsPreviewModalOpen(false);
    };

    const handleBackToForm = (data) => {
        setFormData(data);
        setIsPreviewModalOpen(false);
        setIsFormModalOpen(true);
    };

    const refreshLsiList = () => {
        if (lsiListRef.current) {
            lsiListRef.current.fetchLsiList();
        }
    };

    return (
        <div className="container mt-5">
            <Button onClick={openFormModal} className="mx-3">
                Create New LSI
            </Button>
            <LsiList ref={lsiListRef} />
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
                            onSendSuccess={refreshLsiList}
                        />
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default HomePage;
