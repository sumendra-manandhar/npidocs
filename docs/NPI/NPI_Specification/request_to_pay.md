---
sidebar_position: 10
---


# 10. Request to Pay (Event Based and E-Mandate Based) 

Request to pay is a pull type payment instrument, such that NPI will be enabled for such Request to Pay (R2P) 
instruction as request and process between the members. Such R2P instruction can be Event based or E-mandate 
based. The ultimate Payee and Payer could be a member or its customer, with request being originated from any 
of the channels. The members (direct or indirect/ technical) will be Payee Agent and Payer Agent for their customers 
as Payee and Payer. 
An event based R2P can be initiated for one-time event corresponding to which a debit request will be initiated and 
based on Payers confirmation, a credit transfer from Payer to Payee will be initiated. E-Mandate based R2P can be 
initiated based on pre-authorized debit request by Payer as one-time setup, corresponding to which successive 
transfer from Payer to Payee will be initiated on scheduled time or as and when required. 

## 10.1. Event Based R2P


 ![Example Image](/img/Event_based_R2P.png)
<p align="center" class="centered-caption"></p>

  Figure: Process flow diagram of R2P Event based

In order to facilitate “Request To Pay” a core-engine is developed. The access to this engine for different 
channels such as connectIPS, mobile banking, PSPs and other third-party channels will be extended 
through NPI. Further processing of debit transfer request will be done in core engine of request to pay. 

**Process Flow**

1. Payee initiates a “request to pay” request. 

2. Payee agent sends the request to NPI. 

3. NPI will perform technical and business validation of the request, checks security and sessions. 

4. NPI will transmit the request to the R2P core engine. 

5. R2P core engine will lodge the request. 

6. It identifies the payer agent and transmits the request.

7. Payer agent will provide “Request to Pay” notification to its user. 

8. Once the user accepts or rejects the request, Payer Agent passes the message to NPI. 

9. NPI will pass the message to R2P engine. 

10. Request to pay engine will validate the message and confirm to NPI. 

11. NPI will initiate the transaction and sends the notification to the R2P core engine. 

12. R2P core engine will send final notification to both payer and payee engine 


Members could be either payer agent or payee agent in the payment chain and exchange financial or non-financial message as below.

### 10.1.1. Fetch Participant List 

Post Method:/r2p/v1/participants 

**Request Parameters**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Data Items</th>
            <th>Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>participantCode</td>
            <td>String</td>
            <td>20</td>
            <td>Code provided to participant system/Participant ID.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2</td>
            <td>token</td>
            <td>String</td>
            <td></td>
            <td>Hash value/Signature of NPI user ID of the member. (SHA256withRSA)</td>
            <td>Y</td>
        </tr>
    </tbody>
</table>


**Sample request:**
```json
{ 
 "participantCode": "MORU@999", 
 "token":"HfnNp7dkeyb4GRwHRR0J0qReTiTzpoGKhE6AWaAZap0lrL9qfavtBithYOKcF4JRob9HrFyYZioRA08jHkgDMqEBNUIWKN/nG+HdhIBIHbJxU7qJulVPtIxDQeJF0weSrfT2SjskscTzhbUPKug+gZHHbhpXVOTdzBhZVPXSpEA=" 
}
```
**Response Parameters**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Data Items</th>
            <th>Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>participantCode</td>
            <td>String</td>
            <td>20</td>
            <td>Code provided to participant system/Participant ID.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2</td>
            <td>participantName</td>
            <td>String</td>
            <td>200</td>
            <td>Full name of participant system</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>3</td>
            <td>allowedIdentificationCode</td>
            <td>ENUM</td>
            <td>1</td>
            <td>Identifier accepted by the system for R2P processing. M-Mobile number, A-Account Details, U-User id</td>
            <td>Y</td>
        </tr>
    </tbody>
</table>


**Sample Response:**
```json 
 {
   "responseCode":"000",
   "responseData":{
      "timeStamp":"2022-10-20 09:54:20",
      "statusCode":"200",
      "status":"Success",
      "message":"Successfully retrieved participants.",
      "responseData":[
         {
            "participantCode":"MORU@999",
            "participantName":"Moru wallet",
            "allowedIdentificationCode":"M"
         },
         {
            "participantCode":"KHALTI@999",
            "participantName":"Khalti private limited.",
            "allowedIdentificationCode":"U"
         },
         {
            "participantCode":"APPLE1",
            "participantName":"Apple Cop",
            "allowedIdentificationCode":"U"
         }
      ]
   },
   "responseStatus":"SUCCESS"
}
```
### 10.1.2. Request from Payee Agent to NPI (Non-Financial Messages)

**Post method:** /r2p/v1/request

**Request Parameters**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Data Items</th>
            <th>Type</th>
            <th>Format</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>originatorUniqueId</td>
            <td>String</td>
            <td>-</td>
            <td>20</td>
            <td>Transaction Id generated by Payee agent.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>originatorParticipantCode</td>
            <td>String</td>
            <td>-</td>
            <td>20</td>
            <td>Payee Agent code.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>receiverParticipantCode</td>
            <td>String</td>
            <td>-</td>
            <td>20</td>
            <td>Payer Agent code.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>payeeIdentifierCode</td>
            <td>ENUM</td>
            <td>M or U or A</td>
            <td>1</td>
            <td>Payee identifier code. M(Mobile number), U(User id), A(Account number).</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>payeeMobileNumber</td>
            <td>String</td>
            <td>+977-98xxxxxxx</td>
            <td>15</td>
            <td>Mandatory if payeeIdentifierCode is M.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>6</td>
            <td>payeeUserId</td>
            <td>String</td>
            <td>-</td>
            <td>200</td>
            <td>Mandatory if payeeIdentifierCode is U.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>7</td>
            <td>creditBankAccount</td>
            <td>String</td>
            <td>-</td>
            <td>20</td>
            <td>Mandatory if payeeIdentifierCode is A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>8</td>
            <td>creditBankCode</td>
            <td>String</td>
            <td>-</td>
            <td>4</td>
            <td>Mandatory if payeeIdentifierCode is A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>9</td>
            <td>creditBranchCode</td>
            <td>String</td>
            <td>-</td>
            <td>4</td>
            <td>Mandatory if payeeIdentifierCode is A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>10</td>
            <td>payerIdentifierCode</td>
            <td>ENUM</td>
            <td>M or U or A</td>
            <td>1</td>
            <td>Payer identifier code. M(Mobile number), U(User id), A(Account number).</td>
            <td>M</td>
        </tr>
         <tr>
            <td>11</td>
            <td>payerUserId</td>
            <td>String</td>
            <td>-</td>
            <td>200</td>
            <td>Mandatory if payerIdentifierCode is U.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>12</td>
            <td>payerMobileNumber</td>
            <td>String</td>
            <td>+977-98xxxxxxx</td>
            <td>15</td>
            <td>Mandatory if payerIdentifierCode is M.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>13</td>
            <td>debitBankAccount</td>
            <td>String</td>
            <td>-</td>
            <td>20</td>
            <td>Mandatory if payerIdentifierCode is A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>14</td>
            <td>debitBankCode</td>
            <td>String</td>
            <td>-</td>
            <td>4</td>
            <td>Mandatory if payerIdentifierCode is A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>15</td>
            <td>debitBranchCode</td>
            <td>String</td>
            <td>-</td>
            <td>4</td>
            <td>Mandatory if payerIdentifierCode is A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>16</td>
            <td>creditorName</td>
            <td>String</td>
            <td>-</td>
            <td>200</td>
            <td>Name of creditor.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>17</td>
            <td>amount</td>
            <td>BigDecimal</td>
            <td>xx.xx</td>
            <td>-</td>
            <td>Amount requested.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>18</td>
            <td>canAmountVary</td>
            <td>ENUM</td>
            <td>Y or N</td>
            <td>1</td>
            <td>Y indicates actual transaction amount can vary.</td>
            <td>M</td>
        </tr>
         <tr>
            <td>19</td>
            <td>purpose</td>
            <td>String</td>
            <td>-</td>
            <td>50</td>
            <td>Purpose for request to pay.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>20</td>
            <td>Token</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
            <td>Token for integrity of data.</td>
            <td>M</td>
        </tr>
