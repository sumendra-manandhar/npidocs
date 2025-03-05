---
sidebar_position: 4
---


# 4.Real Time Transaction Posting API


This API is used for posting remittance fund transfer transaction in Real-Time Payment System in real time basis. Since the nature of transaction is real time, this method can contain only single transaction in a batch. The execution of both debit and credit legs happens in a real time and provides the response accordingly within a single session. 


<table>
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
      <td>(BASE_URL)/api/remit/postcipsbatch</td>
      <td>Bearer (access_token)</td>
      <td>application/json</td>
    </tr>
  </tbody>
</table>


Following points should be consider while posting the transactions through this API. 
1.	Both debtor and creditor bank should be the member of Real-Time Payment  System(RPS)
. 
2.	This method supports both On-Us (same bank) and Off-Us (interbank) transactions. 

3.	On-Us and Off-Us transactions are to be sent in different batches. 

4.	Sender will have to ensure that the channel specific transaction limits (as per NRB) is complied with. The current per transaction limit for this method is 2 million for Off-Us transactions and 200 Million for On-Us.

5.	The transactions per batch limit will be 1.

6.	Allowed category purpose for method is REMI(Remittance).

7.	This method should to be invoked only after beneficiary account validation is successfully done.

8.	The beneficiary/creditor branch is a mandatory field however it can be sent always a fixed branch code(head-office branch). List of such branch codes shall be made available separately.


**Request Parameter:**  The request parameters for this method are created to align the format of ISO 20022 message format hence the payment information has segregated as batch and transaction details.

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
      <td>The total sum of amount of all the transactions in the batch</td>
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
      <td>Currency of the transaction. E.g. NPR</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>5</td>
      <td>categoryPurpose</td>
      <td>String</td>
      <td>4</td>
      <td>Purpose of the transaction i.e., REMI</td>
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
      <td>Transactions initiation party postal address</td>
      <td>O</td>
    </tr>
