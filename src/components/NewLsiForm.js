import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import { MultiSelect } from "react-multi-select-component";

const teamOptions = [
    { label: "Application Insights", value: "Application-Insights" },
    { label: "Log Analytics", value: "Log-Analytics" },
    { label: "Azure Monitoring", value: "Azure-Monitoring" },
    { label: "Azure Alerting", value: "Azure-Alerting" },
    { label: "Geneva Monitoring", value: "Geneva-Monitoring" },
    { label: "Azure Sentinel", value: "Azure-Sentinel" },
];

const NewLsiForm = ({ initialData, onClose, onPreview }) => {
    const [formData, setFormData] = useState({
        team: [
            { label: "Application Insights", value: "Application Insights" },
        ],
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
        lsiHtml: "",
    });

    const [errors, setErrors] = useState({});
    const [autoSelectedAzureSentinel, setAutoSelectedAzureSentinel] =
        useState(false);

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const generateInvestigatingDescription = (team, locations, impactType) => {
        return `${team
            .map((option) => option.label)
            .join(
                ", "
            )} in ${locations} is Experiencing ${impactType}. We are aware of the issue and currently investigating it.`;
    };
    const generateMitigatedDescription = (team, locations, impactType) => {
        return `Issue Stands Mitigated
        Mitigated Steps: <Write Mitigation steps>
        Customer Impact: <Write Customer Impact statement>
        Communications : <Write Different types of Communication Posted>`;
    };
    const generateSubject = (team, locations, impactType) => {
        return `${team
            .map((option) => option.label)
            .join(", ")} in ${locations} is Experiencing ${impactType}`;
    };

    // Update the description whenever team, status, impactType, or locations change
    useEffect(() => {
        const { team, status, impactType, locations } = formData;
        if (status === "Investigating" && team && locations && impactType) {
            setFormData((prevData) => ({
                ...prevData,
                description: generateInvestigatingDescription(
                    team,
                    locations,
                    impactType
                ),
            }));
        }
        if (status === "Mitigated" && team && locations && impactType) {
            setFormData((prevData) => ({
                ...prevData,
                description: generateMitigatedDescription(
                    team,
                    locations,
                    impactType
                ),
            }));
        }
        if (status && team && locations && impactType) {
            setFormData((prevData) => ({
                ...prevData,
                subject: generateSubject(team, locations, impactType),
            }));
        }
    }, [
        formData.team,
        formData.status,
        formData.impactType,
        formData.locations,
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleDescriptionChange = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            description: value,
        }));
    };

    const handleTeamChange = (selectedOptions) => {
        let newSelection = [...selectedOptions];
        const isLogAnalyticsSelected = newSelection.some(
            (option) => option.value === "Log-Analytics"
        );
        const isAzureSentinelSelected = newSelection.some(
            (option) => option.value === "Azure-Sentinel"
        );

        if (
            isLogAnalyticsSelected &&
            !isAzureSentinelSelected &&
            !autoSelectedAzureSentinel
        ) {
            // Auto-select "Azure sentinel" when "Log analytics" is selected
            newSelection.push(
                teamOptions.find((option) => option.value === "Azure-Sentinel")
            );
            setAutoSelectedAzureSentinel(true);
        }

        if (!isLogAnalyticsSelected) {
            // Reset the auto-selection state if "Log analytics" is deselected
            setAutoSelectedAzureSentinel(false);
        }
        // Update the selected state without affecting "Log analytics" when "Azure sentinel" is unselected.

        setFormData((prevFormData) => ({
            ...prevFormData,
            team: newSelection, // Update with the selected options array
        }));
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
                        <MultiSelect
                            options={teamOptions}
                            value={formData.team}
                            onChange={handleTeamChange}
                            labelledBy="Select Team"
                        />
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

            {/* <Form.Group className="mt-2">
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
            </Form.Group> */}
            <Form.Group className="mt-2">
                <Form.Label>Description</Form.Label>
                <ReactQuill
                    value={formData.description}
                    onChange={handleDescriptionChange}
                    theme="snow"
                    style={{ height: "120px" }}
                />
                {errors.description && (
                    <span className="text-danger">{errors.description}</span>
                )}
            </Form.Group>

            <Form.Group className="mt-5">
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
                <i className="bi bi-eye"></i> Preview
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
