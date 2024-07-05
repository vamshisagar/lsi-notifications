import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";

function LsiFormModal({ show, onHide, onSubmit, formData }) {
    const [formState, setFormState] = useState({
        team: "",
        status: "",
        lsiNumber: "",
        startTime: "",
        impactType: "",
        locations: "",
        subject: "",
        description: "",
        nextUpdate: "",
        driEngaged: "",
        azureCri: "",
        emailRecipients: "",
    });

    useEffect(() => {
        setFormState(formData);
    }, [formData]);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        onSubmit(formState);
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            dialogClassName="custom-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title>New LSI Notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formTeam">
                                <Form.Label>Team</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="team"
                                    onChange={handleChange}
                                    value={formState.team}
                                >
                                    <option value="Application Insights">
                                        Application Insights
                                    </option>
                                    <option value="Log Analytics">
                                        Log Analytics
                                    </option>
                                    <option value="Azure Monitor">
                                        Azure Monitor
                                    </option>
                                    <option value="Alerts">Alerts</option>
                                    <option value="Geneva Monitoring">
                                        Geneva Monitoring
                                    </option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="status"
                                    onChange={handleChange}
                                    value={formState.status}
                                >
                                    <option value="">Select status</option>
                                    <option value="Investigating">
                                        Investigating
                                    </option>
                                    <option value="Resolved">Resolved</option>
                                </Form.Control>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formLsiNumber">
                                <Form.Label>LSI Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lsiNumber"
                                    onChange={handleChange}
                                    value={formState.lsiNumber}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formStartTime">
                                <Form.Label>Start Time</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="startTime"
                                    onChange={handleChange}
                                    value={formState.startTime}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formImpactType">
                                <Form.Label>Impact Type</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="impactType"
                                    onChange={handleChange}
                                    value={formState.impactType}
                                >
                                    <option value="">Select Impact Type</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLocations">
                                <Form.Label>Locations</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="locations"
                                    onChange={handleChange}
                                    value={formState.locations}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    placeholder="Incident Notification: Application Insights in <regions> experiencing <Impact /User exp>"
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="description"
                                    placeholder="<< Initial details for the LSI >>"
                                    onChange={handleChange}
                                    value={formState.description}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formNextUpdate">
                                <Form.Label>Next Update</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="nextUpdate"
                                    onChange={handleChange}
                                    value={formState.nextUpdate}
                                >
                                    <option value="">Select next update</option>
                                    <option value="1 hour">1 hour</option>
                                    <option value="2 hours">2 hours</option>
                                    <option value="3 hours">3 hours</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formDriEngaged">
                                <Form.Label>DRI Engaged</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="driEngaged"
                                    onChange={handleChange}
                                    value={formState.driEngaged}
                                >
                                    <option value="">Select DRI Engaged</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Form.Control>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formAzureCri">
                                <Form.Label>Azure CRI</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="azureCri"
                                    onChange={handleChange}
                                    value={formState.azureCri}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                controlId="formEmailRecipients"
                            >
                                <Form.Label>Email Recipients</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="emailRecipients"
                                    onChange={handleChange}
                                    value={formState.emailRecipients}
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Preview
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LsiFormModal;
