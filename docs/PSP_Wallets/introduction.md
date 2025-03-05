---
sidebar_position: 1
---
# 1.  Introduction

## 1.1	BACKGROUND
As per the mandate from Nepal Rastra Bank (NRB), NCHL has established the infrastructure for interoperability of card-based transactions, implementation of domestic card scheme for Nepal, and  scale-up of the existing retail payment systems/platforms to enable non-card-based interoperability as part of  National Payment Switch (NPS) project. The main objective of the NPS is for enabling payment eco-system for major players in the card and retail payments market, positioning Nepal as a financial hub for both domestic and international payments, leveraging market synergy.

The PSP/Wallet interoperability is the one of instrument of Retail Payment switch, a part of National Payment Switch (NPS), that facilitates for enabling multiple use cases such as wallet-to-wallet transfer, account to wallet load, wallet to account transfer, and receiving remittance &  social security to the wallet users via National Payment Interface (NPI).Additionally, as per the latest circular from NRB, PSPs are also eligible to participate in cross-border payments through the National Payment Switch.
As the operator of National Payment Switch , NCHL is responsible for creating a healthy, robust and scalable payment eco-system adhering to all the regulatory compliance with the enforcement of stringent security measures. In this context, it is required to establish a standard and uniform integration approach with all member PSPs/wallet to ensure end to visibility of payment transaction with the implementation of comprehensive know you customer (KYC) mechanism.

## 1.2	PURPOSE OF THE DOCUMENT
This document has been prepared and issued as a standard API specification for PSP/Wallet Interoperability for enabling  the various use cases  within the NPI. In addition, it has been developed to facilitate PSPs for Cross-Border payments, standardize and streamline the customer validation process, ensuring regulatory compliance, enhancing security, and improving operational efficiency across all service providers.
The intended audience for this document comprises mainly technical resources or partners of the BFIs, members of NCHL, and service providers with technical expertise in system setup and development, ensuring end-to-end visibility.

## 1.3	KEY OBJECTIVES
The main objectives of  this technical specification documents are as follows: 
1.	Establish the standard and uniform integration mechanism with all member PSPs.
2.	To meet the KYC and compliance requirement for both domestic and Cross-Border payments.
3.	To manage and mitigate risks associated with fraud and non-compliance.
4.	To facilitate interoperability across different wallets and service providers.
5.	To support scalability and future expansion of services.
 
## 1.4	USER VALIDATION API
This API is used to validate the wallet user prior to the payment transaction based on the details provided in the validation request. PSPs are required develop the validation API as per the below specification and provide all details as specified in the response requirements.

<table border="1">
  <thead>
    <tr>
      <th>Method</th>
      <th>End-Points</th>
      <th>Authorization</th>
      <th>Header Parameter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td> (base url)+ /validate-user</td>
      <td>Authorization: Basic</td>
      <td>X-Signature</td>
    </tr>
  </tbody>
</table>


Request Parameters

<table border="1">
  <thead>
    <tr>
      <th>Field</th>
      <th>Data Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>userIdentifier</td>
      <td>String</td>
      <td>M</td>
      <td>Username, phone, or email as per the wallet nature.</td>
    </tr>
    <tr>
      <td>amount</td>
      <td>Numeric</td>
      <td>M</td>
      <td>Amount to be loaded (Decimal value with exactly two positions after the decimal point).</td>
    </tr>
    <tr>
      <td>Channel</td>
      <td>String</td>
      <td>M</td>
      <td>Source of request: 
        <ul>
          <li>CIPS -&gt; connectIPS</li>
          <li>MB -&gt; mobile Banking</li>
          <li>REMIT -&gt; Remittance channel</li>
          <li>CROSS-BORDER -&gt; for cross border payment</li>
          <li>WALLET -&gt; Request From wallet</li>
          <li>OTHERS -&gt; others if any</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

   
**Response Parameter**


