---
sidebar_position: 5
---


# 5. API Specifications

## 5.1. Authentication and Authorization


OAuth 2.0 API authentication mechanism has been implemented for authentication and authorization 
process in NPI. The client needs to provide client specific credentials in the authorization header and 
user credentials in the body with grant type as password for token generation on first login or during 
refresh token expiration.

On successful authentication, system will provide access token and refresh token pair. Access tokens 
are used for accessing the resources and refresh tokens are used for renewal of access tokens. Validity 
of access token is 30 seconds and validity of refresh token is 12 hours (which may vary as per NCHL 
Policy). Access tokens could be obtained by using non-expired refresh tokens in the body with grant 
type as refresh token. 



Method to generate & use access and refresh token



1. Use the provided basic authentication credentials along with username/password and grant type as 
password to obtain a refresh token. Refresh token has validity of 12 hours for now, so store the 
refresh token for future access token requests. Do not use the access token obtained during this 
initial request. 

2. Use the stored refresh token obtained from step 1 to generate new access token putting grant type 
as refresh token. Access tokens are valid for 300 seconds. Use the obtained access token for 
resources requests within this period to access every endpoint in NPI. On expiry of access token re-request using the stored refresh token. 

3. On expiry of refresh token, repeat the process from step 1. 

POST URL For Authentication: **/oauth/token**


## 5.2. Account Validation


Account validation is used for validating creditor account before initiating the actual transaction. 
Validating creditor account beforehand reduces the transactions rejection ratio. After the account is 
validated the actual financial transactions APIs are required to be called. It validates the existence of the 
account, status and account name match details. This section describes the required information for 
account validation through NPI. 


**POST URL: /api/validatebankaccount**



**Request Parameter:**

<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Field Name </th>
         <th>Data Type </th>
         <th>Length </th>
         <th>Description </th>
         <th>Presence</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>bankId</td>
      <td>String </td>
      <td>4</td>
      <td>Assigned bank id</td>
      <td>Y</td>
     </tr>
     <tr>
      <td>2</td>
      <td>accountId</td>
      <td>String </td>
      <td>20</td>
      <td>Bank account number.</td>
      <td>Y</td>
     </tr>
     <tr>
      <td>3</td>
      <td>accountName</td>
      <td>String </td>
      <td>140</td>
      <td>Bank Account name.</td>
      <td>Y</td>
     </tr>
    </tbody>
</table>

**Response Parameter:**

<table>
     <thead>
      <tr>
         <th>#</th>
         <th>Field Name </th>
         <th>Data Type </th>
         <th>Length </th>
         <th>Description </th>
         <th>Presence</th>
       </tr> 
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>bankId </td>
      <td>String</td>
      <td>4</td>
      <td>Customer bank id </td>
      <td>Y</td>
     </tr>
       <tr>
      <td>2</td>
      <td>branchId</td>
      <td>String</td>
      <td>4</td>
      <td>Actual branch id.</td>
      <td>Y</td>
     </tr>
      <tr>
      <td>3</td>
      <td>accountId</td>
      <td>String</td>
      <td>20</td>
      <td>Bank account number.</td>
      <td>Y</td>
     </tr> 
      <tr>
      <td>4</td>
      <td>accountName </td>
      <td>String</td>
      <td>140</td>
      <td>Bank account name. </td>
      <td>C</td>
     </tr> 
      <tr>
      <td>5</td>
      <td>currency</td>
      <td>String</td>
      <td>3</td>
      <td>Bank account currency.</td>
      <td>Y</td>
     </tr> 
      <tr>
      <td>6</td>
      <td>responseCode </td>
      <td>String</td>
      <td>4</td>
      <td>Response Code. </td>
      <td>Y</td>
     </tr> 
      <tr>
      <td>7</td>
      <td>responseMessage</td>
      <td>String</td>
      <td>140</td>
      <td>Response Message.</td>
      <td>Y</td>
     </tr> 
      <tr>
      <td>8</td>
      <td>matchPercentage</td>
      <td>Integer</td>
      <td>3</td>
      <td>Match percentage.</td>
      <td>Y</td>
     </tr>  
     <tr>
      <td>9</td>
      <td>baseUrl</td>
      <td>String</td>
      <td>100</td>
      <td>Base Url</td>
      <td>C</td>
     </tr> 
      <tr>
      <td>10</td>
      <td>username</td>
      <td>String</td>
      <td>20</td>
      <td>User name. </td>
      <td>c</td>
     </tr> 
      <tr>
      <td>11</td>
      <td>password</td>
      <td>String</td>
      <td>20</td>
      <td>User password</td>
      <td>C</td>
     </tr>
    </tbody>
</table>

**Excepted Status Codes:**

OK 

BadRequest 

InternalServerError 

NotFound 


**Request Message Example:** 
```json
{
"bankId":"0401",
"accountId" : "08110017501011",
"accountName" : "MANISHA DHAUBANJAR"
}
```

**Sample response example:** 
```json
{
 "bankId": "0401",
 "branchId": "81",
 "accountId": "08110017501011",
 "accountName": null,
 "currency": "NPR",
 "responseCode": "000",
 "responseMessage": "Account successfully validated.",
 "matchPercentate": 100,
 "baseUrl": null,
 "userName": null,
 "password": null
}
```

**Sample response example I:**
```json
{
 "bankId": "0401",
 "branchId": "81",
 "accountId": "08110017501011",
 "accountName": null,
 "currency": "NPR",
 "responseCode": "999",
 "responseMessage": "Some difference in beneficiary account name observed. Transaction once sent isirreversible, please reconfirm the beneficiary account number.",
 "matchPercentate": 94,
 "baseUrl": null,
 "userName": null,
 "password": null
}
```


**Sample response example II:**
```json
{
 "bankId": "0401",
 "branchId": "81",
 "accountId": "08110017501010",
 "accountName": null,
 "currency": "NPR",
 "responseCode": "523",
 "responseMessage": "Beneficiary account name mismatch.",
 "matchPercentate": 40,
 "baseUrl": null,
 "userName": null,
 "password": null
}
```


**Explanation on Response Codes:**

<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Response Code </th>
         <th>Description </th>
         <th>Remarks</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>000</td>
      <td>Account successfully validated. 
Account 100% Match. </td>
      <td>Process the transaction to NPI. </td>
     </tr>
      <tr>
      <td>2</td>
      <td>999 </td>
      <td>Some difference in beneficiary 
account name observed. Refer 
the account name percentage 
(match Percentage) in response.</td>
      <td>If the match percentage is > 80, process the 
transaction to NPI. Otherwise stop the 
transaction for further processing. </td>
     </tr>
      <tr>
      <td>3</td>
      <td>Not (000 & 999) </td>
      <td>Issue with the beneficiary 
account. Please refer the 
response message.</td>
      <td>Stop the transaction for further processing to 
NPI. </td>
     </tr>
    </tbody>
</table>


## 5.3. Transaction APIs 


NPI supports real time and non-real time transactions. Both the debit and credit legs are completed in a 
single session in real time transaction. Whereas, in non-real time transaction, debit leg is completed in 
real-time but credit leg(s) are completed on deferred basis. Following are the API details of the 
transactions supported in NPI. 

### 5.3.1. Real Time Transactions (postcipsbatch) 

This API is used for posting fund transfer transaction in ***connect***IPS e-Payment system in real time basis. 
Since the nature of transaction is real time, the postcipsbatch method can contain only single transaction 
in a batch. The execution of both debit and credit legs happens in a real time and provides the response 
accordingly within a single session. Below is the process flow diagram for the postcipsbatch method.


## Process Flow:


1. Initiating participant will push the transactions to NPI. Such transaction can be only one-to-one. 
   
2. NPI will then perform its technical validations. And then forward the request to the core switch 
system. 

3. connectIPS system will send a debit request to debtor bank. Debit authorization by the member shall 
be provided to its bank as the part of the initial enrollment. 

4. NPI receives the ISO response from the debtor bank. The debit status with code 000 will be treated 
as debit success and for rest of the status, it will be treated as debit rejected/failed. 

5. Based on the success debit response, the connectIPS system will route the transactions to the 
creditor bank for crediting the beneficiary account. 

6. NPI receives the ISO response from the creditor bank. The credit status with ISO status code as 
000, 999, null or DEFER are treated as success. 
**Status 000:** Credit success 
**Status 999:** Credit ISO time out where it is not sure whether the account has been credited or not, 
which requires the manual reconciliation from creditor bank. Once it is verified from the bank, the 
status will be updated to 000 or Failed (which requires transaction refunding to the initiating bank). 
**Status DEFER:** As per the business requirement for some of the Creditor/ Merchant payments. 
**Note:** For both 999 and DEFER, the final status can be fetched using the transaction reporting API 
as listed below. 
(Collections having high volume), instead of individual transaction credit, consolidation credit is 
initiated as a single ISO message on an intermittence basis. Frequency of such consolidation can 
be configurable (which is currently setup as twice a day at 11:45 AM and 14:45 PM). Once the credit 
is successful at the creditor bank, the transaction status will be updated as 000. 




![Example Image](/img/CIPSBatch_flow_diagram.png)
<p align="center" class="centered-caption"></p>


7. Transaction status (both credit and debit) are sent back to the NPI. 
8. Initiating participant can fetch the transaction details using transaction reporting API at any point of 
time.


POST URL: **/api/postcipsbatch**

Following points should be consider while posting the transactions through postcipsbatch. 
1. Both debtor and creditor bank should be the member of connectIPS e-Payment system. 
   
2. Postcipsbatch supports both On-Us (same bank) and Off-Us (interbank) transactions. 
   
3. On-Us and Off-Us transactions are to be sent in different batches. 
4. Sender will have to ensure that the channel specific transaction limits (as per NRB) is complied with. 
The current per transaction limit for postcipsbatch is 2 million for Off-Us transactions (interbank as 
per transaction limit of connectIPS) and 200 Million for On-Us transactions (same bank as per 
transaction limit of NCHL-IPS). 

