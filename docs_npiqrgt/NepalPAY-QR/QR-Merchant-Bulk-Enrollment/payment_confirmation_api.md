---
sidebar_position: 3
---

#  3.Payment Confirmation API Details
 This API serves as the channel for payment confirmation from NEPALPAY QR engine after successful QR transaction. It is specifically designed for service providers who have integrated NEPALPAY Dynamic QR as their payment instrument. The respective merchant service providers must have exposed the API according to the following specification.

**POST URL:** {base_url}/nepalpay/confirm-payment

**Authorization** : Basic Auth

**Request Signature Generation:**

The signature string is the combination of response parameters in the following format.

<pre><code parentName="pre"{...{"className":"language-json"}}>{`Signature String = <merchantBillNo>+”,” +<merchantId>+”,” +<merchantName>+”,” +<paymentRef>+”,” +<channel>+”,” +<payerMobileNumber>+”,” +<sessionNo>`}</code></pre>

1.	Sign the token string using the digital certificate private key (pfx file/keystore). The digital signature algorithm will be the SHA256 with RSA.
2.	Convert the signed token above in step 2 to base64 encoding.
3.	Pass this signature string to the “signature” field of the request message



**Response Token Generation:**

The signature string is the combination of response parameters in the following format.

<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String = < txnDate >+”,” +< status >+”,” +< message >+”,” +< mchantBillNo >+”,” +< paymentRef >`}</code></pre>

1.	Sign the token string using the digital certificate private key (pfx file/keystore). The digital signature algorithm will be the SHA256 with RSA.
2.	Convert the signed token above in step 2 to base64 encoding.
3.	Pass this signature string to the “signature” field of the request message


**Request Parameters:**

<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Params</th>
         <th>Type</th>
         <th>Length</th>
         <th>Presence </th>
         <th>Description</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>txnDate </td>
      <td>String</td>
      <td> </td>
      <td>M</td>
      <td>Transaction date. Format (yyyy-MM-dd HH:mm:ss) </td>
     </tr>
     <tr>
      <td>2</td>
      <td> txnAmount </td>
      <td>Numeric</td>
      <td> 12,2</td>
      <td>M</td>
      <td>Transaction amount</td>
     </tr>
     <tr>
      <td>3</td>
      <td>  chargeAmt</td>
      <td>Numeric</td>
      <td> 12,2</td>
      <td>M</td>
      <td>Charge amount</td>
     </tr>
     <tr>
      <td>4</td>
      <td> merchantId </td>
      <td>String</td>
      <td>25 </td>
      <td>M</td>
      <td>Merchant code </td>
     </tr>
     <tr>
      <td>5</td>
      <td>storeLabel  </td>
      <td>String</td>
      <td>25</td>
      <td>O</td>
      <td>Store label of QR code</td>
     </tr>
     <tr>
      <td>6</td>
      <td>terminalId  </td>
      <td>String</td>
      <td>10</td>
      <td>O</td>
      <td>Terminal label of QR code</td>
     </tr>
     <tr>
      <td>7</td>
      <td> merchantName </td>
      <td>String</td>
      <td>25 </td>
      <td>M</td>
      <td>Merchant name</td>
     </tr>
     <tr>
      <td>8</td>
      <td>rpstxnId</td>
      <td>Numeric</td>
      <td> </td>
      <td>M</td>
      <td>Transaction id from Network side</td>
     </tr>
     <tr>
      <td>9</td>
      <td>validationTraceId </td>
      <td>String</td>
      <td>20</td>
      <td>M</td>
      <td>Unique QR validation Id provided by NCHL during QR generation.It will be used for end to end reporting and reconciliation.</td>
     </tr>
     <tr>
      <td>10</td>
      <td>paymentRef</td>
      <td>Alpha-Numeric</td>
      <td>35 </td>
      <td>M</td>
      <td>Unique QR validation Id.It will be used for end to end reporting and reconciliation. i.e (‘NQR-TXN ID’)</td>
     </tr>
     <tr>
      <td>11</td>
      <td>merchantBillNo  </td>
      <td>String</td>
      <td> </td>
      <td>M</td>
      <td>Bill no./ Unique code or Id enough for transaction reconciliation </td>
     </tr>
     <tr>
      <td>12</td>
      <td> status </td>
      <td>String</td>
      <td>10 </td>
      <td>M</td>
      <td>Transaction status (SUCCESS|PENDING|FAILED) </td>
     </tr>
     <tr>
      <td>13</td>
      <td>statusDesc  </td>
      <td>String</td>
      <td>50 </td>
      <td>M</td>
      <td>Transaction status description </td>
     </tr>
     <tr>
      <td>14</td>
      <td> remarks </td>
      <td>String</td>
      <td>100 </td>
      <td>M</td>
      <td>Remarks for transaction</td>
     </tr>
     <tr>
      <td>15</td>
      <td>signature  </td>
      <td>String</td>
      <td> </td>
      <td>M</td>
      <td>SHA256 signature token</td>
     </tr>
     <tr>
      <td>16</td>
      <td>channel  </td>
      <td>String</td>
      <td>10 </td>
      <td>M</td>
      <td>Issuer channel e.g. CIPS|MOB|WAL</td>
     </tr>
     <tr>
      <td>17</td>
      <td> payerMobile </td>
      <td>String</td>
      <td>10 </td>
      <td>M</td>
      <td>Payer Mobile Number</td>
     </tr>
      <tr>
      <td>18</td>
      <td> sessionNo </td>
      <td>Numeric</td>
      <td> </td>
      <td>M</td>
      <td>Unique session id</td>
     </tr>
      <tr>
      <td>19</td>
      <td>extraPaymentParams  </td>
      <td>Map(K,V)</td>
      <td> </td>
      <td>M</td>
      <td>Extra parameters to identify transaction. Params can be in the form of key-value pair</td>
     </tr>
     </tbody>
</table>

**Sample Request**
```json
{
"statusDesc": "SUCCESS",
"chargeAmt": 0,
"signature": "axPUj41hD38LeIUzbH2Qq/UQJofo1obu9ZHNEqS7hPAwyV5+/Gco8QTsHJVhnyTce888ZK4xe47bebnD4nlO/f9eKy8quGw32mnyI1cM+MxeQPHoegjptOnbnCnFpoF+TiBu/P9mZpDYqzl2MjzpkJealsgqt24Kt/UexhIgAYc=",
"rpstxnId": "13249559",
"channel": "CIPS",
"terminalId": "Terminal1",
"storeLabel": "Store1",
"sessionNo": "5446",
"issuer": "00001801",
"merchantName": "Quantum Labs",
"merchantBillNo": "NA",
"paymentRef": "2411100000067378ZHU",
"payerMobile": "+977-9843705813",
"extraPaymentParams": {
"address": "NCHL",
"txnCrncy": "NPR",
"customerName": "Bajrang Steels Pvt Ltd"
},
"merchantId": "0010SVQNL9H",
"validationTraceId": "2411100000241841VML",
"instructionId": "CIPS-68109",
"txnDate": "2024-11-10 01:35:31",
"txnAmount": 50,
"remarks": "NEPALPAYQR-512727",
"status": "SUCCESS"

}
```

**Sample Response**
```json
{
    "txnDate": "2024-11-10 01:35:31",
    "status": "SUCCESS",
    "message": "TRANSACTION SUCCESSFUL",
    "merchantBillNo": "NA",
    "paymentRef": "2411100000067378ZHU",
    "signature": "Ghxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}

```