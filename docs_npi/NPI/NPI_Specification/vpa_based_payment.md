---
sidebar_position: 8
---

#  8. Virtual Payment Address (VPA) Based Payment 

A Virtual Payment Address (VPA) is a unique identifier that resolves the bank account details and 
facilitate for the payment even without knowing beneficiary account details. It acts as an ID independent 
of your bank account number and other details. The VPA can be then used to transfer funds from one 
account to another directly, without providing bank account details. With the implementation of VPA 
based fund transfer, NPI integrated banks alternative channels, PSPs and connectIPS users can transfer 
the fund to the beneficiary account based on the VPA. For now, registered mobile number in banks KYC, 
connectIPS system and PSPs wallet has been considered as a virtual payment address. 
The VPA address can also be any unique id provided by the other service provided like PSPs, etc. Below 
are the some of the pre-requisites to the NPI members for participating VPA based payment ecosystem. 
1. The participating member has to be integrated with NPI for VPA based payments. 
2. Unique id has to be provided by any service providers like Bank, PSPs and connectIPS system. 
3. In case of connectIPS VPA based payment, user has linked the account in connectIPS system and 
set the primary account to receive the fund. 
4. The mobile number of the connectIPS user must match with the mobile number present at the KYC 
of the transaction receiving bank of the receiver.



## 8.1. Process Flow 

With the current implementation, VPA based payments can be initiated either direct to the bank providing 
the beneficiary registered mobile number in banks KYC or through connectIPS system. 
1. Sender initiates the VPA based payment by providing the sender mobile number registered in banks 
KYC. In case of connectIPS system based VPA payment, recipient should have linked account in 
connectIPS system and set as primary. 
2. The VPA engine resolves the corresponding bank account details based on the mobile number 
provided by the sender. 
3. Sender will get the beneficiary account number and name with masking to make sure the correctness 
of recipient. 
4. After sender confirms that payment, it will follow the normal payment flow where sender account will 
be debited and beneficiary account will be credited. In case of VPA based payment initiated from 
PSPs respective wallet, pool account will be debited and beneficiary account will be credited. 
5. After payment is successful, notification is sent back to the sender.



![Example Image](/img/VPA_Process_flow_Diagram.png)
<p align="center" class="centered-caption"></p>

Figure:Process flow diagram for VPA



## 8.2. Fetch Participant Details
 

 Virtual Payment Address (VPA) based payments can be made to the three types of participants namely 
connectIPS, Bank and Wallet. Th below API endpoint is designed to fetch the list of corresponding 
participants in VPA based payment network. 

**POST URL:** <hostname: port>/vpa/detail 

**Sample Request** 
```json
{ 
"type":"ALL" 
} 

```

 **Network Type** 
 ALL: Fetch the list of all participants in VPA based payment network. 

BANK: Fetch the list of banks available for VPA based payment. 

CIPS: connectIPS system 

PSP: Fetch the list of wallets available for VPA based payment. 


**Sample Response**
```json 
{
   "responseCode":"000",
   "responseStatus":"SUCCESS",
   "responseMessage":"VPA detail list",
   "responseData":[
      {
         "name":"NIC Asia Bank Ltd",
         "code":"2301",
         "type":"BANK"
      },
      {
         "name":"Nabil bank Limited",
         "code":"0401",
         "type":"BANK"
      },
      {
         "name":"connectIPS",
         "code":"CONNECTIPS",
         "type":"CIPS"
      },
      {
         "name":"Khalti",
         "code":"WAL-10-KHA-2",
         "type":"PSP"
      }
   ],
   "responseErrors":[
      
   ]
}

```

Note: For VPA based transaction, code of this sample response to be used as bankId in next API. 

## 8.3. Fetch Account Details

Before making the VPA based transactions, payment detail has to be fetched from respective systems with corresponding unique identifier (VPA).

**POST URL:** <hostname: port>/vpa/account/detail 

