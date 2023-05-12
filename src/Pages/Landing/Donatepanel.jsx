import React from 'react';
import './landing.css';
import  { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios';


const Donatepanel = ()=> {
    


        const [totaldonations, setTotaldonations] = useState("");

        const showtotaldonations = ()=>{
        Axios.get('http://localhost/fundapi/users/currentRow')
        .then(res => {
             const totalcountervalue = res.data.data.reduce((currentTotal,dataitems )=>{
               return Number(dataitems.counter) + Number(currentTotal)
             }, 0)
          setTotaldonations(totalcountervalue)
        });
    
        //or
    
    
      }
      
      useEffect(()=> {
        showtotaldonations()
      }, []);



    return ( <div className='donatepanel'>

        <p className="legendtext">Total Donations:  </p>
        <p id="totaldonations">NGN {totaldonations}</p>
        
        </div> );
}

export default Donatepanel;