---
sidebar_position: 5
---

# 5. Message Format

## 5.1 Message Definition

A card-based transaction message ordinarily travels from a transaction initiating device, such as a point-of-sale terminal (POS) or an automated teller machine (ATM), through a series of networks, to issuer for authorization against the card holder's account. The transaction message consists the information of card, cardholder, terminal, merchant and other as per needs. Based on this information, the card issuing system will either authorize or decline the transaction and generate a response message which must be delivered back to the terminal within a predefined time period. Based on the response message, terminal shall complete the transaction and provide respective result to the cardholder.

The card-based transaction messages include purchase, withdrawal, deposit, refund, reversal, balance inquiry, fund transfer, mini statement, utility payments etc. Apart from these, ISO 8583 also defines system-to-system messages such as network messages, key exchange messages, etc.


## 5.2 Message Type Identification

This section covers the message type identification used in National Card Switch online message specification.

<table border="1">
  <tr>
    <th>S.N.</th>
    <th>Transaction</th>
    <th>Message Type</th>
    <th>Key Data Elements</th>
  </tr>
  <tr>
    <td>1</td>
    <td>POS Purchase</td>
    <td>MTI 0100 / 0110</td>
    <td>Data Element Field 3 must be 00XXXX 
    Data Element Field 35 must be present</td>
  </tr>
  <tr>
    <td>2</td>
    <td>POS Purchase Reversal</td>
    <td>MTI 0420 / 0430</td>
    <td>Data Element Field 3 must be 00XXXX
     Data Element Field 90 must be present</td>
  </tr>
  <tr>
    <td>3</td>
    <td>VOID / Cancellation</td>
    <td>MTI 0420 / 0430</td>
    <td>Data Element Field 3 must be 00XXXX
     Data Element Field 39 must be 17 Data Element Field 90 must be present</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Refund</td>
    <td>MTI 0120 / 0130</td>
    <td>Data Element Field 3 must be 20XXXX
     Data Element Field 90 must be present</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Preauthorization</td>
    <td>MTI 0100 / 0110</td>
    <td>Data Element Field 3 must be 03XXXX</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Preauthorization Reversal</td>
    <td>MTI 0420 / 0430</td>
    <td>Data Element Field 3 must be 03XXXX
    
    Data Element Field 90 must be present</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Preauthorization Cancellation</td>
    <td>MTI 0420 / 0430</td>
    <td>Data Element Field 3 must be 03XXXX
    Data Element Field 39 must be 17 
    Data Element Field 90 must be present</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Preauthorization Completion</td>
    <td>MTI 0120 / 0130</td>
    <td>Data Element Field 3 must be 03XXXX</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Purchase with Cashback</td>
    <td>MTI 0100 / 0110</td>
    <td>Data Element Field 3 must be 09XXXX
    Data Element Field 54 must contain cashback amount</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Purchase with TIP (Gratuity)</td>
    <td>MTI 0100 / 0110</td>
    <td>Data Element Field 3 must be 00XXXX
    Data Element 04 must contain transaction amount plus tip amount
    Data Element Field 54 must contain tip amount</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Balance Inquiry</td>
    <td>MTI 0100 / 0110
    MTI 0200 / 0210</td>
    <td>Data Element Field 3 must be 30XXXX
    The Balance Amount is returned in Data Element Field 54</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Cash Withdrawal / Fast Cash - ATM</td>
    <td>MTI 0200 / 0210</td>
    <td>Data Element Field 3 must be 01XXXX</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Mini Statement</td>
    <td>MTI 0100 / 0110  
    MTI 0200 / 0210</td>
    <td>Data Element Field 3 must be 38XXXX
    The Statement Data is returned in Data Element Field 120</td>
  </tr>
 <tr>
    <td>14</td>
    <td>PIN Change</td>
    <td>MTI 0200 / 0210</td>
    <td>Data Element Field 3 must be 98XXXX
    The PIN change data must present in Data Element 120</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Reversal – ATM Cash withdrawal / Fast Cash</td>
    <td>MTI 0420 / 0430</td>
    <td>Data Element Field 3 must be 01XXXX
    Data Element Field 90 must be present</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Cheque Book Request</td>
    <td>MTI 0200 / 0210</td>
    <td>Data Element Field 3 must be 36XXXX</td>
  </tr>
  <tr>
    <td>17</td>
    <td>Statement Request</td>
    <td>MTI 0200 / 0210</td>
    <td>Data Element Field 3 must be 37XXXX</td>
  </tr>
  <tr>
    <td>18</td>
    <td>Fund Transfer</td>
    <td>MTI 0200 / 0210</td>
    <td>Data Element Field 3 must be 40XXXX</td>
  </tr>
  <tr>
    <td>19</td>
    <td>Utility Payment – for ATM</td>
    <td>MTI 0200 / 0210 – from ATM
    MTI 0100 / 0110 – from POS & Ecommerce</td>
    <td></td>
  </tr>
  <tr>
    <td>20</td>
    <td>eCommerce Purchase</td>
    <td>MTI 0100 / 0110</td>
    <td>Data Element Field 3 must be 00XXXX
    Data Element Field 22 must be 07X</td>
  </tr>
  <tr>
    <td>21</td>
    <td>Account Verification</td>
    <td>MTI 0100 / 0110</td>
    <td>Data Element Field 3 must be 18XXXX
    Data Element Field 63 must be present</td>
  </tr>
  <tr>
    <td>22</td>
    <td>Original Credit Transaction (OCT)</td>
    <td>MTI 0100 / 0110</td>
    <td>Data Element Field 3 must be 26XXXX</td>
  </tr>
  <tr>
    <td>23</td>
    <td>Installment Payment</td>
    <td>MTI 0200 / 0210 – from ATM
    MTI 0100 / 0110 – from POS & Ecommerce</td>
    <td></td>
  </tr>
  <tr>
    <td>24</td>
    <td>Recurring Payment</td>
    <td>MTI 0200 / 0210 – from ATM
    MTI 0100 / 0110 – from POS & Ecommerce</td>
    <td></td>
  </tr>
  <tr>
    <td>25</td>
    <td>Tax Refund</td>
    <td>MTI 0200 / 0210 – from ATM
    MTI 0100 / 0110 – from POS & Ecommerce</td>
    <td></td>
  </tr>
  <tr>
    <td>26</td>
    <td>EMI Payment</td>
    <td>MTI 0200 / 0210 – from ATM
    MTI 0100 / 0110 – from POS & Ecommerce</td>
    <td></td>
  </tr>
  <tr>
    <td>27</td>
    <td>Network Echo</td>
    <td>MTI 0800 / 0810</td>
    <td>Data Element Field 70 must be 301</td>
  </tr>
  <tr>
    <td>28</td>
    <td>Network Signon / Logon</td>
    <td>MTI 0800 / 0810</td>
    <td>Data Element Field 70 must be 001</td>
  </tr>
  <tr>
    <td>29</td>
    <td>Network Signoff / Logoff</td>
    <td>MTI 0800 / 0810</td>
    <td>Data Element Field 70 must be 002
    Data Element Field 70 must be 012 – for logoff due to Debit Cap Limit Exceed</td>
  </tr>
  <tr>
    <td>30</td>
    <td>Network Cut Over</td>
    <td>MTI 0800 / 0810</td>
    <td>Data Element Field 70 must be 201</td>
  </tr>
  <tr>
    <td>31</td>
    <td>Network Key Exchange</td>
    <td>MTI 0800 / 0810</td>
    <td>Data Element Field 70 must be 161 – for Member initiated
    Data Element Field 70 must be 162 – for NCHL initiated</td>
  </tr>
  <tr>
    <td>32</td>
    <td>STIP Advice</td>
    <td>MTI 0120 / 0130</td>
    <td></td>
  </tr>
  <tr>
    <td>33</td>
    <td>File Update</td>
    <td>MTI 0302 / 0312</td>
    <td></td>
  </tr>
</table>




Table 8: Message Identification

## 5.3 Transaction Message Flow

The following Message flows represent the path of a Message between an Acquirer, NCHL and an Issuer. The flows are organized by Message type and by specific situations for each Message type. A diagram and a description that gives details regarding the diagram depict each flow. The numbers in the diagram correlate to a specific step in the description.


### 5.3.1 Authorization Transaction Message Flows [0100 / 0110]

