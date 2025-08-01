---
sidebar_position: 6
---


# 6.	Transaction Reporting APIs
For reporting and reconciliation of the transactions which are processed through NPI, the following APIs will be provided. These APIs will also require the access token to access the resources and the token generation process will be same as for the transaction processing.

## 6.1 Based on transactions date:
 These APIs provide the list of transaction details based on the provided date range:
 
 
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
      <td>(BASE_URL)+/api/getcipstxnlistbydate</td>
      <td>Bearer (access_token)</td>
      <td>application/json</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>(BASE_URL)+/api/getnchlipstxnlistbydate</td>
      <td>Bearer (access_token)</td>
      <td>application/json</td>
    </tr>
  </tbody>
</table>

**Sample request:**
```json

{
"txnDateFrom":"2023-06-01",
"txnDateTo":"2023-06-30"
}
```

## 6.2 Based on batch Id:
These APIs provide the transaction details based on the batch id


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
      <td>(BASE_URL)+/api/getcipstxnlistbybatchid</td>
      <td>Bearer (access_token)</td>
      <td>application/json</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>(BASE_URL)+/api/getnchlipstxnlistbybatchid</td>
      <td>Bearer (access_token)</td>
      <td>application/json</td>
    </tr>
  </tbody>
</table>



**Sample request:**
```json
{
"batchId":"123456"
}
```

## 6.3 Based on Instruction Id:
These APIs provide the transaction details based on the instruction id and batch id.


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
      <td>(BASE_URL)+/api/getcipstxnbyinstructionid
      (BASE_URL)+/api/getnchlipstxnlistbyinstructionid
      </td>
      <td>Bearer (access_token)</td>
      <td>application/json</td>
    </tr>
  </tbody>
</table>

**Sample request:**

```json
{
"batchId":"remitnonreal7",
"instructionId":"remitnonreal1-7"
}
```


## 6.4 Sample Transaction Report Response: 
Below are the sample transaction responses generated using instruction id for both CIPS and NCHLIPS.

### 6.4.1 Response Parameters for Real-Time transactions:

**Batch Details:**

