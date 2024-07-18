import React from "react";
import { Table, Button } from "react-bootstrap";

const ViewLsiPage = ({ lsiData, onClose }) => {
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
                Subject: {lsiData.team} is Experiencing {lsiData.impactType} in{" "}
                {lsiData.locations}
            </p>
            <Table striped bordered hover className="mt-4">
                <tbody>
                    <tr>
                        <td className="first-column">Status</td>
                        <td style={getStatusCellStyle()}>{lsiData.status}</td>
                    </tr>
                    <tr>
                        <td className="first-column">LSI Number</td>
                        <td>{lsiData.lsi}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Team</td>
                        <td>{lsiData.team}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Start Time</td>
                        <td>{lsiData.startTime}</td>
                    </tr>
                    {lsiData.status === "Mitigated" && (
                        <tr>
                            <td className="first-column">End Time</td>
                            <td>{lsiData.endTime}</td>
                        </tr>
                    )}
                    <tr>
                        <td className="first-column">Impact Type</td>
                        <td>{lsiData.impactType}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Locations</td>
                        <td>{lsiData.locations}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Subject</td>
                        <td>{lsiData.subject}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Description</td>
                        <td>{lsiData.description}</td>
                    </tr>
                    {(lsiData.status === "Investigating" ||
                        lsiData.status === "Mitigating") && (
                        <tr>
                            <td className="first-column">Next Update</td>
                            <td>{lsiData.nextUpdate}</td>
                        </tr>
                    )}
                    <tr>
                        <td className="first-column">DRI Engaged</td>
                        <td>{lsiData.driEngaged}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Azure CRI</td>
                        <td>{lsiData.azureCri}</td>
                    </tr>
                    <tr>
                        <td className="first-column">Email Recipients</td>
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
