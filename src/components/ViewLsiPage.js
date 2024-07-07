// ViewLsiPage.js
import React from "react";
import { Table, Button } from "react-bootstrap";

const ViewLsiPage = ({ lsiData, onClose }) => {
    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                    {Object.entries(lsiData).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>
                                {typeof value === "object"
                                    ? JSON.stringify(value)
                                    : value}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="secondary" className="mt-3" onClick={onClose}>
                Close
            </Button>
        </div>
    );
};

export default ViewLsiPage;
