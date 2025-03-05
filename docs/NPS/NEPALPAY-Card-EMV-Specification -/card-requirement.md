---
sidebar_position: 3
---


 # 3.	Card Requirements

 ## 3.1	EMV Transaction Flow
The following functions are used in NEPALPAY Card transaction processing as depicted in the following figure. Functions marked as mandatory are performed for all transactions. Functions marked as optional are performed based upon parameters in the card or terminal, or both.


![Example Image](/img/fig1.png)
<p align="center" class="centered-caption"></p>

Figure 1: Fig: EMV Transaction Flow




i)	Application Selection (Mandatory): When a NEPALPAY card is presented to a terminal, the terminal determines which applications are supported by both the card and terminal using either customer selection or priority basis.

ii)	Initiate Application (Mandatory): During Initiate Application, the terminal signals to the card that transaction processing is beginning.


iii)	Read Application Data (Mandatory): During Read Application Data, the terminal reads the card data necessary to process the transaction and determines the data to be authenticated during SDA or DDA.

iv)	Offline Data Authentication (Optional): Offline Data Authentication is the process by which the terminal authenticates data from the card using RSA public key technology with SDA or DDA or CDA (Combined Dynamic Data Authentication) which includes a dynamic signature such as DDA and AC (Application Cryptogram).

v)	Processing Restrictions (Mandatory): The Processing Restrictions function is performed by the terminal using data elements from the terminal and the card. It includes checks on application versions, effective and expiration dates, and conditions at the point of transaction. The terminal also checks whether the application usage control (AUC) restriction are met. The issuer can use AUC to restrict the usage of the card, including domestic or international, cash, commodity, service or cash back. Application Usage Control indicates the Issuer’s specified restrictions on the geographic usage and services allowed for the chip card application.

vi)	Cardholder Verification (Mandatory): Cardholder verification (using a PIN or signature) is used to ensure that the cardholder is legitimate and the card is not lost or stolen. The terminal uses a Card Verification Method (CVM) list from the card to determine the type of verification to be performed. The CVM List establishes a priority for cardholder verification methods, which consider the capabilities of the terminal and characteristics of the transaction to prompt the cardholder for a specific cardholder verification method. If the CVM has an offline PIN, then the terminal prompts the cardholder for a PIN and transmits the cardholder-entered PIN to the card, which compares it to a reference PIN stored secretly in the card. The CVM list can also include an online PIN, signature, or no CVM, which is not required during the transaction.

vii)	Terminal Risk Management (Mandatory): Terminal Risk Management provides issuer authorization for higher-value transactions and ensures that chip-read transactions initiated from cards go online periodically to protect against credit and fraud risks that might be undetectable in an offline environment. Terminal Risk Management will check whether the transaction has exceeded the merchant floor limit, the account number is located in the terminal exception file, the consecutive offline transaction time exceeds the limit, the card is a new card, the merchant prompts to require an online transaction, the transaction is randomly selected to go online, or velocity checking. The terminal will use the chip data in the card to conduct the above checks.

viii)	Terminal Action Analysis (Mandatory): In Terminal Action Analysis, the terminal applies rules set by the issuer in the card and by the payment system in the terminal to the results of offline processing to determine whether the transaction should be approved offline, declined offline, or sent online for an authorization. It uses the results of offline data authentication, processing restrictions, terminal risk management, and cardholder verification and rules set in the card and terminal to determine whether the transaction should be approved offline, sent online for authorization, or declined offline. After the transaction is decided, the terminal requests an application cryptogram, which includes a transaction certificate (TC) for approval, an authorization request cryptogram (ARQC) for online, and an application authentication cryptogram (AAC) for decline from the card. The terminal shall also specify whether the transaction is eligible for CDA execution.

ix)	Card Action Analysis (Mandatory): Card Action Analysis allows issuers to perform velocity checking and other risk management checks that are internal to the card. After completion of the checks, the card generates the application cryptogram using application data and a secret DES key stored on the card. It returns this cryptogram to the terminal. For offline approved transactions, the TC and the data used to generate it are transmitted in the clearing message for future cardholder disputes, chargeback purposes, or both. When a cardholder disputes a transaction, the TC can be used as "proof" of the transaction and to confirm that the acquirer or merchant has not altered the transaction data. For offline declined transactions, the cryptogram type is an AAC. For transactions to be authorized online, the cryptogram type is an ARQC.

