---
sidebar_position: 6
---


# 6. Creditor Payment status query API


This API is used to fetch the status of creditor/bill payment transactions made through National Payment 
Interface (NPI). Creditor status query API can be triggered after the payment transaction (confirm bill) is 
successful where debit status should be successful (000) and credit status (‘000’, DEFER,’999’, ACSC). 
Refer ***creditorPaymentDetail*** object in below sample response for the actual status of creditor payment.

**POST URL: /api/v1/query-transaction**

 **Request parameters**

<table>
  <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Length</th>
    <th>Required</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>1</td>
    <td>instructionId</td>
    <td>String</td>
    <td>35</td>
    <td>C</td>
    <td>Unique identification for the transaction for reconciliation purpose later.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>batchId</td>
    <td>String</td>
    <td>20</td>
    <td>C</td>
    <td>Unique Identification for the batch for later reconciliation.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>transactionId</td>
    <td>String</td>
    <td>20</td>
    <td>C</td>
    <td>Unique id returned by the system for system level verification.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>realTime</td>
    <td>Boolean</td>
    <td>-</td>
    <td>M</td>
    <td>CIPS transaction = true, IPS transaction = false</td>
  </tr>
</table>



**POST URL for Authentication: /oauth/token**
**Sample Request:**

```json
{
 "instructionId": "", 
 "batchId": "712021382", 
 "transactionId": "", 
 "realTime": true 
}
```

**Sample Response:**
```json
{
  "responseCode": "000",
  "responseMessage": "Transaction detail Retrieved successfully.",
  "responseData": {
    "cipsBatchResource": {
      "batchId": "221111063444778335",
      "recDate": "2022-11-11",
      "batchAmount": 1000.00,
      "batchCount": 1,
      "batchChargeAmount": 5.00,
      "batchCurrency": "NPR",
      "debtorAgent": "2501",
      "debtorBranch": "53",
      "debtorName": "Namrata Shrestha",
      "debtorAccount": "0530030072000016",
      "debtorPhone": "Namrata Shrestha",
      "debtorMobile": "+977-9812345678",
      "debtorEmail": "test@test.com",
      "rcreTime": "2022-11-11T06:34:44.847+0000",
      "debitStatus": "000",
      "isoTxnId": 740240,
      "sessionSrlNo": 2578
    },
    "cipsTransactionResources": [
      {
        "transactionId": 12347652,
        "batchId": 712021382,
        "recDate": "2022-11-11",
        "instructionId": "CIT221111063444778335",
        "endToEndId": "221111063444778335",
        "amount": 1000.00,
        "chargeAmount": 5.00,
        "creditorAgent": "2101",
        "creditorName": "CITIZEN INVESTMENT TRUST SARAL KARJA",
        "creditorAccount": "01600197GL",
        "reasonDesc": "SUCCESS",
        "refId": "001CPS0000001",
        "remarks": "1971/05/19",
        "particulars": "Keshav Raj Khatiwada",
        "tnxDateTime": "2022-11-11T06:34:44.847+0000",
        "creditStatus": "DEFER",
        "isoTxnId": 740240
      }
    ],
    "creditorPaymentDetail": {
      "txnDate": "2022-11-10T18:15:00.000+0000",
      "status": "SUCCESS",
      "description": "SUCCESS", 
      "txnId": 12347652
    },
    "responseErrors": null,
    "responseStatus": "SUCCESS"
  }
}


```
**Error Handling For Creditor Status Query**

<table>
  <tr>
    <th>HTTP Status</th>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>HttpStatus.<strong>OK</strong></td>
    <td>200</td>
    <td>SUCCESS</td>
  </tr>
  <tr>
    <td>HttpStatus.<strong>BAD_REQUEST</strong></td>
    <td>400 / E001</td>
    <td>INPUT PARAMETER MISSING ( <strong>Please, provide at least one search parameters</strong>)</td>
  </tr>
  <tr>
    <td>HttpStatus.<strong>NOT_FOUND</strong></td>
    <td>200 / E010</td>
    <td>RECORD NOT FOUND</td>
  </tr>
</table>

**Note:** In case original transaction exits in the system however it’s corresponding creditor payment status 
not available or pending, the status will be creditorPaymentDetail: null.



**Response Code Handling**
For service payment transaction, handling of Http status and transaction response code will be same 
as payment integration with National Payment Interface (NPI) for fund transfer. Refer to NPI 
Specification document for further details
