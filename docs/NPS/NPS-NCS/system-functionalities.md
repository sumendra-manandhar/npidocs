---
sidebar_position: 3
---

# 3. System Functionalities

## 3.1 Data Communication

Communication between NPS-NCS and Acquirer, or Issuer can occur via TCP/IP. Each socket connection between NCHL and the Acquirer or Issuer must be persistent, bi-directional, and capable of multithreading Messages. The use of multithreading results in handling each Message independently of other Messages, and allows several Messages to travel to and from NCHL over the same socket, at any time. Each TCP/IP socket established between NCHL and a participating member is initiated by NCHL to a port on the member’s system. The port number for a member’s system is supplied by NCHL. 

•	In terms of TCP connection setup, the NCHL network is configured as the Server, while the Participant Member is configured as the Client. 

•	Concurrently, the NCHL system is automated to actively listen for and accept incoming TCP connection requests.

•	The member’s system must be able to connect TCP/IP connections, if a TCP/IP socket connection is closed or broken, it is the responsibility of the member’s system for establishing (and re-establishing) the TCP connections to the NCHL system.

•	Separate connection to be provided for each bank in case of participating members uses third party processor managed switch this implies that under a single third-party processor, there will be individual connections established for each acquirer or issuer.

•	Member will be responsible for generating the sign-on (0800 message type) message after every successful TCP socket connection.

•	NCHL can also generate the sign-on message when disconnected and thus responsive connection initiated from NCHL.

•	Member must fine-tune its timers so that every disconnection is followed by a connect request without any delay.


## 3.2  Log Management

NCHL system can log the messages at TCP level, host-to-host level and module level. Module level logs can be enabled or disabled as per the NCHL requirement.

## 3.3 Security Key Management

Ensuring message security and integrity, as well as protecting against disclosure of cardholder personal identification number (PIN); NCHL is managing proper security consideration. When Members establish connectivity with NCHL, they should have a strict security and confidentiality mechanism to guarantee safe and stable operation of their systems. Members must execute all PIN encryption, translation, and decryption for the POS/ATM transactions using hardware encryption through physically secure devices. Both the host and the point of entry must use hardware security module. 

### 3.3.1 Data Transmission Security Control

The requirements for data transmission security control are composed of the following five aspects:

•	To have a key management mechanism and adopt strict and reliable key distribution procedures with technical methods

•	To have PIN encryption and conversion mechanism and ensure that PIN in plaintext will never appear in communication lines or manually-operated storage media

•	To adopt HSMs

•	To adopt transmission line encryption (TLE) using Transport Layer Security (TLS) wherever possible

•	To adopt point-to-point data encryption/decryption network mechanisms wherever possible


### 3.3.2 Hardware Security Module (HSM)

The functions of an HSM include PIN encryption/decryption, MAC calculation and validation, and key storage, which shall all be done in the HSM to guarantee that plaintexts of keys and PINs only appear in the HSM for prevention of leakage. In addition, the following requirements must also be required:

•	To support double-length and triple-length 3-DES keys

•	To validate and encrypt/decrypt PINs

•	To validate and generate MACs

•	To be capable of key validation

•	To automatically destroy the stored key under illegal attack

Both NCHL and Members (Banks with switch / TPP) shall deploy HSMs separately to encrypt the transmitted data. Data encryption/decryption between NCHL and Members’ systems shall be based on the double-length key algorithm.

### Data Encryption and Transmission Environment

To uphold stringent security standards, all PIN data transmitted to NCHL by Members must undergo encryption prior to transmission. Moreover, any PIN data acquired by a Member from NCHL is mandated to be encrypted, ensuring a consistent level of protection throughout the network. This encryption process is fortified by the establishment of a robust point-to-point data encryption/decryption structure, facilitated by Hardware Security Modules (HSMs) deployed within both NCHL and Members' networks. Additionally, Transport Layer Security (TLS) protocols are set to be implemented for the members who opt for encrypted message data transmission between participating members and NCHL, further solidifying the overall security framework and safeguarding sensitive information against unauthorized access or interception.


![Example Image](/img/data_encry.jpg)
<p align="center" class="centered-caption"></p>

Figure 4: Data Encryption and Transmission Environment


### 3.3.4 Key Management

Members must obtain a Zone Master Key (ZMK), which is a key exchange key. Members use a ZMK for encrypting the working key i.e. Zone PIN Key (ZPK) when they convey it in an online message. A ZMK is used to protect a Zonal Pin Key (ZPK). ZPK is different for both an issuer and an acquirer.


### 3.3.5 Key Exchange


