import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from "axios";


const View = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();



    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/get/${id}`)
        .then((res) => setUser({ ...res.data[0]}));
    }, [id])


    return (
        <div>
            <div>
                <div>
                    <p>User Contact detail</p>
                </div>
                <div className='container'>
                    <strong> ID: </strong>
                    <span>{id}</span>
                    <br />
                    <br />
                    <strong> Name: </strong>
                    <span>{user.name}</span>
                    <br />
                    <br />
                    <strong> Email: </strong>
                    <span>{user.email}</span>
                    <br />
                    <br />
                    <strong> Conatct: </strong>
                    <span>{user.contact}</span>
                    <br />
                    <br />
                    <Link to="/">
                    <div>Go Back</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default View;