x)	Online Processing & Issuer Authentication (Optional): Online processing allows the issuer’s host to review and authorize or decline transactions using the issuer’s host-based risk management parameters. The response from the issuer may include post-issuance updates to the card and an issuer-generated cryptogram (Issuer Authentication) that the card can validate to assure that the response came from a valid issuer. If both the card and terminal decide that the transaction requires an online authorization and the terminal has the online capability, the terminal sends an online authorization message to the issuer. The message includes the ARQC cryptogram, the data used to generate ARQC, and the indicator showing the offline processing result. During the online processing, the issuer uses the Card Authentication Method (CAM) to verify ARQC and authenticate that card. The issuer may consider these CAM results and the offline processing results in its authorization decision. The authorization response cryptogram (ARPC), which is produced by the issuer using the card secret DES key, authorization response code, and ARQC, is included in the authorization response message sent to the terminal. This response can also include the post-issuance update name, Issuer Script. If the authorization response includes an ARPC and the card supports issuer authentication, the card will validate the ARPC to check whether the response comes from a true issuer (or its agent). Once the issuer authentication is validated, the card can reset some security-related parameters. If issuer authentication fails, the subsequent transactions for that card must be sent online for authorization until issuer authentication is successful. The issuer can set that card to decline the transaction when the issuer authentication fails.

xi)	Script Processing (Optional): Script processing enables issuers to change personalized data on cards without reissuance. With this function, the issuer transmits commands in issuer scripts contained in the authorization response message. The terminal passes these commands to the card, where they are executed if security requirements are satisfied. The terminal sends the script commands to the card, either before or after processing is finished (depending on the issuer script), if the issuer includes script updates in the authorization response message. Prior to applying the update, the card will perform a security check to ensure that the script comes from a valid issuer and has not been altered during the transmission. The supported script command allows updating offline processing parameters, blocking and unblocking the application, blocking the card, resetting the offline PIN try counter, and changing the offline PIN value.

xii)	Completion (Mandatory): To complete the transaction processing, the card and the terminal must both complete. As part of card risk management, the card may refuse a transaction that the issuer has approved based on the issuer authentication results and the issuer-encoded parameters in the card. The card decides whether to reset the card-based counter and indicator (bit) according to the transaction disposition, issuer authentication results, and issuer-encoded rules. The card generates TC or AAC when it approves or declines the transaction. If the terminal transmits a clearing message after the authorization message, TC will be included in the clearing message. After the card makes the decision to approve the transaction (the card returns TC), the card will record the transaction details. The terminal must produce a reversal for issuer-approved transactions that are later declined by the card in single-message systems or systems that involve acquirer host data capture of approved transactions.




## 3.2	Card Functional Requirements

NEPALPAY cards must support the mandatory functions listed in following Table. Optional functions may be supported at the issuer’s discretion or may be required by market. Support for conditional functions is required if the associated condition is true.