<tr>
      <td>13</td>
      <td>debtorPhone</td>
      <td>String</td>
      <td>20</td>
      <td>Transactions initiation party debtor phone number +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;</td>
      <td>O</td>
    </tr>
    <tr>
      <td>14</td>
      <td>debtorMobile</td>
      <td>String</td>
      <td>20</td>
      <td>Transactions initiation party mobile number +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;</td>
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
    <tr>
      <td>1</td>
      <td>instructionId</td>
      <td>String</td>
      <td>30</td>
      <td>Unique identification for the transaction for reconciliation purpose later.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>2</td>
      <td>endToEndId</td>
      <td>String</td>
      <td>30</td>
      <td>Identification reference for both sender and receiver.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>3</td>
      <td>amount</td>
      <td>BigDecimal</td>
      <td>13,2</td>
      <td>The amount to be transferred through this transaction.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>4</td>
      <td>purpose</td>
      <td>String</td>
      <td>4</td>
      <td>The purpose codes define how to execute the payment instruction. List of purpose categories is available in the product document. Eg. DPAO (Debit principal transaction amount only)</td>
      <td>C</td>
    </tr>
    <tr>
      <td>5</td>
      <td>creditorAgent</td>
      <td>String</td>
      <td>4</td>
      <td>Financial institution where the receiving party accounts are held.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>6</td>
      <td>creditorBranch</td>
      <td>String</td>
      <td>4</td>
      <td>Financial institution branch where the receiving party account is held. Can always be sent as a fixed branch code (Head-Office).</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>7</td>
      <td>creditorName</td>
      <td>String</td>
      <td>140</td>
      <td>Receiving party Account name.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>8</td>
      <td>creditorAccount</td>
      <td>String</td>
      <td>20</td>
      <td>Receiving party account number.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>9</td>
      <td>remitterName</td>
      <td>String</td>
      <td>100</td>
      <td>Remittance receiving individual name.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>10</td>
      <td>countryOfOrigin</td>
      <td>String</td>
      <td>20</td>
      <td>Remittance sending country.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>11</td>
      <td>purposeOfTransaction</td>
      <td>String</td>
      <td>50</td>
      <td>Purpose of sending remittance.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>12</td>
      <td>remitCompanyName</td>
      <td>String</td>
      <td>50</td>
      <td>Remittance company through which the payment is initiated.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>13</td>
      <td>remitterAddress</td>
      <td>String</td>
      <td>100</td>
      <td>City, town, or street name of the originating country.</td>
      <td>O</td>
    </tr>
    <tr>
      <td>14</td>
      <td>creditorIdType</td>
      <td>String</td>
      <td>4</td>
      <td>Receiving party private identification type, e.g., Citizenship, PAN, passport, etc.</td>
      <td>O</td>
    </tr>
    <tr>
      <td>15</td>
      <td>creditorIdValue</td>
      <td>String</td>
      <td>20</td>
      <td>Receiving party identification value.</td>
      <td>O</td>
    </tr>
    <tr>
      <td>16</td>
      <td>creditorAddress</td>
      <td>String</td>
      <td>490</td>
      <td>Receiving party postal address.</td>
      <td>O</td>
    </tr>
    <tr>
      <td>17</td>
      <td>creditorPhone</td>
      <td>String</td>
      <td>20</td>
      <td>Receiving party phone number in the format +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;</td>
      <td>O</td>
    </tr>
    <tr>
      <td>18</td>
      <td>creditorMobile</td>
      <td>String</td>
      <td>20</td>
      <td>Receiving party mobile number in the format +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;</td>
      <td>O</td>
    </tr>
    <tr>
      <td>19</td>
      <td>creditorEmail</td>
      <td>String</td>
      <td>50</td>
      <td>Receiving party valid email address.</td>
      <td>O</td>
    </tr>
    <tr>
      <td>20</td>
      <td>addenda1</td>
      <td>Integer</td>
      <td>15</td>
      <td>Information that provides extra details about the transaction. This field may be mandatory depending on the configuration of category purpose.</td>
      <td>C</td>
    </tr>
    <tr>
      <td>21</td>
      <td>addenda2</td>
      <td>Date</td>
      <td>-</td>
      <td></td>
      <td>C</td>
    </tr>
    <tr>
      <td>22</td>
      <td>addenda3</td>
      <td>String</td>
      <td>35</td>
      <td></td>
      <td>C</td>
    </tr>
    <tr>
      <td>23</td>
      <td>addenda4</td>
      <td>String</td>
      <td>35</td>
      <td></td>
      <td>C</td>
    </tr>
    <tr>
      <td>24</td>
      <td>freeCode1</td>
      <td>String</td>
      <td>20</td>
      <td>Extra information to specify the purpose of transactions for reconciliation. These fields are significant only to the initiating party bank and will not be routed to the beneficiary bank.</td>
      <td>O</td>
    </tr>
    <tr>
      <td>25</td>
      <td>freeCode2</td>
      <td>String</td>
      <td>20</td>
      <td></td>
      <td>O</td>
    </tr>
    <tr>
      <td>26</td>
      <td>freeText1</td>
      <td>String</td>
      <td>100</td>
      <td></td>
      <td>O</td>
    </tr>
    <tr>
      <td>27</td>
      <td>freeText2</td>
      <td>String</td>
      <td>100</td>
      <td></td>
      <td>O</td>
    </tr>
    <tr>
      <td>28</td>
      <td>remarks</td>
      <td>String</td>
      <td>100</td>
      <td>Remarks field</td>
      <td>O</td>
    </tr>
    <tr>
      <td>29</td>
      <td>particulars</td>
      <td>String</td>
      <td>100</td>
      <td>Particulars field</td>
      <td>O</td>
    </tr>
  </tbody>
</table>
 


Token Generation Process (Real Time):

1. Token string generation: The token string is created by appending the financial fields in batch and transactions information. Following will be the procedure for token string generation:
```json
Batch String=<BatchId>+","+<DebtorAgent>+","+<DebtorBranch>+","+<DebtorAccount>+","+<BatchAmount>+","+<Batch Currency (e.g. NPR)>
Transaction String=<Instruction Id>+","<Creditor Agent>+","+<CreditorBranch>+", "+<CreditorAccount> +","+<Transaction Amount>;
Token String=Batch String + Transaction String+","+<user Id>
```

