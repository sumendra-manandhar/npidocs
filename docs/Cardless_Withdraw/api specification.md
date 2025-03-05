---
sidebar_position: 3
---

# 3. API Specification

## 3.1 Authentication and Authorization
OAuth 2.0 API authentication mechanism has been implemented for authentication and authorization process in NPI. The client needs to provide client specific credentials in the authorization header and user credentials in the body with grant type as password for token generation on first login or during refresh token expiration.  
On successful authentication, system will provide access token and refresh token pair. Access tokens are used for accessing the resources and refresh tokens are used for obtaining and renewal of access tokens. Validity of access token is 300 seconds and validity of refresh token is 12 hours (which may vary as per NCHL Security Policy). Access tokens could be obtained by using non-expired refresh tokens in the body with grant type as refresh token. 

Method to generate & use access and refresh token
1.	Use the provided basic authentication credentials along with username/password and grant type as password to obtain a refresh token. Refresh token has validity of 12 hours for now, so store the refresh token for future access token requests. Do not use the access token obtained during this initial request. 

2.	Use the stored refresh token obtained from step 1 to generate new access token keeping grant type as refresh token. Access tokens are valid for 300 seconds. Use the obtained access token in the authorization header: Bearer {access_token} of all API resources requests within this period. On expiry of access token re-request using the stored refresh token. 

3.	On expiry of refresh token repeat the process from step 1. 


<table>
<tr>
<th>Method</th>
<th>URL</th>
</tr>
<tr>
<td>POST</td>
<td>(base URL)/oauth/token</td>
</tr>
</table>


## 3.2 Token Generation Process 

1.	Generate token string as per the instruction provided in API specification.

2.	Sign the message token from step 1 using the digital certificate private key (pfx file/KeyStore). The digital signature algorithm will be the SHA256withRSA.

3.	Convert the signed token above in step 2 to base64 encoding.

4.	Pass this signature string to the “token” field of the request message.

## 3.3 Create Withdraw Request

This API is used to initiate OTP request based on the parameters provided. Third party user must have user for authentication from NPI. 


<table>
<tr>
<th>Method</th>
<th>URL</th>
<th>Authorization</th>
</tr>
<tr>
<td>POST</td>
<td>(base URL)/api/v1/cardless/create-request</td>
<td>Bearer(access_token)</td>
</tr>
</table>

**Request Parameter**


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
      <td>amount</td>
      <td>string</td>
      <td></td>
      <td>Transaction amount should be in rupees and multiples of 1000</td>
      <td>M</td>
    </tr>
    <tr>
      <td>2</td>
      <td>mobileNumber</td>
      <td>string</td>
      <td>10</td>
      <td>Mobile number of users</td>
      <td>M</td>
    </tr>
    <tr>
      <td>3</td>
      <td>accountName</td>
      <td>string</td>
      <td>50</td>
      <td>Customer A/C name. In case of wallet, this should be wallet pool A/C name.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>4</td>
      <td>accountNumber</td>
      <td>string</td>
      <td>20</td>
      <td>Customer A/C number. In case of wallet, this should be wallet pool A/C number</td>
      <td>M</td>
    </tr>
    <tr>
      <td>5</td>
      <td>branchId</td>
      <td>string</td>
      <td>3</td>
      <td>Customer A/C branch. In case of wallet, this should be wallet pool A/C branch.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>6</td>
      <td>transactionUniqueId</td>
      <td>string</td>
      <td>36</td>
      <td>Transaction ID which is used to reconcile between third party and NCHL. It must be unique for each request.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>7</td>
      <td>currencyCode</td>
      <td>string</td>
      <td>3</td>
      <td>Currency of transaction. Example: NPR</td>
      <td>M</td>
    </tr>
    <tr>
      <td>8</td>
      <td>remarks</td>
      <td>string</td>
      <td>36</td>
      <td>Remarks for the transaction.</td>
      <td>M</td>
    </tr>
  </tbody>
</table>


Token String: Mobile Number+,”+transactionUniqueId+”,+amount+, NPI userId