</tbody>
</table>

**Sample Request** 
```json
{
   "originatorUniqueId":"moru-r2p2",
   "originatorParticipantCode":"MORU@999",
   "receiverParticipantCode":"CONNECTIPS",
   "payeeIdentifierCode":"M",
   "payeeMobileNumber":"+977-9841846222",
   "payerIdentifierCode":"A",
   "debitBankAccount":"04810017506210",
   "debitBankCode":"0401",
   "debitBranchCode":"48",
   "creditorName":"Moru wallet user",
   "amount":100,
   "canAmountVary":"N",
   "purpose":"General transfer",
   "token":"iVUwbvMjOyjETiQyLxTnyH83vlvy4CC1ZqYRsbcIw/R3apEORmtbbzzaqMAy+6N98fuYLxlCJryzdc1vS6dBs1bs8b4ENUVAVy54J6+hxA229ArzVRzxXgrflOIC1XETQ8ol5FjBsdLYkPymeY64riLP/ eKPlxgp0AZJUwKFyEg="
} 
```
 <pre><code parentName="pre"{...{"className":"language-json"}}>{'Token String ="originatorUniqueId+","+originatorParticipantCode+","+receiverParticipantCode+","+payeeIdentifierCode+","+payerIdentifierCode+","+creditorName+","+amount+","+canAmountVary+","+npiuserId"'}</code></pre>

 


 
**Response from NPI to Payee Agent**

**Response Parameters**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Data Items</th>
            <th>Data Type</th>
            <th>Format</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Timestamp</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>statusCode</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>3</td>
            <td>Status</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>4</td>
            <td>Message</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>5</td>
            <td>requestToPayId</td>
            <td>String</td>
              <td></td>
            <td>30</td>
            <td>Unique Id generated by Request to pay module</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>originatorUniqueId</td>
            <td>String</td>
              <td></td>
            <td>20</td>
            <td>Transaction Id generated by Payee agent</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>receiverParticipantCode</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
            <td>M</td>
        </tr>
        <tr>
            <td>8</td>
            <td>requestExpiryDate</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
            <td>M</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Amount</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
            <td>M</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Status</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
            <td>M</td>
        </tr>
    </tbody>
</table>


**Sample Response** 

```json
{
   "responseCode":"000",
   "responseDescription":"SUCCESS",
   "data":{
      "responseCode":"200",
      "responseStatus":"Success",
      "responseMessage":"Transaction successfully received.",
      "requestToPayId":"IME2210230000827JX9Z",
      "originatorUniqueId":"15",
      "originatorParticipantCode":"IMEPAY@999",
      "receiverParticipantCode":"KHALTI@999",
      "payeeIdentifierCode":"M",
      "payeeMobileNumber":"+977-9861591786",
      "payeeUserId":null,
      "creditBankAccount":null,
      "creditBankCode":null,
      "creditBranchCode":null,
      "payerIdentifierCode":"A",
      "payerUserId":null,
      "payerMobileNumber":null,
      "debitBankAccount":"0787894032524001",
      "debitBankCode":"2301",
      "debitBranchCode":"07",
      "senderName":null,
      "creditorName":"Rakesh Shrestha",
      "amount":23.45,
      "canAmountVary":"N",
      "amountVaryFlag":null,
      "purpose":"Need my payment regarding computer purchase",
      "requestExpiryDate":"2022-10-24 04:17:29",
      "actingTime":null,
      "status":"RECEIVED",
      "payBatchId":null,
      "payTxnId":null,
      "debitStatus":null,
      "creditStatus":null,
      "token":"FqGgk8IoxyDzZ+xfTOOJp3URmjxhzS9HyIYvCzcPTltegGO4u0+JtdPLQkALv+2/W52jwHVmpEmuWEb3HMWhUJSCiEUm0Q0oRt25bYjPbXE7Qo4ZaynwnqLV5NsFtrIRJ1P28vmp8Ly3n4UEFTwrJBEZMjbglaZWNBB9G2n55U=",
      "cipsVPA":null,
      "acceptRejectedFlag":null
   }
}
```
**Sample failure response**

```json
{
   "responseCode":"001",
   "responseDescription":"Requested Payer Not Found",
   "data":null,
   "npiBatchId":null,
   "npiTransactionId":null,
   "debitStatus":null,
   "creditStatus":null,
   "debitDescription":null,
   "creditDescription":null,
   "rcreTime":null
}
```

### 10.1.3. Request from NPI to Payer Agent

Payer agent should support the following message format at their side to receive incoming request to pay 
messages. URL and API credentials should be provided to be registered in Request To Pay core module. 
The API should be REST based and preferably implemented over OAuth2.0.

**Request Parameters**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter Name</th>
            <th>Data Type</th>
            <th>Format</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>requestToPayId</td>
            <td>String</td>
            <td></td>
            <td>30</td>
            <td>Unique id to identify the request to pay message in processing</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>originatorUniqueID</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Transaction Id generated by Payee agent</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>originatorParticipantCode</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Unique ID of originating channel provider/payee agent (CIPS, Wallets, Mobile App etc). Request to Pay originating participant code</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>receiverParticipantCode</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Unique ID of the receiving channel provider/payer agent (CIPS, Wallets, Mobile App etc). Request to Pay receiver participant codes</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Amount</td>
            <td>BigDecimal</td>
            <td>xx.xx</td>
            <td></td>
            <td>Transaction Amount</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>canAmountVary</td>
            <td>ENUM</td>
            <td></td>
            <td>1</td>
            <td>Indicate actual transaction amount can vary (Less than requested amount).</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>purpose</td>
            <td>String</td>
            <td></td>
            <td>50</td>
            <td>Remarks-purpose for R2P</td>
            <td>O</td>
        </tr>
        <tr>
            <td>8</td>
            <td>payeeIdentifierCode</td>
            <td>ENUM</td>
            <td></td>
            <td>1</td>
            <td>Payee Identifier (M-Mobile Number, U-User Id, A-Account Details)</td>
            <td>M</td>
        </tr>
        <tr>
            <td>9</td>
            <td>payeeMobileNumber</td>
            <td>String</td>
            <td>+977-98xxxxxx or +977-98XXXXXXXX</td>
            <td></td>
            <td>Required if payee identifier is M</td>
            <td>C</td>
        </tr>
        <tr>
            <td>10</td>
            <td>payeeUserId</td>
            <td>String</td>
            <td></td>
            <td>200</td>
            <td>Required if payee identifier is U</td>
            <td>C</td>
        </tr>
        <tr>
            <td>11</td>
            <td>payerIdentifierCode</td>
            <td>ENUM</td>
            <td></td>
            <td>1</td>
            <td>Mobile No/User Id of the payer (M-Mobile Number, U-User Id, A-Account Details)</td>
            <td>M</td>
        </tr>
         <tr>
            <td>12</td>
            <td>payerMobileNumber</td>
            <td>String</td>
            <td>+977-98xxxxxxxx</td>
            <td>15</td>
            <td>+977-98xxxxxxxx(Required if payer identifier is M)</td>
            <td>C</td>
        </tr>
         <tr>
            <td>13</td>
            <td>payerUserId</td>
            <td>String</td>
            <td></td>
            <td>200</td>
            <td>(Required if payer identifier is U)</td>
            <td>C</td>
        </tr>
         <tr>
            <td>14</td>
            <td>debitBankAccount</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>(Required if payer identifier is A)</td>
            <td>C</td>
        </tr>
        <tr>
            <td>15</td>
            <td>debitBankCode</td>
            <td>String</td>
            <td></td>
            <td>4</td>
            <td>(Required if payer identifier is A)</td>
            <td>C</td>
        </tr>
        <tr>
            <td>16</td>
            <td>debitBranchCode</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>(Required if payer identifier is A)</td>
            <td>C</td>
        </tr>
        <tr>
            <td>17</td>
            <td>creditBankCode</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>C redit A/C Number</td>
            <td>O</td>
        </tr>
        <tr>
            <td>18</td>
            <td>creditorName</td>
            <td>String</td>
            <td></td>
            <td>200</td>
            <td>Name of the creditor who initiated the frequest to pay </td>
            <td>M</td>
        </tr>
        <tr>
            <td>19</td>
            <td>creditBankCode</td>
            <td>String</td>
            <td></td>
            <td>4</td>
            <td>Crediting Bank Code</td>
            <td>O</td>
        </tr>
        <tr>
            <td>20</td>
            <td>creditBranchCode</td>
            <td>String</td>
            <td></td>
            <td>4</td>
            <td>crediting Branch</td>
            <td>O</td>
        </tr>
         <tr>
            <td>21</td>
            <td>requestExpiry</td>
            <td>YYYYMMDDHHmmssSSS</td>
            <td></td>
            <td></td>
            <td>Example:2021-0003-15 11:38:43</td>
            <td>M</td>
        </tr>
        <tr>
            <td>22</td>
            <td>token</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Token generated for processing of the message</td>
            <td>M</td>
        </tr>
         
    </tbody>