<table>
    <thead>
        <tr>
            <th>ID</th>
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
            <td>id</td>
            <td>Integer</td>
            <td>-</td>
            <td>Unique Identification for the batch generated in NCHL side.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2</td>
            <td>batchId</td>
            <td>String</td>
            <td>20</td>
            <td>Unique Identification for the batch sent by the NPI member used for reconciliation.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>3</td>
            <td>recDate</td>
            <td>Date</td>
            <td>-</td>
            <td>Date (YYYY-MM-DD)</td>
            <td></td>
        </tr>
        <tr>
            <td>4</td>
            <td>isoTxnId</td>
            <td>Integer</td>
            <td>-</td>
            <td>CBS ISO reference id.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>5</td>
            <td>batchAmount</td>
            <td>BigDecimal</td>
            <td>14,2</td>
            <td>The total sum up amount of all the transactions in the batch</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>6</td>
            <td>batchCount</td>
            <td>Integer</td>
            <td>-</td>
            <td>Total transactions in the batch.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>7</td>
            <td>batchChargeAmount</td>
            <td>BigDecimal</td>
            <td>12,2</td>
            <td>Total charge to be paid for the transaction.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>8</td>
            <td>batchCrncy</td>
            <td>String</td>
            <td>3</td>
            <td>Currency of the transaction. E.g. NPR</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>9</td>
            <td>categoryPurpose</td>
            <td>String</td>
            <td>4</td>
            <td>Purpose of the transaction. E.g. RTPS, ECPG</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>10</td>
            <td>debtorAgent</td>
            <td>String</td>
            <td>4</td>
            <td>Debtor agent code in NCHL systems.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>11</td>
            <td>debtorBranch</td>
            <td>String</td>
            <td>4</td>
            <td>Debtor branch where the transactions initiating party account is held.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>12</td>
            <td>debtorName</td>
            <td>String</td>
            <td>140</td>
            <td>Transaction initiation party account name.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>13</td>
            <td>debtorAccount</td>
            <td>String</td>
            <td>20</td>
            <td>Transaction initiation party account number.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>14</td>
            <td>debtorIdType</td>
            <td>String</td>
            <td>4</td>
            <td>Transaction initiation party private id type for ex. Citizenship, pan no, passport etc.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>15</td>
            <td>debtorIdValue</td>
            <td>String</td>
            <td>20</td>
            <td>Transactions initiation party identification number for ex. Passport number, pan no. etc.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>16</td>
            <td>debtorAddress</td>
            <td>String</td>
            <td>490</td>
            <td>Transactions initiation party postal address</td>
            <td>O</td>
        </tr>
        <tr>
            <td>17</td>
            <td>debtorPhone</td>
            <td>String</td>
            <td>20</td>
            <td>Transactions initiation party debtor phone number 
            (country code)(area code)(Phone Number) </td>
            <td>O</td>
        </tr>
        <tr>
            <td>18</td>
            <td>debtorMobile</td>
            <td>String</td>
            <td>20</td>
            <td>Transactions initiation party mobile number 
            (country code)(area code)(Phone Number) </td>
            <td>O</td>
        </tr>
        <tr>
            <td>19</td>
            <td>debtorEmail</td>
            <td>String</td>
            <td>50</td>
            <td>Debtor’s email address.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>20</td>
            <td>chhanelId</td>
            <td>String</td>
            <td>10</td>
            <td>Specification of the channel used to perform the transaction; Technical member (TECHM), Web Fund Transfer (WEBFT) etc.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>21</td>
            <td>debitStatus</td>
            <td>String</td>
            <td>10</td>
            <td>Response code received from debtor agent’s CBS</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>22</td>
            <td>debitReasonCode</td>
            <td>String</td>
            <td>10</td>
            <td>Response code returned from debtor bank.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>23</td>
            <td>ipsBatchId</td>
            <td>String</td>
            <td>13</td>
            <td>-NA</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>24</td>
            <td>fileName</td>
            <td>String</td>
            <td>100</td>
            <td>-NA</td>
            <td>O</td>
        </tr>
        <tr>
            <td>25</td>
            <td>rcreTime</td>
            <td>Date</td>
            <td>-</td>
            <td>Date with timestamp.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>26</td>
            <td>rcreUserId</td>
            <td>String</td>
            <td>50</td>
            <td>connectIPS userId</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>27</td>
            <td>sessionSrlNo</td>
            <td>Integer</td>
            <td>-</td>
            <td>CIPS session Id.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>28</td>
            <td>settlementDate</td>
            <td>Date</td>
            <td>-</td>
            <td>Transaction settlement date.</td>
            <td>O</td>
        </tr>
    <tr>
        <td>29</td>
        <td>debitReasonDesc </td>
        <td>String</td>
        <td>200</td>
        <td>Debit description. (If debit status is 000, debitReasonDesc is SUCCESS, if timeout 999, then TIMEOUT, PLEASE CONFIRM WITH BANK BEFORE RE-POSTING and so on.) </td>
        <td>Y</td>
    </tr>
    <tr>
        <td>30</td>
        <td>txnResponse  </td>
        <td>String</td>
        <td>335</td>
        <td>Transaction reference number returned by debtor bank.</td>
        <td>Y</td>
    </tr>
    </tbody>
</table>

**Transaction Details:**
 
