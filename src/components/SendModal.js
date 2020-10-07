import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ListGroup, Col, Row, Table} from 'react-bootstrap'
import { Bearer } from './data/DB'

function SendModal() {
   const [show, setShow] = React.useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
     <div>
       <Button variant="primary" onClick={handleShow}>
         Lähetä kysely
       </Button>

       <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Lähetyksen asetukset</Modal.Title>
         </Modal.Header>
         <Modal.Body>MEEP</Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Close
           </Button>
           <Button variant="primary" onClick={handleClose}>
             Save Changes
           </Button>
         </Modal.Footer>
       </Modal>
      </div>
   );
 }


 export default SendModal;