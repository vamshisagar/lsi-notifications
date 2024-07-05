import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

function PreviewModal({ show, onHide, formData, onSend, onEdit }) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            dialogClassName="custom-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title>Observability Incident Notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table bordered>
                    <tbody>
                        <tr>
                            <td>Team</td>
                            <td>{formData.team}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>{formData.status}</td>
                        </tr>
                        <tr>
                            <td>LSI Number</td>
                            <td>{formData.lsiNumber}</td>
                        </tr>
                        <tr>
                            <td>Start Time</td>
                            <td>{formData.startTime}</td>
                        </tr>
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
                        <tr>
                            <td>Next Update</td>
                            <td>{formData.nextUpdate}</td>
                        </tr>
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
                            <td>{formData.emailRecipients}</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onEdit}>
                    Back
                </Button>
                <Button variant="primary" onClick={onSend}>
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PreviewModal;
