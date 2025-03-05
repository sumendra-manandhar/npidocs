---
sidebar_position: 2
---
# 2. API For Bulk Merchant Upload
## 2.1. API To Register Merchant On NEPALPAYQR
 
The "Merchant Bulk Upload on QR" feature helps to streamline and simplify the process of onboarding 
multiple merchants or businesses into NEPALPAYQR while seamlessly assigning them unique QR codes
for identification and payment acceptance.

**Post: /api/merchant/bulk-upload**

**Request parameters:**

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
      <td>fullname </td>
      <td>String</td>
      <td>25</td>
      <td>M </td>
      <td>Merchant Common Name</td>
     </tr>
     <tr>
      <td>2</td>
      <td>legalName  </td>
      <td>String</td>
      <td></td>
      <td>M </td>
      <td>Full Name of the Merchant</td>
     </tr>
     <tr>
      <td>3</td>
      <td>merchantCategoryCode </td>
      <td>String</td>
      <td>4</td>
      <td>M </td>
      <td>Merchant Category Code
(MCC)</td>
     </tr>
     <tr>
      <td>4</td>
      <td>district </td>
      <td>String</td>
      <td></td>
      <td>M </td>
      <td>Merchant Address
</td>
     </tr>
     <tr>
      <td>5</td>
      <td> province</td>
      <td>String</td>
      <td></td>
      <td>M </td>
      <td>Merchant Address
</td>
     </tr>
     <tr>
      <td>6</td>
      <td> registrationType</td>
      <td>String</td>
      <td></td>
      <td>M </td>
      <td>Registration type of
merchant
- sole-proprietorship
- partnership
- public
- private</td>
     </tr>
     <tr>
      <td>7</td>
      <td>idDocNumber</td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>Merchant PAN number.
</td>
     </tr>
     <tr>
      <td>8</td>
      <td>ownerName</td>
      <td>String </td>
      <td></td>
      <td>C</td>
      <td>Required depends on
registration type
Required for
- sole-proprietorship
- private
partnership</td>
     </tr>
     <tr>
      <td>9</td>
      <td> gender</td>
      <td>enum </td>
      <td></td>
      <td>C</td>
      <td>Required depends on
registration type
Required for
- sole-proprietorship
- private
- partnership
Values:
- MALE
- FEMALE</td>
     </tr>
     <tr>
      <td>10</td>
      <td>firstname </td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>Merchant Owner Registered
Name</td>
     </tr>
     <tr>
      <td>11</td>
      <td>middlename  </td>
      <td>String </td>
      <td></td>
      <td>O </td>
      <td>Merchant Owner Registered
Name</td>
     </tr>
     <tr>
      <td>12</td>
      <td>lastname  </td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>Merchant Owner Registered
Name</td>
     </tr>
     <tr>
      <td>13</td>
      <td> mobileNumber</td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>Merchant Owner Mobile
Number</td>
     </tr>
     <tr>
      <td>14</td>
      <td> email </td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>Merchant Owner Email
Address</td>
     </tr>
     <tr>
      <td>15</td>
      <td>accountNumber </td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>Merchant Account Number</td>
     </tr>
     <tr>
      <td>16</td>
      <td>accountName </td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>Merchant Account Name</td>
     </tr>
     <tr>
      <td>17</td>
      <td>bankCode </td>
      <td>String </td>
      <td>4</td>
      <td>M</td>
      <td>Merchant Bank Code
</td>
     </tr>
     <tr>
      <td>18</td>
      <td>currency </td>
      <td>String </td>
      <td>3</td>
      <td>M</td>
      <td>Currency symbol (e.g. NPR)</td>
     </tr>
     <tr>
      <td>19</td>
      <td> user</td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>NPI User ID</td>
     </tr>
     <tr>
      <td>20</td>
      <td> identificationCode</td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>Acquirer Code
