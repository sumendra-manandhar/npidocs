---
sidebar_position: 3
---

# 3. Lodge Bill Pay 


**Post URL: /api/billpayment/lodgebillpay.do (Real Time)**

 **/api/ips/billpayment/lodgebillpay.do (Non-Real Time)**

After app journey is completed, next process is to call the lodge bill API to fetch the bill details and 
validate details at service provider side. The sample specification of lodge bill details is given below. 
Where batch details will be same for all service payments and for transaction details will be according 
to the user input which has to be mapped according to response of app journey field mapping object 
details.


**Request Parameters**

**Batch Details:**


<table>
  <tr>
    <th>#</th>
    <th>Field Name</th>
    <th>Data Type</th>
    <th>Length</th>
    <th>Presence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>batchId</td>
    <td>String</td>
    <td>20</td>
    <td>Y</td>
    <td>Unique Identification for the batch for later reconciliation.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>batchAmount</td>
    <td>BigDecimal</td>
    <td>14,2</td>
    <td>Y</td>
    <td>The total sum of amount of all the transactions in the batch.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>batchCount</td>
    <td>Integer</td>
    <td>-</td>
    <td>Y</td>
    <td>Total transactions in the batch.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>batchCrncy</td>
    <td>String</td>
    <td>3</td>
    <td>Y</td>
    <td>Currency of the transaction. E.g. NPR</td>
  </tr>
  <tr>
    <td>6</td>
    <td>categoryPurpose</td>
    <td>String</td>
    <td>4</td>
    <td>Y</td>
    <td>Purpose of the transaction. E.g. RTPS, ECPG, GREV</td>
  </tr>
  <tr>
    <td>7</td>
    <td>debtorAgent</td>
    <td>String</td>
    <td>4</td>
    <td>Y</td>
    <td>Financial institution where the transactions initiating party account is held.</td>
  </tr>
  <tr>
    <td>8</td>
    <td>debtorBranch</td>
    <td>String</td>
    <td>4</td>
    <td>Y</td>
    <td>Financial institution branch where the transactions initiating party account is held.</td>
  </tr>
  <tr>
    <td>9</td>
    <td>debtorName</td>
    <td>String</td>
    <td>140</td>
    <td>Y</td>
    <td>Transaction initiation party account name.</td>
  </tr>
  <tr>
    <td>10</td>
    <td>debtorAccount</td>
    <td>String</td>
    <td>20</td>
    <td>Y</td>
    <td>Transaction initiation party account number.</td>
  </tr>
  <tr>
    <td>11</td>
    <td>debtorIdType</td>
    <td>String</td>
    <td>4</td>
    <td>O</td>
    <td>Transaction initiation party private id type for ex. Citizenship, pan no, passport etc.</td>
  </tr>
  <tr>
    <td>12</td>
    <td>debtorIdValue</td>
    <td>String</td>
    <td>20</td>
    <td>O</td>
    <td>Transactions initiation party identification number for ex. Passport number, pan no. etc.</td>
  </tr>
  <tr>
    <td>13</td>
    <td>debtorAddress</td>
    <td>String</td>
    <td>490</td>
    <td>O</td>
    <td>Transactions initiation party postal address.</td>
  </tr>
  <tr>
    <td>14</td>
    <td>debtorPhone</td>
    <td>String</td>
    <td>20</td>
    <td>O</td>
    <td>Transactions initiation party debtor phone number.</td>
  </tr>
  <tr>
    <td>15</td>
    <td>debtorMobile</td>
    <td>String</td>
    <td>20</td>
    <td>O</td>
    <td>Transactions initiation party mobile number. </td>
  </tr>
  <tr>
    <td>16</td>
    <td>debtorEmail</td>
    <td>String</td>
    <td>50</td>
    <td>O</td>
    <td>Transactions initiation party email address.</td>
  </tr>
</table>



**Transaction Details:**

<table>
  <tr>
    <th>#</th>
    <th>Field Name</th>
    <th>Data Type</th>
    <th>Length</th>
    <th>Presence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>instructionId</td>
    <td>String</td>
    <td>30</td>
    <td>Y</td>
    <td>Unique identification for the transaction for reconciliation purpose later. This is to be presented for all service payments.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>endToEndId</td>
    <td>String</td>
    <td>30</td>
    <td>Y</td>
    <td>Identification reference for both sender and receiver. This is to be presented for all service payments.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>amount</td>
    <td>BigDecimal</td>
    <td>13,2</td>
    <td>Y</td>
    <td>The amount to be transferred through this transaction. In case of amount to be taken from service provider, pass 0 amount lodge bill. In confirm bill, pass the actual amount received during lodge bill response.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>appId</td>
    <td>String</td>
    <td>15</td>
    <td>Y</td>
    <td>App id for traffic fine payment system. This is service specific app code. To be presented for all service payments.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>refId</td>
    <td>String</td>
    <td>35</td>
    <td>Y</td>
    <td>Chit number. To be taken as user input</td>
  </tr>
  <tr>
    <td>6</td>
    <td>freeCode1</td>
    <td>String</td>
    <td>20</td>
    <td>Y</td>
    <td>Fiscal year of fine payment. To be taken as user input</td>
  </tr>
