import { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
export default function Add_data_modal({ rerendar,select_data, open_update_data_modal, data_type }) {
    const dispatch = useDispatch();

    const [ren, setRen] = useState("false")
    const [update_modal_data, setUpdate_modal_data] = useState(select_data)
    // open modal in status
    const [add_data_modal_Show, set_update_data_modal_Show] = useState(false);

    useEffect(() => {
        setUpdate_modal_data(select_data)
    }, [select_data])
    // console.log(update_modal_data.payment_method)

    // status model show and filter select value 
    useEffect(() => {
        set_update_data_modal_Show(open_update_data_modal.modal_open)
        // setModal_status_data(row.status.toLowerCase());
    }, [open_update_data_modal])

    // console.log(add_data_modal_Show)
    const handleClose = () => {
        set_update_data_modal_Show(false);
    }

    const handleUpdate = () => {
        const success = "Transaction details updated"
        // console.log(update_transactions)
        const {transaction_id, transfer_id, receiver_id, sender_id, user_id} = update_modal_data;
    }

    return (
        <>
            {/* status update modal */}
            <Modal  show={add_data_modal_Show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Transaction</Modal.Title>

                </Modal.Header>
                <Modal.Body >
                <div className="table-responsive my-3">
                    <table className="table align-middle border table-striped table-hover">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>

                        {Object.entries(update_modal_data).map((data, i) => {
                        return (<tr key={i}>
                            <td>{data[0]}</td>
                            <td>{data[1]}</td>
                        </tr>)
                        })}

                    </tbody>
                    </table>
                </div>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className="btn btn-sm" onClick={handleUpdate}>
                        Update Transaction
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}