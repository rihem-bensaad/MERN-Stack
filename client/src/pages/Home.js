import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";


const Home = () => {
    const [data, setData] = useState([]);
    const dataLoad = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };

    useEffect(() => {
        dataLoad();
    }, []);


    const deleteContact = (id) => {
        if(
            window.confirm("Are you sure that you want to delete that contact?")
            ) {
            axios.delete(`http://localhost:5000/api/delete/${id}`);
            toast.success("Contact Deleted successfully");
            setTimeout(() => dataLoad(), 500);
        }
    };

    return (
        <div>
            <Link to="/addContact">
                <button>Add Contact</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>
                                   <Link to={`/update/${item.id}`}>
                                    <button>Edit</button>
                                   </Link> 
                                   <button onClick={() => deleteContact(item.id)}>Delete</button>
                                   <Link to={`/view/${item.id}`}>
                                    <button>View</button>
                                   </Link> 
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home;