<table border="1">
    <thead>
        <tr>
            <th>ID</th>
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
            <td>id</td>
            <td>Integer</td>
            <td>-</td>
            <td>Unique Identification for the transaction generated in NCHL side</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2</td>
            <td>batchId</td>
            <td>String</td>
            <td>20</td>
            <td>Unique Identification for the batch generated in NCHL side</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>3</td>
            <td>isoTxnId</td>
            <td>Integer</td>
            <td>-</td>
            <td>CBS ISO reference id.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>4</td>
            <td>recDate</td>
            <td>Date</td>
            <td>-</td>
            <td>Date (YYYY-MM-DD)</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>5</td>
            <td>instructionId</td>
            <td>String</td>
            <td>30</td>
            <td>Unique identification for the transaction sent by NPI member for the reconciliation purpose.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>6</td>
            <td>endToEndId</td>
            <td>String</td>
            <td>30</td>
            <td>Field used for end to end reconciliation.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>7</td>
            <td>amount</td>
            <td>BigDecimal</td>
            <td>13,2</td>
            <td>The amount to be transferred through this transaction.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>8</td>
            <td>chargeAmount</td>
            <td>BigDecimal</td>
            <td>12,2</td>
            <td>Total charge to be paid for the transaction.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>9</td>
            <td>chargeLiability</td>
            <td>String</td>
            <td>2</td>
            <td>Charge bearing party.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>10</td>
            <td>purpose</td>
            <td>String</td>
            <td>4</td>
            <td>Purpose of the transaction. E.g. RTPS, ECPG</td>
            <td>O</td>
        </tr>
        <tr>
            <td>11</td>
            <td>merchantId</td>
            <td>Integer</td>
            <td>-</td>
            <td>Merchant ID is a unique identifier to identify merchant in the system.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>12</td>
            <td>appId</td>
            <td>String</td>
            <td>15</td>
            <td>Unique identification, which will be used to identify the account details of the merchant’s application.
             A merchant can have multiple applications based on different banks account used for various shopping sites.
              Application Id will be provided by NCHL after registration.</td>
            <td></td>
        </tr>
        <tr>
            <td>13</td>
            <td>appTxnId</td>
            <td>String</td>
            <td>20</td>
            <td>Same as transaction id for fund transfer.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>14</td>
            <td>creditorAgent</td>
            <td>String</td>
            <td>4</td>
            <td>Creditor bank code in NCHL systems.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>15</td>
            <td>creditorBranch</td>
            <td>String</td>
            <td>4</td>
            <td>Creditor branch where the receiving party account is held.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>16</td>
            <td>creditorName</td>
            <td>String</td>
            <td>140</td>
            <td>Receiving party Account name.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>17</td>
            <td>creditorAccount</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party account number.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>18</td>
            <td>creditorIdType</td>
            <td>String</td>
            <td>4</td>
            <td>Receiving party private identification type for ex. Citizenship, pan no, passport etc.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>19</td>
            <td>creditorIdValue</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party identification value.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>20</td>
            <td>creditorAddress</td>
            <td>String</td>
            <td>490</td>
            <td>Receiving party postal address.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>21</td>
            <td>creditorPhone</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party phone number in the format (country code)(area code)(Phone Number)</td>
            <td>O</td>
        </tr>
        <tr>
            <td>22</td>
            <td>creditorMobile</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party mobile number in the format (country code)(area code)(Phone Number)</td>
            <td>O</td>
        </tr>
        <tr>
            <td>23</td>
            <td>creditorEmail</td>
            <td>String</td>
            <td>50</td>
            <td>Receiving party valid email address.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>24</td>
            <td>addenda1</td>
            <td>Integer</td>
            <td>15</td>
            <td rowspan ='4'>Information that is used to provide extra information about the transaction.
             The value can be set as mandatory as per configuration of category purpose.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>25</td>
            <td>addenda2</td>
            <td>Date</td>
            <td>-</td>
            <td>O</td>
        </tr>
        <tr>
            <td>26</td>
            <td>addenda3</td>
            <td>String</td>
            <td>35</td>
            <td>O</td>
        </tr>
        <tr>
            <td>27</td>
            <td>addenda4</td>
            <td>String</td>
            <td>35</td>
            <td>O</td>
        </tr>
        <tr>
            <td>28</td>
            <td>creditStatus</td>
            <td>String</td>
            <td>10</td>
            <td>Response code received from creditor agent’s CBS</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>29</td>
            <td>reasonCode</td>
            <td>String</td>
            <td>10</td>
            <td>Creditor status reason code</td>
            <td>O</td>
        </tr>
        <tr>
            <td>30</td>
            <td>reversalStatus</td>
            <td>String</td>
            <td>20</td>
            <td>Transaction reversal status in case debit success and credit failed.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>31</td>
            <td>refId</td>
            <td>String</td>
            <td>100</td>
            <td>Payment Description</td>
            <td>O</td>
        </tr>
        <tr>
            <td>32</td>
            <td>remarks</td>
            <td>String</td>
            <td>50</td>
            <td>Payment Description</td>
            <td>O</td>
        </tr>
        <tr>
            <td>33</td>
            <td>particulars</td>
            <td>String</td>
            <td>100</td>
            <td>Same as instruction id</td>
            <td>O</td>
        </tr>
        <tr>
            <td>34</td>
            <td>freeCode1</td>
            <td>String</td>
            <td>20</td>
            <td rowspan = '2'>Extra information that can be append to the transactions to be more specific about the purpose of transactions for reconciliation purpose. 
            These fields will significant only up to the initiating party bank and will not be routed to the beneficiary bank. (Contains Remittance information)</td>
            <td>O</td>
        </tr>
        <tr>
            <td>35</td>
            <td>freeCode2</td>
            <td>String</td>
            <td>20</td>
            <td>O</td>
        </tr>
        <tr>
            <td>36</td>
            <td>freeText1</td>
            <td>String</td>
            <td>100</td>
            <td>Remitter Name</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>37</td>
            <td>freeText2</td>
            <td>String</td>
            <td>100</td>
            <td>Remitter’s account number or any other identifiable number if account number is not available. </td>
            <td>O</td>
        </tr>
        <tr>
            <td>38</td>
            <td>freeText3</td>
            <td>String</td>
            <td>250</td>
            <td>Country of Origin</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>39</td>
            <td>freeText4</td>
            <td>String</td>
            <td>250</td>
            <td>Remitter Address</td>
            <td>O</td>
        </tr>
        <tr>
            <td>40</td>
            <td>freeText5</td>
            <td>String</td>
            <td>250</td>
            <td>Purpose of Transaction.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>41</td>
            <td>freeText6</td>
            <td>String</td>
            <td>250</td>
            <td>Remit Company Name</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>42</td>
            <td>freeText7</td>
            <td>String</td>
            <td>250</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>43</td>
            <td>beneficiaryId</td>
            <td>String</td>
            <td>50</td>
            <td>-</td>
            <td>O</td>
        </tr>
        <tr>
            <td>44</td>
            <td>beneficiaryName</td>
            <td>String</td>
            <td>100</td>
            <td>Transaction receiving party</td>
            <td>O</td>
        </tr>
        <tr>
            <td>45</td>
            <td>ipsBatchId</td>
            <td>Integer</td>
            <td>-</td>
            <td>NA</td>
            <td>O</td>
        </tr>
        <tr>
            <td>46</td>
            <td>rcreUserId</td>
            <td>String</td>
            <td>50</td>
            <td>Transaction creation userId</td>
            <td>O</td>
        </tr>
        <tr>
            <td>47</td>
            <td>rcreTime</td>
            <td>Date</td>
            <td>-</td>
            <td>Date with timestamp.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>48</td>
            <td>reasonDesc</td>
            <td>String</td>
            <td>200</td>
            <td>Credit description. (If credit status is 000, reasonDesc is SUCCESS, if timeout 999, then TIMEOUT, PLEASE CONFIRM WITH BANK BEFORE RE-POSTING and so on.)</td>
            <td></td>
        </tr>
        <tr>
            <td>49</td>
            <td>txnResponse</td>
            <td>String</td>
            <td>335</td>
            <td>Transaction reference received from the creditor bank.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>50</td>
            <td>isoTxnId</td>
            <td>Integer</td>
            <td>-</td>
            <td>CBS ISO reference id.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>51</td>
            <td>orignBranchId</td>
            <td>String</td>
            <td>4</td>
            <td>Original branch id of the credit account.</td>
            <td>Y</td>
        </tr>
    </tbody>
