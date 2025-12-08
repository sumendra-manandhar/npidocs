---
sidebar_position: 7
---

# 7. API Specification Details
1. NEPALPAY QR APIs will be exposed through National Payments Interface. All the security features
of NPI will be inherited by these APIs. Validation, Payment, Refund and Reporting are the types of
APIs that will be exposed in NPI.
2. Acquirer or Acquirer network shall expose payment confirmation API for receiving confirmation of
payments. It shall also expose merchant validation API at its side.
3. Issuer or Issuer network shall expose refund API at its side for receiving refund related messages.
4. Critical information will be encrypted using the pre-shared public keys and token signing will be
performed in every message.
5. Specifications of the APIs are tabulated in the following sections.

## 7.1 Validate API
<strong>Post:</strong>  /nQR/v1/validate

This is the first process of QR payment. App or instrument in the issuer network side will capture the
complete QR string, which is then passed to the validation API as an input. The API will response back
with the parsed and validated details about the merchant and payment. This API will be optional for the
Acquirers to respond, in which case the NPI will simply parse the message and respond back to the
Issuer. Issuer network should include all the fields obtained from validation API along with other payment
details during the payment API call.



![Example Image](/img/Nepalpay/validateapi.png)

1. Customer scans the QR code displayed by the merchant using its mobile application. The captured
details will be sent to NPI for validation.
2. NPI will connect to the acquiring network for the merchant validation, which includes validation for
merchant, Merchant Category Code (MCC), Merchant Name and other information, if any.
3. Acquiring entity will perform the necessary validation and respond back to NPI.
4. NPI passes the validation information/status to the originating channel.

### 7.1.1.  Request from Issuer Network to NPI 

<table>
  <tr>
    <th>#</th>
    <th>Data Items</th>
    <th>Type</th>
    <th>Length</th>
    <th>Required</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>1</td>
    <td>instructionId</td>
    <td>String</td>
    <td>20</td>
    <td>M</td>
    <td>Unique reference id to trace the request by issuer</td>
  </tr>
  <tr>
    <td>2</td>
    <td>qrString</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>QR String captured from the QR Code.</td>
  </tr>
</table>

**Sample request:**
```json
{
"instructionId":"val-1122",
"qrString":"<QR String>”
}
```

### 7.1.2. Request from NPI to Acquirer Network (For Validation) 

<table border="1">
  <tr>
    <th>#</th>
    <th>Data Items</th>
    <th>Type</th>
    <th>Length</th>
    <th>Required</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>1</td>
    <td>validationTraceId</td>
    <td>String</td>
    <td>20</td>
    <td>M</td>
    <td>Unique QR validation/parse Id provided by NCHL.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>instructionId</td>
    <td>String</td>
    <td>20</td>
    <td>M</td>
    <td>Unique reference id to trace the request by issuer</td>
  </tr>
  <tr>
    <td>3</td>
    <td>qrType</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>To differentiate dynamic and static QR</td>
  </tr>
  <tr>
    <td>4</td>
    <td>acquirerId</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Acquirer of the QR code</td>
  </tr>
  <tr>
    <td>5</td>
    <td>acquirerCountryCode</td>
    <td>String</td>
    <td>2</td>
    <td>M</td>
    <td>Country Code NP (NEPAL)</td>
  </tr>
  <tr>
    <td>6</td>
    <td>merchantPan</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Merchant PAN encrypted with the public key provided by acquirer.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>merchantCategoryCode</td>
    <td>String</td>
    <td>4</td>
    <td>M</td>
    <td>Merchant Category Code</td>
  </tr>
  <tr>
    <td>8</td>
    <td>amount</td>
    <td>Numeric </td>
    <td>(12,2)</td>
    <td>M</td>
    <td>Amount. 0.00 if none.</td>
  </tr>
  <tr>
    <td>9</td>
    <td>transactionFee</td>
    <td>Numeric </td>
    <td>(10,2)</td>
    <td>M</td>
    <td>Transaction Fee, if the transaction costs additional fee for the customer. 0.00 if none.</td>
  </tr>
  <tr>
    <td>10</td>
    <td>currencyCode</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Currency symbol (e.g., NPR for Nepali rupee)</td>
  </tr>
  <tr>
    <td>11</td>
    <td>merchantName</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Merchant Name</td>
  </tr>
  <tr>
    <td>12</td>
    <td>merchantCity</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>City</td>
  </tr>
  <tr>
    <td>13</td>
    <td>merchantCountryCode</td>
    <td>String</td>
    <td>2</td>
    <td>M</td>
    <td>Country Code NP (NEPAL)</td>
  </tr>
  <tr>
    <td>14</td>
    <td>merchantPostalcode</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Merchant’s Zip Code/Pin Code/Postal Code</td>
  </tr>
  <tr>
    <td>15</td>
    <td>merchantBillNo</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Bill No of merchant. 0 if none.</td>
  </tr>
  <tr>
    <td>16</td>
    <td>merchantTxnRef</td>
    <td>String</td>
    <td></td>
    <td>C</td>
    <td>Txn ref of merchant</td>
  </tr>
  <tr>
    <td>17</td>
    <td>Terminal</td>
    <td>String</td>
    <td></td>
    <td>O</td>
    <td>Terminal id of the QR code.0 if none.</td>
  </tr>
  <tr>
    <td>18</td>
    <td>qrString</td>
    <td>String</td>
    <td></td>
    <td>O</td>
    <td>QR String captured from the QR Code</td>
  </tr>
  <tr>
    <td>19</td>
    <td>encKeySerial</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Serial number of the public key used for encryption above.</td>
  </tr>
  <tr>
    <td>20</td>
    <td>addenda1 - addenda10</td>
    <td>String</td>
    <td></td>
    <td>O</td>
    <td>Additional fields 1 to 10 for future usages.</td>
  </tr>
  <tr>
    <td>21</td>
    <td>network</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Network identifier for the issuer network (e.g., NQR)</td>
  </tr>
  <tr>
    <td>22</td>
    <td>token</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>SHA 256 Signature token</td>
  </tr>
</table>


<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String= validationTraceId+”,”+instructionId+“,”+acquirerId+”,”+merchantPan+”,”+merchantCategoryCode+”,”+amount+
”,”+transactionFee+”,”+currencyCode+”,”+merchantName+”,”+merchantBillNo+”,”+terminal"`}</code></pre>

<b>Note:</b> merchantPan in token string will be in plain text format. merchantPan received in QR validation request
from NPI first have to decrypt with the acquirer private key.

For signature token verification, use NCHL public key.

**Request Sample**
```json
{
"validationTraceId":"2107280000000075KLO",
"instructionId": "CIPS-12070",
"acquirerId": "00010001",
"acquirerCountryCode":"NP",
"merchantPan": "<Encrypted Merchant Pan>",
"merchantCategoryCode":5143,
"qrType": "STATIC",
"amount": 1000.23,
"transactionFee": 2,
"interchangeFee":5,
"network": "NQR",
"currencyCode": "NPR",
"merchantBillNo": "B32568",
"merchantTxnRef": "NQR-610",
"merchantCountryCode": "NP",
"merchantCity":"Kathmandu",
"merchantName": "ABC Store",
"terminal": "10",
"addenda1":" addnField1 test data",
"addenda2":" addnField2 test data",
"addenda10":" addnField10 test data",
"encKeySerial": "517927635424121769165481",
"token": "<signature token>"
}
```

### 7.1.3.  Response from Acquirer Network to NPI 

<table>
  <tr>
    <th>#</th>
    <th>Data Items</th>
    <th>Type</th>
    <th>Length</th>
    <th>Required</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>1</td>
    <td>responseCode</td>
    <td>String</td>
    <td>10</td>
    <td>M</td>
    <td>Response code for the validation request</td>
  </tr>
  <tr>
    <td>2</td>
    <td>responseMessage</td>
    <td>String</td>
    <td>200</td>
    <td>M</td>
    <td>Human readable message for the response code.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>validationTraceId</td>
    <td>String</td>
    <td>20</td>
    <td>M</td>
    <td>Unique QR validation/parse Id provided by NCHL.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>instructionId</td>
    <td>String</td>
    <td>20</td>
    <td>M</td>
    <td>Unique reference id to trace the request by issuer</td>
  </tr>
  <tr>
    <td>5</td>
    <td>qrType</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>To differentiate dynamic and static QR</td>
  </tr>
  <tr>
    <td>6</td>
    <td>acquirerId</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Acquirer of the QR code</td>
  </tr>
  <tr>
    <td>7</td>
    <td>acquirerCountryCode</td>
    <td>String</td>
    <td>2</td>
    <td>M</td>
    <td>Country Code NP (NEPAL)</td>
  </tr>
  <tr>
    <td>8</td>
    <td>merchantPan</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Merchant PAN encrypted with the public key of NCHL.</td>
  </tr>
  <tr>
    <td>9</td>
    <td>merchantCategoryCode</td>
    <td>String</td>
    <td>4</td>
    <td>M</td>
    <td>Merchant Category Code</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Amount</td>
    <td>Numeric </td>
    <td>(12,2)</td>
    <td>M</td>
    <td>Amount. 0.00 if none.</td>
  </tr>
  <tr>
    <td>11</td>
    <td>transactionFee</td>
    <td>Numeric </td>
    <td>(10,2)</td>
    <td>M</td>
    <td>Transaction Fee, if the transaction costs additional fee for the customer. 0.00 if none.</td>
  </tr>
  <tr>
    <td>12</td>
    <td>currencyCode</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Currency symbol (e.g., NPR for Nepali rupee)</td>
  </tr>
  <tr>
    <td>13</td>
    <td>merchantName</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Merchant Name</td>
  </tr>
  <tr>
    <td>14</td>
    <td>merchantCity</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>City</td>
  </tr>
  <tr>
    <td>15</td>
    <td>merchantCountryCode</td>
    <td>String</td>
    <td>2</td>
    <td>M</td>
    <td>Country Code NP (NEPAL)</td>
  </tr>
  <tr>
    <td>16</td>
    <td>merchantPostalcode</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Merchant’s Zip Code/Pin Code/Postal Code</td>
  </tr>
  <tr>
    <td>17</td>
    <td>merchantBillNo</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Bill No of merchant. Else 0</td>
  </tr>
  <tr>
    <td>18</td>
    <td>merchantTxnRef</td>
    <td>String</td>
    <td></td>
    <td>C</td>
    <td>Txn ref of merchant</td>
  </tr>
  <tr>
    <td>19</td>
    <td>Terminal</td>
    <td>String</td>
    <td></td>
    <td>O</td>
    <td>Terminal id of the QR code. Else 0</td>
  </tr>
  <tr>
    <td>20</td>
    <td>encKeySerial</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Serial number of the public key used for encryption above.</td>
  </tr>
  <tr>
    <td>21</td>
    <td>addenda1 - addenda10</td>
    <td>String</td>
    <td></td>
    <td>O</td>
    <td>Additional fields 1 to 10 for future usages.</td>
  </tr>
  <tr>
    <td>22</td>
    <td>network</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Network identifier for the QR code</td>
  </tr>
  <tr>
    <td>23</td>
    <td>token</td>
    <td>String</td>
    <td></td>
    <td>M
    </td>
    <td>SHA 256 Signature token</td>
  </tr>
</table>


