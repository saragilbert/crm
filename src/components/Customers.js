import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Row, Table} from 'react-bootstrap'

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
                  {this.state.items.map((customer) =>
                  <Card style={{ width: '30rem' }}>
                     <Card.Img variant="top" src="https://tinyfac.es/data/avatars/E0B4CAB3-F491-4322-BEF2-208B46748D4A-200w.jpeg" />
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
                                       {customer.company.name}
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

