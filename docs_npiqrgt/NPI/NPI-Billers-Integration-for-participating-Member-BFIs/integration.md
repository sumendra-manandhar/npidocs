---
sidebar_position: 4
---

# 4. Integration

## 4.1.Integration Overview

NPI Billers' UI offers three landing pages: All Billers, Biller Group, and Biller Form. The choice of 
which landing page to use depends on the specific requirements of the third-party application.

**base_url: https://dev.connectips.com/billers**

## 4.2. Landing pages

### 4.2.1. All billers: 

This landing page displays all the biller icons enabled for the third-party.
URL: {base_url}/billers?landing_page=”biller-all”
### 4.2.2. Biller group: 

This landing page displays all the biller icons enabled for the group.
URL: {base_url}/billers?landing_page=”biller_group”&biller_group=Internet
### 4.2.3. Biller form: 

This landing page displays biller form.
URL: {base_url}/billers? landing_page=”biller_form”&biller_code=24


## 4.3. Query parameters

<table border="1">
        <tr>
            <th>Parameter</th>
            <th>Mandatory</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>participant_code</td>
            <td>Yes</td>
            <td></td>
            <td>The third-party participant code.</td>
        </tr>
        <tr>
            <td>landing_page</td>
            <td>Yes</td>
            <td></td>
            <td>Specifies the desired landing page. Available options: 'biller-all', 'biller_group', and 'biller_form'.</td>
        </tr>
        <tr>
            <td>biller_group</td>
            <td>Required if landing_page='biller_group'</td>
            <td></td>
            <td>Sets the biller group for the selected landing page.</td>
        </tr>
        <tr>
            <td>biller_code</td>
            <td>Required if landing_page='biller_form'</td>
            <td></td>
            <td>Sets the respective biller code to display its form.</td>
        </tr>
        <tr>
            <td>token</td>
            <td>Yes</td>
            <td></td>
            <td> See token generation</td>
        </tr>
        <tr>
            <td>channel</td>
            <td>Yes</td>
            <td></td>
            <td>Defines the app platform: use 'mob' for mobile apps and 'web' for web apps.</td>
        </tr>
        <tr>
            <td>lang</td>
            <td>No</td>
            <td>en</td>
            <td>Language for NPI Billers. Currently supports English ('en') and Nepali ('ne').</td>
        </tr>
        <tr>
            <td>display_mode</td>
            <td>No</td>
            <td>light</td>
            <td>Sets the display mode, either 'light' or 'dark'.</td>
        </tr>
        <tr>
            <td>os</td>
            <td>Required if channel='mob'</td>
            <td></td>
            <td>Specifies the mobile OS: use 'android' for Android and 'ios' for iOS.</td>
        </tr>
        <tr>
            <td>session_id</td>
            <td>Yes</td>
            <td></td>
            <td>Format: &lt;participant_code&gt;_&lt;uuid&gt;. A unique id used to identify the NPI Billers session.</td>
        </tr>
        <tr>
            <td>display_error</td>
            <td>No</td>
            <td>toast</td>
            <td>Defines the error message display UI. Options: 'toast', 'embedded', or 'host_app'.</td>
        </tr>
        <tr>
            <td>web_type</td>
            <td>Optional, set if channel='web'</td>
            <td>iframe</td>
            <td>Defines the integration type for web apps. Set “iframe” for iframe integration.</td>
        </tr>
    </table>

## 4.4.Token generation


JWT Payload should be valid JSON.

```json
{
 "participant_code": ”himalayan”,
 “session_id”: “himalayan_4e20a191-753d-4efa-90bf-f4f538d8a4ba”,
 “channel”: “web”
}
```

“participant_code”, “session_id”, and “channel” must match with corresponding query param 
“participant_code”, “session_id”, and “channel”. The JWT must be both signed (JWS) then encrypted
(JWE). Please follow the steps mentioned  [here](./security)


## 4.5.Error Codes

