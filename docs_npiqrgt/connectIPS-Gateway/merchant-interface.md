---
sidebar_position: 3
---

# 3. Merchant Interface Description

This section describes the necessary information for integrating merchant e-commerce application/ site with the connectIPS Core Module.

## 3.1. LOGIN PAGE 

**URL:** https://{base_url}/connectipswebgw/loginpage

**Method:** POST 

**Data:** x-www-form-urlencoded

##  3.2. PARAMETERS

<table>
     <thead>
       <tr>
         <th>#</th>
         <th>Field Name </th>
         <th>Data Type</th>
         <th>Length </th>
         <th>Presence</th>
         <th>Description</th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>1</td>
      <td>MERCHANTID</td>
      <td>Integer</td>
      <td>20</td>
      <td>Y</td>
      <td>Merchant ID is and unique identifier to identify merchant in the system. Merchant ID will be provided by NCHL upon registering merchant for connectIPS Core Module on banks’ request</td>
     </tr>
      <tr>
      <td>2</td>
      <td>APPID</td>
      <td>String </td>
      <td>20</td>
      <td>Y</td>
      <td>Unique identification, which will be used to identify the accountdetails of the merchant’s application. A merchant can have multiple applications based on different banks account used for various shopping sites. Application Id will be provided by NCHL after registration.</td>
     </tr>
       <tr>
      <td>3</td>
      <td>APPNAME</td>
      <td>String </td>
      <td>30</td>
      <td>Y</td>
      <td>Application name to identify merchant as well as originating application. </td>
     </tr>  <tr>
      <td>4</td>
      <td>TXNID</td>
      <td>String </td>
      <td>20</td>
      <td>Y</td>
      <td>Transaction Id which will be used to reconcile transaction 
     between merchant and NCHL. 
     Transaction Id must be unique for each app in each post 
     request. </td>
     </tr>  <tr>
      <td>5</td>
      <td>TXNDATE </td>
      <td>String </td>
      <td>10</td>
      <td>Y</td>
      <td>Transaction Date is the transaction origination date. Date must 
      be in DD-MM-YYYY format. </td>
     </tr>  <tr>
      <td>6</td>
      <td>TXNCRNCY</td>
      <td>String </td>
      <td>3</td>
      <td>Y</td>
      <td>Currency of transaction. E.g.: NPR</td>
     </tr>  <tr>
      <td>7</td>
      <td>TXNAMT </td>
      <td>Integer</td>
      <td>20</td>
      <td>Y</td>
      <td>Transaction amount in paisa.</td>
     </tr>  <tr>
      <td>8</td>
      <td>REFERENCEID</td>
      <td>String </td>
      <td>20</td>
      <td>Y</td>
      <td>Reference Id. Extra transaction information. </td>
     </tr>  <tr>
      <td>9</td>
      <td>REMARKS</td>
      <td>String </td>
      <td>50</td>
      <td>Y</td>
      <td>Remarks related to the transaction. </td>
     </tr>  <tr>
      <td>10</td>
      <td>PARTICULARS</td>
      <td>String </td>
      <td>100</td>
      <td>Y</td>
      <td>Additional transaction Remarks. </td>
     </tr>  <tr>
      <td>11</td>
      <td>TOKEN</td>
      <td>String </td>
      <td>512</td>
      <td>Y</td>
      <td>Token for generated transaction details. Hash value must be 
      generated as a token using transaction detail and private key 
     provided by NCHL. E.g.: 
     fRLMniZSmpKs/FrO7w53NmlIiXKX1+AQdhJUgBO51S+Ho9Zz 
     YOICghA5kW3hS/B1nf2EY5zziutxGejSBQ8NFgQo7MWYi/QP 
     nSZ6jByI1gzRnx73/EUZmG9tRgRdDq2Zs99Y8m4by2uEQo0 
     ZldbTHmO4kRuifUTSurFn+zdbprg=</td>
     </tr>
      </tbody>
</table>

## 3.3. PROCESS TO GENERATE TOKEN

 ### 3.3.1. Generate string based on transaction detail in below format. 


<pre><code parentName="pre"{...{"className":"language-json"}}>
{'String message = “MERCHANTID=<Value of MERCHANTID>, APPID=<Value of APPID>, APPNAME=<Value of APPNAME>, TXNID=<Value of TXNID>,TXNDATE=<Value of TXNDATE>,TXNCRNCY=<Value of TXNCRNCY>,TXNAMT=<Value of TXNAMT>,REFERENCEID=<Value of REFERENCEID>,REMARKS=<Value of REMARKS>,PARTICULARS=<Value of PARTICULARS>,TOKEN=TOKEN” '}</code></pre>


i. Generate message digest of the token string using SHA256 hashing algorithm. 

ii. Sign the message digest using the digital certificate private key (pfx file/keystore). The digital signature 
algorithm will be the SHA256withRSA. Private key file will be CREDITOR.pfx for testing purpose. 

iii. Convert the signed token above in step ii to base64 encoding. 
iv. Pass this signature string from step iii to the “token” field of the request message. 

**Example:** 