<table>
  <tr>
    <th>S.N.</th>
    <th>Function</th>
    <th>Card Support</th>
  </tr>
  <tr>
    <td rowspan = '3' >1</td>
    <td>Application Selection</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>Directory Method</td>
    <td>Optional (EMV)</td>
  </tr>
  <tr>
    <td>Explicit Selection Method</td>
    <td>Mandatory (EMV)</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Initiate Application Processing</td>
    <td>Mandatory (EMV)</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Read Application Data</td>
    <td>Mandatory (EMV)</td>
  </tr>
  <tr>
    <td rowspan = '4'>4</td>
    <td>Offline Data Authentication</td>
    <td>Optional (EMV)</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>Optional (EMV) Conditional – If DDA supported</td>
  </tr>
  <tr>
    <td>DDA</td>
    <td>Optional (EMV) Conditional – If CDA supported</td>
  </tr>
  <tr>
    <td>Combined DDA/AC Generation</td>
    <td>Optional (EMV)</td>
  </tr>
  <tr>
    <td rowspan = '5'>5</td>
    <td>Processing Restrictions</td>
    <td>Mandatory (EMV)</td>
  </tr>
  <tr>
    <td>Application Version Number</td>
    <td>Mandatory (EMV)</td>
  </tr>
  <tr>
    <td>Application Usage Control</td>
    <td>Optional (EMV)</td>
  </tr>
  <tr>
    <td>Effective Date Check</td>
    <td>Optional (EMV)</td>
  </tr>
  <tr>
    <td>Expiration Date Check</td>
    <td>Mandatory (EMV)</td>
  </tr>
  <tr>
    <td rowspan = '2'>6</td>
    <td>Cardholder Verification</td>
    <td>Optional (EMV) Mandatory (NEPALPAY)</td>
  </tr>
  <tr>
    <td>Individual CVMs</td>
    <td>Optional (EMV) Mandatory (NEPALPAY)</td>
  </tr>
  <tr>
    <td rowspan = '8'>7</td>
    <td>Terminal Risk Management</td>
    <td>Optional (EMV) Mandatory (NEPALPAY)</td>
  </tr>
  <tr>
    <td>Terminal Exception File</td>
    <td>N/A (Card plays no role)</td>
  </tr>
  <tr>
    <td>Merchant Force Online</td>
    <td>N/A (Card plays no role)</td>
  </tr>
  <tr>
    <td>Floor Limits</td>
    <td>N/A (Card plays no role)</td>
  </tr>
  <tr>
    <td>Transaction Log</td>
    <td>N/A (Card plays no role)</td>
  </tr>
  <tr>
    <td>Random Selection</td>
    <td>N/A (Card plays no role)</td>
  </tr>
  <tr>
    <td>Velocity Checking</td>
    <td>Optional (EMV)</td>
  </tr>
  <tr>
    <td>New Card</td>
    <td>Optional (NEPALPAY)</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Terminal Action Analysis</td>
    <td>IACs Optional (EMV); IACs Mandatory (NEPALPAY)</td>
  </tr>
  <tr>
    <td rowspan = '6'>9</td>
    <td>Card Action Analysis</td>
    <td>Mandatory (EMV)</td>
  </tr>
  <tr>
    <td>Online/offline decision</td>
    <td>Mandatory (EMV)</td>
  </tr>
  <tr>
    <td>Offline referrals</td>
    <td>Optional (EMV), Not supported (NEPALPAY)</td>
  </tr>
  <tr>
    <td>Card Risk Management</td>
    <td>Optional (EMV)</td>
  </tr>
  <tr>
    <td>Advice Messages</td>
    <td>Optional (EMV)</td>
  </tr>
  <tr>
    <td>Application Cryptogram</td>
    <td>Algorithm option provided (EMV)</td>
  </tr>
  <tr>
    <td rowspan = '3'>10</td>
    <td>Online Processing & Issuer Authentication</td>
    <td>Optional (EMV)</td>
  </tr>
  <tr>
    <td>Online Capability</td>
    <td>Mandatory (EMV)</td>
  </tr>
  <tr>
    <td>Issuer Authentication</td>
    <td>Optional (EMV)</td>
  </tr>
  <tr>
    <td rowspan = '2'>11</td>
    <td>Script Processing</td>
    <td>Optional (EMV)</td>
  </tr>
  <tr>
    <td>Secure Messaging</td>
    <td>Some form is mandatory if scripts supported (EMV)</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Completion</td>
    <td>Mandatory (EMV)</td>
  </tr>
</table>







  Table 1: NEPALPAY Card Functions Requirement



 ##  3.3	Card Personalization

NEPALPAY Contact and dual interface Chip Cards shall be personalized with a set of values associated with individual data elements. The resulting personalization profile provides an interface between the Card and the application on the Terminal to enable, disable, or otherwise control the use of the functions such as:

•	Offline Data Authentication (ODA)

•	Cardholder Verification Methods (CVMs)

•	Issuer Authentication

•	Processing Data Objects List (PDOL)

•	PDOL checks (if applicable)

•	Multiple profiles

•	Data Storage

•	Tearing Recovery

•	Extended Logging.

 ## 3.4	Multiple Application Support

NEPALPAY IC cards support multi-application chip platforms that allow multiple applications or functions on a single card. These could be payment (Debit/ Credit/ Prepaid) applications, non-payment applications, or a combination of the two. When multi-application cards are issued, Issuers need to assign the highest priority to the NEPALPAY application.