**Request Parameters**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter Name</th>
            <th>Data Type</th>
            <th>Constraint</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>originatorUniqueId</td>
            <td>String</td>
            <td>Length (max.20)</td>
            <td>Originator unique identifier</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>bankId</td>
            <td>String</td>
            <td>Length (max. 4)</td>
            <td>Beneficiary participant code in NCHL system</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>vpa</td>
            <td>String</td>
            <td>Length (10)</td>
            <td>Beneficiary identifier (VPA) for fund transfer</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>requestToken</td>
            <td>String</td>
            <td></td>
            <td>Token</td>
            <td>M</td>
        </tr>
    </tbody>
</table>



**Token String=** originatorUniqueId+”,” +vpa+”,” + bankId +”,” + userId 

**Response Parameters**
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter Name</th>
            <th>Data Type</th>
            <th>Constraint</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>requestIdentifier</td>
            <td>String</td>
            <td>Length (30)</td>
            <td>Request id provided by NPI</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>originatorUniqueId</td>
            <td>String</td>
            <td>Length (max.20)</td>
            <td>Originator unique identifier</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>vpa</td>
            <td>String</td>
            <td>Length (10)</td>
            <td>Beneficiary identifier (VPA) for fund transfer</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>bankId</td>
            <td>String</td>
            <td>Length (max. 4)</td>
            <td>Beneficiary participant code in NCHL system</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>acctName</td>
            <td>String</td>
            <td></td>
            <td>Beneficiary account name</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>accountId</td>
            <td>String</td>
            <td>Length (max. 20)</td>
            <td>Beneficiary account number</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>token</td>
            <td>String</td>
            <td></td>
            <td>Token</td>
            <td>M</td>
        </tr>
    </tbody>
</table>



**Token String ** =requestIdentifier+ “,” +originatorUniqueId+ “,” +vpa+ “,” + 
bankId + “,” + acctName + “,” + accountId + “,” + userId 


**Sample Request**
```json

{ 
 "originatorUniqueId": "VPA-116", 
 "vpa": "9855555555", 
 "bankId": "2501", 
 "requestToken":"XB4Vw27hArPaerQuLSZj……………dD38dK1W6Z+9gjPMcD2A4P=" 
}
```

**Success Response** 
```json
{
   "responseCode":"000",
   "responseStatus":"SUCCESS",
   "responseMessage":"Account Detail",
   "responseData":{
      "requestIdentifier":"20221103150555130N0h",
      "originatorUniqueId":"VPA-116",
      "vpa":"9855555555",
      "bankId":"2501",
      "acctName":"ANKI*****PANE",
      "accountId":"0010********0018",
      "token":"CCa1OXSRyvD6cCsAOxLyzjkMtVFovOg**...***l0d3zKok0HOus=",
      "branchId":"1"
   },
   "responseErrors":[
      
   ]
}
```

**Failure Response**

**Case I**

```json

{
   "responseCode":"E007",
   "responseDescription":"TECHNICAL VALIDATION FAILED",
   "fieldErrors":[
      {
         "field":"originatorUniqueId",
         "message":"Duplicate request."
      }
   ]
}
```
**Case II**
```json
{
   "responseCode":"400",
   "responseDescription":"PARAMETER VALIDATION ERROR",
   "fieldErrors":[
      {
         "field":"vpa",
         "message":"VPA should not less than 10-character."
      }
   ]
}
 ```

 ## 8.4. Transaction Posting

 After the payment details are fetched successfully from the respective system, payment has to be 
confirmed with following details. The beneficiary details like account number, name or wallet user id will 
be provided in masked format for user confirmation before submitting the payment. 


**POST URL:** /vpa/paywithvpa

