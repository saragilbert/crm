import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ListGroup, Col, Row, Table} from 'react-bootstrap'
import { customerDB } from './data/DB'
import BootstrapTable from 'react-bootstrap-table-next'

function SendModal() {
   const [show, setShow] = React.useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const cols = [{
      dataField: 'firstName',
      text: 'Nimi'
   },
   {
      dataField: 'email',
      text:'Sähköjen posti'
   },{
      dataField: 'phone',
      text: 'NMT/GSM'
   },
   {
      dataField: 'id',
      text: 'id'
   }];

   const selectRow = {
      mode: 'checkbox',
      clickToSelect: true
   }
   return (
     <div>
       <Button variant="primary" onClick={handleShow}>
         Lähetä kysely
       </Button>

       <Modal size="lg" show={show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Lähetyksen asetukset</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <BootstrapTable
            keyField="id"
            data={customerDB}
            columns={cols}
            selectRow={selectRow}
            />
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Sule tää roska!
           </Button>
           <Button variant="primary" onClick={handleClose}>
             Lähetä!
           </Button>
         </Modal.Footer>
       </Modal>
      </div>
   );
 }


 export default SendModal;