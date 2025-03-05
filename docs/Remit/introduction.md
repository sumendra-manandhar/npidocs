---
sidebar_position: 1
---
# 1.  Introduction

## 1.1	BACKGROUND
The National Payment Interface (NPI) is a central rail for the digital payment ecosystem provides a single channel/interface for interconnecting with core payment infrastructures and ensuring seamless interoperability. Through an open API platform, it supports the routing of both financial and non-financial transactions for BFIs (Banks and Financial Institutions) and service providers. This interconnection enables participating members to integrate effortlessly with the real-time payment systems (RPS) for instant payments and with NCHL-IPS for deferred credit payments, offering access to all instruments, services, and use cases. 
The platform offers standardized integration for overlaying services from any channel or system of BFIs (mobile, internet, corporate), internal systems of non-bank institutions, PSPs/PSOs, government and semi-government institutions, remittance companies and large corporates. Consolidated APIs from multiple payment systems, hosted by NCHL or other institutions, are built on an open API platform concept. These are governed by the NPS NPI Operating Rules, with a primary focus on enabling new instruments, use cases, and scaling. 
 
 ## 1.2  Purpose of the document 
The purpose of this document is to define standard API specifications for processing remittance-related transactions seamlessly through the National Payment Interface(NPI) platform. Remittance transactions require a high degree of transparency regarding the sender, receiver, and transaction details to ensure an accurate understanding of the source, purpose, and nature of the payment, while also meeting regulatory compliance requirements. In addition, the API supports detailed reporting, ensuring that all necessary transaction data can be easily extracted by the respective member BFIs and provided to regulators for reporting purposes.

For the ease of implementation, all the request and response message including the error handling have been listed in the document. The business rules and validations will be as per the guidelines, rule books and/or operating procedures of the underlying core systems of NCHL-IPS, connectIPS and respective system. Hence it is also recommended to refer to such documents as well. The intended audience for this document comprises of mainly technical resources or partners of the BFIs, Members of NCHL, NPI members, Remittance companies and service providers having technical expertise in system setup and development. This is intended to be used by such members to integrate on their remittance system. 

 ## 1.3 Document Update 
This document primarily focuses on the integration and processing of remittance-related transactions through the National Payment Interface (NPI). Following the implementation of this specification, the existing version of the fund transfer API will no longer be available to remittance companies and banks remit. Previously, such remittance-related transactions were processed using the standard fund transfer API specification. This updated specification enriches the data elements and information required for regulatory compliance, reporting, reconciliation, and other purposes.
 