**Request Parameters**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter Name</th>
            <th>Data Type</th>
            <th>Constraint</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>requestIdentifier</td>
            <td>String</td>
            <td>Length(20)</td>
            <td>Request id provided by NPI</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>originatorUniqueId</td>
            <td>String</td>
            <td>Length(max. 30)</td>
            <td>Originator unique identifier</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>vpa</td>
            <td>String</td>
            <td>Length(10)</td>
            <td>Beneficiary identifier (VPA) for fund transfer</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>bankId</td>
            <td>String</td>
            <td>Length(max. 4)</td>
            <td>Bank ID of /vpa/account/detail response</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>debtorAgent</td>
            <td>String</td>
            <td>Length(max. 4)</td>
            <td>Debtor bank code in NCHL system</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>debtorBranch</td>
            <td>String</td>
            <td>Length(max. 4)</td>
            <td>Debtor branch code in NCHL system</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>debtorAccountId</td>
            <td>String</td>
            <td>Length(max. 20)</td>
            <td>Debtor account number</td>
            <td>M</td>
        </tr>
        <tr>
            <td>8</td>
            <td>debtorName</td>
            <td>String</td>
            <td></td>
            <td>Debtor account name</td>
            <td>M</td>
        </tr>
        <tr>
            <td>9</td>
            <td>amount</td>
            <td>BigDecimal</td>
            <td></td>
            <td>Transaction amount</td>
            <td>M</td>
        </tr>
        <tr>
            <td>10</td>
            <td>remark</td>
            <td>String</td>
            <td>Length(max. 30)</td>
            <td>Transaction remarks</td>
            <td>M</td>
        </tr>
        <tr>
            <td>11</td>
            <td>token</td>
            <td>String</td>
            <td>Token</td>
            <td></td>
            <td>M</td>
        </tr>
    </tbody>
</table>



Token String = originatorUniqueId+ “,” +requestIdentifier+ “,” + vpa+ “,” +bankId+ “,” +debtorAgent+”,” + 
debtorBranch+ “,” + debtorAccountId+ “,” + amount+ “,” + userId 

**Response Parameters**

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Parameter Name</th>
            <th>Data Type</th>
            <th>Constraint</th>
            <th>Description</th>
            <th>Presence</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>requestIdentifier</td>
            <td>String</td>
            <td>Length(20)</td>
            <td>Request id provided by NPI</td>
            <td>M</td>
        </tr>
        <tr>
            <td>2</td>
            <td>originatorUniqueId</td>
            <td>String</td>
            <td>Length(max. 30)</td>
            <td>Originator unique identifier</td>
            <td>M</td>
        </tr>
        <tr>
            <td>3</td>
            <td>vpa</td>
            <td>String</td>
            <td>Length(10)</td>
            <td>Beneficiary identifier (VPA) for fund transfer</td>
            <td>M</td>
        </tr>
        <tr>
            <td>4</td>
            <td>debitStatus</td>
            <td>String</td>
            <td>Length(3)</td>
            <td>Debit status</td>
            <td>M</td>
        </tr>
        <tr>
            <td>5</td>
            <td>creditStatus</td>
            <td>String</td>
            <td>Length(3)</td>
            <td>Credit status</td>
            <td>M</td>
        </tr>
        <tr>
            <td>6</td>
            <td>npiBatchId</td>
            <td>String</td>
            <td></td>
            <td>Corresponding batch id for transaction</td>
            <td>M</td>
        </tr>
        <tr>
            <td>7</td>
            <td>npiTranactionId</td>
            <td>String</td>
            <td></td>
            <td>Corresponding transaction id for transaction</td>
            <td>M</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Token</td>
            <td>String</td>
            <td></td>
            <td>Token</td>
            <td>M</td>
        </tr>
    </tbody>
</table>


Token String=originatorUniqueId+ “,” +requestIdentifier+ “,” + vpa+ “,” + debitStatus+ “,” +npiBatchId+ “,” + 
npiTransactionId+ “,” + userId 

**Sample Request**
```json 
{
   "requestIdentifier":"20221103150555130N0h",
   "originatorUniqueId":"VPA-116",
   "vpa":"9855555555",
   "bankId":"2501",
   "debtorAgent":"0401",
   "debtorBranch":"53",
   "debtorAccountId":"0530039999999999",
   "debtorName":"Raj Shrestha",
   "amount":200,
   "remark":"Test VPA Payment",
   "token":"N2DEQvWpbDsDDtD17ZZ1lMbnHrlnFf5xz29**……**SFKrPOUPxEl6wvpf6GGxxYQ="
}

```

**Success Response** 

