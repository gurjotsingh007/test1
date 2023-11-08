import React, { useState } from 'react'
import "./Contact.css"
import Axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsloading] = useState(false);
    function handleSubmit(event){
        event.preventDefault();
        setIsloading(true);
        Axios.post(`api/g1/submit`, {
            name,email,number,message
        })
        .then(response => {
            setIsloading(false);
            toast.success("Form Submitted Successfully",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:1300
            })
            setEmail("");
            setName("");
            setNumber("");
            setMessage("");
        })
        .catch(error => {
            setIsloading(false);
            toast.error("OPPS!! Server requests limit reached",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:1300
            })
        });

    }
  return isLoading === true? 
  <div className="spinner-border" role="status">
      <span class="sr-only"></span>
  </div> :(
    <>
      <div class='container body contact-us'>
            <div class='container-fluid'>
                 <section class="contact_us">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <div class="contact_inner">
                                        <div class="row">
                                            <div class="col-md-10">
                                                <div class="contact_form_inner">
                                                    <div class="contact_field">
                                                        <h3 class="gh1">Contact Us</h3>
                                                        <form onSubmit={handleSubmit}>
                                                        <input
                                                            type="text"
                                                            class="form-control form-group"
                                                            placeholder="Name"
                                                            required
                                                            onChange={(e) => {
                                                            setName(e.target.value);
                                                            }}
                                                        />
                                                        <input
                                                            type="email"
                                                            class="form-control form-group"
                                                            placeholder="Email"
                                                            required
                                                            onChange={(e) => {
                                                            setEmail(e.target.value);
                                                            }}
                                                        />
                                                        <input
                                                            type="number"
                                                            class="form-control form-group"
                                                            placeholder="Phone Number"
                                                            required
                                                            onChange={(e) => {
                                                            setNumber(e.target.value);
                                                            }}
                                                        />
                                                        <textarea
                                                            style={{ height: "8rem" }}
                                                            class="form-control form-group"
                                                            placeholder="Message"
                                                            required
                                                            onChange={(e) => {
                                                            setMessage(e.target.value);
                                                            }}
                                                        ></textarea>
                                                        <button class="contact_form_submit" type="submit">
                                                            Send
                                                        </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="right_conatct_social_icon d-flex align-items-end">
                                                <div class="socil_item_inner d-flex">
                                                    <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="contact_info_sec">
                                            <h4>Contact Info</h4>
                                            <div class="d-flex info_single align-items-center">
                                                <i class="fas fa-headset"></i>
                                                <span>Guru Nanak dev University</span>
                                            </div>
                                            <div class="d-flex info_single align-items-center">
                                                <i class="fas fa-headset"></i>
                                                <span>+91 9999 99999</span>
                                            </div>
                                            <div class="d-flex info_single align-items-center">
                                                <i class="fas fa-envelope-open-text"></i>
                                                <span>sgurjot0001@yahoo.com</span>
                                            </div>
                                            <div class="d-flex info_single align-items-center">
                                                <i class="fas fa-map-marked-alt"></i>
                                                <span>For any inquiries or feedback regarding our products or services, please don't hesitate to contact Us. Our dedicated customer service team is available to assist you with any questions you may have. You can reach us by phone, email, or through the contact form on our website.</span>
                                            </div>
                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                <div/> 

                </div>

      </div>
    </>
  )
}

export default Contact