The key exchange service enables member to change the working keys via online messages, thereby increasing the security of the payment system and reducing the chances of key compromise. There are two types of PIN encryption keys: Acquirer ZPKs and Issuer ZPKs. NCHL and an acquirer would share one ZPK and NCHL and issuer would share another ZPK. Acquirers use their ZPK to encrypt the PIN while sending a message to NCHL. NCHL uses the issuer ZPK to encrypt the PIN when it sends the message to the issuer. 
Key exchange can be accomplished in two ways: i.e. static and dynamic modes as configured for respective members


#### 3.3.5.1 Static Key Exchange

In case of static mode, the ZPK is encrypted under Zonal Master Key and shall be sent to bank nominated custodians and the bank is expected to enter those keys manually into their system. These keys shall remain constant throughout the period for which the member bank is connected to NCHL on static key mode.

#### 3.3.5.2 Dynamic Key Exchange

In case of dynamic mode, the ZPK shall be changed on a periodic basis through a message exchange between member’s system and NCHL system automatically.

## 3.4 Transaction Management Use Cases

There are different use cases of managing transaction cycle incorporating different end points.

### 3.4.1 Member Bank On-us Transaction [Same Bank as an Acquirer and Issuer]

This use case is applicable when one-member bank’s card is attempted into same member bank’s terminal. The flow for this use case is explained as following.


![Example Image](/img/fig5.jpg)
<p align="center" class="centered-caption"></p>



Figure 5: Member Bank Onus Transaction Flow

<table border="1">
  <tr>
    <td><strong>Sequence</strong></td>
    <td><strong>Description</strong></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Card Holder inserts / uses the card into Terminal (such as ATM, POS, e-commerce, Mobile, etc.) for a transaction.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Once the transaction details are received by terminal, the transaction is sent to Member Bank Switch.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Member Bank Switch will send the transaction request to its respective Core Banking System (CBS).</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Upon authorizing the transaction, the response will be sent by Member Bank CBS to Member Bank Switch.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Member Bank Switch will then send the response to the terminal (ATM / POS / Internet / Mobile, etc.).</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Terminal shall process the transaction based on the response received and acknowledges respectively to the cardholder.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Member Bank associated Switch will send notification message of successful transactions to National Payment Switch (NPS) using bulk csv file as per NCHL specification for centralized reporting purpose. Alternately, Members may upload the transaction report (bulk csv or XML file) on schedule basis to NCHL for centralized reporting purpose.</td>
  </tr>
  <tr>
    <td>8</td>
    <td>National Payment Switch (NPS) will acknowledge the notification file/ report received from Member.</td>
  </tr>
</table>






### 3.4.2 Member Off-us Transaction [Different Bank as an Acquirer and Issuer]

This use case is applicable when one-bank’s card is attempted into another bank’s terminal; where participating member is managing its own switch or using third party processor managed switch for issuing or acquiring purpose. Which means the transaction between the members of any third party processor shall be routed through NPS-NCS. The flow for this use case is explained as following.



![Example Image](/img/fig6.jpg)
<p align="center" class="centered-caption"></p>



Figure 6: Member Bank Offus Transaction Flow


<table border="1">
  <tr>
    <td><strong>Sequence</strong></td>
    <td><strong>Description</strong></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Card Holder inserts the card for Terminal (such as ATM, POS, eCommerce, Mobile etc.) Transactions.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Once the transaction details are received by terminal, the transaction is sent to Acquirer Switch operated by Member Bank / Third Party Processor (TPP).</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Acquirer Switch will send the transaction request to National Payment Switch (NPS).</td>
  </tr>
  <tr>
    <td>4</td>
    <td>National Payment Switch (NPS) will route the transaction request to Issuer Switch based on BIN (Bank Identification Number) or IIN (Institution Identification Number).</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Issuer Switch will send the transaction request to its respective member’s Core Banking System (CBS).</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Upon authorizing the transaction, the response will be sent by Issuer Bank CBS to its Issuer Switch.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Issuer Switch will send the response to National Payment Switch (NPS).</td>
  </tr>
  <tr>
    <td>8</td>
    <td>National payment Switch (NPS) then sends the response to Acquirer Switch and prepares for settlement through RTGS for successful transactions.</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Acquirer Switch will then send the response to the terminal (ATM / POS / Internet / Mobile etc.).</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Terminal shall process the transaction based on the response received and acknowledges respectively to the cardholder.</td>
  </tr>
</table>


### 3.4.3 International Acceptance of NEPALPAY Card [NEPALPAY card in Abroad]

