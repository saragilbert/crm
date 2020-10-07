import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Row, Table} from 'react-bootstrap'
import { customerDB } from './data/DB'

export default class Customers extends Component {
   state = {
      items:[]
    }



   render() {
      return(
         <div>
            <Row>
                  {customerDB.map((customer) =>
                  <Card style={{ width: '30rem' }}>
                     <Card.Img variant="top" src='https://avatars.dicebear.com/api/{customer.gender}/{customer.img}.svg'/>
                     <Card.Body>
                        <Card.Title>{customer.name}</Card.Title>
                        <Card.Text>
                           <Table>
                              <tbody>
                                 <tr>
                                    <td>
                                       email:
                                    </td>
                                    <td>
                                       {customer.email}
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       id:
                                    </td>
                                    <td>
                                       {customer.id}
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       organisaatio:
                                    </td>
                                    <td>
                                       {customer.organization}
                                    </td>
                                 </tr>
                                 <tr></tr>
                              </tbody>
                           </Table>
                        </Card.Text>
                        <Button size="sm" variant="primary">Avaa kortti</Button>
                     </Card.Body>
                  </Card>
                  )}
            </Row>
         </div>
         )
   }

 }

