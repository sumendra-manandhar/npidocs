---
sidebar_position: 4
---

# 4. Message Structure

NPS-NCS operates a reliable and flexible transaction processing environment that efficiently routes Card Transactions between Merchants/Acquirers/ATM Networks, as applicable, and Issuers, and is comprised of state-of-the-art, fully redundant gateways and flexible applications. This document also describes the security measures used to protect sensitive data. The Message standard is robust and supports a wide range of functionality. To optimize the utilization of all features, users of this Message format are advised to perform necessary updates by the scheduled implementation date, using the latest version officially released by NCHL.

## 4.1  Message Structure Overview

An ISO 8583 online transaction message includes four parts, i.e. the message header, the message type identifier, the bitmap, and the data elements. The structure is shown as follows:


<table border="1">
  <tr>
    <td rowspan="2"><strong>Message Header</strong></td>
    <td rowspan="2"><strong>Message Type Identifier (MTI)</strong></td>
    <td colspan="2"><strong>Bitmap</strong></td>
    <td colspan="3"><strong>Data Elements</strong></td>
  </tr>
  <tr>
    <td><strong>Bitmap 1</strong></td>
    <td><strong>Bitmap 2</strong></td>
    <td><strong>2</strong></td>
    <td><strong>3</strong></td>
    <td><strong>4</strong></td>
    <td>...</td>
    <td><strong>126</strong></td>
    <td><strong>127</strong></td>
    <td><strong>128</strong></td>
  </tr>
</table>


Table 2: Message Structure


1.	As the first element of the message, the message header records length of the message.

2.	The message type identifier, the second element of the message, defines the general categories of the message, e.g. financial message or management message.

3.	The bitmap defines message fields that appear in the message, including either one bitmap or two bitmaps. Primary Bitmap defines Fields 2 to 64; 1st bit of primary bitmap represents the presence of secondary bitmap which defines Fields 66 to 128.

4.	The data element field is the major part of the message. Most of message fields are defined by ISO 8583 and the others are defined and used by NPS-NCS.

## 4.2 Message Header

Messages sent to NPS-NCS over a socket are required to begin with a 2-byte binary length field indicating the length of the Message that follows. The length of the 2-byte length field is not included in the overall length, all messages from/to NPS-NCS will begin with a 2-byte length field indicating the length of the Message that follows.

## 4.3 Message Type Identifier

The Message Type Identifier (MTI) begins each Message and is used to determine the Message type. Authorization Requests, Financial Requests, Authorization Advice Messages, and Network Management Messages, for example, are distinguished from each other by the Message Type Identifier. After the type of Message is established, the remaining Message fields can be interpreted in the appropriate context. The MTI is a 4-digit numeric field, where each digit starting from the left indicates - ISO 8583 version, the message class, the message function, and the message origin. Each message is required to have a message type identifier followed by the primary bitmap. The message type in ISO8583-1987 standard is mainly defined according to the source and destination of the message. This document defines the message type transmitted between National Payment Switch (NPS) and NPS Members.






### 4.3.1 Position 1 – Version Number

First position of the message type identifier (MTI) specifies the version of the ISO 8583 standard used to transmit the message


<table border="1">
  <tr>
    <th>MTI</th>
    <th>Signifies</th>
    <th>NPS Implementation</th>
  </tr>
  <tr>
    <td>0XXX</td>
    <td>ISO 8583: 1987 Version</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>1XXX</td>
    <td>ISO 8583: 1993 Version</td>
    <td>✘</td>
  </tr>
  <tr>
    <td>2XXX</td>
    <td>ISO 8583: 2003 Version</td>
    <td>✘</td>
  </tr>
  <tr>
    <td>9XXX</td>
    <td>Reserved for ISO Use</td>
    <td>✘</td>
  </tr>
</table>


Table 3: Version Number of ISO 8583 Message

### 4.3.2 Position 2 – Message Class

Second position of the message type identifier (MTI) specifies the class of the message.


<table border="1">
  <tr>
    <th>MTI</th>
    <th>Signifies</th>
    <th>NPS Implementation</th>
  </tr>
  <tr>
    <td>01XX</td>
    <td>Authorization Messages</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>02XX</td>
    <td>Financial Transaction Messages</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>03XX</td>
    <td>File Update Messages</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>04XX</td>
    <td>Reversal Messages</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>08XX</td>
    <td>Network Management Messages</td>
    <td>✔</td>
  </tr>
</table>


Table 4: Message Class of ISO 8583 Message


### 4.3.3 Position 3 – Message Function

Third position of the message type identifier (MTI) specifies the function of the message which specifies how the message will flow within the system.


<table border="1">
  <tr>
    <th>MTI</th>
    <th>Signifies</th>
    <th>NPS Implementation</th>
  </tr>
  <tr>
    <td>XX00</td>
    <td>Request</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>XX10</td>
    <td>Request Response</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>XX20</td>
    <td>Advice</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>XX30</td>
    <td>Advice Response</td>
    <td>✔</td>
  </tr>
</table>


Table 5: Message Function of ISO 8583 Message



### 4.3.4 Position 4 – Message Origin

Fourth position of the message type identifier (MTI) specifies the location of the message source.