<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String=validationTraceId+”,”+instructionId+“,”+ acquirerId+”,”+merchantPan+”,”+merchantCategoryCode+”,”
+amount+”,”+transactionFee+”,” +currencyCode+”,”+merchantName+”,”+merchantBillNo+”,”+terminal+”,”+responseCode`}</code></pre>

<b>Note:</b> merchantPan in token string will be in plain text. merchantPan received in QR validation request first have
to decrypt with the acquirer private key. And again, have to encrypt with NCHL public key and send back to
validation response message.

For signature token signing, use acquirer private key.

**Response Sample**
```json
{
"responseCode":"000",
"responseMessage":"QR Validation Successful",
"validationTraceId":"2107280000000075KLO",
"instructionId": "CIPS-12070",
"acquirerId": "00010001",
"acquirerCountryCode":"NP",
"merchantPan": "<Encrypted Merchant Pan>",
"merchantCategoryCode":5143,
"qrType": "STATIC",
"amount": 1000.23,
"transactionFee": 2,
"interchangeFee":5,
"network": "NQR",
"currencyCode": "NPR",
"merchantBillNo": "B32568",
"merchantTxnRef": "NQR-610",
"merchantCountryCode": "NP",
"merchantCity":"Kathmandu",
"merchantName": "ABC Store",
"terminal": "10",
"addenda1":" addnField1 test data",
"addenda2":" addnField2 test data",
"addenda10":" addnField10 test data",
"encKeySerial": "58779633335424121769",
"token": "<signature token>"
}
```

### 7.1.4. Response from NPI to Issuer Network

| #   | Data Items            | Type    | Length | Required | Remarks                                                     |
|-----|-----------------------|---------|--------|----------|-------------------------------------------------------------|
| 1   | responseCode          | String  | 10     | M        | Response code for the validation request                     |
| 2   | responseMessage       | String  | 200    | M        | Human readable message for the response code                 |
| 3   | validationTraceId     | String  | 20     | M        | Unique QR validation/parse Id provided by NCHL               |
| 4   | instructionId         | String  | 20     | M        | Unique reference id to trace the request by issuer           |
| 5   | qrType                | String  |        |  M      | To differentiate dynamic and static QR                       |
| 6   | acquirerId            | String  |        |  M        | Acquirer of the QR code                                      |
| 7   | acquirerCountryCode   | String  | 2      | M        | Country Code NP (NEPAL)                                      |
| 8   | merchantPan           | String  |        | M        | Merchant PAN encrypted with the public key provided by Issuer |
| 9   | merchantCategoryCode  | String  | 4      | M        | Merchant Category Code                                       |
| 10  | amount                | Numeric | (12,2)  | M        | Amount. 0.00 if none                                         |
| 11  | transactionFee        | Numeric | (10,2)  | M        | Transaction Fee, if the transaction costs additional fee for the customer. 0.00 if none |
| 12  | currencyCode          | String  |        | M        | Currency symbol (eg. NPR for Nepali rupee)                   |
| 13  | merchantName          | String  |        | M        | Merchant Name                                                |
| 14  | merchantCity          | String  |        | M        | City                                                         |
| 15  | merchantPostalCode    | String  |        | M        | Merchant’s Zip Code/Pin Code/Postal Code                     |
| 16  | merchantCountryCode   | String  | 2      | M        | Country Code NP (NEPAL)                                      |
| 17  | merchantBillNo        | String  |        | M        | Bill No of merchant. Else 0   
| 18  | merchantTxnRef         | String  |        | C        | Txn ref of merchant    
| 19  | terminal        | String  |        | O        | Terminal id of the QR code   
| 20  | encKeySerial        | String  |        | M        | Serial number of the public key used for encryption above. 
| 21  | addenda1-addenda10        | String  |        | O        | Additional fields 1 to 10 for future usages 
| 22  | network        | String  |        | M        | Network identifier for the QR code     
| 23  | token        | String  |        | M        | SHA 256 Signature token.                        |


<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String=validationTraceId+”,”+instructionId“,”+acquirerId+”,”+merchantPan +”,”+merchantCategoryCode+”,”+amount+”,”
+transactionFee+”,”+currencyCode+”,”+merchantName+”,”+merchantBillNo+”,”+terminal+”,”+responseCode`}</code></pre>

<b>Note:</b> merchantPan in token string will be in plain text. merchantPan received in QR validation response from NPI
have to first decrypt with the issuer private key.

For signature token verification, use NCHL public key.

**Response Sample**
```json
{
"responseCode":"000",
"responseMessage":"QR Validation Successful",
"validationTraceId":"2107280000000075KLO",
"instructionId": "CIPS-12070",
"acquirerId": "00010001",
"acquirerCountryCode":"NP",
"merchantPan": "<Encrypted Merchant Pan>",
"merchantCategoryCode":5143,
"qrType": "STATIC",
"amount": 1000.23,
"transactionFee": 2,
"interchangeFee":5,
"network": "NQR",
"currencyCode": "NPR",
"merchantBillNo": "B32568",
"merchantTxnRef": "NQR-610",
"merchantCountryCode": "NP",
"merchantCity":"Kathmandu",
"merchantName": "ABC Store",
"terminal": "10",
"addenda1":" addnField1 test data",
"addenda2":" addnField2 test data",
"addenda10":" addnField10 test data",
"encKeySerial": "9865752335424121769165481",
"token": "<signature token>"
}
```

## 7.2. Payment API
<b>Post:</b>  /nQR/v1/payment

Once the validation is successful, originating channel will use the Payment API, exposed in NPI for
initiating a payment transaction. In the case of static QR, users should be enforced to enter the amount
before calling the payment API, where as the amount will be pre-populated in case of dynamic QR.

![Example Image](/img/Nepalpay/paymentapi.png)

1. Issuer channel will send a transaction request to Issuer network, which will send to NPI for initiating
a payment, after it customer confirms the merchant and other details.
2. NPI will route the request to corresponding bank for debit.
3. On debit success, acquirer network’s payment confirmation API will be called.
4. NPI will send the notification to the originating channel.

As a sub process of payment API, NPI will first perform the debit through CIPS switch. The debit account
will depend upon the channel (for PSP: settlement account of PSP, for CIPS/mobile banking: account
of the customer). The inter-bank settlement of funds on multilateral net basis will be done in RTGS
system. NCHL will send NCP file to RTGS system through NSI module. Settlement account of BFI (could
be Issuer or Issuer associated bank) will be debited and settlement account of BFI (could be acquirer or
acquirer associated bank) will be credited. Credit to acquirer (BFIs, PSPs, aggregators) will be performed
on deferred basis.


### 7.2.1.  Request from Issuer Network to NPI

| #   | Data Items          | Type     | Length | Required | Remarks                                            |
|-----|---------------------|----------|--------|----------|----------------------------------------------------|
| 1   | instructionId       | String   | 20     | M        | Unique reference id to trace the request by issuer |
| 2   | validationTraceId   | String   | 20     | M        | Unique QR validation/parse Id provided by NCHL     |
| 3   | acquirerId          | String   |        | M        | Acquirer of the QR code                            |
| 4   | merchantPan         | String   |        | M        | Merchant Id encrypted with public key provided by NCHL |
| 5   | qrType              | ENUM     |        | M        | Static or Dynamic                                  |
| 6   | amount              | Numeric  | (12,2)   | M        | Amount                                             |
| 7   | interchangeFee      | Numeric  | (10,2)   | M        | Charge if applicable else 0.00                     |
| 8   | transactionFee      | Numeric  | (10,2)  | M        | IF additional cost to be paid by the customer for the transaction. else 0.00 |
| 9   | currencyCode        | String   | 3      | M        | Currency symbol (eg. NPR)                          |
| 10  | merchantBillNo      | String   | 15     | M        | Required if qrType is dynamic. 0 if none           |
| 11  | payerName           | String   | 200    | M        | Name of the payer                                                                    |
| 12  | payerPanId              | String   |        | M        | Mobile Number or User Id, etc uniquely identifying payer in issuer system, encrypted with public key provided by NCHL |
| 13  | payerMobileNumber       | String   |        | M        | Mobile No of Payer                                        |
| 14  | payerEmailAddress       | String   |        | O        | Payer Email Address                                       |
| 15  | issuerId                | String   |        | M        | Issuer id                                                 |
| 16  | debtorAccount           | String   |        | M        | Debit account number.                                     |
| 17  | debtorAgent             | String   | 4      | M        | Bank Id                                                   |
| 18  | debtorAgentBranch       | String   | 4      | M        | Branch Id of Debtor Agent.                                |
| 19  | narration               | String   | Max 20 | O        | Narration if any                                          |
| 20  | acquirerCountryCode     | String   | 2      | M        | Country Code NP (NEPAL)                                   |
| 21  | merchantName            | String   |        | M        | Merchant Common Name                                      |
| 22  | merchantCity            | String   |        | M        | Merchant City                                             |
| 23  | merchantPostalCode      | String   |        | M        | Merchant’s Zip Code/Pin Code/Postal Code                  |
| 24  | merchantCountryCode     | String   | 2      | M        | Country Code NP (NEPAL)                                   |
| 25  | localTransactionDateTime| String   |        | M        | YYYYMMDDHHmmssSSS                                         |
| 26  | merchantCategoryCode    | String   | 4      | M        | Merchant category code (MCC)                              |
| 27  | merchantTxnRef          | String   |        | O        | Merchant Transaction Reference                            |
| 28  | instrument              | ENUM     |        | M        | CIPS-connectIPS, MOB-Mobile Banking, WAL-Wallet           |
| 29  | terminal                | String   |        | O        | Terminal id of the QR code                                |
| 30  | encKeySerial            | String   |        | M        | Serial number of the public key used for encryption above |
| 31  | addenda1-addenda10      | String   |        | O        | Additional fields 1 to 10 for future usages               |
| 32  | network                 | String   |        | M        | Network identifier for the QR code                         |
| 33  | token                   | String   |        | M        | SHA 256 Signature token                                   |





<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String=validationTraceId+”,”+instructionId+“,”+ acquirerId+”,”+ merchantPan +”,”+merchantCategoryCode+”,”+amount+”,”+
transactionFee+”,”+interchangeFee+”,”+currencyCode+”,”+merchantName+”,”+merchantBillNo+”,”+terminal+”,”+issuerId+”,”+payerName+”,”+
debtorAgent+”,”+debtorAccount`}</code></pre>

<b>Note:</b> merchantPan in token string will be in plain text. merchantPan received in validation response first have to
decrypt with the issuer private key. And again, have to encrypt with NCHL public key and send in a payment
request.

For signature token signing, use issuer private key

***Request Sample:***
```json
{
"instructionId": "HBLQR-1628503975494",
"validationTraceId": "2108090000000147KFQ",
"acquirerId": "00000701",
"merchantPan": "<Encrypted Merchant PAN>",
"qrType": "DYNAMIC",
"amount": 10050.0,
"interchangeFee": 5.0,
"transactionFee": 0.0,
"currencyCode": "NPR",
"merchantBillNo": "001",
"payerName": "SABINA JOSHI",
"payerPanId": "<Encrypted Payer PAN>",
"payerMobileNumber": "9841******",
"payerEmailAddress": null,
"issuerId": "00000701",
"debtorAccount": "01908504580011",
"debtorAgent": "0701",
"debtorAgentBranch":"1",
"narration": "test",
"acquirerCountryCode": "NP",
"merchantName": "Kathmandu Cafe",
"merchantCity": "Kathmandu",
"merchantCountryCode": "NP",
"localTransactionDateTime": "20210905115532458",
"merchantCategoryCode": 1235,
"merchantTxnRef": "txn ref",
"instrument": "MOB",
"terminal": "Terminal1",
"encKeySerial": "170069681833763609248238",
"token": "<Signature Token>",
"merchantPostalCode": "44601",
"addenda1":" addnField1 test data",
"addenda2":" addnField2 test data",
"addenda10":" addnField10 test data"
}
```


#### 7.2.1.1. Payment API For Debit Bypass Workflow

**Post:** /nQR/v1/payment/dnrq

Once QR validation is successful, originating channel will use the Payment API, exposed in NPI for initiating a payment transaction. In the case of static QR, users should be enforced to enter the amount before calling the payment API, whereas the amount and other details will be pre-populated in case of dynamic QR. In case of debit not required workflow, issuer network first have to debit the customer account (after getting the successful merchant validation response) prior to sending the payment request. NEPALPAY QR network will consider all the payments request received from issuer network as a debit success and routes further for credit leg only.

1.	After user confirms the payment, issuer instrument will send a payment request to issuer switch/network for debiting the customer account. Once customer account is debited successfully, payment have to be routed further to NPI/NPS switch for crediting the merchant settlement account at acquirer bank.

2.	For debit bypass workflow, NPI will consider all the payment request received from issuer channel are as debit success.

3.	After the credit leg of the transaction is successful and payment notification is given to the acquirer network, NPI will provide the payment confirmation notification to the originating issuer channel.


**Payment Request from Issuer Network to NPI**

<table>
<tr>
<td>33</td>
<td>categoryPurpose</td>
<td>String</td>
<td>4</td>
<td>C</td>
<td>DNRQ</td>
<td>category purpose to be used for debit bypass QR payment flow.</td>
</tr>
</table>


**Request Sample:**

The category purpose code “DNRQ” to be added in the request payload from Issuer network to NPI.
```json
{
  …………………………………….
  ………………………………………..
    "categoryPurpose": "DNRQ" 
  …………………………………….
  ………………………………………..
 }
