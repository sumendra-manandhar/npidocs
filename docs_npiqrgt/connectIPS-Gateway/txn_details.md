---
sidebar_position: 5
---

# 5. Transaction Details

To extract the additional details of merchant and creditor transaction details, A REST based API is provided 
as below. The API requires a basic authentication process which is completed using the provided app id as 
user name along with password. JSON request must contain merchant id, app id, reference id, transaction 
amount and token. Reference Id is the TXNID field value supplied during the payment request as described 
in previous sections. Token is basically a hash value signed with the digital certificate of the creditor. 
 
URL: https://{base_url}/connectipswebws/api/creditor/gettxndetail


```
Basic Authentication: 
 
User Id: <App Id> 
Password: <Password> 
 
Example: 
User Id: MER-550-APP-1 
Password: <Password provided in email> 
 
Hashing String Format for token: 
MERCHANTID=<MerchantId>,APPID=<AppId>,REFERENCEID=<TXNIDintheRequest>,TXNAMT=<Transacti
on Amount in paisa> 
Example: 
Request: Same as that of validatetxn.

```
**Response:**
```json
{ 
 "status": "SUCCESS", 
 "statusDesc": "TRANSACTION SUCCESSFUL", 
 "merchantId": 980, 
 "appId": "MER-980-APP-1", 
 "referenceId": "100sadf45", 
 "txnAmt": 1000.00, 
 "token": null, 
 "debitBankCode": "2501", 
 "txnId": 12422440, 
 "batchId": 712095958, 
 "txnDate": 1670482848997, 
 "txnCrncy": null, 
 "chargeAmt": 200.00, 
 "chargeLiability": "CG", 
 "refId": "100",
 "remarks": "test remarks", 
 "particulars": "test particular", 
 "creditStatus": "000" 
} 
```
**Payment validation response parameters:**

<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Field Name </th>
         <th>Description</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>status</td>
      <td>Status to be considered for transaction response.</td>
     </tr>
      <tr>
      <td>2</td>
      <td>statusDesc</td>
      <td>Description of the status of transaction</td>
     </tr>
      <tr>
      <td>3</td>
      <td>merchantId</td>
      <td>Unique identifier to identify merchant in the system.</td>
     </tr>
      <tr>
      <td>4</td>
      <td>appId</td>
      <td>Unique identification, which will be used to identify the account 
details of the merchant’s application.</td>
     </tr>
      <tr>
      <td>5</td>
      <td>referenceId</td>
      <td>Transaction id passed by the merchant in gateway login page. </td>
     </tr>
      <tr>
      <td>6</td>
      <td>txnAmt</td>
      <td>Transaction amount in paisa.</td>
     </tr>
      <tr>
      <td>7</td>
      <td>debitBankCode </td>
      <td>Debit bank account’s code. (Customer’s bank account code)</td>
     </tr>
      <tr>
      <td>8</td>
      <td>txnId</td>
      <td>NCHL’s transaction Id.</td>
     </tr>
      <tr>
      <td>9</td>
      <td>batchId</td>
      <td>NCHL’s batch Id. </td>
     </tr>
      <tr>
      <td>10</td>
      <td>txnDate</td>
      <td>Date of the transaction.</td>
     </tr>
      <tr>
      <td>11</td>
      <td>txnCrncy</td>
      <td>Currency of the transaction.</td>
     </tr>
      <tr>
      <td>12</td>
      <td>chargeAmt</td>
      <td>Charge amount in paisa.</td>
     </tr>
      <tr>
      <td>13</td>
      <td>chargeLiability</td>
      <td>Charge Liability on: MN=Merchant, CG=Customer etc.</td>
     </tr>
      <tr>
      <td>14</td>
      <td>refId </td>
      <td>Reference Id passed in the gateway login page.</td>
     </tr>
      <tr>
      <td>15</td>
      <td>remarks </td>
      <td>Remarks passed in the gateway login page. </td>
     </tr>
      <tr>
      <td>16</td>
      <td>particulars</td>
      <td>Particulars passed in the gateway login page. </td>
     </tr>
      <tr>
      <td>17</td>
      <td>creditStatus</td>
      <td>Status of the transaction at merchant’s end. (000, 999 and 
DEFER=Success otherwise failed.)</td>
     </tr>
         </tbody>
</table>