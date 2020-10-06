import React, { Component } from 'react';
import axios from 'axios';
import { Button, ListGroup} from 'react-bootstrap'
export default class Surveys extends Component {
   state = {
      items:[]
    }

   componentDidMount(){
      var config = {
         method: 'get',
         url: 'https://staging-rest.webropol.com/api/v1/surveys',
         headers: {
            'Authorization': 'Bearer cJB4-s-TUywA1Fkj977si-oOaeR1n-d7PbweverDsbhLlF3YdJ0nWckpjFAWOp5WSbto0epCVkjK535jF85vXF8TTG1EnSDwhIaI_TGEiK2NpwZDhz2DE09xb2cMqw4cYp0kZwyUDqi6Wt6RC6E4tc5fLMxW-ZMay0inssGyKvD6Ih2rqBlZdC1WJMVlqWtAnU93bmnsXQJY9FT8eqK-cy8MI9R6NjPXhU0khyZrYClkw0Fjuo062anA0qCGwcdaWNZGnIit6kZnJ1QckVrtiQ7IrOKEjEw0Y9ARoCBhxTDHJwQW37fPG6jjpNjCyazw06HRqwSJUN_KLldc9gS2pr3CgcU0eq9xd4aytLfEAGw'
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
            <ListGroup as="ul">
           {this.state.items.map((survey) =>
             <ListGroup.Item as="li" key={survey.id}>{survey.SurveyTitle}<Button>Lähetä</Button></ListGroup.Item>

           )}
           </ListGroup>
         </div>
         )
   }

 }