## 3.5	Cardholder Verification

Cardholder verification reduces the incidence of fraud from lost or stolen cards. The cardholder verification process allows a terminal to verify that the person attempting to use the card is the true cardholder. For EMV transactions, several different CVMs are available. The EMV specifies a common method (the CVM list) for identifying which CVM may be used for a particular card and in what circumstances. The choice of the CVM depends on the issuer’s requirements, the capabilities of the card and the terminal, product operation rules, and any regional or domestic rules that may apply. The following cardholder verification methods (CVM) are applicable to NEPALPAY cards:

<li>Online Encryption PIN Verification </li>

<li> Offline Plaintext PIN Verification </li>

<li>Signature</li>

<li> No CVM </li>

 ## 3.6	Issuer Online Authorization Processing
Issuer Online Authorization Processing allows the issuer to check the transaction against the risk management parameters in its host/CBS system and to confirm transaction approval or decline decisions. Prior to making an authorization decision, the issuer verifies the authenticity of the card online through the use of the dynamic cryptogram produced by the chip card. The issuer's response may consist of post-issuing card updates combined with an issuer-generated cryptogram. The chip card verifies the cryptogram to guarantee that the response comes from a valid issuer. This validation is called issuer authentication.

 ## 3.7	Issuer Script Processing
Issuer script processing is the process defined by EMV which allows the Issuer to dynamically change the information related to an account or block all applications on the card after the card is in use and without having to recall or reissue the card. The Issuer can place script commands in the transaction response message and send it to the terminal. The terminal then forwards the commands to the card. The card performs the script commands after the security requirements have been met. Issuers should support the script command processing for the following reasons:

i)	Fraud Risk Management

ii)	PIN Management

iii)	Credit Risk Management




 ## 3.8	Command Support Requirements
This Application Specification describes a number of Application Protocol Data Unit (APDU) commands. A specific command described in the application specification is classified as: 

<li>	Mandatory: This shall be supported in the D-PAS application. </li>

<li> Conditional: Presence or absence of these functionalities is dependent on the corresponding functionality being available in the D-PAS application. </li>

<li>Not supported: These functionalities are not supported in this Specification.</li>


<table>
  <tr>
    <th colspan = '2'>Command Support (Contactless)</th>
  </tr>
  <tr>
    <td>APPLICATION BLOCK</td>
    <td>Conditional Mandatory if second presentment supported</td>
  </tr>
  <tr>
    <td>APPLICATION BLOCK (Inter-Application)</td>
    <td>Conditional Mandatory if second presentment supported</td>
  </tr>
  <tr>
    <td>APPLICATION UNBLOCK</td>
    <td>Conditional Mandatory if second presentment supported</td>
  </tr>
  <tr>
    <td>APPLICATION UNBLOCK (Inter-Application)</td>
    <td>Conditional Mandatory if second presentment supported</td>
  </tr>
  <tr>
    <td>CARD BLOCK</td>
    <td>Not Supported</td>
  </tr>
  <tr>
    <td>DATA GET PROCESSING OPTIONS</td>
    <td>Conditional Mandatory if Data Storage supported</td>
  </tr>
  <tr>
    <td>EXTERNAL AUTHENTICATE (CPS)</td>
    <td>Conditional Mandatory if CPS is supported</td>
  </tr>
  <tr>
    <td>GENERATE Application Cryptogram (AC)</td>
    <td>Not supported</td>
  </tr>
  <tr>
    <td>GET CHALLENGE</td>
    <td>Not supported</td>
  </tr>
  <tr>
    <td>GET DATA</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>GET PROCESSING OPTIONS</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>INITIALIZE UPDATE</td>
    <td>Conditional Mandatory if CPS is supported</td>
  </tr>
  <tr>
    <td>INTERNAL AUTHENTICATE</td>
    <td>Not supported</td>
  </tr>
  <tr>
    <td>PUT PAYMENT SYSTEMS ENVIRONMENT DATA</td>
    <td>Optional</td>
  </tr>
  <tr>
    <td>PASSCODE CHANGE</td>
    <td>Conditional Optional if Consumer Device CVM is supported</td>
  </tr>
  <tr>
    <td>PASSCODE RESET</td>
    <td>Conditional Mandatory if Consumer Device CVM is supported</td>
  </tr>
  <tr>
    <td>PASSCODE VERIFY</td>
    <td>Conditional Mandatory if Consumer Device CVM is supported</td>
  </tr>
  <tr>
    <td>PIN CHANGE/UNBLOCK</td>
    <td>Not supported</td>
  </tr>
  <tr>
    <td>PUT DATA</td>
    <td>Conditional Mandatory if Data Storage and / or second presentment supported</td>
  </tr>
  <tr>
    <td>PUT DATA –Inter-Application</td>
    <td>Conditional Mandatory if second presentment supported</td>
  </tr>
  <tr>
    <td>PUT DATA –Profile Data</td>
    <td>Conditional Mandatory if second presentment supported</td>
  </tr>
  <tr>
    <td>PUT DATA –PSE Data</td>
    <td>Conditional Mandatory if second presentment supported</td>
  </tr>
  <tr>
    <td>READ RECORD</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>RESUME GET PROCESSING OPTIONS</td>
    <td>Conditional Mandatory if Tearing Recovery supported</td>
  </tr>
  <tr>
    <td>SELECT</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>STORE DATA</td>
    <td>Conditional Mandatory if CPS is supported</td>
  </tr>
  <tr>
    <td>UPDATE RECORD</td>
    <td>Conditional Mandatory if second presentment supported</td>
  </tr>
  <tr>
    <td>GET CONTACTLESS DATA</td>
    <td>Optional for dual-interface applications Not supported for contactless-only applications</td>
  </tr>
  <tr>
    <td>VERIFY</td>
    <td>Not supported</td>
  </tr>