</table> 



**Token Generation Process:** 

1. Token string generation 
The token string is the combination of batch and transactions information and following will be the format. 




<pre><code parentName="pre"{...{"className":"language-json"}}>{'Batch String=<BatchId>+","+<DebtorAgent>+","+<DebtorBranch>+","+<DebtorAccount>+","+<BatchAmount>+","+<Batch Currency (e.g. NPR)> '}</code></pre>



 **For each transaction**

<pre><code parentName="pre"{...{"className":"language-json"}}>
{'Transaction String=Transaction String+","+<Instruction Id>+","<App Id>+","+<Ref Id>'}</code></pre>

<pre><code parentName="pre"{...{"className":"language-json"}}>{'Token String=Batch String + Transaction String+","+<user Id>'}</code></pre>



1. Sign the token string using the digital certificate private key(pfx file/keystore).The digital signature algorithm will 
be the SHA256withRSA.

1. Convert the signed token above in step 2 to base64 encoding. 
   
2. Pass this signature string to the “token” field of the request message. 


**Example:** 

**Sample Request (Real Time)**

```json
{
  "cipsBatchDetail": {
    "batchId": "T13-12818780108",
    "batchAmount": 0,
    "batchCount": 1,
    "batchCrncy": "NPR",
    "categoryPurpose": "GREV",
    "debtorAgent": "2601",
    "debtorBranch": "1",
    "debtorName": "PUSPA RAJ UPADHAYAY",
    "debtorAccount": "1234567890",
    "debtorIdType": "0001",
    "debtorIdValue": "123456",
    "debtorAddress": "Kathmandu Nepal",
    "debtorPhone": "+977-01-425****",
    "debtorMobile": "+977-98********",
    "debtorEmail": "test@test.com"
  },
  "cipsTransactionDetail": {
    "instructionId": "T13-12818780108-1",
    "endToEndId": "Traffic Fine Payment",
    "amount": 0,
    "appId": "GON-7-TVRS-1",
    "refId": "88241",
    "freeCode1": "7778"
  },
  "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=="
}

```

**Sample Request (Non-Real Time)**

```json
 {
    "nchlIpsBatchDetail": {
        "batchId": "IRD-20250610-12",
        "batchAmount": "250",
        "batchCount": "1",
        "batchCrncy": "NPR",
        "categoryPurpose": "GREV",
        "debtorAgent": "2501",
        "debtorBranch": "1",
        "debtorName": "Ankit Neupane",
        "debtorAccount": "0010********0018",
        "debtorIdType": "0001",
        "debtorIdValue": "123456",
        "debtorAddress": "Kathmandu Nepal",
        "debtorPhone": "",
        "debtorMobile": "",
        "debtorEmail": ""
    },
    "nchlIpsTransactionDetail": {
        "instructionId": "IRD-20250610-12",
        "endToEndId": "IRD-20250610",
        "amount": "250",
        "appId": "MER-7-APP-8",
        "refId": "2081-2483782"
    },
  "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=="
}

```


Note: Fields to consider during response from Traffic Fine payment service

<table>
  <tr>
    <th>S.N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>refId</td>
    <td>String</td>
    <td>Chit number</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Particulars</td>
    <td>String</td>
    <td>Violator Full Name</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Remarks</td>
    <td>String</td>
    <td>Violation Description</td>
  </tr>
  <tr>
    <td>4</td>
    <td>appTxnId</td>
    <td>String</td>
    <td>EBP Number</td>
  </tr>
  <tr>
    <td>5</td>
    <td>addenda3</td>
    <td>String</td>
    <td>Vehicle category</td>
  </tr>
  <tr>
    <td>6</td>
    <td>addenda4</td>
    <td>String</td>
    <td>Voucher number</td>
  </tr>
</table>


