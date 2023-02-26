import React, {useState} from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate;

    const [ user, setUser ] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
           ...user,
           [name]: value
        })
     }


     const login = ({setLoginUser}) => {
        axios.post("http://localhost:5000/api/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate.push("/Home")
        })   
     }

     return (
        <div>
            <form onSubmit={login}>
                <div>
                    <h1>Login</h1>

                    <input type="email" placeholder="Enter your Email" name='email' 
                    onChange={handleChange}></input>

                    <input type="password" placeholder="Enter your Password" name='password'
                    onChange={handleChange}>
                    </input>

                    <input type="button" value="Login"/>

                    <div>or</div>
                    <Link to="/register">
                    <input type="button" value="Register" />
                    </Link>

                </div>
            </form>
        </div>
     )
}

export default Login;