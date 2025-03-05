---
sidebar_position: 4
---
# 4. NEPALPAY QR Engine
The core engine of NEPALPAY QR is the main QR switch to handle routing of transactions between
Issuer/ Issuer Network and Acquirer/ Acquirer Network. Technical and business logics of QR payments
including validation, parsing of QR string, routing to acquirer or acquirer network, processing at
underlying core system for financial transaction, are handled by the core engine. It is integrated with NPI
for exchanging messages with the members. NEPALPAY QR Switch is mainly responsible for switching
payment transactions based on different EMVCo based QR Codes from multiple entities. The settlement
entity is done through underlying core system or payment switch, whereby the participating entities shall
adhere by the settlement compliance.

Refer to the API Specification section below and NPI Specification document for end-to-end
implementation of NEPALPAY QR based payments.

## 4.1. Acquiring Side
### 4.1.1. QR Code Generation
The acquiring entity will be creating QR codes based on NEPALPAY QR standard as described and
specified under QR Code Payload Data Objects. Merchant Information is explicitly mentioned in the
respective section.

### 4.1.2. Merchant Verification API
The acquiring entity will be opening an API for the confirmation/verification of merchants. This validation
will be further leveraged to the issuing entities as optional validation mechanism where, merchant
verification could be done in prior to the issuing side debit operation.

### 4.1.3. Payment Confirmation API [Payment Approval]
The acquiring entity will open an API for confirmation/ approval of any NEPALPAY QR based payments.
The detailed API specification for this is provided as a part of NPI, refersection II of this document for
details.

## 4.2. Issuing Side
### 4.2.1. Authorization Function [Merchant Verification API]
NPI has API for merchant verification, which issuing entities can call after scanning the NEPALPAY QR
code. This will be available as an optional mechanism supposed to be called before initiating the debit
transaction on the issuing side and before routing the transaction to NPI.

### 4.2.2. Transaction Routing
NPI has API for any off-us transactions for NEPALPAY QR based payments, corresponding to which
transaction and payment needs to be processed through NPI. The standard specification for this API is
available in section II of this document. For On-Us (Acquirer and Issuer being the same) transactions,
there are no mandatory requirement of routing the transactions to NPI, however, NCHL may provide
additional API for centralized reporting.

### 4.2.3. Settlement
Settlements between the entities will be handled by the underlying payment systems of NCHL depending
upon the use case, corresponding to which the settlement of QR transactions will be with the settlement
of such underlying system. And after the settlement and reconciliation, Acquirer or Acquirer network
shall implement crediting of its merchants as per its arrangement.