5. The transactions per batch limit will be 1. 
 
6. Allowed category purpose for postcipsbatch is ECPG.



**Request Parameters:**


The request parameters for this method are created to align the format of ISO 
20022 message format which is currently being used in NCHL-IPS system. Hence the payment 
information is segregated as batch and transaction details.


Batch Details:


<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Field Name </th>
         <th>Data Type </th>
         <th>Length</th>
         <th>Description </th>
         <th>Presence</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>batchId</td>
      <td>String</td>
      <td>20</td>
      <td>Unique Identification for the batch for later 
reconciliation.</td>
      <td>Y</td>
     </tr>
     <tr>
      <td>2</td>
      <td>batchAmount</td>
      <td>BigDecimal</td>
      <td>14,2</td>
      <td>The total sum up amount of all the 
transactions in the batch </td>
      <td>Y </td>
     </tr>
     <tr>
      <td>3</td>
      <td>batchCount </td>
      <td>Integer</td>
      <td>-</td>
      <td>Total transactions in the batch</td>
      <td>Y</td>
     </tr>
     <tr>
      <td>4</td>
      <td>batchCrncy</td>
      <td>String</td>
      <td>3</td>
      <td>Currency of the transaction. E.g. NPR </td>
      <td>Y</td>
     </tr>
     <tr>
      <td>5</td>
      <td>categoryPurpose</td>
      <td>String</td>
      <td>4</td>
      <td>Purpose of the transaction. E.g. RTPS, ECPG</td>
      <td>Y</td>
     </tr>
     <tr>
      <td>6</td>
      <td>debtorAgent </td>
      <td>String</td>
      <td>4</td>
      <td>Financial institution where the transactions 
initiating party account is held. </td>
      <td>Y</td>
     </tr>
     <tr>
      <td>7</td>
      <td>debtorBranch</td>
      <td>String</td>
      <td>4 </td>
      <td>Financial institution branch where the 
transactions initiating party account is held.</td>
      <td>Y</td>
     </tr>
     <tr>
      <td>8</td>
      <td>debtorName </td>
      <td>String</td>
      <td>140</td>
      <td>Transaction initiation party account name. </td>
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
      <td>Transaction initiation party private id type for 
ex. Citizenship, pan no, passport etc.</td>
      <td>O</td>
     </tr>
     <tr>
      <td>11</td>
      <td>debtorIdValue</td>
      <td>String</td>
      <td>20</td>
      <td>Transactions initiation party identification 
number for ex. Passport number, pan no. etc. </td>
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
      <td>debtorPhone </td>
      <td>String</td>
      <td>20</td>
      <td>Transactions initiation party debtor phone 
number+&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;</td>
      <td>O</td>
     </tr>
<tr>
      <td>14</td>
      <td>debtorMobile </td>
      <td>String</td>
      <td>20</td>
      <td>Transactions initiation party mobile number </td>
      <td>O</td>
     </tr>
<tr>
      <td>15</td>
      <td>debtorEmail </td>
      <td>String</td>
      <td>50</td>
      <td>Transactions initiation party email address.</td>
      <td>O</td>
     </tr>
</tbody>
</table>


Transaction Details:


<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Field Name</th>
         <th>Data Type </th>
         <th>Length</th>
         <th>Description </th>
         <th>Presence</th>
       </tr>
     </thead>
     <tbody>
    <tr>
        <td>1 </td>
        <td>instructionId</td>
        <td>String</td>
        <td>30</td>
        <td>Unique identification for the transaction for reconciliation purpose later.</td>
        <td>Y</td>
    </tr>
    <tr>
        <td>2 </td>
        <td>endToEndId</td>
        <td>String</td>
        <td>30</td>
        <td>Identification reference for both sender and receiver.</td>
        <td>Y</td>
    </tr>
   <tr>
        <td>3 </td>
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
        <td>The initiating party will assign the purpose of the transactions. List of purpose category is available in the product document.</td>
        <td>O</td>
    </tr>
     <tr>
        <td>5 </td>
        <td>creditorAgent</td>
        <td>String</td>
        <td>4</td>
        <td>Financial institution where the receiving party's accounts are held.</td>
        <td>Y</td>
    </tr>
    <tr>
        <td>6</td>
        <td>creditorBranch</td>
        <td>String</td>
        <td>4</td>
        <td>Financial institution branch where the receiving party's account is held.</td>
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
        <td>9 </td>
        <td>creditorIdType</td>
        <td>String</td>
        <td>4</td>
        <td>Receiving party private identification type (e.g., Citizenship, PAN no, passport, etc.).</td>
        <td>O</td>
    </tr>
    <tr>
        <td>10 </td>
        <td>creditorIdValue</td>
        <td>String</td>
        <td>20</td>
        <td>Receiving party identification value.</td>
        <td>O</td>
    </tr>
    <tr>
       <td>11 </td>
        <td>creditorAddress</td>
        <td>String</td>
        <td>490</td>
        <td>Receiving party postal address.</td>
        <td>O</td>
    </tr>
    <tr>
       <td>12 </td>
        <td>creditorPhone</td>
        <td>String</td>
        <td>20</td>
        <td>Receiving party phone number in the format +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;.</td>
        <td>O</td>
    </tr>
        <tr>
        <td>13</td>
        <td>creditorMobile</td>
        <td>String</td>
        <td>20</td>
        <td>Receiving party mobile number in the format +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;.</td>
        <td>O</td>
    </tr>
    <tr>
    <td>14</td>
        <td>creditorEmail</td>
        <td>String</td>
        <td>50</td>
        <td>Receiving party valid email address.</td>
        <td>O</td>
        </tr>
      <tr>
        <td>15</td>
        <td>addenda1</td>
        <td>Integer</td>
        <td>15</td>
        <td rowspan = '4'>Information that is used to provide the extra 
information about the transaction. The value 
can be set as mandatory as per configuration 
of category purpose. </td>
        <td>C</td>
 </tr>
    <tr>
      <td>16</td>
      <td>addenda2</td>
      <td>Date</td>
      <td></td>
      <td>C</td>
</tr>
       <tr>
       <td>17</td>
        <td>addenda3</td>
        <td>String</td>
        <td>35</td>
        <td>C</td>
    </tr>
    <tr>
    <td>18</td>
        <td>addenda4</td>
        <td>String</td>
        <td>35</td>
        <td>C</td>
    </tr>
       <tr>
       <td>19</td>
        <td>freeCode1</td>
        <td>String</td>
        <td>20</td>
        <td rowspan = '4' >Extra information that can be appended to the transactions to be more specific about the purpose of transactions for reconciliation purpose. These fields will be significant only up to the initiating party bank and will not be routed to the beneficiary bank.</td>
        <td>O</td>
    </tr>
    <tr>
    <td>20</td>
        <td>freeCode2</td>
        <td>String</td>
        <td>20</td>
        <td>O</td>
    </tr>
    <tr>
    <td>21</td>
        <td>freeText1</td>
        <td>String</td>
        <td>100</td>
        <td>O</td>
    </tr>
    <tr>
    <td>22</td>
        <td>freeText2</td>
        <td>String</td>
        <td>100</td>
        <td>O</td>
    </tr>
    <tr>
    <td>23</td>
        <td>remarks</td>
        <td>String</td>
        <td>100</td>
        <td>Remarks field </td>
        <td>O</td>
    </tr>
  </tbody>
</table>



**Token Generation Process:**

1. Token string generation 
The token string is created by appending the financial fields in batch and transactions information. Following 
will be the procedure for token string generation: 


<pre><code parentName="pre"{...{"className":"language-json"}}>
{'Batch String= <BatchId>+","+<DebtorAgent>+","+<DebtorBranch>+","+<DebtorAccount>+","+<BatchAmount>+","+<Batch Currency (e.g. NPR)>'}</code></pre>


<pre><code parentName="pre"{...{"className":"language-json"}}>
{'Transaction String=<Instruction Id>+","<Creditor Agent>+","+<CreditorBranch>+",+<CreditorAccount> +","+<Transaction Amount>; '}</code></pre>


<pre><code parentName="pre"{...{"className":"language-json"}}>
{'Token String=Batch String + Transaction String+","+<user Id>'}</code></pre>


2. Sign the message token from step 1 using the digital certificate private key (pfx file/keystore). The digital 
signature algorithm will be the SHA256withRSA. 
3. Convert the signed token above in step 2 to base64 encoding. 
4. Pass this signature string to the “token” field of the request message. 


**Expected Status Codes:** 
OK 

BadRequest

InternalServerError 

NotFound 

Forbidden 

**Request Message Example:** 

```json
{
  "cipsBatchDetail": {
    "batchId": "KHA-198706",
    "batchAmount": 200.25,
    "batchCount": 1,
    "batchCrncy": "NPR",
    "categoryPurpose": "ECPG",
    "debtorAgent": "1701",
    "debtorBranch": "1",
    "debtorName": "Test Technical Member",
    "debtorAccount": "0051118648055",
    "debtorIdType": "0001",
    "debtorIdValue": "123456",
    "debtorAddress": "Kathmandu Nepal",
    "debtorPhone": "+977-01-4255306",
    "debtorMobile": "+977-9841011688",
    "debtorEmail": "test@test.com"
  },
  "cipsTransactionDetailList": [
    {
      "instructionId": "KHA-198706-1",
      "endToEndId": "Payment Description",
      "amount": 200.25,
      "creditorAgent": "9935",
      "creditorBranch": "1",
      "creditorName": "Rojan Nepal",
      "creditorAccount": "89567522665222",
      "creditorIdType": "0001",
      "creditorIdValue": "5689755562",
      "creditorAddress": "Bhaktapur Nepal",
      "creditorPhone": "+977-01-6655698",
      "creditorMobile": "+977-9841523659",
      "creditorEmail": "creditor1@test.com.np",
      "addenda1": 8965,
      "addenda2": "2018-09-10",
      "addenda3": "Addenda info3",
      "addenda4": "Addenda info4"
    }
  ],
  "token": "D1xAD6zEHvRpAbd6rUUekdAPpc+RvGnaL8bKbKUf9MVKrjrr8zZN2JLer87PM5s0UVlYXh7KvUW8s0GwjAlPTmZkDWr3dIHlwVZqVOCqf23Ji13BjqhrAtwxPOq9Bjtbb3Pe+l4dcuSj6RZiBv7SoVkYV0a4BkiGORL8U7lAv62Vi/00pFEDcfibqvtAluRzoDsboJh3+n0tmxai68+UOzPLKPQ0ofg7cgoTR3xUYVX8kdkR9FkSRM+os5DIbB1WN21spAo23sRhxS6GX4AYABhYYmwp7+aTAbgc0C4VR6epyIfGYKigjmRRXsnVFyevsbBatLiKgh9u5Kd/1kzY9w=="
}

```
**Response Parameters**

