import React, { Component } from 'react';
import axios from 'axios';
import { Button, ListGroup, Col, Row, Table} from 'react-bootstrap'
export default class Surveys extends Component {
   state = {
      items:[]
    }

   componentDidMount(){
      var config = {
         method: 'get',
         url: 'https://staging-rest.webropol.com/api/v1/surveys',
         headers: {
            'Authorization': 'Bearer e_WBVb_lrmwTOsuJcQJFmrWxilgxrZPIeamazVKyTjd3EM_0xd7a-n9uJj-cGlr95pXGP6BNmF-duGdndj6ifpw6HktCsRuCXmOrclZW9ROtJpKhFWAZ4xntc0NzTv6i1mM5XN1paeCQog_ZKU-A2Z95fP2xzwg_9QRuT1mrHly2ew7Qwr3RfNQIRzeRtbOdruYG7WrvEPTe2-6MGOoNZCHK6QhQDURHzAKaWMhrz3DpYkBPTG5-_NKweZA_X2WyhPyqkSkFLNWNNJ1xLyqEys4fAH3aTMpOsSyTh0h-jXbMV19HGJCsxuEUGG5UjPiGCWXY-DWboHbWpqT_nPEZyBb3U7y9w3TIiiMPHJfEm_s'
         }
      }
      axios(config)
         .then(res => {
            this.setState({ items: res.data })
            console.log(res.data)
         })
   }

   render() {
      return(
         <div>
            <Table striped bordered hover>
               <thead>
                  <th>Kysely</th>
                  <th>Lähetä</th>
               </thead>
            <tbody>
           {this.state.items.map((survey) =>
           <tr>
           <td key={survey.id}>{survey.SurveyTitle}</td>
           <td><Button size="sm">Lähetä</Button></td>
           </tr>
           )}
         </tbody>
           </Table>
         </div>
         )
   }

 }