This message serves to authorize a transaction even before the final purchase amount is determined. Its primary function is to ascertain the availability of funds, obtain approval, and subsequently block the necessary funds in the account. It's important to note that these messages do not have a direct settlement impact. To complete the clearing and settlement process for an approved transaction, the acquirer must submit the transaction to the clearing system.
Authorization Messages deliver information regarding the purchase of goods or services between Merchants/Acquirers and Issuers. Minimally, the 0100 Authorization Request carries information detailing the Card Number, Card Acceptor, and when and how the Card Transaction occurred. The 0110 Authorization Response returns the same information, including the decision on the Authorization Request.

![Example Image](/img/FIG11.jpg)
<p align="center" class="centered-caption"></p>



Figure 11: 0100/0110 Authorization message flow

<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Acquirer sends the 0100 Authorization Request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL receives the 0100 Authorization Request and routes it to the Issuer for Authorization.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Issuer approves or declines the 0100 Authorization Request, creates the 0110 Authorization Response, and sends the Authorization Response to NCHL.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>NCHL routes the 0110 Authorization Response to the Acquirer.</td>
  </tr>
</table>





###  5.3.2 Financial Transaction Message Flows [0200 / 0210]

This message is designed to verify the availability of funds, secure approval, and initiate the debit from the account. Notably, financial messages of this nature have a direct settlement impact. Following this transaction, no exchange of clearing files takes place. 
Financial Transaction Messages deliver information regarding Cash Disbursements from ATMs as well as Card Transactions for transfer of funds. Minimally, the 0200 Financial Transaction Request carries information detailing how, when, and where the Cash Disbursement occurred, details about the Cardholder and Card Number, security information, and Settlement date. The 0210 Financial Transaction Response returns the same information, including the decision on the Financial Transaction Request.


![Example Image](/img/fig12.jpg)
<p align="center" class="centered-caption"></p>


Figure 12: 0200/0210 Financial message flow


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Acquirer/ATM Network sends the 0200 Financial Transaction Request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL receives the 0200 Financial Transaction Request and routes it to the Issuer for Authorization.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Issuer approves or declines the 0200 Financial Transaction Request, creates the 0210 Financial Transaction Response, and sends the Financial Transaction Response to NCHL.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>NCHL routes the 0210 Financial Transaction Response to the Acquirer/ATM Network.</td>
  </tr>
</table>


### 5.3.3 Authorization Advice Message Flows [0120 / 0130]

Authorization Advice Messages are used when the Issuer is unavailable and stand-in processing was used to make the decision on an Authorization Request Transactions. The Authorization Advice Messages are subject to store and forward processing for Network stand-in processing to ensure the Issuer receives notification of the Card Transaction. The 0120 Authorization Advice Message contains the same information as the original Authorization Request, as well as the NCHL stand-in decision regarding the Authorization Request, where applicable. The 0130 Authorization Advice Message Response indicates the Authorization Advice Message was received.



![Example Image](/img/FIG13.jpg)
<p align="center" class="centered-caption"></p>

Figure 13: 0120/0130 Authorization advice message flow



<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Acquirer sends the 0100 Authorization Transaction Request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL receives the 0100 Authorization Transaction Request and, in the event of issuer unavailability, responds with a 0110 Authorization response to the acquirer, exercising the stand-in facility and providing the necessary authority on behalf of the issuer.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>When the issuer comes online, NCHL generates an authorization advice message request 0120, stores and forwards it to the issuer.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>The issuer sends a 0130 authorization advice response, confirming the proper receipt of the authorization advice request.</td>
  </tr>
</table>





### 5.3.4 File Update Message Flows [0302 / 0312]
File update message is an issuer generated message. File update message is used to update the cardholder records in NCHL database for negative list. This message will enable performing a STIP authentication on behalf of the issuer.



![Example Image](/img/FIG14.jpg)
<p align="center" class="centered-caption"></p>
Figure 14: 0302/0312 File Update message flow


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Issuer member sends 0302 File Update Message request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL responds with the 0312 File Update Message Response to the Issuer.</td>
  </tr>
</table>



### 5.3.4 Reversal Advice Message Flows [0420 / 0430]


This message functions to reverse the action of a prior authorization or financial transactions. It serves as a notification to NPS-NCS and/or the issuer, specifically addressing an error condition related to a previous financial transaction or balance update transaction if:

•	An approved transaction is cancelled at the POS or ATM device.

•	Acquirer does not receive a response to a financial request.

•	Acquirer cannot send an approved response to the POS or ATM device.

In the event that these messages cannot be promptly delivered to their designated destination for any reason, the acquirer or NCHL stores them in SAF (Store and Forward) and subsequently forwards them to the intended destination. NCHL treats all reversal messages as reversal advice messages. To initiate a reversal, the acquirer must send a 0420 message to NCHL, which will then forward it to the issuer. The issuer is required to respond with a 0430 message.

NCHL generates reversals exclusively for time-out scenarios concerning issuer responses. Additionally, NCHL will generate a reversal if the response from the issuer fails format validation or if the issuer fails to respond within the allowed time limit. It is crucial to note that a reversal always requires acknowledgment. The response code in the reversal response 0430 message is disregarded at NCHL. Once a response is received for the 0420 message from the issuer, NCHL considers the reversal as completed. It is then removed from SAF and takes effect in settlement.

The acquirer has the capability to generate reversals within the next 72 hours, equivalent to three cut-over cycles. Reversals generated beyond this timeframe will not be validated or processed by NCHL.



#### 5.3.4.1 Acquirer Generated Reversal Message Flow [0420 / 0430]



![Example Image](/img/figreversal15.png)
<p align="center" class="centered-caption"></p>


Figure 15: 0420/0430 Reversal message flow


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>
      The Merchant/Acquirer/ATM Network generates and forwards the 0420 Reversal Advice Message to NCHL due to reasons as:
      <ul>
        <li>The acquirer experienced a timeout/ late response from NCHL, despite NCHL sending a response within the expected timeframe.</li>
        <li>A network issue arose between NCHL and the acquirer after NCHL had already sent the response.</li>
        <li>A network issue between the acquirer and the terminal.</li>
        <li>Hardware issue in the terminal for completing the transaction.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL responds with the 0430 Reversal Advice Message Response to the Merchant/Acquirer/ATM Network.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>NCHL stores and forwards the 0420 Reversal Advice Message to the Issuer.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>The Issuer responds with the 0430 Reversal Advice Message Response to NCHL.</td>
  </tr>
</table>


**Note**:Reversal advice message may be stored and forwarded by NCHL at a later time, resulting in sending the Message immediately or at some later time.


#### 5.3.4.1.1 Reversal Message Flow [0420 / 0430] due to Acquirer Unable to Process

![Example Image](/img/FIG16.jpg)
<p align="center" class="centered-caption"></p>

Figure 16: Acquirer generated Reversal message flow: Acquirer Unable to Process

<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Acquirer sends the 0100/0200 Transaction Request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL receives the 0100/0200 Transaction Request and routes it to the Issuer for Authorization.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Issuer accepts or declines the 0100/0200 Transaction Request, creates the 0110/0210 Response, and sends the response to NCHL.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>NCHL responds to the 0100/0200 Transaction Request with the 0110/0210 Response.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>
      The Acquirer unable to process the transaction or could not able to send the response to terminal. Then Acquirer creates the 0420 Reversal Advice Message, if the 0100/0200 Transaction Request was approved, and stores and forwards the Reversal Advice Message to NCHL.
    </td>
  </tr>
  <tr>
    <td>6</td>
    <td>NCHL responds with a 0430 Reversal Advice Message Response to the Acquirer.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>NCHL stores and forwards the 0420 Reversal Advice Message to the Issuer.</td>
  </tr>
  <tr>
    <td>8</td>
    <td>The Issuer responds with the 0430 Reversal Advice Message Response to NCHL.</td>
  </tr>
</table>



**Note**:Reversal advice message may be stored and forwarded by NCHL at a later time, resulting in sending the Message immediately or at some later time.

#### 5.3.4.1.2 Reversal Message Flow [0420 / 0430] due to NCHL Late Good Response to Acquirer 



![Example Image](/img/FIG17.jpg)
<p align="center" class="centered-caption"></p>