2. Sign the message token from step 1 using the digital certificate private key (pfx file/keystore). The digital signature algorithm will be the SHA256withRSA.
3. Convert the signed token above in step 2 to base64 encoding.
4. Pass this signature string to the “token” field of the request message.


**Request Sample Message**

**Example:**
```json
{
    "cipsBatchDetail": {
        "batchId": "remitnpi5",
        "batchAmount": 10.00,
        "batchCount": "1",
        "batchCrncy": "NPR",
        "categoryPurpose": "REMI",
        "debtorAgent": "2501",
        "debtorBranch": "1",
        "debtorName": "DEBTOR ACCOUNT NAME",
        "debtorAccount": "001000*****00011"
    },
    "cipsTransactionDetailList": [
        {
            "instructionId": "remitnpi1-5",
            "endToEndId": "Family",
            "amount": 10.00,
            "creditorAgent": "2501",
            "creditorBranch": "1",
            "creditorName": "CREDITOR ACCOUNT NAME",
            "creditorAccount": "001005*****00018",
            "particulars": "charge-particular-1",
            "remarks": "charge-remarks-1 ",
            "remitterName": "Biraj Bahadur",
            "countryOfOrigin": "UAE",
            "remitterAddress": "dubai",
            "purposeOfTransaction": "family expenses",
            "remitCompanyName": "Himal Remittance"
        }
    ],
    "token": "DQv3y0MT15S3+ToQE0/w8o369gUg5tyhe3Wh+CgA89TFiPo8NaJR8rinsY62Y9mKGv8+5nzjDFaOYFlelSScFyCQEdAM+R9kxt8+USbfkYKApDssCzSUlC9lAp07hQ62YICURY0WdYxliXkvAqlTgrBL7lfTkJqhW/ulmlggWf0="
}
```

**Response Example:**
```json
{
    "cipsBatchResponse": {
        "responseCode": "000",
        "responseMessage": "SUCCESS",
        "batchId": "remitnpi5",
        "debitStatus": "000",
        "id": 712395471
    },
    "cipsTxnResponseList": [
        {
            "responseCode": "000",
            "responseMessage": "SUCCESS",
            "id": 12723904,
            "instructionId": "remitnpi1-5",
            "creditStatus": "000"
        }
    ]
}

```


**Response Parameters**

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
      <td>responseCode</td>
      <td>String</td>
      <td>-</td>
      <td>Debit leg of transaction processing API response. For example, 000 for success.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>2</td>
      <td>responseMessage</td>
      <td>String</td>
      <td>500</td>
      <td>API response description.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>3</td>
      <td>batchId</td>
      <td>String</td>
      <td>20</td>
      <td>Unique Identification for the batch for later reconciliation. (Sent by the member)</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>4</td>
      <td>debitStatus</td>
      <td>String</td>
      <td>10</td>
      <td>Debit status (000 for success, 999 for timeout, etc.). Refer to the ISO return reason sheet.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Id</td>
      <td>Integer</td>
      <td>-</td>
      <td>Unique Identification for the batch generated on the NCHL side. Required for cross-recon/reporting.</td>
      <td>Y</td>
    </tr>
  </tbody>
</table>


**Transaction Details**


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
      <td>responseCode</td>
      <td>String</td>
      <td>-</td>
      <td>Credit transaction processing API response. For example, 000 for success.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>2</td>
      <td>responseMessage</td>
      <td>String</td>
      <td>500</td>
      <td>API response description.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>3</td>
      <td>instructionId</td>
      <td>String</td>
      <td>20</td>
      <td>Unique Identification for the transaction for later reconciliation. (Sent by the NPI member)</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>4</td>
      <td>creditStatus</td>
      <td>String</td>
      <td>10</td>
      <td>Credit status (000 for success, 999 for timeout, etc.). Refer to the ISO return reason sheet.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Id</td>
      <td>Integer</td>
      <td>-</td>
      <td>Unique Identification for the transaction generated on the NCHL side. Required for cross-recon/reporting.</td>
      <td>Y</td>
    </tr>
  </tbody>
</table>



