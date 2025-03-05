---
sidebar_position: 3
---

# 3. Sample Use cases

Following are some of the sample use cases of NPI.

## 3.1. Integration with Government/Semi-Government Institutions for Payout Transactions

NPI will be integrated with the central system/gateway of government/semi-government institutions, 
which will initiate the payout transactions through one or more of its debtor banks. NPI will push such 
transactions (after validations) to connectIPS or NCHL-IPS. The transaction response will also be 
provided through NPI to the initiating system as a straight through processing. Real-time and On-Us 
transactions are processed through connectIPS, High value (as per the core systems limit) Off-Us 
transactions are processed through NCHL-IPS. Such transactions could be supplier/party payments, 
salary payments, pension, social security distributions, etc. 


## 3.2. Integration with BFI’s Alternate Channels

BFIs can integrate their alternative deliveries channels like internet banking, mobile banking, and 
corporate channels with NPI to enable their customers for initiating transactions to the underlying core 
systems and/or the available aggregated services. Depending on the type of the service, the payment 
transaction could be routed through connectIPS (real-time) or NCHL-IPS (non-real time). The regulatory 
channel specific limits will have to be handled by the alternate delivery channels of the BFIs. Such 
transactions could be for fund transfer or any other aggregated services.


During the integration of Banks and BFIs alternative delivery channels with NPI, it is advised to use the 
common name for fund transfer option in mobile/internet banking and corporate channel as below.


i. For connectIPS fund transfer: ***connect*** **IPS Real-Time** OR ***connect*** **IPS Fund Transfer.** 

ii. For NCHL fund transfer: **NCHL-IPS Non-Real Time** OR **NCHL-IPS Fund Transfer.**


## 3.3. Payment Service Providers (PSPs) and Payment System Operators (PSOs) 

NPI provides direct access to the core payment infrastructures and the underlying BFIs to the integrating 
PSPs and PSOs, who can then build their use cases related to Wallet2Account, Account2Wallet, 
Account2Account and Wallet2Wallet. They will also be able to extend the aggregated service APIs of 
the creditors enrolled within NCHL by various member BFIs. Some of the existing use cases include 
Cash-In, Cash-Out, Nostro accounts settlement, aggregated services and interoperability. PSP 
interoperability will enable wallet to wallet transactions between different PSPs.

## 3.4. Integration with Corporates/Institutions

NPI can be integrated with the ERP or Billing system of the corporates/ institutions like remittance 
companies, insurance companies, utility company, service providers, etc. for pushing payout 
transactions with debit from the designated bank(s). NPI can also be used for extending their collection 
transactions from other channels (of NCHL, BFIs and PSPs). 