**Success Response**
```json
{
   "responseResult":{
      "responseCode":"000",
      "responseDescription":"SUCCESS",
      "fieldErrors":[
         
      ]
   },
   "cipsBatchDetail":{
      "id":null,
      "batchId":"T13-12818780108",
      "recDate":null,
      "channelId":null,
      "ipsBatchId":null,
      "fileName":null,
      "batchAmount":500,
      "batchCount":1,
      "batchChargeAmount":null,
      "batchCrncy":"NPR",
      "categoryPurpose":"GREV",
      "debtorAgent":"2601",
      "debtorBranch":"1",
      "debtorName":"PUSPA RAJ UPADHAYAY",
      "debtorAccount":"123456789",
      "debtorIdType":"0001",
      "debtorIdValue":"123456",
      "debtorAddress":"Kathmandu Nepal",
      "debtorPhone":"+977-01-425****",
      "debtorMobile":"+977-98********",
      "debtorEmail":"test@test.com",
      "rcreUserId":null,
      "rcreTime":null,
      "debitStatus":null,
      "debitReasonCode":null,
      "isoTxnId":null,
      "sessionSrlNo":null,
      "settlementDate":null,
      "corporateId":null,
      "initBranchId":null,
      "debitReasonDesc":null,
      "txnResponse":null
   },
   "cipsTransactionDetail":{
      "id":null,
      "recDate":null,
      "instructionId":"T13-12818780108-1",
      "endToEndId":"Traffic Fine Payment",
      "amount":500,
      "chargeAmount":null,
      "chargeLiability":null,
      "purpose":null,
      "creditorAgent":null,
      "creditorBranch":null,
      "creditorName":null,
      "creditorAccount":null,
      "creditorIdType":null,
      "creditorIdValue":null,
      "creditorAddress":null,
      "creditorPhone":null,
      "creditorMobile":null,
      "creditorEmail":null,
      "addenda1":null,
      "addenda2":null,
      "addenda3":"AAA",
      "addenda4":"2077-4138841",
      "freeCode1":"7778",
      "freeCode2":"11002",
      "freeText1":"d09fa0a2765843419098b251982ec2d6",
      "freeText2":"BA42785529F202ECE0530A64C75DBC19",
      "rcreUserId":null,
      "rcreTime":null,
      "ipsBatchId":null,
      "creditStatus":null,
      "reasonCode":null,
      "refId":"7778158798",
      "remarks":"Drink and Drive",
      "particulars":"Ram Thapa",
      "merchantId":null,
      "appId":"MER-984-APP-1",
      "appTxnId":null,
      "reversalStatus":null,
      "isoTxnId":null,
      "batchId":null,
      "orignBranchId":null,
      "reasonDesc":null,
      "txnResponse":null
   },
   "token":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=="
}
```

**Failed Response**

```json
{
   "responseResult":{
      "responseCode":"E007",
      "responseDescription":"TECHNICAL VALIDATION FAILED",
      "fieldErrors":[
         {
            "field":"cipsTransactionDetail.refId",
            "message":"Already paid for this violation."
         }
      ]
   },
   "cipsBatchDetail":{
      "id":null,
      "batchId":"T13-12818780108",
      "recDate":null,
      "channelId":null,
      "ipsBatchId":null,
      "fileName":null,
      "batchAmount":0,
      "batchCount":1,
      "batchChargeAmount":null,
      "batchCrncy":"NPR",
      "categoryPurpose":"GREV",
      "debtorAgent":"2601",
      "debtorBranch":"1",
      "debtorName":"PUSPA RAJ UPADHAYAY",
    "debtorAccount": "0010********0018",
      "debtorIdType":"0001",
      "debtorIdValue":"123456",
      "debtorAddress":"Kathmandu Nepal",
      "debtorPhone":"+977-01-425****",
      "debtorMobile":"+977-98********",
      "debtorEmail":"test@test.com",
      "rcreUserId":null,
      "rcreTime":null,
      "debitStatus":null,
      "debitReasonCode":null,
      "isoTxnId":null,
      "sessionSrlNo":null,
      "settlementDate":null,
      "corporateId":null,
      "initBranchId":null,
      "debitReasonDesc":null,
      "txnResponse":null
   },
   "cipsTransactionDetail":{
      "id":null,
      "recDate":null,
      "instructionId":"T13-12818780108-1",
      "endToEndId":"Traffic Fine Payment",
      "amount":0,
      "chargeAmount":null,
      "chargeLiability":null,
      "purpose":null,
      "creditorAgent":null,
      "creditorBranch":null,
      "creditorName":null,
      "creditorAccount":null,
      "creditorIdType":null,
      "creditorIdValue":null,
      "creditorAddress":null,
      "creditorPhone":null,
      "creditorMobile":null,
      "creditorEmail":null,
      "addenda1":null,
      "addenda2":null,
      "addenda3":null,
      "addenda4":null,
      "freeCode1":"7778",
      "freeCode2":null,
      "freeText1":null,
      "freeText2":null,
      "rcreUserId":null,
      "rcreTime":null,
      "ipsBatchId":null,
      "creditStatus":null,
      "reasonCode":null,
      "refId":"187145",
      "remarks":null,
      "particulars":null,
      "merchantId":null,
      "appId":"MER-984-APP-1",
      "appTxnId":null,
      "reversalStatus":null,
      "isoTxnId":null,
      "batchId":null,
      "orignBranchId":null,
      "reasonDesc":null,
      "txnResponse":null
   },
   "token":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=="
}
```
Note: For all failed response, kindly check the response code and description.


