---
sidebar_position: 3
---

 # 3.Account Validation 
 Account validation is used for validating creditor/beneficiary account before initiating the actual financial transaction. Validating creditor account beforehand reduces the transactions rejection ratio. After the account is validated the actual fund transfer APIs are required to be called. It validates the existence of the account, status and account name match details etc. Additionally, the account name validation ensures beneficiary Know Your Customer (KYC) requirement while sending the remittance transactions from different jurisdiction  of  across the globe. This section describes the required information for account validation through NPI. 


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
      <td>(BASE_URL)+/ api/ validatebankaccount</td>
      <td>Bearer (access_token)</td>
      <td>application/json</td>
    </tr>
  </tbody>
</table>


**Request Parameter:**

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
                <td>bankId</td>
                <td>String</td>
                <td>4</td>
                <td>Assigned bank id.</td>
                <td>Y</td>
            </tr>
            <tr>
                <td>2</td>
                <td>accountId</td>
                <td>String</td>
                <td>20</td>
                <td>Bank account number.</td>
                <td>Y</td>
            </tr>
            <tr>
                <td>3</td>
                <td>accountName</td>
                <td>String</td>
                <td>140</td>
                <td>Bank Account name.</td>
                <td>Y</td>
            </tr>
        </tbody>
    </table>



  **Response Parameter:**

<table border="1" cellpadding="5" cellspacing="0">
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
                <td>bankId</td>
                <td>String</td>
                <td>4</td>
                <td>Customer bank id</td>
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
                <td>accountName</td>
                <td>String</td>
                <td>140</td>
                <td>Bank account name.</td>
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
                <td>responseCode</td>
                <td>String</td>
                <td>4</td>
                <td>Response Code.</td>
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
                <td>matchPercentate</td>
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
                <td>O</td>
            </tr>
            <tr>
                <td>10</td>
                <td>username</td>
                <td>String</td>
                <td>20</td>
                <td>User name.</td>
                <td>O</td>
            </tr>
            <tr>
                <td>11</td>
                <td>password</td>
                <td>String</td>
                <td>20</td>
                <td>User password</td>
                <td>O</td>
            </tr>
        </tbody>
    </table>



**Sample Request:** 
```Json
{
"bankId":"0401",
"accountId" : "08110017501011",
"accountName" : "MANISHA DHAUBANJAR"
}
```
**Sample response1:** 
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
**Sample response2:**
```Json
{
    "bankId": "0401",
    "branchId": "81",
    "accountId": "08110017501011",
    "accountName": null,
    "currency": "NPR",
    "responseCode": "999",
    "responseMessage": "Some difference in beneficiary account name observed. Transaction once sent is irreversible, please reconfirm the beneficiary account number.",
    "matchPercentate": 94,
    "baseUrl": null,
    "userName": null,
    "password": null
}
```

 **Sample response3:**
```json
{
    "bankId": "0401",
    "branchId": "81",
    "accountId": "08110017501011",
    "accountName": null,
    "currency": "NPR",
    "responseCode": "523",
    "responseMessage": "Beneficiary Account Name Mismatched.",
    "matchPercentate": 40,
    "baseUrl": null,
    "userName": null,
    "password": null
}
```
**Explanation on Response Codes:**

<table border="1" cellpadding="5" cellspacing="0">
        <thead>
            <tr>
                <th>#</th>
                <th>Response Code</th>
                <th>Description</th>
                <th>Remarks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>000</td>
                <td>Account successfully validated. Account 100% Match.</td>
                <td>Process the transaction to NPI.</td>
            </tr>
            <tr>
                <td>2</td>
                <td>999</td>
                <td>
                    Some difference in beneficiary account name observed. 
                    Refer the account name percentage (match Percentage) in response.
                </td>
                <td>
                    If the match percentage is &gt; 80, process the transaction to NPI. 
                    Otherwise stop the transaction for further processing.
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Not (000 &amp; 999)</td>
                <td>Issue with the beneficiary account. Please refer the response message.</td>
                <td>Stop the transaction for further processing to NPI.</td>
            </tr>
        </tbody>
    </table>

