import React, { useRef } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";

const EditPreviewPage = ({
    formData,
    onBack,
    fetchLsiItem,
    backtoHomePage,
}) => {
    const lsiHtmlRef = useRef(null);
    const handleUpdate = async () => {
        try {
            console.log(lsiHtmlRef.current.outerHTML);
            await axios.put(
                `https://localhost:5001/api/LsiNotification/${formData.lsi}`,
                formData
            );

            fetchLsiItem();
            backtoHomePage();
        } catch (error) {
            alert("Error updating LSI");
        }
    };

    const getStatusCellStyle = () => {
        if (formData.status === "Investigating") {
            return { backgroundColor: "red", color: "white" };
        }
        if (formData.status === "Mitigating") {
            return { backgroundColor: "yellow" };
        }
        if (formData.status === "Mitigated") {
            return { backgroundColor: "green", color: "white" };
        }
        return {};
    };

    const handleBack = () => {
        onBack(formData);
    };

    return (
        <>
            <div style={{ padding: "20px" }} ref={lsiHtmlRef}>
                <h5>Subject : {formData.subject}</h5>
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        marginBottom: "20px",
                    }}
                >
                    <tbody>
                        <tr>
                            <td
                                style={{
                                    width: "30%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                Status
                            </td>
                            <td
                                style={{
                                    ...getStatusCellStyle(),
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {formData.status}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    width: "30%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                LSI Number
                            </td>
                            <td
                                style={{
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {formData.lsi}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    width: "30%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                Team
                            </td>
                            <td
                                style={{
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {formData.team}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    width: "30%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                Start Time
                            </td>
                            <td
                                style={{
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {formData.startTime}
                            </td>
                        </tr>
                        {formData.status === "Mitigated" && (
                            <tr>
                                <td
                                    style={{
                                        width: "30%",
                                        backgroundColor: "#f9f9f9",
                                        padding: "12px",
                                        border: "1px solid #ddd",
                                    }}
                                >
                                    End Time
                                </td>
                                <td
                                    style={{
                                        padding: "12px",
                                        border: "1px solid #ddd",
                                    }}
                                >
                                    {formData.endTime}
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td
                                style={{
                                    width: "30%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                Impact Type
                            </td>
                            <td
                                style={{
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {formData.impactType}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    width: "30%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                Locations
                            </td>
                            <td
                                style={{
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {formData.locations}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    width: "30%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                Subject
                            </td>
                            <td
                                style={{
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {formData.subject}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    width: "30%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                Description
                            </td>
                            <td
                                style={{
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {formData.description}
                            </td>
                        </tr>
                        {(formData.status === "Investigating" ||
                            formData.status === "Mitigating") && (
                            <tr>
                                <td
                                    style={{
                                        width: "30%",
                                        backgroundColor: "#f9f9f9",
                                        padding: "12px",
                                        border: "1px solid #ddd",
                                    }}
                                >
                                    Next Update
                                </td>
                                <td
                                    style={{
                                        padding: "12px",
                                        border: "1px solid #ddd",
                                    }}
                                >
                                    {formData.nextUpdate}
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td
                                style={{
                                    width: "30%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                DRI Engaged
                            </td>
                            <td
                                style={{
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {formData.driEngaged}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    width: "30%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                Azure CRI
                            </td>
                            <td
                                style={{
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {formData.azureCri}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    width: "30%",
                                    backgroundColor: "#f9f9f9",
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                Email Recipients
                            </td>
                            <td
                                style={{
                                    padding: "12px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {formData.recipients}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <Button
                    variant="warning"
                    className="mt-3 me-2"
                    onClick={handleUpdate}
                >
                    Send
                </Button>
                <Button
                    variant="outline-secondary"
                    className="mt-3 me-2"
                    onClick={handleBack}
                >
                    Back
                </Button>
            </div>
        </>
    );
};

export default EditPreviewPage;