Figure 17: Acquirer generated Reversal message flow: NCHL Late Good Response to Acquirer


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Acquirer sends the 0100/0200 Transaction Request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL receives the 0100/0200 Transaction Request and routes it to the Issuer for Authorization.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Issuer accepts or declines the 0100/0200 Transaction Request, creates the 0110/0210 Transaction Response, and sends the response to NCHL.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>
      NCHL does not respond to the 0100/0200 Transaction Request with the 0110/0210 Transaction Response in a pre-determined time period. The Acquirer declines the Transaction, but then receives a delayed 0110/0210 Transaction Response from NCHL.
    </td>
  </tr>
  <tr>
    <td>5</td>
    <td>
      The Acquirer generates the 0420 Reversal Advice Message, if the 0100/0200 Transaction Request was having timed-out or late good response, and forwards the Reversal Advice Message to NCHL.
    </td>
  </tr>
  <tr>
    <td>6</td>
    <td>NCHL responds with a 0430 Reversal Advice Message Response to the Acquirer.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>NCHL stores and forwards the 0420 Reversal Advice Message to the Issuer.</td>
  </tr>
  <tr>
    <td>8</td>
    <td>The Issuer responds with the 0430 Reversal Advice Message Response to NCHL.</td>
  </tr>
</table>


**Note**:Reversal advice message may be stored and forwarded by NCHL at a later time, resulting in sending the Message immediately or at some later time.


#### 5.3.4.1.3 Reversal Message Flow [0420 / 0430] due to Terminal Failure 



![Example Image](/img/FIG18.jpg)
<p align="center" class="centered-caption"></p>

Figure 18: Acquirer generated Reversal message flow: Terminal Failure


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Acquirer sends the 0100/0200 Transaction Request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL receives the 0100/0200 Transaction Request and routes it to the Issuer for Authorization.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Issuer accepts or declines the 0100/0200 Transaction Request, creates the 0110/0210 Transaction Response, and sends the response to NCHL.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>NCHL responds to the 0100/0200 Transaction Request with the good 0110/0210 Transaction Response.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>The Acquirer declines the Transaction due to a hardware failure of the terminal. The Acquirer generates the 0420 Reversal Advice Message and forwards the Reversal Advice Message to NCHL.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>NCHL responds with a 0430 Reversal Advice Message Response to the Acquirer.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>NCHL stores and forwards the 0420 Reversal Advice Message to the Issuer.</td>
  </tr>
  <tr>
    <td>8</td>
    <td>The Issuer responds with the 0430 Reversal Advice Message Response to NCHL.</td>
  </tr>
</table>




**Note**:Reversal advice message may be stored and forwarded by NCHL at a later time, resulting in sending the Message immediately or at some later time.



#### 5.3.4.2 NCHL Generated Reversal Message Flow [0420 / 0430]


![Example Image](/img/FIG19.jpg)
<p align="center" class="centered-caption"></p>

Figure 19: NCHL Generated Reversal Message Flow


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Acquirer sends the 0100/0200 Transaction Request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL receives the 0100/0200 Transaction Request and routes it to the Issuer for Authorization.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Issuer responds to the 0100/0200 Transaction with the 0110/0210 Transaction Response to NCHL.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>NCHL found timeout or message validation fails in the 0110/0210 response, responds 0110/0210 message to acquirer with appropriate error code.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>NCHL generates and sends the 0420 Reversal Advice Message to the Issuer in case of late good response or failing validation of the response message.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>The Issuer responds with the 0430 Reversal Advice Message Response to NCHL.</td>
  </tr>
</table>



**Note**:Reversal advice message may be stored and forwarded by NCHL at a later time, resulting in sending the Message immediately or at some later time.


##### 5.3.4.2.1 NCHL Generated Reversal Message Flow [0420 / 0430] due to Message Validation




![Example Image](/img/fig20.png)
<p align="center" class="centered-caption"></p>
Figure 20: NCHL generated Reversal message flow: Message Validation

<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Acquirer sends the 0100/0200 Transaction Request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL receives the 0100/0200 Transaction Request and routes it to the Issuer for Authorization.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Issuer responds to the 0100/0200 Transaction with the 0110/0210 Transaction Response.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>NCHL validates the response message 0110/0210 and identifies an invalid message, then NCHL responds acquirer with error response code.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>NCHL generates and sends the 0420 Reversal Advice Message to the Issuer.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>The Issuer responds with the 0430 Reversal Advice Message Response to NCHL.</td>
  </tr>
</table>



**Note**:Reversal advice message may be stored and forwarded by NCHL at a later time, resulting in sending the Message immediately or at some later time.


##### 5.3.4.2.2 NCHL Generated Reversal Message Flow [0420 / 0430] due to Issuer Late good Response to NCHL




![Example Image](/img/fig21.png)
<p align="center" class="centered-caption"></p>


Figure 21: NCHL generated Reversal message flow: Issuer Late Good Response to NCHL



<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Acquirer sends the 0100/0200 Transaction Request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL receives the 0100/0200 Transaction Request and routes it to the Issuer for Authorization.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Issuer does not respond to the 0100/0200 Transaction with the 0110/0210 Transaction Response in a pre-determined time period. NCHL creates the declined 0110/0210 Transaction Response, and sends the response to the Acquirer.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>NCHL receives a delayed 0110/0210 Transaction Response from the Issuer.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>NCHL generates and sends the 0420 Reversal Advice Message to the Issuer, if the Issuer was not responded or responded 0110/0210 with late good response.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>The Issuer responds with the 0430 Reversal Advice Message Response to NCHL.</td>
  </tr>
</table>




**Note**:Reversal advice message may be stored and forwarded by NCHL at a later time, resulting in sending the Message immediately or at some later time.

##### 5.3.4.2.3 NCHL Generated Reversal Message Flow [0420 / 0430] due to NCHL processing error



![Example Image](/img/fig22.png)
<p align="center" class="centered-caption"></p>

Figure 22: NCHL generated Reversal message flow: NCHL processing error

<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Acquirer sends the 0100/0200 Transaction Request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL receives the 0100/0200 Transaction Request and routes it to the Issuer for Authorization.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Issuer responds to the 0100/0200 Transaction with the 0110/0210 Transaction Response.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>NCHL is unable to process the response 0110/0210 properly, then NCHL responds acquirer with error response code.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>NCHL generates and sends the 0420 Reversal Advice Message to the Issuer.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>The Issuer responds with the 0430 Reversal Advice Message Response to NCHL.</td>
  </tr>
</table>



**Note**:Reversal advice message may be stored and forwarded by NCHL at a later time, resulting in sending the Message immediately or at some later time.


#### 5.3.4.4  Merchant Refunds and VOID Through Reversal

In the scenario where an acquirer initiates an authorization request (0100) and receives an approved authorization response (0110) with valid DE-38 and DE-39, but the customer cancels the transaction by voiding it at the POS terminal, the acquirer subsequently sends a reversal with DE-39 = '17' to NCHL.




![Example Image](/img/fig23.png)
<p align="center" class="centered-caption"></p>


Figure 23: Merchant Refund and VOID Through Reversal Message Flow


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Acquirer/ATM Network sends the 0100 Authorization Transaction Request to NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL receives the 0100 Authorization Transaction Request and routes it to the Issuer for Authorization.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Issuer responds to the 0100 Authorization Transaction with the 0110 Authorization Transaction Response to NCHL.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>NCHL responds the 0110 authorization response message to acquirer.</td>
  </tr>
  <tr>
    <td>5</td>
    <td>In response to a merchant's request for a customer refund or void, the merchant acquirer reverses the original transaction. The merchant acquirer formats a 0420 Reversal Advice message, as necessary, with specified field values to indicate the reason for the reversal. DE-39 = ‘17’</td>
  </tr>
  <tr>
    <td>6</td>
    <td>NCHL stores and forwards the 0420 Reversal Advice Message to the Issuer.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>The Issuer responds with the 0430 Reversal Advice Message Response to NCHL.</td>
  </tr>
  <tr>
    <td>8</td>
    <td>NCHL responds with the 0430 Reversal Advice Message Response to the Acquirer.</td>
  </tr>
</table>





**Note**:Reversal advice message may be stored and forwarded by NCHL at a later time, resulting in sending the Message immediately or at some later time.

### 5.3.5 Network Management Message Flows [0800 / 0810]
This message is used to communicate participating members with the NCHL. These messages can be initiated either by members or by NCHL. These messages are used to communicate that the member is available for processing transactions.


#### 5.3.5.1 0800/0810 Network Management Message Flow: Echo Message


Echo-test messages are network management messages used to establish whether a member is available for message processing. They can be sent from or to a Member as 0800 messages and require 0810 messages in response. Echo-test messages are distinguished by a value of 301 in data element 70 (Network Management Information Code). Echo-test messages are sent based on a pre-configured time interval. 
When NCHL sends an Echo-test message, a timer is set to wait for a response. If the timer expires before NCHL receives the response, NCHL will attempt the Echo-test message three more times and if they all timeout then it will change the status of the corresponding Member to unavailable or DOWN. NCHL will not send any messages except for Echo-test messages until the member confirms the echo message with response code “00”. Then Logon message is required to change the status of the corresponding Member to available or UP.



