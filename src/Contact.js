import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();
    const [data, setData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    function handleChange(event) {
        setData(prevData => {
            return {
                ...prevData, [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        if (data.email === "" || data.name === "" || data.message === "") {
            alert("Please make sure to fill out all fields");
        }
        else {
            emailjs
                .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
                    publicKey: process.env.REACT_APP_PUBLIC_KEY,
                })
                .then(
                    () => {
                        alert("Email was successfully sent! I will get back to you as soon as possible");
                    },
                    (error) => {
                        alert("Something went wrong, please try again.")
                    },
                );

        }
        setLoading(false)
    }

    return (
        <div>
            <h1 className="fw-normal text-center">Contact</h1>

            <form className="text-center slide-up" ref={form} onSubmit={handleSubmit}>
                {loading && <p style={{color: 'red'}}>Loading Please Wait...</p>}
                <input type="text" placeholder="Name" name="name" onChange={handleChange} className="border border-black text-center mt-3 form-width form-custom" style={{ padding: "5px" }} />
                <br />
                <br />
                <input type="email" placeholder="Email" name="email" onChange={handleChange} className="border border-black text-center form-width form-custom" style={{ padding: "5px" }} />
                <br />
                <br />
                <textarea placeholder="Message..." name="message" value={data.message} onChange={handleChange} className="border border-black text-center form-width form-custom" style={{ padding: "5px" }} />
                <br />
                <br />
                <input type="submit" className="btn btn-dark" />
            </form>
        </div>

    );
}

export default Contact

//TODO: Create environment variables for the ids 
//TODO: Remember to create environment variables for netlify 