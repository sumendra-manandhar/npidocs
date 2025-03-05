---
sidebar_position: 7
---


# 7.Annexure

# Other APIs 
Below are the lists of other supporting APIs to extract the list and/or setups from the core system. 
 
## 7.1	To get the branch list for both real-time and non-real-time systems.


<table>
<tr>
<th>Method</th>
<th>End-Points</th>
<th>Authorization</th>
<th>Content-Type</th>
</tr>
<tr>
<td>POST</td>
<td>(BASE_URL)+/ api/api/getbranchlist</td>
<td>Bearer (access_token)</td>
<td>application/json</td>
</tr>
</table>

**Sample Response:** 
```json
[ 
    { 
        "branchId": "59", 
        "bankId": "6001", 
        "branchName": "Narayangadh Branch" 
    }, 
    { 
        "branchId": "280", 
        "bankId": "1601", 
        "branchName": "Durbar Marg Branch" 
    } ]  
```

## 7.2	To get the branch list for Real-Time system only. 



<table>
<tr>
<th>Method</th>
<th>End-Points</th>
<th>Authorization</th>
<th>Content-Type</th>
</tr>
<tr>
<td>POST</td>
<td>(BASE_URL)+/api/getcipsbranchlist</td>
<td>Bearer (access_token)</td>
<td>application/json</td>
</tr>
</table>

**Sample Response:**
```json 
[ 
    { 
        "branchId": "59", 
        "bankId": "6001", 
        "branchName": "Narayangadh Branch" 
    }, 
        { 
        "branchId": "280", 
        "bankId": "1601", 
        "branchName": "Durbar Marg Branch" 
    } 
] 
```

## 7.3 To get the Real-Time System bank List

<table>
<tr>
<th>Method</th>
<th>End-Points</th>
<th>Authorization</th>
<th>Content-Type</th>
</tr>
<tr>
<td>POST</td>
<td>(BASE_URL)+/api/getcipsbanklist</td>
<td>Bearer (access_token)</td>
<td>application/json</td>
</tr>
</table>

**Sample Response:** 
```json
[ 
   { 
        "bankId": "2601", 
        "bankName": "Prabhu Bank Limited" 
    }, 
    { 
        "bankId": "2301", 
        "bankName": "NIC Asia Bank Limited" 
    }, 
    { 
        "bankId": "9945", 
        "bankName": "Kanchan Development Bank Ltd" 
    }  
]  
```

## 7.4 To get the Non-Real-Time system bank list.

<table>
<tr>
<th>Method</th>
<th>End-Points</th>
<th>Authorization</th>
<th>Content-Type</th>
</tr>
<tr>
<td>POST</td>
<td>(BASE_URL)+/api/getbanklist</td>
<td>Bearer (access_token)</td>
<td>application/json</td>
</tr>
</table>

 **Sample Response:**
 ```json 
[ 
    { 
        "bankId": "7502", 
        "bankName": "Excel Development Bank Ltd." 
    }, 
    { 
        "bankId": "2301", 
        "bankName": "NIC Asia Bank Limited" 
    } ]  
```


## 7.5 To get the branch list of the  provided bank


<table>
<tr>
<th>Method</th>
<th>End-Points</th>
<th>Authorization</th>
<th>Content-Type</th>
</tr>
<tr>
<td>POST</td>
<td>(BASE_URL)+/api/getbranchlist/(bankId)</td>
<td>Bearer (access_token)</td>
<td>application/json</td>
</tr>
</table>
 **sample response**


  ```json

  [ 
    { 
        "branchId": "33", 
        "bankId": "1901", 
        "branchName": "Panipokhari Branch" 
    }, 
        { 
        "branchId": "70", 
        "bankId": "1901", 
        "branchName": "Tamghas Branch" 
    } 
]  
```

## 7.6 To get the real -time system charge slab as per thr app_id id that will be applied to Debtor .EG .MER-1-APP-3  is for fund transfer.


<table>
<tr>
<th>Method</th>
<th>End-Points</th>
<th>Authorization</th>
<th>Content-Type</th>
</tr>
<tr>
<td>POST</td>
<td>(BASE_URL)+/api/getcipschargelist /(app_id)</td>
<td>Bearer (access_token)</td>
<td>application/json</td>
</tr>
</table>

