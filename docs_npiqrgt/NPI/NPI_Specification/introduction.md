---
sidebar_position: 1
---

# 1. Introduction

## 1.1.  Background 

The National Payments Interface (NPI) offers single channel of interfaces (a set of standard Application 
Programming Interfaces-APIs) for connecting multiple payment systems, BFIs, alternate channels of 
BFIs and the service providers (as overlaying services). Current version of NPI NCHL supports seamless 
integration to the payment systems hosted by NCHL, namely connectIPS e-Payment System (real-time 
instant payment system) and NCHL-IPS System as underlying core systems. NPI can be used for 
processing of incoming and outgoing payments. connectIPS e-Payment supports real time transactions 
and NCHL-IPS supports non-real time transactions. The transaction limits of the underlying core system 
shall be applicable in case of transactions initiated from NPI. 


The overlaying services are added by integrating the service providers like Government institutions, 
Semi-Government institutions, large corporates, PSPs/ PSOs, alternate channels of BFIs, etc. within 
NPI. The on-boarded service providers can also be accessed by other service providers through NPI for 
interoperable transactions and for the purpose of accessing other services (as aggregated services). 


## 1.2. Purpose of the Document

The purpose of this document is to provide details of the technical specifications of the NPI. For the ease of implementation, high level flow diagrams and some of the use cases have also been listed in the document. The business rules and validations will be as per the guidelines, rule books and/or operating procedures of the underlying core systems of NCHL-IPS and connectIPS and hence it is recommended to refer to such documents as well. 

The intended audience for this document comprises of mainly technical resources or partners of the BFIs, Members of NCHL, service providers having technical expertise in system setup and development. 

## 1.3. Key Objectives

The main objectives of establishing and/or implementing NPI is to provide single channel for: 

1. Accessing multiple payment systems (core systems typically SIPS) through which the member BFIs of the core system could be accessed for payment transactions. 
2. Integrating the service providers like Government institutions, Semi-Government institutions, large 
institutions/ corporates, such that their services could be used by the customers of the BFIs and 
PSPs. 
3. Extending core payment systems to the alternate channels of BFIs, PSPs and PSOs. 
4. Establishing interoperability between PSPs and PSOs. 
5. Supporting real-time and non-real time payments. 
6. Supporting On-Us and Off-Us transactions that could be single or batch transactions. 



