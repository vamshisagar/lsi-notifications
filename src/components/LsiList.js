import React, {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const LsiList = forwardRef((props, ref) => {
    const [lsiList, setLsiList] = useState([]);

    const fetchLsiList = async () => {
        try {
            const response = await axios.get(
                "https://localhost:5001/api/LsiNotification"
            ); // Adjust the URL as needed
            setLsiList(response.data);
        } catch (error) {
            console.error("Error fetching LSI list:", error);
        }
    };

    useImperativeHandle(ref, () => ({
        fetchLsiList,
    }));

    useEffect(() => {
        fetchLsiList();
    }, []);

    return (
        <div className="container mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Lsi</th>
                        <th>Status</th>
                        <th>Subject</th>
                        <th>Start Time</th>
                        <th>Next Update</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {lsiList.map((lsi, index) => (
                        <tr key={index}>
                            <td>{lsi.lsi}</td>
                            <td>{lsi.status}</td>
                            <td>{lsi.subject}</td>
                            <td>{lsi.startTime}</td>
                            <td>{lsi.nextUpdate}</td>

                            <td>
                                <Button variant="info" className="me-2">
                                    View
                                </Button>
                                <Button variant="warning" className="me-2">
                                    Edit
                                </Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
});

export default LsiList;