<table border="1">
        <tr>
            <th>Error Code</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>600</td>
            <td>Session expired.</td>
        </tr>
        <tr>
            <td>601</td>
            <td>Session already created. Please create new session_id.</td>
        </tr>
        <tr>
            <td>700</td>
            <td>Missing query param ‘token’.</td>
        </tr>
        <tr>
            <td>701</td>
            <td>Missing query param ‘channel’.</td>
        </tr>
        <tr>
            <td>704</td>
            <td>Missing query param ‘os’.</td>
        </tr>
        <tr>
            <td>705</td>
            <td>Missing query param ‘session_id’.</td>
        </tr>
        <tr>
            <td>706</td>
            <td>Missing query param ‘participant_code’.</td>
        </tr>
        <tr>
            <td>707</td>
            <td>Missing query param ‘landing_page’.</td>
        </tr>
        <tr>
            <td>708</td>
            <td>Missing query param ‘biller_group’.</td>
        </tr>
        <tr>
            <td>709</td>
            <td>Missing query param ‘biller_code’.</td>
        </tr>
        <tr>
            <td>800</td>
            <td>‘token’ validation failed.</td>
        </tr>
        <tr>
            <td>801</td>
            <td>Invalid query param ‘channel’.</td>
        </tr>
        <tr>
            <td>802</td>
            <td>Invalid query param ‘language’.</td>
        </tr>
        <tr>
            <td>803</td>
            <td>Invalid query param ‘display_mode’.</td>
        </tr>
        <tr>
            <td>804</td>
            <td>Invalid query param ‘os’.</td>
        </tr>
        <tr>
            <td>805</td>
            <td>Invalid “session_id”. “session_id” must be in &lt;participant_code&gt;_&lt;uuid&gt; format.</td>
        </tr>
        <tr>
            <td>806</td>
            <td>‘participant_code’ validation failed.</td>
        </tr>
        <tr>
            <td>807</td>
            <td>Invalid query param ‘landing_page’.</td>
        </tr>
        <tr>
            <td>808</td>
            <td>‘biller_group’ validation failed.</td>
        </tr>
        <tr>
            <td>809</td>
            <td>‘biller_code’ validation failed.</td>
        </tr>
        <tr>
            <td>900</td>
            <td>“participant_code” mismatch between query param “participant_code” and “token” payload.</td>
        </tr>
        <tr>
            <td>901</td>
            <td>“session_id” mismatch between query param “session_id” and “token” payload.</td>
        </tr>
        <tr>
            <td>902</td>
            <td>“channel” mismatch between query param “channel” and “token” payload.</td>
        </tr>
        <tr>
            <td>100</td>
            <td>Exception occurred on our end. Please contact us.</td>
        </tr>
    </table>



## 4.6. NPI Billers Messages
NPI Billers interacts with the host application by sending messages at various stages of the bill 
payment process. These messages include information such as errors, form payloads, and other 
relevant updates to facilitate smooth communication.
4.6.1. NPI Billers Message Format
All messages are sent in following format.
```json

{
 "session_id": "himalayan_4e20a191-753d-4efa-90bf-f4f538d8a4ba",
 "type": "submit_form_payload",
 "data": “xxxxx”
}
```
session_id: String
session_id value sent by the host application during the NPI Billers initialization.
type: String