![Example Image](/img/fig24.png)
<p align="center" class="centered-caption"></p>


Figure 24: 0800/0810 Network Management - Echo message flow


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>NCHL generates a 0800 Network Management Request, Echo-test and sends it to the Member with Network Management Code set to - "301". This tells the Member that NCHL is available over that link.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>The Member responds with a 0810 Network Management Request Response message with Response Code set to - “00”. There is no need to log the Echo-test message at the Member side.</td>
  </tr>
</table>





**Note**:Similarly, member can originate and send the Network Management – Echo message to NCHL as per their pre-defined interval. Echo messages must be sent before logon messages are exchanged.


#### 5.3.5.2 0800/0810 Network Management Message Flow: Logon Message

Logon or Signon messages are network management messages used to initiate communications access between the NPS-NCS and Member’s switch. They are sent as 0800 messages and require 0810 messages in response. Logon messages are distinguished by a value of 001 (sign-on) in data element 70 (Network Management Information Code).
The Logon message is essential in scenarios where a Member is: initially enrolled, or if a prior Logoff has occurred and need logon, or if physical connection between NCHL and member was down and is up. After the successful Logon message, NPS-NCS defines the status of the Member’s link as being UP and is ready to start processing transactions. 



![Example Image](/img/fig25.png)
<p align="center" class="centered-caption"></p>


Figure 25: 0800/0810 Network Management - Logon message flow


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The member generates a 0800 Network Management Request, Logon and sends it to the NCHL with Network Management Code set to - "001".</td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL responds with a 0810 Network Management Request Response message with Response Code set to - “00”. Then brings the status of the Member’s link as being UP.</td>
  </tr>
</table>
 

**Note**:Similarly, NCHL can originate and send the Network Management – Logon message to member. NCHL or member shall initiate the logon message under following conditions.

•	If physical link is broken due from member’s side, its member’s responsibility to initiate logon message.

•	If physical link is broken due from NCHL side, its NCHL’s responsibility to initiate logon message.

#### 5.3.5.3 0800/0810 Network Management Message Flow: Logoff Message


Logoff messages are used to shut down a communication line between the NPS-NCS and member’s switch. All traffic on the line shall be completed before the line is shut down. They are sent as 0800 messages and require 0810 messages in response. Logoff messages are distinguished by a value of 002 (sign-off) in data element 70 (Network Management Information Code).
Occasionally, it may be necessary for NCHL to cut off communications with a Member. The logoff message feature is a method of indicating to the Member that NCHL will not be processing any transactions.



![Example Image](/img/fig26.png)
<p align="center" class="centered-caption"></p>

Figure 26: 0800/0810 Network Management - Logoff message flow


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>NCHL generates a 0800 Network Management Request, Logoff and sends it to the Member with Network Management Code set to - "002".</td>
  </tr>
  <tr>
    <td>2</td>
    <td>The Member responds with a 0810 Network Management Request Response message with Response Code set to - “00”.</td>
  </tr>
</table>



**Note**:Similarly, member can originate and send the Network Management – Logoff message to NCHL when it is necessary to cut off the communications with NCHL. This indicates to NCHL that the Member will not be processing any more transactions.


#### 5.3.5.4 0800/0810 Network Management Message Flow: Cutover Message

It provides a mechanism for NCHL to inform all Banks that the transactions that they receive from this point on will be applied to a new business day or settlement date. It must be noted that NCHL’s settlement date will apply for all transaction settlement between NCHL and Members regardless of the Member bank’s capture date. NCHL will issue cutover message (0800 message with net code=201 in DE-70) at defined hour indicating a business date change for both SMS & DMS transactions, NCHL cut off time indicates the new settlement date is considered for transactions after cutover for SMS transactions.


![Example Image](/img/fig27.png)
<p align="center" class="centered-caption"></p>

Figure 27: 0800/0810 Network Management - Cutoff message flow


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>NCHL generates a 0800 Network Management Request, Cutover and sends it to the Member with Network Management Code set to - "201". The commencement of the NPS-NCS new business day is indicated by the Settlement Date (DE - 15), signifying that all subsequent transactions between NCHL and Members should exclusively pertain to the refreshed NCHL business day.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>The Member responds with a 0810 Network Management Request Response message with Response Code set to - “00” indicating receipt and acknowledgment of the change of business day.</td>
  </tr>
</table>


#### 5.3.5.5 0800/0810 Network Management Message Flow: NCHL Initiated Key Exchange Message

Key exchange is a service that enables member banks to change working keys that are used to protect cardholder PINs via online messages. To utilize this service, members shall obtain a Zone Master Key (ZMK). A ZMK is a key exchange key. Members use a ZMK for encrypting the working key when they convey it in an online message. A ZMK is used to protect a Zonal Pin Key (ZPK). ZPK is different for both an issuer and an acquirer. Whether functioning as an issuer or an acquirer, each member will utilize a singular ZPK. There are two types of PIN encryption keys: Acquirer ZPKs and Issuer ZPKs. NCHL and an acquirer would share one ZPK and NCHL and issuer would share another ZPK. Acquirers use their ZPK to encrypt the PIN while sending a message to NCHL. NCHL uses the issuer ZPK to encrypt the PIN when it sends the message to the issuer.

The key exchange service makes it practically convenient to change PIN encryption keys frequently, thereby increasing the security of the payment system and reducing the chances of key compromise. The key exchange message could be initiated from NCHL side as well as from Member’s side. 



![Example Image](/img/fig28.png)
<p align="center" class="centered-caption"></p>
Figure 28: 0800/0810 Network Management – NCHL Initiated Key Exchange message flow


<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>When NCHL identifies the need for a key change in response to threshold limit breaches or expired timers for a specific member, it initiates the process by composing a Network Management Request message (0800). The message is then sent to the member, containing predefined field values:
      <ul>
        <li>Network Management Code set to - "162"</li>
        <li>Additional Data 1 (DE-48) – formatted with the new key information</li>
      </ul>
      NCHL generates the new key by requesting a Zonal Pin Key (ZPK) generation from the Host Security Module (HSM) connected to NPS-NCS.
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>Upon receipt of the 0800 Network Management Request Message, the Member identifies it as a key change request. Following a thorough validation, the Member's switch initiates a request to the Member Host Security Module. NCHL receives the 0810 Network Management Request Response from the Member and determines that a Response Code value “00” was received indicating successful completion of the key exchange.</td>
  </tr>
</table>


**Note**:For key exchange request initiated by NCHL, the success of a message is contingent upon a Member providing a response within the timeframe specified by NCHL. If the timer expires before NCHL receives the response or if the original message encounters failure, NCHL automatically discards the 0800 message.
Only NCHL may initiate the key exchange message based on:

1.	After a specific time interval. 

2.	In case NCHL detects a cryptographic error. 


#### 5.3.5.6 0800/0810 Network Management Message Flow: Member Initiated Key Exchange Message

In cases where a Member encounters HSM problems or key synchronization issues, there is an option to request a dynamic key exchange for recovery. This can be accomplished by initiating a dynamic key exchange request to NCHL as per details provided below.



![Example Image](/img/fig29.png)
<p align="center" class="centered-caption"></p>

Figure 29: 0800/0810 Network Management – Member Initiated Key Exchange message flow

<table border="1">
  <tr>
    <th>Sequence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The Member initiates a new key request message (0800) for recovery purpose or for any ad-hoc reason, containing predefined field values:
      <ul>
        <li>Network Management Code set to - "161"</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>NCHL responds with a 0810 Network Management Request Response message with Response Code set to - “00” with DE-70 = “161”.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>NCHL then generates a new key and initiates a key exchange request message (0800) containing predefined field values:
      <ul>
        <li>Network Management Code set to - "162"</li>
        <li>Additional Data 1 (DE-48) – formatted with the new key information</li>
      </ul>
      NCHK generates the new key by requesting a Zonal Pin Key (ZPK) generation from the Host Security Module (HSM) connected to NPS-NCS.
    </td>
  </tr>
  <tr>
    <td>4</td>
    <td>Upon receipt of the 0800 Network Management Request Message, the Member identifies it as a key change request. Following a thorough validation, the Member's switch initiates a request to the Member Host Security Module. NCHL receives the 0810 Network Management Request Response from the Member and determines that a Response Code value “00” was received indicating successful completion of the key exchange.</td>
  </tr>
