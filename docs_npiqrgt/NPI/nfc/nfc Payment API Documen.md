---
sidebar_position: 1
---

# 1. NFC Payment API Documen
## 1.1 Payment API

Once POS receives the NFC tag along with API provided from NepalPay Tap, POS systems 
have to make payment api calls. Payment API is currently hosted in NPI (National Payment 
Interface), and secured using an o-auth based authentication system.
Hence to access to NFC payment API clients have to first authenticate to NPI and make 
payment based on access token received during authentication.


## 1.2. API details are as follows:
## Create Payment API

**Request:**

**Method POST :{base_url}/api/v1/nfc/create payment** 

```json
{
 "acquirerId": "00010008",
 "amount": "2.5",
 "discountFee": "0.0",
 "instructionId": "WPIFIUEY1EKZOQXTYG9L",
 "instrument": "NFC_POS",
 "localTransactionDateTime": "20230131093648415", 
 "merchantBillNo": "BNO2023031483",
 "merchantCategoryCode": "5992",
 "merchantCity": "RASUWAGADHI, RASUWA, BAGMATI PROVINCE",
 "merchantName": "CAFE CAVADO",
 "merchantPan": "100200077003001",
 "merchantStatus": "ACTIVE",
 "narration": "Bill Payment",
 "nfcCode": 
"OeJFCZW71AuAQPOWVQGrNPm3WcgeCGSIRfbEHy1VdJDLTTOIHu",
 "payerPanId": "9851239791",
 "storeLevel": "RASUWAGADHI, RASUWA, BAGMATI PROVINCE",
 "terminal": "0200304G",
 "token": 
"C/qpxNGEmHQdc5ftLOelT7aEgFbB/tEkAo1f4AKe35pPI1AH/+e1rjbwtQ7g7
Rf+Zn8rpDtUcw/tT0SICQCOyWvgmM0jlWWcdoScbyQ/EsFEwSWWH0hULJ
uojgNVdtckwj36aXjlV6+wx7qHZaj+ZOFIDQRRsnj/5QfvDSaAnFA=",
 "transactionFee": "0.0"
}'
```
```json
Token String :: instructionId +"," + nfcCode +","+ acquirerId +","+ amount + "," merchantBillNo + ",+localTransactionDateTime 
+","+merchantCategoryCode+","+userId
```
<table border="1">
        <tr>
            <th>S.N</th>
            <th>Field</th>
            <th>Description</th>
            <th>Remarks</th>
        </tr>
        <tr>
            <td>1</td>
            <td>localTransactionDateTime</td>
            <td>Transaction date time</td>
            <td>YYYYMMDDHHmmssSSS</td>
        </tr>
        <tr>
            <td>2</td>
            <td>payerPanId</td>
            <td>Mobile number read from NFC request</td>
            <td></td>
        </tr>
    </table>


**Response:**
```json
{
 "responseCode": "000",
 "responseMessage": "SUCCESS",
 "nfcTxnId": "2302090000005018JSD",
 "instructionId": "WPIFRUEY1EKZOQXTYG9J",
 "npiBatchId": 712329522,
 "npiTransactionId": 12656518,
 "validationTraceId": "2302090000013098CKM",
 "acquirerId": "00010008",
 "merchantPan": null,
 "amount": 2.5,
 "interchangeFee": 0,
 "transactionFee": 0,
 "currencyCode": "NPR",
 "merchantBillNo": "BNO2023031483",
 "payerName": "Test User",
 "payerMobileNumber": "+977-98********",
 "payerEmailAddress": "test@gmail.com",
 "issuerId": "00000000",
 "narration": "Bill Payment",
 "acquirerCountryCode": "977",
 "merchantName": "CAFE CAVADO",
 "merchantCity": null,
 "localTransactionDateTime": "2023-02-09T09:06:45.943+0000",
 "merchantTxnRef": "WPIFRUEY1EKZOQXTYG9J",
 "instrument": "NFC_POS",
 "terminal": null,
 "encKeySerial": null,
 "network": "NFC",
 "token": null,
 "sessionSrlNo": "3173",
 "creditStatus": "DEFER",
 "debitStatus": "000",
 "debitDescription": "SUCCESS",
 "creditDescription": null,
 "rcreTime": "2023-02-09T09:06:45.956+0000"
}
```

## API to Void/Cancel Transaction

**Request:**

