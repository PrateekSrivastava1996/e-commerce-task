import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const LoginForm = () => {
     const navigate = useNavigate()
     const [userName, setUserName] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState([]);

     const Validate = () => {
          let err = true;

          if (!userName || userName.trim() === "") {
               setError({ userName: "Required user name" });
               return (err = false);
          } else if (!password || password.trim() === "") {
               setError({ password: "Required password" });
               return (err = false);
          }
          return err;
     }

     const handleSubmit = async (e) => {
          e.preventDefault();
          if (Validate()) {
               try {
                    const response = await axios.post('https://dummyjson.com/auth/login', {
                         username: 'kminchelle',
                         password: '0lelplR',
                         // expiresInMins: 60, // optional
                    })
                    console.log(response, ":::")

                    if (response.status === 200) {
                         toast.success("Login")

                         setTimeout(() => {
                              localStorage.setItem("token", JSON.stringify(response?.data?.token))
                              localStorage.setItem("userData", JSON.stringify(response?.data))
                              navigate("/product/list")
                         }, 3000);
                    }
               } catch (error) {
                    console.error(error);
               }

               setError({})

          }
     };

     return (
          <>
               <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control
                              type="text"
                              placeholder="Enter email"
                              value={userName}
                              name="userName"
                              onChange={(e) => setUserName(e.target.value)}
                         />
                    </Form.Group>
                    {error && <p style={{ color: "red" }}>{error?.userName}</p>}

                    <Form.Group controlId="formPassword" classname="pas-word">
                         <Form.Label>Password</Form.Label>
                         <Form.Control
                              type="password"
                              placeholder="Password"
                              value={password}
                              name="password"
                              onChange={(e) => setPassword(e.target.value)}
                         />
                    </Form.Group>
                    {error && <p style={{ color: "red" }}>{error?.password}</p>}
                    <Button variant="primary" type="submit">
                         Submit
                    </Button>
                    <div className="form-field flex100 mb-0">
                         <p className="content-link">
                              Don't have an account!{" "}
                              <Link> Sign Up</Link>
                         </p>
                    </div>
               </Form >
               <ToastContainer />
          </>
     );
};

export default LoginForm;