</table>

### 6.4.2 Response Parameters for Non-Real time transactions 

**Batch Details:**



<table>
    <thead>
        <tr>
            <th>ID</th>
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
            <td>id</td>
            <td>Integer</td>
            <td>-</td>
            <td>Unique Identification for the batch generated in NCHL side.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2</td>
            <td>batchId</td>
            <td>String</td>
            <td>20</td>
            <td>Unique Identification for batch sent by NPI member for reconciliation.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>3</td>
            <td>recDate</td>
            <td>Date</td>
            <td>-</td>
            <td>Date (YYYY-MM-DD)</td>
            <td></td>
        </tr>
        <tr>
            <td>4</td>
            <td>isoTxnId</td>
            <td>Integer</td>
            <td>-</td>
            <td>CBS ISO reference id.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>5</td>
            <td>batchAmount</td>
            <td>BigDecimal</td>
            <td>14,2</td>
            <td>The total sums up amount of all the transactions in the batch.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>6</td>
            <td>batchCount</td>
            <td>Integer</td>
            <td>-</td>
            <td>Total transactions in the batch.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>7</td>
            <td>batchChargeAmount</td>
            <td>BigDecimal</td>
            <td>12,2</td>
            <td>Total charge to be paid for the transaction.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>8</td>
            <td>batchCrncy</td>
            <td>String</td>
            <td>3</td>
            <td>Currency of the transaction. E.g. NPR.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>9</td>
            <td>categoryPurpose</td>
            <td>String</td>
            <td>4</td>
            <td>Purpose of the transaction as available in NCHL-IPS system.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>10</td>
            <td>debtorAgent</td>
            <td>String</td>
            <td>4</td>
            <td>Debtor agent code in NCHL systems.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>11</td>
            <td>debtorBranch</td>
            <td>String</td>
            <td>4</td>
            <td>Debtor branch where the transactions initiating party account is held.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>12</td>
            <td>debtorName</td>
            <td>String</td>
            <td>140</td>
            <td>Transaction initiation party account name.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>13</td>
            <td>debtorAccount</td>
            <td>String</td>
            <td>20</td>
            <td>Transaction initiation party account number.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>19</td>
            <td>debtorIdType</td>
            <td>String</td>
            <td>4</td>
            <td>Transaction initiation party private id type for ex. Citizenship, pan no, passport etc.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>20</td>
            <td>debtorIdValue</td>
            <td>String</td>
            <td>20</td>
            <td>Transactions initiation party identification number for ex. Passport number, pan no. etc.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>21</td>
            <td>debtorAddress</td>
            <td>String</td>
            <td>490</td>
            <td>Transactions initiation party postal address.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>22</td>
            <td>debtorPhone</td>
            <td>String</td>
            <td>20</td>
            <td>Transactions initiation party debtor phone number +&lt;country code&gt;-&lt;area code&gt;&lt;Phone Number&gt;</td>
            <td>O</td>
        </tr>
        <tr>
            <td>23</td>
            <td>debtorMobile</td>
            <td>String</td>
            <td>20</td>
            <td>Transactions initiation party mobile number +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;</td>
            <td>O</td>
        </tr>
        <tr>
            <td>24</td>
            <td>debtorEmail</td>
            <td>String</td>
            <td>50</td>
            <td>Debtor’s email address.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>25</td>
            <td>chhanelId</td>
            <td>String</td>
            <td>10</td>
            <td>Specification of the channel used to perform the transaction; Technical member (TECHM), Web Fund Transfer (WEBFT) etc.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>26</td>
            <td>debitStatus</td>
            <td>String</td>
            <td>10</td>
            <td>Response code for debit leg of the transaction.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>27</td>
            <td>debitReasonCode</td>
            <td>String</td>
            <td>10</td>
            <td>Response code returned by the debtor agent for debit leg of the transaction.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>28</td>
            <td>ipsBatchId</td>
            <td>String</td>
            <td>13</td>
            <td>Unique ACH batch id generated by NCHL for ACH routing.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>29</td>
            <td>fileName</td>
            <td>String</td>
            <td>100</td>
            <td>ACH routing file name.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>30</td>
            <td>rcreTime</td>
            <td>Date</td>
            <td>-</td>
            <td>Date with timestamp.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>31</td>
            <td>rcreUserId</td>
            <td>String</td>
            <td>50</td>
            <td>Transaction creation id.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>32</td>
            <td>sessionSeq</td>
            <td>String</td>
            <td>20</td>
            <td>ACH session sequence number.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>33</td>
            <td>settlementDate</td>
            <td>Date</td>
            <td>-</td>
            <td>ACH transaction settlement date.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>34</td>
            <td>debitReasonDesc</td>
            <td>String</td>
            <td>200</td>
            <td>Debit description. (If debit status is 000, debitReasonDesc is SUCCESS, if timeout 999, then TIMEOUT, PLEASE CONFIRM WITH BANK BEFORE REPOSTING and so on.)</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>35</td>
            <td>txnResponse</td>
            <td>String</td>
            <td>335</td>
            <td>Reference number returned by debtor bank.</td>
            <td>O</td>
        </tr>
    </tbody>