```json
{
   "requestIdentifier":"20221103150555130N0h",
   "originatorUniqueId":"VPA-116",
   "vpa":"9855555555",
   "debitStatus":"000",
   "creditStatus":"000",
   "npiBatchId":"712020253",
   "npiTransactionId":"12346404",
   "token":"Aa0BI2HDB6OcfPleNbh5/******……………****** +rXobHMrWWFJYpcQ3NlGfRL/Ag="
}
```
 Note: For the finality of VPA based payment, kindly consider debit status (000) and credit status (000, DEFER,999). 


**Failure Response** 

**Case-I** 

```json
{ 
 "responseCode": "409", 
 "responseDescription": "Duplicate Request.", 
 "billsPaymentDescription": null, 
 "billsPaymentResponseCode": null, 
 "fieldErrors": [] 
}
```
**Case-II**

```json
{
   "responseCode":"400",
   "responseDescription":"PARAMETER VALIDATION ERROR",
   "fieldErrors":[
      {
         "field":"vpa",
         "message":"VPA should not less than 10-character."
      }
   ]
}
```

## 8.5. VPA Transaction Reporting

### 8.5.1. By Date: Transaction reporting allows NPI users to fetch reports within period of 90 days.

**POST URL:** /vpa/transaction/detail


**Request Parameters**
```json
{
 "fromDate": "2023-08-02",
 "toDate": "2023-09-01"
}
```


**Success Response:**

```json
{
   "responseCode":"000",
   "responseStatus":"SUCCESS",
   "responseMessage":"Report Fetched Successfully",
   "responseData":{
      "data":[
         {
            "vpa":"9813979589",
            "txnAmount":5353.28,
            "requestIdentifier":"20230814110116659QEH",
            "isoTxnId":465752,
            "txnDate":"2023-08-14",
            "bankId":"MER-89-PTC-1",
            "creditStatus":"1000",
            "debitStatus":"1001",
            "chargeAmount":null,
            "originatorUniqueId":"WNIC32944911393",
            "endToEndId":"Wallet Transfer 99917064016",
            "referenceId":"9813979589",
            "data1":null,
            "data2":null,
            "remarks":"Wallet Transfer 99917064016"
         },
         {
            "vpa":"Business travel",
            "txnAmount":500.00,
            "requestIdentifier":"EMT100011",
            "isoTxnId":465830,
            "txnDate":"2023-08-15",
            "bankId":"MER-1-APP-3",
            "creditStatus":"000",
            "debitStatus":"000",
            "chargeAmount":null,
            "originatorUniqueId":"232001166135EMT100011",
            "endToEndId":"Business travel",
            "referenceId":"Business travel",
            "data1":null,
            "data2":null,
            "remarks":null
         }
      ],
      "page":0,
      "totalResult":2,
      "totalPages":0
   },
   "responseErrors":[
      
   ]
}
```
**Failure Response:**

```json
{
   "responseCode":"E007",
   "responseStatus":"FAILED",
   "responseMessage":"Transaction Not Found",
   "responseData":[
      
   ],
   "responseErrors":[
      
   ]
}

```
### 8.5.2. By Originator Unique Id: Transaction details are queried based on originator unique id.

**POST URL:** /vpa/transactiondetailbyid


**Request Parameters**

```json
{
 "originatorUniqueId": "WNIC32944911393"
}
```
**Success Response:**

```json

{
   "responseCode":"000",
   "responseStatus":"SUCCESS",
   "responseMessage":"Report Fetched Successfully",
   "responseData":{
      "vpa":"9813979589",
      "txnAmount":5353.28,
      "requestIdentifier":"20230814110116659QEH",
      "isoTxnId":465752,
      "txnDate":"2023-08-14",
      "bankId":"MER-89-PTC-1",
      "creditStatus":"1000",
      "debitStatus":"1001",
      "chargeAmount":null,
      "originatorUniqueId":"WNIC32944911393",
      "endToEndId":"Wallet Transfer 99917064016",
      "referenceId":"9813979589",
      "data1":null,
      "data2":null,
      "remarks":"Wallet Transfer 99917064016"
   },
   "responseErrors":[
      
   ]
}

```
**Failure Response:**

```json
{
   "responseCode":"E007",
   "responseStatus":"FAILED",
   "responseMessage":"Transaction Not Found",
   "responseData":[
      
   ],
   "responseErrors":[
      
   ]
}
```
