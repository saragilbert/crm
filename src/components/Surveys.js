import React, { Component } from 'react';
import axios from 'axios';
import { Button, ListGroup, Col, Row, Table, OverlayTrigger, Tooltip} from 'react-bootstrap'
import { Bearer } from './data/DB'
import SendModal from './SendModal'
import { FcAdvertising, FcCancel } from "react-icons/fc";

export default class Surveys extends Component {
   state = {
      items: []
   }

   componentDidMount(){
      var config = {
         method: 'get',
         url: 'https://staging-rest.webropol.com/api/v1/surveys',
         headers: {
            'Authorization': Bearer
         }
      }
      axios(config)
         .then(res => {
            this.setState({ items: res.data })
            console.log(res.data)
         })
   }

   render() {
      async function startSend (id){

         console.log(id)
         var url = 'https://staging-rest.webropol.com/api/v1/surveys/'+ id + '/getPublicLink/'
         const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': Bearer
            },
            //body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          console.log(response)
         ;
      }
      return(
         <div>

            <Table striped bordered hover>
               <thead>
                  <th>Kyselyn nimi</th>
                  <th>Lähetä</th>
                  <th>Toiminnot</th>
               </thead>
            <tbody>
           {this.state.items.map((survey) =>
           <tr key={survey.SurveyId}>
           <td >{survey.SurveyTitle}</td>
           <td>
              <SendModal onClick={() => startSend(survey.SurveyId)} size="sm">Lähetä</SendModal>
            </td>
            <td>

      <Button
        variant="light"
        className="d-inline-flex align-items-center"
      >
        <FcAdvertising />

      </Button>
      <Button
        variant="light"
        className="d-inline-flex align-items-center"
      >
      <FcCancel/>

      </Button>

            </td>
           </tr>
           )}
         </tbody>
           </Table>
         </div>
         )
   }

 }

