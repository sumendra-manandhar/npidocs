---
sidebar_position: 1
---

# 1. Introduction
# 1.1 Merchant QR Generation
Merchant QR generation process includes the interface between the merchant system and NEPALPAY
QR network. This interface specification describes a technical level communication of data exchange
between the merchant system and the NEPAYPAY QR system.


### 1.1.1. Authentication and Authorization
Basic Authentication is a common method of authenticating to an API. The client sends HTTP      requests with the Authorization header that contains the Basic word followed by a space and a base64-encoded username: password string.
 
Header key = 'Authorization'
 
Value = 'Basic '+ base 64 encoding of a username and password separated by a colon.
 
Authorization: Basic ZGVtbzpwQDU1dzByZA==
 
***Example:***
```json
curl --location 'https://<host: port>/qr/generateQR' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cGxhem1hdDpBYmNkQDEyMw==' \
--data '{
    "pointOfInitialization": 12,
    "acquirerId": "00002501",
    "merchantId": "2501ELFDRY2",
    "merchantName": "Plazma Tech",
    "merchantCategoryCode": 4121,
    "merchantCountry": "NP",
    "merchantCity": "Kathmandu",
    "merchantPostalCode": "4600",
    "merchantLanguage": "en",
    "transactionCurrency": 524,
    "transactionAmount": "10.00",
    "valueOfConvenienceFeeFixed": "0.00",
    "billNumber": "012345",
    "referenceLabel": null,
    "mobileNo": null,
    "storeLabel": "Store1",
    "terminalLabel": "Terminal1",
    "purposeOfTransaction": "Bill payment",
    "additionalConsumerDataRequest": null,
    "loyaltyNumber": null,
    "token": "a1e0pTCtdgqny2BBPgKT/9EaLrRA0J99PYlNyjM5887nkebzvaKtsHT/aciZxXmqsnYMnktXJmseFIsiyE+06476RXrQaCNLEZ4LvsraSz5VWrb/ysA5HgFMqcXyRVCYkC4Ye5Uqbi87wbEyj1bb6Cb2yqDAOGm4uGmn7T5W9Gc="
}'
 
```

**Post:** /qr/generateQR

Request from Merchant to NPI for QR generation.


<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Data Items</th>
         <th>Type</th>
         <th>Length</th>
         <th>Required </th>
         <th>Remarks</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>pointOfInitialization </td>
      <td>Integer</td>
      <td>2 </td>
      <td>M </td>
      <td>Point of Initiation Method (Use 11 for
static QR and 12 for Dynamic QR)
</td>
     </tr>
     <tr>
      <td>2</td>
      <td>acquirerId</td>
      <td>String</td>
      <td></td>
      <td> M</td>
      <td>Acquirer of the QR code
</td>
     </tr>
      <tr>
      <td>3</td>
      <td>merchantId</td>
      <td>String</td>
      <td></td>
      <td>m</td>
      <td>Creditor Id/ Merchant Code</td>
     </tr>
      <tr>
      <td>4</td>
      <td>merchantName </td>
      <td>String</td>
      <td>25</td>
      <td>M</td>
      <td>Merchant Name</td>
     </tr>
      <tr>
      <td>5</td>
      <td>merchantCategory</td>
      <td>Numeric</td>
      <td>4</td>
      <td>M</td>
      <td>Merchant Category Code</td>
     </tr>
     <tr>
      <td>6</td>
      <td>merchantCity</td>
      <td>String</td>
      <td></td>
      <td>M</td>
      <td>City</td>
     </tr>
     <tr>
      <td>7</td>
      <td>merchantCountry</td>
      <td>String</td>
      <td></td>
      <td>M</td>
      <td>Country code</td>
     </tr>
     <tr>
      <td>8</td>
      <td>merchantPostalCode</td>
      <td>String </td>
      <td></td>
      <td>M </td>
      <td>Merchant’s Zip Code/Pin Code/Postal
Code</td>
     </tr>
     <tr>
      <td>9</td>
      <td>transactionCurrency</td>
      <td>Integer</td>
      <td>3</td>
      <td>M</td>
      <td>Currency code (eg. 524 for Nepali
rupee)</td>
     </tr>
     <tr>
      <td>10</td>
      <td>transactionAmount</td>
      <td>Numeric</td>
      <td>(12,2)</td>
      <td>M</td>
      <td>Amount. 0.00 if none.</td>
     </tr>
     <tr>
      <td>11</td>
      <td>valueOfConvenienceFeeFixed</td>
      <td>Numeric</td>
      <td>(10,2)</td>
      <td>O </td>
      <td>Transaction Fee, if the transaction costs
