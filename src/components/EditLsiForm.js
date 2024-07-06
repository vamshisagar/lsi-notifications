import React, { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

const EditLsiForm = ({ lsiData, onClose, onPreview }) => {
    const [formData, setFormData] = useState({
        team: lsiData.team,
        status: lsiData.status,
        lsi: lsiData.lsi,
        startTime: lsiData.startTime,
        endTime: lsiData.endTime,
        impactType: lsiData.impactType,
        locations: lsiData.locations,
        subject: lsiData.subject,
        description: lsiData.description,
        customerImpact: lsiData.customerImpact,
        nextUpdate: lsiData.nextUpdate,
        driEngaged: lsiData.driEngaged,
        azureCri: lsiData.azureCri,
        recipients: lsiData.recipients,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePreview = () => {
        onPreview(formData);
        onClose();
    };

    return (
        <Modal show={true} onHide={onClose} dialogClassName="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>Edit LSI</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Team</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="team"
                                    value={formData.team}
                                    onChange={handleChange}
                                >
                                    <option value="Application Insights">
                                        Application Insights
                                    </option>
                                    <option value="Log Analytics">
                                        Log Analytics
                                    </option>
                                    <option value="Azure Monitoring">
                                        Azure Monitoring
                                    </option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="Investigating">
                                        Investigating
                                    </option>
                                    <option value="Mitigating">
                                        Mitigating
                                    </option>
                                    <option value="Mitigated">Mitigated</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>LSI#</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lsi"
                                    value={formData.lsi}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Start Time</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="startTime"
                                    value={formData.startTime}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            {formData.status === "Mitigated" && (
                                <Form.Group>
                                    <Form.Label>End Time</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        name="endTime"
                                        value={formData.endTime}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            )}
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Impact Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="impactType"
                                    value={formData.impactType}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Locations</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="locations"
                                    value={formData.locations}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mt-2">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mt-2">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mt-2">
                        <Form.Label>Customer Impact</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="customerImpact"
                            value={formData.customerImpact}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Row className="mt-2">
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>DRI Engaged</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="driEngaged"
                                    value={formData.driEngaged}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Azure CRI</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="azureCri"
                                    value={formData.azureCri}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        {formData.status !== "Mitigated" && (
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Next Update</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="nextUpdate"
                                        value={formData.nextUpdate}
                                        onChange={handleChange}
                                    >
                                        <option value="1hr">1hr</option>
                                        <option value="2hr">2hr</option>
                                        <option value="4hr">4hr</option>
                                        <option value="6hr">6hr</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        )}
                    </Row>

                    <Form.Group className="mt-2">
                        <Form.Label>Recipients</Form.Label>
                        <Form.Control
                            type="text"
                            name="recipients"
                            value={formData.recipients}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handlePreview}>
                    Preview
                </Button>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditLsiForm;
