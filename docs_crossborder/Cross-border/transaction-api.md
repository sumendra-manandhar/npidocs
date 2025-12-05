---
sidebar_position: 7
---
# 7. Transaction APIs
## 7.1 Transaction APIs
### 7.1.1 API for Customer Validation from Payer to NPI
This API is used to validate customer, first data is validated at NPI and forward to NPCI’s iUPI for
payee validation. This API acts as the non-financial API of xBorder transaction.


| Method   | URL             | Authorization           | Header Params           |
|----------|-----------------|-------------------------|-------------------------|
| **POST** | ***validate-customer*** | *Bearer [access_token]* | ***Message-Signature*** |

**Request**

```json
{
  "participantCode": "NICA001",
  "participantService": "VAL_CUST",
  "requestUniqueId": "NICA001569856362636363636363636363636",
  "amount": 100000.0,
  "purpose": "P1301",
  "remarks": " fund transfer ",
  "currency": "NPR|INR",
  "payerDetail": {
    "name": "Sudan Shrestha",
    "type": "PERSON",
    "accountType": "VPA|ACCOUNT",
    "accountDetail": {
      "vpa": "9800000000@cips",
      "accountNumber": "1234567896325",
      "bankCode": "2501"
    },
    "identificationType": "CTZN|PASSPORT|DRIVING_LICENCE",
    "identificationNumber": "1236630",
    "address": {
      "country": "Nepal",
      "city": "Kathmandu",
      "geoCode": "22 22 22 22",
      "location": "Kamaladi"
    },
    "deviceInformation": {
      "mobile": "9849428178",
      "geoCode": "22 23 22 23",
      "location": "",
      "ip": "192.168.2.3",
      "os": "Android",
      "teleCom": "NTC"
    }
  },
  "payeeDetail": {
    "name": "Piyush Yadav",
    "type": "PERSON|MTO",
    "accountType": "VPA|ACCOUNT",
    "accountDetail": {
      "vpa": "piyush@icici",
      "accountNumber": "",
      "bankCode": ""
    },
    "payeeRelationShip": "Brother",
    "mobileNumber": "+91-1236547899",
    "email": "test@gmail.com"
  }
}
```

**Success Response**

```json
{
  "responseCode": "000",
  "responseMessage": "Success",
  "responseData": {
    "orgRequestUniqueId": "NICA001569856362636363636363636363636",
    "validationTraceId": "Txn Id from nchl to used to validate txn "
    "amount": 100000.0,
    "chargeAmount": 100.0,
    "conversionRate": 1.60
    "purpose": "utility payment",
    "remarks": " fund transfer ",
    "currency": "NPR|INR",
    "payerDetail": {
      "name": "Sudan Shrestha",
      "type": "PERSON",
      "accountType": "VPA|ACCOUNT",
      "accountDetail": {
        "vpa": "9800000000@cips",
        "accountNumber": "1234567896325",
        "bankCode": "2501"
      },
      "identificationType": "CTZN|PASSPORT|DRIVING_LICENCE",
      "identificationNumber": "1236630",
      "address": {
        "country": "Nepal",
        "city": "Kathmandu",
        "geoCode": "22 22 22 22",
        "location": "Kamaladi"
      }
    },
    "payeeDetail": {
      "name": "Piyush Yadav",
      "type": "PERSON|MTO",
      "accountType": "VPA|ACCOUNT",
      "accountDetail": {
        "vpa": "piyush@icici",
        "accountNumber": "4564564******",
        "bankCode": "******************"
      },
      "payeeRelationShip": "Brother",
      "mobileNumber": "+91-1236547899",
      "email": "test@gmail.com"
    }
  },
  "responseErrors": null
}
```

### 7.1.1 API for Payment Processing from Payer to NPI
Once customer verification is done, payer can initiate payment request. This is the financial part of
xBorder payment, where actual transaction happens. Payer BFI has to pass validation id generated
in customer validation API as original transaction Id during payment API.

