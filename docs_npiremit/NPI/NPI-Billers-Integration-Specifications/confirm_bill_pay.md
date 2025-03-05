---
sidebar_position: 4
---

# 4. Confirm Bill Pay

After successful lodge bill, final payment confirmation to be done as confirm bill payment process. Where 
all the batch and transaction request will be the same. Only special consideration is required for amount 
field. 
1. If amount is to be taken as an input from user, batch and transaction request detail will be same 
for both lodge and confirm bill.
2. If amount is to be taken/validated from service provider side, there will be 0 amount in lodge bill 
and actual amount received in the response of lodge bill to be mapped in confirm bill payment.


**Post URL: /api/billpayment/confirmbillpay.do (Real Time)**

 **: /api/ips/billpayment/confirmbillpay.do (Non-Real Time)**

**Request Parameters**

```json
{
  "cipsBatchDetail": {
    "batchId": "T13-12818780108",
    "batchAmount": 1000,
    "batchCount": 1,
    "batchCrncy": "NPR",
    "categoryPurpose": "GREV",
    "debtorAgent": "2601",
    "debtorBranch": "1",
    "debtorName": "Test Account",
    "debtorAccount": "00111900921246000002",
    "debtorIdType": "0001",
    "debtorIdValue": "123456",
    "debtorAddress": "Kathmandu Nepal",
    "debtorPhone": "+977-01-4255306",
    "debtorMobile": "+977-9812345678",
    "debtorEmail": "test@test.com"
  },
  "cipsTransactionDetail": {
    "instructionId": "T13-12818780108-1",
    "endToEndId": "Traffic Fine Payment",
    "amount": 1000,
    "appId": "MER-984-APP-1",
    "refId": "187145",
    "freeCode1": "7778"
  },
  "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=="
}

```
**Response Parameters** 
```json
{
   "responseResult":{
      "responseCode":"000",
      "responseDescription":"SUCCESS",
      "fieldErrors":[
         
      ]
   },
   "cipsBatchDetail":{
      "id":712532255,
      "batchId":"T13-12818780108",
      "recDate":"2021-02-04T16:47:53.967+0000",
      "channelId":"TECHM",
      "ipsBatchId":null,
      "fileName":null,
      "batchAmount":1000,
      "batchCount":1,
      "batchChargeAmount":2.00,
      "batchCrncy":"NPR",
      "categoryPurpose":"GREV",
      "debtorAgent":"2601",
      "debtorBranch":"1",
      "debtorName":"PUSPA RAJ UPADHAYA",
      "debtorAccount":"1234567812",
      "debtorIdType":null,
      "debtorIdValue":null,
      "debtorAddress":null,
      "debtorPhone":null,
      "debtorMobile":null,
      "debtorEmail":null,
      "rcreUserId":"KHALTI@999",
      "rcreTime":"2021-02-04T16:47:53.967+0000",
      "debitStatus":"000",
      "debitReasonCode":null,
      "isoTxnId":435656,
      "sessionSrlNo":null,
      "settlementDate":null,
      "corporateId":3,
      "initBranchId":null,
      "debitReasonDesc":null,
      "txnResponse":null
   },
   "cipsTransactionDetail":{
      "id":12816806,
      "recDate":"2021-02-04T16:47:53.967+0000",
      "instructionId":"T13-12818780108-1",
      "endToEndId":"188759/314043524",
      "amount":1000,
      "chargeAmount":2.00,
      "chargeLiability":"CG",
      "purpose":null,
      "creditorAgent":"0201",
      "creditorBranch":"100",
      "creditorName":"REVENUE FCGO TSA",
      "creditorAccount":"1234567868",
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
      "rcreUserId":"KHALTI@999",
      "rcreTime":"2021-02-04T16:47:53.967+0000",
      "ipsBatchId":null,
      "creditStatus":"000",
      "reasonCode":null,
      "refId":"187145/314043524",
      "remarks":"Used for other purpose",
      "particulars":"DIPAK SHRESTHA",
      "merchantId":7,
      "appId":"MER-7-APP-4",
      "appTxnId":"2077-4155863",
      "reversalStatus":null,
      "isoTxnId":435656,
      "batchId":712532255,
      "orignBranchId":"100",
      "reasonDesc":null,
      "txnResponse":null
   }
}

```
Note: For the successful payment, please consider the debit (000) and credit status (000, DEFER,999) in above 
response message and handle the response code as per NPI specification document. 

