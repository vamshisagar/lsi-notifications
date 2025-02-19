// LsiList.js
import React, {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from "react";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";
import EditLsiForm from "./EditLsiForm";
import EditPreviewPage from "./EditPreviewPage";
import ViewLsiPage from "./ViewLsiPage";

const LsiList = forwardRef((props, ref) => {
    const [lsiList, setLsiList] = useState([]);
    const [editLsiData, setEditLsiData] = useState(null);
    const [isEditFormModalOpen, setIsEditFormModalOpen] = useState(false);
    const [isEditPreviewModalOpen, setIsEditPreviewModalOpen] = useState(false);
    const [viewLsiData, setViewLsiData] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const fetchLsiList = async () => {
        try {
            const response = await axios.get(
                "https://localhost:5001/api/LsiNotification"
            );
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

    const openEditFormModal = (lsiData) => {
        setEditLsiData(lsiData);
        setIsEditFormModalOpen(true);
    };

    const closeEditFormModal = () => {
        setIsEditFormModalOpen(false);
    };

    const openEditPreviewModal = (lsiData) => {
        setEditLsiData(lsiData);
        setIsEditPreviewModalOpen(true);
    };

    const closeEditPreviewModal = () => {
        setIsEditPreviewModalOpen(false);
    };

    const openViewModal = (lsiData) => {
        setViewLsiData(lsiData);
        setIsViewModalOpen(true);
    };

    const closeViewModal = () => {
        setIsViewModalOpen(false);
    };

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
                                <Button
                                    variant="info"
                                    className="me-2"
                                    onClick={() => openViewModal(lsi)}
                                >
                                    View
                                </Button>
                                <Button
                                    variant="warning"
                                    className="me-2"
                                    onClick={() => openEditFormModal(lsi)}
                                >
                                    Edit
                                </Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Edit LSI Form Modal */}
            {isEditFormModalOpen && (
                <EditLsiForm
                    lsiData={editLsiData}
                    onClose={closeEditFormModal}
                    onPreview={openEditPreviewModal}
                />
            )}

            {/* Edit Preview Modal */}
            {isEditPreviewModalOpen && (
                <EditPreviewPage
                    formData={editLsiData}
                    onClose={closeEditPreviewModal}
                    onUpdateSuccess={fetchLsiList}
                />
            )}

            {/* View LSI Modal */}
            {isViewModalOpen && (
                <Modal show={isViewModalOpen} onHide={closeViewModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>View LSI</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ViewLsiPage
                            lsiData={viewLsiData}
                            onClose={closeViewModal}
                        />
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
});

export default LsiList;
