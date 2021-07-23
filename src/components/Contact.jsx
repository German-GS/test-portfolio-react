import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import '../css/contact.css';


function Contact() {
    const [name, setName] = useState("");
    const [message, setMessage ]=useState("");
    const sendMessage = async(e)=>{
        e.preventDefault();
        axios.post("/api/enviarContacto",{
            name:name,
            message:message,
        });
        setName("");
        setMessage("");

        
    }

    return (
        <div className="Contact">
            <div className="contact__title">
                <h1>Contacto</h1>

            </div>
            <div className="contact__form">
                <form action="contact__form__input">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text"  name="nombre" placeholder="Nombre" id="contact__form__input"/>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="" id="" cols="30" rows="10" placeholder="Escribe aqui tu mensaje..." id="contact__form__input"></textarea>
                    <button onClick={sendMessage}>Enviar Mensaje</button>
                </form> 

            </div>
           
            
        </div>
    )
}

export default Contact
