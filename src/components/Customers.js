import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Row } from 'react-bootstrap'

export default class Customers extends Component {
   state = {
      items:[]
    }

   componentDidMount(){
      var config = {
         method: 'get',
         url: 'https://jsonplaceholder.typicode.com/users',
      }
      axios(config)
         .then(res => {
            this.setState({ items: res.data })
         })
   }

   render() {
      return(
         <div>
            <Row>
               <Button variant="primary">Lähetä kysely</Button>{' '}
            </Row>
            <Row>
                  {this.state.items.map((customer) =>
                  <Card style={{ width: '18rem' }}>
                     <Card.Img variant="top" src="https://tinyfac.es/data/avatars/E0B4CAB3-F491-4322-BEF2-208B46748D4A-200w.jpeg" />
                     <Card.Body>
                        <Card.Title>{customer.name}</Card.Title>
                        <Card.Text>
                           <ul>
                              <li>email: {customer.email}</li>
                              <li>id: {customer.id}</li>
                              <li>organisaatio: {customer.company.name}</li>
                           </ul>
                        </Card.Text>
                        <Button variant="primary">Avaa kortti</Button>
                     </Card.Body>
                  </Card>
                  )}
            </Row>
         </div>
         )
   }

 }