This use case is applicable when NEPALPAY card is attempted into foreign terminal. The flow for this use case is explained as following.



![Example Image](/img/npaycard_foreign_terminal.jpg)
<p align="center" class="centered-caption"></p>

Figure 7: NEPALPAY Card’s Transaction in Foreign Terminal Flow




<table border="1">
  <tr>
    <td><strong>Sequence</strong></td>
    <td><strong>Description</strong></td>
  </tr>
  <tr>
    <td>1</td>
    <td>NEPALPAY Card Holder inserts the card for International Terminal (such as ATM, POS).</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Once the transaction details are received by terminal, the transaction is sent to Acquirer Switch.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Acquirer Switch will send the transaction request to Discover Global Network (DGN).</td>
  </tr>
  <tr>
    <td>4</td>
    <td>DGN will send the transaction request to NPS National Card Switch (NPS-NCS).</td>
  </tr>
  <tr>
    <td>5</td>
    <td>NPS-NCS will send transaction to NEPALPAY issuer.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Upon authorizing the transaction, the response will be sent by Issuer to NPS-NCS.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>NPS-NCS will send the transaction response to DGN.</td>
  </tr>
  <tr>
    <td>8</td>
    <td>DGN will send the transaction response to Acquirer.</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Acquirer will then send the response to the terminal (ATM / POS / Internet / Mobile etc.).</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Terminal shall process the transaction based on the response received and acknowledges respectively to the cardholder.</td>
  </tr>
</table>



### 3.4.4 International Acquiring of DGN Cards [Foreign Discover Cards in Nepal]

This use case is applicable when foreign bank’s Discover Global Network (DGN) card is attempted into NCHL member’s (Member Bank or Member TPP) terminal. The flow for this use case is explained as following.



![Example Image](/img/fig8.jpg)
<p align="center" class="centered-caption"></p>

Figure 8: International DGN Card transactions acquired in Nepal


<table border="1">
  <tr>
    <td><strong>Sequence</strong></td>
    <td><strong>Description</strong></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Card Holder inserts the card for Terminal (such as ATM, POS, e-commerce, Mobile, etc.) Transactions.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Once the transaction details are received by terminal, the transaction is sent to Acquirer Switch operated by Member Bank / Third Party Processor (TPP).</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Acquirer Switch will send the transaction request to National Payment Switch.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>National Payment Switch will send the transaction request to Discover Global Network (DGN).</td>
  </tr>
  <tr>
    <td>5</td>
    <td>DGN will send the transaction request to international issuer.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>International issuer will send the response to Discover Global Network.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>DGN will then send the response to the National Payment Switch.</td>
  </tr>
  <tr>
    <td>8</td>
    <td>National Payment Switch then sends the response to Acquirer member’s associated Switch.</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Acquirer Switch will then send the response to the terminal (ATM / POS / Internet / Mobile etc.).</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Terminal shall process the transaction based on the response received and acknowledges respectively to the cardholder.</td>
  </tr>
</table>


### 3.4.5 International Acceptance of Non-NEPALPAY Cards [Existing Cards in Abroad]

This use case is applicable when existing Nepali, non-NEPALPAY card, is attempted into foreign terminal. The flow for this use case is explained as following.


![Example Image](/img/fig9.jpg)
<p align="center" class="centered-caption"></p>




Figure 9: International Nepali Card transactions (Non-NEPALPAY) acquired in international terminal


<table border="1">
  <tr>
    <td><strong>Sequence</strong></td>
    <td><strong>Description</strong></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Nepali Card Holder inserts the card in foreign Terminal (such as ATM, POS, e-commerce, Mobile, etc.).</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Once the transaction details are received by terminal, the transaction is sent to International Acquirer Switch.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>International Acquirer Switch will send the transaction request to associated International Scheme (Such as VISA, MasterCard, UnionPay, etc.).</td>
  </tr>
  <tr>
    <td>4</td>
    <td>International Scheme will send the transaction request to its respective Issuer in Nepal.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Upon authorizing the transaction, the response will be sent by Issuer to International Scheme.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>International Scheme will send the response received from Issuer towards International Acquirer.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>International Acquirer will then send the response to the terminal (ATM / POS / Internet / Mobile, etc.).</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Terminal shall process the transaction based on the response received and acknowledges respectively to the cardholder.</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Issuer Switch in Nepal will send notification message of successful transactions to National Payment Switch (NPS) using bulk csv file as per NCHL specification for settlement and reporting purpose. Alternately, Members may upload the transaction report (bulk csv or XML file) on schedule basis to NCHL for centralized reporting purpose.</td>
  </tr>
  <tr>
    <td>10</td>
    <td>National Payment Switch (NPS) will respond the notification file/report received from Member.</td>
  </tr>