```


### 7.2.2. Request from NPI to Acquirer Network
| #   | Data Items              | Type     | Length | Required | Remarks                                                   |
|-----|-------------------------|----------|--------|----------|-----------------------------------------------------------|
| 1   | nQrTxnId                | String   | 20     | M        | Unique payment transaction id generated by NCHL            |
| 2   | validationTraceId       | String   | 20     | M        | Unique QR validation/parse Id provided by NCHL            |
| 3   | instructionId           | String   | 20     | M        | Unique reference id to trace the request by issuer        |
| 4   | acquirerId              | String   |        | M        | Acquirer of the QR code                                   |
| 5   | merchantPan             | String   |        | M        | Merchant Id encrypted with public key provided by acquirer |
| 6   | qrType                  | String   |        | M        | Static or Dynamic                                         |
| 7   | amount                  | Numeric  | (12,2)   | M        | Amount                                                    |
| 8   | interchangeFee          | Numeric  | (10,2)   | M        | Charge if applicable else 0.00                            |
| 9   | transactionFee          | Numeric  | (10,2)   | M        | Transaction Fee, if the transaction costs additional fee for the customer. Else 0.00 |
| 10  | currencyCode            | String   | 3      | M        | Currency symbol (eg. NPR)                                  |
| 11  | merchantBillNo          | String   | 15     | M        | Required if qrType is dynamic. Else 0                     |
| 12  | merchantTxnRef          | String   |        | O        | Merchant Transaction Reference                            |
| 13  | payerMobileNumber       | String   | 10     | M        | Mobile Number of customer                                 |
| 14  | payerName               | String   | 200    | M        | Name of the payer                                         |
| 15  | issuerId                | String   |        | M        | Issuer id                                                 |
| 16  | localTransactionDateTime| String   |        | M        | YYYYMMDDHHmmssSSS                                         |
| 17  | creditStatus            | String   |        | M        | Receiver Account Credit status                            |
| 18  | narration               | String   | Max 20 | O        | Narration, if any                                         |
| 19  | sessionSrlNo            | Integer  |        | M        | Session number of the transaction processed               |
| 20  | terminal                | String   |        |          | Terminal id of the QR code. Else 0                         |
| 21  | encKeySerial            | String   |        | M        | Serial number of the public key used for encryption above |
| 22  | addenda1-addenda10      | String   |        | O        | Additional fields 1 to 10 for future usages               |
| 23  | network                 | String   |        | M        | Network identifier for QR network                          |
| 24  | merchantCategoryCode    | String   | 4      | M        | Merchant Category Code                                    |
| 25  | merchantName         | String  |        | M        | Merchant Common Name                               |
| 26  | token                | String  |        | M        | SHA 256 Signature token                            |
| 27  | issuerNetwork        | String  |        | M        | Network identifier for the issuer network          |

<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String=nQrTxnId+”,”+validationTraceId+”,”+instructionId+“,”+acquirerId+”,” + merchantPan+”,”+merchantCategoryCode+”,”+
amount+”,” +transactionFee+”,”+interchangeFee+”,”+currencyCode+”,”+merchantName+”,”+merchantBillNo+”,”+terminal+”,”+issuerId+”,”+payerName`}</code></pre>

<b>Note:</b> merchantPan in token string will be in plain text. merchantPan received in payment request first have to
decrypt with the acqirer private key.


For signature token verification, use NCHL public key.

***Request Sample:***
```json
{
"issuerNetwork": "NQR",
"merchantCountryCode": "NP",
"merchantPan": "<Encrypted Merchant PAN>",
"merchantBillNo": "0",
"merchantName": "Nepal Cafe1",
"network": "NQR",
"issuerId": "00000701",
"validationTraceId": "2110010000000397EYM",
"payerName": "SABINA JOSHI",
"acquirerId": "00010001",
"localTransactionDateTime": "20210905205689635",
"amount": 200,
"merchantCity": "Kathmandu",
"encKeySerial": "1234567890",
"acquirerCountryCode": "NP",
"terminal": "0",
"creditStatus": "DEFER",
"token": "<Signature Token>",
"transactionFee": 0,
"interchangeFee": 2,
"sessionSrlNo": 1485,
"narration": "Test",
"merchantCategoryCode": 5814,
"qrType": "STATIC",
"instructionId": "HBLQR-1633070857505",
"currencyCode": "NPR",
"payerMobileNumber": "9841******",
"addenda1":" addnField1 test data",
"addenda2":" addnField2 test data",
"addenda10":" addnField10 test data"
}
```

### 7.2.3. Response from Acquirer network to NPI
| #   | Data Items          | Type    | Length | Required | Remarks                                                   |
|-----|---------------------|---------|--------|----------|-----------------------------------------------------------|
| 1   | nQrTxnId            | String  | 20     | M        | Unique payment transaction id generated by NCHL            |
| 2   | validationTraceId   | String  | 20     | M        | Unique QR validation/parse Id provided by NCHL            |
| 3   | instructionId       | String  | 20     | M        | Unique reference id to trace the request by issuer        |
| 4   | acquirerId          | String  |        | M        | Acquirer of the QR code                                   |
| 5   | merchantPan         | String  |        | M        | Merchant Id encrypted with public key provided by NCHL     |
| 6   | qrType              | String  |        | M        | Static or Dynamic                                         |
| 7   | Amount              | Numeric | (12,2)  | M        | Amount                                                    |
| 8   | interchangeFee      | Numeric | (10,2)  | M        | Charge if applicable else 0.00                            |
| 9   | transactionFee       | Numeric  | (10,2)   | M        | Transaction Fee, if the transaction costs additional fee for the customer. Else 0.00 |
| 10  | currencyCode         | String   | 3      | M        | Currency symbol (eg. NPR)                                  |
| 11  | merchantBillNo       | String   | 15     | M        | Required if qrType is dynamic else 0                       |
| 12  | merchantTxnRef       | String   |        | O        | Merchant Transaction Reference                             |
| 13  | payerMobileNumber    | String   | 10     | M        | Mobile Number of customer                                  |
| 14  | payerName            | String   | 200    | M        | Name of the payer                                         |
| 15  | issuerId             | String   |        | M        | Issuer id                                                 |
| 16  | localTransactionDateTime| String |        | M        | YYYYMMDDHHmmssSSS                                         |
| 17  | creditStatus         | String   |        | M        | Receiver Account Credit status                             |
| 18  | narration            | String   | Max 20 | O        | Narration, if any                                         |
| 19  | sessionSrlNo         | Integer  |        | M        | Session number of the transaction processed                |
| 20  | terminal             | String   |        | O        | Terminal id of the QR code. Else 0                         |
| 21  | encKeySerial         | String   |        | M        | Serial number of the public key used for encryption above |
| 22  | responseCode         | String   |        | M        | Response code for the confirmation                         |
| 23  | responseMessage      | String   |        | O        | Human readable message for the response code               |
| 24  | addenda1-addenda10   | String   |        | O        | Additional fields 1 to 10 for future usages                |
| 25  | network              | String   |        | M        | Network identifier for QR network                          |
| 26  | merchantCategoryCode | String   | 4      | M        | Merchant Category Code                                    |
| 27  | merchantName         | String   |        | M        | Merchant Common Name                                      |
| 28  | token                | String   |        | M        | SHA 256 Signature token                                   |
| 29  | issuerNetwork        | String   |        | M        | Network identifier for the issuer network  

<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String=nQrTxnId+”,”+validationTraceId+”,” +instructionId+ “,” + acquirerId +”,” + merchantPan +”,”+merchantCategoryCode+”,”+
amount+”,”+transactionFee+”,”+interchangeFee+”,”+currencyCode+”,”+merchantName+”,”+merchantBillNo+”,”+terminal+”,”+issuerId+”,”+payerName+”,”+responseCode`}</code></pre>

<b>Note:</b> merchantPan in token string will be in plain text. merchantPan received in payment request first have to
decrypt with the acqirer private key. And again, have to encrypt with NCHL public key and send back in payment
confirmation response.


For signature token verification, use acquirer private key.

***Response Sample ***
```json
{
"responseCode":"000",
"responseMessage":"Payment Transaction Successful",
"issuerNetwork": "NQR",
"merchantCountryCode": "NP",
"merchantPan": "<Encrypted Merchant PAN>",
"merchantBillNo": "0",
"merchantName": "Nepal Cafe1",
"network": "NQR",
"issuerId": "00000701",
"validationTraceId": "2110010000000397EYM",
"payerName": "SABINA JOSHI",
"acquirerId": "00010001",
"localTransactionDateTime": "20210905205689635",
"amount": 200,
"merchantCity": "Kathmandu",
"encKeySerial": "475544545545444",
"acquirerCountryCode": "NP",
"terminal": "0",
"creditStatus": "DEFER",
"token": "<Signature Token>",
"transactionFee": 0,
"interchangeFee": 2,
"sessionSrlNo": 1485,
"narration": "Test",
"merchantCategoryCode": 5814,
"qrType": "STATIC",
"instructionId": "HBLQR-1633070857505",
"currencyCode": "NPR",
"payerMobileNumber": "9841******",
"addenda1":" addnField1 test data",
"addenda2":" addnField2 test data",
"addenda10":" addnField10 test data"
}
```

### 7.2.4. Response from NPI to Issuer Network

| #   | Data Items           | Type     | Length | Required | Remarks                                                   |
|-----|----------------------|----------|--------|----------|-----------------------------------------------------------|
| 1   | responseCode         | String   | 10     | M        | Response code for the transaction.                         |
| 2   | responseMessage      | String   | 200    | O        | Human readable message for the response code.              |
| 3   | nQrTxnId            | String   | 20     | M        | Unique payment transaction id generated by NCHL.           |
| 4   | instructionId        | String   | 20     | M        | Unique reference id to trace the request by issuer.        |
| 5   | validationTraceId   | String   | 20     | M        | Unique QR validation/parse Id provided by NCHL.           |
| 6   | acquirerId          | String   |        | M        | Acquirer of the QR code.                                  |
| 7   | merchantPan         | String   |        | M        | Merchant Id encrypted by public key provided by issuer.    |
| 8   | qrType              | ENUM     |        | M        | Static or Dynamic.                                        |
| 9   | amount              | Numeric  | (12,2)   | M        | Amount.                                                   |
| 10  | interchangeFee      | Numeric  | (10,2)  | M        | Charge if applicable else 0.00.                            |
| 11  | transactionFee      | Numeric  | (10,2)  | M        | IF additional cost to be paid by the customer for the transaction. else 0.00 |
| 12  | currencyCode        | String   | 3      | M        | Currency symbol (eg. NPR).                                 |
| 13  | merchantBillNo      | String   | 15     | M        | Required if qrType is dynamic. Else 0.                    |
| 14  | payerName           | String   | 200    | M        | Name of the payer.                                        |
| 15  | payerPanId          | String   |        | M        | Mobile Number, User Id, etc of payer uniquely identified in issuer system, encrypted by public key of NCHL. |
| 16  | payerMobileNumber   | String   |        | M        | Mobile No of Payer.                                       |
| 17  | payerEmailAddress   | String   |        | O        |                                                          |
| 18  | issuerId            | String   |        | M        | Issuer id.                                                |
| 19  | debtorAccount       | String   |        | M        | Debit account number encrypted by public key of NCHL.     |
| 20  | debtorAgent         | String   | 4      | M        | Bank Id.                                                  |
| 21  | Narration           | String   | Max 20 | O        | Narration if any.                                         |
| 22  | acquirerCountryCode | String   | 3      | M        | Country Code NP || 977 (NEPAL).                           |
| 23  | merchantName        | String   |        | M        |                                                          |
| 24  | merchantCity        | String   |        | M        |                                                          |
| 25  | merchantPostalcode  | String   |        | M        | Merchant’s Zip Code/Pin Code/Postal Code.                 |
| 26  | merchantCountryCode | String   | 3      | M        | Country Code NP || 977 (NEPAL).                           |
| 27  | localTransactionDateTime | String |    | M        | YYYYMMDDHHmmssSSS.                                        |
| 28  | merchantCategoryCode| String   | 4      | M        | Merchant category code (MCC).                              |
| 29  | merchantTxnRef      | String   |        | O        |                                                          |
| 30  | Instrument          | ENUM     |        |            |CIPS-connectIPS, MOB-Mobile Banking, WAL-Wallet
| 31  | Terminal            | String   |        | O        | Terminal id of the QR code. Else 0                        |
| 32  | encKeySerial        | String   |        | M        | Serial number of the public key used for encryption above |
| 33  | addenda1-addenda10  | String   |        | O        | Additional fields 1 to 10 for future usages              |
| 34  | network             | String   |        | M        | Network identifier for the QR code                        |
| 35  | token               | String   |        | M        | SHA 256 Signature token                                  |
| 36  | npiBatchId          | Integer  |        | M        | RPS batch id                                              |
| 37  | npiTransactionId    | Integer  |        | M        | RPS transaction id                                        |
| 38  | creditStatus        | String   |        | M        | Credit Status of Transaction                              |
| 39  | debitStatus         | String   |        | M        | Debit Status of Transaction                               |
| 40  | debitDescription    | String   |        | O        | Debit Description                                         |
| 41  | creditDescription   | String   |        | O        | Credit Description                                        |


<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String=nQrTxnId+”,”+validationTraceId+”,” +instructionId+ “,” + acquirerId +”,” + merchantPan +”,” +
merchantCategoryCode+”,”+amount+”,”+transactionFee+”,”+interchangeFee+”,”+currencyCode+”,”+
merchantName+”,”+merchantBillNo+”,”+terminal+”,”+issuerId+”,”+payerName+”,”+responseCode`}</code></pre>

