import React, { Component } from 'react';
import axios from 'axios';

export default class Folders extends Component {
   state = {
      items:[]
    }

   componentDidMount(){
      var config = {
         method: 'get',
         url: 'https://staging-rest.webropol.com/api/v1/folders',
         headers: {
            'Authorization': 'Bearer cJB4-s-TUywA1Fkj977si-oOaeR1n-d7PbweverDsbhLlF3YdJ0nWckpjFAWOp5WSbto0epCVkjK535jF85vXF8TTG1EnSDwhIaI_TGEiK2NpwZDhz2DE09xb2cMqw4cYp0kZwyUDqi6Wt6RC6E4tc5fLMxW-ZMay0inssGyKvD6Ih2rqBlZdC1WJMVlqWtAnU93bmnsXQJY9FT8eqK-cy8MI9R6NjPXhU0khyZrYClkw0Fjuo062anA0qCGwcdaWNZGnIit6kZnJ1QckVrtiQ7IrOKEjEw0Y9ARoCBhxTDHJwQW37fPG6jjpNjCyazw06HRqwSJUN_KLldc9gS2pr3CgcU0eq9xd4aytLfEAGw'
         }
      }
      axios(config)
         .then(res => {
            this.setState({ items: res.data })
         })
   }

   render() {
      return(
         <div>
           {this.state.items.map((f) =>
           <h1>{f.Name}</h1>
           )}
         </div>
         )
   }

 }