</table>




### 3.4.6 International Acquiring of Non-DGN Cards [Non-DGN Foreign cards into Nepal Terminals]

This use case is applicable when non-Discover Network foreign card is attempted into Nepal terminal.  The flow for this use case is explained as following.




![Example Image](/img/fig10.jpg)
<p align="center" class="centered-caption"></p>
Figure 10: International Card (Non-DGN) transactions acquired in Nepal


<table border="1">
  <tr>
    <td><strong>Sequence</strong></td>
    <td><strong>Description</strong></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Foreign non-DGN Card Holder inserts the card in Nepal Terminal (such as ATM, POS).</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Once the transaction details are received by terminal, the transaction is sent to Acquirer Switch in Nepal.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Acquirer Switch will send the transaction request to its associated International Scheme (Such as VISA, MasterCard, UnionPay, etc.).</td>
  </tr>
  <tr>
    <td>4</td>
    <td>International Scheme will send the transaction request to its respective international Issuer.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Upon authorizing the transaction, the response will be sent by international Issuer to International Scheme.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>International Scheme will send the response received from Issuer towards Acquirer in Nepal.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Acquirer Switch will then send the response to the terminal (ATM / POS / Internet / Mobile etc.).</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Terminal shall process the transaction based on the response received and acknowledges respectively to the cardholder.</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Acquirer Switch will send notification message of successful transactions to National Payment Switch (NPS) using bulk csv file as per NCHL specification for settlement and reporting purpose. Alternately, Members may upload the transaction report (bulk csv or XML file) on schedule basis to NCHL for centralized reporting purpose.</td>
  </tr>
  <tr>
    <td>10</td>
    <td>National Payment Switch (NPS) will acknowledge the notification file received from Member.</td>
  </tr>
</table>



##  3.5 Timeout Management

There are different timeout scenarios in a transaction life cycle and as a central switch, NCHL is expected to manage the timeout scenarios of the transaction in various stages.

•	NCHL shall maintain the timer at the issuer end such that the timer will start ticking after the transaction is sent to issuer node. This timer shall be applicable to all the messages sent to issuer.

•	The Acquirer is expected to generate a reversal in the event of terminal timeout or validation errors occurring in the response message.

•	NCHL is expected to generate a reversal in the event of receiving a late good response from the issuer or if the validation of issuer response data fails. 

•	In case the reversal or advice is originated by acquirer, NCHL will first send the Advice/reversal response without waiting for Issuer response. NCHL then shall store the reversal or advice in SAF and forward SAF, and the SAF shall be cleared from the system as and when the issuer host is online and is ready to accept/respond SAF messages. In case of SAF timing out, it will be retried for 3 times as required before getting purged and the affect taken into settlement.
NCHL can set parameter in such a way that issuer member bank node can be set to offline on the basis of consecutive number of messages timed out.

The timer setting for inbound and outbound transactions/messages to be used is defines as in the following table.


<table border="1">
  <tr>
    <td><strong>Source</strong></td>
    <td><strong>Destination</strong></td>
    <td><strong>Timeout (in sec)</strong></td>
  </tr>
  <tr>
    <td>Acquirer</td>
    <td>-</td>
    <td>30 sec</td>
  </tr>
  <tr>
    <td>NCHL</td>
    <td>Issuer</td>
    <td>15 sec</td>
  </tr>
</table>



Table 1: Transaction Timeout definition



## Liquidity Management
To keep control on transactions from the Member Bank, NCHL manages debit cap limit on the transaction received from the Member bank. Using this provision NCHL can keep control on transactions from member bank. The upper limit is always total of transaction amount. Member bank can allow transactions equal to or less than the total of transaction amount i.e. upper limit maintain at NCHL end. 
•	The upper limit of member bank is always based on settlement guarantee fund (SGF).

•	At NCHL end, NCHL always maintain cumulative amount and Upper limit amount of member bank. At the beginning cumulative amount of member bank is always zero. After each successful transaction, cumulative amount gradually increases or decreases.

## 3.7 Transaction Matching Criteria

To achieve transaction matching of the response to the request, following data elements would be used: 
•	Primary Account Number (DE - 2)

•	STAN (DE - 11)

•	Acquirer ID (DE - 32)

•	Retrieval Reference Number (DE - 37)

•	Authorization Code (DE – 38)

•	Terminal ID (DE - 41)