</td>
     </tr>
     <tr>
      <td>21</td>
      <td> subIdentificationCode</td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>WAL in case of wallet</td>
     </tr>
      </tbody>
</table>

**Sample Request**
```json
{
   "merchantDetailBulk":[
      {
         "merchantDetailDto":{
            "fullname":"Nepal Farm House",
            "legalName":"Nepal Farm House Limited",
            "idDocNumber":"505693548",
            "registrationType":"private",
            "merchantCategoryCode":"5021",
            "district":"Kathmandu",
            "province":"3",
            "merchantOwnerDetailsDto":{
               "ownerName":"Ramesh Malla",
               "gender":"MALE"
            }
         },
         "userDetailDtos":[
            {
               "firstname":"Saurav",
               "middlename":"",
               "lastname":"Khatri",
               "mobileNumber":"98XXXXXXX",
               "email":"test1@gmail.com.np"
            }
         ],
         "accountDetailDtos":[
            {
               "accountNumber":"XXXXXXXXXXXXXX",
               "accountName":"Pankaj Singh",
               "bankCode":"1121",
               "branchCode":"2",
               "currency":"NPR"
            }
         ]
      },
      {
         "merchantDetailDto":{
            "fullname":"Nepal Wood House",
            "legalName":"Nepal Wood House Limited",
            "idDocNumber":"51616161",
            "registrationType":"private",
            "merchantCategoryCode":"5021",
            "district":"Kathmandu",
            "province":"3",
            "merchantOwnerDetailsDto":{
               "ownerName":"Hira Shrestha",
               "gender":"FEMALE"
            }
         },
         "userDetailDtos":[
            {
               "firstname":"Rjish ",
               "middlename":"",
               "lastname":"Singh",
               "mobileNumber":"98XXXXXXX",
               "email":"test1@gmail.com.np"
            }
         ],
         "accountDetailDtos":[
            {
               "accountNumber":"XXXXXXXXXXXXXX",
               "accountName":"Rashmi Paula",
               "bankCode":"0521",
               "branchCode":"2",
               "currency":"NPR"
            }
         ]
      }
   ],
   "requestUserDetailDto":{
      "user":"TEST@",
      "identificationCode":"00021000",
      "subIdentificationCode":"WAL"
   },
   "token":"HmKKt047G+Wflk9a2jLBV3F7ecAgE4lJqRQGqQYBOJu+wVcjI/hdYHQTJ4h1ES4/Up7a9/ng5U7ca/4Y1pSulx0FaSxhczbnFjsbTILPP7/GmgtxtdPiWIswsmnBXM0EAYnJZhAtFXUWmSALPctjCnBWoUdAZ80OUx3IYEQ2QEM="
}

````
**Token Generation Process:**


**Token string generation**
   
The token string is created by appending the merchant and user detail fields. Following will be the procedure for token string generation: 
For each Merchant Detail data section, follow format, including the enclosed curly bracers:

<pre><code parentName="pre"{...{"className":"language-json"}}>
{'<idDocNumber>:<idDocNumber>,<merchantCategoryCode><mobileNumber>, <email>,<accountNumber>,<currency>,<bankCode>'}</code></pre>

For NPI User Detail data section, follow format, including the enclosed curly bracers:

<pre><code parentName="pre"{...{"className":"language-json"}}>
{'requestUserDetailDto:<identificationCode>, <user>'}</code></pre>

For the finalized session token, follow format:

<pre><code parentName="pre"{...{"className":"language-json"}}>
{`Token String = <MerchantDetailSection-1>,....,<MerchantDetailSection-N>,<UserDetailSection>`}</code></pre>

1. Generate signed hash value of token string using private key of provided certificate.
2. Send the generate hash value in “token” field.
   

**Sample Token String:**

```json
{"505693548":"505693548,5021,9843705813,sauravkhatri@nchl.com.np,0100200000009020,NPR,0301","r
equestUserDetailDto":"00021000,WAL,SAURAV@999"}
```

**Sample Response**
```json

{
   "responseCode":"000",
   "responseMessage":"Merchants successfully uploaded.",
   "responseData":[
      {
         "merchantCode":"1000NOUOFMB",
         "qrString":"01021129270023NCHL000210001000NOUOFMB52045021530352454010560105802NP5920NepalClearingHouse6009Kathmandu6244010100306Store10709Terminal10812Billpayment64060002en63045AC6",
         "fullName":"Nepal Clearing House"
      }
   ],
   "responseErrors":null,
   "responseStatus":null
}
```
**Failed Response**
```json
{
   "timeStamp":"2023-10-04 01:58:47",
   "statusCode":"400",
   "status":null,
   "messages":[
      {
         "field":"merchantDetailBulk[0].merchantDetailDto.panNumber",
         "message":"Merchant with pan number '52873162' already exist."
      }
   ],
   "responseMsg":"Duplicate Merchant Found",
   "responseData":null
}
```
## 2.2. API To Download QR String
The "API to Download QR String" is a crucial component of our application's functionality that allows the 
acquirer to retrieve QR code strings for various purposes. This API endpoint serves as a bridge between 
our system and external applications or devices, enabling seamless integration and generation of NQR of 
the enrolled merchant’s

**Post: /api/merchant/info**

**Sample Request**
```json
{
   "merchantCode":"1000NOUOFMB",
   "requestUserDetailDto":{
      "user":"SAURAV@999",
      "identificationCode":"00021000",
      "subIdentificationCode":"WAL"
   },
   "token":"HkfZqIsPSaqK7jy0JfPgrBI8vpESUl9cy1GXTXHw23MI6MTKpTgbSSEcPRIz9IJzaRCUkQYChTncNeoHTCR5ItuXv2gert3YsJoUZ03FHst4KqJ1ZNy1/ze3lMsShzOSJ7nCRPcwyx0xzPbTYTUXPYWLYjVqgxIwT6eZCFpcBgs="
}
```

 **Sample Response**
```json
{
   "responseCode":"000",
   "responseMessage":null,
   "responseData":{
      "merchantCode":"1000NOUOFMB",
      "acquirerId":"00021000",
      "legalName":"Nepal Clearing House Limited",
      "createdAt":"2024-01-25T11:05:32.907+00:00",
      "status":"APPROVED",
      "qrString":"01021129270023NCHL000210001000NOUOFMB52045021530352454010560105802NP5920NepalClearingHouse6009Kathmandu6244010100306Store10709Terminal10812Billpayment64060002en63045AC6"
   },
   "responseErrors":null,
   "responseStatus":null
}
```
**TOKEN STRING: merchantCode,identificationCode,user**

**Eg:1000NOUOFMB,00021000,SAURAV@999**


## 2.3. API To Fetch Transaction Reports
 
NEPALPAY QR Network members will have access to various reporting API related to Transaction and 
Reconciliation report, session query, etc. for the purpose of reporting and reconciliation of the transactions and payments.


![Example Image](/img/Api_fetch_img.png)<p align="center" class="centered-caption"></p>

**Post: /nQR/v1/settledsession**

This reporting API is used to fetch the list of sessions in Retail Payment Switch(RPS) and their status 
based on settlement data and session serial. Sessions with status SETTLED to be considered for the 
reconciliation of QR transactions.

**Request parameters**

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
      <td> sessionSrlno </td>
      <td>Integer</td>
      <td> </td>
      <td>C</td>
      <td>Session number to enquiry the status</td>
     </tr>
     <tr>
      <td>2</td>
      <td>dateSettled </td>
      <td>String</td>
      <td></td>
      <td>C</td>
      <td>YYYY-MM-dd Format date to get all the
sessions settled on that date.</td>
     </tr>
    </tbody>
</table>

**Response parameters**
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
      <td>sessionSrlno</td>
      <td>D</td>
      <td> </td>
      <td>M </td>
      <td>Session number</td>
     </tr>
     <tr>
      <td>2</td>
      <td>Status</td>
      <td>String</td>
      <td></td>
      <td>M</td>
      <td>Session Status (e.g. “ACTIVE”,”
SETTLED”). In order to cancel a
transaction, the session must be in
“ACTIVE” status</td>
     </tr>
     <tr>
      <td>3</td>
      <td>dateSettled</td>
      <td>String</td>
      <td></td>
      <td>C</td>
      <td>YYYY-MM-dd Format date to get all the
sessions settled on that date.</td>
     </tr>
    </tbody>
</table>

**Sample request:**
```json
{
"dateSettled":"2021-11-15"
}
``` 
**Sample response:**
```json
 {
   "timestamp":"2022-01-16T07:33:08.383+0000",
   "responseCode":"200",
   "responseStatus":"SUCCESS",
   "responseMessage":null,
   "responseBody":[
      {
         "sessionSrlNo":1559,
         "status":"GENERATED",
         "settlementDate":"2021-12-18",
         "dateSettled":null
      },
      {
         "sessionSrlNo":1563,
         "status":"SETTLED",
         "settlementDate":"2021-12-18",
         "dateSettled":null
      }
   ]
}
```
### 2.3.1 Reconciliation report specifications
**Post: /nQR/v1/report**

This reporting API is used to fetch the list of all transactions of settled session based on session serial 
of particular issuer & acquirer.

**Request Parameters**
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
      <td> sessionSrlno </td>
      <td>Integer</td>
      <td> </td>
      <td>M</td>
      <td>Session number to enquiry the status</td>
     </tr>
     <tr>
      <td>2</td>
      <td>issuerId or acquirerId  </td>
      <td>String</td>
      <td></td>
      <td>M</td>
      <td>NEPALPAY Issuer Id</td>
     </tr>
    </tbody>
</table>

**Response Parameters**

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
      <td>sessionSrlno </td>
      <td>String</td>
      <td></td>
      <td></td>
      <td>Session number for the transaction</td>
     </tr>
     <tr>
      <td>2</td>
      <td>recDate  </td>
      <td>Date </td>
      <td></td>
      <td></td>
      <td>Date of transaction recording</td>
     </tr>
     <tr>
      <td>3</td>
      <td>instructionId  </td>
      <td>String</td>
      <td>20</td>
      <td></td>
      <td>Unique reference id to trace the request
by issuer/acquirer</td>
     </tr>
     <tr>
      <td>4</td>
      <td>nQrTxnId </td>
      <td>String</td>
      <td>20</td>
      <td></td>
      <td>Unique payment transaction id
generated by NCHL.
</td>
     </tr>
     <tr>
      <td>5</td>
      <td> acquirerId</td>
      <td>String</td>
      <td></td>
      <td></td>
      <td>Acquirer of the QR code</td>
     </tr>
     <tr>
      <td>6</td>
      <td>issuerId </td>
      <td>String</td>
      <td></td>
      <td></td>
      <td>Issuer id
</td>
     </tr>
     <tr>
      <td>7</td>
      <td>network </td>
      <td>String</td>
      <td></td>
      <td></td>
      <td>Network of the QR code
</td>
     </tr>
     <tr>
      <td>8</td>
      <td>issuerNetwork </td>
      <td>String</td>
      <td></td>
      <td></td>
      <td>Network of the issuer.</td>
     </tr>
     <tr>
      <td>9</td>
      <td>amount </td>
      <td>Numeric</td>
      <td>(12,2)</td>
      <td></td>
      <td>Amount</td>
     </tr>
     <tr>
      <td>10</td>
      <td>interchangeFee </td>
      <td>Numeric</td>
      <td>(10,2) </td>
      <td></td>
      <td>Charge if applicable else 0.00</td>
     </tr>
     <tr>
      <td>11</td>
      <td> transactionFee</td>
      <td>Numeric</td>
      <td>(10,2) </td>
      <td></td>
      <td>IF additional cost to be paid by the
customer for the transaction. else 0.00</td>
     </tr>
     <tr>
      <td>12</td>
      <td> debitStatus</td>
      <td>String</td>
      <td></td>
      <td></td>
      <td>Payer Account Debit status</td>
     </tr>
     <tr>
      <td>13</td>
      <td>creditStatus </td>
      <td>String</td>
      <td></td>
      <td></td>
      <td>Receiver Account Credit status</td>
     </tr>
     <tr>
      <td>14</td>
      <td>PayerName </td>
      <td>String</td>
      <td>200</td>
      <td></td>
      <td>Name of the payer</td>
     </tr>
     <tr>
      <td>15</td>
      <td>transactionType </td>
      <td>String</td>
      <td></td>
      <td></td>
      <td>PMT-Payment, RFND-Refund</td>
     </tr>
     <tr>
      <td>16</td>
      <td> payerMobileNumber</td>
      <td></td>
      <td></td>
      <td></td>
      <td>Mobile No of Payer</td>
     </tr>
     <tr>
      <td>17</td>
      <td>merchantName </td>
      <td>String</td>
      <td></td>
      <td></td>
      <td></td>
     </tr>
     <tr>
      <td>18</td>
      <td>merchantTxnRef </td>
      <td>String</td>
      <td></td>
      <td></td>
      <td></td>
     </tr>
     <tr>
      <td>19</td>
      <td> terminal</td>
      <td>String</td>
      <td></td>
      <td></td>
      <td>Terminal id of the QR code</td>
     </tr>
     <tr>
      <td>20</td>
      <td>merchantBillNo </td>
      <td>String</td>
      <td></td>
      <td></td>
      <td>Bill No of merchant</td>
     </tr>
      </tbody>
</table>

**Request sample:**
```json
{
 "sessionSrlNo":"1542", 
 "issuerId or acquirerId ":"00004501"
}
```

 **Response Sample:**
```json
{
   "timestamp":"2021-08-10T11:14:41.893+0545",
   "responseCode":"200",
   "responseMessage":"SUCCESS",
   "responseBody":[
      {
         "nQrTxnId":"2107230000000003XBI",
         "tranType":"PMT",
         "instructionId":"HBLQR-1191982838",
         "issuerId":"00000701",
         "acquirerId":"00000701",
         "amount":2200.11,
         "transactionFee":0.00,
         "interchangeFee":15.00,
         "merchantName":"Merchant Name",
         "merchantBillNo":"44454",
         "merchantTxnRef":null,
         "payerName":"Kiran Maharjan",
         "payerMobileNumber":"+977-9849752010",
         "debitStatus":"000",
         "creditStatus":"DEFER",
         "sessionSrlNo":1214,
         "recDate":"2021-07-23",
         "terminal":"MOB",
         "network":"NQR",
         "issuerNetwork":"NQR"
      },
      {
         "nQrTxnId":"2107230000000005LGB",
         "tranType":"PMT",
         "instructionId":"MBLQR-4589756",
         "issuerId":"00001501",
         "acquirerId":"00000701",
         "amount":10000.00,
         "transactionFee":0.00,
         "interchangeFee":53.25,
         "merchantName":"Merchant Name",
         "merchantBillNo":"0",
         "merchantTxnRef":"56555",
         "payerName":"Sudip Shah",
         "payerMobileNumber":"+977-9851011596",
         "debitStatus":"000",
         "creditStatus":"CNCL",
         "sessionSrlNo":1214,
         "recDate":"2021-07-23",
         "terminal":"CIPS",
         "network":"NQR",
         "issuerNetwork":"NQR"
      },
      {
         "nQrTxnId":"2107230000000004BIJ",
         "tranType":"RFND",
         "instructionId":"MOCO_RFND-12358",
         "issuerId":"00001601",
         "acquirerId":"00000701",
         "amount":500.00,
         "transactionFee":0.00,
         "interchangeFee":0.00,
         "merchantName":"Merchant Name",
         "merchantBillNo":"0",
         "merchantTxnRef":"21072300000000423KIO",
         "payerName":"Rakesh Pokheral",
         "payerMobileNumber":"+977-9849752010",
         "debitStatus":"000",
         "creditStatus":"000",
         "sessionSrlNo":1214,
         "recDate":"2021-07-23",
         "terminal":"WAL",
         "network":"NQR",
         "issuerNetwork":"NQR"
      },
      {
         "nQrTxnId":"2107230000000002FRR",
         "tranType":"PMT",
         "instructionId":"EVRSTQR-4545544",
         "issuerId":"00001001",
         "acquirerId":"00000701",
         "amount":300.25,
         "transactionFee":5.25,
         "interchangeFee":2.50,
         "merchantName":"Merchant Name",
         "merchantBillNo":"jjhd6",
         "merchantTxnRef":null,
         "payerName":"Jeevan Shrestha",
         "payerMobileNumber":"+977-9851752010",
         "debitStatus":"000",
         "creditStatus":"DEFER",
         "sessionSrlNo":1214,
         "recDate":"2021-07-23",
         "terminal":"MOB",
         "network":"NQR",
         "issuerNetwork":"XXX"
      }
   ]
}
```


## 2.4. API To Fetch Merchant Category Code

**Post: /api/merchant/merchantcategorycodes**

```json
{
   "requestUserDetailDto":{
      "user":"SAURAV@999",
      "identificationCode":"00021000",
      "subIdentificationCode":"WAL"
   },
   "token":"TSorsyJY3g57B313hEKOfGJFBbw0W8mS8ClHv8l4zwSRleEtmJgaEdXp/3hzlF9ON4owmLb3Jpmem4rAnrZA0NwvsaBETVw+ZujQupuM/avjAXXLo2rfX61W/fYshupOKcWW7CapaSJw4QHmJlxdlilKxy1W3isG2POcfd4DlHc="
}
```
**TOKEN STRING: identificationCode,user Eg:00021000,SAURAV@999**


## 2.5. Annexure
Following are the list of response codes used in Open NPI that could be technical and business. HTTP 
Reason codes FORBIDDEN, BAD REQUEST and INTERNAL SERVER ERROR are exceptional cases 
which requires the exact technical setups and message structures mentioned in the document. These HTTP 
statuses contains same response message format as mentioned below with response code. All technically 
valid messages will be responded with HTTP status OK which has a fixed format and doesn’t change. 
Technical Response Format (FORBIDDEN, BAD REQUEST and INTERNAL SERVER ERROR):
```json
{
"responseCode": "<Response Code>",
"responseDescription": "<Response Messages>",
"fieldErrors": [],
}
```
<table>
     <thead>
       <tr>
       <td colspan="3" > <p align="center">
  Technical Error Codes
</p>
        </td>
       </tr>
        <tr>
         <th>Reason Code</th>
         <th>Reason Description</th>
         <th>Remarks</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>000</td>
      <td>Success</td>
      <td>Success Enrollment, Merchant Fetch.</td>
     </tr>
     <tr>
      <td>E003</td>
      <td>Invalid Request Token</td>
      <td>Digital Signature in the token is not matching</td>
     </tr>
     <tr>
      <td>E007</td>
      <td>Technical Validation Failed</td>
      <td>Technical invalid request to the API. Please check
response Description for further details.</td>
     </tr>
     <tr>
      <td>E001</td>
      <td>Invalid IP Address</td>
      <td>IP address from NPI API is not whitelisted
</td>
     </tr>
     <tr>
      <td>E010</td>
      <td>Merchant Not Found </td>
      <td>The record of the merchant is not found</td>
     </tr>
     <tr>
      <td>B106</td>
      <td>Invalid Acquirer</td>
      <td>Acquirer does not exist</td>
     </tr>
 </tbody>
</table>

