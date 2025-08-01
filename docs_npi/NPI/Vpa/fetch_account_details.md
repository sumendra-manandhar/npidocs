---
sidebar_position: 3
---
# 3. Fetch Account Details

# 3.1 POST URL: /vpa/fetchaccountdetail

**Request Parameters**
<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Parameter Name </th>
         <th>Data Type</th>
         <th>Constraint </th>
         <th>Description</th>
         <th>Presence</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>originatorUniqueId</td>
      <td>String</td>
      <td>Length(max. 20)</td>
      <td>Originator unique identifier</td>
      <td>M</td>
     </tr>
     <tr>
      <td>2</td>
      <td>bankId</td>
      <td>String</td>
      <td>Length(max. 4) </td>
      <td> Beneficiary participant 
code in NCHL system
</td>
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
      <td>requestToken</td>
      <td>String</td>
      <td>  </td>
      <td>Token</td>
      <td>M</td>
     </tr>
      </tbody>
</table>

**Note: For connectIPS based VPA transaction, bank id will be CIPS.**

**Token String= originatorUniqueId+”,”+ vpa+”,” + bankId+”,”+ userId**

 **Response Parameters**

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
      <td>Length(30) </td>
      <td>Request id provided 
by NPI</td>
      <td>M</td>
     </tr>
     <tr>
      <td>2</td>
      <td>originatorUniqueId</td>
      <td>String</td>
      <td>Length(max. 20) </td>
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
      <td>acctName</td>
      <td>String</td>
      <td>  </td>
      <td>Beneficiary account 
name</td>
      <td>M</td>
     </tr>
      <tr>
      <td>6</td>
      <td>accountId</td>
      <td>String</td>
      <td>Length(max. 20) </td>
      <td>Beneficiary account 
number</td>
      <td>M</td>
     </tr>
      <tr>
      <td>7</td>
      <td>token </td>
      <td>String</td>
      <td>  </td>
      <td>Token</td>
      <td>M</td>
     </tr>
      </tbody>
</table>

**Token String= requestIdentifier +”,” +originatorUniqueId+”,” + bankId+”,” + vpa+”,” +acctName +”,” + 
accountId + “,” + userId**


**Sample Request**
```json
{
 "originatorUniqueId": "VPA-123456",
 "bankId": "2301",
 "vpa":"9841000000",
 "requestToken": “TOKEN”
}
```

**Success Response**
```json
{
 "requestIdentifier": "2021081**812628Srm",
 "originatorUniqueId": " VPA-123456",
 "vpa": "9841000000",
 "bankId": "2301",
 "acctName": "BISH*****NTHI",
 "accountId": "************3456",
 "token" : “TOKEN”
}
```
**Failure Response**
```json
Case I
{
 "responseCode": "E007",
 "responseDescription": "TECHNICAL VALIDATION FAILED",
 "fieldErrors": [
 {
 "field": "originatorUniqueId",
 "message": "Duplicate request."
 }
 ]
}
```
```json
Case II
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

