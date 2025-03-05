---
sidebar_position: 5
---


# 5. Non-Real Time Remittance Posting API
This API is used for posting the Non-Real time Remittance Fund transfer transactions through NCHL-IPS System. It handles both one to one and batch-based credit transactions .The debit of the payment batch shall be executed instantly however the credit leg shall be done in deferred basis. And once the debit is successful, transaction will be posted to NCHL-IPS system for credit legs by a batch process.



<table border="1">
  <thead>
    <tr>
      <th>Method</th>
      <th>End-Points</th>
      <th>Authorization</th>
      <th>Content-Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>(BASE_URL)+/api/remit/postnchlipsbatch</td>
      <td>Bearer (access_token)</td>
      <td>application/json</td>
    </tr>
  </tbody>
</table>


Following points should be consider while posting the transactions to this method. 
1.	Debtor bank must be the member of Retail-Payment System however creditor bank can be the member of NCHL-IPS system.

2.	This method supports only the Off-Us (interbank) transactions. 

3.	The transaction limit shall be as per the NCHL-IPS system product note, which is based on the category purposes. Addenda information are also mandatory for some of the category purpose (refer to product note for details). 

4.	Number of supported transactions within a batch (batch limit) is 10,000. 

5.	Allowed category purpose for method is REMI(Remittance).

6.	This method should to be invoked only after beneficiary account validation is successfully done.

7.	The beneficiary/creditor branch is a mandatory field however it can be sent always a fixed branch code(head-office branch). List of such branch codes shall be made available separately.


**Batch Details:**


<table border="1">
  <thead>
    <tr>
      <th>#</th>
      <th>Field Name</th>
      <th>Data Type</th>
      <th>Length</th>
      <th>Description</th>
      <th>Presence</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>batchId</td>
      <td>String</td>
      <td>20</td>
      <td>Unique Identification for the batch for later reconciliation.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>2</td>
      <td>batchAmount</td>
      <td>BigDecimal</td>
      <td>14,2</td>
      <td>The total sum of amount of all the transactions in the batch.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>3</td>
      <td>batchCount</td>
      <td>Integer</td>
      <td>-</td>
      <td>Total transactions in the batch.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>4</td>
      <td>batchCrncy</td>
      <td>String</td>
      <td>3</td>
      <td>Currency of the transaction. E.g. NPR.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>5</td>
      <td>categoryPurpose</td>
      <td>String</td>
      <td>4</td>
      <td>Purpose of the transaction: REMI.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>6</td>
      <td>debtorAgent</td>
      <td>String</td>
      <td>4</td>
      <td>Financial institution where the transactions initiating party account is held.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>7</td>
      <td>debtorBranch</td>
      <td>String</td>
      <td>4</td>
      <td>Financial institution branch where the transactions initiating party account is held.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>8</td>
      <td>debtorName</td>
      <td>String</td>
      <td>140</td>
      <td>Transaction initiation party account name.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>9</td>
      <td>debtorAccount</td>
      <td>String</td>
      <td>20</td>
      <td>Transaction initiation party account number.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>10</td>
      <td>debtorIdType</td>
      <td>String</td>
      <td>4</td>
      <td>Transaction initiation party private id type for ex. Citizenship, pan no, passport etc.</td>
      <td>O</td>
    </tr>
    <tr>
      <td>11</td>
      <td>debtorIdValue</td>
      <td>String</td>
      <td>20</td>
      <td>Transactions initiation party identification number for ex. Passport number, pan no. etc.</td>
      <td>O</td>
    </tr>
    <tr>
      <td>12</td>
      <td>debtorAddress</td>
      <td>String</td>
      <td>490</td>
      <td>Transactions initiation party postal address.</td>
      <td>O</td>
    </tr>
    <tr>
      <td>13</td>
      <td>debtorPhone</td>
      <td>String</td>
      <td>20</td>
      <td>Transactions initiation party debtor phone number +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;.</td>
      <td>O</td>
    </tr>
    <tr>
      <td>14</td>
      <td>debtorMobile</td>
      <td>String</td>
      <td>20</td>
      <td>Transactions initiation party mobile number +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;.</td>
      <td>O</td>
    </tr>
    <tr>
      <td>15</td>
      <td>debtorEmail</td>
      <td>String</td>
      <td>50</td>
      <td>Transactions initiation party email address.</td>
      <td>O</td>
    </tr>
  </tbody>
</table>

**Transaction Details:**


