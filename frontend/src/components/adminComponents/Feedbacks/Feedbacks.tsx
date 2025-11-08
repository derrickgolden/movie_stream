import { useEffect, useState } from "react";
import { getAllFeedbacks } from "../apiCalls/getData";
import { Feedback } from "../apiCalls/type";
import DataTable_Component from "../Data/DataTable";
import { FaMessage } from "react-icons/fa6";
import Swal from "sweetalert2";

const Feedbacks = () =>{
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [search, setSearch] = useState('name');

    useEffect(() =>{
        getAllFeedbacks('').then((data) =>{
            if(data.success){
                setFeedbacks(data.details);
            }
        })
    }, []);

    const columns = [
        { name: "Name", selector: (row: Feedback) => row.name, sortable: true },
        { name: "Apartment", cell: (row: Feedback) => row.apartment, sortable: true},
        { name: "Phone", selector: (row: Feedback) => row.phone, sortable: true },
        { name: "Subject", selector: (row: Feedback) => row.subject },
        { name: "Created at", selector: (row: Feedback) => row.created_at, sortable: true },
        { name: "Status", cell: (row: Feedback) => <>{
            <span className={`${row.status === 'open'? 'text-warning' : 'text-success'}`}>{row.status}</span>
        }</>, sortable: true },
        { name: "action", cell: (row: Feedback) => <>{
            <span>
                <FaMessage role='button' onClick={() =>Swal.fire(`${row.messages[0].message}`)}
                    className=" text-info mx-1"  size={20}/>
            </span>
        }</> }
    ];

    return(
        <div className='bg-light w-100 px-2 py-4'>
            <h3>Management Feedbacks</h3>
            <div>
                    <div className="container-fluid" >        
                        <div className="row my-3">
                            <div className="col-12">
                                <div className="card" style={{ borderTop: "2px solid #4723d9" }}>
                                    <div className="card-header d-flex justify-content-between border-bottom pb-1">
                                        <h4>Feedbacks</h4>
                                        <div>
                                            <select onChange={(e) =>{setSearch(e.target.value)}} className="form-select" aria-label="Default select example">
                                                <option value="name">Name</option>
                                                <option value="phone">Phone</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card-body">        
                                        <DataTable_Component search={search} apidata={feedbacks} columns={columns} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Feedbacks;