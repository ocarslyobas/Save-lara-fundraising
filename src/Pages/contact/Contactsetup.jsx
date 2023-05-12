import axios from 'axios';
import React from 'react';
import './contact.css';
import { useState } from 'react';


const Contactsetup = ()=> {

    const[data, setData]= useState({
        FullName:"",
        Email:"",
        Message:""
    });
    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function submit(e) {
        e.preventDefault();
        
    }
    

    

return(
    <div className='contactcontainer'>

        <div className='container-fliud' id='contactcontent'>
            <h1 className="text-center">Contact Us.</h1>
            
            <form className="form-group w-100" onSubmit={submit}>
            <input className="form-control-lg mb-3 mt-5  w-100" type="text" value={data.FullName} id="FullName"  required="" placeholder="Enter FullName" onChange={(e)=>handle(e)}/>
            <input className="form-control-lg mb-3  w-100"  type="email" value={data.Email} id="Email"  placeholder="Email" onChange={(e)=>handle(e)}/>
            <textarea className="form-control-lg h-10 w-100" value={data.Message} id="Message" placeholder="Enter text" onChange={(e)=>handle(e)}> </textarea>
            <button className="btn btn-primary btn-lg mt-5  w-100">submit</button>
            </form>
        </div> 

    </div>
    )

}

export default Contactsetup;