Batch Details:

<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Field Name </th>
         <th>Data Type </th>
         <th>Length</th>
         <th>Description </th>
         <th>Presence</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
        <td>responseCode</td>
        <td>String</td>
        <td>-</td>
        <td>Debit transaction processing API response. For example, 000 for success, 1001 for bank not reachable, 999 for debit timeout, and so on. (Refer section 6 below)</td>
        <td>Y</td>
    </tr>
    <tr>
      <td>2</td>
        <td>responseMessage</td>
        <td>String</td>
        <td>500</td>
        <td>Debit status description.</td>
        <td>Y</td>
    </tr>
    <tr>
    <td>3</td>
        <td>batchId</td>
        <td>String</td>
        <td>20</td>
        <td>Unique Identification for the batch for later reconciliation. (Generated by the NPI member)</td>
        <td>Y</td>
    </tr>
    <tr><td>4</td>
        <td>debitStatus</td>
        <td>String</td>
        <td>10</td>
        <td>Debit status (000 for success, 999 for timeout and so on) (Refer ISO return reason sheet).</td>
        <td>Y</td>
    </tr>
    <tr><td>5</td>
        <td>id</td>
        <td>Integer</td>
        <td>-</td>
        <td>Unique Identification for the batch generated in NCHL side.</td>
        <td>Y</td>
    </tr>
   </tbody>
</table>


Transaction Details:

<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Field Name </th>
         <th>Data Type </th>
         <th>Length</th>
         <th>Description </th>
         <th>Presence</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
        <td>responseCode</td>
        <td>String</td>
        <td>-</td>
        <td>Credit transaction processing API response. For example, 000 for success, 1001 for bank not reachable, 999 for debit timeout, and so on. (Refer section 6 below)</td>
        <td>Y</td>
    </tr>
    <tr><td>2</td>
        <td>responseMessage</td>
        <td>String</td>
        <td>500</td>
        <td>Credit status description.</td>
        <td>Y</td>
    </tr>
    <tr><td>3</td>
        <td>instructionId</td>
        <td>String</td>
        <td>20</td>
        <td>Unique Identification for the transaction for later reconciliation. (Generated by the NPI member)</td>
        <td>Y</td>
    </tr>
    <tr><td>4</td>
        <td>creditStatus</td>
        <td>String</td>
        <td>10</td>
        <td>Credit status (ACSP for success, RJCT for Rejected and so on) (Refer ISO return reason sheet).</td>
        <td>Y</td>
    </tr>
    <tr><td>5</td>
        <td>id</td>
        <td>Integer</td>
        <td>-</td>
        <td>Unique Identification for the transaction generated in NCHL side.</td>
        <td>Y</td>
    </tr>
   </tbody>
</table>


**Response Example:**
```json
{
  "cipsBatchResponse": {
    "responseCode": "000",
    "responseMessage": "SUCCESS",
    "batchId": " KHA-198706",
    "debitStatus": "000",
    "id": 42
  },
  "cipsTxnResponseList": [
    {
      "responseCode": "000",
      "responseMessage": " SUCCESS",
      "id": 36,
      "instructionId": "KHA-198706-1",
      "creditStatus": "000"
    }
  ]
}

```

### 5.3.2. Non-Real Time Transactions (postnchlipsbatch) 
This postipsbatch is used for posting non-real time fund transfer transactions through NCHL-IPS System. 
It handles both the cases of single transaction and batch-based credit transactions. However, the debit 
of the batch amount will be executed instantly. And once the debit is successful, transaction will be 
posted to NCHL-IPS system for credit legs by a batch process. Below is the process flow diagram for 
the postnchlipsbatch method.

**Process Flow:**


![Example Image](/img/non_real_time_txn_flow_diagram.png)
<p align="center" class="centered-caption"></p>


 1. Initiating participant will push the transactions to NPI. Such transaction could be one-to-one or batch 
based. 

2. NPI will then perform its technical validations. And then forwards the request to the core switch 
system. 

3. connectIPS system will send a debit request to debtor bank, which will be executed immediately 
based on the batch amount. Debit authorization by the member shall be provided to its bank as the 
part of the initial enrollment. 

4. NPI receives the ISO response from the debtor bank. The debit status with code 000 will be treated 
as debit success and for rest of the status it will be treated as debit rejected/failed. 

5. Based on the success debit response, a batch process will route the transactions to the creditor 
bank through NCHL-IPS system for crediting the beneficiary account. 

6. connectIPS system syncs the transaction status with NCHL-IPS system. Once the transactions are 
routed to the NCHL-IPS system, there will be multiple credit status like GEN, SENT, ACTC, ACSP, 
ACSP and RJCT until the transaction is settled. ACSC and RJCT are the final status as credit 
accepted and rejected respectively. 

7. Transaction status (both credit and debit) are sent back to NPI.
    
8. Initiating participant can fetch the transaction details using transaction reporting API at any point of 
time. 

9. Beneficiary accounts will be credited once the bank Nostro settlement is competed at Nepal Rastra 
Bank. The number of settlements and timing will be as per the NCHL-IPS operating procedure (which 
are currently at 12:30 PM, 1:30 PM, 2:30 PM and 4:00 PM)

POST URL: **/api/postnchlipsbatch**

Following points should be consider while posting the transactions to postnchlipsbatch. 
1. Debtor bank must be the member of connectIPS e-Payment system however creditor bank can be 
the member of NCHL-IPS system. 
2. Postnchlipsbatch supports only the Off-Us (interbank) transactions. 
3. The transaction count limit and transaction amount limit is as defined by NCHL-IPS system, which 
is based on the category purposes. Addenda information are also mandatory for some of the 
category purpose (refer to product note for details). 
4. Number of transactions within a batch (batch limit) is 10,000. 


**Request Parameters:** 

The request parameters for this method are created to align the format of ISO 20022 message format 
which is currently being used in NCHL-IPS system. Hence the payment information are segregated as 
a batch and transaction details

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
            <td>The total sum up amount of all the transactions in the batch.</td>
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
            <td>Currency of the transaction. E.g., NPR</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>5</td>
            <td>categoryPurpose</td>
            <td>String</td>
            <td>4</td>
            <td>Purpose of the transaction. E.g., RTPS, ECPG</td>
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
<table>
    <thead>
        <tr> <th>#</th>
            <th>Field Name</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>1</td>
            <td>instructionId</td>
            <td>String</td>
            <td>30</td>
            <td>Unique identification for the transaction for reconciliation purpose later.</td>
            <td>Y</td>
        </tr>
        <tr><td>2</td>
            <td>endToEndId</td>
            <td>String</td>
            <td>30</td>
            <td>Identification reference for both sender and receiver.</td>
            <td>Y</td>
        </tr>
        <tr><td>3</td>
            <td>amount</td>
            <td>BigDecimal</td>
            <td>13,2</td>
            <td>The amount to be transferred through this transaction.</td>
            <td>Y</td>
        </tr>
        <tr><td>4</td>
            <td>purpose</td>
            <td>String</td>
            <td>4</td>
            <td>The initiating party will assign purpose of the transactions. List of purpose category is available in product document.</td>
            <td>O</td>
        </tr>
        <tr><td>5</td>
            <td>creditorAgent</td>
            <td>String</td>
            <td>4</td>
            <td>Financial institution where the receiving party accounts is held.</td>
            <td>Y</td>
        </tr>
        <tr><td>6</td>
            <td>creditorBranch</td>
            <td>String</td>
            <td>4</td>
            <td>Financial institution branch where the receiving party account is held.</td>
            <td>Y</td>
        </tr>
        <tr><td>7</td>
            <td>creditorName</td>
            <td>String</td>
            <td>140</td>
            <td>Receiving party Account name.</td>
            <td>Y</td>
        </tr>
        <tr><td>8</td>
            <td>creditorAccount</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party account number.</td>
            <td>Y</td>
        </tr>
        <tr><td>9</td>
            <td>creditorIdType</td>
            <td>String</td>
            <td>4</td>
            <td>Receiving party private identification type for ex. Citizenship, pan no, passport etc.</td>
            <td>O</td>
        </tr>
        <tr><td>10</td>
            <td>creditorIdValue</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party identification value.</td>
            <td>O</td>
        </tr>
        <tr><td>11</td>
            <td>creditorAddress</td>
            <td>String</td>
            <td>490</td>
            <td>Receiving party postal address.</td>
            <td>O</td>
        </tr>
        <tr><td>12</td>
            <td>creditorPhone</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party phone number in the format +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;.</td>
            <td>O</td>
        </tr>
          <tr>
            <td>13</td>
            <td>creditorMobile</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party mobile number in the format +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>14</td>
            <td>creditorEmail</td>
            <td>String</td>
            <td>50</td>
            <td>Receiving party valid email address.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>15</td>
            <td>addenda1</td>
            <td>Integer</td>
            <td>15</td>
            <td rowspan= '8'>
            Information that is used to provide the extra 
information about the transaction. The 
value can be set as mandatory as per 
configuration of category purpose.


