---
sidebar_position: 9
---

# 9. Third Party Net Settlement 

Third party net settlement is for processing of final settlements for PSO or other institutions through 
NCHL towards RTGS. Such PSO or other institutions will use this API to initiate their multilateral net 
settlement of their member BFIs against the transactions processed in their system and settlement 
processed through NCHL. For processing the net settlement files, PSO or any other institutions has to 
be the member of NPI and their corresponding BFIs also has to be member of underlying real time 
payment system and RTGS. 


**Process Flow**

1. NPI member will send a net settlement message through NPI in a specified session, which will then 
authenticate the originating member prior to receiving and/or processing the message. Such 
authentication mechanism will be as prescribed in NPI technical specification document. 
2. NPI will route the message to PSO settlement engine for recording, necessary business validations 
and conversion to net settlement integration (NSI). 
3. The PSO settlement engine further transmit the transaction details to each of the participating BFIs, 
included in the file, to verify and confirm the transaction using Bank Central Module provided by 
NCHL. For net debit position, the BFI will debit the member’s account, corresponding to which 
necessary controls will be established by debiting member. 
4. NSI will be processed on ‘All or None’ basis and at specified time schedule, such that the NSI will 
be sent to RTGS only after the transactions are approved by the respective BFIs. If a transaction is 
rejected by any of the BFIs, then the NSI file will be retuned as rejected to the member, 
corresponding to which it will have to resend the file again for necessary approval and processing, 
after resolving the reason for rejection. 
5. Based on RTGS response, the status of the respective transactions will be updated and also a 
response of NSI will be updated to be pulled by the member. 



![Example Image](/img/Third_party_process_flow.png)
<p align="center" class="centered-caption"></p>






Figure:PSO Third party settlement process flow diagram




**POST URL:** /psosettlement/v1/postbatch

**Request Parameters:**

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
            <td>batchDetails</td>
            <td>Object</td>
            <td></td>
            <td>Details of all transactions in batch form</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>1.1</td>
            <td>msgId</td>
            <td>String</td>
            <td>35</td>
            <td>Message for the NCHL settlement</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>1.2</td>
            <td>batchCount</td>
            <td>Integer</td>
            <td></td>
            <td>Count number of transactions in a batch</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>1.3</td>
            <td>ctrlSum</td>
            <td>Big Decimal</td>
            <td>(16,2)</td>
            <td>Total batch amount sum</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>1.4</td>
            <td>totalDebit</td>
            <td>Big Decimal</td>
            <td>(16,2)</td>
            <td>Total batch debit sum</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>1.5</td>
            <td>totalCredit</td>
            <td>Big Decimal</td>
            <td>(16,2)</td>
            <td>Total batch credit sum</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>1.6</td>
            <td>settlementDate</td>
            <td>Date</td>
            <td></td>
            <td>Date of settlement</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>1.7</td>
            <td>currencyCode</td>
            <td>String</td>
            <td>3</td>
            <td>Currency code of transaction</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2</td>
            <td>transactionDetailsList</td>
            <td>List</td>
            <td></td>
            <td>List of all the transaction inputs</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2.1</td>
            <td>instructionId</td>
            <td>String</td>
            <td>35</td>
            <td>Unique identification for the transaction for reconciliation purpose later.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2.2</td>
            <td>endToEndId</td>
            <td>String</td>
            <td>35</td>
            <td>Identification reference for both sender and receiver.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2.3</td>
            <td>amount</td>
            <td>Big Decimal</td>
            <td>13,2</td>
            <td>The amount to be transferred through this transaction.</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2.4</td>
            <td>bankId</td>
            <td>String</td>
            <td>4</td>
            <td>NCHL from bank Id</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2.5</td>
            <td>txnId</td>
            <td>String</td>
            <td>35</td>
            <td>Transaction Id</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2.6</td>
            <td>drCr</td>
            <td>String</td>
            <td>2</td>
            <td>DR: debit or CR: credit</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>2.7</td>
            <td>instrForNxtAgnt1</td>
            <td>String</td>
            <td>35</td>
            <td>Instruction message/id for next agent1</td>
            <td>O</td>
        </tr>
        <tr>
            <td>2.8</td>
            <td>instrForNxtAgnt2</td>
            <td>String</td>
            <td>35</td>
            <td>Instruction message/id for next agent2</td>
            <td>O</td>
        </tr>
         <tr>
            <td>3</td>
            <td>Token</td>
            <td>String</td>
            <td></td>
            <td>Token string Generated</td>
            <td>Y</td>
        </tr>
 </tbody>
</table>



Token Generation Process: 

The token string is the combination of batch and transactions information and following will be the format. 

<pre><code parentName="pre"{...{"className":"language-json"}}>
{'Batch String = <msgId> + "," + <batchCount> + "," + <ctrlSum> + "," + <totalDebit> + "," + <totalCredit> + "," +<settlementDate> + "," + <currencyCode(e.g. NPR)>'}</code></pre>
 

For each transaction

<pre><code parentName="pre"{...{"className":"language-json"}}>
{'{Transaction String = Transaction String + "," + <instructionId> + "," + <endToEndId> + "," + <amount> + "," +<bankId> + "," + <txnId> + "," + <drCr> }'}</code></pre> 

