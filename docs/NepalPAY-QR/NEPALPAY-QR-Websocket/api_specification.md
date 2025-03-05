---
sidebar_position: 2
---
# 2. API  SPECIFICATION

## 2.1. GENERAL PAYLOAD
 
Named request/response model **WsTxnRecord** will be used for passing information through the QR 
Parsing as well as Transaction Process; depending upon the phase the fields have variable use case.
Further details of the fields are explained in detail:


<table>
     <thead>
       <tr>
         <th>Field</th>
         <th>Type</th>
         <th>Description</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>txn_id </td>
      <td>String</td>
      <td>Unique channel id for each transaction (validation trace id
generated during dynamic QR)</td>
      </tr>
       <tr>
      <td>channel </td>
      <td>String</td>
      <td>Client from where web socket connection request originates.
GWQR | NQR</td>
      </tr>
       <tr>
      <td>merchant_id </td>
      <td>String</td>
      <td>Terminal ID</td>
      </tr>
       <tr>
      <td>ws_id </td>
      <td>String</td>
      <td>Unique Id to identify each client request and used for response</td>
      </tr>
       <tr>
      <td>message </td>
      <td>String</td>
      <td>Different activity message.</td>
      </tr>
       <tr>
      <td>status </td>
      <td>String</td>
      <td><strong>Phase: QR Parsing</strong>
      <p>ENTR
PARSED</p>

<strong>Phase: QR Transaction </strong>
COMPLETED
FAILED
</td>
      </tr>
       <tr>
      <td> debit_status</td>
      <td>String</td>
      <td>Debit status field is only applicable on QR Transaction Phase.
Phase: QR Transaction
Success: 000 (Rest Failed)</td>
      </tr>
       <tr>
      <td>credit_status  </td>
      <td>String</td>
      <td>Credit status field is only applicable on QR Transaction Phase.
Phase: QR Transaction
Success: 000/999/DEFER (Rest Failed)
</td>
      </tr>
       </tbody>
</table>

## 2.2 CONNECTION ESTABLISHMENT
In order to perform bi-directional web socket communication client must first initiate the connection 
request.
<table>
     <thead>
       <tr>
       </tr>
     </thead>
     <tbody>
     <tr>
      <td>Direction</td>
      <td>Client -> WS Request</td>
      </tr>
      <tr>
      <td>URL</td>
      <td>/nqrws
</td>
      </tr>
      </tbody>
</table>

### 2.2.1 Subscribe

To get the data back from WS server, client must subscribe to given end point.
<table>
     <thead>
       <tr>
       </tr>
     </thead>
     <tbody>
     <tr>
      <td>Direction</td>
      <td>Client -> WS Request</td>
      </tr>
      <tr>
      <td>URL</td>
      <td>/user/nqrws/check-txn-status</td>
      </tr>
      </tbody>
</table>

### 2.2.2 Transaction Detail Request

Send information of transaction details such as merchant id and transaction id.
<table>
     <thead>
       <tr>
       </tr>
     </thead>
     <tbody>
     <tr>
      <td>Direction</td>
      <td>Request</td>
      </tr>
      <tr>
      <td>URL</td>
      <td>/nqrws/check-txn-status
</td>
      </tr>
      </tbody>
</table>

**Request Payload:**

<table>
     <thead>
       <tr>
       <th>Field</th>
       <th>Format</th>
       <th>Description</th>
       </tr>
     </thead>
     <tbody>
     <tr>
      <td>merchant_id</td>
      <td>String</td>
      <td>Merchant PAN</td>
      </tr>
      <tr>
      <td>request_id</td>
      <td>String</td>
      <td>Unique transaction id
(validation trace id generated
during dynamic QR)</td>
      </tr>
      <tr>
      <td>username</td>
      <td>String</td>
      <td>Username (will be provided)
</td>
      </tr>
      <tr>
      <td>api_token</td>
      <td>String</td>
      <td>API Token (will be provided)
</td>
      </tr>  
   </tbody>
</table>

**Example Payload:**
```json
{
   "merchant_id": "MER-980-APP-1",
   "request_id":"770342",
   "username":"username",
   "api_token":"WAxGtlKbhV3NE+d3DB3mfzgj2hD2oS6j46NuPJm/9yB1yhVsRM1tWfyj9yGdJv1GMlZTfbRWzybdiQAUQ+TryuAIbEfTXEPJ6DURIv5g6AbeCl7RitiyILRiKnPPiBPTMtv0R7v4bIr/o6qQBdYZL4BJ7fXFsOddium0RDmaQVLfjrc0qjxh/LXLOnSQcgyXtLgQGFIaLt84AGozYx6kpYv9kipo8DxWGJ7pdPl5y8NNvmzG7IEdaaHytKt/fd3ci3zF2kLBOdY/RNC34t0LFJwuPpf6C0dlk4c+MciAth9dzxHenXZ7x0seSrxttcB+gRcg/V61c1x02AfyD7lQ=="
}  
```   

**Response Structure:**
<table>
     <thead>
       <tr>
       <th>Field</th>
       <th>Format</th>
       <th>Description</th>
       </tr>
     </thead>
     <tbody>
     <tr>
      <td>status</td>
      <td>String</td>
      <td>Web socket QR transaction
status
</td>
      </tr>
       <tr>
      <td>channel</td>
      <td>String</td>
      <td>Client channel name
</td>
      </tr> 
      <tr>
      <td>message</td>
      <td>String</td>
      <td>Information message
</td>
      </tr>
       <tr>
      <td>merchant_id </td>
      <td>String</td>
      <td>Merchant id
</td>
      </tr> <tr>
      <td>request_id</td>
      <td>String</td>
      <td>Unique transaction id</td>
      </tr>
       <tr>
      <td>ws_id </td>
      <td>String</td>
      <td>Unique web socket id</td>
      </tr>
</tbody>
</table>

**Example Response:**
```json
{
 "status": "ENTR",
 "channel": "GWQR",
 "message": "Connection Established",
 "merchant_id": "MER-980-APP-1",
 "request_id": "10034234",
 "ws_id": "20230604074816685e7def11c-6fd7-4aa9-ab13-2c9f0c22299d"
}
```
API Token must be encrypted with public key and passed in the request for establishing connection. 
Public key will be provided by NCHL. The encryption algorithm should be “RSA/ECB/PKCS1Padding”.