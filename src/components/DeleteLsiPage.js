// DeleteLsiPage.js
import React from "react";
import { Button } from "react-bootstrap";

const DeleteLsiPage = ({ lsiData, onDelete, onClose }) => {
    const handleDelete = () => {
        onDelete(lsiData.lsi);
        onClose();
    };

    return (
        <div>
            <p>
                Are you sure you want to delete the LSI record with LSI {" "}
                {lsiData.lsi}?
            </p>
            <Button variant="danger" onClick={handleDelete}>
                Delete
            </Button>
            <Button variant="secondary" className="ms-2" onClick={onClose}>
                Cancel
            </Button>
        </div>
    );
};

export default DeleteLsiPage;