<pre><code parentName="pre"{...{"className":"language-json"}}>{'Token String = Batch String + Transaction String + "," + <user Id>'}</code></pre>
 

Generate signed hash value of token string using private key of provided certificate. Send the generate hash 
value in “token” field. 

**Sample Request**

```json
{
   "batchDetails":{
      "msgId":"FONEPAY-SETTL-123",
      "batchCount":4,
      "ctrlSum":14000.00,
      "totalDebit":7000.00,
      "totalCredit":7000.00,
      "settlementDate":"2021-06-08",
      "currencyCode":"NPR"
   },
   "transactionDetailsList":[
      {
         "endToEndId":"FONEPAY SETTLEMENT",
         "txnId":"FONEPAY-1633238261",
         "instructionId":"FONEPAY-1633238261",
         "amount":5000.00,
         "bankId":"0201",
         "drCr":"CR",
         "instrForNxtAgnt1":null,
         "instrForNxtAgnt2":null
      },
      {
         "endToEndId":"FONEPAY SETTLEMENT",
         "txnId":"FONEPAY-1633238270",
         "instructionId":"FONEPAY-1633238270",
         "amount":5000.00,
         "bankId":"0301",
         "drCr":"DR",
         "instrForNxtAgnt1":null,
         "instrForNxtAgnt2":null
      },
      {
         "endToEndId":"FONEPAY SETTLEMENT",
         "txnId":"FONEPAY-1633238263",
         "instructionId":"FONEPAY-1633238263",
         "amount":2000.00,
         "bankId":"0401",
         "drCr":"CR",
         "instrForNxtAgnt1":null,
         "instrForNxtAgnt2":null
      },
      {
         "endToEndId":"FONEPAY SETTLEMENT",
         "txnId":"FONEPAY-1633238272",
         "instructionId":"FONEPAY-1633238272",
         "amount":2000.00,
         "bankId":"1701",
         "drCr":"DR",
         "instrForNxtAgnt1":null,
         "instrForNxtAgnt2":null
      }
   ],
   "token":"BgKY+/BQ9z+hgfvAKk1eiD7U+zlr3LPOL0h0/Y1qfUcJ0s98iNdCZMuQsiaJL4Qz/aJCCjJS1/UmWbOrBpYLp66jM2i1b3+Hmbqo0NTay/kTcHhicmVtOQAA/W8x5Nfs1CdSw8Om7nIG+d8ixWJPEaW6N4HZU6vXRLX1PIfplfKs+ZGYGTarAPpxXZjm++7m3n/UNeXVZP/rEztxSU1N/u07mWpiJWjA6bdwt7UYKXq4QKF2abnP0wMJWDl4VgdxbE9Lf9/a7LLI9OEXLQlQgFCY4N+U6ByCwOXiHdjUza7tUGO/vugpFKKONKyLl/7vRw4XTnEGmorB2/nI0QcN4Q=="
}
```


**Sample Response** 
```json
{
   "responseResult":{
      "fieldErrors":[
         
      ],
      "responseDescription":"SUCCESS",
      "responseCode":"000"
   },
   "batchDetails":{
      "msgId":"FONEPAY-SETTL-123",
      "batchCount":4,
      "ctrlSum":14000.00,
      "totalDebit":7000.00,
      "totalCredit":7000.00,
      "settlementDate":"2021-06-08",
      "currencyCode":"NPR"
   },
   "transactionDetailsList":[
      {
         "endToEndId":"FONEPAY SETTLEMENT",
         "txnId":"FONEPAY-1633238261",
         "instructionId":"FONEPAY-1633238261",
         "amount":5000.00,
         "bankId":"0201",
         "drCr":"CR",
         "instrForNxtAgnt1":null,
         "instrForNxtAgnt2":null
      },
      {
         "endToEndId":"FONEPAY SETTLEMENT",
         "txnId":"FONEPAY-1633238270",
         "instructionId":"FONEPAY-1633238270",
         "amount":5000.00,
         "bankId":"0301",
         "drCr":"DR",
         "instrForNxtAgnt1":null,
         "instrForNxtAgnt2":null
      },
      {
         "endToEndId":"FONEPAY SETTLEMENT",
         "txnId":"FONEPAY-1633238263",
         "instructionId":"FONEPAY-1633238263",
         "amount":2000.00,
         "bankId":"0401",
         "drCr":"CR",
         "instrForNxtAgnt1":null,
         "instrForNxtAgnt2":null
      },
      {
         "endToEndId":"FONEPAY SETTLEMENT",
         "txnId":"FONEPAY-1633238272",
         "instructionId":"FONEPAY-1633238272",
         "amount":2000.00,
         "bankId":"1701",
         "drCr":"DR",
         "instrForNxtAgnt1":null,
         "instrForNxtAgnt2":null
      }
   ]
}

```

**Failed Response**

Error details in responseResult (i.e. responseCode, responseDescription and fieldErrors) respectively 
```json
{
   "responseCode":"E007",
   "responseDescription":"TECHNICAL VALIDATION FAILED",
   "fieldErrors":[
      {
         "field":"batchDetails.batchCount",
         "message":"Batch size exceeded!"
      }
   ]
}
```