<table border="1">
  <thead>
    <tr>
      <th>Field</th>
      <th>Data Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>responseCode</td>
      <td>String</td>
      <td>M</td>
      <td>https: 200 OK
      000 for Success; else failed</td>
    </tr>
    <tr>
      <td>responseMessage</td>
      <td>String</td>
      <td>M</td>
      <td>Response message description</td>
    </tr>
    <tr>
      <td>validationTraceId</td>
      <td>String</td>
      <td>M</td>
      <td>Unique ID generated from the wallet to trace the transaction</td>
    </tr>
    <tr>
      <td>kycStatus</td>
      <td>String</td>
      <td>M</td>
      <td>KYC Status of customer
      VERIFIED | UNVERIFIED</td>
    </tr>
    <tr>
      <td>accountStatus</td>
      <td>String</td>
      <td>M</td>
      <td>Account status: ACTIVE, BLOCKED, SUSPENDED</td>
    </tr>
    <tr>
      <td>allowedLimit</td>
      <td>String</td>
      <td>M</td>
      <td>Pending Allowed limits for load wallet</td>
    </tr>
    <tr>
      <td>transactionDate</td>
      <td>String</td>
      <td>M</td>
      <td>Transaction date in format: YYYY-MM-DD HH:MM:SS.SSS</td>
    </tr>
    <tr>
      <td>vpaAddress</td>
      <td>String</td>
      <td>C</td>
      <td>Linked Bank VPA ID for cross-border payment</td>
    </tr>
    <tr>
      <td>userIdentifier1</td>
      <td>String</td>
      <td>M</td>
      <td>Username, phone, or email</td>
    </tr>
    <tr>
      <td>userIdentifier2</td>
      <td>String</td>
      <td>O</td>
      <td>Wallet VPA</td>
    </tr>
    <tr>
      <td>customerFullName</td>
      <td>String</td>
      <td>M</td>
      <td>Customer full name</td>
    </tr>
    <tr>
      <td>userType</td>
      <td>String</td>
      <td>M</td>
      <td>NORMAL | AGENT</td>
    </tr>
    <tr>
      <td>responseErrors</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>fieldName</td>
      <td>String</td>
      <td>C</td>
      <td>Error code</td>
    </tr>
    <tr>
      <td>fieldDescription</td>
      <td>String</td>
      <td>C</td>
      <td>Error description details for the request</td>
    </tr>
  </tbody>
</table>




**Sample Request**
```json
{
    "userIdentifier":"9851114610",
    "amount":5000.00,
    "channel":"CIPS| MOB| REMIT|CROSS-BORDER| WALLET | OTHERS"
}
``` 

**Sample Response - Success**
 ```json
{
    "responseCode":"000",
    "responseMessage":"SUCCESS",
    "validationTraceId":"1234567890",
    "kycStatus":"VERIFIED|UNVERIFIED",
    "accountStatus":"ACTIVE|BLOCKED|SUSPENDED",
    "allowedTxnLimit":1500.00, 
    "allowedTxnCount":10,
    "transactionDate":"yyyy-MM-dd HH:mm:ss.SSS",
    "partnerVPA":"9811111111@NIMB",
    "userInfo": {
        "userIdentifier1":"9813979589",
        "userIdentifier2":"9813979589@NIMB",
        "customerFullName":"Bishal Panthi",
        "userType":"NORMAL|AGENT"
    },
    "responseErrors":null
}
```

**userInfo:** Map<String, String> map;

**userIdentifier:** Customer identifier like username

**customerFullName:** Full name of customer

**userType:** Type of user

Based on regulatory requirement further details could be added in future and corresponding keys will be provided separately.

**Sample Response - Failed**
```json
{
    "responseCode":"T001",
    "responseMessage":"FAILED",
    "message":"Error Message",
    "responseErrors": [
{
       "fieldName":"1",
       "fieldDescription":"Error message"
    }
]
}
```
**1.5	PAYMENT CONFIRMATION API**
This API is used to post the payment confirmation transaction to the respective PSP/Wallet after the necessary the transaction is processing in Retail Payment Switch (RPS). PSPs are required to develop an API for payment confirmation as per the below specification. 


<table border="1">
  <thead>
    <tr>
      <th>Method</th>
      <th>End-Points</th>
      <th>Authorization</th>
      <th>Header Parameter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>base url + /payment-request</td>
      <td>Authorization: Basic</td>
      <td>X-Signature</td>
    </tr>
  </tbody>
</table>



**Request Parameters:**


