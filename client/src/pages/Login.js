import React, {useState} from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';

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


     const login = e => {
        e.preventdefault();

        const sendData = {
            email: user.email,
            password: user.password
        }
        if( !user.email || !user.password) {
            toast.error("please complete your information");
        } else {
            if(user.email || user.password) {
                axios
                .post("http://localhost:5000/api/login", sendData)
                .then(() => {
                    setUser({email: "", password: ""});
                })
                .catch((err) => toast.error(err.response));
                toast.success("loged in successfullu")
            }
            setTimeout(()=> navigate("/Home"), 500);
        }
     };
    
     return (
        <div>
            <form onSubmit={login}>
                    <h1>Login</h1>

                <div>
                    <div>Email</div>
                    <div>
                        <input type="email" placeholder="Enter your Email" name='email' 
                        onChange={handleChange} value={user.email}></input>
                    </div>
                </div>


                <div>
                    <div>Password</div>
                    <div>
                        <input type="password" placeholder="Enter your Password" name='password'
                        onChange={handleChange} value={user.password}> 
                        </input>
                    </div>
                </div>

                <div>
                    <div>
                        <input type="submit" name="submit" value="Login"/>
                    </div>
                </div>



                    <div>or</div>
                    <Link to="/register">
                        <input type="button" value="Register" />
                    </Link>

            </form>
        </div>
     )
}

export default Login;