<b>Note:</b>merchantPan in token string will be in plain text. merchantPan received in payment response from NPI first
have to decrypt with the issuer private key.


For signature token verification, use NCHL public key.


***Response Sample***
```json
{
"responseCode":"000",
"responseMessage":" Payment Transaction Successful",
"nQrTxnId":" 2108090000000583KMG",
"instructionId": "HBLQR-1628503975494",
"validationTraceId": "2108090000000147KFQ",
"acquirerId": "00000701",
"merchantPan": "<Encrypted Merchant PAN>",
"qrType": "DYNAMIC",
"amount": 10050.0,
"interchangeFee": 5.0,
"transactionFee": 0.0,
"currencyCode": "NPR",
"merchantBillNo": "001",
"payerName": "SABINA JOSHI",
"payerPanId": "<Encrypted Payer PAN>",
"payerMobileNumber": "9841******",
"payerEmailAddress": null,
"issuerId": "00000701",
"debtorAccount": "01908504580011",
"debtorAgent": "0701",
"debtorAgentBranch":"1",
"narration": "test",
"acquirerCountryCode": "977 || NP",
"merchantName": "Kathmandu Cafe",
"merchantCity": "Kathmandu",
"merchantCountryCode": "977 || NP",
"localTransactionDateTime": "20210905115532458",
"merchantCategoryCode": 1235,
"merchantTxnRef": "txn ref",
"instrument": "MOB",
"terminal": "Terminal1",
"encKeySerial": "6987968183376360924",
"token": "<Signature Token>",
"merchantPostalCode": "44601",
"addenda 1":" addnField1 test data",
"addenda2":"addnField2 test data",
"addenda 10":" addnField10 test data"
"npiBatchId": 712388659,
"npiTransactionId": 12715939,
"creditStatus": "DEFER",
"debitStatus": "00",
"debitDescription": "SUCCESS",
"creditDescription": "SUCCESS",
"network": NQR
}
```

## 7.3. Refund API
The participanting member should also have an API at their side to consume below APIs.
<b>Post:</b> /nQR/v1/refund


Refund API enabled the merchant acquirer to initiate the refund transaction.

![Example Image](/img/Nepalpay/refundapi.png)

1. Merchant initiates the refund transaction. Acquirer network sends the refund transaction to NPI.
2. NPI will route the transaction to the Issuer network.
3. Issuer will credit its customer and sends the response to NPI.
4. NPI will send the notification to the refund initiating channel.

As a sub process of refund process, Acquirer will first check whether the original transaction session
has been settled or not by accessing the session status API. If the transaction session is yet to be settled,
refund request of such transaction will be identified as to be cancelled and not included in the settlement.
However, if the transaction is already settled, refund request will initiate a new (refund) transaction
against the original transaction. The system will not include the transactions in the settlement process
in case of Refund as cancel.

### 7.3.1. Request from Acquirer to NPI

| #   | Data Items         | Type     | Length | Required | Remarks                                                     |
|-----|--------------------|----------|--------|----------|-------------------------------------------------------------|
| 1   | orgnNQrTxnId       | String   | 20     | M        | Original nQrTxnId                                           |
| 2   | issuerId           | String   |        | M        | Original issuer id                                          |
| 3   | refundType         | String   |        | M        | FULL/PARTIAL (PARTIAL is valid only in case of Refund not in cancellation) |
| 4   | amount             | Numeric  | (12,2)   | M        | Refund Amount                                               |
| 5   | refundReasonCode   | String   | 10     | M        | Refund Reason                                                |
| 6   | refundReasonMessage| String   | 200    | O        | Human readable message for the refundReasonCode               |
| 7   | instructionId      | String   |        | M        | Unique instruction id for the request from acquirer            |
| 8   | token              | String   |        | M        | SHA256 signature token                                      |


<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String= orgnNQrTxnId +”,”+issuerId+”,”+amount+”,”+refundReasonCode+”,”+instructionId`}</code></pre>

For signature token signing, use acquirer private key

***Request Sample***
```json
{
"orgnNQrTxnId": "2110010000000397EYM",
"issuerId": "00000701",
"refundType": "FULL",
"amount": 200,
"refundReasonCode": "R001",
"refundReasonMessage": "Service or Product Could not be delivered",
"instructionId": "ACQR-RFND-163307505",
"token": "<Signature Token>"
}
```


### 7.3.2. Request from NPI to Issuer Network

| #   | Data Items             | Type     | Length | Required | Remarks                                                                                     |
|-----|------------------------|----------|--------|----------|-------------------------------------------------------------------------------------------------|
| 1   | orgnNQrTxnId           | String   | 20     | M        | Original nQrTxnId                                                                            |
| 2   | issuerId               | String   |        | M        | Original issuer id                                                                          |
| 3   | refundType             | String   |        | M        | FULL/PARTIAL (PARTIAL is valid only in case of Refund not in cancellation)                    |
| 4   | amount                 | Numeric  | (12,2)   | M        | Refund Amount                                                                               |
| 5   | transactionFee         | Numeric  | (10,2)   | M        | Transaction fee for refund. 0.00 if none.                                                     |
| 6   | refundReasonCode       | String   | 10     | M        | Refund Reason                                                                               |
| 7   | refundReasonMessage    | String   | 200    | O        | Human readable message for the refundReasonCode                                              |
| 8   | instructionId          | String   |        | M        | Unique instruction id for the request from acquirer.                                          |
| 9   | refundCancellationFlg  | String   |        | M        | R-Refund, C-Cancellation. Refund initiates new transaction for already settled txn and cancellation cancels the transaction that is waiting to be settled. |
| 10  | refundNQrTxnId         | String   | 20     | M        | New txn id if refund. Same txn id if Cancellation.                                            |
| 11  | payerPanId             | String   |        | M        | Mobile Number or User Id which uniquely identifies payer in issuer system, encrypted by public key provided by issuer.                                     |
| 12  | payerMobileNumber      | String   |        | M        | Mobile No of Payer                                                                          |
| 13  | Token                  | String   |        | M        | SHA256 signature token                                                                      |


<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String= orgnNQrTxnId+”,”+issuerId+”,”+amount+”,”+refundReasonCode+”,”+instructionId+”,”+
refundCancellationFlg+”,”+refundNQrTxnId+”,”+payerPanId`}</code></pre>

**Note:** payerPanId in token string will be in plain text. payerPanId received in refund request from NPI has to decrypt with the issuer private key. 

For signature token signing, use NCHL public key

### 7.3.3. Response from Issuer Network to NPI
| #   | Data Items             | Type     | Length | Required | Remarks                                                 |
|-----|------------------------|----------|--------|----------|---------------------------------------------------------|
| 1   | orgnNQrTxnId           | String   | 20     | M        | Original nQRtxn Id                                      |
| 2   | issuerId               | String   |        | M        | Original issuer id                                      |
| 3   | refundType             | String   |        | M        | FULL/PARTIAL                                            |
| 4   | amount                 | Numeric  | 12,2   | M        | Refund Amount                                           |
| 5   | transactionFee         | Numeric  | 10,2   | M        | Transaction fee for refund. 0.00 if none.                |
| 6   | refundReasonCode       | String   | 10     | M        | Refund Reason                                           |
| 7   | refundReasonMessage    | String   | 200    | O        | Human readable message for the refundReasonCode          |
| 8   | instructionId          | String   |        | M        | Unique instruction id for the request from acquirer.     |
| 9   | refundCancellationFlg  | String   |        | M        | R-Refund, C-Cancellation. Refund initiates new transaction for already settled txn and cancellation cancels the transaction that is waiting to be settled. |
| 10  | refundNQrTxnId         | String   |        | M        | New txn id if refund. Same txn id if Cancellation.                                            |
| 11  | payerPanId             | String   |        | M        | Mobile Number or User Id which uniquely identifies payer in issuer system, encrypted by public key provided by issuer.                                     |
| 12  | payerMobileNumber      | String   |        | M        | Mobile No of Payer                                                                          |
| 13  | responseCode           | String   | 10     | M        | Response code for the request.                                                               |
| 14  | responseMessage        | String   | 200    | M        | Human readable message for the provided response code.                                       |
| 15  | Token                  | String   |        | M        | SHA256 signature token                                                                      |

<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String= orgnNQrTxnId+”,”+issuerId+”,”+amount+”,”+refundReasonCode+”,”+instructionId+”,”+
refundCancellationFlg+”,”+ refundNQrTxnId+”,”+payerPanId+”,”+responseCode`}</code></pre>

<b>Note:</b> payerPanId in token string will be in plain text. payerPanId received in refund request from NPI has to de
decrypt with the issuer private key. And again, have to encrypt with NCHL public key and send back in refund
response.

For signature token signing, use issuer private key.

### 7.3.4. Response from NPI to Acquirer Network

| #   | Data Items             | Type     | Length | Required | Remarks                                                                                     |
|-----|------------------------|----------|--------|----------|---------------------------------------------------------------------------------------------|
| 1   | orgnNQrTxnId           | String   | 20     | M        | Original nQRtxn Id                                                                          |
| 2   | issuerId               | String   |        | M        | Original issuer id                                                                          |
| 3   | refundType             | String   |        | M        | FULL/PARTIAL                                                                                |
| 4   | Amount                 | Numeric  | (12,2)   | M        | Refund Amount                                                                               |
| 5   | transactionFee         | Numeric  | (10,2)  | M        | Transaction fee for refund. 0.00 if none.                                                    |
| 6   | refundReasonCode       | String   | 10     | M        | Refund Reason                                                                               |
| 7   | refundReasonMessage    | String   | 200    | O        | Human readable message for the refundReasonCode                                              |
| 8   | instructionId          | String   |        | M        | Unique instruction id for the request from acquirer.                                          |
| 9   | refundCancellationFlg  | String   |        | M        | R-Refund, C-Cancellation. Refund initiates new transaction for already settled txn and cancellation cancels the transaction that is waiting to be settled. |
| 10  | refundNQrTxnId         | String   |        | M        | New txn id if refund. Same txn id if Cancellation.                                            |
| 11  | responseCode           | String   | 10     | M        | Response code for the request.                                                               |
| 12  | responseMessage        | String   | 200    | M        | Human readable message for the provided response code.                                       |
| 13  | Token                  | String   |        | M        | SHA256 signature token                                                                      |


<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String= orgnNQrTxnId+”,”+issuerId+”,” +amount+”,”+refundReasonCode+”,”+instructionId+”,” +
refundCancellationFlg+”,”+refundNQRTxnId+”,”+responseCode`}</code></pre>

