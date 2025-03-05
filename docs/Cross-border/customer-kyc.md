---
sidebar_position: 8
---
# 8. Customer KYC
## 8.1 Customer KYC and Consent API from NPI to Payee Bank/PSP
### 8.1.1 Customer KYC API from NPI to Payee Bank/PSP
This API is used mainly for xBorder inward transaction, where participant enrolled as xBorder payment
payer and payee agent, it should have to expose API to provide customer KYC and customer consent
against customer’s unique ID VPA (Virtual Payment Address). Here single API is used for providing
customer KYC and consent. If request params have field value isConsnetRequired as true than payee
agent has to notify its end customer for providing xBorder consent.
KYC API is to be secured using the Basic Auth

| Method   | URL             | Authorization           | Header Params           |
|----------|-----------------|-------------------------|-------------------------|
| **POST** | ***customer-kyc*** | *Bearer [access_token]* | ***Basic-Auth*** |

**Request**

```json
{
  "vpaId": "anand12@nica",
  "consentRequired": true,
  "consentRequest": {
    "consentUniqueId": "",
    "payerName": "Jhon Jhon",
    "payerVPA": "jhon12@icici",
    "payeeVPA": "anand12@nica",
    "payeeName": "Anand Marasini",
    "payerMobileNumber": "+911235633632"
  }
}
```

**Success Response**

```json
{
  "responseCode": "000",
  "responseMessage": "Success",
  "responseData": {
    "fullName": "Anand Marasini",
    "accountNumber": "0012345678963",
    "documentNumber": "1111/45253",
    "documentType": "CTZN|PASSPORT|DRIVING LICENCE|NATIONAL ID|PAN|OTHERS",
    "issuedDate": "2040-03-04",
    "issuedPlace": "Kathmandu",
    "address": {
      "permanentAddress": "Gulmidarbar, 03, Gulmi",
      "temporaryAddress": "Mahalaxmi, 04, Lalitpur"
    },
    "accountType": "SAVING",
    "bankCode": "2501",
    "type": "PERSON|ORGANIZATION",
    "riskScore": ""
  },
  "responseErrors": null
}
```


### 8.1.2 API to create Customer Consent from Bank to NPI
This API is used to create consent for xBorder payment from Bank/PSP. So, customer could enable
his/her account before getting any xBorder request or after getting xBorder requesting using this API.

| Method   | URL             | Authorization           | Header Params           |
|----------|-----------------|-------------------------|-------------------------|
| **POST** | ***create-consent*** | *Bearer [access_token]* | ***Basic-Auth*** |


**Request**

```json
{
  "vpaId": "anand@zyz",
  "direction": "INWARD|OUTWARD|BOTH",
  "instrument": "MB|IBANK|CIPS",
  "consent": "APPROVED",
  "uniqueTransactingId": "ACC_NO|WALLET_ID",
  "fullName": "Anand Marasini",
  "documentNumber": "39-12-4556336",
  "documentType": " CTZN|PASSPORT|DRIVING_LICENCE|NID|PAN ",
  "issuedDate": "2040-03-04",
  "issuedPlace": "Kathmandu",
  "bankCode": "1233"
}
```

**Success Response**

```json
{
  "responseCode": "000",
  "responseMessage": "Success",
  "responseData": {
    "vpaId": "anand@zyz",
    "direction": "INWARD|OUTWARD|BOTH",
    "instrument": "MB|IBANK|CIPS",
    "consent": "APPROVED",
    "uniqueTransactingId": "ACC_NO|WALLET_ID",
    "fullName": "Anand Marasini",
    "documentNumber": "39-12-4556336",
    "documentType": "PAN|NID",
    "bankCode": "1233"
  },
  "responseErrors": null
}
```

### 8.1.3 API to Revoke Consent from Bank to NPI
This API is used for enable/disable customer consent.

| Method   | URL             | Authorization           | Header Params           |
|----------|-----------------|-------------------------|-------------------------|
| **POST** | ***update-consent*** | *Bearer [access_token]* | ***Basic-Auth*** |


**Request**

```json
{
  "consent": "DECLINED",
  "vpaId": "anand@xyz",
  "uniqueTransactingId": "ACCOUNT|WALLET_ID"
}
```

**Success Response**

```json
{
  "responseCode": "000",
  "responseMessage": "Success",
  "responseData": {
    "consent": "DECLINED",
    "vpaId": "anand@xyz",
    "uniqueTransactingId": "ACCOUNT|WALLET_ID"
  },
  "responseErrors": null
}
```


## 8.2 Reporting and Management Console
Bank central provided by NCHL will acts as the reporting and management console for xBorder
transactions and will be used by the participating BFIs.
