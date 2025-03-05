---
sidebar_position: 4
---

# 4. Transaction Posting

# 4.1 POST URL: /vpa/paywithvpa/

**Request Parameters**

<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Parameter Name </th>
         <th>Data Type </th>
         <th>Constraint</th>
         <th>Description </th>
         <th>Presence</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>requestIdentifier</td>
      <td>String</td>
      <td>Length(20) </td>
      <td>Request id provided 
by NPI</td>
      <td>M</td>
     </tr>
     <tr>
      <td>2</td>
      <td>originatorUniqueId</td>
      <td>String</td>
      <td>Length(max. 30) </td>
      <td> Originator unique
identifier</td>
      <td>M</td>
     </tr>
      <tr>
      <td>3</td>
      <td>vpa</td>
      <td>String</td>
      <td>Length(10)</td>
      <td>Beneficiary identifier 
(VPA) for fund transfer</td>
      <td>M</td>
     </tr>
      <tr>
      <td>4</td>
      <td>bankId </td>
      <td>String</td>
      <td> Length(max. 4)  </td>
      <td>Beneficiary 
participant code in 
NCHL system
</td>
      <td>M</td>
     </tr>
      <tr>
      <td>5</td>
      <td>debtorAgent</td>
      <td>String</td>
      <td>  Length(max. 4) </td>
      <td>Debtor bank code in 
NCHL system </td>
      <td>M</td>
     </tr>
      <tr>
      <td>6</td>
      <td>debtorBranch </td>
      <td>String</td>
      <td>Length(max.4) </td>
      <td>Debtor branch code in 
NCHL system</td>
      <td>M</td>
     </tr>
      <tr>
      <td>7</td>
      <td>debtorAccountId </td>
      <td>String</td>
      <td>Length(max. 20) </td>
      <td>Debtor account number</td>
      <td>M</td>
     </tr>
     <tr>
      <td>8</td>
      <td> debtorName </td>
      <td>String</td>
      <td> </td>
      <td>Debtor account name</td>
      <td>M</td>
     </tr>
     <tr>
      <td>9</td>
      <td> amount</td>
      <td>Big Decimal</td>
      <td></td>
      <td>Transaction amount</td>
      <td>M</td>
     </tr>
     <tr>
      <td>10</td>
      <td>remark</td>
      <td>String</td>
      <td>Length(max. 30) </td>
      <td>Transaction remarks</td>
      <td>M</td>
     </tr>
     <tr>
      <td>11</td>
      <td> token</td>
      <td>String</td>
      <td> </td>
      <td>Token</td>
      <td>M</td>
     </tr>
 </tbody>
</table>

**Note: For connectIPS based VPA transaction, bank id will be CIPS.**

**Token String = originatorUniqueId+”,” +requestIdentifier+”,” + bankId+”,” + vpa+”,” +debtorAgent+”,” + 
debtorBranch+ “,” + debtorAccountId+ “,” + amount+ “,” + userId**

**Request Parameters**
 <table>
     <thead>
       <tr>
         <th>#</th>
         <th>Parameter Name </th>
         <th>Data Type </th>
         <th>Constraint</th>
         <th>Description </th>
         <th>Presence</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>requestIdentifier</td>
      <td>String</td>
      <td>Length(20) </td>
      <td>Request id provided 
by NPI</td>
      <td>M</td>
     </tr>
     <tr>
      <td>2</td>
      <td>originatorUniqueId</td>
      <td>String</td>
      <td>Length(max. 30) </td>
      <td> Originator unique
identifier</td>
      <td>M</td>
     </tr>
      <tr>
      <td>3</td>
      <td>vpa</td>
      <td>String</td>
      <td>Length(10)</td>
      <td>Beneficiary identifier 
(VPA) for fund transfer</td>
      <td>M</td>
     </tr>
      <tr>
      <td>4</td>
      <td>debitStatus</td>
      <td>String</td>
      <td> Length(3) </td>
      <td>Debit status</td>
      <td>M</td>
     </tr>
      <tr>
      <td>5</td>
      <td>creditStatus</td>
      <td>String</td>
      <td>  Length(3) </td>
      <td>Credit status</td>
      <td>M</td>
     </tr>
      <tr>
      <td>6</td>
      <td>npiBatchId</td>
      <td>String</td>
      <td></td>
      <td>Corresponding 
batch id for 
transaction.</td>
      <td>M</td>
     </tr>
      <tr>
      <td>7</td>
      <td>npiTranactionId  </td>
      <td>String</td>
      <td>  </td>
      <td>Corresponding 
transaction id for 
transaction.</td>
      <td>M</td>
     </tr>
      <tr>
      <td>8</td>
      <td>token </td>
      <td>String</td>
      <td>  </td>
      <td>Token</td>
      <td>M</td>
     </tr>

</tbody>
</table>

**Token String = originatorUniqueId+”,” +requestIdentifier+”,” + vpa+”,” + debitStatus+”,” +npiBatchId+”,” + 
npiTransactionId+ “,” + userId**


**Sample Request**
```json
{
 "requestIdentifier":"2021081**812628Srm",
 "originatorUniqueId":" VPA-123456",
 "vpa":"9841000000",
 "bankId":"2301",
 "debtorAgent":"1701",
 "debtorBranch":"1",
 "debtorAccountId":"1232525252",
 "debtorName":"Sparrow SMS",
 "amount":200,
 "remark":"Test VPA Payment",
 "token":"TOKEN
}
```
 **Success Response**
```json

{
"requestIdentifier": "2021081**812628Srm ",
"originatorUniqueId": " VPA-123456",
 "vpa": "9841000000",
 "debitStatus": "000",
 "creditStatus": "114",
 "npiBatchId": "711832",
 "npiTransactionId": "1234201",
 "token": "TOKEN"
}
```
**Failure Response**
```json

{
 "responseCode": "400",
 "responseDescription": "PARAMETER VALIDATION ERROR",
 "fieldErrors": [
 {
 "field": "vpa",
 "message": "VPA should not less than 10-character."
 }
 ]
}
```