Extra information that can be append to 
the transactions to be more specific about 
the purpose of transactions for 
reconciliation purpose. These fields will 
significant only up to the initiating party 
bank and will not be routed to the 
beneficiary bank. 

  </td>
            <td>C</td>
            </tr>
            <tr>
            <td>16</td>
            <td>addenda2</td>
            <td>Date</td>
            <td>-</td>
            <td>C</td>
            </tr>
            <tr>
            <td>17</td>
            <td>addenda3</td>
            <td>String</td>
            <td>35</td>
             <td>C</td></tr>
            <tr>
            <td>18</td>
            <td>addenda4</td>
            <td>String</td>
            <td>15</td>
             <td>C</td></tr>
            <tr>
            <td>19</td>
            <td>freeCode1</td>
            <td>String</td>
            <td>15</td>
             <td>0</td></tr>
            <tr>
            <td>20</td>
            <td>freeCode2</td>
            <td>String</td>
            <td>15</td>
             <td>0</td></tr>
            <tr>
            <td>21</td>
            <td>freeText1</td>
            <td>String</td>
            <td>15</td>
             <td>0</td></tr>
            <tr>
            <td>22</td>
            <td>freeText2</td>
            <td>String</td>
            <td>15</td>
             <td>0</td></tr>
  </tbody>
</table>

**Token Generation Process:**

1. Token string generation 
The token string is created by appending the financial fields in batch and transactions information. Following 
will be the procedure for token string generation: 

Batch String=
<pre><code parentName="pre"{...{"className":"language-json"}}>
{'Batch String: "<BatchId>,<DebtorAgent>,<DebtorBranch>,<DebtorAccount>,<BatchAmount>,<BatchCurrency>,<CategoryPurpose>'}</code></pre>


For each transaction 


<pre><code parentName="pre"{...{"className":"language-json"}}>
{' Transaction String: "<Instruction Id>,<CreditorAgent>,<CreditorBranch>,<CreditorAccount>,<Transaction Amount> '}</code></pre>

<pre><code parentName="pre"{...{"className":"language-json"}}>{' Token String: <BatchString>,<TransactionString>,<userId>'}</code></pre>



2. Generate signed hash value of token string using private key of provided certificate. 
3. Send the generate hash value in “token” field.


Expected Status Codes: 
OK 

BadRequest 

InternalServerError 

NotFound 

Forbidden 

**RequestMessage Example:** 
```json
{
  "nchlIpsBatchDetail": {
    "batchId": "KHA-198706",
    "batchAmount": 200.25,
    "batchCount": 1,
    "batchCrncy": "NPR",
    "categoryPurpose": "CUST",
    "debtorAgent": "1701",
    "debtorBranch": "1",
    "debtorName": "Test Technical Member",
    "debtorAccount": "0051118648055",
    "debtorIdType": "0001",
    "debtorIdValue": "123456",
    "debtorAddress": "Kathmandu Nepal",
    "debtorPhone": "+977-01-4255306",
    "debtorMobile": "+977-9841011688",
    "debtorEmail": "test@test.com"
  },
  "nchlIpsTransactionDetailList": [
    {
      "instructionId": " KHA-198706-1",
      "endToEndId": "Payment Description",
      "amount": 200.25,
      "creditorAgent": "9935",
      "creditorBranch": "1",
      "creditorName": "Rojan Nepal",
      "creditorAccount": "89567522665222",
      "creditorIdType": "0001",
      "creditorIdValue": "5689755562",
      "creditorAddress": "Bhaktapur Nepal",
      "creditorPhone": "+977-01-6655698",
      "creditorMobile": "+977-9841523659",
      "creditorEmail": "creditor1@test.com.np",
      "addenda1": 8965,
      "addenda2": "2018-09-10",
      "addenda3": "Addenda info3",
      "addenda4": "Addenda info4"
    }
  ],
  "token": "D1xAD6zEHvRpAbd6rUUekdAPpc+RvGnaL8bKbKUf9MVKrjrr8zZN2JLer87PM5s0UVlYXh7KvUW8s0GwjAlPTmZkDWr3dIHlwVZqVOCqf23Ji13BjqhrAtwxPOq9Bjtbb3Pe+l4dcuSj6RZiBv7SoVkYV0a4BkiGORL8U7lAv62Vi/00pFEDcfibqvtAluRzoDsboJh3+n0tmxai68+UOzPLKPQ0ofg7cgoTR3xUYVX8kdkR9FkSRM+os5DIbB1WN21spAo23sRhxS6GX4AYABhYYmwp7+aTAbgc0C4VR6epyIfGYKigjmRRXsnVFyevsbBatLiKgh9u5Kd/1kzY9w=="
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
                <td>Debit transaction processing API response. For example, 000 for success, 1001 for bank not reachable, 999 for debit timeout, and so on. (Refer section 6 below)</td>
                <td>Y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>responseMessage</td>
                <td>String</td>
                <td>500</td>
                <td>Debit status description.</td>
                <td>Y</td>
            </tr>
            <tr>
                <td>3</td>
                <td>batchId</td>
                <td>String</td>
                <td>20</td>
                <td>Unique Identification for the batch for later reconciliation. (Generated by the NPI member)</td>
                <td>Y</td>
            </tr>
            <tr>
                 <td>4</td>
                <td>debitStatus</td>
                <td>String</td>
                <td>10</td>
                <td>Debit status (000 for success, 999 for timeout and so on). (Refer ISO return reason sheet)</td>
                <td>Y</td>
            </tr>
            <tr>
                <td>5</td>
                <td>id</td>
                <td>Integer</td>
                <td>-</td>
                <td>Unique Identification for the batch generated in NCHL side.</td>
                <td>Y</td>
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
                <td>responseCode</td>
                <td>String</td>
                <td>-</td>
                <td>Credit transaction processing API response. For example, 000 for success, 1001 for bank not reachable, 999 for debit timeout, and so on. (Refer section 6 below)</td>
                <td>Y</td>
            </tr>
            <tr>
                 <td>2</td>
                <td>responseMessage</td>
                <td>String</td>
                <td>500</td>
                <td>Credit status description.</td>
                <td>Y</td>
            </tr>
            <tr>
            <td>3</td>
                <td>instructionId</td>
                <td>String</td>
                <td>20</td>
                <td>Unique Identification for the transaction for later reconciliation. (Generated by the NPI member)</td>
                <td>Y</td>
            </tr>
            <tr>
            <td>4</td>
                <td>creditStatus</td>
                <td>String</td>
                <td>10</td>
                <td>Credit status (ACSP for success, RJCT for Rejected, and so on). (Refer ISO return reason sheet)</td>
                <td>Y</td>
            </tr>
            <tr>
            <td>5</td>
                <td>id</td>
                <td>Integer</td>
                <td>-</td>
                <td>Unique Identification for the transaction generated in NCHL side.</td>
                <td>Y</td>
            </tr>
        </tbody>
    </table>


**Response Example:** 
```json