**Method : POST {base_url}/nQR/v1/cancel**

```json
{
 "issuerId": "00000000",
 "refundType": "FULL",
 "amount": 100.00,
 "instructionId": "REF-1",
 "refundReasonCode": "100",
 "refundReasonMessage": "test",
 "token": 
"rhU7RUYf1kMrB34ehHfd/qe+nDgV7YiVEQlRfuVvCMtyu1Zr41muXVisi6DQ+
DTQ7L4/AeTs0TGU2AUgDv4IAYHlJvH7i7S18BR9FmgAj3f3e+nwP+CxrINWr
yZXYK75ntXaRSX5+ERbmp4rmz3cJCLrBT+D4JnEvd/fEZXYovg=",
 "network": "NFC",
 "orgnNfcTxnId": "2302090000005041VJE"
}
```

```json
Token String: orgnNfcTxnId + "," + issuerId + "," + amount + "," + refundReasonCode + "," + instructionId
```
**Response:**
```json
{
 "orgnNQrTxnId": null,
 "issuerId": "00000000",
 "refundType": "FULL",
 "amount": 2.50,
 "transactionFee": 0.00,
 "instructionId": "REF-1",
 "refundReasonCode": "100",
 "refundReasonMessage": "test",
 "refundCancellationFlg": "C",
 "refundNQrTxnId": null,
 "responseCode": "000",
 "responseMessage": "SUCCESS",
 "token": 
"o8oRrBDIJPiivUA2Qniorf2c+KrmoWXaMqhoDrG8Qc1dy7Sa91xgZ0ZDHDp
nvVSTQIDIAMeaxE1fRN8pHm3WC/71I4RyQcldcG0CSdcnzuscUzGFcD+0V
YbyZRCwVzhgP3eDRIoV9L2feJMz5kD8bvc1j3DyDchnRsMmmM4PPRY="
}
```

## API to fetch transactional Report

**Method POST: {base_url}/api/v1/nfc/report** 

```json
{
 "sessionSrlNo": null,
 "instructionId": null,
 "acquirerId": "00001701",
 "creditorId": null,
 "issuerId": "00000000",
 "network": "NFC",
 "validationTraceId": null,
 "nfcTxnId": null
}
```

**Response:**
```json 
{
 "timestamp": "2023-01-24T04:18:08.972+0000",
 "responseCode": "200",
 "responseStatus": "SUCCESS",
 "responseMessage": null,
 "responseBody": [
 {
 "sessionSrlNo": "null",
 "recDate": "2023-01-24",
 "instructionId": "val-97876456414",
 "nQrTxnId": null,
 "acquirerId": "00001701",
 "issuerId": "00000000",
 "network": "NFC",
 "issuerNetwork": "NFC",
 "amount": 1000.00,
 "interchangeFee": 0,
 "transactionFee": 0.00,
 "debitStatus": "000",
 "creditStatus": null,
 "payerName": "Test User",
 "tranType": "PMT",
 "payerMobileNumber": "+977-98********",
 "merchantName": "City Tech",
 "merchantTxnRef": "val-97876456414",
 "terminal": null,
 "merchantBillNo": "123456",
 "instrument": null,
 "nfcTxnId": "2301230000004481EUL"
 }
 ]
}
```
## API to fetch Settled Session

**Method POST :{base_url}/api/v1/nfc/settledsession**

```json
{
 "sessionSrlNo": "3057",
 "dateSettled": null
}
```
**Response**
```json
{
 "timestamp": "2023-01-24T04:21:41.798+0000",
 "responseCode": "200",
 "responseStatus": "SUCCESS",
 "responseMessage": null,
 "responseBody": [
 {
 "sessionSrlNo": 3057,
 "status": "ACTIVE",
 "settlementDate": null,
 "dateSettled": null
 }
 ]
}
```
## API to fetch Settled Sessions

**Method POST ={base_url}/api/v1/nfc/settledsessions**

```json
{
 "sessionSrlNo": "3028",
 "settlementDate": null,
 "acquirerId": "00001701",
 "issuerId": "00000000",
 "dateSettled":"2023-01-19"
}
```

**Response ::**
```json
{
 "timestamp": "2023-01-24T04:25:09.278+0000",
 "responseCode": "200",
 "responseStatus": "SUCCESS",
 "responseMessage": null,
 "responseBody": []
}
```

