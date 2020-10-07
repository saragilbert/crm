import React from 'react';
import { Button, Modal, Alert } from 'react-bootstrap'
import { Bearer, customerDB, Recipients, sendEmailBody, sendSmsBody } from './data/DB'
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

   //Miks id ei kule mukana?
   async function sendEmail (id){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", Bearer);
      myHeaders.append("Cookie", ".AspNet.Cookies=Y9ikmBCZP1ivYNsZ5Fh6npop5XSqoCgEytUOcj4r497JoGpELEO2Mzlo2tY1hukJ950z4vskL6nK9gRsEHw9wk0YF_NUmNyywGAuglUTDgUgdwnK4oxBIfMd3gbXifvK0Dp2VQhbxWxCGgVzcVg66ab4afetBVaZoRWNUZlNfbqdmWEgYprzLV0r98pbTUu3TpTeQw8cMsSINZhHt3qy-LZbeD8I5aEWjYyrL9rC56N9y7n7i9vAc0ecVKdZ24z4pga-ji4bDQ8brke9TZlsB2ULo3lehNEj7Ev6wPyWbqRFrzAh6dKEkZik33zoxI60eSjnLVc4snkSIR0tLhoWpnWOsPQV2YOcgUDG9cfLj_A");

      var raw = JSON.stringify(Recipients);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      var baseUrl = 'https://staging-rest.webropol.com/api/v1/surveys/'
      var surveyId = 'aabdb97a-df0a-4c2a-90ed-fbcb5313ecb6'
      //https://staging-rest.webropol.com/api/v1/surveys/ad4dee82-2000-4468-bbff-5fd5093ba7c1/recipients/add
      console.log(surveyId)
      var url = baseUrl+surveyId+'/recipients/add'
      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      // SEND EMAIL

      var reqOpt = {
         method: 'POST',
         headers: myHeaders,
         body: JSON.stringify(sendEmailBody),
         redirect: 'follow'
      };

      var sendUrl = baseUrl+surveyId+'/send/email'
      fetch(sendUrl, reqOpt)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


   //SEND SMS
      var smsOpt = {
         method: 'POST',
         headers: myHeaders,
         body: JSON.stringify(sendSmsBody),
         redirect: 'follow'
      };

      var sendUrl = baseUrl+surveyId+'/send/sms'
      fetch(sendUrl, smsOpt)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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
            <Alert variant="info">
               Olet lähettämässä  kyselyä valitsemillesi henkilöille.
            </Alert>
            <BootstrapTable
            keyField="id"
            data={customerDB}
            columns={cols}
            selectRow={selectRow}
            striped
            hover
            condensed
            />
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Sulje ikkuna
           </Button>
           <Button variant="primary" onClick={sendEmail}>
             Lähetä email
           </Button>
           <Button variant="primary" onClick={sendEmail}>
             Lähetä SMS
           </Button>
         </Modal.Footer>
       </Modal>
      </div>
   );
 }


 export default SendModal;