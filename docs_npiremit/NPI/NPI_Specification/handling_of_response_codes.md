---
sidebar_position: 6
---

# 6. Handling of Response Codes

Following are the list of response codes used in NPI that could be technical and business. HTTP Reason 
codes FORBIDDEN, BAD REQUEST and INTERNAL SERVER ERROR are exceptional cases which 
requires the exact technical setups and message structures mentioned in the document. These HTTP 
statuses contain same response message format as mentioned below with response code. All 
technically valid messages will be responded with HTTP status OK which has a fixed format and doesn’t 
change. 


Technical Response Format (FORBIDDEN, BAD REQUEST and INTERNAL SERVER ERROR):

```json
{ 
"responseCode":”<Response Code>", 
"responseDescription":"<Response Message>", 
"fieldErrors":[<Field Error if any>] 
}
```
**Response Codes:**

<table>
    <thead>
        <tr>
        <th colspan ='3'> Technical Error Codes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>HTTP Status</td>
            <td>Error Code</td>
            <td>Error Description</td>
        </tr>
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
            <td>99</td>
            <td>DUPLICATE BATCH TRANSACTION</td>
        </tr>
        <tr>
            <td>HttpStatus.INTERNAL_SERVER_ERROR</td>
            <td>E999</td>
            <td>ERROR</td>
        </tr>
        <tr>
            <td>Https Status</td>
            <td>200 OK</td>
            <td>Success</td>
        </tr>
        <tr>
            <td>Https Status</td>
            <td>200 OK</td>
            <td>E021 Transaction Time Out</td>
        </tr>
    </tbody>
</table>


<table>
    <thead>
        <tr><th colspan = '3' >Business Validations Codes</th>
        </tr>
    </thead>
    <tbody>
        <tr><td rowspan= '7' >Debit Response</td>
            </tr>
            <tr>
            <td> Response Code</td>
            <td>Description</td>
            </tr> 
            <tr>
            <td>000</td>
            <td>Debit Success</td>
        </tr>
        <tr>
            <td>1001</td>
            <td>Bank network not reachable</td>
        </tr>
        <tr>
            <td>999</td>
            <td>Debit ISO Time Out</td>
        </tr>
        <tr>
            <td>1000</td>
            <td>Debit rejected</td>
        </tr>
        <tr>
            <td>ENTR</td>
            <td>Debit in Progress</td>
          </tr>
          <tr><td rowspan= '7' >Credit Response (POSTCIPS) </td>
          </tr>
        <tr>
            <td>000</td>
            <td>Credit Success</td>
        </tr>
        <tr>
            <td>1001</td>
            <td>Bank network not reachable</td>
        </tr>
        <tr>
            <td>1000</td>
            <td>Credit Rejected as Debit is Rejected</td>
        </tr>
        <tr>
            <td>999</td>
            <td>Credit ISO Time Out</td>
        </tr>
        <tr>
            <td>DEFER</td>
            <td>Deferred Credit Payment/Success</td>
        </tr>
        <tr>
            <td>ENTR</td>
            <td>Credit in Progress</td>
        </tr>
        <tr><td rowspan= '7' >Credit Response (POSTNCHLIPS) </td></tr>
        <tr>
            <td>ACTC</td>
            <td>Accepted Technical Validation</td>
        </tr>
        <tr>
            <td>ACSP</td>
            <td>Accepted Settlement in Process</td>
        </tr>
        <tr>
            <td>ACSC</td>
            <td>Accepted Settlement Completed</td>
        </tr>
        <tr>
            <td>RJCT</td>
            <td>Credit Rejected</td>
        </tr>


</tbody>         
</table>


