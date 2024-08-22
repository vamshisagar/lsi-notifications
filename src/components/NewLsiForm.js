import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const NewLsiForm = ({ initialData, onClose, onPreview }) => {
    const [formData, setFormData] = useState({
        team: "Application Insights",
        status: "Investigating",
        lsi: "",
        startTime: "",
        endTime: "",
        impactType: "",
        locations: "",
        subject: "",
        description: "",
        customerImpact: "",
        nextUpdate: "1hr",
        driEngaged: "",
        azureCri: "",
        recipients: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.lsi) newErrors.lsi = "LSI# is required";
        if (!formData.startTime) newErrors.startTime = "Start time is required";
        if (!formData.description)
            newErrors.description = "Description is required";
        if (!formData.impactType)
            newErrors.impactType = "Impact Type is required";
        if (!formData.locations) newErrors.locations = "Locations are required";

        if (formData.status === "Mitigated" && !formData.endTime) {
            newErrors.endTime = "End time is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePreview = () => {
        if (validate()) {
            onPreview(formData);
            onClose();
        }
    };

    const renderFormFields = () => (
        <>
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
                            <option value="Log Analytics">Log Analytics</option>
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
                            <option value="Investigating">Investigating</option>
                            <option value="Mitigating">Mitigating</option>
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
                        {errors.lsi && (
                            <span className="text-danger">{errors.lsi}</span>
                        )}
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
                        {errors.startTime && (
                            <span className="text-danger">
                                {errors.startTime}
                            </span>
                        )}
                    </Form.Group>
                </Col>
                {formData.status === "Mitigated" && (
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>End Time</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                name="endTime"
                                value={formData.endTime}
                                onChange={handleChange}
                            />
                            {errors.endTime && (
                                <span className="text-danger">
                                    {errors.endTime}
                                </span>
                            )}
                        </Form.Group>
                    </Col>
                )}
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
                        {errors.impactType && (
                            <span className="text-danger">
                                {errors.impactType}
                            </span>
                        )}
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
                        {errors.locations && (
                            <span className="text-danger">
                                {errors.locations}
                            </span>
                        )}
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
                {errors.description && (
                    <span className="text-danger">{errors.description}</span>
                )}
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
        </>
    );

    return (
        <Form>
            {renderFormFields()}
            <Button
                variant="primary"
                className="mt-3 me-2"
                onClick={handlePreview}
            >
                Preview
            </Button>
            <Button
                variant="outline-secondary"
                className="mt-3"
                onClick={onClose}
            >
                Close
            </Button>
        </Form>
    );
};

export default NewLsiForm;
