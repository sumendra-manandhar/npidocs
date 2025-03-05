---
sidebar_position: 3
---

#   3. NPS-NCS Clearing File Specification


##  3.1 	Introduction


NPS National Card Switch (NPS-NCS) Clearing File Specification is designed to streamline the transmission and processing of transaction data between participating members, ensuring seamless interoperability and efficiency in clearing and settlement operations. By establishing a uniform set of data formats, protocols, and procedures, this specification facilitates smooth communication and reconciliation of transactions, thereby enhancing the overall reliability and integrity of the payment ecosystem.


## 3.2  File Naming Convention


Clearing file will be CSV and XML format.

•	NCHLRAWDATABankA20241101.C1.csv

•	NCHLRAWDATABankA20241101.C1.xml

Where,

	NCHLRAWDATA- Static text, since this file contains raw data hence named NCHLRAWDATA.

	BankA- Short name of member bank.

	20241101- Date in YYYYMMDD format.

	C1- File processing cycle.

	Csv /.xml- file extension.


##  3.3 File Header


Clearing file transaction details are separated by new line while the fields are separated by caret (^). 

**Note:** In order to prevent duplicate processing of same file, combination of member id, file generated date and cycle value will be maintained as unique constraint. 


<table border="1">
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
                <th>Max Length</th>
                <th>Data Type</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>MTI</td>
                <td>Message Type Identifier</td>
                <td>4</td>
                <td>Number</td>
                <td>1644</td>
            </tr>
            <tr>
                <td>Function code</td>
                <td></td>
                <td>3</td>
                <td>Number</td>
                <td>601</td>
            </tr>
            <tr>
                <td>Reversal Indicator</td>
                <td>Identifier if file is original or reversal</td>
                <td>1</td>
                <td>String</td>
                <td>O - Original
                R - Reversal</td>     
            </tr>
            <tr>
                <td>Member Id</td>
                <td>Id of member bank to which file is being sent</td>
                <td>11</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>File Generated Date</td>
                <td>Date on which file is generated</td>
                <td>8</td>
                <td>Number - YYYYMMDD</td>
                <td></td>
            </tr>
            <tr>
                <td>Cycle</td>
                <td>Number of files generated on that day</td>
                <td>2</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>File Type Identifier</td>
                <td>File type identifier to identify whether file is incoming or outgoing</td>
                <td>1</td>
                <td>String</td>
                <td>I - Incoming 
                O - Outgoing</td>
            </tr>
            <tr>
                <td>Processing Mode</td>
                <td>Indicates whether file is test or production</td>
                <td>1</td>
                <td>String</td>
                <td>P - Production 
                T - Test</td>
            </tr>
        </tbody>
    </table>







Table 1 :  Clearing File Header




##  3.4 	Batch Header

Batches are categorized using transaction Codes (please refer 5.4 for detailed transaction codes). Each batch header starts with MTI 1664 and field are separated by caret (^).



<table border="1">
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
                <th>Max Length</th>
                <th>Data Type</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>MTI</td>
                <td>Batch Identifier</td>
                <td>4</td>
                <td>Number</td>
                <td>1664</td>
            </tr>
            <tr>
                <td>Function code</td>
                <td>Identifier</td>
                <td>3</td>
                <td>Number</td>
                <td>601</td>
            </tr>
            <tr>
                <td>Batch Sequence Number</td>
                <td>Sequence Number for each batch</td>
                <td>8</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Transaction code</td>
                <td>Indicates Transaction Type</td>
                <td>2</td>
                <td>Number</td>
                <td>refer 5.4</td>
            </tr>
        </tbody>
    </table>



Table 2: Clearing Batch Header




##  3.5 	Transaction Field Detail