</table>



**Transaction Details:**




<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Field Name</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
        <tr>
            <td>1</td>
            <td>id</td>
            <td>Integer</td>
            <td>-</td>
            <td>Unique Identification for the transaction generated in NCHL side.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2</td>
            <td>batchId</td>
            <td>String</td>
            <td>20</td>
            <td>Unique Identification for the batch generated by NCHL for reconciliation.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>3</td>
            <td>isoTxnId</td>
            <td>Integer</td>
            <td>-</td>
            <td>CBS ISO reference id.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>4</td>
            <td>recDate</td>
            <td>Date</td>
            <td>-</td>
            <td>Date (YYYY-MM-DD)</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>5</td>
            <td>instructionId</td>
            <td>String</td>
            <td>30</td>
            <td>Unique identification for the transaction sent by NPI member for reconciliation purpose later.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>6</td>
            <td>endToEndId</td>
            <td>String</td>
            <td>30</td>
            <td>Value sent by NPI member for end to end recompilation.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>7</td>
            <td>amount</td>
            <td>BigDecimal</td>
            <td>13,2</td>
            <td>The amount to be transferred through this transaction.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>8</td>
            <td>chargeAmount</td>
            <td>BigDecimal</td>
            <td>12,2</td>
            <td>Total charge to be paid for the transaction.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>9</td>
            <td>chargeLiability</td>
            <td>String</td>
            <td>2</td>
            <td>Charge bearing party.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>10</td>
            <td>purpose</td>
            <td>String</td>
            <td>4</td>
            <td>Purpose of the transaction.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>11</td>
            <td>merchantId</td>
            <td>Integer</td>
            <td>-</td>
            <td>Merchant ID is and unique identifier to identify merchant in the system. Merchant ID will be provided by NCHL upon registering merchant for connectIPS Core Module on banks’ request.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>12</td>
            <td>appId</td>
            <td>String</td>
            <td>15</td>
            <td>Unique identification, which will be used to identify the account details of the merchant’s application. A merchant can have multiple applications based on different banks account used for various shopping sites. Application Id will be provided by NCHL after registration.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>13</td>
            <td>appTxnId</td>
            <td>String</td>
            <td>20</td>
            <td>-NA</td>
            <td>O</td>
        </tr>
        <tr>
            <td>14</td>
            <td>creditorAgent</td>
            <td>String</td>
            <td>4</td>
            <td>Creditor agent code in NCHL systems.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>15</td>
            <td>creditorBranch</td>
            <td>String</td>
            <td>4</td>
            <td>Creditor agent branch where the receiving party account is held.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>16</td>
            <td>creditorName</td>
            <td>String</td>
            <td>140</td>
            <td>Receiving party Account name.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>17</td>
            <td>creditorAccount</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party account number.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>18</td>
            <td>creditorIdType</td>
            <td>String</td>
            <td>4</td>
            <td>Receiving party private identification type for ex. Citizenship, pan no, passport etc.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>19</td>
            <td>creditorIdValue</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party identification value.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>20</td>
            <td>creditorAddress</td>
            <td>String</td>
            <td>490</td>
            <td>Receiving party postal address.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>21</td>
            <td>creditorPhone</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party phone number in the format +&lt;country code&gt;-&lt;area code&gt;&lt;Phone Number&gt;</td>
            <td>O</td>
        </tr>
        <tr>
            <td>22</td>
            <td>creditorMobile</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party mobile number in the format +&lt;country code&gt;-&lt;area code&gt;&lt;Phone Number&gt;</td>
            <td>O</td>
        </tr>
        <tr>
            <td>23</td>
            <td>creditorEmail</td>
            <td>String</td>
            <td>50</td>
            <td>Receiving party valid email address.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>24</td>
            <td>addenda1</td>
            <td>Integer</td>
            <td>15</td>
            <td rowspan = '2'>Information that is used to provide the extra information about the transaction. The value can be set as mandatory as per configuration of category purpose.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>25</td>
            <td>addenda2</td>
            <td>Date</td>
            <td>-</td>
            <td>O</td>
        </tr>
        <tr>
            <td>26</td>
            <td>addenda3</td>
            <td>String</td>
            <td>35</td>
            <td>Purpose of Txn.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>27</td>
            <td>addenda4</td>
            <td>String</td>
            <td>35</td>
            <td>Country of Origin.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>28</td>
            <td>creditStatus</td>
            <td>String</td>
            <td>10</td>
            <td>ACH settlement code (ENTR, GEN, SENT, ACTC, ACSP, ACSC/ RJCT).</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>29</td>
            <td>reasonCode</td>
            <td>String</td>
            <td>10</td>
            <td>Reason code in case credit leg is rejected.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>30</td>
            <td>reversalStatus</td>
            <td>String</td>
            <td>20</td>
            <td>Reversal status in case debit success and credit leg failed.</td>
            <td>C</td>
        </tr>
        <tr>
            <td>31</td>
            <td>refId</td>
            <td>String</td>
            <td>100</td>
            <td>Payment description.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>32</td>
            <td>remarks</td>
            <td>String</td>
            <td>50</td>
            <td>Payment description.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>33</td>
            <td>particulars</td>
            <td>String</td>
            <td>100</td>
            <td>Instruction id.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>34</td>
            <td>freeCode1</td>
            <td>String</td>
            <td>20</td>
            <td rowspan ='2'>Extra information that can be appended to the transactions to be more specific about the purpose of transactions for reconciliation purpose.
             These fields will significant only up to the initiating party bank and will not be routed to the beneficiary bank.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>35</td>
            <td>freeCode2</td>
            <td>String</td>
            <td>20</td>
            <td>O</td>
        </tr>
        <tr>
            <td>36</td>
            <td>freeText1</td>
            <td>String</td>
            <td>100</td>
            <td>Remitter Name</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>37</td>
            <td>freeText2</td>
            <td>String</td>
            <td>100</td>
            <td>Remitter’s account number or any other identifiable number if account number is not available.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>38</td>
            <td>freeText3</td>
            <td>String</td>
            <td>100</td>
            <td>Remit Company Name.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>39</td>
            <td>freeText4</td>
            <td>String</td>
            <td>100</td>
            <td>Remitter Name/Debtor Account Name.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>40</td>
            <td>freeText5</td>
            <td>String</td>
            <td>100</td>
            <td>Address (Optional).</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>41</td>
            <td>beneficiaryId</td>
            <td>String</td>
            <td>50</td>
            <td>-NA.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>42</td>
            <td>beneficiaryName</td>
            <td>String</td>
            <td>100</td>
            <td>Transaction receiving party.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>43</td>
            <td>ipsBatchId</td>
            <td>Integer</td>
            <td>-</td>
            <td>Unique batch id generated by NCHL for ACH routing.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>44</td>
            <td>rcreUserId</td>
            <td>String</td>
            <td>50</td>
            <td>Transaction creation id</td>
            <td>O</td>
         </tr>
        <tr>
            <td>45</td>
            <td>rcreTime</td>
            <td>Date</td>
            <td>-</td>
            <td>Date with timestamp.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>46</td>
            <td>ipsTxnId</td>
            <td>String</td>
            <td>16</td>
            <td>Unique transaction id generated by NCHL for ACH routing.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>47</td>
            <td>reasonDesc</td>
            <td>String</td>
            <td>200</td>
            <td>Credit description. (If credit status is ACSC, reasonDesc is Empty, if RJCT, reasonDesc is “Account does not exist” or some other reason.)</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>48</td>
            <td>txnResponse</td>
            <td>String</td>
            <td>335</td>
            <td>Transaction reference returned by creditor bank.</td>
            <td>O</td>
        </tr>
</table>