</table>


**Sample Request**

```json
{
 "requestToPayId": " KHA20210314172343903D14AbMFiXa", 
 "originatorUniqueId": "20787899710", 
 "originatorParticipantCode": "KHALTI", 
 "receiverParticipantCode": "NICA", 
 "amount": 10.00, 
 "canAmountVary": "N", 
 "purpose": "General Transfer", 
 "payeeIdentifierCode": "M", 
 "payeeMobileNumber": "+977-9866622789", 
 "payerIdentifierCode": "A", 
 "debitBankAccount": "012454545544454545", 
 "debitBankCode": "2301", 
 "debitBranchCode": "01", 
 "creditorName": "Nishant Parajuli", 
 "requestExpiry": "2021-03-15 11:38:43", 
 "token": "<Signature Token>" 
} 
```
```json
{
  "Token String": {
    "REQUESTTOPAYID": "requestToPayId",
    "ORIGINATORUNIQUEId": "OriginatorUniqueId",
    "ORIGINATORPARTICIPANTCODE": "originatorParticipantCode",
    "RECEIVERPARTICIPANTCODE": "receiverParticipantCode",
    "PAYEEIDENTIFIERCODE": "payeeIdentifierCode",
    "PAYEEMOBILENUMBER": "payeeMobileNumber",
    "PAYEEUSERID": "payeeUserId",
    "CREDITBANKACCOUNT": "creditBankAccount",
    "CREDITBANKCODE": "creditBankCode",
    "CREDITBRANCHCODE": "creditBranchCode",
    "PAYERIDENTIFIERCODE": "payerIdentifierCode",
    "PAYERMOBILENUMBER": "payerMobileNumber",
    "PAYERUSERID": "payerUserId",
    "DEBITBANKACCOUNT": "debitBankAccount",
    "DEBITBANKCODE": "debitBankCode",
    "DEBITBRANCHCODE": "debitBranchCode",
    "CREDITORNAME": "creditorName",
    "AMOUNT": "amount",
    "CANAMOUNTVARYFlAG": "canAmountVaryFlag",
    "REQUESTEXPIRYDATE": "requestExpiryDate",
    "PURPOSE": "purpose"
  }
}
```





### 10.1.4. Response from Payer Agent to NPI 

Payer agent should provide the following response on receiving the request message as in point 3. 

**Response Parameters**
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter Name</th>
            <th>Data Type</th>
            <th>Format</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>requestToPayId</td>
            <td>String</td>
            <td></td>
            <td>30</td>
            <td>Unique request to pay id generated by central component</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>originatorUniqueId</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Unique id generated by originator</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>responseCode</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Response code for request to pay receipt</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>responseMessage</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Human-readable text for response code</td>
            <td>O</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
            <td>YYYYMMDDHHmmssSSS</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>token</td>
            <td></td>
            <td></td>
            <td></td>
            <td>SHA256 signature</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


**Sample Response:** 
```json
{ 
    "timeStamp": "2021-03-14 11:38:43", 
    "responseCode": 200, 
    "responseMessage": "Received Successfully", 
    "requestToPayId": "KHA20210314172343903D14AbMFiXa", 
    "originatorUniqueId": "20787899710", 
    "token": "<token Signature>" 
 } 
```
 
**Token String:**

REQUESTTOPAYID:requestToPayId,

ORIGINATORUNIQUEID:originatorUniqueId,

RESPONSECODE:responseCode,

RESPONSEMESSAGE:responseMessage

 

### 10.1.5. Request from Payer Agent to NPI (Financial Messages) 

**Post method:** /r2p/v1/payment

**Request Parameters**
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter Name</th>
            <th>Data Type</th>
            <th>Format</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>requestToPayId</td>
            <td>String</td>
            <td></td>
            <td>30</td>
            <td>Unique id to identify the request to pay message in processing.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>originatorUniqueId</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>This will be mapped to unique ID of the message.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>payerResponse</td>
            <td>ENUM</td>
            <td></td>
            <td>1</td>
            <td>A: Accepted, R: Rejected</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>payerMessage</td>
            <td>String</td>
            <td></td>
            <td>100</td>
            <td>Payer will have the option to add/edit/modify the purpose field. The same will be reflected in the response message.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>5</td>
            <td>debitBankAccount</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Account number of the participant that needs to be debited.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>debitBankCode</td>
            <td>String</td>
            <td></td>
            <td>4</td>
            <td>Account holding bank of the participant.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>debitBranchCode</td>
            <td>String</td>
            <td></td>
            <td>4</td>
            <td>Branch of debit account.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>8</td>
            <td>senderName</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Name of the sender of the fund.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Timestamp</td>
            <td></td>
            <td>YYYYMMDDHHmmssSSS</td>
            <td></td>
            <td>Time of acting on the request.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Amount</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td>Amount accepted as original or modified by the payer.</td>
            <td>M</td>
        </tr>
         <tr>
            <td>11</td>
            <td>canAmountVary</td>
            <td>ENUM</td>
            <td>Y Or N</td>
            <td></td>
            <td>Flag to indicate flexible or fixed amount to be accepted by the payer. Flag that stands sending amount can be more or less than requested (Y-Yes, N-No).</td>
            <td>M</td>
        </tr>
        <tr>
            <td>12</td>
            <td>Token</td>
            <td></td>
            <td></td>
            <td></td>
            <td>SHA256 signature of mandatory fields.</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


**Sample Request** 
```json
{ 
 "requestToPayId": "Kha20210423124503516jqUY1Tf1w4", 
 "originatorUniqueId": "20787899710", 
 "payerRespone": "A", 
 "payerMessage":"honored", 
 "debitBankAccount": "01245454548784454545",
 "debitBankCode": "2301", 
 "debitBranchCode": "01", 
 "senderName":"Sabin", 
 "timestamp": "2021-03-15 12:49:43", 
 "Amount":"10.00", 
 "canAmountVary": "N", 
 "token": "<Signature Token>" 
} 
```


 <pre><code parentName="pre"{...{"className":"language-json"}}>{'Token String="requestToPayId+","+originatorUniqueId+","+payerResponse+","+debitBankAccount+","+debitBankCode+","+npiuserId " '}</code></pre>

 



### 10.1.6. From NPI to Payer agent Transaction Confirmation