{
  "cipsBatchResponse": {
    "responseCode": "000",
    "responseMessage": "SUCCESS",
    "batchId": " KHA-198706",
    "debitStatus": "000",
    "id": 42
  },
  "cipsTxnResponseList": [
    {
      "responseCode": "ENTR",
      "responseMessage": " PENDING FOR POSTING IN NCHL-IPS",
      "id": 36,
      "instructionId": "KHA-198706-1",
      "creditStatus": "ENTR"
    }
  ]
}
```
### 5.3.3. Aggregated Service APIs 

These are related to the consolidated service APIs of the creditors including Government, 
SemiGovernment, large corporates and other creditors/merchants that are enrolled by the member BFIs 
of NCHL and then extended to the others for integrating in their channels.


Refer to the separate NPI Aggregated Service API document for further details. 


## 5.4. Transaction Reporting APIs 

For reporting and reconciliation of the transactions which are processed through NPI, the following APIs 
will be provided. These APIs will also require the access token to access the resources and the token 
generation process will be same as for the transaction processing. 

Based on transactions date: These APIs provide the list of transaction details based on the provided 
date range. 
**/api/getcipstxnlistbydate** --> For cips transactions. 
**/api/getnchlipstxnlistbydate** --> For ips transactions. 

**Sample request message:**
```json
{ 
"txnDateFrom":"2018-11-01", 
"txnDateTo":"2018-12-06" 
} 
```


Based on batch Id: These APIs provide the transaction details based on the batch id 

**/api/getcipstxnlistbybatchid** --> For cips transactions. 
**/api/getnchlipstxnlistbybatchid** --> For ips transactions. 

**Sample request message:**

```json
{ 
"batchId":"123456" 
}
```

Based on Instruction Id: These APIs provide the transaction details based on the instruction id and batch id. 
**/api/getcipstxnbyinstructionid** --> For cips transactions. 
**/api/getnchlipstxnlistbyinstructionid** --> For ips transactions. 


**Sample request message:**
 ```json
{ 
"batchId":"123456", 
"instructionId":"instr-123456" 
} 
 ```

**Sample Transaction Report Response:** Below are the sample transaction responses generated using instruction id for both CIPS and NCHLIPS.

**Response Parameters for CIPS transactions**


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
        <tr><td>1</td>
            <td>id</td>
            <td>Integer</td>
            <td>-</td>
            <td>Unique Identification for the batch generated in NCHL side.</td>
            <td>Y</td>
        </tr>
        <tr><td>2</td>
            <td>batchId</td>
            <td>String</td>
            <td>20</td>
            <td>Unique Identification for the batch sent by the NPI member used for reconciliation.</td>
            <td>Y</td>
        </tr>
        <tr><td>3</td>
            <td>recDate</td>
            <td>Date</td>
            <td>-</td>
            <td>Date (YYYY-MM-DD)</td>
            <td>Y</td>
        </tr>
        <tr><td>4</td>
            <td>isoTxnId</td>
            <td>Integer</td>
            <td>-</td>
            <td>CBS ISO reference id.</td>
            <td>Y</td>
        </tr>
        <tr><td>5</td>
            <td>batchAmount</td>
            <td>BigDecimal</td>
            <td>14,2</td>
            <td>The total sum up amount of all the transactions in the batch.</td>
            <td>Y</td>
        </tr>
        <tr><td>6</td>
            <td>batchCount</td>
            <td>Integer</td>
            <td>-</td>
            <td>Total transactions in the batch.</td>
            <td>Y</td>
        </tr>
        <tr><td>7</td>
            <td>batchChargeAmount</td>
            <td>BigDecimal</td>
            <td>12,2</td>
            <td>Total charge to be paid for the transaction.</td>
            <td>Y</td>
        </tr>
        <tr><td>8</td>
            <td>batchCrncy</td>
            <td>String</td>
            <td>3</td>
            <td>Currency of the transaction. E.g., NPR</td>
            <td>Y</td>
        </tr>
        <tr><td>9</td>
            <td>categoryPurpose</td>
            <td>String</td>
            <td>4</td>
            <td>Purpose of the transaction. E.g., RTPS, ECPG</td>
            <td>Y</td>
        </tr>
        <tr><td>10</td>
            <td>debtorAgent</td>
            <td>String</td>
            <td>4</td>
            <td>Debtor agent code in NCHL systems.</td>
            <td>Y</td>
        </tr>
        <tr><td>11</td>
            <td>debtorBranch</td>
            <td>String</td>
            <td>4</td>
            <td>Debtor branch where the transactions initiating party account is held.</td>
            <td>Y</td>
        </tr>
        <tr><td>12</td>
            <td>debtorName</td>
            <td>String</td>
            <td>140</td>
            <td>Transaction initiation party account name.</td>
            <td>Y</td>
        </tr>
        <tr><td>13</td>
            <td>debtorAccount</td>
            <td>String</td>
            <td>20</td>
            <td>Transaction initiation party account number.</td>
            <td>Y</td>
        </tr>
        <tr><td>14</td>
            <td>debtorIdType</td>
            <td>String</td>
            <td>4</td>
            <td>Transaction initiation party private id type for ex. Citizenship, pan no, passport etc.</td>
            <td>O</td>
        </tr>
         <tr><td>15</td>
            <td>debtorIdValue</td>
            <td>String</td>
            <td>20</td>
            <td>Transactions initiation party identification number for ex. Passport number, pan no. etc.</td>
            <td>O</td>
        </tr>
        <tr><td>16</td>
            <td>debtorAddress</td>
            <td>String</td>
            <td>490</td>
            <td>Transactions initiation party postal address.</td>
            <td>O</td>
        </tr>
        <tr><td>17</td>
            <td>debtorPhone</td>
            <td>String</td>
            <td>20</td>
            <td>Transactions initiation party debtor phone number +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;.</td>
            <td>O</td>
        </tr>
        <tr><td>18</td>
            <td>debtorMobile</td>
            <td>String</td>
            <td>20</td>
            <td>Transactions initiation party mobile number +&lt;country code&gt;-&lt;area code&gt;-&lt;Phone Number&gt;.</td>
            <td>O</td>
        </tr>
        <tr><td>19</td>
            <td>debtorEmail</td>
            <td>String</td>
            <td>50</td>
            <td>Debtor’s email address.</td>
            <td>O</td>
        </tr>
        <tr><td>20</td>
            <td>chhanelId</td>
            <td>String</td>
            <td>10</td>
            <td>Specification of the channel used to perform the transaction; Technical member (TECHM), Web Fund Transfer (WEBFT) etc.</td>
            <td>O</td>
        </tr>
        <tr><td>21</td>
            <td>debitStatus</td>
            <td>String</td>
            <td>10</td>
            <td>Response code for debit leg of the 
transaction. </td>
            <td>Y</td>
        </tr>
        <tr><td>22</td>
            <td>debitReasonCode</td>
            <td>String</td>
            <td>10</td>
            <td>Response code returned by the debtor 
agent for debit leg of the transaction. </td>
            <td>O</td>
        </tr>
         <tr><td>23</td>
            <td>ipsBatchId</td>
            <td>String</td>
            <td>13</td>
            <td>Unique ACH batch id generated by 
NCHL for ACH routing. </td>
            <td>Y</td>
        </tr>
        <tr><td>24</td>
            <td>fileName</td>
            <td>String</td>
            <td>100</td>
            <td>ACH routing file name.</td>
            <td>O</td>
        </tr>
        <tr><td>25</td>
            <td>rcreTime</td>
            <td>Date</td>
            <td>-</td>
            <td>Date with timestamp.</td>
            <td>O</td>
        </tr>
        <tr><td>26</td>
            <td>rcreUserId</td>
            <td>String</td>
            <td>50</td>
            <td>Transaction creation id. </td>
            <td>O</td>
        </tr>
        <tr><td>27</td>
            <td>sessionSeq</td>
            <td>String</td>
            <td>20</td>
            <td>ACH session sequence number.</td>
            <td>Y</td>
        </tr>
        <tr><td>28</td>
            <td>settlementDate</td>
            <td>Date</td>
            <td>-</td>
            <td>ACH transaction settlement date. </td>
            <td>Y</td>
        </tr>
        <tr><td>29</td>
            <td>debitReasonDesc</td>
            <td>String</td>
            <td>200</td>
            <td>Debit description. (If debit status is 000, debitReasonDesc is SUCCESS, if timeout 999, then TIMEOUT, PLEASE CONFIRM WITH BANK BEFORE RE-POSTING and so on.)</td>
            <td>Y</td>
        </tr>
        <tr><td>30</td>
            <td>txnResponse</td>
            <td>String</td>
            <td>335</td>
            <td>Transaction reference number returned by debtor bank.</td>
            <td>>O</td>
        </tr>
    </tbody>
</table>


**Transaction Details:**
<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Field Name </th>
         <th>Data Type </th>
         <th>Length</th>
         <th>Description </th>
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
            <tr><td>2</td>
            <td>batchId</td>
            <td>String</td>
            <td>20</td>
            <td>Unique Identification for the batch generated by NCHL for reconciliation.</td>
            <td>Y</td>
           </tr>
            <tr><td>3</td>
            <td>isoTxnId</td>
            <td>Integer</td>
            <td>-</td>
            <td>CBS ISO reference id.</td>
            <td>O</td>
             </tr>
            <tr><td>4</td>
            <td>recDate</td>
            <td>Date</td>
            <td>-</td>
            <td>Date (YYYY-MM-DD)</td>
            <td>Y</td>
          </tr>
             <tr><td>5</td>
            <td>instructionId</td>
            <td>String</td>
            <td>30</td>
            <td>Unique identification for the transaction sent by NPI member for reconciliation purpose later.</td>
            <td>Y</td>
             </tr>
            <tr><td>6</td>
            <td>endToEndId</td>
            <td>String</td>
            <td>30</td>
            <td>Value sent by NPI member for end to end recompilation.</td>
            <td>Y</td>
            </tr>
            <tr><td>7</td>
            <td>amount</td>
            <td>BigDecimal</td>
            <td>13,2</td>
            <td>The amount to be transferred through this transaction.</td>
            <td>Y</td>
             </tr>
             <tr><td>8</td>
            <td>chargeAmount</td>
            <td>BigDecimal</td>
            <td>12,2</td>
            <td>Total charge to be paid for the transaction.</td>
            <td>Y</td>
            </tr>
            <tr><td>9</td>
            <td>chargeLiability</td>
            <td>String</td>
            <td>2</td>
            <td>Charge bearing party.</td>
            <td>Y</td>
        </tr>
        <tr><td>10</td>
            <td>purpose</td>
            <td>String</td>
            <td>4</td>
            <td>Purpose of the transaction.</td>
            <td>O</td>
        </tr>
           <tr><td>11</td>
            <td>merchantId</td>
            <td>Integer</td>
            <td>-</td>
            <td>Merchant ID is a unique identifier to identify merchant in the system. Merchant ID will be provided by NCHL upon registering merchant for connectIPS Core Module on banks’ request.</td>
            <td>O</td>
        </tr>
        <tr><td>12</td>
            <td>appId</td>
            <td>String</td>
            <td>15</td>
            <td>Unique identification, which will be used to identify the account details of the merchant’s application. A merchant can have multiple applications based on different banks' accounts used for various shopping sites. Application Id will be provided by NCHL after registration.</td>
            <td>O</td>
        </tr>
        <tr><td>13</td>
            <td>appTxnId</td>
            <td>String</td>
            <td>20</td>
            <td>-NA</td>
            <td>O</td>
        </tr>
        <tr><td>14</td>
            <td>creditorAgent</td>
            <td>String</td>
            <td>4</td>
            <td>Creditor agent code in NCHL systems.</td>
            <td>Y</td>
        </tr>
        <tr><td>15</td>
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
            <td>Receiving party phone number in the format +&lt;country code&gt;-&lt;area code&gt;&lt;Phone Number&gt;.</td>
            <td>O</td>
         </tr>
            <tr>
            <td>22</td>
            <td>creditorMobile</td>
            <td>String</td>
            <td>20</td>
            <td>Receiving party mobile number in the format +&lt;country code&gt;-&lt;area code&gt;&lt;Phone Number&gt;.</td>
            <td>O</td></tr>
            <tr>
            <td>23</td>
            <td>creditorEmail</td>
            <td>String</td>
            <td>50</td>
            <td>Receiving party valid email address.</td>
            <td>O</td>
        </tr>
         <tr><td>24</td>
            <td>addenda1</td>
            <td>Integer</td>
            <td>15</td>
            <td rowspan = '4'>Information that is used to provide the extra information about the transaction. The value can be set as mandatory as per configuration of category purpose.</td>
            <td>O</td>
        </tr>
        <tr><td>25</td>
            <td>addenda2</td>
            <td>Date</td>
            <td>-</td>
            <td>O</td>
        </tr>
        <tr><td>26</td>
            <td>addenda3</td>
            <td>String</td>
            <td>35</td>
            <td>O</td>
        </tr>
        <tr><td>27</td>
            <td>addenda4</td>
            <td>String</td>
            <td>35</td>
            <td>O</td>
        </tr>
        <tr><td>28</td>
            <td>creditStatus</td>
            <td>String</td>
            <td>10</td>
            <td>Response code received from creditor agent’s CBS</td>
            <td>Y</td>
        </tr>
        <tr><td>29</td>
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
            <td rowspan = '8'>Extra information that can be appended to the transactions to be more specific about the purpose of transactions for reconciliation purpose. These fields will significant only up to the initiating party bank and will not be 37 routed to the beneficiary bank.</td>
            <td>O</td>
        </tr>
          <tr>
            <td>35</td>
            <td>freeCode2</td>
            <td>String</td>
            <td>20</td>
            </tr>
            <tr>
            <td>36</td>
            <td>freeText1</td>
            <td>String</td>
            <td>100</td>
        </tr>
        <tr>
            <td>37</td>
            <td>freeText2</td>
            <td>String</td>
            <td>100</td>
            <td></td>
        </tr>
        <tr>
            <td>38</td>
            <td>freeText3</td>
            <td>String</td>
            <td>250</td>
            <td></td>
        </tr>
        <tr>
            <td>39</td>
            <td>freeText4</td>
            <td>String</td>
            <td>250</td>
            <td></td>
           </tr>
        <tr>
            <td>40</td>
            <td>freeText5</td>
            <td>String</td>
            <td>250</td>
            <td></td>
             </tr>
        <tr>
            <td>41</td>
            <td>freeText6</td>
            <td>String</td>
            <td>250</td>
            <td></td>
          </tr>
        <tr>
            <td>42</td>
            <td>freeText7</td>
            <td>String</td>
            <td>250</td>
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
            <td>44</td>
            <td>ipsBatchId</td>
            <td>Integer</td>
            <td>-</td>
            <td>NA</td>
            <td>O</td>
        </tr>
        <tr>
            <td>45</td>
            <td>rcreUserId</td>
            <td>String</td>
            <td>50</td>
            <td>Transaction creation userId</td>
            <td>O</td>
        </tr>
        <tr>
            <td>46</td>
            <td>rcreTime</td>
            <td>Date</td>
            <td>-</td>
            <td>Date with timestamp</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>47</td>
            <td>reasonDesc</td>
            <td>String</td>
            <td>200</td>
            <td>Credit description. (If credit status is 000, reasonDesc is SUCCESS, if timeout 999, then TIMEOUT, PLEASE CONFIRM WITH BANK BEFORE RE-POSTING and so on.)</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>48</td>
            <td>txnResponse</td>
            <td>String</td>
            <td>335</td>
            <td>Transaction reference received from the creditor bank.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>49</td>
            <td>isoTxnId</td>
            <td>Integer</td>
            <td>-</td>
            <td>CBS ISO reference id.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>50</td>
            <td>orignBranchId</td>
            <td>String</td>
            <td>4</td>
            <td>Original branch id of the credit account.</td>
            <td>Y</td>
        </tr>
   </tbody>
</table>


**Case I (CIPS Debit/Credit Success)**
```json
{ 
 "id": 1340, 
 "batchId": 1357, 
 "isoTxnId": 1998, 
 "recDate": "2020-01-22", 
 "instructionId": "MACHHA-REV-3", 
 "endToEndId": "Payment Description", 
 "amount": 10.00, 
 "chargeAmount": 2.00, 
 "chargeLiability": "CG", 
 "purpose": null, 
 "merchantId": 1, 
 "appId": "MER-1-APP-3", 
 "appTxnId": "1340", 
 "creditorAgent": "1711", 
 "creditorBranch": "5", 
 "creditorName": "Creditor Name", 
"creditorAccount": "1225236632", 
 "creditorIdType": null, 
 "creditorIdValue": null, 
 "creditorAddress": null, 
 "creditorPhone": null, 
"creditorMobile": null, 
 "creditorEmail": null, 
 "addenda1": null, 
 "addenda2": null, 
 "addenda3": null, 
 "addenda4": "+977-9800000000", 
 "creditStatus": "000", 
 "reasonCode": null, 
 "reversalStatus": null, 
 "refId": "Payment Description", 
 "remarks": null, 
 "particulars": "MACHHA-REV-3", 
 "freeCode1": null, 
 "freeCode2": null, 
"freeText1": null, 
 "freeText2": null, 
 "beneficiaryId": null, 
 "beneficiaryName": null, 
"ipsBatchId": null, 
 "rcreUserId": "LAXMI@1701", 
 "rcreTime": "2020-01-22T06:05:30.181+0000", 
 "reasonDesc": "SUCCESS", 
 "txnResponse": "", 
 "cipsBatchDetail": { 
 "id": 1357, 
 "batchId": "MACHHA-REV1", 
 "recDate": "2020-01-22", 
"isoTxnId": 1998, 
 "batchAmount": 10.00, 
 "batchCount": 1, 
 "batchChargeAmount": 2.00, 
 "batchCrncy": "NPR", 
 "categoryPurpose": "ECPG", 
 "debtorAgent": "5511", 
 "debtorBranch": "1", 
 "debtorName": "Test Technical Member", 
 "debtorAccount": "12165161616", "debtorIdType": null, 
 "debtorIdValue": null, 
 "debtorAddress": "Kathmandu Nepal", 
 "debtorPhone": null, 
 "debtorMobile": "+977-9841011688",
 "debtorEmail": "test@test.com", 
 "channelId": "TECHM", 
 "debitStatus": "000", 
 "debitReasonCode": null, 
 "ipsBatchId": null, 
 "fileName": null, 
 "rcreTime": "2020-01-22T06:05:30.181+0000", 
 "rcreUserId": "LAXMI@1701", 
 "sessionSrlNo": 5, 
 "settlementDate": null, 
 "debitReasonDesc": "SUCCESS", 
 "txnResponse": "FT2002270067" 
 } 
}  
```

**Case II (CIPS Credit Rejected)** 
```json
{ 
"creditStatus":"114",
"reasonCode": null, 
 "reversalStatus": "000", 
 "reasonDesc": "Invalid account number "
 "cipsBatchDetail": { 
 "debitStatus": "000", 
 "debitReasonDesc": "SUCCESS", 
 } 
} 