<table border=" 1">
  <thead>
    <tr>
      <th>Field</th>
      <th>Data Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>userIdentifier</td>
      <td>String</td>
      <td>M</td>
      <td>Username, phone, or email as per the wallet nature.</td>
    </tr>
    <tr>
      <td>amount</td>
      <td>Numeric</td>
      <td>M</td>
      <td>Amount to be loaded (Decimal value with exactly two positions after the decimal point).</td>
    </tr>
    <tr>
      <td>channel</td>
      <td>String</td>
      <td>M</td>
      <td>Source of request:
        <ul>
          <li>CIPS -&gt; connectIPS</li>
          <li>MB -&gt; mobile Banking</li>
          <li>REMIT -&gt; Remittance channel</li>
          <li>CROSS-BORDER -&gt; cross border payment</li>
          <li>WALLET -&gt; Request From wallet</li>
          <li>OTHERS -&gt; others if any</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>purpose</td>
      <td>String</td>
      <td>M</td>
      <td>
        <ul>
          <li>LOAD -&gt; Fund transfer to wallet</li>
          <li>CAMPAIGN -&gt; Campaign related</li>
          <li>REFUND -&gt; Refund related</li>
          <li>R2P -&gt; Request To Pay</li>
          <li>OTHERS -&gt; Others if any</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>transactionDate</td>
      <td>Date</td>
      <td>M</td>
      <td>Transaction Date and time</td>
    </tr>
    <tr>
      <td>transactionId</td>
      <td>String</td>
      <td>M</td>
      <td>RIPS transaction Id</td>
    </tr>
    <tr>
      <td>validationTraceId</td>
      <td>String</td>
      <td>M</td>
      <td>Validation trace Id returned at customer validation</td>
    </tr>
    <tr>
      <td>userType</td>
      <td>String</td>
      <td>M</td>
      <td>NORMAL | AGENT</td>
    </tr>
    <tr>
      <td>tranRemarks</td>
      <td>String</td>
      <td>O</td>
      <td>The purpose of the transaction</td>
    </tr>
  </tbody>
</table>



**Response Parameters**


<table border="1">
  <thead>
    <tr>
      <th>Field</th>
      <th>Data Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>responseCode</td>
      <td>String</td>
      <td>M</td>
      <td>
        000 for SUCCESS;
        ENTR for PROCESSING;
        Else FAILED
      </td>
    </tr>
    <tr>
      <td>responseMessage</td>
      <td>String</td>
      <td>M</td>
      <td>Response message description</td>
    </tr>
    <tr>
      <td>validationTraceId</td>
      <td>String</td>
      <td>M</td>
      <td>Unique ID generated from the wallet to trace the transaction</td>
    </tr>
    <tr>
      <td>addenda1</td>
      <td>String</td>
      <td>O</td>
      <td>Any value to be displayed to the user through the channel</td>
    </tr>
    <tr>
      <td>Message</td>
      <td>String</td>
      <td>O</td>
      <td>Payment confirmation message</td>
    </tr>
    <tr>
      <td>transactionId</td>
      <td>String</td>
      <td>M</td>
      <td>RIPS transaction Id</td>
    </tr>
    <tr>
      <td>responseErrors</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>fieldName</td>
      <td>String</td>
      <td>C</td>
      <td>Error code</td>
    </tr>
    <tr>
      <td>fieldDescription</td>
      <td>String</td>
      <td>C</td>
      <td>Error description details for the payment request</td>
    </tr>
  </tbody>
</table>



**Sample Request**
```json
{
  "validationTraceId":"1234567890",
  "amount":5000.00,
  "userIdentifier":"9851XXXXXX",
  "channel":"CIPS",
  "purpose":"LOAD",
  "transactionDate":"yyyy-MM-dd HH:mm:ss.SSS",
  "userType":"NORMAL|AGENT",
  "transactionId":12457848,
  "tranRemarks":"Bill Payment"
}
```

**Sample Response - Success**
```json
{
  "responseCode":"000",
  "responseMessage":"SUCCESS",
  "message":"Payment Posting successful",
  "validationTraceId":"1234567890",
  "addenda1":"FreeText",
  "transactionId":12457848,
  "responseErrors":null
}
```
**Sample Response - Failed** 

```json
{
    "responseCode":"T001",
    "responseMessage":"FAILED",
    "message":"Error Message",
    "responseErrors": [
{
       "fieldName":"1",
       "fieldDescription":"Error message"
    }
]
}
```




