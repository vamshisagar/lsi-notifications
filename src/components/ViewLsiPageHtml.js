import React from "react";
import { Table, Button } from "react-bootstrap";

const ViewLsiPageHtml = ({ lsiData, onClose }) => {
    console.log(lsiData);
    return (
        <div>
            <p>Subject: {lsiData.subject}</p>
            <div
                className="table-container mt-2"
                dangerouslySetInnerHTML={{ __html: lsiData.lsiHtml }}
            />
            <Button variant="secondary" className="mt-3" onClick={onClose}>
                Close
            </Button>
        </div>
    );
};

export default ViewLsiPageHtml;