additional fee for the customer.</td>
     </tr>
    <tr>
      <td>12</td>
      <td>billNumber</td>
      <td>String </td>
      <td>25</td>
      <td>O </td>
      <td>Bill No of merchant. 0 if none.</td>
     </tr>
     <tr>
      <td>13</td>
      <td>referenceLabel</td>
      <td>String </td>
      <td>25</td>
      <td>O</td>
      <td></td>
     </tr>
     <tr>
      <td>14</td>
      <td>storeLabel</td>
      <td>String </td>
      <td>25</td>
      <td>O </td>
      <td>Store label of the QR code.</td>
     </tr>
     <tr>
      <td>15</td>
      <td>terminalLabel</td>
      <td>String </td>
      <td>25</td>
      <td>O </td>
      <td>Terminal id of the QR code.0 if none.</td>
     </tr>
     <tr>
      <td>16</td>
      <td>purposeOfTransaction</td>
      <td>String </td>
      <td>25</td>
      <td>O</td>
      <td>Purpose of transaction.</td>
     </tr>
     <tr>
      <td>17</td>
      <td>addnField1-addnField10</td>
      <td>String </td>
      <td>25</td>
      <td>O </td>
      <td>Additional fields 1 to 10 for additional
usages.</td>
     </tr>
     <tr>
      <td>18</td>
      <td>Token</td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>SHA 256 Signture Token</td>
     </tr>
     
 </tbody>
</table>

**Request Sample:**
```json
{
   "pointOfInitialization":12,
   "acquirerId":"00001701",
   "merchantId":"17012UVSTIR",
   "merchantName":"BBSM",
   "merchantCategoryCode":5021,
   "merchantCountry":"NP",
   "merchantCity":"Kathmandu",
   "merchantPostalCode":"4600",
   "merchantLanguage":"en",
   "transactionCurrency":524,
   "transactionAmount":"0.00",
   "valueOfConvenienceFeeFixed":"0.00",
   "billNumber":"012345",
   "referenceLabel":null,
   "mobileNo":null,
   "storeLabel":"1524525335",
   "terminalLabel":"Terminal1",
   "purposeOfTransaction":"Bill payment",
   "additionalConsumerDataRequest":null,
   "loyaltyNumber":null,
   "token":"PcK7JFPfEUvtGouuShjQgten7HQsAxxGVZJ+38ORzEOCEMV3Dlt7V0M7g+HUBfn0+oHZqAsb2pzTQHWEQPLmPOGR4lVEoy581vYmN5PfMLSQqb/UxixT1O4X6ZFeV9sVivP3Y1gVfILPIzRm2CfML4BTHhDlpNvoOQ840nvNn2E="
}
```
```json
TokenString for dynamic QR: acquirerId+”, “+merchantId +”, “+merchantCategoryCode+”, “+transactionCurrency+”, “+ transactionAmount+”, “+billNumber+”, “+userId
```

```json
TokenString for static QR: acquirerId+”, “+merchantId +”, “+merchantCategoryCode+”, “+transactionCurrency+”, “+billNumber+”, “+userId
```

**Note: userId is a NPI user provided to the merchant.**

**Successful Response For Dynamic QR:**
```json
{
  "timestamp": "2022-05-23 04:25:26",
  "responseCode": "000",
  "responseStatus": "SUCCESS",
  "responseMessage": "QR String generated successfully.",
  "data": {
    "validationTraceId": "2205260000001900KIY",
    "qrString": "00020100020101021229270023NCHL0000170117012UVSTIR52045021530352454040.0056040.005802NP5904BBSM6009Kathmandu6271010100306Khalti0709Terminal10812Billpayment512300192205260000001900KIY6304607F"
  }
}
```
In Response section:

 
**Note:** In case of Dynamic QR the point of Initialization will be **12.**

qrString: 0002010002010102<strong>12</strong>29270023NCHL0000170117012UVSTIR52045021530352454040.0056040.005802NP5904BBSM6009Kathmandu6271010100306Khalti0709Terminal10812Billpayment512300192205260000001900KIY6304607F"