**Text to be signature:**

 <pre><code parentName="pre"{...{"className":"language-json"}}>
{'MERCHANTID=550,APPID=MER-550-APP-1,APPNAME=Test,TXNID=txn123,TXNDATE=15-03-2022,TXNCRNCY=NPR,TXNAMT=500,REFERENCEID=REF-001,REMARKS=RMKS-001,PARTICULARS=PART-001,TOKEN=TOKEN'}</code></pre>


**Signature text:**
<pre><code parentName="pre"{...{"className":"language-json"}}> 
{'QYj4di1m4V/ahhrw4QcNtPvOv4pYiJE+Ur0Ewnue4NyYjK8UlruUDVLrR4i6vrMAcyKGK1tR8riwH8x4DtN22 QsLGHMCM5mDjhJiae5D0AMbr9jrOtomlh0P1IrTy5I8iTHwoNJV2u4vtGYBgAxJ2IE5YxPaKNnqH5nxQFhjUgA= '}</code></pre>


**Note:** Signature text as above can be generated as an example only. After getting correct signature value, use your own provided details. 

## 3.4. RESPONSE

**Example Request**
```
    <form action="baseurl/connectipswebgw/loginpage" method="post"> 
    <label for="MERCHANTID">MERCHANT ID</label>
    <input type="text" name="MERCHANTID" id="MERCHANTID" value="550"/> 

    <label for="APPID">APP ID</label>
    <input type="text" name="APPID" id="APPID" value="MER-550-APP-1"/> 

    <label for="APPNAME">APP NAME</label>
    <input type="text" name="APPNAME" id="APPNAME" value="Test Merchant Name"/> 

    <label for="TXNID">TXN ID</label>
    <input type="text" name="TXNID" id="TXNID" value="txn-123"/> 

    <label for="TXNDATE">TXN DATE</label>
    <input type="text" name="TXNDATE" id="TXNDATE" value="15-03-2022"/> 

    <label for="TXNCRNCY">TXN CRNCY</label>
    <input type="text" name="TXNCRNCY" id="TXNCRNCY" value="NPR"/> 

    <label for="TXNAMT">TXN AMT</label>
    <input type="text" name="TXNAMT" id="TXNAMT" value="500"/> 

    <label for="REFERENCEID">REFERENCE ID</label>
    <input type="text" name="REFERENCEID" id="REFERENCEID" value="REF-001"/> 

    <label for="REMARKS">REMARKS</label>
    <input type="text" name="REMARKS" id="REMARKS" value="RMKS-001"/> 

    <label for="PARTICULARS">PARTICULARS</label>
    <input type="text" name="PARTICULARS" id="PARTICULARS" value="PART-001"/> 

    <label for="TOKEN">TOKEN</label>
    <input type="text" name="TOKEN" id="TOKEN" value="fRLMniZSmpKs/FrO7w53NmlIiXKX1+AQdhJUgBO51S+Ho9ZzYOICghA5kW3hS/B1nf2EY5zziutxGejSBQ8NFgQo7MWYi/QPnSZ6jByI1gzRnx73/EUZmG9tRgRdDq2Zs99Y8m4by2uEQo0ZldbTHmO4kRuifUTSur Fn+zdbprg=" />

    <br>
    <input type="submit" value="Submit"> 
</form>
```

![Example Image](/img/Redirection_to_connectIPS_after_posting_form_data.png)<p align="center" class="centered-caption"></p>

 Fig:1. Redirection to connectIPS after posting form data


## 3.5. USER REDIRECTION 

Before performing transactions, a static pair of successURL and failureURL has to be provided to the 
connectIPS integration support team. connectIPS itself handles user redirection and sends the user to 
whichever URL provided for testing after entering the OTP. URLs of localhost is also supported while testing. 
Please provide full URL to the connectIPS integration support team. 

In each instance of redirection, connectIPS will append only TXNID parameter at the end of the URL; referring 
to which, payment validation URL has to be called to validate payment from merchant’s end.

**Sample URL:** 
 
**SuccessURL:** https://www.testsuccessurl.com/transactionResponse/success?TXNID=txn-123 

**FailureURL:** https://www.testfailureurl.com/transactionResponse/failure?TXNID=txn-123 


**Note:** This TXNID is the same parameter that is passed in the form data for login URL. 

successURL is the URL where the transaction creating user will be redirected after entering OTP in the 
transaction creation page whereas, failureURL is the URL called when the user clicks on “Return” button in login 
page or “Return to Creditor Site” button in transaction creation page. 


![Example Image](/img/redirection.png)<p align="center" class="centered-caption"></p>

  Fig:2. Return button redirects to failureURL

![Example Image](/img/Return_to_Creditor_Side_Button.png)<p align="center" class="centered-caption"></p>

  Fig:3. Return to Creditor Side button redirects to failureURL


Incase if a transaction fails at connectIPS end, the user will be shown an error message in the transaction page 
itself as below:


![Example Image](/img/Transaction_failure_at_ConnectIPS.png)<p align="center" class="centered-caption"></p>

  Fig:4. Transaction failure at connectIPS 
