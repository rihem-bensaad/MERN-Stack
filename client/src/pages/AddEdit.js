import React, {useState, useEffect} from 'react';
import {useNavigate, useParms, Link} from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    name: "",
    email: "",
    contact: ""
}


const AddEdit = () => {
    const [state, setState] = useState(initialState);

    const {name, email, contact} = state;

    const naviate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact) {
            toast.error("please complete your information");
        } else {
            axios.post("http://localhost:5000/api/post", {
                name,
                email,
                contact
            })
            .then(() => {
                setState({name: "", email: "", contact: ""});
            })
            .catch((err) => toast.error(err.response.data));
            toast.success("Contact Added successfully!")
            setTimeout(() => naviate.push("/"), 500);
        }
    };


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    };

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="your Name..." value={name} 
                onChange={handleInputChange}/>

                <label htmlFor='email'>Email</label>
                <input type="email" id="email" name="email" placeholder="your Email..." value={email} 
                onChange={handleInputChange}/>

                <label htmlFor='contact'>Contact</label>
                <input type="number" id="contact" name="contact" placeholder="your Contact..." value={contact} 
                onChange={handleInputChange}/>

                <input type="submit" value="save" />
                <Link to="/">
                    <input type="button" value="Go Back" />
                </Link>
            </form>
        </div> 
    )
}



export default AddEdit