<table border="1">
  <thead>
    <tr>
      <th>#</th>
      <th>Field Name</th>
      <th>Data Type</th>
      <th>Length</th>
      <th>Description</th>
      <th>Presence</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>instructionId</td><td>String</td><td>30</td><td>Unique identification for the transaction for reconciliation purpose later.</td><td>Y</td></tr>
    <tr><td>2</td><td>endToEndId</td><td>String</td><td>30</td><td>Identification reference for both sender and receiver.</td><td>Y</td></tr>
    <tr><td>3</td><td>amount</td><td>BigDecimal</td><td>13,2</td><td>The amount to be transferred through this transaction.</td><td>Y</td></tr>
    <tr><td>4</td><td>purpose</td><td>String</td><td>4</td><td>The initiating party will assign purpose of the transactions. List of purpose category is available in product document.</td><td>O</td></tr>
    <tr><td>5</td><td>creditorAgent</td><td>String</td><td>4</td><td>Financial institution where the receiving party accounts is held.</td><td>Y</td></tr>
    <tr><td>6</td><td>creditorBranch</td><td>String</td><td>4</td><td>Financial institution branch where the receiving party account is held.</td><td>Y</td></tr>
    <tr><td>7</td><td>creditorName</td><td>String</td><td>140</td><td>Receiving party Account name.</td><td>Y</td></tr>
    <tr><td>8</td><td>creditorAccount</td><td>String</td><td>20</td><td>Receiving party account number.</td><td>Y</td></tr>
    <tr><td>9</td><td>remitterName</td><td>String</td><td>100</td><td>Remittance receiving individual name.</td><td>Y</td></tr>
    <tr><td>10</td><td>countryOfOrigin</td><td>String</td><td>20</td><td>Remittance sending country.</td><td>Y</td></tr>
    <tr><td>11</td><td>purposeOfTransaction</td><td>String</td><td>50</td><td>Purpose of sending remittance.</td><td>Y</td></tr>
    <tr><td>12</td><td>remitCompanyName</td><td>String</td><td>50</td><td>Remittance company through which the payment is initiated.</td><td>Y</td></tr>
    <tr><td>13</td><td>remitterAddress</td><td>String</td><td>100</td><td>City, town or street name of the originating country.</td><td>O</td></tr>
    <tr><td>14</td><td>creditorIdType</td><td>String</td><td>4</td><td>Receiving party private identification type for ex. Citizenship, pan no, passport etc.</td><td>O</td></tr>
    <tr><td>15</td><td>creditorIdValue</td><td>String</td><td>20</td><td>Receiving party identification value.</td><td>O</td></tr>
    <tr><td>16</td><td>creditorAddress</td><td>String</td><td>490</td><td>Receiving party postal address.</td><td>O</td></tr>
    <tr><td>17</td><td>creditorPhone</td><td>String</td><td>20</td><td>Receiving party phone number in the format +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;.</td><td>O</td></tr>
    <tr><td>18</td><td>creditorMobile</td><td>String</td><td>20</td><td>Receiving party mobile number in the format +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;.</td><td>O</td></tr>
    <tr><td>19</td><td>creditorEmail</td><td>String</td><td>50</td><td>Receiving party valid email address.</td><td>O</td></tr>
    <tr><td>20</td><td>addenda1</td><td>Integer</td><td>15</td><td>Information that provides extra details about the transaction. Value may be mandatory depending on configuration.</td><td>C</td></tr>
    <tr><td>21</td><td>addenda2</td><td>Date</td><td>-</td><td></td><td>C</td></tr>
    <tr><td>22</td><td>addenda3</td><td>String</td><td>35</td><td></td><td>C</td></tr>
    <tr><td>23</td><td>addenda4</td><td>String</td><td>35</td><td></td><td>C</td></tr>
    <tr><td>24</td><td>freeCode1</td><td>String</td><td>20</td><td>Extra transaction details used for reconciliation, relevant only to the initiating party bank.</td><td>O</td></tr>
    <tr><td>25</td><td>freeCode2</td><td>String</td><td>20</td><td></td><td>O</td></tr>
    <tr><td>26</td><td>freeText1</td><td>String</td><td>100</td><td></td><td>O</td></tr>
    <tr><td>27</td><td>freeText2</td><td>String</td><td>100</td><td></td><td>O</td></tr>
    <tr><td>28</td><td>remarks</td><td>String</td><td>100</td><td>Remarks field.</td><td>O</td></tr>
    <tr><td>29</td><td>particulars</td><td>String</td><td>100</td><td>Particulars field.</td><td>O</td></tr>
  </tbody>
</table>

Token Generation Process (Non-Real Time):

1. Token string generation: The token string is created by appending the financial fields in batch and transactions information. Following will be the procedure for token string generation:
 ```json
 
 Batch String=<BatchId>+","+<DebtorAgent>+","+<DebtorBranch>+","+<DebtorAccount>+","+<BatchAmount>+","+<Batch Currency (e.g. NPR)>+","+<Category Purpose>
For each transaction
{
Transaction String=Transaction String+","+<Instruction Id>+","<Creditor Agent>+","+<CreditorBranch>+","+<CreditorAccount>+","+<Transaction Amount>;
}
Token String=Batch String + Transaction String+","+<user Id>
 ```