```

**Case III (CIPS Debit Rejected)** 

```json
{
  "creditStatus": "1000",
  "reasonCode": null,
  "reasonDesc": "Debit Failure.",
  "cipsBatchDetail": {
    "debitStatus": "907",
    "debitReasonCode": "907",
    "debitReasonDesc": "Card issuer inoperative (When Bancs Connect cannot contact FINACLE and cannot do stand-in processing.) (DCC should reject transaction and do local authorization)",
    "txnResponse": ""
  }
}

```
**Case IV (CIPS Credit Rejected (Temenos Banks))** 

```json

{
    "creditStatus": "-01",
    "reasonCode": null,
    "reversalStatus": null,
    "reasonDesc": "Please Check the Transaction Response",
    "txnResponse": "NORMAL ACCT MUST BE IN OUR COMPANY, DEBIT.ACCT NO:1:1=DEBIT AND CREDIT ACCOUNT POSITION TYPE N",
    "cipsBatchDetail": {
        "debitStatus": "000",
        "debitReasonCode": null,
        "debitReasonDesc": "SUCCESS",
        "txnResponse": ""
    }
}

```
**Case V (CIPS Debit Rejected (Temenos Banks))** 
```json
{
    "creditStatus": "1000",
    "reasonDesc": "Debit Failure.",
    "txnResponse": "",
    "cipsBatchDetail": {
        "debitStatus": "-01",
        "debitReasonCode": null,
        "debitReasonDesc": "Please Check the Transaction Response",
        "txnResponse": "FT2002270069//1/NO, DEBIT.ACCT.NO: 1:1=MISSING ACCOUNT - RECORD"
    }
}