</table>


**Note**:Member bank can initiate key exchange request either on ad hoc basis or after facing some key related issues. Once the new key request from the member bank is accepted, NCHL will initiate key exchange message. 



## 5.4 Message Format Notations

Following are the symbols used in different message formats.



<table border="1">
  <tr>
    <th>Abbreviation</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>M</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>M+</td>
    <td>Mandatory, Echoed from the request</td>
  </tr>
  <tr>
    <td>C</td>
    <td>Conditional</td>
  </tr>
  <tr>
    <td>C+</td>
    <td>Conditional, Echoed from request</td>
  </tr>
  <tr>
    <td>C*</td>
    <td>Conditional, value changed by NCHL</td>
  </tr>
  <tr>
    <td>O</td>
    <td>Optional</td>
  </tr>
  <tr>
    <td>O+</td>
    <td>Optional, Echoed from request</td>
  </tr>
  <tr>
    <td>--</td>
    <td>Not required</td>
  </tr>
  <tr>
    <td>A</td>
    <td>Alphabetical</td>
  </tr>
  <tr>
    <td>B</td>
    <td>Binary data</td>
  </tr>
  <tr>
    <td>N</td>
    <td>Numeric value</td>
  </tr>
  <tr>
    <td>S</td>
    <td>Special character</td>
  </tr>
  <tr>
    <td>X</td>
    <td>Character C / D to indicate credit / debit</td>
  </tr>
  <tr>
    <td>Z</td>
    <td>Track data</td>
  </tr>
  <tr>
    <td>AN</td>
    <td>Alphanumeric</td>
  </tr>
  <tr>
    <td>ANS</td>
    <td>Alphanumeric with special characters</td>
  </tr>
  <tr>
    <td>LL</td>
    <td>Followed by the variable length value of data element, from 01 to 99</td>
  </tr>
  <tr>
    <td>LLL</td>
    <td>Followed by the variable length value of data element, from 001 to 999</td>
  </tr>
  <tr>
    <td>VAR</td>
    <td>Data element with variable length</td>
  </tr>
</table>



Table 9: Notation used in message format



## 5.5 Message Format
### 5.5.1 POS Purchase

The table below describes POS purchase message.

<table border="1">
  <tr>
    <th>DE Field</th>
    <th>Description</th>
    <th>0100 (Acquirer ➜ NCHL)</th>
    <th>0110 (NCHL ➜ Acquirer)</th>
    <th>0100 (NCHL ➜ Issuer)</th>
    <th>0110 (Issuer ➜ NCHL)</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Secondary bit map</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Primary Account Number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Processing Code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Amount, Transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Amount, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Amount, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Date/time transmission</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Conversion rate, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Conversion rate, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>11</td>
    <td>System trace audit number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Time, local transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Date, local transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>14</td>
    <td>Date, expiry</td>
    <td>C</td>
    <td>--</td>
    <td>C</td>
    <td>--</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Date, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Date, conversion</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>18</td>
    <td>Merchant category code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>19</td>
    <td>Acquiring institution country code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M</td>
   </tr>
<tr>
    <td>22</td>
    <td>POS entry mode</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>23</td>
    <td>Card sequence number</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>25</td>
    <td>POS condition code</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>28</td>
    <td>Amount, Fee</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>29</td>
    <td>Amount, Fee</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>32</td>
    <td>Acquiring institution code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>33</td>
    <td>Forwarding institution code</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>35</td>
    <td>Track 2 data</td>
    <td>C</td>
    <td>--</td>
    <td>C</td>
    <td>--</td>
  </tr>
  <tr>
    <td>37</td>
    <td>Retrieval reference number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>38</td>
    <td>Authorization code</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
  </tr>
  <tr>
    <td>39</td>
    <td>Response code</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
  </tr>
  <tr>
    <td>41</td>
    <td>Card acceptor terminal ID</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>42</td>
    <td>Card acceptor ID</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>43</td>
    <td>Card acceptor name / location</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>44</td>
    <td>Additional Response Data</td>
    <td>--</td>
    <td>C</td>
    <td>--</td>
    <td>C</td>
  </tr>
  <tr>
    <td>45</td>
    <td>Track 1 data</td>
    <td>C</td>
    <td>--</td>
    <td>C</td>
    <td>--</td>
  </tr>
  <tr>
    <td>48</td>
    <td>Additional Data 1</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>50</td>
    <td>Currency code, settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>51</td>
    <td>Currency code, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>52</td>
    <td>PIN data</td>
    <td>C</td>
    <td>--</td>
    <td>C</td>
    <td>--</td>
  </tr>
  <tr>
    <td>54</td>
    <td>Additional Amounts</td>
    <td>--</td>
    <td>O</td>
    <td>--</td>
    <td>O</td>
  </tr>
  <tr>
    <td>55</td>
    <td>Chip data</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>56</td>
    <td>Customer Related Data</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>61</td>
    <td>POS Data</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>102</td>
    <td>Account Identification 1</td>
    <td>O</td>
    <td>O</td>
    <td>O</td>
    <td>O</td>
  </tr>

</table>



Table 10: POS Purchase Message

###  5.5.2 POS Purchase Reversal

The table below describes POS purchase Reversal message.



<table border="1">
  <tr>
    <th>DE Field</th>
    <th>Description</th>
    <th>0420 (Acquirer ➜ NCHL)</th>
    <th>0430 (NCHL ➜ Acquirer)</th>
    <th>0420 (NCHL ➜ Issuer)</th>
    <th>0430 (Issuer ➜ NCHL)</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Secondary bit map</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Primary Account Number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Processing Code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Amount, Transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Amount, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Amount, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Date/time transmission</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Conversion rate, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Conversion rate, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>11</td>
    <td>System trace audit number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Time, local transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Date, local transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Date, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Date, conversion</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>18</td>
    <td>Merchant category code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>19</td>
    <td>Acquiring institution country code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>22</td>
    <td>POS entry mode</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
   <tr>
    <td>23</td>
    <td>Card sequence number</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>25</td>
    <td>POS condition code</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>28</td>
    <td>Amount, Fee</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>29</td>
    <td>Amount, Fee</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>32</td>
    <td>Acquiring institution code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>33</td>
    <td>Forwarding institution code</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>37</td>
    <td>Retrieval reference number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>38</td>
    <td>Authorization code</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
  </tr>
  <tr>
    <td>39</td>
    <td>Response code</td>
    <td>M</td>
    <td>M</td>
    <td>M</td>
    <td>M</td>
  </tr>
  <tr>
    <td>41</td>
    <td>Card acceptor terminal ID</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>42</td>
    <td>Card acceptor ID</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>43</td>
    <td>Card acceptor name / location</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>44</td>
    <td>Additional Response Data</td>
    <td>--</td>
    <td>C</td>
    <td>--</td>
    <td>--</td>
  </tr>
  <tr>
    <td>48</td>
    <td>Additional Data 1</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>49</td>
    <td>Currency code, transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>50</td>
    <td>Currency code, settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
   <tr>
    <td>51</td>
    <td>Currency code, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>54</td>
    <td>Additional Amounts</td>
    <td>--</td>
    <td>O</td>
    <td>--</td>
    <td>O</td>
  </tr>
  <tr>
    <td>55</td>
    <td>Chip data</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>56</td>
    <td>Customer Related Data</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>61</td>
    <td>POS Data</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>90</td>
    <td>Original Data Element</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>102</td>
    <td>Account Identification 1</td>
    <td>O</td>
    <td>O</td>
    <td>O</td>
    <td>O</td>
  </tr>
</table>


Table 11: POS Purchase Reversal Message


### 5.5.3 VOID / Cancellation

The table below describes VOID / Cancellation message.