Message type.[See message types](./integration#46-npi-billers-messages)

data: String | Object | null

Actual payload for the message. Data type can be different as type.


### 4.6.2. NPI Billers Message Types 


<table border="1">
        <tr>
            <th>Message Type</th>
            <th>Data</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>submit_form_payload</td>
            <td>data field contains npiObject</td>
            <td>
                This message is triggered once the user confirms the transaction. 
                The host app should then proceed to authorize the transaction using 
                either a transaction PIN or biometric verification. Upon successful 
                authorization, the app backend should invoke the NPI to post the payment.
            </td>
        </tr>
        <tr>
            <td>session_expire</td>
            <td>null</td>
            <td>
                This message is triggered when NPI Billers session is expired. 
                The host app should handle reinitialization of NPI Billers by 
                creating and passing a new session_id. It depends on the third-party requirements.
            </td>
        </tr>
        <tr>
            <td>error</td>
            <td>
                
                type:error
                message: “”
                
            </td>
            <td>
                This message is triggered when NPI Billers throws an error and display_error=”host_app”. 
                The host app should display the error received.
            </td>
        </tr>
    </table>


### 4.6.3. NPI object (npiObject)
npiObject is signed (JWS) then encrypted (JWE). Please follow the steps mentioned 
 [here](./security) for decryption and signature verification.
```json

{
 "cipsBatchDetail": {
 "id": 2576,
 "batchId": "bilbatch-2576",
 "recDate": null,
 "batchAmount": 100,
 "batchCount": 1,
 "batchChargeAmount": null,
 "batchCrncy": "NPR",
 "categoryPurpose": "ECPG",
 "debtorAgent": "",
 "debtorBranch": "",
 "debtorName": "",
 "debtorAccount": "",
 "debtorAddress": null,
 "debtorMobile": null,
 "debtorEmail": null,
 "channelId": null,
 "rcreTime": null,
 "rcreUserId": null,
 "corporateId": null,
 "initBranchId": null,
 "debitAcid": "",
 "batchFreeText1": "",
 "batchFreeText2": "",
 "batchFreeText3": "",
 "batchFreeText4": ""
 },
 "cipsTransactionDetail": {
 "id": 92,
 "batchId": 0,
 "recDate": "2025-01-09T06:40:17.230+00:00",
 "amount": 100,
 "chargeAmount": 0,
 "chargeLiability": "CG",
 "appTxnId": "12729664",
 "merchantId": 120,
 "appId": "NIMB-NTC-APP-1",
 "appGroup": null,
 "instructionId": "RT-2571",
 "endToEndId": "9843578426",
 "creditorAddress": null,
 "creditorMobile": null,
 "creditorEmail": null,
 "creditorIdType": "",
 "creditorIdValue": "",
 "refId": "9843578426",
 "remarks": "Nepal Telecom - PrePaid",
 "particulars": "",
 "addenda1": null,
 "addenda2": null,
 "addenda3": "",
 "addenda4": "",
 "freeCode1": "",
 "freeCode2": "",
 "freeText1": "",
 "freeText2": "",
 "freeText3": "",
 "freeText4": "",
 "freeText5": "",
 "freeText6": "",
 "freeText7": "",
 "freeNum1": null,
 "freeNum2": null,
 "freeNum3": null,
 "freeNum4": null,
 "txnResponse": null,
 "beneficiaryId": "",
 "beneficiaryName": "",
 "mode": 1,
 "favTxnFlg": null,
 "rcreUserId": "BILLER@999",
 "rcreTime": "2025-01-09",
 "orignBranchId": null,
 "creditAcid": null,
 "token": null,
 "accountValidationMsg": null,
 "freeString": null,
 "debitBankLogo": null,
 "creditBankLogo": null,
 "system": null,
 "responseResult": null,
 "data": null,
 "status": null,
 "billValidatonTraceId": null
 },
 "fieldLabelMapping": [
 {
 "fieldName": "amount",
 "fieldLabel": "Transaction Amount",
 "mapField": "amount"
 },
 {
 "fieldName": "refId",
 "fieldLabel": "Mobile Number",
 "mapField": "refId"
 }
 ]
}
```

## 4.7.Payment confirm posting

After successful user authorization for the transaction, the third-party app backend posts the 
payment using the NPI /api/npibiller/confirmbillerpay.do API. The third-party app backend will 
receive the partial request payload which is NPI Object from NPI Billers. The third-party app 
backend creates new request payload by combining NPI Object, debit information, and token.

**Base URL:** Please reach out to NCHL team for the NPI API base URL

**Post URL:** /api/npibiller/confirmbillerpay.do


### 4.7.1. Payment confirm Request
Create request payload by combining NPI Object, debit information, and token.

```json
{
 "cipsBatchDetail": {},
 "cipsTransactionDetail": {},
 "token":"xxxxxxxxxxxxxxxxxx”
}
```
1) Copy cipsTransactionDetail from NPI Object

2) Copy cipsBatchDetail from NPI Object and set debit information

3) [ Generate token](./integration#472-payment-confirm-token-generation)

4) Create final object as above format.


**Batch Details**