Transaction details will have below fields:

 <table border="1">
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
                <th>Max Length</th>
                <th>Data Type</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>MTI</td>
                <td>Message Type Identifier</td>
                <td>4</td>
                <td>Number</td>
                <td>1240</td>
            </tr>
            <tr>
                <td>Function code</td>
                <td></td>
                <td>3</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Processing Code</td>
                <td>Describe the effect of transaction on customer account and type of accounts affected</td>
                <td>6</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>PAN</td>
                <td>Primary account number of customer OR identifier for PAN (Tokens)</td>
                <td>19</td>
                <td>Number</td>
                <td>16- or 19-digit number</td>
            </tr>
            <tr>
                <td>Approval Code</td>
                <td>Approval code is a code authorizing institute assigns indicating approval</td>
                <td>6</td>
                <td>Alphanumeric</td>
                <td></td>
            </tr>
            <tr>
                <td>Retrieval Reference Number</td>
                <td>Unique number to identify the transaction</td>
                <td>12</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Acquirer Reference Number</td>
                <td>Data that Acquirer provide in message that is used by Issuer in a subsequent message or in complete life cycle of transaction</td>
                <td>23</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>MCC</td>
                <td>Merchant category code</td>
                <td>4</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Transaction Date and Time</td>
                <td>Date and time when transaction happened</td>
                <td>14</td>
                <td>Number YYYYMMDDHHMMSS</td>
                <td></td>
            </tr>
            <tr>
                <td>Terminal Id</td>
                <td>Id of terminal on which card is used</td>
                <td>16</td>
                <td>Alphanumeric</td>
                <td></td>
            </tr>
            <tr>
                <td>Terminal Name and Location</td>
                <td>Name and Location of terminal</td>
                <td>100</td>
                <td>Alphanumeric</td>
                <td></td>
            </tr>
            <tr>
                <td>Transaction Amount</td>
                <td>Amount in currency in which transaction happened</td>
                <td>12</td>
                <td>Number with 2 decimal places</td>
                <td></td>
            </tr>
            <tr>
                <td>Transaction Currency Code</td>
                <td>Currency code of transaction amount</td>
                <td>3</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Settlement Amount</td>
                <td>Transaction Amount is converted into settlement amount</td>
                <td>12</td>
                <td>Number with 2 decimal places</td>
                <td></td>
            </tr>
            <tr>
                <td>Settlement Currency</td>
                <td>Currency code of settlement amount</td>
                <td>3</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Card holder billing amount</td>
                <td>Transaction Amount is converted into issuer’s designated billing amount</td>
                <td>12</td>
                <td>Number with 2 decimal places</td>
                <td></td>
            </tr>
            <tr>
                <td>Card holder billing currency</td>
                <td>Currency code of card holder billing amount</td>
                <td>3</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Settlement Conversion Rate</td>
                <td>Rate used to convert transaction amount into Settlement Amount</td>
                <td>8</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Card holder billing Conversion Rate</td>
                <td>Rate used to convert transaction amount into Card holder billing amount</td>
                <td>8</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Forwarded by</td>
                <td>Member Id who forwarded the transaction</td>
                <td>8</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Received by</td>
                <td>Member Id who received the transaction</td>
                <td>8</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Acquirer Id</td>
                <td>Member Id of Acquirer</td>
                <td>8</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Issuer Id</td>
                <td>Member Id of Issuer</td>
                <td>8</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Settlement Date</td>
                <td>Date on which transaction settled by the interchange</td>
                <td>8</td>
                <td>Number YYYYMMDD</td>
                <td></td>
            </tr>
            <tr>
                <td>Message Reason Code</td>
                <td>Reason for sending the message</td>
                <td>2</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Member Message Text</td>
                <td>Additional information about the transaction</td>
                <td>100</td>
                <td>Alphanumeric</td>
                <td></td>
            </tr>
            <tr>
                <td>Document Indicator</td>
                <td>Indicates whether document is sent to support the transaction or not</td>
                <td>1</td>
                <td>Number</td>
                <td>
                0 - No document sent
                1 - Document sent</td>
                <td></td>
            </tr>
            <tr>
                <td>Fee Type Indicator</td>
                <td>Indicator whether Fee is Credit or Debit to the receiving member</td>
                <td>1</td>
                <td>String</td>
                 <td>C - Credit 
                     D - Debit</td>
                <td></td>
            </tr>
            <tr>
                <td>Fee Transaction Amount</td>
                <td>Fee in transaction currency</td>
                <td>12</td>
                <td>Number with 2 decimal places</td>
                <td></td>
            </tr>
            <tr>
                <td>Currency Code for Fee Transaction</td>
                <td>Currency code for Fee Transaction Amount</td>
                <td>3</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Fee Settlement Amount</td>
                <td>Fee in settlement currency</td>
                <td>12</td>
                <td>Number with 2 decimal places</td>
                <td></td>
            </tr>
            <tr>
                <td>Currency Code for Fee Settlement</td>
                <td>Currency code for Fee settlement Amount</td>
                <td>3</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Additional Amount</td>
                <td>Additional amount of tips/surcharge or currency fluctuation</td>
                <td>12</td>
                <td>Number with 2 decimal places</td>
                <td></td>
            </tr>
            <tr>
                <td>Additional Amount Sign</td>
                <td>Sign of additional Amount</td>
                <td>1</td>
                <td>String</td>
                <td>C - Credit
                D - Debit</td>
                <td></td>
            </tr>
            <tr>
                <td>Issuer Member Name</td>
                <td>Short name of issuing member</td>
                <td>9</td>
                <td>String</td>
                <td></td>
            </tr>
            <tr>
                <td>Acquirer Member Name</td>
                <td>Short name of acquiring member</td>
                <td>9</td>
                <td>String</td>
                <td></td>
            </tr>
            <tr>
                <td>Card Present (CP) Indicator</td>
                <td>Indicates whether transaction is CP or CNP</td>
                <td>1</td>
                <td>Number</td> 
                <td>0 = CNP
                1 = CP
                8 = Unknown</td>
                <td></td>
            </tr>
            <tr>
                <td>Terminal Capability</td>
                <td>Indicates the capability of the point-of-sale (POS) terminal</td>
                <td>1</td>
                <td>Alphanumeric</td>
               <td> 0 = Unknown entry point
                1 = Manual entry
                2 = Magnetic Stripes read
                5 = ICC Read
                6 = Key entered at POS
                8 = Contactless
                9 = Hybrid</td>
                <td></td>
            </tr>
            <tr>
                <td>ECI Indicator</td>
                <td>Electronic Commerce and Payments Indicator</td>
                <td>1</td>
                <td>String</td>
                <td></td>
            </tr>
            <tr>
                <td>Transaction Indicator</td>
                <td>Indicator for MIT transaction</td>
                <td>1</td>
                <td>String</td>
                <td></td>
            </tr>
            <tr>
                <td>Original Transaction Amount</td>
                <td>Original transaction Amount in case of partial Chargeback/presentment</td>
                <td>12</td>
                <td>Number with 2 decimal places</td>
                <td></td>
            </tr>
            <tr>
                <td>Transaction Identifier</td>
                <td>Unique value to identify a transaction</td>
                <td>Varies</td>
                <td>Alphanumeric</td>
                <td></td>
            </tr>
            <tr>
                <td>Process</td>
                <td>Whether the transaction is issuing or acquiring</td>
                <td>1</td>
                <td>Alphanumeric</td>
               <td> I - Issuing
                A - Acquiring</td>
                <td></td>
            </tr>
            <tr>
                <td>Case Id</td>
                <td>Case Id of dispute</td>
                <td>20</td>
                <td>Alphanumeric</td>
                <td></td>
            </tr>
            <tr>
                <td>Additional Data</td>
                <td>Reserved for future use</td>
                <td>Varies Not fixed</td>
                <td>Alphanumeric</td>
                <td>Additional information related to transaction will be available in this field</td>
            </tr>
        </tbody>
    </table>

    
    
    
    
 Table 3: Transaction Fields




