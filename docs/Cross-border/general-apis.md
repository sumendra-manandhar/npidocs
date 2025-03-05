---
sidebar_position: 6
---

# 6. General APIs
## 6.1 General APIs
### 6.1.1 API to fetch list of Countries
This is the first API which is used to fetch a list of countries on-boarded on NPIx to have xBorder
outward remittance transactions.

| Method  | URL             | Authorization           | Header Params                                       |
|---------|-----------------|-------------------------|-----------------------------------------------------|
| **GET** | ***countries*** | *Bearer [access_token]* |                                                     |


**Success Response**

```json
{
  "responseCode": "000",
  "responseMessage": "Success",
  "responseData": [
    {
      "name": "India",
      "code": "IN",
      "flag": "https://cdn.nchl.com.np/flags/india.png"
    }
  ],
  "responseErrors": null
}
```


### 6.1.2 API to fetch list of Relationship
This API is used to fetch a list of relationship between the payer and payee users.


| Method  | URL                 | Authorization           | Header Params                                       |
|---------|---------------------|-------------------------|-----------------------------------------------------|
| **GET** | ***relationships*** | *Bearer [access_token]* |                                                     |

**Success Response**

```json
{
  "responseCode": "000",
  "responseMessage": "Success",
  "responseData": [
    {
      "name": "Brother",
      "code": "BRD01"
    },
    {
      "name": "Friend",
      "code": "FRD01"
    }
  ],
  "responseErrors": null
}
```


### 6.1.3 API to fetch list of Transaction Purpose
This API is used to fetch a list of transaction purposes.


| Method  | URL             | Authorization           | Header Params                                       |
|---------|-----------------|-------------------------|-----------------------------------------------------|
| **GET** | ***transaction-purpose*** | *Bearer [access_token]* |                                                     |

**Success Response**

```json
{
  "responseCode": "000",
  "responseMessage": "Success",
  "responseData": [
    {
      "name": "Bill Payment",
      "code": "BLP01"
    },
    {
      "name": "Education Fee",
      "code": "EDU01"
    }
  ],
  "responseErrors": null
}
```

### 6.1.4 API to fetch transaction Charge and Limit
This API is used to fetch data necessary to calculate charge and validate limit at client end, but
charge and limit calculated at client will be verified at Network level for final calculations.


| Method  | URL             | Authorization           | Header Params                                       |
|---------|-----------------|-------------------------|-----------------------------------------------------|
| **GET** | ***charge-limit*** | *Bearer [access_token]* |        Message-Signature                                             |

**Request**

```json
{
  "vpa": "XXXXXXXXXX",
  "service": "XR2P",
  "amount": 500.00,
  "instrument": "CIPS|MB|IBANK|WALLET",
  "purposeCode": "000",
  "mcc": "0000"
}
```

**Success Response**

```json
{
  "responseCode": "000",
  "responseMessage": "Success",
  "responseData": {
    "charge": {
      "chargeType": "SLAB|PERCENT|RANGE",
      "minTxnAmount": 100,
      "maxTxnAmount": 10000000.00,
      "chargeDetails": [
        {
          "maxChargeAmount": 2.00,
          "minChargeAmount": 2.00,
          "minAmount": 0.01,
          "maxAmount": 10000.00,
          "chargePercent": null //Applicable only for type: PERCENT
        },
        {
          "maxChargeAmount": 4.00,
          "minChargeAmount": 4.00,
          "minAmount": 10001.00,
          "maxAmount": 20000.00,
          "chargePercent": null
        },
        {
          "maxChargeAmount": 8.00,
          "minChargeAmount": 8.00,
          "minAmount": 20001.00,
          "maxAmount": 10000000.00,
          "chargePercent": null
        }
      ]
    },
    "limit": {
      "dailyAvailableLimitDetails": {
        "count": 5,
        "amount": 100000
      },
      "dailyConsumedLimitDetails": {
        "count": 2,
        "amount": 50000
      },
      "monthlyAvailableLimitDetails": {
        "count": 20,
        "amount": 1000000
      },
      "monthlyConsumedLimitDetails": {
        "count": 13,
        "amount": 550000
      },
      "limitExceeded": false
    }
  },
  "responseErrors": null
}
```