**Response Parameters**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter Name</th>
            <th>Data Type</th>
            <th>Format</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>requestToPayId</td>
            <td>String</td>
            <td></td>
            <td>30</td>
            <td>Unique Id generated by Request to pay module.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>originatorUniqueId</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Transaction Id generated by Payee agent.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>acceptedRejectedFlag</td>
            <td>ENUM</td>
            <td></td>
            <td>1</td>
            <td>A for Accept, R for Reject.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>debitBankAccount</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Actual debit account. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>5</td>
            <td>debitBankCode</td>
            <td>String</td>
            <td></td>
            <td>4</td>
            <td>Actual debit bank code. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>6</td>
            <td>debitBranchCode</td>
            <td>String</td>
            <td></td>
            <td>4</td>
            <td>Actual debit branch code. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>7</td>
            <td>payBatchId</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Transaction Batch id. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>8</td>
            <td>payTxnId</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Transaction id. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>9</td>
            <td>debitStatus</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Transaction debit status. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>10</td>
            <td>creditStatus</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Transaction credit status. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Amount</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td>Actual transaction amount. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>12</td>
            <td>canAmountVary</td>
            <td>ENUM</td>
            <td></td>
            <td>1</td>
            <td>Y indicates transaction amount had varied than requested amount. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>13</td>
            <td>senderName</td>
            <td>String</td>
            <td></td>
            <td>200</td>
            <td>Name of sender.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>14</td>
            <td>payerMessage</td>
            <td>String</td>
            <td></td>
            <td>100</td>
            <td>Message by payer.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>15</td>
            <td>Timestamp</td>
            <td>Date</td>
            <td>yyyy-MMdd hh:mm:ss</td>
            <td></td>
            <td>Time.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>16</td>
            <td>notificationStatus</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Notification status sent to originating participant.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>17</td>
            <td>Token</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>For integrity of message.</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


**Sample Request Message:** 
```json
{
   "requestToPayId":"NMB2212280001408YFFB",
   "originatorUniqueId":"R2PTXNID000000000016",
   "acceptedRejectedFlag":"A",
   "payBatchId":"712286151",
   "payTxnId":"12612976",
   "debitStatus":"000",
   "creditStatus":"000",
   "amount":1000,
   "senderName":"RADHIKA RASAILI",
   "payerMessage":"RequestToPay",
   "direction":"OUTWARD",
   "timeStamp":null,
   "token":null
}
```

<pre><code parentName="pre"{...{"className":"language-json"}}>{'Token String=“requestToPayId+","+originatorUniqueId+","+acceptedRejectedFlag+","+payBatchId+","+payTxnId+","+debitStatus+","+creditStatus+","+amount+","+senderName+","+payerMessage” '}</code></pre>

 
**Sample Response** 
```json
{ 
    "responseCode": "200", 
    "responseMessage": "SUCCESS", 
    "requestToPayId": "NMB2212280001408YFFB", 
    "originatorUniqueId": "R2PTXNID000000000016", 
    "token": null, 
    "timeStamp": "2022-12-28 10:53:58" 
}
```


<pre><code parentName="pre"{...{"className":"language-json"}}>{'Token string:REQUESTTOPAYID:requestToPayId,ORIGINATORUNIQUEID:originatorUniqueId,RESPONSECODE:responseCode,RESPONSEMESSAGE:responseMessage '}</code></pre>



### 10.1.7. Request from NPI to payee agent – Transaction Confirmation 

NPI makes a POST request to the payee agent on its API where transaction status information is sent. Such a 
response must be saved by the payee at its end so that proper information is conveyed to the transaction initiating 
party. 
Transaction reports can be generated from the transaction reporting API mentioned in section 5.3 of this document. 

**Request Parameter:**
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter Name</th>
            <th>Data Type</th>
            <th>Format</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>requestToPayId</td>
            <td>String</td>
            <td></td>
            <td>30</td>
            <td>Unique Id generated by Request to pay module.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>originatorUniqueId</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Transaction Id generated by Payee agent.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>acceptedRejectedFlag</td>
            <td>ENUM</td>
            <td></td>
            <td>1</td>
            <td>A for Accept, R for Reject.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>debitBankAccount</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Actual debit account. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>5</td>
            <td>debitBankCode</td>
            <td>String</td>
            <td></td>
            <td>4</td>
            <td>Actual debit bank code. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>6</td>
            <td>debitBranchCode</td>
            <td>String</td>
            <td></td>
            <td>4</td>
            <td>Actual debit branch code. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>7</td>
            <td>payBatchId</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Transaction Batch id. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>8</td>
            <td>payTxnId</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Transaction id. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>9</td>
            <td>debitStatus</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Transaction debit status. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>10</td>
            <td>creditStatus</td>
            <td>String</td>
            <td></td>
            <td>20</td>
            <td>Transaction credit status. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Amount</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td>Actual transaction amount. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>12</td>
            <td>amountVaryFlag</td>
            <td>ENUM</td>
            <td></td>
            <td>1</td>
            <td>Y indicates transaction amount had varied than requested amount. Mandatory if acceptRejectedFlag A.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>13</td>
            <td>senderName</td>
            <td>String</td>
            <td></td>
            <td>200</td>
            <td>Name of sender.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>14</td>
            <td>payerMessage</td>
            <td>String</td>
            <td></td>
            <td>100</td>
            <td>Message by payer.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>15</td>
            <td>Timestamp</td>
            <td>Date</td>
            <td>yyyy-MM-dd hh:mm:ss</td>
            <td></td>
            <td>Time.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>16</td>
            <td>Token</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>For integrity of message.</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


**Sample Request:** 
```json
{ 
    "requestToPayId": "NMB2212280001408YFFB", 
    "originatorUniqueId": "R2PTXNID000000000016", 
    "acceptedRejectedFlag": "A", 
    "payBatchId": "712286151", 
    "payTxnId": "12612976", 
    "debitStatus": "000", 
    "creditStatus": "000", 
    "amount": 1000,
    "senderName": "RADHIKA RASAILI", 
    "payerMessage": "RequestToPay", 
    "direction": null, 
    "timeStamp": null, 
    "token": null 
} 
```

Token String: 
REQUESTTOPAYID:requestToPayId,ORIGINATORUNIQUEID:originatorUniqueId,ACCEPTEDREJECTEDFLAG:acc 
eptedRejectedFlag,PAYBATCHID:payBatchId,PAYTXNID:payTxnId,DEBITSTATUS:debitStatus,CREDITSTATUS:cre 
ditStatus,AMOUNT:amount,SENDERNAME:senderName,PAYERMESSAGE:payerMessage 

**Sample Response:** 
```json
{
   "requestToPayId":"NMB2212280001408YFFB",
   "originatorUniqueId":"R2PTXNID000000000016",
   "responseCode":"200",
   "responseMessage":"Success",
   "timeStamp":"2022-12-28 10:53:49",
   "token":"qmyw6otF2QZ1fwR8XFPBCa6fhvH/xNpIbep6V8pIHMe/z+RimCGhtjT3+qqnYExlHSFtgs3kNodXn7dmchju+JgFtMyr85AFwiZucAd7GuWj019EnF53TkqYpnjB50aQj23hIgjAg43se7FZCZd6ohWXSjW2kpb7jE9NUcT+D9g\u003d"
}
```

Token String: 
REQUESTTOPAYID:requestToPayId,ORIGINATORUNIQUEID:originatorUniqueId,RESPONSECODE:responseCode, 
RESPONSEMESSAGE:responseMessage


## E-Mandate/Account Tokenization Based R2P

**Process Flow**

1. E-Mandate is a tokenized digital consent authorized by Payer (debtor) allowing a Payee (creditor/ 
beneficiary party) to debit an amount from the specified Payer’s debit account at predefine date or 
on request as set in the e-Mandate. 
2. Pre-requisite for initiating and processing R2P is that the Payee Agent will have to enable e-Mandate 
based R2P in its channel/ instrument which will be integrated with e-Mandate Tokenization Gateway 
to obtain tokenized e-Mandate. E-Mandate is mandatory for initiating and processing direct debit 
transactions. 
3. Payer will setup and authorize one-time e-Mandate through a channel provided by its Payer Agent 
(which could be indirect/ technical member or service provider). 
4. The Payer will verify the details and then completes authentication and authorization through e-Mandate Tokenization Gateway available at Payer Agents channel. 
5. Payer Agent channel will then receive a tokenized e-Mandate, which will be used to honor all future 
R2P requests against the mandate. 
6. On due date or upon request, the Payee or Payee Agent will initiate a R2P request (debit instruction) 
based on the authorized mandate details using e-Mandate token, financial message token, debit 
amount, payee app id and other payment information. 
7. NPI will authenticate the Payee Agent (as member) and then validate the request prior to debiting 
the payer account and crediting the payee account. 
8. Based on nature of transaction or channel used, Payer Agent may add control for additional 
authentication (like OTP or authenticator-based code or similar) that may be required to complete 
the financial transaction. Such OTP generation as additional control will be the responsibility of the 
Payer Agent. 
9. The transaction status will then be transmitted to Payee Agent and Payee.

