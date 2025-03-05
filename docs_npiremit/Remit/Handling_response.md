---
sidebar_position: 8
---

# 8.Handling of Response Codes


Following are the list of response codes used in NPI that could be technical and business. HTTP Reason codes OK, FORBIDDEN, BAD REQUEST and INTERNAL SERVER ERROR are exceptional cases which requires the exact technical setups and message structures mentioned in the document. These HTTP statuses contain same response message format as mentioned below with response code. All technically valid messages will be responded with HTTP status OK which has a fixed format and doesn’t change. 

Technical Response Format (FORBIDDEN, BAD REQUEST and INTERNAL SERVER ERROR): 

```json
{ 
"responseCode":”<Response Code>", 
"responseDescription":"<Response Message>", 
"fieldErrors":[<Field Error if any>] 
} 
```


## 8.1 Technical Error Codes

 <table>
        <thead>
            <tr>
                <th>HTTP Status</th>
                <th>Error Code</th>
                <th>Error Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>HttpStatus.FORBIDDEN</td>
                <td>E001</td>
                <td>INVALID IP ADDRESS</td>
            </tr>
            <tr>
                <td>HttpStatus.BAD_REQUEST</td>
                <td>E007</td>
                <td>TECHNICAL VALIDATION FAILED (Batch and Txn Level)</td>
            </tr>
            <tr>
                <td>HttpStatus.BAD_REQUEST</td>
                <td>E003</td>
                <td>INVALID TOKEN</td>
            </tr>
            <tr>
                <td>HttpStatus.BAD_REQUEST</td>
                <td>E004</td>
                <td>INVALID ACCOUNT</td>
            </tr>
            <tr>
                <td>HttpStatus.BAD_REQUEST</td>
                <td>099</td>
                <td>DUPLICATE BATCH TRANSACTION OR</td>
            </tr>
            <tr>
                <td>HttpStatus.INTERNAL_SERVER_ERROR</td>
                <td>E999</td>
                <td>Technical ERROR</td>
            </tr>
            <tr>
                <td>Https Status 200 OK</td>
                <td>-</td>
                <td>Success</td>
            </tr>
            <tr>
                <td>Https 200 OK</td>
                <td>E021</td>
                <td>Transaction Time Out</td>
            </tr>
        </tbody>
    </table>

## 8.2 RPS  Return Reason and Response Codes



<table border="1" cellpadding="5" cellspacing="0">
        <thead>
            <tr>
                <th>Debit Response Code</th>
                <th>Debit Description</th>
                <th>Credit Response Codes</th>
                <th>Credit Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan = '7'>000</td>
                <td rowspan = '7'>Debit Success</td>
            </tr>
            <tr>
                <td>DEFER</td>
                <td>Deferred credit payment/success</td>
            </tr>
            <tr>
                <td>999</td>
                <td>Credit Time Out. (Considered as credit success in settlement)</td>
            </tr>
            <tr>
                <td>ENTR</td>
                <td>Credit in progress. (Call back API to be used to get final status)</td>
            </tr>
            <tr>
                <td>1001</td>
                <td>Bank’s network not reachable. Subject to debit reversal.</td>
            </tr>
            <tr>
                <td>Other CBS Codes (Credit Rejected)</td>
                <td>Credit Rejected. (Subjected to debit reversal)</td>
            </tr>
            <tr>
                <td>Null</td>
                <td>Suspicious Transaction. Manual verification required</td>
            </tr>
            <tr>
                <td>1001</td>
                <td>Bank Network not reachable</td>
                <td>1000</td>
                <td>Credit Rejected As Debit is Rejected</td>
            </tr>
            <tr>
                <td>999</td>
                <td>Debit ISO Time Out. Manual verification required</td>
                <td>1000</td>
                <td>Credit Rejected As Debit is Rejected</td>
            </tr>
            <tr>
                <td>ENTR</td>
                <td>Debit In Progress (Call back API to be used to get final status)</td>
                <td>Null</td>
                <td>Credit In Progress (Call back API to be used to get final status. Manual verification required)</td>
            </tr>
            <tr>
                <td>Other CBS Codes</td>
                <td>Debit Rejected</td>
                <td>1000</td>
                <td>Credit Rejected As Debit is Rejected</td>
            </tr>
        </tbody>
    </table>


**Note:**

1. I f Debit status or Credit status is Empty or Null , it should be considered as a suspicious transaction and will require manual reconciliation by the participating memebers.
   
2. If a transaction is debit success and credit failed , auto reversal shall be triggered in the RPS system to the debtor account.