<table border="1">
  <tr>
    <th>MTI</th>
    <th>Signifies</th>
    <th>NPS Implementation</th>
  </tr>
  <tr>
    <td>XXX0</td>
    <td>Acquirer</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>XXX1</td>
    <td>Acquirer repeat</td>
    <td>✘</td>
  </tr>
  <tr>
    <td>XXX2</td>
    <td>Issuer</td>
    <td>✔</td>
  </tr>
  <tr>
    <td>XXX3</td>
    <td>Issuer repeat</td>
    <td>✘</td>
  </tr>
</table>


Table 6: Message Function of ISO 8583 Message

Following are the valid message type identifiers for NPS Card Switch online specifications:



<table border="1">
  <tr>
    <th>Value</th>
    <th>Message Type</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>0100</td>
    <td>Authorization Request</td>
    <td>A user-initiated, real-time request to an Issuer for deciding a Card Transaction that may or may not be ultimately applied to the Card Account.</td>
  </tr>
  <tr>
    <td>0110</td>
    <td>Authorization Response</td>
    <td>Contains the approved or declined answer to the 0100 Authorization Request.</td>
  </tr>
  <tr>
    <td>0120</td>
    <td>Authorization Advice</td>
    <td>The 0120 Authorization Advice Message provides a system-initiated notification to an Issuer member stand-in Authorization Response that was made on behalf of the Issuer by NCHL. The Message may be stored and forwarded or sent real-time. Acquirer member may also send a 0120 Authorization Advice Message with the final Card Sale amount after receiving a positive Authorization Response for the Card Sale in a Pre-Authorization Request.</td>
  </tr>
  <tr>
    <td>0130</td>
    <td>Authorization Advice Response</td>
    <td>Contains the accepted or rejected answer to the 0120 Authorization Advice.</td>
  </tr>
  <tr>
    <td>0200</td>
    <td>Financial Transaction Request</td>
    <td>A user-initiated, real-time request to an Issuer for deciding a Card Transaction that can be immediately applied to the Card Account.</td>
  </tr>
  <tr>
    <td>0210</td>
    <td>Financial Transaction Response</td>
    <td>Contains the approved or declined answer to the 0200 Financial Transaction Request Message.</td>
  </tr>
  <tr>
    <td>0302</td>
    <td>File Update Request</td>
    <td>Contains the file update request for maintaining the stand-in data.</td>
  </tr>
  <tr>
    <td>0312</td>
    <td>File Update Response</td>
    <td>Contains the response to the file update request message.</td>
  </tr>
  <tr>
    <td>0420</td>
    <td>Reversal Advice</td>
    <td>A system-initiated Request for a complete reversal of an earlier Authorization or Financial Transaction. The Message may be stored and forwarded or sent real-time.</td>
  </tr>
  <tr>
    <td>0430</td>
    <td>Reversal Advice Response</td>
    <td>Contains the accepted or rejected answer to the 0420 Reversal Advice.</td>
  </tr>
  <tr>
    <td>0800</td>
    <td>Network Management Request (Network Messaging)</td>
    <td>A system-generated, real-time request for the status of the system and key management.</td>
  </tr>
  <tr>
    <td>0810</td>
    <td>Network Management Request Response (Network Messaging)</td>
    <td>Contains the status of the system and key management in response to the 0800 Network Management Request (Network Messaging).</td>
  </tr>
</table>



Table 7: NPS-NCS Message Type Identifier


## 4.4 Bitmap

After a Message is identified by the Message Type Identifier, the bit map is used to determine the data elements contained in a Message. Although many fields are optional, conditional, or mandatory for specific Message types, a means must exist to determine the fields that are represented in the subsequent stream of bytes. The bit map indicates the presence (1) or absence (0) of a data field. A message can contain one or two bitmaps. The valid combinations of the bit maps are:

•	Primary bitmap

•	Primary and secondary bitmap

### 4.4.1 Primary Bitmap

The primary bitmap (Bitmap 1) is the main bitmap. Each message has the primary bitmap. It is composed of 64 binary bits (8 bytes) following the message type identifier. Except the first bit, every bit corresponds to a data element from Field 2 to Field 64. The value of each bit indicates whether the field appears in the message or not:

•	If a bit is 0, the corresponding data element does not present in the message.

•	If a bit is 1, the corresponding data element presents in the message.

There is no field with the field number “1”. The first bit of the main bitmap is used to indicate whether it is followed by Secondary Bitmap (Bitmap 2). 


### 4.4.2 Secondary Bitmap

The first bit of the primary bitmap indicates whether Secondary Bitmap (Bitmap 2) is present or not. Like the primary bitmap, secondary bitmap is composed of 64 binary bits (8 bytes). Secondary Bitmap corresponds to Field 66 to Field 128, and can be considered as an extension of the primary bitmap. There is no field with field number 65 which to indicate the presence of Tertiary Bitmap. Secondary Bitmap will be used only when the message contains data elements in Field 66 to Field 128.


## 4.5 Data Elements

The remainder of the Message consists of data elements, each of which represents a specific Message component, such as Field 2 – Primary Account Number (PAN), Field 4 – Transaction Amount, Field 7 – Transaction Date & Time, Field 102 – From Account Number etc. The Message Type Identifier and bit map form the initial segment of a Message, delineating its outset, with the subsequent portion being defined by an array of data elements. Data elements serve as the designated fields intricately carrying the essential information pertaining to the transaction itself. Each Data element has a specified meaning and format. For each data element there is specific data format, size, constraints and description, which are been mentioned in Chapter 6.