Third party application should web post to tokenization web gateway hosted at NCHL with the parameters listed in the following table. 

### 10.2.1. Tokenization Gateway 

**URL:**{base_url}/tokenization-gw/loginpage

**Method:** POST 

**Request data:**x-www-form-urlencoded 

**Request Parameters**
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>participantId</td>
            <td>String</td>
            <td>Max. 25</td>
            <td>Participant id provided to third party system by NCHL for tokenization service</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>identifier</td>
            <td>String</td>
            <td>Max. 50</td>
            <td>Unique identifier generated in third party system for tracing purpose.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>userIdentifier</td>
            <td>String</td>
            <td>Max. 200</td>
            <td>User identifier in third party system.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>mobileNo</td>
            <td>String</td>
            <td>10</td>
            <td>Customer mobile number registered in third party system. Mobile number should match with the mobile number used in connectIPS.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>email</td>
            <td>String</td>
            <td>Max. 200</td>
            <td>Customer email address registered in third party system. Email address should match with the email address used in connectIPS.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>amount</td>
            <td>Numeric (8,2)</td>
            <td></td>
            <td>Amount (only two digits after decimal point)</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>debitType</td>
            <td>String</td>
            <td>1</td>
            <td>F-fixed (Same amount will be requested for every Direct Debit initiation) V-Variable (Amount up to the value in “amount” will be requested for every Direct Debit initiation)</td>
            <td>M</td>
        </tr>
        <tr>
            <td>8</td>
            <td>frequency</td>
            <td>String</td>
            <td>Max. 2</td>
            <td>Frequency for Direct Debit initiation.1-Daily
            2-Weekly
            3-Monthly
            4-Quaterly
            5-Half Yearly
            6-Yearly
            7-As & When Presented</td>
            <td>M</td>
        </tr>
        <tr>
            <td>9</td>
            <td>mandateStartDate</td>
            <td>String</td>
            <td>8</td>
            <td>Date from when the service should be enabled. Date in a format YYYY-MM-DD</td>
            <td>M</td>
        </tr>
        <tr>
            <td>10</td>
            <td>mandateExpiryDate</td>
            <td>String</td>
            <td>8</td>
            <td>Date up to which the service should be active. This should be small or equals to the maximum token expiry period enforced by NCHL. If greater date value is provided, will be defaulted to the maximum allowed date. Date in a format YYYY-MM-DD</td>
            <td>M</td>
        </tr>
        <tr>
            <td>11</td>
            <td>autoRenewal</td>
            <td>Boolean (true/false)</td>
            <td></td>
            <td>Auto renewal of E-mandate upon expiry. Auto renewal flag will be available only for specific members</td>
            <td>C</td>
        </tr>
        <tr>
            <td>12</td>
            <td>token</td>
            <td>String</td>
            <td></td>
            <td>Base64 Signature token generated through signing the token string by participant private key. Signature algorithm is SHA256withRSA. UTF-8 is the encoding algorithm.</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


Token String= participantId+”,” + identifier+”,” + userIdentifier +”,” + mobileNo+”,” +email+”,” +amount+”,” 
+debitType+”,” +frequency+”,” +mandateStartDate+”,” + mandateExpiryDate

After successful request validation, the user is prompted for further processing. In case of connectIPS user, 
s/he provide his credentials to get into the connectIPS channel. After successful login the user will be 
provided with the information in the mandate to reconfirm. The user finds all his/her active linked bank 
accounts in the list from which s/he can choose for tokenization. 
On user OTP verification, the user will be redirected to the member’s web application from connectIPS 
gateway. For this, the member needs to provide a pair of URLs; successURL and failureURL which will be mapped at NCHL’s end. Parameters “participantId” and “identifier” will be appended along with the return 
URL. 

**Success_URL:**http://successurl.com.np/Modules/EMandate/E_Mandate_Register.aspx?participantId=ABCD@999&identifier=EMTXNID000000000426&userIdentifier=40 

**Failure_URL:**http://failureurl.com.np/Modules/EMandate/E_Mandate_Register.aspx?participantId=ABCD@999&identifier=EMTXNID000000000426&userIdentifier=40 

Along with these details, connectIPS will also be posting an e-mandate to an API shared by the member 
with the following request parameters. The API must be reachable from NCHL’s end in order to make a post 
request in it. The request will contain below parameters. In case the user is not a connectIPS user, different 
authentication and authorization mechanism will be implemented. 

**Request Parameters**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>participantId</td>
            <td>String</td>
            <td>Max. 25</td>
            <td>Participant id provided to third party system by NCHL for tokenization service.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>identifier</td>
            <td>String</td>
            <td>Max. 50</td>
            <td>Unique identifier generated in third party system for tracing purpose.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>userIdentifier</td>
            <td>String</td>
            <td>Max. 200</td>
            <td>User identifier in third party system.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>mobileNo</td>
            <td>String</td>
            <td>10</td>
            <td>Customer mobile number registered in third party system. Mobile number should match with the mobile number used in connectIPS.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>email</td>
            <td>String</td>
            <td>Max. 200</td>
            <td>Customer email address registered in third party system. Email address should match with the email address used in connectIPS.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>amount</td>
            <td>Numeric</td>
            <td>(8,2)</td>
            <td>Amount (only two digits after decimal point).</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>debitType</td>
            <td>String</td>
            <td>1</td>
            <td>F - fixed (Same amount will be requested for every Direct Debit initiation).
                V - Variable (Amount up to the value in "amount" will be requested for every Direct Debit initiation).</td>
            <td>M</td>
        </tr>
        <tr>
            <td>8</td>
            <td>frequency</td>
            <td>Numeric</td>
            <td>Max. 2</td>
            <td>Frequency for Direct Debit initiation.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>9</td>
            <td>mandateStartDate</td>
            <td>String</td>
            <td>8</td>
            <td>Date from when the service should be enabled. Date in a format YYYY-MM-DD.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>10</td>
            <td>mandateExpiryDate</td>
            <td>String</td>
            <td>8</td>
            <td>Date up to which the service should be active. Date in a format YYYY-MM-DD.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>11</td>
            <td>mandateToken</td>
            <td>String</td>
            <td></td>
            <td>Generated mandate token in tokenization gateway for the request.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>12</td>
            <td>mandateTokenType</td>
            <td>String</td>
            <td>1</td>
            <td>T - Temporary
                F - Fully Working
                (For temporary type token, third party should request designated API in NPI with required parameters to get fully working mandate)</td>
            <td>M</td>
        </tr>
        <tr>
            <td>13</td>
            <td>entryId</td>
            <td>String</td>
            <td>Max. 20</td>
            <td>Unique alphanumeric ID in tokenization gateway</td>
            <td>M</td>
        </tr>
        <tr>
            <td>14</td>
            <td>mandateTokenNickname</td>
            <td>String</td>
            <td>Max. 50</td>
            <td>Nick name for the tokenized eMandate</td>
            <td>M</td>
        </tr>
        <tr>
            <td>15</td>
            <td>bankName</td>
            <td>String</td>
            <td>100</td>
            <td>Tokenized account’s bank name</td>
            <td>M</td>
        </tr>
        <tr>
            <td>16</td>
            <td>bankId</td>
            <td>String</td>
            <td>4</td>
            <td>Tokenized account’s bank id</td>
            <td>M</td>
        </tr>
        <tr>
            <td>17</td>
            <td>token</td>
            <td>String</td>
            <td></td>
            <td>Base64 Signature token generated through signing the token string by NCHL private key. Signature algorithm is SHA256withRSA. UTF8 is the encoding algorithm.</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


