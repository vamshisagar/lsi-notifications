import React from "react";
import { Table, Button } from "react-bootstrap";

const ViewLsiPage = ({ lsiData, onClose }) => {
    const shouldDisplayRow = (key) => {
        if (
            (key === "nextUpdate" &&
                lsiData.status !== "Investigating" &&
                lsiData.status !== "Mitigating") ||
            (key === "endTime" && lsiData.status !== "Mitigated")
        ) {
            return false;
        }
        return true;
    };

    const getStatusCellStyle = () => {
        if (lsiData.status === "Investigating") {
            return { backgroundColor: "red", color: "white" };
        }
        if (lsiData.status === "Mitigating") {
            return { backgroundColor: "yellow" };
        }
        if (lsiData.status === "Mitigated") {
            return { backgroundColor: "green", color: "white" };
        }
        return {};
    };

    return (
        <div>
            <p>
                Subject: {lsiData.team} is Experincing{" "}
                {lsiData.impactType} in {lsiData.locations}
            </p>
            <Table striped bordered hover className="mt-4">
                <tbody>
                    <tr>
                        <td>Status</td>
                        <td style={getStatusCellStyle()}>{lsiData.status}</td>
                    </tr>
                    <tr>
                        <td>LSI Number</td>
                        <td>{lsiData.lsi}</td>
                    </tr>
                    <tr>
                        <td>Team</td>
                        <td>{lsiData.team}</td>
                    </tr>
                    <tr>
                        <td>Start Time</td>
                        <td>{lsiData.startTime}</td>
                    </tr>
                    {shouldDisplayRow("endTime") && (
                        <tr>
                            <td>End Time</td>
                            <td>{lsiData.endTime}</td>
                        </tr>
                    )}
                    <tr>
                        <td>Impact Type</td>
                        <td>{lsiData.impactType}</td>
                    </tr>
                    <tr>
                        <td>Locations</td>
                        <td>{lsiData.locations}</td>
                    </tr>
                    <tr>
                        <td>Subject</td>
                        <td>{lsiData.subject}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{lsiData.description}</td>
                    </tr>
                    {shouldDisplayRow("nextUpdate") && (
                        <tr>
                            <td>Next Update</td>
                            <td>{lsiData.nextUpdate}</td>
                        </tr>
                    )}
                    <tr>
                        <td>DRI Engaged</td>
                        <td>{lsiData.driEngaged}</td>
                    </tr>
                    <tr>
                        <td>Azure CRI</td>
                        <td>{lsiData.azureCri}</td>
                    </tr>
                    <tr>
                        <td>Email Recipients</td>
                        <td>{lsiData.recipients}</td>
                    </tr>
                </tbody>
            </Table>
            <Button variant="secondary" className="mt-3" onClick={onClose}>
                Close
            </Button>
        </div>
    );
};

export default ViewLsiPage;