<b>Note:</b>For signature token verification, use NCHL public key.


## 7.4. Reporting API

NEPALPAY QR Network members will have access to various reporting API related to Transaction and
Reconciliation report, session query, etc. for the purpose of reporting and reconciliation of the
transactions and payments.


![Example Image](/img/Nepalpay/reporting.png)

<b>Post:</b> /nQR/v1/settledsession

This reporting API is used to fetch the list of sessions in Retail Payment Switch(RPS) and their status
based on settlement data and session serial. Sessions with status SETTLED to be considered for the
reconciliation of QR transactions.

### 7.4.1. Query parameters

| #   | Data Items       | Type     | Length | Required | Remarks                                                                                   |
|-----|------------------|----------|--------|----------|-------------------------------------------------------------------------------------------|
| 1   | sessionSrlno     | Integer  |        | C        | Session number to enquiry the status                                                       |
| 2   | dateSettled      | String   |        | C        | YYYY-MM-dd Format date to get all the sessions settled on that date                        |

### 7.4.2. Response parameters
| #   | Data Items   | Type     | Length | Required | Remarks                                                             |
|-----|--------------|----------|--------|----------|---------------------------------------------------------------------|
| 1   | sessionSrlno | Integer  |        | M        | Session number                                                      |
| 2   | Status       | String   |        | M        | Session Status (e.g. "ACTIVE", "SETTLED"). In order to cancel a transaction, the session must be in "ACTIVE" status. |
| 3   | dateSettled  | String   |        | C        | YYYY-MM-dd Format date to get all the sessions settled on that date. |



***Sample request***
```json
{
 "dateSettled":"2021-11-15"
}
```


***Sample response***
```json
{
  "timestamp": "2022-01-16T07:33:08.383+0000",
  "responseCode": "200",
  "responseStatus": "SUCCESS",
  "responseMessage": null,
  "responseBody": [
    {
      "sessionSrlNo": 1559,
      "status": "GENERATED",
      "settlementDate": "2021-12-18",
      "dateSettled": null
    },
    {
      "sessionSrlNo": 1563,
      "status": "SETTLED",
      "settlementDate": "2021-12-18",
      "dateSettled": null
    }
  ]
}
```

### 7.4.3. Reconciliation report specifications

<b>Post:</b> /nQR/v1/report

This reporting API is used to fetch the list of all transactions of settled session based on session serial
of particular issuer & acquirer

#### 7.4.3.1. Query Parameters
| #   | Data Items       | Type     | Length | Required | Remarks                                                                                   |
|-----|------------------|----------|--------|----------|-------------------------------------------------------------------------------------------|
| 1   | sessionSrlno     | String  |        | M       | Session number to enquiry the status                                                       |
| 2   | issuerId      | String   |        | M        | NEPALPAY Issuer Id             |

#### 7.4.3.2 Response Parameters
| #   | Data Items           | Type      | Length | Required | Remarks                                                              |
|-----|----------------------|-----------|--------|----------|----------------------------------------------------------------------|
| 1   | sessionSrlno         | String    |        |         | Session number for the transaction.                                   |
| 2   | recDate              | Date      |        |         | Date of transaction recording.                                         |
| 3   | instructionId        | String    | 20     |         | Unique reference id to trace the request by issuer/acquirer.          |
| 4   | nQrTxnId             | String    | 20     |         | Unique payment transaction id generated by NCHL.                       |
| 5   | acquirerId           | String    |         |         | Acquirer of the QR code.                                              |
| 6   | issuerId             | String    |         |         | Issuer id.                                                            |
| 7   | network              | String    |         |         | Network of the QR code.                                               |
| 8   | issuerNetwork        | String    |         |         | Network of the issuer.                                                |
| 9   | amount               | Numeric   | (12,2)   |        | Amount.                                                              |
| 10  | interchangeFee       | Numeric   | (10,2)   |        | Charge if applicable else 0.00.                                       |
| 11  | transactionFee       | Numeric   | (10,2)   |         | IF additional cost to be paid by the customer for the transaction else 0.00. |
| 12  | debitStatus          | String    |         |        | Payer Account Debit status.                                           |
| 13  | creditStatus         | String    |         |         | Receiver Account Credit status.                                       |
| 14  | PayerName            | String    | 200    |         | Name of the payer.                                                    |
| 15  | transactionType      | String    |         |         | PMT-Payment, RFND-Refund.                                             |
| 16  | payerMobileNumber    | String    |         |         | Mobile No of Payer.                                                   |
| 17  | merchantName         | String    |         |        | Merchant Name.                                                        |
| 18  | merchantTxnRef       | String    |         |         | Merchant Transaction Reference.                                       |
| 19  | terminal             | String    |         |       | Terminal id of the QR code.                                           |
| 20  | merchantBillNo       | String    |         |         | Bill No of merchant.                                                  |

***Request Sample***
```json
{
"sessionSrlNo":"1542",
"issuerId":"00004501"
}
```
***Response Sample***
```json
{
    "timestamp": "2021-08-10T11:14:41.893+0545",
    "responseCode": "200",
    "responseMessage": "SUCCESS",
    "responseBody": [
    {
        "nQrTxnId": "2107230000000003XBI",
        "tranType": "PMT",
        "instructionId": "HBLQR-1191982838",
        "issuerId": "00000701",
        "acquirerId": "00000701",
        "amount": 2200.11,
        "transactionFee": 0.00,
        "interchangeFee": 15.00,
        "merchantName": "Merchant Name",
        "merchantBillNo": "44454",
        "merchantTxnRef": null,
        "payerName": "Kiran Maharjan",
        "payerMobileNumber": "+977-9849752010",
        "debitStatus": "000",
        "creditStatus": "DEFER",
        "sessionSrlNo": 1214,
        "recDate": "2021-07-23",
        "terminal": "MOB",
        "network": "NQR",
        "issuerNetwork":"NQR"
    },
    {
        "nQrTxnId": "2107230000000005LGB",
        "tranType": "PMT",
        "instructionId": "MBLQR-4589756",
        "issuerId": "00001501",
        "acquirerId": "00000701",
        "amount": 10000.00,
        "transactionFee": 0.00,
        "interchangeFee": 53.25,
        "merchantName": "Merchant Name",
        "merchantBillNo": "0",
        "merchantTxnRef": "56555",
        "payerName": "Sudip Shah",
        "payerMobileNumber": "+977-9851011596",
        "debitStatus": "000",
        "creditStatus": "CNCL",
        "sessionSrlNo": 1214,
        "recDate": "2021-07-23",
        "terminal": "CIPS",
        "network": "NQR",
        "issuerNetwork":"NQR"
    },
    {
        "nQrTxnId": "2107230000000004BIJ",
        "tranType": "RFND",
        "instructionId": "MOCO_RFND-12358",
        "issuerId": "00001601",
        "acquirerId": "00000701",
        "amount": 500.00,
        "transactionFee": 0.00,
        "interchangeFee": 0.00,
        "merchantName": "Merchant Name",
        "merchantBillNo": "0",
        "merchantTxnRef": "21072300000000423KIO",
        "payerName": "Rakesh Pokheral",
        "payerMobileNumber": "+977-9849752010",
        "debitStatus": "000",
        "creditStatus": "000",
        "sessionSrlNo": 1214,
        "recDate": "2021-07-23",
        "terminal": "WAL",
        "network": "NQR",
        "issuerNetwork":"NQR"
    },
    {
        "nQrTxnId": "2107230000000002FRR",
        "tranType": "PMT",
        "instructionId": "EVRSTQR-4545544",
        "issuerId": "00001001",
        "acquirerId": "00000701",
        "amount": 300.25,
        "transactionFee": 5.25,
        "interchangeFee": 2.50,
        "merchantName": "Merchant Name",
        "merchantBillNo": "jjhd6",
        "merchantTxnRef": null,
        "payerName": "Jeevan Shrestha",
        "payerMobileNumber": "+977-9851752010",
        "debitStatus": "000",
        "creditStatus": "DEFER",
        "sessionSrlNo": 1214,
        "recDate": "2021-07-23",
        "terminal": "MOB",
        "network": "NQR",
        "issuerNetwork":"XXX"
    }
  ]
}
```
### 7.4.4. Individual transaction report
<b>Post:</b> /nQR/v1/merchanttxnreport

***Query parameters:***

| #   | Data Items              | Type    | Length | Required | Remarks                                                             |
|-----|-------------------------|---------|--------|----------|---------------------------------------------------------------------|
| 1   | validationTraceId       | String  | 20     | C        | Unique QR validation Id provided by NCHL during QR generation        |
| 2   | merchantId              | String  |        | M        | Creditor Id/Merchant Code                                           |
| 3   | acquirerId/issuerId     | String  |        | M        | Acquirer/Issuer of the QR code                                       |
| 4   | nQrTxnId                | String  | 20     | C        | Unique payment transaction id generated by NCHL                      |
| 5   | instructionId           | String  | 20     | C        | Unique reference id to trace the request by issuer/acquirer          |

<b>Response parameters:</b>

| #   | Data Items       | Type    | Length | Required | Remarks                                                    |
|-----|------------------|---------|--------|----------|------------------------------------------------------------|
| 1   | sessionSrlno    | String  |        |        | Session number for the transaction                          |
| 2   | recDate         | Date    |        |         | Date of transaction recording                               |
| 3   | instructionId   | String  | 20     |         | Unique reference id to trace the request by issuer/acquirer |
| 4   | nQrTxnId        | String  | 20     |         | Unique payment transaction id generated by NCHL              |
| 5   | acquirerId      | String  |        |         | Acquirer of the QR code                                     |
| 6   | issuerId        | String  |        |         | Issuer id                                                   |
| 7   | Network         | String  |        |         | Network of the QR code                                      |
| 8   | issuerNetwork   | String  |        |         | Network of the issuer                                       |
| 9   | Amount          | Numeric | (12,2)   |         | Amount                                                      |
| 10  | interchangeFee  | Numeric | (10,2)   |         | Charge if applicable else 0.00                              |
| 11  | transactionFee  | Numeric | (10,2)   |         | IF additional cost to be paid by the customer else 0.00     |
| 12  | debitStatus     | String  |        |         | Payer Account Debit status                                  |
| 13  | creditStatus    | String  |        |         | Receiver Account Credit status                              |
| 14  | PayerName       | String  | 200    |         | Name of the payer                                           |
| 15  | transactionType    | String  |        |         | PMT-Payment, RFND-Refund                                  |
| 16  | payerMobileNumber  | String  |        |         | Mobile No of Payer                                        |
| 17  | merchantName       | String  |        |         | Merchant Name                                             |
| 18  | merchantTxnRef     | String  |        |         | Merchant Transaction Reference                            |
| 19  | Terminal           | String  |        |         | Terminal id of the QR code                                |
| 20  | merchantBillNo     | String  |        |         | Bill No of merchant                                       |

***Request Sample***
```json
{
"validationTraceId":"2205260000001900KIY",
"acquirerId":"00001501",
"merchantId": "XTZABCZ",
"nQRTxnId":"123153131",
"instructionId":"24324145241"
}
```