**Successful response for static QR**
```json

{

  "timestamp": "2025-03-28 11:31:46",
  "responseCode": "000",
  "responseStatus": "SUCCESS",
  "responseMessage": "QR String generated successfully.",
  "data": {

    "qrString": "00020101021129270023NCHL000025012501DBGLNQG52044511530352456040.005802NP5917Evolve Pvt. Ltd. 6009Kathmandu6274010412340306Store10709Terminal10812Bill payment512300192503280000266732PBI63048802",
    "validationTraceId": "2503280000266732PBI"
}
}
 ```
In Response section:

**Note:**In case of static QR the point of Initialization will be  **11.**

qrString: 0002010102<strong>11</strong>29270023NCHL000025012501DBGLNQG52044511530352456040.005802NP5917Evolve Pvt.Ltd.6009Kathmandu6274010412340306Store10709Terminal10812Billpayment512300192503280000266732PBI63048802
 



The highlighted section above is the sub tag 51 of field 62 which is validation id generated by NCHL during
QR generation. This validation trace id will be used for end to end reporting and reconciliation.

**Response**

<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Data Items</th>
         <th>Type</th>
         <th>Length</th>
         <th>Required </th>
         <th>Remarks</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>validationTraceId  </td>
      <td>String</td>
      <td>20 </td>
      <td>M </td>
      <td>Unique QR validation Id provided by NCHL during QR
generation.It will be used for end to end reporting and
reconciliation</td>
     </tr>
     <tr>
      <td>2</td>
      <td>qrString</td>
      <td>String</td>
      <td></td>
      <td></td>
      <td>QR string to be used for QR generation and display.</td>
     </tr>
    </tbody>
</table>

**Unsuccessful Response**

You will get error details in responseResult (i.e. responseCode, responseDescription and fieldErrors)
respectively



**Successful Response When qrImage Tag Is True:**

The highlighted section above is the sub tag 51 of field 62 which is validation id generated by NCHL during QR generation. This validation trace id will be used for end to end reporting and reconciliation.

 
<table>
<th>#</th>
<th>Data Items</th>
<th>Type</th>
<th>Length</th>
<th>Required</th>
<th>Remarks</th>
<tr>
<td>1</td>
<td>validationTraceId</td>
<td>String</td>
<td>20</td>
<td>M</td>
<td>Unique QR validation Id provided by NCHL during QR generation.It will be used for end to end reporting and reconciliation.</td>
</tr>

<tr>
<td>2</td>
<td>qrString</td>
<td>String</td>
<td></td>
<td></td>
<td>QR string to be used for QR generation and display.</td>

</tr>

<tr>
<td>3</td>
<td>qrImage</td>
<td>String</td>
<td></td>
<td>C</td>
<td>Base64 encoded QR Image.</td>
</tr>
</table>

```json
{
    "timestamp": "2024-01-09 11:44:40",
    "responseCode": "000",
    "responseStatus": "SUCCESS",
    "responseMessage": "QR String generated successfully.",
    "data": {
        "qrString": " 00020100020101021229270023NCHL000023012301JR0R2KT52044111530105406290.14560105802NP5907BigMart6009Kathmandu62830109ABC0001540312Bikash Saran0409A123412340710ConnectIPS512300192401090000204270ZTV6304EC0E",
        "validationTraceId": "2401090000204270ZTV",
        "qrImage": "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"
    }
}

```


**Sample QR Image:**

	To generate the QR image, decode the output of qrImage tag  above with base64 to Image. 

  

 ![Example Image](/img/QR.png)
<p align="center" class="centered-caption"></p>



**Failed Response**



 ```json
{
  "responses": [
    {
      "responseCode": "400",
      "responseDescription": "PARAMETER VALIDATION ERROR",
      "fieldErrors": [
        {
          "field": "pointOfInitialization",
          "message": "Please use (11 for static QR and 12 for dynamic QR)."
        }
      ]
    },
    {
      "responseCode": "E003",
      "responseMessage": "INVALID TOKEN",
      "data": "",
      "classfielderrorlist": []
    }
  ]
}

```

**Not Found**
```json
{
"responseCode": "E010",
"responseMessage": "RECORD NOT FOUND:- Merchant not found!",
"data": null,
"classfielderrorlist": []
}

```
**Internal Server Error-500**
```json
{
"responseCode": "E999",
"responseMessage": "ERROR",
"data": null,
"classfielderrorlist": []
}
```
 **In case of service not available**
 ```json
{
"timestamp": "2022-05-26 04:07:22",
"responseCode": "E999",
"responseMessage": "ERROR",
"data": null
}
```