Sample Request Payload:
```json
{
    "amount": 5000.0,
    "mobileNumber": "98XXXXXXXX",
    "accountName": "Ankit Neupane",
    "accountNumber": "00100XXXXXXX",
    "branchId": "1",
    "bankId": "1000",
    "transactionUniqueId": "b39a8e6f-d022-49e2-b21e-452178ad2746",
    "remarks": "Towards the mountains",
    "token":"dUD1Fmxb2l9NE+aTgCLuomlOFm0bpkmlE2XwpTDIF2r1tG1xZU5FfNj9SRJpQEQm5V+u7SF9aTXa0AsINnXYwcJiNT/Fd5K818SIsQ/ELXeAskbl3MZyV6GuY0Uh7n3RjIoZhJ3mdz0lbr9PZohSB8EQFAccj/yeZgSLGRAJgeg="
}
```


Sample Success Response:
```json
{
    "responseCode": "000",
    "responseMessage": "Withdrawal request process successfully. You will be notified with SMS with more detail."
}
```


## 3.4 Cash Withdraw Request
This request initiates the cash withdrawal transactions processed through the acquiring switch to retail payment switch.
<table>
<tr>
<th>Method</th>
<th>URL</th>
<th>Authorization</th>
</tr>
<tr>
<td>POST</td>
<td>(base URL)/cardless/withdraw/transaction</td>
<td>Bearer (access_token)</td>
</tr>
</table>

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
      <td>verificationCode</td>
      <td>String</td>
      <td></td>
      <td>OTP received by the customer.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>2</td>
      <td>mobileNumber</td>
      <td>String</td>
      <td>10</td>
      <td>Mobile number of customers</td>
      <td>M</td>
    </tr>
    <tr>
      <td>3</td>
      <td>amount</td>
      <td>String</td>
      <td></td>
      <td>Amount entered during withdrawal request.</td>
      <td>M</td>
    </tr>
    <tr>
      <td>4</td>
      <td>bankCode</td>
      <td>String</td>
      <td>4</td>
      <td>ATM Acquiring Bank Code</td>
      <td>M</td>
    </tr>
    <tr>
      <td>5</td>
      <td>traceNumber</td>
      <td>String</td>
      <td></td>
      <td>Trace Number</td>
      <td>M</td>
    </tr>
    <tr>
      <td>6</td>
      <td>referenceNumber</td>
      <td>String</td>
      <td></td>
      <td>ATM reference number</td>
      <td>M</td>
    </tr>
    <tr>
      <td>7</td>
      <td>terminalId</td>
      <td>String</td>
      <td></td>
      <td>ATM Terminal Id</td>
      <td>M</td>
    </tr>
  </tbody>
</table>



**Sample Request Payload:**

```json
{
    "verificationCode": "999277",
    "mobileNumber": "9813XXXXXX",
    "amount": 500000,
    "bankCode": "PCBLNPKA",
    "traceNumber": "TRACE015",
    "referenceNumber": "CLW-058834591",
    "terminalId": "PRIME2101"
}
```
**Sample Success Response:**

```json
{
 "status": "true", 
 "message": "Cash withdrawal Successful", 
 "code": "000", 
 "developerMessage": "null", 
 "link": "null", 
 "data": "{
	"accountNumber": "0010XXXXXXXX",
	"mobileNumber": "9813XXXXXX",
	"bankCode": "PCBLNPKA",
	"amount": 5000,
	"bookingDate": "2024-05-09 11:27:16.676",
	"referenceId": "CLW-058834591",
	"terminalId": "PRIME2101",
	"traceNumber": "TRACE015"
	}", 
}

```

## 3.5 Cardless Withdraw Report

<table>
<tr>
<th>Method</th>
<th>URL</th>
<th>Authorization</th>
</tr>
<tr>
<td>POST</td>
<td>(base URL)/oauth/token</td>
<td>Bearer(access_token)</td>
</tr>
</table>


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
      <td>transactionUniqueId</td>
      <td>String</td>
      <td>36</td>
      <td>Transaction Unique Id of that transaction.</td>
      <td>M</td>
    </tr>
  </tbody>
</table>


**Sample Request Payload:**
```json

{
    "transactionUniqueId": "b39a8e6f-d022-49e2-b21e-452178ad2746"
}
```