***Response Sample***
```json
{
    "timestamp": "2021-08-10T11:14:41.893+0545",
    "responseCode": "200",
    "responseMessage": "SUCCESS"
    "responseBody": [
    {
        "nQrTxnId": "2107230000000003XBI",
        "tranType": "PMT",
        "instructionId": "HBLQR-1191982838",
        "issuerId": "00000701",
        "acquirerId": "00000701",
        "amount": 2200.11,
        "transactionFee": 0.00,
        "interchangeFee": 15.00,
        "merchantName": "Merchant Name",
        "merchantBillNo": "44454",
        "merchantTxnRef": null,
        "payerName": "Kiran Maharjan",
        "payerMobileNumber": "+977-9849752010",
        "debitStatus": "000",
        "creditStatus": "114",
        "sessionSrlNo": 1214,
        "recDate": "2021-07-23",
        "terminal": "MOB",
        "network": "NQR",
        "issuerNetwork":"NQR"
    },
    {
        "nQrTxnId": "2107230000000003XBI",
        "tranType": "PMT",
        "instructionId": "HBLQR-1191982838",
        "issuerId": "00000701",
        "acquirerId": "00000701",
        "amount": 2200.11,
        "transactionFee": 0.00,
        "interchangeFee": 15.00,
        "merchantName": "Merchant Name",
        "merchantBillNo": "44454",
        "merchantTxnRef": null,
        "payerName": "Kiran Maharjan",
        "payerMobileNumber": "+977-9849752010",
        "debitStatus": "000",
        "creditStatus": "DEFER",
        "sessionSrlNo": 1214,
        "recDate": "2021-07-23",
        "terminal": "MOB",
        "network": "NQR",
        "issuerNetwork":"NQR"
    }
  ]
}
```

<b>Note:</b>


1. For the finality of transaction, kindly consider debitStatus 000 and creditStatus (‘000’,’DEFER’ and
999).
2. If validation trace id is used as input parameter for transaction query, there can have more than one
record for same validation traceid. For example, in case of dynamic QR, the validation trace id is fixed
during QR generated. Customer can make the multiple payments if earlier made payment is failed. Now
the response will be the details of earlier failed and current success transaction as well. This will help to
identiify the number of transactions made for same validation trace id with their corresponding status.

## 7.5. Merchant QR Generation
Merchant QR generation process includes the interface between the merchant system and NEPALPAY
QR network. This API provides the flexibility for merchants to select either a base64 encoded dynamic
QR Image itself or a QR String as the output.This interface specification describes a technical level
communication of data exchange between the merchant system and the NEPAYPAY QR system.


### 7.5.1. Authentication and Authorization
Basic Authentication is a common method of authenticating to an API. The client sends HTTP      requests with the Authorization header that contains the Basic word followed by a space and a base64-encoded username: password string.

Header key = 'Authorization'

Value = 'Basic '+ base 64 encoding of a username and password separated by a colon.

Authorization: Basic ZGVtbzpwQDU1dzByZA==

***Example:***
```json
curl --location 'https://<host: port>/qr/generateQR' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cGxhem1hdDpBYmNkQDEyMw==' \
--data '{
    "pointOfInitialization": 12,
    "acquirerId": "00002501",
    "merchantId": "2501ELFDRY2",
    "merchantName": "Plazma Tech",
    "merchantCategoryCode": 4121,
    "merchantCountry": "NP",
    "merchantCity": "Kathmandu",
    "merchantPostalCode": "4600",
    "merchantLanguage": "en",
    "transactionCurrency": 524,
    "transactionAmount": "10.00",
    "valueOfConvenienceFeeFixed": "0.00",
    "billNumber": "012345",
    "referenceLabel": null,
    "mobileNo": null,
    "storeLabel": "Store1",
    "terminalLabel": "Terminal1",
    "purposeOfTransaction": "Bill payment",
    "additionalConsumerDataRequest": null,
    "loyaltyNumber": null,
    "token": "a1e0pTCtdgqny2BBPgKT/9EaLrRA0J99PYlNyjM5887nkebzvaKtsHT/aciZxXmqsnYMnktXJmseFIsiyE+06476RXrQaCNLEZ4LvsraSz5VWrb/ysA5HgFMqcXyRVCYkC4Ye5Uqbi87wbEyj1bb6Cb2yqDAOGm4uGmn7T5W9Gc="
}'

```
    


<b>Post:</b> /qr/generateQR


 ***Request from Merchant to NPI for QR generation***



<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Data Items</th>
         <th>Type</th>
         <th>Length</th>
         <th>Required </th>
         <th>Remarks</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>pointOfInitialization </td>
      <td>Integer</td>
      <td>2 </td>
      <td>M </td>
      <td>Point of Initiation Method (Use 11 for
static QR and 12 for Dynamic QR)
</td>
     </tr>
     <tr>
      <td>2</td>
      <td>acquirerId</td>
      <td>String</td>
      <td></td>
      <td> M</td>
      <td>Acquirer of the QR code
</td>
     </tr>
      <tr>
      <td>3</td>
      <td>merchantId</td>
      <td>String</td>
      <td></td>
      <td>M</td>
      <td>Creditor Id/ Merchant Code</td>
     </tr>
      <tr>
      <td>4</td>
      <td>merchantName </td>
      <td>String</td>
      <td>25</td>
      <td>M</td>
      <td>Merchant Name</td>
     </tr>
      <tr>
      <td>5</td>
      <td>merchantCategory</td>
      <td>Integer</td>
      <td>4</td>
      <td>M</td>
      <td>Merchant Category Code</td>
     </tr>
     <tr>
      <td>6</td>
      <td>merchantCity</td>
      <td>String</td>
      <td></td>
      <td>M</td>
      <td>City</td>
     </tr>
     <tr>
      <td>7</td>
      <td>merchantCountry</td>
      <td>String</td>
      <td></td>
      <td>M</td>
      <td>Country code</td>
     </tr>
     <tr>
      <td>8</td>
      <td>merchantPostalCode</td>
      <td>String </td>
      <td></td>
      <td>M </td>
      <td>Merchant’s Zip Code/Pin Code/Postal
Code</td>
     </tr>
     <tr>
      <td>9</td>
      <td>transactionCurrency</td>
      <td>Integer</td>
      <td>3</td>
      <td>M</td>
      <td>Currency code (eg. 524 for Nepali
rupee)</td>
     </tr>
     <tr>
      <td>10</td>
      <td>transactionAmount</td>
      <td>Numeric</td>
      <td>(12,2)</td>
      <td>M</td>
      <td>Amount. 0.00 if none.</td>
     </tr>
     <tr>
      <td>11</td>
      <td>valueOfConvenienceFeeFixed</td>
      <td>Numeric</td>
      <td>(10,2)</td>
      <td>O </td>
      <td>Transaction Fee, if the transaction costs
additional fee for the customer.</td>
     </tr>
    <tr>
      <td>12</td>
      <td>billNumber</td>
      <td>String </td>
      <td>25</td>
      <td>O </td>
      <td>Bill No of merchant. 0 if none.</td>
     </tr>
     <tr>
      <td>13</td>
      <td>referenceLabel</td>
      <td>String </td>
      <td>25</td>
      <td>O</td>
      <td></td>
     </tr>
     <tr>
      <td>14</td>
      <td>storeLabel</td>
      <td>String </td>
      <td>25</td>
      <td>M </td>
      <td>Store label of the QR code.</td>
     </tr>
     <tr>
      <td>15</td>
      <td>terminalLabel</td>
      <td>String </td>
      <td>25</td>
      <td>O </td>
      <td>Terminal id of the QR code.0 if none.</td>
     </tr>
     <tr>
      <td>16</td>
      <td>purposeOfTransaction</td>
      <td>String </td>
      <td>25</td>
      <td>O</td>
      <td>Purpose of transaction.</td>
     </tr>
     <tr>
      <td>17</td>
      <td>addenda1-addenda10 </td>
      <td>String </td>
      <td>25</td>
      <td>O </td>
      <td>Additional fields 1 to 10 for additional
usages.</td>
     </tr>
     <tr>
      <td>18</td>
      <td>qrImage </td>
      <td>Boolen </td>
      <td></td>
      <td>C</td>
      <td>false: QR string will be provided (by
default)
true: QR image will be provided.</td>
     </tr>
     <tr>
      <td>19</td>
      <td>Token</td>
      <td>String </td>
      <td></td>
      <td>M</td>
      <td>SHA 256 Signture Token</td>
     </tr>
     
 </tbody>
</table>

***Request Sample:***
```json
{
  "pointOfInitialization": 12,
  "acquirerId": "00001701",
  "merchantId": "17012UVSTIR",
  "merchantName": "BBSM",
  "merchantCategoryCode": 5021,
  "merchantCountry": "NP",
  "merchantCity": "Kathmandu",
  "merchantPostalCode": "4600",
  "merchantLanguage": "en",
  "transactionCurrency": 524,
  "transactionAmount": "0.00",
  "valueOfConvenienceFeeFixed": "0.00",
  "billNumber": "012345",
  "referenceLabel": null,
  "mobileNo": null,
  "storeLabel": "Store1",
  "terminalLabel": "Terminal1",
  "purposeOfTransaction": "Bill payment",
  "additionalConsumerDataRequest": null,
  "loyaltyNumber": null,
  "qrImage": false,
  "token": "PcK7JFPfEUvtGouuShjQgten7HQsAxxGVZJ+38ORzEOCEMV3Dlt7V0M7g+HUBfn0+oHZqAsb2p
  zTQHWEQPLmPOGR4lVEoy581vYmN5PfMLSQqb/UxixT1O4X6ZFeV9sVivP3Y1gVfILPIzRm2CfML4BTHhDl
  pNvoOQ840nvNn2E="
}
```
**PROCESS TO GENERATE TOKEN**

```json
TokenString for dynamic QR: acquirerId+”, “+merchantId +”, “+merchantCategoryCode+”, “+transactionCurrency+”, “+ transactionAmount+”, “+billNumber+”, “+userId
```

```json
TokenString for static QR: acquirerId+”, “+merchantId +”, “+merchantCategoryCode+”, “+transactionCurrency+”, “+billNumber+”, “+userId
```


i.  Generate message digest of the token string using SHA256 hashing algorithm. <br/>
ii. Sign the message digest using the digital certificate private key (pfx file/keystore). The digital signature algorithm will be the SHA256withRSA. Private key file will be NPI.pfx for testing purpose. <br/>
iii. Convert the signed token above in step ii to base64 encoding. <br/>
iv. Pass this signature string from step iii to the “token” field of the request message.<br/>


**Note: userId is a NPI user provided to the merchant.**


**Successful Response For Dynamic QR:**
```json
{
  "timestamp": "2022-05-23 04:25:26",
  "responseCode": "000",
  "responseStatus": "SUCCESS",
  "responseMessage": "QR String generated successfully.",
  "data": {
    "validationTraceId": "2205260000001900KIY",
    "qrString": "00020100020101021229270023NCHL0000170117012UVSTIR52045021530352454040.0056040.005802NP5904BBSM6009Kathmandu6271010100306Khalti0709Terminal10812Billpayment512300192205260000001900KIY6304607F"
  }
}
```
In Response section:

 
**Note:** In case of Dynamic QR the point of Initialization will be **12.**

qrString: 0002010002010102<strong>12</strong>29270023NCHL0000170117012UVSTIR52045021530352454040.0056040.005802NP5904BBSM6009Kathmandu6271010100306Khalti0709Terminal10812Billpayment512300192205260000001900KIY6304607F"

**Successful response for static QR**
```json

{

  "timestamp": "2025-03-28 11:31:46",
  "responseCode": "000",
  "responseStatus": "SUCCESS",
  "responseMessage": "QR String generated successfully.",
  "data": {

    "qrString": "00020101021129270023NCHL000025012501DBGLNQG52044511530352456040.005802NP5917Evolve Pvt. Ltd. 6009Kathmandu6274010412340306Store10709Terminal10812Bill payment512300192503280000266732PBI63048802",
    "validationTraceId": "2503280000266732PBI"
}
}
 ```
In Response section:

