import React, {useState} from 'react';
import './landing.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {PaystackButton} from "react-paystack"
import axios from 'axios';

const Buttonmodal = ()=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("")
    const [Fullname, setFullname] = useState("")
    
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      payWithPaystack(email,amount,Fullname);
      
     console.log(email,amount,Fullname)

     axios.post('http://localhost/fundapi/users/loadData',
     {
      Fullname:Fullname,
      email:email,
      amount: amount
    })
     .then(res=> {console.log(res)})
     

    }

    const payWithPaystack = ()=> {
      const handler = PaystackPop.setup({
        key: 'pk_test_456836ae28dfc0480736747fc38b70f2b22d681f', 
        email,
        amount: amount * 100,
        currency: 'NGN',
        callback: (response)=> {
          const reference = response.reference;
          alert('Payment complete! Reference: ' + reference);
          
        },
        onClose: ()=> {
          alert('Transaction was not completed, window closed.');
        },
      });
      handler.openIframe();
    }



  




return(

    <div>
        <button className='btn btn-info btn-md m-2' onClick={handleShow} >Donate</button>
    

        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
        <Modal.Title>Enter details to complete payment</Modal.Title>
         </Modal.Header>

        <Modal.Body>
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        value = {email}
        type="email"
        required
        placeholder="name@example.com"
        onChange = {(e)=>setEmail(e.target.value)}
        autoFocus
        />
        </Form.Group>

   
    <Form.Group className="mb-3">
      <Form.Label>Fullname</Form.Label>
      <Form.Control
        type="text"
        placeholder='Enter Full name'
        required
        value = {Fullname}
        onChange = {(e)=>setFullname(e.target.value)}
        autoFocus />
    </Form.Group>


    <Form.Group className="mb-3">
      <Form.Label>Amount</Form.Label>
      <Form.Control 
      type="tel" 
      placeholder='Enter Amount'
      required
      value = {amount}
      onChange = {(e)=>setAmount(e.target.value)} 
      autoFocus />
    </Form.Group>

    <Modal.Footer>
  <Button variant="primary" onClick={handleClose}>
    cancel
  </Button>
  <Button type="submit" variant="warning" onClick={handleClose} >
    submit
  </Button>
 
  {/* <PaystackButton{...componentProps}/> */}
</Modal.Footer>

  </Form>
</Modal.Body>



</Modal>

</div>
)
}
export default Buttonmodal;