**Sample Success Response**
```json 
{
  "responseCode": "000",
  "responseData": [
    {
      "accountNumber": "001XXXXXXXXXXX",
      "branchId": "1",
      "bankId": "2501",
      "accountName": "Ankit Neupane",
      "amount": 5000,
      "mobileNumber": "9813XXXXXX",
      "expiryDate": "2024-05-09T06:58:25.029+00:00",
      "customerIdentifier": "SABITA@999",
      "status": "ACTIVE",
      "txnId": "12809565",
      "paymentStatus": "PAID",
      "instrument": "MOBILE_BANKING",
      "transactionUniqueId": "b39a8e6f-d022-49e2-b21e-452178ad2746",
      "remarks": "Towards the mountains"
    }
  ]
}
```
## 3.6 Cardless Withdraw Notification


To notify about the transaction status (success or failure) for reconciliation purposes. Status of transaction will be pushed to notification URL. Each request will be formatted in JSON and signed using private key. The receiver will verify the signature using public key provided by NCHL ensuring the integrity and authenticity of the request, preventing tampering during transmission. Notifications will be dispatched upon transaction processing, and a response is expected to confirm whether the notification was successfully delivered.

The notification API provided by the receiver should be secured using basic authentication. The credentials must be added in the header of each API call. Credentials should be combined into a single string in below format, then encoded using Base64. 
   


  <table>
<tr>
<th>Method </th>
<th>URL</th>
<th>Authorization</th>
</tr>

<tr>
<td>POST</td>
<td>(base URL)/cardless/thirdparty/notification</td>
<td>Basic Base64(username:password)</td>
</tr>


  </table>

**Request Details:**

The request body will be a JSON object containing the transaction details:



<table border="1">
  <thead>
    <tr>
      <th>#</th>
      <th>Field Name</th>
      <th>Length</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>transactionUniqueId</td>
      <td>36</td>
      <td>Transaction ID which is used to reconcile between third party and NCHL. It must be unique for each request.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>debitStatus</td>
      <td>4</td>
      <td>Status of the debit operation.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>debitDescription</td>
      <td>36</td>
      <td>Description of the debit status.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>creditStatus</td>
      <td>4</td>
      <td>Status of the credit operation.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>creditDescription</td>
      <td>36</td>
      <td>Description of the credit status.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>rpsTransactionId</td>
      <td>10</td>
      <td>Unique identifier of transaction on NPI (RPS).</td>
    </tr>
    <tr>
      <td>7</td>
      <td>mobileNumber</td>
      <td>10</td>
      <td>Mobile number associated with the transaction.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>remarks</td>
      <td>36</td>
      <td>User Remarks.</td>
    </tr>
    <tr>
      <td>9</td>
      <td>token</td>
      <td></td>
      <td>Signature token.</td>
    </tr>
  </tbody>
</table>





**Sample JSON Request**
```json

{
    "transactionUniqueId": "card30",
    "debitStatus": "000",
    "debitDescription": "SUCCESS",
    "creditStatus": "000",
    "creditDescription": "SUCCESS",
    "rpsTransactionId": 13185492,
    "mobileNumber": "*****08459",
    "remarks": " Towards the mountains ",
    "paymentStatus": "PAID",
}
```

The JSON payload must be signed using private key. Upon receiving the notification, the receiver will use verify the public key provided by NCHL to ensure authenticity and integrity. After processing the notification, the receiver will send a response back to the sender to confirm whether the notification was successfully delivered. Response format can be any, but following in response is mandatory, for proper verification of withdraw Notification. 


<table border="1">
  <thead>
    <tr>
      <th>#</th>
      <th>Field Name</th>
      <th>Data Type</th>
      <th>Example</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>status</td>
      <td>String</td>
      <td>SUCCESS</td>
      <td>Notification Response status: <code>SUCCESS</code> or <code>FAILED</code> or <code>TIMEOUT</code></td>
    </tr>
    <tr>
      <td>2</td>
      <td>message</td>
      <td>String</td>
      <td>Notification send successfully</td>
      <td>A message providing additional context or remarks about the response.</td>
    </tr>
  </tbody>
</table>