Token String= participantId+”,” + identifier+”,” + userIdentifier +”,” + mobileNo+”,” +email+”,” +amount+”,” 
+debitType+”,” +frequency+”,” +mandateStartDate+”,” + mandateExpiryDate+”,” + mandateToken+”,”+ mandateTokenType 

**Sample Request from NCHL:** 
```json
{
   "identifier":"EMTXNID000000000421",
   "amount":"1000.00",
   "debitType":"F",
   "bankName":"NMB Bank Limited",
   "mobileNo":"9849428177",
   "mandateStartDate":"2022-08-28",
   "mandateExpiryDate":"2023-01-28",
   "mandateTokenNickName":"*****017",
   "mandateTokenType":"F",
   "frequency":"1",
   "entryId":360,
   "token":"UHvN8VdYL8CwzXDpG8v7ZbhO33fbRUBJPFPDIKbZTbqYeQirXLLoQ9U/zBf2YHMTknxvNbaJigk8K5C43S3N6uf6uZ+Zo9+IgZRrLvE2iH7EGt4aPMNkNzjCn4qJpdLXpt8U4JZMcuDsziowezSy+qBsN3k4TDv5HZZn1ZuqkOs=",
   "participantId":"SIDDCAPITAL@999",
   "bankId":"2501",
   "userIdentifier":"1301090078415599",
   "mandateToken":"STnmKc2aRA2GhA4VeLzlBKVCm7sCBvXxfJ2q8aKRxOJVfoRqyukBMYTU3dw7rWkD5LnnGmekXTCjLqT9MQt3GUjutNA/9MId78G771wrJz82LzbYKZLWb7ANCd8MTBl0B1x1LLf0bVBOmTig9uip1w==",
   "email":"ali.rajim12@gmail.com"
}
```
Following is a successful response sample from third party system to NCHL for getting e-Mandate API call.
```json
{ 
 "responseCode": "000", 
 "responseMessage": "SUCCESS", 
 "data": { 
    "identifier": "EMTXNID000000000421", 
    "participantId": "SIDDCAPITAL@999", 
    "entryId": "360", 
    "token": "<signature token of (identifier+  ',' + participantId+ ',' +entryId)>" 
 }, 
 "error": [] 
}

```
**Sample response for failure case**:** 
```json
{ 
 "responseCode": "111", 
 "responseMessage": "FAILED", 
 "data": { 
    "identifier ": "EMTXNID000000000421", 
    "participantId": "SIDDCAPITAL@999", 
    "entryId": "360", 
    "token": "<signature token of (identifier+ ',' + participantId+ ',' +entryId)> "
 }, 
 "error": [] 
}
```



### 10.2.2. Stage payment

In order to initiate payment request in NPI, payee participant channel should first obtain payment token from 
the e-Mandate token.
 
**POST URL:** {base_url}/tokenization/stagepayment

**Request Parameters:**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>participantId</td>
            <td>String</td>
            <td>Max. 25</td>
            <td>Participant id provided to third party system by NCHL for tokenization service</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>mandateToken</td>
            <td>String</td>
            <td></td>
            <td>Fully working e-Mandate token</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>userIdentifier</td>
            <td>String</td>
            <td>Max. 200</td>
            <td>User identifier in third party system</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>amount</td>
            <td>Numeric</td>
            <td>(8,2)</td>
            <td>Transaction amount</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>appId</td>
            <td>String</td>
            <td>Max. 30</td>
            <td>App Id registered in connectIPS to whom the payment is being done. App ID is related to bank account where amount from payer is to be collected.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>instructionId</td>
            <td>String</td>
            <td>Max. 20</td>
            <td>Unique identifier to trace the request</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>refId</td>
            <td>String</td>
            <td>35</td>
            <td>Reference for the payment</td>
            <td>M</td>
        </tr>
        <tr>
            <td>8</td>
            <td>particulars</td>
            <td>String</td>
            <td>30</td>
            <td>Particulars for the payment</td>
            <td>O</td>
        </tr>
        <tr>
            <td>9</td>
            <td>remarks</td>
            <td>String</td>
            <td>30</td>
            <td>Remarks for the payment</td>
            <td>O</td>
        </tr>
        <tr>
            <td>10</td>
            <td>addnField1</td>
            <td>String</td>
            <td>100</td>
            <td>Field for future use</td>
            <td>C</td>
        </tr>
        <tr>
            <td>11</td>
            <td>addnField2</td>
            <td>String</td>
            <td>100</td>
            <td>Field for future use</td>
            <td>C</td>
        </tr>
        <tr>
            <td>12</td>
            <td>token</td>
            <td>String</td>
            <td></td>
            <td>Base64 Signature token generated through signing the token string by participant private key. Signature algorithm is SHA256withRSA. UTF-8 is the encoding algorithm.</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


Token String= ”participantId+”,” + mandateToken +”,” + userIdentifier +”,” + amount +”,” + appId +”,” + instructionId+”,” + refId +”,”+ npiuserId”
  
**Sample Request:**
```json
{
   "participantId":"MOCO@999",
   "mandateToken":"X/TAuhjeD/bKIx5Jcezbx5IDC2zgH/YS57sFs038tSsxgcAfzM4nkUH/3eZ/MoudaQmfdXNUEJdtYQ9da6dQGyfYPBu3zvQQPKbOAi7XVHRxVP4PWeIT4/7/mUsxGroM",
   "userIdentifier":"ROSAN38",
   "amount":10.00,
   "appId":"GON-7-TVRS-1",
   "instructionId":"123456",
   "refId":"123",
   "particulars":"test",
   "remarks":"test",
   "addnField1":"",
   "addnField2":"",
   "token":"oMmv193tR7iF3GxAry6dOoQb9ei8haAQ+kg+Hwo9qjOjcsNJLChds/OfwOALiPGR4fJ/2KPZsagj8TE0NWSjLxIRhaj8OPAdxdLIGAe3jVYnUkomxoJE1ojTS5Yr1er1CTEsqgJSNpSrjDMvVkRHFeSUIrodgJRvlZYaZQ70HKXSC9k/BK2YVNN2TsFAoPeNbQJ9vlFTdZGuCqe5VUInNbekH3Q2+5yH4wDKXyqlSP2yjRLZeaDDosyn0oSgfzPxcEePQHPwb3fOBoOGm9zrEWAkP4QRgPodcoe0AFdZFAEsa1AroZQPpCdTRyKX1mRqnDWAXjWo8k5kK/ZOtEXDgw=="
}
```
**Success Response**
```json
{
   "responseCode":"000",
   "responseMessage":"SUCCESS",
   "recDate":"20220505035359672",
   "participantId":"MOCO@999",
   "paymentToken":"Reo6eUBmpmy4WgVWVAgjXAqs2vLNqqzrEfQgWaV1U2WvbRKK0617oCYZaHfIPCCCYMucqk6lzQw3ivGxLnK4ytk1gTprC0V3kWc9wjKe0KomZP1VMLsHJ60J90O6M0Ak2OwtIYUA1Vq/ROMcKbiv6MnptlkliQJQcZKfpnPtlBjssVsEuNxAEUpJoMIzKYErqeg/pgIycet7Um3+WHAHPw==",
   "amount":10.00,
   "chargeAmount":2.00,
   "chargeLiability":"CG",
   "appId":"GON-7-TVRS-1",
   "instructionId":"123456",
   "refId":"123",
   "particulars":"test",
   "remarks":"test",
   "addnField1":"",
   "addnField2":"",
   "secondaryAuthorizationRequired":"Y",
   "token":""
}
```
**Failure response:** 

```json
{
   "responseCode":"400",
   "responseStatus":"INVALID ACCOUNT",
   "responseMessage":"Invalid Account Detail.",
   "responseData":{
      
   },
   "responseErrors":[
      
   ]
}
Or
{
   "responseCode":"E003",
   "responseMessage":"INVALID TOKEN",
   "data":"",
   "classfielderrorlist":[
      
   ]
}
```

