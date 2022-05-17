
import React, { Component, useState } from 'react'
import { Form , Button, Image, Col, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fxnHtml, MyDocument } from '../components/util';
import pdf from "html-pdf";
import axios from "axios";

const SubmitForm = ()=>{
    
    
    const [fullname, setName] = useState("");
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [show,setShow]=useState(false);

    const submitHandler = async(e)=>{
        e.preventDefault();
        console.log("gotParams",fullname,address);
        setShow(true);
        //let html = fxnHtml({fullname,address});
        setLoading(true);
        const resp = await axios.post("http://localhost:4000/getPdf",{fullname,address});
        const url = resp.data.dataMessage
        console.log("gotParamsResp",url);
        setLoading(false);
        window.open(url);
      }

    return(
        <div className="">
        <p style= {{"margin-bottom":50}}>FILL FORM</p>
        <form onSubmit = {submitHandler}>
          <input className="mb-3" name="name" type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)} value={fullname}/>
          <input className="mb-3" name="address" type="text" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}  value={address}/>
        <Button type = 'submit'>Submit Form</Button>
        </form>
{
    loading ? <Spinner animation="border" />: ""
}    </div>
    )
}

export default SubmitForm;