<table border="1">
  <tr>
    <th>DE Field</th>
    <th>Description</th>
    <th>0420 (Acquirer ➜ NCHL)</th>
    <th>0430 (NCHL ➜ Acquirer)</th>
    <th>0420 (NCHL ➜ Issuer)</th>
    <th>0430 (Issuer ➜ NCHL)</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Secondary bit map</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Primary Account Number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Processing Code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Amount, Transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Amount, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Amount, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Date/time transmission</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Conversion rate, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Conversion rate, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>11</td>
    <td>System trace audit number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Time, local transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Date, local transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Date, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Date, conversion</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>18</td>
    <td>Merchant category code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>19</td>
    <td>Acquiring institution country code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
 <tr>
    <td>22</td>
    <td>POS entry mode</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>23</td>
    <td>Card sequence number</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>25</td>
    <td>POS condition code</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>28</td>
    <td>Amount, Fee</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>29</td>
    <td>Amount, Fee</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>32</td>
    <td>Acquiring institution code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>33</td>
    <td>Forwarding institution code</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>37</td>
    <td>Retrieval reference number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>38</td>
    <td>Authorization code</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
  </tr>
  <tr>
    <td>39</td>
    <td>Response code</td>
    <td>M</td>
    <td>M</td>
    <td>M</td>
    <td>M</td>
  </tr>
  <tr>
    <td>41</td>
    <td>Card acceptor terminal ID</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>42</td>
    <td>Card acceptor ID</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>43</td>
    <td>Card acceptor name / location</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>44</td>
    <td>Additional Response Data</td>
    <td>--</td>
    <td>C</td>
    <td>--</td>
    <td>C</td>
  </tr>
  <tr>
    <td>48</td>
    <td>Additional Data 1</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>49</td>
    <td>Currency code, transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>50</td>
    <td>Currency code, settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>51</td>
    <td>Currency code, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
<tr>
    <td>54</td>
    <td>Additional Amounts</td>
    <td>--</td>
    <td>O</td>
    <td>--</td>
    <td>O</td>
  </tr>
  <tr>
    <td>55</td>
    <td>Chip data</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>56</td>
    <td>Customer Related Data</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>61</td>
    <td>POS Data</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>90</td>
    <td>Original Data Element</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>102</td>
    <td>Account Identification 1</td>
    <td>O</td>
    <td>O</td>
    <td>O</td>
    <td>O</td>
  </tr>
</table>



Table 12: VOID Message


### 5.5.4 Refund

The table below describes Refund message.


<table border="1">
  <tr>
    <th>DE Field</th>
    <th>Description</th>
    <th>0120 (Acquirer ➜ NCHL)</th>
    <th>0130 (NCHL ➜ Acquirer)</th>
    <th>0120 (NCHL ➜ Issuer)</th>
    <th>0130 (Issuer ➜ NCHL)</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Secondary bit map</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Primary Account Number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Processing Code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Amount, Transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Amount, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Amount, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Date/time transmission</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Conversion rate, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Conversion rate, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>11</td>
    <td>System trace audit number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Time, local transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Date, local transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Date, Settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Date, conversion</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>18</td>
    <td>Merchant category code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>19</td>
    <td>Acquiring institution country code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
   <tr>
    <td>22</td>
    <td>POS entry mode</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>23</td>
    <td>Card sequence number</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>25</td>
    <td>POS condition code</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>28</td>
    <td>Amount, Fee</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>29</td>
    <td>Amount, Fee</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>32</td>
    <td>Acquiring institution code</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>33</td>
    <td>Forwarding institution code</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>37</td>
    <td>Retrieval reference number</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>38</td>
    <td>Authorization code</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
  </tr>
   
  <tr>
    <td>39</td>
    <td>Response code</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
  </tr>
  <tr>
    <td>41</td>
    <td>Card acceptor terminal ID</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>42</td>
    <td>Card acceptor ID</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>43</td>
    <td>Card acceptor name / location</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>44</td>
    <td>Additional Response Data</td>
    <td>--</td>
    <td>C</td>
    <td>--</td>
    <td>C</td>
  </tr>
  <tr>
    <td>48</td>
    <td>Additional Data 1</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>49</td>
    <td>Currency code, transaction</td>
    <td>M</td>
    <td>M+</td>
    <td>M</td>
    <td>M+</td>
  </tr>
  <tr>
    <td>50</td>
    <td>Currency code, settlement</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>51</td>
    <td>Currency code, card holder billing</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>54</td>
    <td>Additional Amounts</td>
    <td>--</td>
    <td>O</td>
    <td>--</td>
    <td>O</td>
  </tr>
  <tr>
    <td>55</td>
    <td>Chip data</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
    <td>C</td>
  </tr>
  <tr>
    <td>56</td>
    <td>Customer Related Data</td>
    <td>C</td>
    <td>C+</td>
    <td>C</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>61</td>
    <td>POS Data</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>90</td>
    <td>Original Data Element</td>
    <td>M</td>
    <td>--</td>
    <td>M</td>
    <td>--</td>
  </tr>
  <tr>
    <td>102</td>
    <td>Account Identification 1</td>
    <td>O</td>
    <td>O</td>
    <td>O</td>
    <td>O</td>
  </tr>
</table>



Table 13: Refund Message



### 5.5.5 Preauthorization
The table below describes Preauthorization message.

<table>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100 (Acquirer ➡ NCHL)</th>
      <th>0110 (NCHL ➡ Acquirer)</th>
      <th>0100 (NCHL ➡ Issuer)</th>
      <th>0110 (Issuer ➡ NCHL)</th>
    </tr>
	<tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
	<tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	<tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
	<tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Additional Amounts</td>
      <td>--</td>
      <td>O</td>
      <td>--</td>
      <td>O</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
	</tbody>
	</table>
	

Table 14: Preauthorization Message


### 5.5.6 Preauthorization Reversal

The table below describes Preauthorization Reversal message.

<table>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0420 (Acquirer ➡ NCHL)</th>
      <th>0430 (NCHL ➡ Acquirer)</th>
      <th>0420 (NCHL ➡ Issuer)</th>
      <th>0430 (Issuer ➡ NCHL)</th>
    </tr>
	<tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
	<tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Additional Amounts</td>
      <td>--</td>
      <td>O</td>
      <td>--</td>
      <td>O</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>90</td>
      <td>Original Data Element</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
	</tbody>
	</table>
	
	

Table 15: Preauthorization Reversal Message

### 5.5.7 Preauthorization Cancellation

The table below describes Preauthorization Cancellation message.

<table>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0420 (Acquirer ➡ NCHL)</th>
      <th>0430 (NCHL ➡ Acquirer)</th>
      <th>0420 (NCHL ➡ Issuer)</th>
      <th>0430 (Issuer ➡ NCHL)</th>
    </tr>
	<tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	 <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
	<tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Additional Amounts</td>
      <td>--</td>
      <td>O</td>
      <td>--</td>
      <td>O</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>90</td>
      <td>Original Data Element</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
	</tbody>
	</table>
	
	

Table 16: Preauthorization Cancellation Message


### 5.5.8 Preauthorization Completion

The table below describes Preauthorization Completion message.


<table>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100 (Acquirer ➡ NCHL)</th>
      <th>0110 (NCHL ➡ Acquirer)</th>
      <th>0100 (NCHL ➡ Issuer)</th>
      <th>0110 (Issuer ➡ NCHL)</th>
    </tr>
	<tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	<tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Additional Amounts</td>
      <td>--</td>
      <td>O</td>
      <td>--</td>
      <td>O</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
	</tbody>
  </table>
	
	

Table 17: Preauthorization Completion Message


### 5.5.9 Purchase with Cashback

The table below describes Purchase with Cashback message.

<table>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100 (Acquirer ➝ NCHL)</th>
      <th>0110 (NCHL ➝ Acquirer)</th>
      <th>0100 (NCHL ➝ Issuer)</th>
      <th>0110 (Issuer ➝ NCHL)</th>
    </tr>
	<tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
	<tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
	<tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Additional Amounts (Cashback)</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
	</tbody>
	</table>

Table 18: Purchase with Cashback Message

### 5.5.10 Purchase with TIP (Gratuity)

The table below describes Purchase with TIP message.


<table>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100</th>
      <th>0110</th>
      <th>0100</th>
      <th>0110</th>
    </tr>
	<tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Additional Amounts (Tips)</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
	</tbody>
  </table>
	

Table 19: Purchase with TIP (Gratuity) Message

###  5.5.11 Balance Inquiry

The table below describes Balance Inquiry message.

 <table>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100/0200</th>
      <th>0110/0210</th>
      <th>0100/0200</th>
      <th>0110/0210</th>
    </tr>
	<tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
	<tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
	<tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Additional Amounts</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
	</tbody>
  </table>

Table 20: Balance Inquiry Message


### 5.5.12 Cash Withdrawal/ Fast Cash - ATM

The table below describes Cash Withdrawal / Fast Cash - ATM message.


<table>
<tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0200</th>
      <th>0210</th>
    </tr>
	<tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	<tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
    </tr>
	 <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Additional Amounts</td>
      <td>--</td>
      <td>O</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
    </tr>
	</tbody>
  </table>