| Method   | URL           | Authorization           | Header Params           |
|----------|---------------|-------------------------|-------------------------|
| **POST** | ***payment*** | *Bearer [access_token]* | ***Message-Signature*** |

**Request**

```json
{
  "clientCode": "NICA001",
  "clientService": "REQ_PAY",
  "orgRequestUniqueId": "NICA001569856362636363636363636363636",
  "validationTraceId": "id from nchl side",
  "amount": 1000.0
}
```

**Success Response**

```json
{
  "responseCode": "000",
  "responseMessage": "Success",
  "responseData": {
    "orgRequestUniqueId": "NICA001569856362636363636363636363636",
    "validationTraceId": "Txn Id from nchl to used to validate txn ",
    "amount": 100000.0,
    "chargeAmount": 100.0,
    "conversionRate": 1.60,
    "purpose": "utility payment",
    "remarks": " fund transfer ",
    "currency": "NPR|INR",
    "debitStatus": "000",
    "creditStatus": "000",
    "customerValidatedDate": "2023-07-07 12:10:1111",
    "transactionRequestDate": "2023-07-07 12:12:1111",
    "transactionDate": "2023-07-07 12:13:1111",
    "payerDetail": {
      "name": "Sudhan Shrestha",
      "type": "PERSON",
      "accountDetail": {
        "vpa": "9800000000@cips",
        "accountNumber": "1234567896325",
        "bankCode": "2501"
      }
    },
    "payeeDetail": {
      "name": "Piyush Yadav",
      "type": "PERSON|MTO",
      "accountType": "VPA|ACCOUNT",
      "accountDetail": {
        "vpa": "piyush@icici",
        "accountNumber": "4564564******",
        "bankCode": "******************"
      },
      "payeeRelationShip": "Brother",
      "mobileNumber": "+91-1236547899",
      "email": "test@gmail.com"
    }
  },
  "responseErrors": null
}
```

### 7.1.1 API for Transaction Reconciliation from Payer to NPI
This API is used to fetch transaction status which could be very useful for reconciliation purpose.


| Method   | URL             | Authorization           | Header Params           |
|----------|-----------------|-------------------------|-------------------------|
| **POST** | ***transaction-detail*** | *Bearer [access_token]* | ***Message-Signature*** |

**Request**

```json
{
  "clientCode": "NICA001",
  "clientService": "REQ_PAY",
  "orgRequestUniqueId": "NICA001569856362636363636363636363636",
  "validationTraceId": "id from nchl side",
  "amount": 1000.0
}
```

**Success Response**

```json
{
  "responseCode": "000",
  "responseMessage": "Success",
  "responseData": {
    "orgRequestUniqueId": "NICA001569856362636363636363636363636",
    "validationTraceId": "Txn Id from nchl to used to validate txn ",
    "amount": 100000.0,
    "chargeAmount": 100.0,
    "conversionRate": 1.60,
    "purpose": "utility payment",
    "remarks": " fund transfer ",
    "currency": "NPR|INR",
    "debitStatus": "000",
    "creditStatus": "000",
    "transactionRequestDate": "2023-07-07 12:12:1111",
    "transactionDate": "2023-07-07 12:13:1111",
    "payerDetail": {
      "name": "Sudan Shrestha",
      "type": "PERSON",
      "accountDetail": {
        "vpa": "9800000000@cips",
        "accountNumber": "1234567896325",
        "bankCode": "2501"
      }
    },
    "payeeDetail": {
      "name": "Piyush Yadav",
      "type": "PERSON|MTO",
      "accountType": "VPA|ACCOUNT",
      "accountDetail": {
        "vpa": "piyush@icici",
        "accountNumber": "4564564******",
        "bankCode": "******************"
      },
      "payeeRelationShip": "Brother",
      "mobileNumber": "+91-1236547899",
      "email": "test@gmail.com"
    }
  },
  "responseErrors": null
}
```