---
sidebar_position: 1
---


# 1. Introduction

## 1.1. Background

NEPALPAY QR is an implementing infrastructure of NepalQR, as per ‘NepalQR Standardization
Framework and Guidelines’ issued by NRB, to bring uniformity for interoperability, scalability and
security. It is operated by NCHL, as a clearing house, to establish QR scheme/network for its
participating members and inter-network interoperable QR transaction settlement for participating other
QR scheme operators. The underlying financial transactions are processed through one of the switches
of National Payment Switch (NPS). Issuers or Issuer Networks provide instruments to their customers
to read/ scan QR presented by Acquirer or Acquirer Network as creditor (beneficiary member or service
provider or merchant). Issuers and Acquirers are normally BFIs or PSP and can use their own system
or instruments or instrument provided by NCHL. 





The objective of NEPALPAY QR is to:

1. Establish QR scheme/ network as per NepalQR standard.

2. Establish interoperability for inter-network QR transactions in Nepal.

3. Provide interfacing to NEPALPAY QR for Issuers/Issuer Networks and Acquirers/Acquirer Networks.


The transactions initiated from an Issuer or Issuer Network will be routed by NPI, based on the business
process of the QR Core Engine, towards Acquirer or Acquirer Network and upon validation, the financial
transactions to debit and credit the settlement banks of the Issuer/ Issuer Network and credit Acquirer/
Acquirer Network respectively are processed by the switch, which will also process the Nostro settlement
of the BFIs. All the participants will access the system through National Payments Interface (NPI).

NEPALPAY QR code is based on NepalQR standard, which is as per Merchant Presented EMVCo
standard. The operations and compliance of NEPALPAY QR shall be as per its Operations Rules,
whereas this document has been prepared, as per Clause No. 5.2 as QR Code Standard of NEPALPAY
QR Operations Rules, to provide details of the technical specification of NEPALPAY QR code and API
specification for transaction processing. This specification should be read in conjunction with NepalQR
Standard and the EMV QRCPS. The notational conventions used in this specification are the same as
those used in EMV QRCPS.


Any modification in this specification document shall be made by NCHL as per the required technical
changes and for establishing specific use cases.


## 1.2. QR Code Use Cases

Merchant-Presented QR code enables a merchant presenting a request for payment to a customer
(Payer), who can then verify the associated information and make a payment to the merchant (Payee),
or reject the request for payment. It supports various payment types, including bill payments, online
payments and point-of-sale payments. QR codes are classified into Static and Dynamic QR codes. The
information encoded in a Static QR code is fixed and used for multiple transactions while a Dynamic QR
code contains additional transaction details such as payment amount and is used for specific
transactions.


## 1.2.1 Static QR

A typical use case of static QR code is payment to small merchants, which may display such static QR
code with merchant account information. Customer can then scan the QR code with a mobile application
to initiate a payment. The merchant’s information, such as shop name, is displayed on the mobile device
for verification. The customer will be prompted to enter a payment amount and then a confirmation.


Below figure shows a typical transaction flow of using static QR code to make merchant payment


![Example Image](/img/static-qr.jpg)
<p align="center" class="centered-caption"></p>


1. Merchant displays its static QR Code with merchant details.

2. Customer scans the QR Code using a mobile application and inputs the amount to initiate a
transaction.

3. Mobile application sends the transaction initiation request to the payment service operator, which
could be BFI or PSP.

4. The payment service operator processes the transaction and informs the merchant and customer of
the transaction outcome

## 1.2.2 Dynamic QR 
Dynamic QR codes are commonly used in online payments, delivery payments, bill payments as well as
payments at self-service kiosks. A typical use case of dynamic QR code is payment for an e-commerce
purchase. When a customer checkout at an online site, the merchant portal generates and presents a
dynamic QR code, embedded with the essential transaction details, for the customer to scan with a
mobile application to initiate the payment. The merchant’s information (such as Merchant Name) and
variable invoice information (such as payment amount) are displayed on the mobile device for
verification.


Below figure shows a typical transaction flow of using dynamic QR code to make payment in an online
merchant portal.

![Example Image](/img/dynamic-qr.jpg)
<p align="center" class="centered-caption"> </p>

1. Merchant generates and displays a dynamic QR Code with merchant and transaction information.

2. Customer scans the QR Code using a mobile application to initiate the transaction.

3. Mobile application sends the transaction initiation request to the payment service operator.

4. The payment service operator processes the transaction and informs the Merchant and the
Consumer of the transaction outcome.


## 1.3 Notational Conventions

Following are some of the abbreviations used in this specification, which are extracted from the EMV
QRCPS.

| Abbreviation | Description                            |
|--------------|----------------------------------------|
| ans          | Alphanumeric Special                   |
| C            | Conditional                            |
| CRC          | Cyclic Redundancy Check                |
| ID           | Identifier of the data object          |
| ISO          | International Standards Organization  |
| M            | Mandatory                              |
| N            | Numeric                                |
| O            | Optional                               |
| QR Code      | Quick Response Code                    |
| RFU          | Reserved for Future Use                |
| S            | String                                 |
| var          | Variable                               |