**Note:**In case of static QR the point of Initialization will be  **11.**

qrString: 0002010102<strong>11</strong>29270023NCHL000025012501DBGLNQG52044511530352456040.005802NP5917Evolve Pvt.Ltd.6009Kathmandu6274010412340306Store10709Terminal10812Billpayment512300192503280000266732PBI63048802
 

The highlighted section above is the sub tag 51 of field 62 which is validation id generated by NCHL during
QR generation. This validation trace id will be used for end to end reporting and reconciliation.

***Response***

S.N. | Data Items | Type | Length | Required | Remarks
--- | --- | --- | --- | --- | ---
1 | validationTraceId | String | 20 | M | Unique QR validation Id provided by NCHL during QR generation. It will be used for end-to-end reporting and reconciliation.
2 | qrString | String | - |  | QR string to be used for QR generation and display.


<b>Unsuccessful Response</b>

You will get error details in responseResult (i.e. responseCode, responseDescription and fieldErrors)
respectively.

***Successful Response When qrImage Tag Is True:***

The highlighted section above is the sub tag 51 of field 62 which is validation id generated by NCHL during
QR generation. This validation trace id will be used for end to end reporting and reconciliation.

***Response***
<table>
  <tr>
    <th>S.N.</th>
    <th>Data Items</th>
    <th>Type</th>
    <th>Length</th>
    <th>Required</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>1</td>
    <td>validationTraceId</td>
    <td>String</td>
    <td>20</td>
    <td>M</td>
    <td>Unique QR validation Id provided by NCHL during QR generation. It will be used for end to end reporting and reconciliation.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>qrString</td>
    <td>String</td>
    <td>-</td>
    <td>-</td>
    <td>QR string to be used for QR generation and display.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>qrImage</td>
    <td>String</td>
    <td></td>
    <td>C</td>
    <td>Base64 encoded QR Image</td>
  </tr>
</table>



```json
{
  "timestamp": "2024-01-09 11:44:40",
  "responseCode": "000",
  "responseStatus": "SUCCESS",
  "responseMessage": "QR String generated successfully.",
  "data": {
    "qrString":
    "01021229270023NCHL000023012301JR0R2KT52044111530105406290.14560105802NP5907BigMart6009
    Kathmandu62830109ABC0001540312Bikash
    Saran0409A123412340710ConnectIPS512300192401090000204270ZTV6304EC0E",
    "validationTraceId": "2401090000204270ZTV",
    "qrImage":
    "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAHuUlEQVR42u3bUW7lOBADwHf/S2duME
    Dw1GRLKf46cWyrSwtwtJ8fEanm4xOIQCgCoYhAKAKhiEAoAqGIQCgCoYhAKAKhiEAoAqGIQCgCoYhAKAK
    hiEAoAqGIQCgCoYhAKAKhiEAoAqGIQCgC4f/vmMqvHuObqwcfsnV17vXnHqO1ZN9MHYQQQgghhBBCCC
    GEEEIIIYQQLkMYu3Psy34zOq3HmLvVp5QlUwchhBBCCCGEEEIIIYQQQgghhFchbDVvS1rZWFv4q6/xzQ/P
    Za52XsIbQgghhBBCCCGEEEIIIYQQQggfQtg68zW3hLE2uMUstiVBCCGEEEIIIYQQQgghhBBCCCGEi9vRuX
    pwZ6PbOgB4xZFGCCGEEEIIIYQQQgghhBBCCCF8F+GSD33F+biD+Oc2nSUlbWvqIIQQQgghhBBCCCGEE
    EIIIYRwN8KdjZ+rb19dshVC6CqEEELoKoQQugohhBC6CmEc4c7MLfDBbm2uHW19jVZZetlwQgghhBBCCCG
    EEEIIIYQQQgjhxnb04J3nxj2GsFUsx/DHAG/DDyGEEEIIIYQQQgghhBBCCCGEpbE7uKJzPxwD3Jrgnae6Yu8
    LIYQQQgghhBBCCCGEEEIIIYQPIZzrqWLHx2I7xY17QWyjjFWadZMQQgghhBBCCCGEEEIIIYQQQphCODd
    YOw/EtfrAOQyxnaL1w++3oxBCCCGEEEIIIYQQQgghhBBCOG4jtoSxgZ6blSUmr9jsIIQQQgghhBBCCCGEEE
    IIIYTwKoRzy39FIdZ6yNhpwSu64lhFDyGEEEIIIYQQQgghhBBCCCGEuxHuVHfwu8cmuHWrVtPY0g4hhBBCC
    CGEEEIIIYQQQgghhFchnJvvJX3gzh0qtoI7p/+KqhxCCCGEEEIIIYQQQgghhBBCCNvt6MH1nnO15ChWbLOb
    e6ol6lp/CEIIIYQQQgghhBBCCCGEEEII2wh3MovNWezoWWwVYqXlwd9dskNBCCGEEEIIIYQQQgghhBBCC
    OFuhHO/e/DOB/9Qq6SNlYcxDEsqawghhBBCCCGEEEIIIYQQQgghbCNcMv1zG0fLRmxGr+A9147mVxBCCC
    GEEEIIIYQQQgghhBBCCEvtaGxVYldjm06saD04lDEqS04LQgghhBBCCCGEEEIIIYQQQghhux1dssCtPvDGb
    7WzaTx4Pm7bbEAIIYQQQgghhBBCCCGEEEII4Y469FPKwe8+9xix952rf2Mn0WJFK4QQQgghhBBCCCGEE
    EIIIYQQLkM4R3RuGurLcLyXi+1BB/eRg1vDXcsNIYQQQgghhBBCCCGEEEIIIYSl0Ym1WAevzo3dFW+05JljD
    ecL/0QBIYQQQgghhBBCCCGEEEIIIYTl333PxsF2dO5E2I3NeT4QQgghhBBCCCGEEEIIIYQQQrgjS0andW6r
    ZWPJ3hf7krFmFUIIIYQQQgghhBBCCCGEEEII2+1orCxtFY9zAx3bKWKffedeX39mCCGEEEIIIYQQQgghhBB
    CCCFc+TnmiriY551TOPeQSxrO1n8JIIQQQgghhBBCCCGEEEIIIYRwGcLW8bHWes+Vpa2rsRWM2di2M0IIIY
    QQQgghhBBCCCGEEEIIYerrzA3HHOC5TefgG7WoxF4hZvLBs6MQQgghhBBCCCGEEEIIIYQQQjj+wq0u8eB
    wLDnE19o4lmw6EEIIIYQQQgghhBBCCCGEEEJ4M8K5tnDnQa1Yt3bw7964Fe7c+iGEEEIIIYQQQgghhBBCC
    CGE8GaEcx+rBWnOxlzhGduS5r7GXGUNIYQQQgghhBBCCCGEEEIIIYR/BmFsGeYeMratLFmjuRWMjUqr7o
    YQQgghhBBCCCGEEEIIIYQQwjjCg1fnWtnWG11RHsaqxSVn3B5sRyGEEEIIIYQQQgghhBBCCCF8GWFszp
    Y8VcvGXIc597uxc3mtkhZCCCGEEEIIIYQQQgghhBBCCJe1o61iau7g0kGxsWeeG9nWma/WxgEhhBBCCCG
    EEEIIIYQQQgghhFchXNIHfjN2scavdVAr9oc+qRwcMwghhBBCCCGEEEIIIYQQQgghfAjhzvZsjmjsmefe94pd9
    WCx/BMPhBBCCCGEEEIIIYQQQgghhBDeoK41di3esaK11bu28rMsEEIIIYQQQgghhBBCCCGEEEJ4f+amYW
    4PavWQc1tDbDefu9WDx9YghBBCCCGEEEIIIYQQQggh/EMIlzR+Bwc61rsevHOs8GzNxty3ghBCCCGEEEIII
    YQQQgghhBDChxBe0X8eXIa5aYhVi0seI9YVxwYYQgghhBBCCCGEEEIIIYQQQgjbCGMNWGvcY6NzY7H8u
    T8QQgghhBBCCCGEEEIIIYQQQgjh17OS/9DT9e+SNbrxIeuzASGEEEIIIYQQQgghhBBCCCGEryOcK0tbHWb
    szks2jrmpaz0zhBBCCCGEEEIIIYQQQgghhBA+9P8Tzo3dwZ1irqaLbRytUnpuw8qrgxBCCCGEEEIIIYQQQggh
    hBDCFMJWedh6hSWtbKvDvOu82JLHgBBCCCGEEEIIIYQQQgghhBBCESkFQhEIRSAUEQhFIBQRCEUgFB
    EIRSAUEQhFIBQRCEUgFBEIRSAUEQhFIBQRCEUgFBEIRSAUEQhFIBQRCEUgFBEIRSAUkYP5B2StCp2
    MVFH1AAAAAElFTkSuQmCC"
    }
}
```

***Successful Response When qrImage Tag Is False:***
```json
{
    "timestamp": "2022-05-23 04:25:26",
    "responseCode": "000",
    "responseStatus": "SUCCESS",
    "responseMessage": "QR String generated successfully.",
      "data": {
      "validationTraceId":"2205260000001900KIY",
      "qrString": "01021229270023NCHL0000170117012UVSTIR52045021530352454040.0056040.005802N
      P5904BBSM6009Kathmandu6271010100306Khalti0709Terminal10812Bill payment512300192205260000001
      900KIY6304607F”
      }
}
```

***Sample QR Image:***

To generate the QR image, decode the output of qrImage tag above with base64 to Image.

![Example Image](/img/Nepalpay/qr.png)

***Failed Response:***
```json
  {
    "responseCode": "400",
    "responseDescription": "PARAMETER VALIDATION ERROR",
    "fieldErrors": [
      {
      "field": "pointOfInitialization",
      "message": "Please use (11 for static QR and 12 for dynamic QR)."
      }
    ]
  }
    {
      "responseCode": "E003",
      "responseMessage": "INVALID TOKEN",
      "data": "",
      "classfielderrorlist": []
    }
```

***Not Found***
```json
    {
      "responseCode": "E010",
      "responseMessage": "RECORD NOT FOUND:- Merchant not found!",
      "data": null,
      "classfielderrorlist": []
    }
```

***Internal Server Error -500***
```json
    {
      "responseCode": "E999",
      "responseMessage": "ERROR",
      "data": null,
      "classfielderrorlist": []
    }
```

***In case of service not available***
```json
    {
      "timestamp": "2022-05-26 04:07:22",
      "responseCode": "E999",
      "responseMessage": "ERROR",
      "data": null
    }
```

## 7.6. Merchant Register in NEPALPAY QR scheme
Merchant onboarded by third party acquirer under NEPALPAY QR specification through their merchant
management system (MMS) is required to register in NEPALPAY QR scheme. Merchant registration is
required for reporting purpose and verification of merchant during merchant settlement. Merchants can
be registered either in a bulk or individually as per below specification.


<b>POST URL:</b> /nQR/v1/merchant/register

***Request Parameters***
<table>
  <tr>
    <th>S.N</th>
    <th>Field Name</th>
    <th>Data Type</th>
    <th>Length</th>
    <th>Presence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>instructionId</td>
    <td>String</td>
    <td>20</td>
    <td>Y</td>
    <td>Unique reference id to trace the merchant registration.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>acquirerId</td>
    <td>String</td>
    <td></td>
    <td>Y</td>
    <td>Acquirer of QR merchant.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>merchantDetail</td>
    <td>List</td>
    <td></td>
    <td>Y</td>
    <td>List of merchants</td>
  </tr>
  <tr>
    <td>3.1</td>
    <td>merchantPan</td>
    <td>String</td>
    <td>20</td>
    <td>Y</td>
    <td>Merchant PAN number</td>
  </tr>
  <tr>
    <td>3.2</td>
    <td>merchantName</td>
    <td>String</td>
    <td>25</td>
    <td>Y</td>
    <td>Merchant common name</td>
  </tr>
  <tr>
    <td>3.3</td>
    <td>merchantCategoryCode</td>
    <td>String</td>
    <td>4</td>
    <td>Y</td>
    <td>Merchant category code (MCC)</td>
  </tr>
  <tr>
    <td>3.4</td>
    <td>merchantAddress</td>
    <td>String</td>
    <td>150</td>
    <td>Y</td>
    <td>Merchant address</td>
  </tr>
  <tr>
    <td>3.5</td>
    <td>terminalId</td>
    <td>String</td>
    <td>50</td>
    <td>Y</td>
    <td>Terminal id</td>
  </tr>
  <tr>
    <td>3.6</td>
    <td>regDate</td>
    <td>String</td>
    <td></td>
    <td>Y</td>
    <td>Merchant registration date (yyyy-MM-dd)</td>
  </tr>
  <tr>
    <td>3.7</td>
    <td>status</td>
    <td>String</td>
    <td>1</td>
    <td>Y</td>
    <td>Status of merchant (A=Active, I=Inactive)</td>
  </tr>