<table border="1">
        <tr>
            <th>#</th>
            <th>Field Name</th>
            <th>Data Type</th>
            <th>Length</th>
            <th>Presence</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>1</td>
            <td>batchId</td>
            <td>String</td>
            <td>20</td>
            <td>Y</td>
            <td>Unique Identification for the batch for later reconciliation.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>batchAmount</td>
            <td>BigDecimal</td>
            <td>14,2</td>
            <td>Y</td>
            <td>The total sum of amount of all the transactions in the batch.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>batchCount</td>
            <td>Integer</td>
            <td>-</td>
            <td>Y</td>
            <td>Total transactions in the batch.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>batchCrncy</td>
            <td>String</td>
            <td>3</td>
            <td>Y</td>
            <td>Currency of the transaction. E.g. NPR</td>
        </tr>
        <tr>
            <td>6</td>
            <td>categoryPurpose</td>
            <td>String</td>
            <td>4</td>
            <td>Y</td>
            <td>Purpose of the transaction. E.g. RTPS, ECPG</td>
        </tr>
        <tr>
            <td>7</td>
            <td>debtorAgent</td>
            <td>String</td>
            <td>4</td>
            <td>Y</td>
            <td>Financial institution where the transactions initiating party account is held.</td>
        </tr>
        <tr>
            <td>8</td>
            <td>debtorBranch</td>
            <td>String</td>
            <td>4</td>
            <td>Y</td>
            <td>Financial institution branch where the transactions initiating party account is held.</td>
        </tr>
        <tr>
            <td>9</td>
            <td>debtorName</td>
            <td>String</td>
            <td>140</td>
            <td>Y</td>
            <td>Transaction initiation party account name.</td>
        </tr>
        <tr>
            <td>10</td>
            <td>debtorAccount</td>
            <td>String</td>
            <td>20</td>
            <td>Y</td>
            <td>Transaction initiation party account number.</td>
        </tr>
        <tr>
            <td>11</td>
            <td>debtorIdType</td>
            <td>String</td>
            <td>4</td>
            <td>O</td>
            <td>Transaction initiation party private ID type (e.g., Citizenship, PAN No., Passport, etc.).</td>
        </tr>
        <tr>
            <td>12</td>
            <td>debtorIdValue</td>
            <td>String</td>
            <td>20</td>
            <td>O</td>
            <td>Transactions initiation party identification number (e.g., Passport number, PAN No., etc.).</td>
        </tr>
        <tr>
            <td>13</td>
            <td>debtorAddress</td>
            <td>String</td>
            <td>490</td>
            <td>O</td>
            <td>Transactions initiation party postal address.</td>
        </tr>
        <tr>
            <td>14</td>
            <td>debtorPhone</td>
            <td>String</td>
            <td>20</td>
            <td>O</td>
            <td>Transactions initiation party debtor phone number.</td>
        </tr>
        <tr>
            <td>15</td>
            <td>debtorMobile</td>
            <td>String</td>
            <td>20</td>
            <td>O</td>
            <td>Transactions initiation party mobile number.</td>
        </tr>
        <tr>
            <td>16</td>
            <td>debtorEmail</td>
            <td>String</td>
            <td>50</td>
            <td>O</td>
            <td>Transactions initiation party email address.</td>
        </tr>
    </table>

**Sample Request Parameters:**

```json
{

 "cipsBatchDetail": {
 "id": 2576,
 "batchId": "bilbatch-2576",
 "recDate": null,
 "batchAmount": 100,
 "batchCount": 1,
 "batchChargeAmount": null,
 "batchCrncy": "NPR",
 "categoryPurpose": "ECPG",
 "debtorAgent": "4501",
 "debtorBranch": "1",
 "debtorName": "anil paudel",
 "debtorAccount": "0060119198000014",
 "debtorAddress": null,
 "debtorMobile": null,
 "debtorEmail": null,
 "channelId": null,
 "rcreTime": null,
 "rcreUserId": null,
 "corporateId": null,
 "initBranchId": null,
 "debitAcid": "",
 "batchFreeText1": "",
 "batchFreeText2": "",
 "batchFreeText3": "",
 "batchFreeText4": ""
 },
 "cipsTransactionDetail": {
 "id": 92,
 "batchId": 0,
 "recDate": "2025-01-09T06:40:17.230+00:00",
 "amount": 100,
 "chargeAmount": 0,
 "chargeLiability": "CG",
 "appTxnId": "12729664",
 "merchantId": 120,
 "appId": "NIMB-NTC-APP-1",
 "appGroup": null,
 "instructionId": "RT-2571",
 "endToEndId": "9843578426",
 "creditorAddress": null,
 "creditorMobile": null,
 "creditorEmail": null,
 "creditorIdType": "",
 "creditorIdValue": "",
 "refId": "9843578426",
 "remarks": "Nepal Telecom - PrePaid",
 "particulars": "",
 "addenda1": null,
 "addenda2": null,
 "addenda3": "",
 "addenda4": "",
 "freeCode1": "",
 "freeCode2": "",
 "freeText1": "",
 "freeText2": "",
 "freeText3": "",
 "freeText4": "",
 "freeText5": "",
 "freeText6": "",
 "freeText7": "",
 "freeNum1": null,
 "freeNum2": null,
 "freeNum3": null,
 "freeNum4": null,
 "txnResponse": null,
 "beneficiaryId": "",
 "beneficiaryName": "",
 "mode": 1,
 "favTxnFlg": null,
 "rcreUserId": "BILLER@999",
 "rcreTime": "2025-01-09",
 "orignBranchId": null,
 "creditAcid": null,
 "token": null,
 "accountValidationMsg": null,
 "freeString": null,
 "debitBankLogo": null,
 "creditBankLogo": null,
 "system": null,
 "responseResult": null,
 "data": null,
 "status": null,
 "billValidatonTraceId": null
 },
 "token": "xxxxxxxxxxxxx"
}

```
### 4.7.2. Payment confirm token generation