2. Generate signed hash value of token string using private key of provided certificate. 
   
3. Send the generate hash value in “token” field.
   

**Request Message Example:**
```json
{
    "nchlIpsBatchDetail": {
        "batchId": "remitnonreal5",
        "batchAmount": 10.00,
        "batchCount": "1",
        "batchCrncy": "NPR",
        "categoryPurpose": "REMI",
        "debtorAgent": "2501",
        "debtorBranch": "1",
        "debtorName": "DEBTOR ACCOUNT NAME",
        "debtorAccount": "00100******00011"
    },
    "nchlIpsTransactionDetailList": [
        {
            "instructionId": "remitnonreal1-5",
            "endToEndId": "City Express-PMT1",
            "amount": 10.00,
            "creditorAgent": "0401",
            "creditorBranch": "81",
            "creditorName": "CREDITOR ACCOUNT NAME",
            "creditorAccount": "08110****1011",
            "particulars": "remitnonreal-particular-1",
            "remarks": "remitnonreal-remarks-1 ",
            "remitterName": "Biraj Bahadur",
            "countryOfOrigin": "UAE",
            "remitterAddress": "dubai",
            "purposeOfTransaction": "home expenses",
            "remitCompanyName": "Himal Remit"
        }
    ],
 "token": "UYaxbyjzTsN3ShnLmksNasHRXfpp4hZ8PbVxKlEo56S4iRY7UdzcS2McuN4az8zkoDIdOLBNU8k1+386UtZi++7FQtg1nEaInmW8w9soZneB2dSPz7EceqJmDr4wBC0TrEx0t7+T2fkJFZWNUlfngKM8noq8i0dhWscYCEW6hSM="
}
```
**Response Example:**
```json
{
    "cipsBatchResponse": {
        "responseCode": "000",
        "responseMessage": "SUCCESS",
        "batchId": "remitnonreal5",
        "debitStatus": "000",
        "id": 65405
    },
    "cipsTxnResponseList": [
        {
            "responseCode": "000",
            "responseMessage": "PENDING FOR POSTING IN NCHL-IPS",
            "id": 106755,
            "instructionId": "remitnonreal1-5",
            "creditStatus": "ENTR"
        }
    ]
}
```


**Response Parameters**

**Batch Details:**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Field Name</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>responseCode</td>
            <td>String</td>
            <td>-</td>
            <td>API response. For example, 000 for success</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2</td>
            <td>responseMessage</td>
            <td>String</td>
            <td>500</td>
            <td>API response code description</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>3</td>
            <td>batchId</td>
            <td>String</td>
            <td>20</td>
            <td>Unique Identification for the batch for later reconciliation (Generated by the NPI member)</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>4</td>
            <td>debitStatus</td>
            <td>String</td>
            <td>10</td>
            <td>Debit status (000 for success, 999 for timeout, etc.) (Refer ISO return reason sheet)</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>5</td>
            <td>id</td>
            <td>Integer</td>
            <td>-</td>
            <td>Unique Identification for the batch generated in NCHL side</td>
            <td>Y</td>
        </tr>
    </tbody>
</table>


**Transaction Details:**


<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Field Name</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>responseCode</td>
            <td>String</td>
            <td>-</td>
            <td>API response. For example, 000 for success</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2</td>
            <td>responseMessage</td>
            <td>String</td>
            <td>500</td>
            <td>API response code description</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>3</td>
            <td>instructionId</td>
            <td>String</td>
            <td>20</td>
            <td>Unique Identification for the transaction for later reconciliation (Generated by the NPI member)</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>4</td>
            <td>creditStatus</td>
            <td>String</td>
            <td>10</td>
            <td>
                Credit status: 
                <ul>
                    <li>ENTR for Pending</li>
                    <li>GEN, SENT, ACTC, and ACSP are intermediary statuses</li>
                    <li>ACSC for success</li>
                    <li>RJCT for Rejected</li>
                </ul>
            </td>
            <td>Y</td>
        </tr>
        <tr>
            <td>5</td>
            <td>id</td>
            <td>Integer</td>
            <td>-</td>
            <td>Unique Identification for the transaction generated on NCHL side</td>
            <td>Y</td>
        </tr>
    </tbody>
</table>


**Failed Response Examples:**
```json
{
    "responseCode": "E007",
    "responseDescription": "TECHNICAL VALIDATION FAILED",
    "billsPaymentDescription": null,
    "billsPaymentResponseCode": null,
    "fieldErrors": [
        {
            "field": "nchlIpsBatchDetail.categoryPurpose",
            "message": "Invalid transaction category purpose."
        }
    ]
}
```