</table>

<pre><code parentName="pre"{...{"className":"language-json"}}>{`TokenString: instructionId+","+acquirerId+","+userId`}</code></pre>

<b>Note:</b> userId is a NPI user provided to the merchant.


***Sample Request***
```json
  {
    "instructionId": "123454321",
    "acquirerId": "54321",
    "merchantDetail": [
      {
        "merchantPan": "12345",
        "merchantName": "Merchant name 1",
        "merchantCategoryCode": "1111",
        "merchantAddress": "Kathmandu",
        "terminalId": "12345678",
        "regDate": "2000-01-01",
        "status": "A"
      },
      {
        "merchantPan": "67890",
        "merchantName": "Merchant name 2",
        "merchantCategoryCode": "2222",
        "merchantAddress": "Lalitpur",
        "terminalId": "98765432",
        "regDate": "2010-10-10",
        "status": "I"
      }
  ],
    "token": "PcK7JFPfEUvtGouuShjQgten7HQsAxxGVZJ+38ORzEOCEMV3Dlt7V0M7g+HUBfn0+oHZqAsb2p
  zTQHWEQPLmPOGR4lVEoy581vYmN5PfMLSQqb/UxixT1O4X6ZFeV9sVivP3Y1gVfILPIzRm2CfML4BTHhDl
  pNvoOQ840nvNn2E="
}
```

***Success Response***
```json
{
  "responseCode": "000",
  "responseMessage": "SUCCESS",
  "responseData": "Successfully Registered",
  "responseErrors": {}
}
```

***Failed Response***
```json
  {
      "responseCode": "E007",
      "responseMessage": "TECHNICAL VALIDATION FAILED",
      "data": null,
      "classfielderrorlist": [
    {
      "field": "merchantDetail[0].merchantPan",
      "message": "Merchant with pan number '12345' for Acquirer '54321' already exist."
    },
    {
      "field": "merchantDetail [1].merchantPan",
      "message": "Merchant with pan number '67890' for Acquirer '54321' already exist."
    }
  ]
}
```

<b>POST URL:</b> /nQR/v1/merchant/status/change

This API is used to update the status of already registered merchant in NEPALPAY QR ascheme. Request
parameter and token string are same as merchant register API as above.

***Sample Request***
```json
  {
    "instructionId": "123454321",
    "acquirerId": "54321",
    "merchantDetail": [
    {
        "merchantPan": "12345",
        "merchantName": "Merchant name 1",
        "merchantCategoryCode": "1111",
        "merchantAddress": "Kathmandu",
        "terminalId": "12345678",
        "regDate": "2000-01-01",
        "status": "A"
    },
    {
        "merchantPan": "67890",
        "merchantName": "Merchant name 2",
        "merchantCategoryCode": "2222",
        "merchantAddress": "Lalitpur",
        "terminalId": "98765432",
        "regDate": "2010-10-10",
        "status": "I"
    }
  ],
    "token": "PcK7JFPfEUvtGouuShjQgten7HQsAxxGVZJ+38ORzEOCEMV3Dlt7V0M7g+HUBfn0+oHZqAsb2p
    zTQHWEQPLmPOGR4lVEoy581vYmN5PfMLSQqb/UxixT1O4X6ZFeV9sVivP3Y1gVfILPIzRm2CfML4BTHhDl
    pNvoOQ840nvNn2E="
}
```

<b>Note:</b> A = Active, I = Inactive

***Success Response***
  ```json
    {
      "responseCode": "000",
      "responseMessage": "SUCCESS",
      "responseData": "Successfully updated merchant status.",
      "responseErrors": {}
    }
  ```
***Failed Response***
```json

  {
      "responseCode": "E007",
      "responseMessage": "TECHNICAL VALIDATION FAILED",
      "data": null,
      "classfielderrorlist": [
          {
            "field": "merchantDetail [1]. merchantPan",
            "message": "Must not be null or empty."
          }
      ]
  }
```
## 7.7. Payment Confirmation API Details
This API serves as the channel for payment confirmation from NEPALPAY QR engine after successful QR
transaction. It is specifically designed for service providers who have integrated NEPALPAY Dynamic QR
as their payment instrument. The respective merchant service providers must have exposed the API
according to the following specification.

***POST URL:*** /nepalpay/confirm-payment

***Authorization:***  Basic Auth

***Request Signature Generation:***
The signature string will be the combination of request parameters in the following format.

<pre><code parentName="pre"{...{"className":"language-json"}}>{`Signature String = <merchantBillNo>+”,” +<merchantId>+”,” +<merchantName>+”,” +<paymentRef>+”,”
+<channel>+”,” +<payerMobileNumber>+”,” +<sessionNo>`}</code></pre>


1. Sign the token string using the digital certificate private key (pfx file/keystore). The digital signature
algorithm will be the SHA256 with RSA.
1. Convert the signed token above in step 2 to base64 encoding.
2. Pass this signature string to the “signature” field of the request message.

***Response Token Generation:***

The signature string is the combination of response parameters in the following format.

<pre><code parentName="pre"{...{"className":"language-json"}}>{`Token String = < txnDate >+”,” +< status >+”,” +< message >+”,” +< mchantBillNo >+”,” +< paymentRef >`}</code></pre>

1. Sign the token string using the digital certificate private key (pfx file/keystore). The digital signature
algorithm will be the SHA256 with RSA.
2. Convert the signed token above in step 2 to base64 encoding.
3. Pass this signature string to the “signature” field of the request message.

***Request Parameters:***
<table>
  <tr>
    <th>S.N</th>
    <th>Params</th>
    <th>Type</th>
    <th>Length</th>
    <th>Presence</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>txnDate</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Transaction date. Format (yyyy-MM-dd HH:mm:ss)</td>
  </tr>
  <tr>
    <td>2</td>
    <td>txnAmount</td>
    <td>Numeric</td>
    <td>12,2</td>
    <td>M</td>
    <td>Transaction amount</td>
  </tr>
  <tr>
    <td>3</td>
    <td>chargeAmt</td>
    <td>Numeric</td>
    <td>12,2</td>
    <td>M</td>
    <td>Charge amount</td>
  </tr>
  <tr>
    <td>4</td>
    <td>merchantId</td>
    <td>String</td>
    <td>25</td>
    <td>M</td>
    <td>Merchant code</td>
  </tr>
  <tr>
    <td>5</td>
    <td>storeLabel</td>
    <td>String</td>
    <td>25</td>
    <td>O</td>
    <td>Store label of QR code</td>
  </tr>
  <tr>
    <td>6</td>
    <td>terminalId</td>
    <td>String</td>
    <td>10</td>
    <td>O</td>
    <td>Terminal label of QR code</td>
  </tr>
  <tr>
    <td>7</td>
    <td>merchantName</td>
    <td>String</td>
    <td>25</td>
    <td>M</td>
    <td>Merchant name</td>
  </tr>
  <tr>
    <td>8</td>
    <td>rpstxnId</td>
    <td>Numeric</td>
    <td></td>
    <td>M</td>
    <td>Transaction id from Network side</td>
  </tr>
  <tr>
    <td>9</td>
    <td>validationTraceId</td>
    <td>String</td>
    <td>20</td>
    <td>M</td>
    <td>Unique QR validation Id provided by NCHL during QR generation. It will be used for end-to-end reporting and reconciliation.</td>
  </tr>
  <tr>
    <td>10</td>
    <td>paymentRef</td>
    <td>Alpha-Numeric</td>
    <td>35</td>
    <td>M</td>
    <td>Unique QR validation Id. It will be used for end-to-end reporting and reconciliation</td>
  </tr>
  <tr>
    <td>11</td>
    <td>merchantBillNo</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>Bill no./ Unique code or Id enough for transaction reconciliation</td>
  </tr>
  <tr>
    <td>12</td>
    <td>status</td>
    <td>String</td>
    <td>10</td>
    <td>M</td>
    <td>Transaction status (SUCCESS|PENDING|FAILED)</td>
  </tr>
  <tr>
    <td>13</td>
    <td>statusDesc</td>
    <td>String</td>
    <td>50</td>
    <td>M</td>
    <td>Transaction status description</td>
  </tr>
  <tr>
    <td>14</td>
    <td>remarks</td>
    <td>String</td>
    <td>100</td>
    <td>M</td>
    <td>Remarks for transaction</td>
  </tr>
  <tr>
    <td>15</td>
    <td>signature</td>
    <td>String</td>
    <td></td>
    <td>M</td>
    <td>SHA256 signature token</td>
  </tr>
  <tr>
    <td>16</td>
    <td>channel</td>
    <td>String</td>
    <td>10</td>
    <td>M</td>
    <td>Issuer channel e.g. CIPS|MB|WAL</td>
  </tr>
  <tr>
    <td>17</td>
    <td>payerMobile</td>
    <td>String</td>
    <td>10</td>
    <td>M</td>
    <td>Payer Mobile Number</td>
  </tr>
  <tr>
    <td>18</td>
    <td>sessionNo</td>
    <td>Numeric</td>
    <td></td>
    <td>M</td>
    <td>Unique session id</td>
  </tr>
  <tr>
    <td>19</td>
    <td>extraPaymentParams</td>
    <td>Map(K,V)</td>
    <td></td>
    <td>M</td>
    <td>Extra parameters to identify transaction. Params can be in the form of key-value pair</td>
  </tr>
</table>

***Sample Request***
```json
  {
      "txnDate": "2023-12-12 10:05:11",
      "txnAmount": 100.0,
      "chargeAmt": 2.00,
      "merchantId": "2301NERGYKC",
      "storeLabel": "Bhaisepati",
      "terminalId": "Terminal1",
      "merchantName": "Dish Home Nepal",
      "rpstxnId": 12422440,
      "validationTraceId":" MIMJGNIONIBGUBUBDSN"
      "paymentRef": "NCHfcb3f2075403a88f4d4b81d2b4424000",
      "merchantBillNo": "4d4b81d2b4424000",
      "status": "SUCCESS",
      "statusDesc": "TRANSACTION SUCESSFULL",
      "remarks": "Dish Home Payment 1 month",
      "signature":"
      PcK7JFPfEUvtGouuShjQgten7HQsAxxGVZJ+38ORzEOCEMV3Dlt7V0M7g+HUBfn0+oHZqAsb2pzTQHWEQ
      PLmPOGR4lVEoy581vYmN5PfMLSQqb/UxixT1O4X6ZFeV9sVivP3Y1gVfILPIzRm2CfML4BTHhDlpNvoOQ84
      0nvNn2E=",
      "channel": "CIPS",
      "payerMobile": "9800000000",
      "sessionNo": "1234",
      "extraPaymentParams":
                  {
                  "customerName": "Test User",
                  "address": "Gulumi ",
                  "txnCrncy": "NPR"
                  }
  }
```

***Sample Response***
```json
  {
    "txnDate": "2023-12-12 10:05:11",
    "status": "SUCCESS",
    "message": "TRANSACTION SUCESSFULL",
    "merchantBillNo": "4d4b81d2b4424000",
    "paymentRef": "NCHfcb3f2075403a88f4d4b81d2b4424000",
    "signature":"Ghxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=”
  }
```

