The token string is the combination of batch and transactions information and following will be 
the format.

```json
BatchString=<BatchId>+","+<DebtorAgent>+","+<DebtorBranch>+","+<DebtorAccount>+","+<BatchAmount>+","+<Batch Currency (e.g. NPR)>

For each transaction
Transaction String=<Id>+","+<Instruction Id>+","+<End to EndId>+","+<App Id>+","+<Ref Id>+","+<Amount>
Token String=Batch String + "," + Transaction String+","+<userId>
```


1. Sign the token string using the digital certificate private key(pfx file/keystore).The digital signature algorithm will be the SHA256withRSA. Please note that private key used here is for NPI which is different than NPI Billers.

2. Convert the signed token above in step 2 to base64 encoding.

3. Pass this signature string to the “token” field of the request message.

### 4.7.3. Payment confirm Response


**Sample Response Parameters:**

```json

{
 "responseResult":{
 "responseCode":"000",
 "responseDescription":"SUCCESS",
 "fieldErrors":[
 
 ]
 },
 "cipsBatchDetail":{
 "id":712532255,
 "batchId":"T13-12818780108",
 "recDate":"2021-02-04T16:47:53.967+0000",
 "channelId":"TECHM",
 "ipsBatchId":null,
 "fileName":null,
 "batchAmount":1000,
 "batchCount":1,
 "batchChargeAmount":2.00,
 "batchCrncy":"NPR",
 "categoryPurpose":"ECPG",
 "debtorAgent":"2601",
 "debtorBranch":"1",
 "debtorName":"PUSPA RAJ UPADHAYA",
 "debtorAccount":"1234567812",
 "debtorIdType":null,
 "debtorIdValue":null,
 "debtorAddress":null,
 "debtorPhone":null,
 "debtorMobile":null,
 "debtorEmail":null,
 "rcreUserId":"KHALTI@999",
 "rcreTime":"2021-02-04T16:47:53.967+0000",
 "debitStatus":"000",
 "debitReasonCode":null,
 "isoTxnId":435656,
 "sessionSrlNo":null,
 "settlementDate":null,
 "corporateId":3,
 "initBranchId":null,
 "debitReasonDesc":null,
 "txnResponse":null
 },
 "cipsTransactionDetail":{
 "id":12816806,
 "recDate":"2021-02-04T16:47:53.967+0000",
 "instructionId":"T13-12818780108-1",
 "endToEndId":"188759/314043524",
 "amount":1000,
 "chargeAmount":2.00,
 "chargeLiability":"CG",
 "purpose":null,
 "creditorAgent":"0201",
 "creditorBranch":"100",
 "creditorName":"REVENUE FCGO TSA",
 "creditorAccount":"1234567868",
 "creditorIdType":null,
 "creditorIdValue":null,
 "creditorAddress":null,
 "creditorPhone":null,
 "creditorMobile":null,
 "creditorEmail":null,
 "addenda1":null,
 "addenda2":null,
 "addenda3":null,
 "addenda4":null,
 "freeCode1":"7778",
 "freeCode2":null,
 "freeText1":null,
 "freeText2":null,
 "rcreUserId":"KHALTI@999",
 "rcreTime":"2021-02-04T16:47:53.967+0000",
 "ipsBatchId":null,
 "creditStatus":"000",
 "reasonCode":null,
 "refId":"187145/314043524",
 "remarks":"Used for other purpose",
 "particulars":"DIPAK SHRESTHA",
 "merchantId":7,
 "appId":"MER-7-APP-4",
 "appTxnId":"2077-4155863",
 "reversalStatus":null,
 "isoTxnId":435656,
 "batchId":712532255,
 "orignBranchId":"100",
 "reasonDesc":null,
 "txnResponse":null
 }
}

```
**Note:** For the successful payment, please consider the debit (000) and credit status 
(000, DEFER,999) in above response message and handle the response code as per 
NPI specification document.