```
**Note:** Only debit/credits status related information are shown above. Rest of the parameters will be same as above.

**Response Parameters for IPS(ACH) transactions**
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
            <td>O</td>
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
            <td>The total sum up amount of all the transactions in the batch.</td>
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
            <td>Currency of the transaction. E.g., NPR</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>9</td>
            <td>categoryPurpose</td>
            <td>String</td>
            <td>4</td>
            <td>Purpose of the transaction as available in NCHL-IPS system</td>
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
            <td>Transactions initiation party debtor phone number +&lt;country code&gt;-&lt;area code&gt;&lt;Phone Number&gt;.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>18</td>
            <td>debtorMobile</td>
            <td>String</td>
            <td>20</td>
            <td>Transactions initiation party mobile number +&lt;country code&gt;-&lt;area code&gt;&lt;Phone Number&gt;.</td>
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
            <td>channelId</td>
            <td>String</td>
            <td>10</td>
            <td>Specification of the channel used to perform the transaction; Technical member (TECHM), Web Fund Transfer (WEBFT) etc.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>21</td>
            <td>debitStatus</td>
            <td>String</td>
            <td>10</td>
            <td>Response code for debit leg of the transaction.</td>
            <td>Y</td>
        </tr>
         <tr>
            <td>22</td>
            <td>debitReasonCode</td>
            <td>String</td>
            <td>10</td>
            <td>Response code returned by the debtor agent for debit leg of the transaction.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>23</td>
            <td>ipsBatchId</td>
            <td>String</td>
            <td>13</td>
            <td>Unique ACH batch id generated by NCHL for ACH routing.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>24</td>
            <td>fileName</td>
            <td>String</td>
            <td>100</td>
            <td>ACH routing file name.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>25</td>
            <td>rcreTime</td>
            <td>Date</td>
            <td>-</td>
            <td>Date with timestamp.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>26</td>
            <td>rcreUserId</td>
            <td>String</td>
            <td>50</td>
            <td>Transaction creation id.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>27</td>
            <td>sessionSeq</td>
            <td>String</td>
            <td>20</td>
            <td>ACH session sequence number.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>28</td>
            <td>settlementDate</td>
            <td>Date</td>
            <td>-</td>
            <td>ACH transaction settlement date.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>29</td>
            <td>debitReasonDesc</td>
            <td>String</td>
            <td>200</td>
            <td>Debit description. (If debit status is 000, debitReasonDesc is SUCCESS, if timeout 999, then TIMEOUT, PLEASE CONFIRM WITH BANK BEFORE REPOSTING and so on.)</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>30</td>
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
            <td>Merchant ID is a unique identifier to identify merchant in the system. Merchant ID will be provided by NCHL upon registering merchant for connectIPS Core Module on banks’ request.</td>
            <td>O</td>
        </tr>
        <tr>
            <td>12</td>
            <td>appId</td>
            <td>String</td>
            <td>15</td>
            <td>Unique identification, which will be used to identify the account details of the merchant’s application. A merchant can have multiple applications based on different banks' accounts used for various shopping sites. Application Id will be provided by NCHL after registration.</td>
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
        <td>Receiving party phone number in the format +&lt;country code&gt;-&lt;area code&gt;&lt;Phone Number&gt;.</td>
        <td>O</td>
    </tr>
    <tr>
    <td>22</td>
    <td>creditorMobile</td>
    <td>String</td>
    <td>20</td>
    <td>Receiving party mobile number in the format +&lt;country code&gt;-&lt;area code&gt;&lt;Phone Number&gt;.</td>
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
    <td rowspan= '4'>Information that is used to provide the extra information about the transaction. The value can be set as mandatory as per configuration of category purpose.</td>
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
    <td>ACH settlement code (ENTR, GEN, SENT, ACTC, ACSP, ACSC/ RJCT)</td>
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
    <td>Payment description</td>
    <td>O</td>
</tr>
<tr>
    <td>32</td>
    <td>remarks</td>
    <td>String</td>
    <td>50</td>
    <td>Payment description</td>
    <td>O</td>
</tr>
<tr>
    <td>33</td>
    <td>particulars</td>
    <td>String</td>
    <td>100</td>
    <td>Instruction id</td>
    <td>O</td>
</tr>
<tr>
    <td>34</td>
    <td>freeCode1</td>
    <td>String</td>
    <td>20</td>
    <td rowspan= '4'>Extra information that can be appended to the transactions to be more specific about the purpose of transactions for reconciliation purpose. These fields will be significant only up to the initiating party bank and will not be routed to the beneficiary bank.</td>
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
    <td>O</td>
    
</tr>
<tr>
    <td>37</td>
    <td>freeText2</td>
    <td>String</td>
    <td>100</td>
    <td>O</td>
    
</tr>
<tr>
    <td>38</td>
    <td>beneficiaryId</td>
    <td>String</td>
    <td>50</td>
    <td>-NA</td>
    <td>O</td>
</tr>
<tr>
    <td>39</td>
    <td>beneficiaryName</td>
    <td>String</td>
    <td>100</td>
    <td>Transaction receiving party</td>
    <td>O</td>
</tr>
<tr>
    <td>40</td>
    <td>ipsBatchId</td>
    <td>Integer</td>
    <td>-</td>
    <td>Unique batch id generated by NCHL for ACH routing.</td>
    <td>Y</td>
</tr>
<tr>
    <td>41</td>
    <td>rcreUserId</td>
    <td>String</td>
    <td>50</td>
    <td>Transaction creation id.</td>
    <td>O</td>
</tr>
<tr>
    <td>42</td>
    <td>rcreTime</td>
    <td>Date</td>
    <td>-</td>
    <td>Date with timestamp.</td>
    <td>O</td>
</tr>
<tr>
    <td>43</td>
    <td>ipsTxnId</td>
    <td>String</td>
    <td>16</td>
    <td>Unique transaction id generated by NCHL for ACH routing.</td>
    <td>Y</td>
</tr>
<tr>
    <td>44</td>
    <td>reasonDesc</td>
    <td>String</td>
    <td>200</td>
    <td>Credit description. (If credit status is ACSC, reasonDesc is Empty, if RJCT, reasonDesc is “Account does not exist” or some other reason.)</td>
    <td>Y</td>
</tr>
<tr>
    <td>45</td>
    <td>txnResponse</td>
    <td>String</td>
    <td>335</td>
    <td>Transaction reference returned by creditor bank.</td>
    <td>O</td>
</tr>
    </tbody>
</table>



**Case VI (IPS Debit/Credit Success)**
```json
{
    "id": 146,
    "batchId": 89,
    "isoTxnId": null,
    "recDate": "2020-01-22",
    "instructionId": "STRESS_TXN_144052",
    "endToEndId": "Payment Description",
    "amount": 10.00,
    "chargeAmount": 2.00,
    "chargeLiability": "CG",
    "purpose": null,
    "merchantId": null,
    "appId": "MER-1-APP-3",
    "appTxnId": null,
    "creditorAgent": "5263",
    "creditorBranch": "75",
    "creditorName": "Bijay Dahal",
    "creditorAccount": "123456789",
    "creditorIdType": "0001",
    "creditorIdValue": "5689755562",
    "creditorAddress": "Bhaktapur Nepal",
    "creditorPhone": "+977-01-6655698",
    "creditorMobile": "+977-9841523659",
    "creditorEmail": "creditor1@test.com.np",
    "addenda1": 8965,
    "addenda2": "2018-09-10",
    "addenda3": "Addenda info3",
    "addenda4": "Addenda info4",
    "creditStatus": "ACSC",
    "reasonCode": null,
    "reversalStatus": null,
    "refId": null,
    "remarks": null,
    "particulars": null,
    "freeCode1": null,
    "freeCode2": null,
    "freeText1": null,
    "freeText2": null,
    "beneficiaryId": null,
    "beneficiaryName": null,
    "ipsBatchId": "1701200122GMT",
    "rcreUserId": "LAXMI@1701",
    "rcreTime": "2020-01-22T10:01:47.291+0000",
    "ipsTxnId": "1701200122GMT00B",
    "reasonDesc": "",
    "txnResponse": "",
    "nchlIpsBatchDetail": {
        "id": 89,
        "batchId": "STRESS_642180",
        "recDate": "2020-01-22",
        "isoTxnId": 2015,
        "batchAmount": 10.00,
        "batchCount": 1,
        "batchChargeAmount": 2.00,
        "batchCrncy": "NPR",
        "categoryPurpose": "CUST",
        "debtorAgent": "5521",
        "debtorBranch": "5",
        "debtorName": "Test Technical Member",
        "debtorAccount": "5236252633",
        "debtorIdType": "0001",
        "debtorIdValue": "123456",
        "debtorAddress": "Kathmandu Nepal",
        "debtorPhone": "+977-01-4255306",
        "debtorMobile": "+977-9841011688",
        "debtorEmail": "test@test.com",
        "channelId": "TECHM",
        "debitStatus": "000",
        "debitReasonCode": null,
        "ipsBatchId": "1701200122GMT",
        "fileName": null,
        "rcreTime": "2020-01-22T10:01:47.291+0000",
        "rcreUserId": "LAXMI@1701",
        "sessionSeq": null,
        "settlementDate": null,
        "debitReasonDesc": "SUCCESS",
        "txnResponse": ""
    }
}

```

**Case VII (IPS Credit Rejected)**
```json
{
  "creditStatus": "RJCT",
  "reasonCode": "502",
  "reasonDesc": "Account Not Found",
  "txnResponse": "",
  "nchlIpsBatchDetail": {
    "debitStatus": "000",
    "debitReasonCode": null,
    "debitReasonDesc": "SUCCESS",
    "txnResponse": ""
  }
}
```
**Case VIII (IPS Debit Rejected)**
```json
{
  "creditStatus": "1000",
  "reasonCode": null,
  "reasonDesc": "Debit Failure.",
  "txnResponse": "",
  "nchlIpsBatchDetail": {
    "debitStatus": "114",
    "debitReasonCode": null,
    "debitReasonDesc": "Invalid account number",
    "txnResponse": ""
  }
}

```

Note: Only debit/credits status related information are shown above. Rest of the parameters will be same as above

## 5.5. Other APIs 

Below are the lists of other supporting APIs to extract the list and/or setups from the core system. 

1. **/api/getbranchlist:** To get the branch list for both ips. 
 
**Sample Response:**
```json
[
   {
      "branchId":"59",
      "bankId":"6001",
      "branchName":"Narayangadh Branch"
   },
   {
      "branchId":"280",
      "bankId":"1601",
      "branchName":"Durbar Marg Branch"
   }
]

```
2. **/api/getcipsbranchlist:** To get the branch list for both cips.

**Sample Response:**
```json
[
   {
      "branchId":"59",
      "bankId":"6001",
      "branchName":"Narayangadh Branch"
   },
   {
      "branchId":"280",
      "bankId":"1601",
      "branchName":"Durbar Marg Branch"
   }
]

```
3. **/api/getcipsbanklist:** To get the CIPS bank list 

**Sample Response:**

```json
[
   {
      "bankId":"2601",
      "bankName":"Prabhu Bank Limited"
   },
   {
      "bankId":"2301",
      "bankName":"NIC Asia Bank Limited"
   },
   {
      "bankId":"9945",
      "bankName":"Kanchan Development Bank Ltd"
   }
]

```
4. **/api/getbanklist:** To get the IPS bank list. 


**Sample Response:**

```json
[
   {
      "bankId":"7502",
      "bankName":"Excel Development Bank Ltd."
   },
   {
      "bankId":"2301",
      "bankName":"NIC Asia Bank Limited"
   }
]
```



5. **/api/getbranchlist/{bankId}:** To get the branch list of the provided bank. 
Eg: /getbranchlist/1901 

**Sample Response**

```json
[
   {
      "branchId":"33",
      "bankId":"1901",
      "branchName":"Panipokhari Branch"
   },
   {
      "branchId":"70",
      "bankId":"1901",
      "branchName":"Tamghas Branch"
   }
]


