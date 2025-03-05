---
sidebar_position : 5
---


# 5.NEPALPAY Card Personalization System
Card personalization performs the production processes of embossing, magnetic stripe encoding, image printing and IC chip personalization of the physical cards they receive from the Card Manufacturer, prior to the start of the issuance process to the cardholders. 

 ## 5.1	Organization of NEPALPAY IC Card Personalization Environment
NEPALPAY IC Card personalization environment can be visualized as below figure including various components:

![Example Image](/img/fig3.png)
<p align="center" class="centered-caption"></p>

Figure 3: Card Personalization System


**Data Preparation System (DPS)**

Data preparation system based on EMV and PBOC standards is to generate personalization file for the card personalization system including data validity checking, data conversion, data decomposition, data packaging, data encryption/decryption, etc. Flexible configurable template is for customized card design based on the demands of the customers. Data preparation system loads and generates IC data, magnetic strip data, bank rule, key and certificate according to the customized configurable template. Data preparation system will communicate with the back-end services of KMS for key/certificate generation and sensitive data encryption/decryption. Data preparation system is to generate personalization file for the card personalization system. The basic business flow is depicted in the following figure.


![Example Image](/img/Business-flow-of-DPS.png)
<p align="center" class="centered-caption"></p>

Figure 4: General Business Flow of DPS



**Key Management System (KMS)** 


KMS provides a platform to manage all keys used in chip based card transaction system and personalization system. It supports of all-level certificate generation, all-level key generation, transmission protection, etc. Flexible configurable template is for customized key structure of card based on the demands of the customers. Key management system consists two parts. The first part is key management system for key/certificate configuration and management. And second part is back-end key management services communicated with data preparation system for key/certificate generation and sensitive data transmission encryption/decryption. The basic business flow is depicted in the following figure.



![Example Image](/img/Business-flow-of-KMS.png)
<p align="center" class="centered-caption"></p>

Figure 5: General Business Flow of KMS


	
    
    
    
    
    
**Card Management System (CMS)**


Card Management involves controlling the life-cycle of a card. It could be contact card and contactless Credit/ Debit/ Prepaid/ Virtual card. The life-cycle is the process that starts from generating the need for a card, i.e. a request, moving to approval and then issuance, and follows with the monitoring of use, expiry, blocking and re-issuance of expired, lost or stolen cards. Each business will have its own rules around each stage of this process.
A Card Management System (CMS) is a software system that administers and facilitates the tracking and control of the card’s life activities. Usually, the system will incorporate business rules to automate and streamline the card management process. A sufficiently comprehensive CMS managing many cards will deliver significant productivity and security benefits to banks and financial institutions.

	
    
**Hardware Security Module (HSM)**



The functions of an HSM include PIN encryption/decryption, MAC calculation and validation, and key storage, which shall all be done in the HSM for the purpose of guaranteeing that plaintexts of keys and PINs only appear in the HSM for prevention of leakage. In addition, the following requirements must also be met:

•	To support single-length, double-length and triple length 3-DES keys

•	To validate and encrypt/decrypt PINs

•	To validate and generate MACs

•	To be capable of key validation

•	To automatically destroy the stored key under illegal attack

Both NCHL and Members shall deploy HSMs together with hosts to encrypt the transmitted data. Data encryption/decryption between NCHL and Members’ systems shall be based on the double-length key algorithm.



**EMV Card Printer**

An EMV card printer is an electronic printer which prints and personalizes EMV cards. EMV card printers are controlled by corresponding printer drivers. Generally, card printers are designed with laminating, striping, and punching functions, and use desktop or web-based software. EMV Card Printers shall support and accept different card thickness and dimensions as prescribed by NCHL for NEPALPAY card.

  

## 5.2	NEPALPAY Card Design Submissions and Approval
NCHL Member banks/ FIs should design NEPALPAY card and NCHL to process card design proofs for evaluation prior to card production. Within the Business Hour as per Service Level Agreement (SLA), NCHL Operations will evaluate the proof, and if compliant, provide approval to members. 
When card proof submissions are actioned by NCHL, a system-generated notification is issued prompting the status update (i.e., if proof submission was Approved, Rejected or Pending). If any proof submission is Rejected or Pending, comments are provided by NCHL. When a card design proof is approved, card production may begin. Card proofs submitted for any unapproved programs will be pended until member submits required documentation to NCHL and NCHL provides approval. 

 ## 5.3	Member Certifications
When NCHL member aims to issue NEPALPAY card, NCHL shall certify the member’s/ member authorized third party processor’s card personalization system. For this purpose, NCHL shall provide certification checklist to members.

## 5.4	Card and PIN Delivery
Upon completion of card issuance, issued cards may be delivered (via secure method) directly to the issuer or customer. Member/ TPP must not deliver the card and PIN via same custodian/ currier in same day. 

## 5.5	Card Repository
NCHL members shall provide the card data statistics to NCHL in daily basis which is mandated to provide the centralized reporting system.
 