NCHL will respond with the following parameters:

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>responseCode</td>
            <td>String</td>
            <td>Max. 10</td>
            <td>Response code for the request. 000 is success</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>responseMessage</td>
            <td>String</td>
            <td>Max. 200</td>
            <td>Human-readable text for the response code</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>recDate</td>
            <td>String</td>
            <td>17</td>
            <td>YYYYMMDDHHmmssSSS</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>participantId</td>
            <td>String</td>
            <td>Max. 25</td>
            <td>Participant id provided to the third-party system by NCHL for tokenization service</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>paymentToken</td>
            <td>String</td>
            <td></td>
            <td>Payment token to be used for the payment request</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>amount</td>
            <td>Numeric</td>
            <td>(8,2)</td>
            <td>Transaction amount</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>chargeAmount</td>
            <td>Numeric</td>
            <td>(8,2)</td>
            <td>Charge for performing the transaction</td>
            <td>M</td>
        </tr>
        <tr>
            <td>8</td>
            <td>chargeLiability</td>
            <td>String</td>
            <td>2</td>
            <td>CG - Customer will bear the applicable charge (principle + charge amount will be deducted).
                MN - Merchant will bear the charge. (Merchant will receive principle-charge amount).
                MG - Merchant will bear the charge. (Merchant will receive principle amount. Charge will be deducted separately [Special arrangement by participant’s bank])</td>
            <td>M</td>
        </tr>
        <tr>
            <td>9</td>
            <td>appId</td>
            <td>String</td>
            <td>Max. 30</td>
            <td>App Id registered in connectIPS to whom the payment is being done.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>10</td>
            <td>instructionId</td>
            <td>String</td>
            <td>Max. 20</td>
            <td>Unique identifier to trace the request.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>11</td>
            <td>refId</td>
            <td>String</td>
            <td>30</td>
            <td>Reference for the payment.</td>
            <td>M</td>
        </tr>
        <tr>
            <td>12</td>
            <td>particulars</td>
            <td>String</td>
            <td>30</td>
            <td>Particulars for the payment</td>
            <td>O</td>
        </tr>
        <tr>
            <td>13</td>
            <td>remarks</td>
            <td>String</td>
            <td>30</td>
            <td>Remarks for the payment</td>
            <td>O</td>
        </tr>
        <tr>
            <td>14</td>
            <td>addnField1</td>
            <td>String</td>
            <td>100</td>
            <td>Field for future use</td>
            <td>C</td>
        </tr>
        <tr>
            <td>15</td>
            <td>addnField2</td>
            <td>String</td>
            <td>100</td>
            <td>Field for future use</td>
            <td>C</td>
        </tr>
        <tr>
            <td>16</td>
            <td>secondaryAuthorizationRequired</td>
            <td>String</td>
            <td>1</td>
            <td>Y - OTP or any other secondary authorization required for payment processing.
                N - Transaction requires no further authorization</td>
            <td>M</td>
        </tr>
        <tr>
            <td>17</td>
            <td>token</td>
            <td>String</td>
            <td></td>
            <td>Base64 Signature token generated through signing the token string by NCHL private key. Signature algorithm is SHA256withRSA. UTF-8 is the encoding algorithm.</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


Token String = participantId+”,”+paymentToken+”,”+amount+”,”+appId+”,”+instructionId+”,”+ 
secondaryAuthorizationRequired +”,” + responseCode ”,”+ npiuserId

## 10.2.3. Request payment 
With the payment token received in the response, a new request should be made in the below API within 
stipulated time. Current time limitation is 5 minutes i.e., request payment API has to be called within 5 
minutes of calling the stage payment API. 

**URL:** {base_url}/tokenization/requestpayment

**Method:** POST

**Request data:** JSON 

**Request parameters:**


<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>participantId</td>
            <td>String</td>
            <td>Max. 25</td>
            <td>Participant id provided to third party system by NCHL for tokenization service</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>paymentToken</td>
            <td>String</td>
            <td></td>
            <td>Payment token received from payment staging</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>authorizationToken</td>
            <td>String</td>
            <td></td>
            <td>OTP or any other authorization token if secondaryAuthorizationRequired is ‘Y’ during staging</td>
            <td>C</td>
        </tr>
        <tr>
            <td>4</td>
            <td>amount</td>
            <td>Numeric</td>
            <td>(8,2)</td>
            <td>Transaction amount</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>appId</td>
            <td>String</td>
            <td>Max. 30</td>
            <td>App Id registered in connectIPS to whom the payment is being done</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>token</td>
            <td>String</td>
            <td></td>
            <td>Base64 Signature token generated through signing the token string by participant private key. Signature algorithm is SHA256withRSA. UTF-8 is the encoding algorithm</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


Token String= ”participantId+”,” + paymentToken +”,” + amount +”,” + appId +”, ” npiuserId” 

**Response parameters:**
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>responseCode</td>
            <td>String</td>
            <td>Max. 10</td>
            <td>Response code for the request. 000 is success</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>responseMessage</td>
            <td>String</td>
            <td>Max. 200</td>
            <td>Human readable text for the response code</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>participantId</td>
            <td>String</td>
            <td>Max. 25</td>
            <td>Participant id provided to third party system by NCHL for tokenization service</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>paymentToken</td>
            <td>String</td>
            <td></td>
            <td>Payment token received from payment staging</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>debitStatus</td>
            <td>String</td>
            <td>30</td>
            <td>Payer account debit status</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>creditStatus</td>
            <td>String</td>
            <td>30</td>
            <td>Payee account credit status</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>amount</td>
            <td>Numeric</td>
            <td>(8,2)</td>
            <td>Transaction amount</td>
            <td>M</td>
        </tr>
          <tr>
            <td>8</td>
            <td>appId</td>
            <td>String</td>
            <td>Max. 30</td>
            <td>App Id registered in connectIPS to whom the payment is being done</td>
            <td>M</td>
        </tr>
        <tr>
            <td>9</td>
            <td>txnId</td>
            <td></td>
            <td></td>
            <td>12714868</td>
            <td></td>
        </tr>
          <tr>
            <td>10</td>
            <td>debitDescription</td>
            <td></td>
            <td></td>
            <td>SUCCESS</td>
            <td></td>
        </tr>
          <tr>
            <td>11</td>
            <td>creditDescription</td>
            <td></td>
            <td></td>
            <td>SUCCESS</td>
            <td></td>
        </tr>
        <tr>
            <td>12</td>
            <td>token</td>
            <td>String</td>
            <td></td>
            <td>Base64 Signature token generated through signing the token string by NCHL private key. Signature algorithm is SHA256withRSA. UTF-8 is the encoding algorithm</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


**Token String=** participantId+”,” + paymentToken +”,” + amount +”,” + appId +”,”+ debitStatus+”,”+ creditStatus+”,”+ 
responseCode”,”+ npiuserId

### 10.2.4. Token Cancellation 
A cancellation API will be available in NPI to cancel the e-Mandate token.

**POST URL:** {base_url}/tokenization/cancel

**Request type:** application/json
 
**Request parameters:**

<table>
    <thead>
        <tr>
            <th>S.N</th>
            <th>Parameter</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>participantId</td>
            <td>String</td>
            <td>25</td>
            <td>Participant id provided to third party system by NCHL for tokenization service</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>identifier</td>
            <td>String</td>
            <td>Max. 50</td>
            <td>Unique identifier provided during e-Mandate request initiation</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>userIdentifier</td>
            <td>String</td>
            <td>Max. 200</td>
            <td>User identifier in third party system</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>mandateToken</td>
            <td>String</td>
            <td></td>
            <td>e-Mandate token provided by tokenization gateway for the initial request</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>cancelReasonCode</td>
            <td>String</td>
            <td>10</td>
            <td>Reason Code to cancel the Mandate</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>cancelReasonMessage</td>
            <td>String</td>
            <td>200</td>
            <td>Human-readable message for the cancellation reason code</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>token</td>
            <td>String</td>
            <td></td>
            <td>Base64 Signature token generated through signing the token string by participant private key. Signature algorithm is SHA256withRSA. UTF-8 is the encoding algorithm</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


Token String= participantId+”,” + identifier+”,” + userIdentifier +”,” +mandateToken+”,” + cancelReasonCode” +”,” + 
npiuserId” 

