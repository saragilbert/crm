export const customerDB = [
   {
      "firstName": "Sara",
      "lastName": "Gilbert",
      "id": "1112223",
      "email": "sara.gilbert@webropol.com",
      "phone": "+358401705072",
      "organization": "Webropol Oy",
      "gender": "female"
   },
   {
      "firstName": "Markus",
      "lastName": "Mokko",
      "id": "777788",
      "email": "markus.mokko@webropol.com",
      "phone": "+358401705072",
      "organization": "Webropol Oy",
      "gender": "male"
   },
   {
      "firstName": "Tarja",
      "lastName": "Sarvi",
      "id": "88998377",
      "email": "tarja.sarvi@webropol.com",
      "phone": "+358401705072",
      "organization": "Webropol Oy",
      "gender": "female"
   },
   {
      "firstName": "Lauri",
      "lastName": "Laakso",
      "id": "335332",
      "email": "lauri.laakso@webropol.com",
      "phone": "+358401705072",
      "organization": "Laurin Firma",
      "gender": "male"
   }
 ];
export const Bearer = "Bearer 7vuDrV1DAt7ZOZmrDwVdhN-nIJorr0kC0gxMUD2suZsuPO8nUlr9wPsB8Mps6Qy1iOimz-L7Fwj_7ObuvbyMLmrWXF2TVJrjesYfRqwyFbaWOrd3YVuTZSNNgI_M8jBwu3YtDJ4PZLp05gjDSCH0klCnoLWOBABGeXSUphOTOsrFIUbbYfk6FVSguWeDxj2VwJc16JMDnNB90w8H5LOyws7Et0ogF_IuLm2Ra7BIF36DYT71jPbb9IfZ0wM7pPlPKIHYSaFLfNi6Yzbjf1tXb89VRq1YAgKYYCFuIfkqg5_yU4vh8PcE2V2z8ZBiww_MTphzXRj-54yD8xfwMHkqFh_tU4QBPe4VIg_TBcu0J44"

export const Recipients =
   {
      "Recipients": [
        {
          "Email": "sara.gilbert@webropol.com",
          "PhoneNumber": "+358401705972",
          "FirstName": "Sara",
          "LastName": "Gilbert",
          "RecipientGroupId": "00000000-0000-0000-0000-000000000000"
        },
            {
          "Email": "markus.mokko@webropol.com",
          "PhoneNumber": "+358504307835",
          "FirstName": "Markus",
          "LastName": "Mokko",
          "RecipientGroupId": "00000000-0000-0000-0000-000000000000"
        }

   ]
}

export const sendEmailBody = {
   "Filter":"SendToAll",
   "EmailBody":"Hello I am API!",
   "EmailSubject":"APIAPIAPII",
   "TemplateId":"8040f47b-fef7-4870-a25b-6e2eb01865b8",
   "RecipientGroupId":"00000000-0000-0000-0000-000000000000"
}

export const sendSmsBody = {
   "Message": "Jos sait tän nii mun apinappi toimii! Hurra!",
   "Filter": "SendToAll",
   "NumberOfReminders": 1
 }