```

6. **/api/getcipschargelist/MER-1-APP-3:** To get the cips and ips charge slab as per the merchant id that will 
be applied to Debtor. Eg. MER-1-APP-3 is for fund transfer. 

**Sample Response:**
```json
[
   {
      "scheme":"P2P",
      "currency":"NPR",
      "maxAmt":500,
      "minChargeAmt":2,
      "maxChargeAmt":2,
      "percent":0
   },
   {
      "scheme":"P2P",
      "currency":"NPR",
      "maxAmt":5000,
      "minChargeAmt":5,
      "maxChargeAmt":5,
      "percent":0
   },
   {
      "scheme":"P2P",
      "currency":"NPR",
      "maxAmt":50000,
      "minChargeAmt":10,
      "maxChargeAmt":10,
      "percent":0
   },
   {
      "scheme":"P2P",
      "currency":"NPR",
      "maxAmt":200000000,
      "minChargeAmt":15,
      "maxChargeAmt":15,
      "percent":0
   }
]
```
7. **/api/getacvalidationenabledbanklist :** To get the bank list having account validation features enabled. 


**Sample Response:**

```json
[
   {
      "bankId":"4501",
      "bankName":"Sanima Bank Ltd."
   },
   {
      "bankId":"1501",
      "bankName":"Machhapuchchhre Bank Limited"
   }
]
```
8. **/api/getreversalenabledbanklist :** To get the bank list having auto reversal feature enabled.
 
**Sample Response:**
```json
[
   {
      "bankId":"4501",
      "bankName":"Sanima Bank Ltd."
   },
   {
      "bankId":"1501",
      "bankName":"Machhapuchchhre Bank Limited"
   }
]
```
9. **/api/bank-account/details:** To get the list of added bank accounts for technical NPI members.

**Sample Response:**
```json
{
   "timestamp":"Sun Sep 17 09:56:06 NPT 2023",
   "responseCode":"000",
   "responseStatus":"SUCCESS",
   "responseMessage":"Account Details Fetched.",
   "data":[
      {
         "entryId":"4750",
         "bankId":"7516",
         "branchId":"1",
         "accountName":"Test Account",
         "accountId":"002001535353535",
         "bankName":"Best Company Ltd.",
         "status":"ACCEPTED",
         "rcreTime":"2022-07-27T06:48:02.566+0000"
      },
      {
         "entryId":"4864",
         "bankId":"9931",
         "branchId":"71",
         "accountName":"P.U.-SEWA AAYOG OFFICE",
         "accountId":"0701017501133",
         "bankName":"Mahalaxmi Bikas Bank Ltd.",
         "status":"ACCEPTED",
         "rcreTime":"2022-08-01T09:31:35.104+0000"
      }
   ]
}
```
10.  **/api/debit-cap/details:** To get the details of debit cap which is assigned to the particular bank of the 
NPI member.

**Sample Response:**
```json
{
   "timestamp":"2023-09-15 02:18:13",
   "responseCode":"000",
   "responseStatus":"SUCCESS",
   "responseMessage":"Debit Cap Detail Fetched.",
   "responseData":[
      {
         "debitCap":1000000.00,
         "clrBalAmount":1000000.00,
         "bankName":"Nabil Bank Ltd.",
         "sessionId":4458
      },
      {
         "debitCap":1000000.00,
         "clrBalAmount":1000000.00,
         "bankName":"Siddhartha Bank Limited",
         "sessionId":4458
      }
   ]
}

```
11. **./api/tp/auto-release/details:** To get details on category purpose and maximum auto-release amount for different banks. This endpoint will return data showing the maximum amount that can be auto-released/debited without any manual intervention required from the NPI member’s debtor bank. This endpoint is 
applicable in the case of non-real-time payment only. 

**Sample Request:**
{ 
 "bankCode": "2301" 
}

 **Sample Response:**
```json
{
   "data":[
      {
         "categoryPurpose":"SSFC",
         "bankCode":"2301",
         "maxAutoReleaseAmount":"200,000,000.00",
         "currency":"NPR",
         "bankName":"NIC Asia Bank Limited",
         "status":"Approved"
      },
      {
         "categoryPurpose":"SALA",
         "bankCode":"2301",
         "maxAutoReleaseAmount":"5,000,000.00",
         "currency":"NPR",
         "bankName":"NIC Asia Bank Limited",
         "status":"Approved"
      },
      {
         "categoryPurpose":"SALC",
         "bankCode":"2301",
         "maxAutoReleaseAmount":"50,000,000.00",
         "currency":"NPR",
         "bankName":"NIC Asia Bank Limited",
         "status":"Approved"
      },
      {
         "categoryPurpose":"SUPP",
         "bankCode":"2301",
         "maxAutoReleaseAmount":"100,000,000.00",
         "currency":"NPR",
         "bankName":"NIC Asia Bank Limited",
         "status":"Approved"
      },
      {
         "categoryPurpose":"GOVT",
         "bankCode":"2301",
         "maxAutoReleaseAmount":"500,000,000.00",
         "currency":"NPR",
         "bankName":"NIC Asia Bank Limited",
         "status":"Approved"
      }
   ],
   "message":"Success",
   "status":true
}
```


**Response parameters details:**


<table border="1">
        <tr>
            <th>S. No.</th>
            <th>Field Name</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>1</td>
            <td>categoryPurpose</td>
            <td>String</td>
            <td>4</td>
            <td>Category purpose for payment</td>
        </tr>
        <tr>
            <td>2</td>
            <td>bankCode</td>
            <td>String</td>
            <td>4</td>
            <td>Bank code for which the category details is fetched</td>
        </tr>
        <tr>
            <td>3</td>
            <td>maxAutoReleaseAmount</td>
            <td>String</td>
            <td>13,2</td>
            <td>Amount that can be directly debited from NPI member’s debtor account without approval from the bank</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Currency</td>
            <td>String</td>
            <td>3</td>
            <td>Currency related to the category purpose</td>
        </tr>
        <tr>
            <td>5</td>
            <td>bankName</td>
            <td>String</td>
            <td>100</td>
            <td>Bank name for which the category details is fetched</td>
        </tr>
        <tr>
            <td>6</td>
            <td>status</td>
            <td>String</td>
            <td>-</td>
            <td>Status of the amount limitation which has been set by the particular bank</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Message</td>
            <td>String</td>
            <td>-</td>
            <td>API response message</td>
        </tr>
        <tr>
            <td>8</td>
            <td>status</td>
            <td>Boolean</td>
            <td>-</td>
            <td>API status</td>
        </tr>
</table>
   

12. **Balance enquiry**


The balance enquiry endpoint can be consumed prior to posting payments in either real time or non-real time services. 
Only technical members whose account(s) are whitelisted by NCHL and whose debit authority has been obtained from 
the respective bank(s) are allowed to enquire their available balance.

**POST URL for balance enquiry: /api/account/balance**


**Request Parameters:**


<table border="1">
        <tr>
            <th>S.no</th>
            <th>Field Name</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Presence</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>1</td>
            <td>bankId</td>
            <td>String</td>
            <td>4</td>
            <td>Y</td>
            <td>4 Digit NCHL Bank Code</td>
        </tr>
        <tr>
            <td>2</td>
            <td>branchId</td>
            <td>String</td>
            <td>4</td>
            <td>Y</td>
            <td>Branch Code. Default HO branch to be sent</td>
        </tr>
        <tr>
            <td>3</td>
            <td>accountId</td>
            <td>String</td>
            <td>20</td>
            <td>Y</td>
            <td>Account Number as listed in NCHL-NPI. (Whitelisted source account by NCHL)</td>
        </tr>
</table>



 **Case Successful:**

**Request:**
```json
{ 
 "bankId": "2501", 
 "branchId": "53",
 "accountId": "12xxxxxxxxxxxxxxxxxx45" 
}
```

**Success Response:**
```json

{
"responseCode": "000", 
"bankId": "2501", 
"branchId": "53", 
"accountId": "12xxxxxxxxxxxxxxxxxx45",
"currency": "NPR", 
"totalBal": 61579.82, 
"availBal": 60579.82, 
"abPartTranType": "CR", 
"lbPartTranType": "CR"
} 
```
**Failed Response:**
```json
{ 
"responseCode": "E010", 
"responseMessage": "RECORD NOT FOUND:- INVALID TECHNICAL MEMBER.", 
"data": null, 
"classfielderrorlist": [] 
}`
```

 **Response Parameters:**

<table border="1">
        <tr>
            <th>S.No</th>
            <th>Field Name</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
        <tr>
            <td>1</td>
            <td>responseCode</td>
            <td>String</td>
            <td>3</td>
            <td>API response code. Response code 000 for success and E10 for failure</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2</td>
            <td>bankId</td>
            <td>String</td>
            <td>4</td>
            <td>4 Digit NCHL Bank Code.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>3</td>
            <td>branchId</td>
            <td>String</td>
            <td>4</td>
            <td>Branch Code.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>4</td>
            <td>accountId</td>
            <td>String</td>
            <td>20</td>
            <td>Account Number as Listed in NCHL NPI. (Whitelisted source account by NCHL)</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Currency</td>
            <td>String</td>
            <td>3</td>
            <td>Currency of the account.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>6</td>
            <td>TotalBal</td>
            <td>Numeric</td>
            <td>-</td>
            <td>Total balance in the account.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>7</td>
            <td>availBal</td>
            <td>Numeric</td>
            <td>-</td>
            <td>Available balance for transaction.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>8</td>
            <td>abPartTranType</td>
            <td>String</td>
            <td>2</td>
            <td>Available balance type.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>9</td>
            <td>lbPartTranType</td>
            <td>String</td>
            <td>2</td>
            <td>Ledger balance type.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>10</td>
            <td>responseMessage</td>
            <td>String</td>
            <td>200</td>
            <td>Response message is obtained in case of failure. It is conditional.</td>
            <td>C</td>
        </tr>
    </table>