Table 21: Cash Withdrawal/ Fast Cash - ATM Message

### 5.5.13 Mini Statement

The table below describes Mini Statement message.

<table>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100/0200</th>
      <th>0110/0210</th>
    </tr>
	<tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
    </tr>
	<tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	<tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Additional Amounts</td>
      <td>--</td>
      <td>O</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>--</td>
      <td>M</td>
    </tr>
	</tbody>
  </table>


Table 22: Mini Statement Message


###  5.5.14 PIN Change


The table below describes PIN Change message.


<table>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100/0200</th>
      <th>0110/0210</th>
    </tr>
	<tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
	<tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C+</td>
      <td>C</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C+</td>
      <td>C</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M+</td>
      <td>M</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C+</td>
      <td>C</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>--</td>
      <td>C</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M+</td>
      <td>M</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
    </tr>
	<tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M+</td>
      <td>M</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M+</td>
      <td>M</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C+</td>
      <td>C</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>--</td>
      <td>C</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C+</td>
      <td>C</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>--</td>
      <td>M</td>
    </tr>
	</tbody>
  </table>
	
	

Table 23: PIN Change Message


###  5.5.15 Reversal – ATM Cash withdrawal/ Fast Cash

The table below describes Reversal – ATM Cash withdrawal/ Fast Cash message.

<table>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0420</th>
      <th>0430</th>
      <th>0420</th>
      <th>0430</th>
    </tr>
	<tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
	<tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
    </tr>
	<tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Additional Amounts</td>
      <td>--</td>
      <td>O</td>
      <td>--</td>
      <td>O</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>90</td>
      <td>Original Data Element</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
	</tbody>
  </table>

Table 24: Reversal – ATM Cash withdrawal/ Fast Cash Message


### 5.5.16 Cheque Book Request

The table below describes Cheque Book Request message.

<table>
<thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0200 (Acquirer ➔ NCHL)</th>
      <th>0210 (NCHL ➔ Acquirer)</th>
      <th>0200 (NCHL ➔ Issuer)</th>
      <th>0210 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	 <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
	 <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
	<tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	</tbody>
  </table>

Table 25: Cheque Book Request Message


### 5.5.17 Statement Request

The table below describes Statement Request message.


  <table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0200 (Acquirer ➔ NCHL)</th>
      <th>0210 (NCHL ➔ Acquirer)</th>
      <th>0200 (NCHL ➔ Issuer)</th>
      <th>0210 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	<tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
</table>

Table 26: Statement Request Message

### 5.5.18 Fund Transfer


####  5.5.18.1 Fund Transfer Debit Leg

 The table below describes Fund Transfer Debit Leg message.

<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0200 (Acquirer ➔ NCHL)</th>
      <th>0210 (NCHL ➔ Acquirer)</th>
      <th>0200 (NCHL ➔ Issuer)</th>
      <th>0210 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	<tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	<tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>103</td>
      <td>Account Identification 2</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
  </tbody>
</table>
	
 Table 27: Fund Transfer Debit Leg Message


#### 5.5.18.2 Fund Transfer Credit Leg

The table below describes Fund Transfer Credit Leg message.


<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0200 (Acquirer ➔ NCHL)</th>
      <th>0210 (NCHL ➔ Acquirer)</th>
      <th>0200 (NCHL ➔ Issuer)</th>
      <th>0210 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
	<tr>
      <td>103</td>
      <td>Account Identification 2</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
  </tbody>
</table>

Table 28: Fund Transfer Credit Leg Message


### 5.5.19 e-commerce Purchase

The table below describes e-commerce Purchase message.


<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100 (Acquirer ➔ NCHL)</th>
      <th>0110 (NCHL ➔ Acquirer)</th>
      <th>0100 (NCHL ➔ Issuer)</th>
      <th>0110 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
	<tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Additional Amounts</td>
      <td>--</td>
      <td>O</td>
      <td>--</td>
      <td>O</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
  </tbody>
</table>
	

Table 29: e-commerce Purchase Message


### 5.5.20 Account Verification

The table below describes Account Verification message.


<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100 (Acquirer ➔ NCHL)</th>
      <th>0110 (NCHL ➔ Acquirer)</th>
      <th>0200 (Acquirer ➔ Issuer)</th>
      <th>0210 (Issuer ➔ Acquirer)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
	<tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>63</td>
      <td>Account Verification Service (AVS)</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
  </tbody>
</table>

Table 30: Account Verification Transaction Message

### 5.5.21 Original Credit Transaction (OCT)

The table below describes Original Credit Transaction (OCT) message.

<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100 (Acquirer ➔ NCHL)</th>
      <th>0110 (NCHL ➔ Acquirer)</th>
      <th>0200 (NCHL ➔ Issuer)</th>
      <th>0210 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
	<tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	<tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>104</td>
      <td>OCT Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
  </tbody>
</table>

Table 31: Original Credit Transaction Message


### 5.5.22 e-commerce Bill Payment

The table below describes e-commerce Bill Payment message.

<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100/0200</th>
      <th>0110/0210</th>
      <th>0100/0200</th>
      <th>0110/0210</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
	<tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	 <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
  </tbody>
</table>
	
	

Table 32: e-commerce Bill Payment Message

### 5.5.23 e-commerce Payment (Government Revenue Payment)

The table below describes e-commerce Payment (Government Revenue Payment) message.

<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100/0200</th>
      <th>0110/0210</th>
      <th>0100/0200</th>
      <th>0110/0210</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
	<tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
  </tbody>
</table>
	

Table 33: e-commerce Payment (Government Revenue Payment) Message

### 5.5.24 e-commerce Payment (Recurring Payment)

The table below describes e-commerce Payment (Recurring Payment) message.


<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100/0200 (Acquirer ➔ NCHL)</th>
      <th>0110/0210 (NCHL ➔ Acquirer)</th>
      <th>0100/0200 (NCHL ➔ Issuer)</th>
      <th>0110/0210 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	<tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
	<tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
  </tbody>
</table>

	

Table 34: e-commerce Payment (Recurring Payment) Message


### 5.5.25 e-commerce Payment (Insurance Payment)

The table below describes e-commerce Payment (Insurance Payment) message.

<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100/0200 (Acquirer ➔ NCHL)</th>
      <th>0110/0210 (NCHL ➔ Acquirer)</th>
      <th>0100/0200 (NCHL ➔ Issuer)</th>
      <th>0110/0210 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
	<tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
	<tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
  </tbody>
</table>

	
Table 35: e-commerce Payment (Insurance Payment) Message


### 5.5.26 e-commerce Payment (EMI Payment)


The table below describes e-commerce Payment (EMI Payment) message.

<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100/0200 (Acquirer ➔ NCHL)</th>
      <th>0110/0210 (NCHL ➔ Acquirer)</th>
      <th>0100/0200 (NCHL ➔ Issuer)</th>
      <th>0110/0210 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
	<tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
	<tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
  </tbody>
</table>


Table 36: e-commerce Payment (Insurance Payment) Message

###  5.5.27 e-commerce Payment (Tax Refund)

The table below describes e-commerce Payment (Tax Refund) message.

<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0100/0200 (Acquirer ➔ NCHL)</th>
      <th>0110/0210 (NCHL ➔ Acquirer)</th>
      <th>0100/0200 (NCHL ➔ Issuer)</th>
      <th>0110/0210 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
	<tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Track 2 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Retrieval reference number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Authorization code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
	<tr>
      <td>41</td>
      <td>Card acceptor terminal ID</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Card acceptor ID</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Card acceptor name / location</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Additional Response Data</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Track 1 data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional Data 1</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Currency code, transaction</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Currency code, settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Currency code, card holder billing</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>52</td>
      <td>PIN data</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Chip data</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Customer Related Data</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>61</td>
      <td>POS Data</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Account Identification 1</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
      <td>O</td>
    </tr>
    <tr>
      <td>120</td>
      <td>Additional Data 2</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
  </tbody>
</table>


Table 37: Tax Refund Message

### 5.5.28 Network Management

#### 5.5.28.1 Network - Echo Message

The table below describes Network echo message.

<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0800 (Acquirer ➔ NCHL)</th>
      <th>0810 (NCHL ➔ Acquirer)</th>
      <th>0800 (NCHL ➔ Issuer)</th>
      <th>0810 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>70</td>
      <td>Network management information code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
  </tbody>
</table>



Table 38: Network - Echo Message

#### 5.5.28.2 Network – Signon/ Logon Message


