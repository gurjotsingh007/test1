import Axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import "./Logout.css"
import {useState, useEffect } from "react";
const Logout = () => {
    const navigate = useNavigate();
    const [isLogout, setIsLogout] = useState(false);
    let token = null;
    useEffect(() => {
        let token = localStorage.getItem("token");
        if(!token){
            navigate("/login");
        }
    },[]);
    function logoutUser(){
        Axios.get(`/api/g1/logout`)
        .then(response => {
            toast.success("Your are logged out",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:1300
            })
            localStorage.removeItem("token");
            setIsLogout(true);
        })
        .catch(error => {
            // Handle error.
            toast.error("Cyclic Sever Error!!!!",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:1300
            })
        });
    }

    useEffect(()=>{
        isLogout?navigate("/"):navigate("/logout");
    },[isLogout]);
    return (
        <div className="logout-user">
            <ToastContainer />
            <h1>You are Successfully Logged In</h1>
            <button onClick={()=>(logoutUser())} type="button" class="btn btn-outline-success">Log Out</button>
        </div>
    )
}

export default Logout;