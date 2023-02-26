import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';


const initialState = {
   name: "",
   email: "",
   password: ""
}

const Register = () => {
   const [state, setState] = useState(initialState);
   const {name, email, password} = state;
   

   const navigate = useNavigate();
   
   const handleChange = (e) => {
      setState({ name, email, password, [e.target.name]: e.target.value});

      
   }

   const submitForm = (e) => {
      e.preventDefault();
      if(!name || !email || !password) {
          toast.error("please complete your information");
      } else {
          if(name || email || password) {
              axios.post("http://localhost:5000/api/register", {
                  name,
                  email,
                  password
              })
              .then(() => {
               setState({name: "", email: "", password: ""});
              })
              .catch((err) => toast.error(err.response));
              toast.success("registred Added successfully!")
          } 
          setTimeout(() => navigate("/Login"), 500);
      }
  };



     return (
      <div>
         <form onSubmit={submitForm}>

         <h1>Register</h1>

         <div>
            <div>Name</div>
            <div>
               <input type="text" name="name" placeholder="Enter your Name"
               onChange={handleChange} value={name || ""}>
               </input>
            </div>
         </div>
            


         <div>
            <div>Email</div>
            <div>
               <input type="email" name="email" placeholder="Enter your email"
               onChange={handleChange} value={email || ""}>
               </input>
            </div>
         </div>



         <div>
            <div>Password</div>
            <div>
               <input type="password" name="password" placeholder="Enter your password"
               onChange={handleChange} value={password || ""}>
               </input>
            </div>
         </div>

         <div>
            <div>
               <input type="submit" name="submit" value="Register" >
               </input>
            </div>
         </div>
            
            <div>or</div>
            <Link to="/">
               <input type="button" value="Login" />
            </Link>
         </form>
      </div>
     )
}

export default Register;