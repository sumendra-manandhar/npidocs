---
sidebar_position: 5
---


# 5. API Specifications
# 5. API Details & Specifications
   These APIs have been crafted to facilitate fast, secure, and transparent xBorder transactions. They
   possess the capability to seamlessly integrate with different banking channels and payment platforms
   of the participating members such transaction initiation and processing.
   All the necessary APIs to handle xBorder outward and inward transactions, will be exposed through
   existing National Payment Interface (NPI), under sections General Information, Payment Validation
   Payment Confirmation and Reporting. All the security features of NPI will be inherited by these APIs.
   Critical information shared over APIs will be encrypted using the pre-shared public keys and token
   signing will be performed in every message and same token will be shared in header.
   BFIs or PSPs that are enrolled as Payee shall expose and consume APIs for consent management,
   payment confirmation and to provide payee details as detailed under KYC section, for the purpose of
   AML/CFT verification.
   All the APIs are synchronous in nature and will be exposed via HTTPs using JSON input and output
   format.

## 5.1 API Protocol
All the APIs shall be initiated as an HTTPs call. Following is the URL formal for all APIs under this
unified interface:

**https://&lt;host&gt/npix/&lt;ver&gt/api/&lt;endpoint&gt**

**host** – API server address (Actual production server address will be provided to
members at the time of rollout and all API clients should ensure that actual URL is
configurable).

**npix**– static value denoting the root of all API URL paths under the National Payment
Interface.

**endpoint** – Name of the API URL endpoint.

**ver** – version of the API. Multiple versions of the same API may be available for
supporting gradual migration. As for this specification, the default version is "1".


## 5.2 Message Security, & Authenticity
All APIs exposed over NPI and to make them secure, following industry best practices have been
used:
1. Token Based Access Control
2. Digital Signature
3. Data Encryption

**Token Based Access Control:** This is as per the NPI standard, where client can make an API
   call to generate access and refresh token and based on such token can get access to all the APIs
   related to xBorder payments. Please, refer to NPI documentation for more about this token-based
   access control.

**Digital Signature:** In addition to securing APIs using token-based access control, cryptographic
   digital signature is also in use for an extra level of security. So, each API message is generated
   and validated as per below process:
1. The main body of request message is converted to JSON string.
   Page 15 of 362. The JSON string thus obtained is digitally hashed and signed and the final signature thus
   obtained is encoded using Base64 encoding.
2. Digital signature is now passed in http header in field named Message-Signature.
   **Note: Process to generate digital signature will be shared in different documents.**

## 5.3 List of APIs

| API Name       | Description                                                                                                                                   | To/From                    |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| List Txn Purpose | Used by BFIs to fetch list of transaction purpose                                                                                             | Members → NPI Ref: 6.2.3   |
| Charge & Limit  | Used by BFIs to fetch charge and limit profile for payer so that payer can know about incurred charge amount and remaining transaction limit. | Members → NPI Ref: 6.2.4   |
| Customer        | Used by BFIs to validate payer and payee customer before                                                                                      | Members → NPI              |
| Validation     | initiating financial transaction leg.                                                                                                         | Ref: 6.3.1                 |
| Payment         | Used by BFIs to perform financial transactions once customer validation is executed successfully.                                             | Members → NPI Ref: 6.3.2   |
| Txn Detail      | Used by BFIs for transaction reconciliation and view detail.                                                                                  | Members → NPI Ref: 6.3.3   |
| Customer-KYC    | Used by NPI to fetch customer KYC detail during inward xBorder payment.                                                                       | NPI → Members  Ref: 6.4.1. |
| Create-consent  | Used by BFIs to create customer consent to participate in xBorder payment.                                                                    | NPI → Members Ref: 6.4.2   |
| Update-consent  | Used by BFIs to update customer consent e.g., if customer wants to disable consent, then this API can be used.                                | Members → NPI Ref: 6.4.3   |

