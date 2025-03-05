---
sidebar_position: 1
---

# 1. Introduction
## 1.1. BACKGROUND
NEPALPAY QR is an implementing infrastructure of NepalQR, as per ‘NepalQR Standardization 
Framework and Guidelines’ issued by NRB, to bring uniformity for interoperability, scalability and security. 
It is operated by NCHL, as a clearing house, to establish QR scheme/network for its participating members 
and inter-network interoperable QR transaction settlement for participating other QR scheme operators. 
The underlying financial transactions are processed through one of the switches of National Payment 
Switch (NPS). Issuers or Issuer Networks provide instruments to their customers to read/ scan QR 
presented by Acquirer or Acquirer Network as creditor (beneficiary member or service provider or 
merchant). Issuers and Acquirers are normally BFIs or PSP and can use their own system or instruments 
or instrument provided by NCHL.

The objective of NEPALPAY QR is to:

i. Establish QR scheme/ network as per NepalQR standard.

ii. Establish interoperability for inter-network QR transactions in Nepal.

iii. Provide interfacing to NEPALPAY QR for Issuers/Issuer Networks and Acquirers/Acquirer 
Networks.

In addition to the standard issued by NCHL related to NEPALPAY QR previously (document reference 
NEPALPAY QR Technical & API Specification Ver 2.0), this document is subset of NEPALPAY QR 
Technical & API Specification Ver 2.0, with the changes relevant to web socket implementation only.

## 1.2.  NPI WS CHANNEL
The service enables the usage of bi-directional communication between client and NPI nodes. Allowing real 
time updates of information, reducing latency during communication and increasing efficiency; specifically
overcoming the drawback of polling system. Realtime updates on the client interface for actions and stimuli 
such as QR page opened, QR parsed and QR transaction completed will be made available supporting 
seamless customer experience.
Web sockets provide a persistent, bidirectional communication channel between the client and the server, 
enabling real-time data exchange without the need for continuous HTTP requests. It is used to open a two-way interactive communication session between the user's browser and a server. With this API, message 
and event driven architectural possibilities are enabled.

## 1.3. INTENDED AUDIENCE 
This document has been prepared and issued to fulfill the requirement of bulk merchant Enrollment on 
NEPALPAY QR Network. The intended audience for this document comprises of mainly technical resources 
or partners of the BFIs, Members of NCHL, service providers having technical expertise in system setup 
and development.


## 1.4 PURPOSE OF THE DOCUMENT
The purpose of this document is to establish a standard specification for QR transaction notification 
workflow based on web sockets technology.

### 1.4.1.  Connection Initiation

![Example Image](/img/connection_initiation.png)
<p align="center" class="centered-caption"></p>

1. Request for web socket connection is send to ws-channel from the client service.
2. WS service assigns a unique Id to each request. WebSocket Identifier, Transaction Identifier and 
Application Identifier are registered.
3. Web socket connection response is given to client service.

### 1.4.2. QR Parse Process
![Example Image](/img/QR_Parse_Process.png)
<p align="center" class="centered-caption"></p>

1. Mobile app scans client service QR.
2. QR parse request is sent to NPI and QR parsed status is sent to ws-channel and subsequently 
be passed on to the client service.
1. QR Parsed response is passed back to QR scanning device.


### 1.4.3. QR Transaction Process
![Example Image](/img/QR_Transaction_process.png)
<p align="center" class="centered-caption"></p>

1. Payment is confirmed from the mobile app and request is sent to the requisite client service. 
2. Payment request is sent to NPI and the transaction status is passed to ws-channel.
3. Client service is notified about the transaction status, through the ws-channel.
4. Transaction status response is passed on to the QR scanning device