**Sample Request:**
```json
{ 
"participantId": "MOCO@999", 
"identifier": "12345", 
"userIdentifier": "98******769", 
"mandateToken": "mandatetoken", 
"cancelReasonCode": "INVALID_AC", 
"cancelReasonMessage": "Invalid Account Number", 
"token": "randomToken" 
}
```
**Response Parameters:**

<table>
    <thead>
        <tr>
            <th>S.N</th>
            <th>Parameter</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>responseCode</td>
            <td>String</td>
            <td>10</td>
            <td>Reason code for the cancel request. 000-Success</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>responseMessage</td>
            <td>String</td>
            <td>200</td>
            <td>Human-readable message for the response code</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>participantId</td>
            <td>String</td>
            <td>25</td>
            <td>Participant id provided to third party system by NCHL for tokenization service</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>identifier</td>
            <td>String</td>
            <td>Max. 50</td>
            <td>Unique identifier provided during e-Mandate request initiation</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>userIdentifier</td>
            <td>String</td>
            <td>Max. 200</td>
            <td>User identifier in third party system</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>mandateToken</td>
            <td>String</td>
            <td></td>
            <td>e-Mandate token provided by tokenization gateway for the initial request</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>cancelReasonCode</td>
            <td>String</td>
            <td>10</td>
            <td>Reason Code to cancel the Mandate</td>
            <td>M</td>
        </tr>
        <tr>
            <td>8</td>
            <td>cancelReasonMessage</td>
            <td>String</td>
            <td>200</td>
            <td>Human-readable message for the cancellation reason code</td>
            <td>M</td>
        </tr>
        <tr>
            <td>9</td>
            <td>token</td>
            <td>String</td>
            <td></td>
            <td>Base64 Signature token generated through signing the token string by NCHL private key. Signature algorithm is SHA256withRSA. UTF-8 is the encoding algorithm</td>
            <td>M</td>
        </tr>
    </tbody>
</table>



```json

Token String= participantId+”,” + identifier+”,” + userIdentifier +”,” +mandateToken+”,” + cancelReasonCode+”,” + 
responseCode+”,”+ npiuserId”

```

**Sample Response:**

```json

{ 
"participantId": "MOCO@999", 
"identifier": "12345", 
"userIdentifier": "98******769", 
"mandateToken": "mandatetoken", 
"cancelReasonCode": "000", 
"cancelReasonMessage": "SUCCESS",
"token": "randomToken" 
} 
```

### 10.2.5. Re-new Token
A re-new API is available in NPI to renew the expired e-Mandate token. The condition for this is that the mandate token should be expired. 

**POST URL:** /tokenization/renew 

**Request type:**  application/json  

**Request parameters:**
<table>
  <thead>
    <tr>
      <th>S.N.</th>
      <th>Parameter</th>
      <th>Data Type</th>
      <th>Length</th>
      <th>Description</th>
      <th>Presence</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>participantId</td>
      <td>String</td>
      <td>25</td>
      <td>Participant id provided to third-party system by NCHL for tokenization service</td>
      <td>M</td>
    </tr>
    <tr>
      <td>2</td>
      <td>mandateToken</td>
      <td>String</td>
      <td></td>
      <td>e-Mandate token provided by tokenization gateway for the initial request.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>3</td>
      <td>token</td>
      <td>String</td>
      <td></td>
      <td>Base64 Signature token generated through signing the token string by participant private key. The signature algorithm is SHA256withRSA. UTF-8 is the encoding algorithm.</td>
      <td>M</td>
    </tr>
  </tbody>
</table>


```json
Token String= participantId+”,” + mandateToken+”,” + NPIUserId”
```

**Sample Request:**
```json

{ 
    "participantId": "SIDP1", 
    "mandateToken": "rHrZnRomfk6o3+9zzPFwoABqLTpSsVp21ScHhTusmsOr+O9YmMMhdlHINIFPoQeRHNcBk+ZTkIJTIJgNo8HKSsElSq0vDOvjuitqacT7Tmk=", 
    "token": "SwtBaX2p2ZEWi3yS33yfzqKZJvET7NzGLDy3urHEY5Leb1mhhprGNlDDCz05Srb1pNoQNjIGCp4fWuQLF2/UWupLY4ze7WcO2EehaVJGFNwtotqJR3FYsxbeu/OACEJssq0s0Tft1GZ9ya2/HCGfbkpv79abMyuNs+CHdSXhKaQ=" 
} 
```
**Response Parameters:**
<table border="1">
  <thead>
    <tr>
      <th>S.N.</th>
      <th>Parameter</th>
      <th>Data Type</th>
      <th>Length</th>
      <th>Description</th>
      <th>Presence</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>responseCode</td>
      <td>String</td>
      <td>10</td>
      <td>Response code for the request. "000" is success, otherwise, it's failed.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>2</td>
      <td>responseMessage</td>
      <td>String</td>
      <td></td>
      <td>Human-readable text for the response code.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>3</td>
      <td>participantId</td>
      <td>String</td>
      <td>25</td>
      <td>Participant ID provided to third-party system by NCHL for tokenization service.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>4</td>
      <td>mandateToken</td>
      <td>String</td>
      <td></td>
      <td>New e-Mandate token provided by tokenization gateway for the renew request.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>5</td>
      <td>startDate</td>
      <td>String</td>
      <td>8</td>
      <td>Date from when the service should be enabled. Date in a format YYYY-MM-DD.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>6</td>
      <td>expiryDate</td>
      <td>String</td>
      <td>8</td>
      <td>Date up to which the service should be active. Date in a format YYYY-MM-DD.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>7</td>
      <td>responseStatus</td>
      <td>String</td>
      <td></td>
      <td>Status of request.</td>
      <td>M</td>
    </tr>
  </tbody>
</table>


**Sample Response:**

**Success response:** 
```json
{ 
    "responseCode": "000", 
    "responseData": { 
        "participantId": "SIDP1", 
        "mandateToken": "lS7GyvqP6O/wocSj8kDMUoAGpIMiqVi9OkVuEzgIY2ueE5PQMEAJI0azSGiyiuirSb1eRBRJCVpZDCQmKWSCuqRv7Pvv+gF3drbB/2AA3taPVosGvwuoWRaN6ugq4+v5qQLTmlp3AxxbFo34klHUYw==", 
        "startDate": "2024-03-27", 
        "expiryDate": "2024-09-23" 
    }, 
    "responseStatus": "SUCCESS" 
} 
```

**Failure Cases:**

**Case I: When the user mandate is active.** 
```json
{ 
    "responseCode": "T016", 
    "responseMessage": "Requested mandate token is in active state.", 
    "responseStatus": "FAILED" 
} 
```

**Case II:  When the mandate token is invalid.**
```json
{ 
    "responseCode": "T015", 
    "responseMessage": "Invalid Mandate Token", 
    "responseStatus": "FAILED" 
} 
```

**Case III: Participant is enabled for auto-renewal.**
```json
{ 
    "responseCode": "T014", 
    "responseMessage": "Participant enabled for auto-renewable.", 
    "responseStatus": "FAILED" 
} 
```

**Response Codes:**

<table>
  <thead>
    <tr>
      <th>Response code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>000</td>
      <td>Success</td>
    </tr>
    <tr>
      <td>T014</td>
      <td>Participant enabled for auto-renewable.</td>
    </tr>
    <tr>
      <td>T015</td>
      <td>Invalid Mandate Token</td>
    </tr>
    <tr>
      <td>T016</td>
      <td>Requested mandate token is in an active state.</td>
    </tr>
  </tbody>
</table>




### 10.2.6. Exception Handling
Following exceptions must be handled at the technical member’s end: 
1. If a transaction is debit success and credit failed. New payment has to be initiated (requestPayment api has to 
be called again). Reversal of the transaction takes place in case of debit success and credit failed which is 
handled from connectIPS end. 
2. If a transaction is debit success and credit timeout (999), then no initiation of a new payment is to be done. If a 
transaction is not debit successful (000) in the response of request Payment API, then new transaction 
must be created.