</table>




Table 2: Command support (contactless)



<table>
  <tr>
    <th colspan = '2'>Command Support (Contact)</th></tr>
  <tr>
    <td>APPLICATION BLOCK</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>APPLICATION UNBLOCK</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>CARD BLOCK</td>
    <td>Conditional Mandatory if supported by the card platform</td>
  </tr>
  <tr>
    <td>EXTERNAL AUTHENTICATE</td>
    <td>Not Supported</td>
  </tr>
  <tr>
    <td>EXTERNAL AUTHENTICATE (CPS)</td>
    <td>Conditional Mandatory if CPS is supported</td>
  </tr>
  <tr>
    <td>GENERATE Application Cryptogram (AC)</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>GET CHALLENGE</td>
    <td>Conditional – Mandatory if Offline Enciphered PIN is supported</td>
  </tr>
  <tr>
    <td>GET DATA</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>GET PROCESSING OPTIONS</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>GET RESPONSE</td>
    <td>Mandatory for T=0 cards</td>
  </tr>
  <tr>
    <td>INITIALIZE UPDATE</td>
    <td>Conditional Mandatory if CPS is supported</td>
  </tr>
  <tr>
    <td>INTERNAL AUTHENTICATE</td>
    <td>Conditional Mandatory if DDA is supported</td>
  </tr>
  <tr>
    <td>PASSCODE CHANGE</td>
    <td>Conditional Optional if Consumer Device CVM is supported</td>
  </tr>
  <tr>
    <td>PASSCODE RESET</td>
    <td>Conditional Mandatory if Consumer Device CVM is supported</td>
  </tr>
  <tr>
    <td>PASSCODE VERIFY</td>
    <td>Conditional Mandatory if Consumer Device CVM is supported</td>
  </tr>
  <tr>
    <td>PIN CHANGE/UNBLOCK</td>
    <td>Conditional Mandatory if Offline PIN is supported</td>
  </tr>
  <tr>
    <td>PUT DATA</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>PUT DATA - INTER-APPLICATION</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>PUT DATA - Profile Data</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>PUT DATA - PSE Data</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>READ RECORD</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>SELECT</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>STORE DATA</td>
    <td>Conditional Mandatory if CPS is supported</td>
  </tr>
  <tr>
    <td>UPDATE RECORD</td>
    <td>Mandatory</td>
  </tr>
  <tr>
    <td>VERIFY</td>
    <td>Conditional Mandatory if Offline PIN is supported</td>
  </tr>
</table>





Table 3: Command support (contact)