The table below describes Network Signon/ Logon message.


<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0800 (Acquirer ➔ NCHL)</th>
      <th>0810 (NCHL ➔ Acquirer)</th>
      <th>0800 (NCHL ➔ Issuer)</th>
      <th>0810 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>70</td>
      <td>Network management information code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
  </tbody>
</table>



Table 39: Network – Signon/ Logon Message

#### 5.5.28.3 Network – Signoff/ Logoff Message

The table below describes Network Signoff/ Logoff message.

<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0800 (Acquirer ➔ NCHL)</th>
      <th>0810 (NCHL ➔ Acquirer)</th>
      <th>0800 (NCHL ➔ Issuer)</th>
      <th>0810 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>70</td>
      <td>Network management information code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
  </tbody>
</table>



Table 40: Network – Signoff/ Logoff Message

#### 5.5.28.4 Network – Cutover Message

The table below describes Network Cutover message.

<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0800 (Acquirer ➔ NCHL)</th>
      <th>0810 (NCHL ➔ Acquirer)</th>
      <th>0800 (NCHL ➔ Issuer)</th>
      <th>0810 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>70</td>
      <td>Network management information code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
  </tbody>
</table>


Table 41: Network – Cutover Message

#### 5.5.28.5 Network – Key Exchange Message

The table below describes Network Key Exchange message.



<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0800 (Acquirer ➔ NCHL)</th>
      <th>0810 (NCHL ➔ Acquirer)</th>
      <th>0800 (NCHL ➔ Issuer)</th>
      <th>0810 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
      <td>M</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Response code</td>
      <td>--</td>
      <td>M</td>
      <td>--</td>
      <td>M</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Additional data (Key Exchange)</td>
      <td>C</td>
      <td>--</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>70</td>
      <td>Network management information code</td>
      <td>M</td>
      <td>M+</td>
      <td>M</td>
      <td>M+</td>
    </tr>
  </tbody>
</table>

Table 42: Network – Key Exchange Message

###  5.5.29 STIP Advice Message to Issuer

The table below describes Network Management message.

<table>
  <thead>
    <tr>
      <th>DE Field</th>
      <th>Description</th>
      <th>0120 (NCHL ➔ Issuer)</th>
      <th>0130 (Issuer ➔ NCHL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Secondary bit map</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Primary Account Number</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Processing Code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Amount, Transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Amount, Settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Amount, card holder billing</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Date/time transmission</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Conversion rate, Settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Conversion rate, card holder billing</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>11</td>
      <td>System trace audit number</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Time, local transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Date, local transaction</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Date, expiry</td>
      <td>C</td>
      <td>--</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Date, Settlement</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Date, conversion</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Merchant category code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Acquiring institution country code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>22</td>
      <td>POS entry mode</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Card sequence number</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>25</td>
      <td>POS condition code</td>
      <td>M</td>
      <td>--</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C+</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Amount, Fee</td>
      <td>C</td>
      <td>C</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Acquiring institution code</td>
      <td>M</td>
      <td>M+</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Forwarding institution code</td>
      <td>C</td>
      <td>C+</td>
    </tr>
	<tr>
                <td>35</td>
                <td>Track 2 data</td>
                <td>C</td>
                <td>--</td>
            </tr>
            <tr>
                <td>37</td>
                <td>Retrieval reference number</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>38</td>
                <td>Authorization code</td>
                <td>--</td>
                <td>M</td>
            </tr>
            <tr>
                <td>39</td>
                <td>Response code</td>
                <td>--</td>
                <td>M</td>
            </tr>
            <tr>
                <td>41</td>
                <td>Card acceptor terminal ID</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>42</td>
                <td>Card acceptor ID</td>
                <td>M</td>
                <td>--</td>
            </tr>
            <tr>
                <td>43</td>
                <td>Card acceptor name / location</td>
                <td>M</td>
                <td>--</td>
            </tr>
            <tr>
                <td>48</td>
                <td>Additional Data 1</td>
                <td>M</td>
                <td>--</td>
            </tr>
            <tr>
                <td>49</td>
                <td>Currency code, transaction</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>50</td>
                <td>Currency code, settlement</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>51</td>
                <td>Currency code, card holder billing</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>54</td>
                <td>Additional Amounts</td>
                <td>--</td>
                <td>O</td>
            </tr>
            <tr>
                <td>56</td>
                <td>Customer Related Data</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>61</td>
                <td>POS Data</td>
                <td>M</td>
                <td>--</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Account Identification 1</td>
                <td>O</td>
                <td>O</td>
            </tr>
            <tr>
                <td>120</td>
                <td>Additional Data 2</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>121</td>
                <td>Additional Data 3 (Advice Reason Code)</td>
                <td>C</td>
                <td>C+</td>
            </tr>
        </tbody>
    </table>

Table 43: STIP Advice Message


### 5.5.30 File Update Message

#### 5.5.30.1 Card Add File Update Message

The table below describes File Update message of add card for STIP or VIP purpose.


 <table>
        <thead>
            <tr>
                <th>DE Field</th>
                <th>Description</th>
                <th>0302 (Issuer → NCHL)</th>
                <th>0312 (NCHL → Issuer)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Secondary bit map</td>
                <td>C</td>
                <td>C</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Primary Account Number</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Date/time transmission</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>11</td>
                <td>System trace audit number</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>14</td>
                <td>Date, expiry</td>
                <td>C</td>
                <td>--</td>
            </tr>
            <tr>
                <td>15</td>
                <td>Date, Settlement</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>23</td>
                <td>Card sequence number</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>33</td>
                <td>Forwarding Institution Code</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>37</td>
                <td>Retrieval Reference Number</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>39</td>
                <td>Response code</td>
                <td>--</td>
                <td>M</td>
            </tr>
            <tr>
                <td>91</td>
                <td>File Update Code</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>124</td>
                <td>File Action Code</td>
                <td>--</td>
                <td>C</td>
            </tr>
            <tr>
                <td>125</td>
                <td>File Data Record</td>
                <td>C</td>
                <td>--</td>
            </tr>
        </tbody>
    </table>

Table 44: File Update Message

#### 5.5.30.2 Card Block/ Unblock File Update Message

The table below describes File Update message of Card block and unblock for STIP or VIP purpose.


<table>
        <thead>
            <tr>
                <th>DE Field</th>
                <th>Description</th>
                <th>0302 (Issuer → NCHL)</th>
                <th>0312 (NCHL → Issuer)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Secondary bit map</td>
                <td>C</td>
                <td>C</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Primary Account Number</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Date/time transmission</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>11</td>
                <td>System trace audit number</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>15</td>
                <td>Date, Settlement</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>33</td>
                <td>Forwarding Institution Code</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>37</td>
                <td>Retrieval Reference Number</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>39</td>
                <td>Response code</td>
                <td>--</td>
                <td>M</td>
            </tr>
            <tr>
                <td>91</td>
                <td>File Update Code</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>124</td>
                <td>File Action Code</td>
                <td>--</td>
                <td>C</td>
            </tr>
            <tr>
                <td>125</td>
                <td>File Data Record</td>
                <td>C</td>
                <td>--</td>
            </tr>
        </tbody>
    </table>



Table 45: File Update Message

####  5.5.30.3 PIN Change File Update Message

The table below describes File Update message of PIN change for STIP or VIP purpose.


<table>
        <thead>
            <tr>
                <th>DE Field</th>
                <th>Description</th>
                <th>0302 (Issuer → NCHL)</th>
                <th>0312 (NCHL → Issuer)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Secondary bit map</td>
                <td>C</td>
                <td>C</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Primary Account Number</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Date/time transmission</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>11</td>
                <td>System trace audit number</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>15</td>
                <td>Date, Settlement</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>23</td>
                <td>Card sequence number</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>33</td>
                <td>Forwarding Institution Code</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>37</td>
                <td>Retrieval Reference Number</td>
                <td>M</td>
                <td>M+</td>
            </tr>
            <tr>
                <td>39</td>
                <td>Response code</td>
                <td>--</td>
                <td>M</td>
            </tr>
            <tr>
                <td>91</td>
                <td>File Update Code</td>
                <td>C</td>
                <td>C+</td>
            </tr>
            <tr>
                <td>124</td>
                <td>File Action Code</td>
                <td>--</td>
                <td>C</td>
            </tr>
            <tr>
                <td>125</td>
                <td>File Data Record</td>
                <td>C</td>
                <td>--</td>
            </tr>
        </tbody>
    </table>

Table 46: File Update Message