**Sample Response:**
```json 
[
    {
        "scheme": "GEN",
        "currency": "NPR",
        "maxAmt": 5000.00,
        "minChargeAmt": 4.00,
        "maxChargeAmt": 4.00,
        "percent": 0,
        "minChargeWithVat": 4.52,
        "maxChargeWithVat": 4.52
    },
    {
        "scheme": "GEN",
        "currency": "NPR",
        "maxAmt": 50000.00,
        "minChargeAmt": 8.00,
        "maxChargeAmt": 8.00,
        "percent": 0,
        "minChargeWithVat": 9.04,
        "maxChargeWithVat": 9.04
    },
    {
        "scheme": "GEN",
        "currency": "NPR",
        "maxAmt": 500.00,
        "minChargeAmt": 2.00,
        "maxChargeAmt": 2.00,
        "percent": 0,
        "minChargeWithVat": 2.26,
        "maxChargeWithVat": 2.26
    },
    {
        "scheme": "GEN",
        "currency": "NPR",
        "maxAmt": 200000000.00,
        "minChargeAmt": 8.00,
        "maxChargeAmt": 8.00,
        "percent": 0,
        "minChargeWithVat": 9.04,
        "maxChargeWithVat": 9.04
    }
]
```


## 7.7 To get the bank list having auto reversal feature enabled. 

<table>
<tr>
<th>Method</th>
<th>End-Points</th>
<th>Authorization</th>
<th>Content-Type</th>
</tr>
<tr>
<td>POST</td>
<td>(BASE_URL)+/api/getreversalenabledbanklist </td>
<td>Bearer (access_token)</td>
<td>application/json</td>
</tr>
</table>

**Sample Respone**

```json

[ 
    { 
        "bankId": "4501", 
        "bankName": "Sanima Bank Ltd." 
    }, 
      { 
        "bankId": "1501", 
        "bankName": "Machhapuchchhre Bank Limited" 
    } 
] 
```

## 7.8 To get the list of added bank accounts for technical NPI members.

<table>
<tr>
<th>Method</th>
<th>End-Points</th>
<th>Authorization</th>
<th>Content-Type</th>
</tr>
<tr>
<td>POST</td>
<td>(BASE_URL)+/api/bank-account/details</td>
<td>Bearer (access_token)</td>
<td>application/json</td>
</tr>
</table>


**Sample Respone**

```json
{
    "timestamp": "Sun Sep 17 09:56:06 NPT 2023",
    "responseCode": "000",
    "responseStatus": "SUCCESS",
    "responseMessage": "Account Details Fetched.",
    "data": [
        {
            "entryId": "4750",
            "bankId": "7516",
            "branchId": "1",
            "accountName": "Test Account",
            "accountId": "002001535353535",
            "bankName": "Best Company Ltd.",
            "status": "ACCEPTED",
            "rcreTime": "2022-07-27T06:48:02.566+0000"
        },
      
  {
            "entryId": "4864",
            "bankId": "9931",
            "branchId": "71",
            "accountName": "P.U.-SEWA AAYOG OFFICE",
            "accountId": "0701017501133",
            "bankName": "Mahalaxmi Bikas Bank Ltd.",
            "status": "ACCEPTED",
            "rcreTime": "2022-08-01T09:31:35.104+0000"
        }
    ]
}

```



## 7.9 To get the details of debit cap which is assigned to the particular bank of the NPI member.

<table>
<tr>
<th>Method</th>
<th>End-Points</th>
<th>Authorization</th>
<th>Content-Type</th>
</tr>
<tr>
<td>POST</td>
<td>(BASE_URL)+/api/debit-cap/details</td>
<td>Bearer (access_token)</td>
<td>application/json</td>
</tr>
</table>

**Sample response**

```json
{
    "timestamp": "2023-09-15 02:18:13",
    "responseCode": "000",
    "responseStatus": "SUCCESS",
    "responseMessage": "Debit Cap Detail Fetched.",
    "responseData": [
        {
            "debitCap": 1000000.00,
            "clrBalAmount": 1000000.00,
            "bankName": "Nabil Bank Ltd.",
            "sessionId": 4458
        },
        {
            "debitCap": 1000000.00,
            "clrBalAmount": 1000000.00,
            "bankName": "Siddhartha Bank Limited",
            "sessionId": 4458
        }
    ]
}

```


