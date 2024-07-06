import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import NewLsiForm from "./NewLsiForm";
import PreviewPage from "./PreviewPage";

const HomePage = () => {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [formData, setFormData] = useState(null);

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

    return (
        <div className="container mt-5">
            <Button onClick={openFormModal}>Create New LSI</Button>

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
                        />
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default HomePage;