## 3.6  Batch Trailer


For each batch header, there will be an associated batch trailer. Each batch trailer starts with 1664 and field are separated by caret (^).


<table border="1">
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
                <th>Max Length</th>
                <th>Data Type</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>MTI</td>
                <td>Batch Identifier</td>
                <td>4</td>
                <td>Number</td>
                <td>1664</td>
            </tr>
            <tr>
                <td>Function Code</td>
                <td>Identifier for Trailer</td>
                <td>3</td>
                <td>Number</td>
                <td>602</td>
            </tr>
            <tr>
                <td>Transaction code</td>
                <td>Indicates Transaction Type</td>
                <td>2</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Total Amount</td>
                <td>Total of all the transactions inside a batch irrespective of transaction currency</td>
                <td>20</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Total Count</td>
                <td>Total Number of transactions inside a batch</td>
                <td>8</td>
                <td>Number</td>
                <td></td>
            </tr>
        </tbody>
    </table>

Table 4: Clearing Batch Trailer

## 3.7 File Trailer


Each file is closed with a file trailer and contains total records of batches, amount and count.

 <table border="1">
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
                <th>Max Length</th>
                <th>Data Type</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>MTI</td>
                <td>Message Type Identifier</td>
                <td>4</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Function code</td>
                <td></td>
                <td>3</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Total Batch Count</td>
                <td>Total number of batches in a file</td>
                <td>8</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Total Amount</td>
                <td>Total of all the transactions irrespective of transaction currency</td>
                <td>20</td>
                <td>Number</td>
                <td></td>
            </tr>
            <tr>
                <td>Total Count</td>
                <td>Total Number of transactions available in file excluding header and trailer</td>
                <td>8</td>
                <td>Number</td>
                <td></td>
            </tr>
        </tbody>
    </table>


Table 5: Clearing File Trailer
## 3.8  Clearing File Sample Transaction


**1.File Header**

1644^601^O^00000004567^20240402^1^I^T^S

**2.Batch Header**

1664^601^1^05

**3.Record Detail**

1240^200^101100^9592605678986058^567345^975568938144^12345678901234
567890123^6011^20240401074516^T001B034B458P503^BANGKOK1 
BAAC BANGKOK 
001TH^500.00^524^500.00^524^^^^^00000009289^00000004567^00000009289
^00000004567^20240401^^^0^C^0.00^524^0.00^524^0.00^524^C^BankA^B ankB
^1^5^^^^^A^^ <p>(Additional data for future use) </p>

**4.Batch Trailer**

1664^602^05^500.00^1

**5.Batch Header**

1664^601^2^25

**6.Record Detail**

1240^200^101100^9592605678986058^567345^975568938144^12345678901234	567890123^6011^20240401074516^T001B034B458P503^BANGKOK1                 	BAAC                  BANGKOK      	001TH^200.00^524^200.00^524^^^^^00000009289^00000004567^00000009289	^00000004567^20240401^^^0^C^0.00^524^0.00^524^0.00^524^C^BankA^B	ankB ^1^5^^^^^A^^<p>Additional data for future use</p>

**7.Batch Trailer**
1664^602^25^200.00^1

**8.File Trailer**
1644^602^2^300.00^2





 

