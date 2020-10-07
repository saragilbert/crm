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
            'Authorization': 'Bearer 2X54QwviDtOGdCm3jnYDNGulR0QZBzG70-kaBN-2EWk7sO3jkAdXctigcYth28LKgitJdI0mIpHLmpZu8MWyte06pqgQjAvz6zS30WgDWMo2f6P615q_t3Gw3cGIpSNwKeUuPL9Gt-0ScZb3Z9EAzlMAkQuXMvL2FRZkVMcDXqiMYMAL62E3OGJiNhu7_isoTy5p9-uA72VkHqEel_oRZv7H3FK1LpyI0fBGH8UzaXFStu-GKZ-PyUUBUl2Yw_CtwEbU4W-deDeX5wxhFb9LCD5TgUf1WQFNKgiFSfIzUsuM_aE_97LfefT2UdcYYWQCA30YycMX7sGuTizmZJZb_lY5NK02uthMzLzgHnMV4y8'
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

