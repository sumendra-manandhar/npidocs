---
sidebar_position: 2
---

# 2. API Security

We secure our messaging API through the following best practices to reinforce security standard:

• Token-based Access Control

• Digital Signature

# 3. Authentication and Authorization

The primary API authentication method is via OAuth2 framework using Access Tokens. The OAuth 2.0 
authorization framework is a protocol that allows grant a third-party application access to the protected 
resources, without necessarily revealing their long-term credentials or even their identity. The client 
needs to provide client specific credentials in the authorization header and user credentials in the body 
with grant type as password for token generation on first login or during refresh token expiration. After 
login with client credentials on first authentication a long-lived refresh token is provided along with 
access token.


These tokens contain your API access privileges, so be sure to keep them secret.

**API Authorization**

The generated access token by one of the above methods can be used to access the authenticated 
routes. This can be done by setting the Authorization HTTP Header value as **Bearer [access token]**
The default token expiration time is **300 sec** for the access token and **12 hours** for the refresh token in 
a test environment. This will be different for the Production environment.
We recommend you have a dynamic way of retrieving new tokens. For example, when the access and 
refresh tokens are expires, you will receive a **401 unauthorized** in the response.


**Auth API Endpoints**

We provide one primary API endpoints to obtaining the access tokens. This endpoint supports 
two Authorization Grant methods:

<table>
  <tr>
    <th>URL</th>
    <th>Grant Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>/oauth/token</td>
    <td>password</td>
    <td>Retrieve Access Token and Refresh Token using the Client ID and Client Secret</td>
  </tr>
  <tr>
    <td>/oauth/token</td>
    <td>refresh token</td>
    <td>Retrieve Access Token using the corresponding Refresh Token only</td>
  </tr>
</table>


**Method to generate & use access and refresh token**


1. Use the provided basic authentication credentials along with username/password and grant type 
as password to obtain a refresh token. Refresh token has validity of 12 hours, so store the refresh 
token to retrieve the access token further. Do not use the access token obtained during this initial 
request. 

2. Use the stored refresh token obtained from step 1 to generate new access token keeping grant 
type as refresh token. Access tokens are valid for 300 seconds. Use this access token for 
resources requests within this period. On expiry of access token re-request using the stored refresh 
token. 

3. On expiry of refresh token, repeat the process from step 1. 
   
4. Now pass this access token while accessing the API resource as a Bearer Token in Authorization 
header.


# 4. API based NPI-Billers Integration Customer Journey

NPI-Billers payment could also be accessed through the APIs provide in National Payment Interface. 
The Payment APIs will be same as those specified in the NPI specification document for bill payments 
already under version control. This document is created for specification of additional APIs that can 
value add the bill payment process.


## 4.1  Categories Listing API

These are different service/feature grouped together and categorized on the basis of organization 
type and its nature and are made available in connectIPS application. Third party application can use 
the categories listing API to list the available category for bill payment. Also, the same API could be 
used to list sub category and ultimate billers.


**Post URL:** /billers/v2/categories


**Request Body:**


<table>
  <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Format</th>
    <th>Length</th>
    <th>Description</th>
    <th>Presence</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Category</td>
    <td>String</td>
    <td></td>
    <td>Max 100</td>
    <td>Category code for the request. ALL to be provided for listing all categories.</td>
    <td>M</td>
  </tr>
</table>



**Response Body:**


<table>
  <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Format</th>
    <th>Length</th>
    <th>Description</th>
    <th>Presence</th>
  </tr>
  <tr>
    <td>1</td>
    <td>responseCode</td>
    <td>String</td>
    <td></td>
    <td>Max 10</td>
    <td>Response code for the request. 000 is success, any other is negative response.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>2</td>
    <td>responseMessage</td>
    <td>String</td>
    <td></td>
    <td>Max 400</td>
    <td>Human readable text for the provided response code.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Data</td>
    <td>Complex Array</td>
    <td></td>
    <td>object</td>
    <td>Object specification as in the following table.</td>
    <td>M</td>
  </tr>
</table>


**Data Object:**


<table>
  <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Format</th>
    <th>Length</th>
    <th>Description</th>
    <th>Presence</th>
  </tr>
  <tr>
    <td>3.1</td>
    <td>Type</td>
    <td>ENUM</td>
    <td></td>
    <td>-</td>
    <td>Possible values are APP or CATEGORY. APP denotes the ultimate creditor whereas CATEGORY denotes that there are other sub-categories or creditor beneath.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>3.2</td>
    <td>Code</td>
    <td>String</td>
    <td></td>
    <td>Max. 50</td>
    <td>Code provided to the category or the ultimate creditor.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>3.3</td>
    <td>labelText</td>
    <td>String</td>
    <td></td>
    <td>Max. 200</td>
    <td>Text label to be provided under the logo in UI.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>3.4</td>
    <td>logoUrl</td>
    <td>String</td>
    <td></td>
    <td>-</td>
    <td>URL location of the logo to be displayed.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>3.5</td>
    <td>appId</td>
    <td>String</td>
     <td></td>
    <td>Max. 50</td>
   <td>Code associated to the ultimate creditor/merchant</td>
    <td>O</td>
  </tr>
  <tr>
    <td>3.6</td>
    <td>appGroup</td>
    <td>String</td>
    <td></td>
    <td>Max. 4</td>
    <td>Group code assigned to the creditor category</td>
    <td>O</td>
  </tr>
</table>


**Sample Request:**
```json
{
  “category”:”ALL”
}
```

**Sample Response:**

```json
{
   "responseCode":"000",
   "responseMessage":"SUCCESS",
   "data":[
      {
         "type":"CATEGORY",
         "code":"GOVT",
         "labelText":"Government Payment",
         "logoUrl":"https://www.connectips.com/cdn/CONNECTIPS/connectipsweb/images/dashboard/govt.png"
      },
      {
         "type":"CATEGORY",
         "code":"CCARD",
         "labelText":"Credit Card",
         "logoUrl":"https://www.connectips.com/cdn/CONNECTIPS/connectipsweb/images/dashboard/creditCard.png"
      },
      {
         "type":"CATEGORY",
         "code":"INSU",
         "labelText":"Insurance",
         "logoUrl":"https://www.connectips.com/cdn/CONNECTIPS/connectipsweb/images/dashboard/insurance.png"
      },
      {
         "type":"CATEGORY",
         "code":"BROKER",
         "labelText":"Share Broker",
         "logoUrl":"https://www.connectips.com/cdn/CONNECTIPS/connectipsweb/images/dashboard/brokers.png"
      }
   ]
}
```

**4.2 Sub-category listing**

**Post URL: /billers/v2/categories**

**Sample Request:**
```json 
{
 "category":"GOVT"
}
```

**Sample Response:**
```json
{
   "responseCode":"000",
   "responseMessage":"SUCCESS",
   "data":[
      {
         "category":"CATEGORY",
         "code":"SEMI-GOVT",
         "labelText":"Semi-Govt/Sansthan",
         "logoUrl":"govt.png"
      },
      {
         "category":"CATEGORY",
         "code":"GON",
         "labelText":"Government of Nepal",
         "logoUrl":"govt.png"
      },
      {
         "category":"CATEGORY",
         "code":"LOCAL-GOVT",
         "labelText":"Local Government",
         "logoUrl":"govt.png"
      }
   ]
}
```
**4.3 Merchant/App listing**

 **Post URL: /billers/v2/categories** 

 **Request:** 
```json
 {
 "category":"SEMI-GOVT"
 } 
 ```

**Response:**
```json
{
   "responseCode":"000",
   "responseMessage":"SUCCESS",
   "data":[
      {
         "category":"APP",
         "code":"KSK-NICA-APP-3",
         "labelText":"EPF",
         "logoUrl":"epf.png",
         "appId":"KSK-NICA-APP-3",
         "appGroup":"122"
      },
      {
         "category":"APP",
         "code":"MER-625-APP-1",
         "labelText":"Nepal Oil Corporation",
         "logoUrl":"noc.png",
         "appId":"MER-625-APP-1",
         "appGroup":"155"
      },
      {
         "category":"APP",
         "code":"MER-9988-APP-1",
         "labelText":"Janak Sikshya",
         "logoUrl":"Janak_Logo.png",
         "appId":"MER-9988-APP-1",
         "appGroup":"592"
      },
      {
         "category":"CATEGORY",
         "code":"BEEMA-SAMITI",
         "labelText":"Beema Samiti",
         "logoUrl":"beemaSamiti0.png"
      },
      {
         "category":"CATEGORY",
         "code":"CIT",
         "labelText":"CIT Payment",
         "logoUrl":"cit.png"
      }
   ]
}

```

 # 4.4 Form validation and Process Definition API

The response from this API will guide the customer journey to bill payment. The request body should 
be populated with the code obtained from the categories API and only of APP type is expected.
Additional end-point APIs could be provided inside the json response body. These APIs should be 
used to populate the options field in UI, validate certain information or obtain additional information to 
be shown in UI for customer verification. The complete batch details and transaction details object specified for NPI bill payment should be used for fields mapping. Also, whole object should be carried 
in the process sequence and as and when there are post URLs, the whole object should be posted.

**Post URL:** /billers/v2/appjourneydetails

**Request Parameter:**


<table>
  <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Format</th>
    <th>Length</th>
    <th>Description</th>
    <th>Presence</th>
  </tr>
  <tr>
    <td>1</td>
    <td>appCode</td>
    <td>String</td>
     <td></td>
    <td>Max 50</td>
    <td>Creditor code provided from the categories API.</td>
    <td>M</td>
  </tr>
</table>


**Response Parameter:**

<table>
  <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Format</th>
    <th>Length</th>
    <th>Description</th>
    <th>Presence</th>
  </tr>
  <tr>
    <td>1</td>
    <td>responseCode</td>
    <td>String</td>
     <td></td>
    <td>Max 10</td>
    <td>Response code for the request. 000 is success, any other is negative response.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>2</td>
    <td>responseMessage</td>
    <td>String</td>
     <td></td>
    <td>Max 400</td>
    <td>Human readable text for the provided response code.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>3</td>
    <td>totalProcessSeq</td>
    <td>Integer</td>
    <td></td>
    <td>-</td>
    <td>Total number of processes to be completed before final user confirmation.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Data</td>
    <td>Complex object</td>
      <td></td>
    <td>Array</td>
    <td>Object specification as in the following table.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>5</td>
    <td>addnBillPayParameter</td>
    <td>Complex object</td>
     <td></td>
    <td>Array</td>
    <td>Parameters to be considered on final response to payment confirmation from NPI, if any. These may contain invoice number, ticket number, etc.</td>
    <td>C</td>
  </tr>
</table>


**Data Object:**

<table>
  <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Format</th>
    <th>Length</th>
    <th>Description</th>
    <th>Presence</th>
  </tr>

<tr>
    <td>4.1</td>
    <td>processSeq</td>
    <td>Integer</td>
    <td>-</td>
    <td>-</td>
    <td>Sequence number for the process. Starts at 1.</td>
    <td>M</td>
  </tr>
 <tr>
    <td>4.2</td>
    <td>requiredFields</td>
    <td>Complex object array</td>
    <td>-</td>
    <td>-</td>
    <td>Required field details for this process sequence. Detailed in following table.</td>
    <td>M</td>
  </tr>
 <tr>
    <td>4.3</td>
    <td>processUrl</td>
    <td>String</td>
    <td>-</td>
    <td>-</td>
    <td>End point to be called after populating all the required fields and then the user submits. If the total process sequence is 1, it will be provided as ‘default’ which means to directly submit to normal lodge bill in NPI. Value of ‘none’ means capture the data and directly move to next process in the sequence without submitting to any URL</td>
    <td>M</td>
  </tr>
 <tr>
    <td>4.4</td>
    <td>responseFieldMapping</td>
    <td>Complex Array object</td>
    <td>-</td>
    <td>-</td>
    <td>Provides information about the additional fields to be populated from the response obtained. Detailed in following table.</td>
    <td>C</td>
  </tr>
</table>


**requiredFields object:**

<table>
 <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Format</th>
    <th>Length</th>
    <th>Description</th>
    <th>Presence</th>
  </tr>
<tr>
    <td>4.2.1</td>
    <td>Fieldname</td>
    <td>String</td>
     <td></td>
    <td>Max 100</td>
    <td>Reference field to be mapped to transaction details of bill payment.</td>
    <td>M</td>
  </tr>
<tr>
    <td>4.2.2</td>
    <td>fieldLabel</td>
    <td>String</td>
     <td></td>
    <td>Max 200</td>
    <td>Label to be displayed in UI for the corresponding field.</td>
    <td>M</td>
  </tr>
<tr>
    <td>4.2.3</td>
    <td>fieldType</td>
    <td>String</td>
     <td></td>
    <td>Max 50</td>
    <td>Defines the type of the field e.g. TEXTFIELD, DATEFIELD, DATETIMEFIELD, OPTIONFIELD, READONLYFIELD.</td>
    <td>M</td>
  </tr>
<tr>
    <td>4.2.4</td>
    <td>dataType</td>
    <td>Complex object</td>
    <td></td>
    <td>-</td>
    <td>Provides information about the type of input user should be allowed.</td>
    <td>O</td>
  </tr>
 <tr>
    <td>4.2.5</td>
    <td>addnUrl</td>
    <td>String</td>
    <td></td>
    <td>-</td>
    <td>Additional URL to fetch list to populate an option field. Complete batch and transaction object should be posted to the provided URL to get the required list. Specification of list has been provided in following table.</td>
    <td>O</td>
  </tr>
</table>


**dataType Object:**

<table>
  <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Format</th>
    <th>Length</th>
    <th>Description</th>
    <th>Presence</th>
  </tr>
  <tr>
    <td>4.2.4.1</td>
    <td>Type</td>
    <td>String</td>
    <td></td>
    <td>Max 30</td>
    <td>
       A - Alphabets only 

        N - Numbers only 

        C - Amount only (with two decimal point) 

        S - Space 

        U - Unicode characters 

        M - Mobile (+977-XXXXXXXXXX) 

        E - Email id 

        T - Telephone (+977-xx-xxxxxxx) 

        (Or any combination e.g. AN - Alpha Numeric only) 
        Validation should be followed accordingly.
</td>
    <td>M</td>
  </tr>
 <tr>
    <td>4.2.4.2</td>
    <td>addnAllowedChars</td>
    <td>String</td>
    <td></td>
    <td>Max 100</td>
    <td>Additional Special characters allowed.</td>
    <td>O</td>
  </tr>
  <tr>
    <td>4.2.4.3</td>
    <td>length</td>
    <td>Integer</td>
    <td></td>
    <td>-</td>
    <td>Maximum field length allowed for user input of relevant type.</td>
    <td>O</td>
  </tr>
  <tr>
    <td>4.2.4.4</td>
    <td>lengthType</td>
    <td>String</td>
    <td></td>
    <td>-</td>
    <td>F - fixed, value should have exact length. 
    V - variable, value should be up to the max length.
     By default V-variable.</td>
    <td>O</td>
  </tr>

</table>

**responseFieldMapping object:**
<table>
 <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Format</th>
    <th>Length</th>
    <th>Description</th>
    <th>Presence</th>
  </tr>
 <tr>
    <td>4.4.1</td>
    <td>Fieldname</td>
    <td>String</td>
    <td></td>
    <td>Max 100</td>
    <td>Field to be considered in the response if the response code is positive.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>4.4.2</td>
    <td>mapField</td>
    <td>String</td>
    <td></td>
    <td>Max 100</td>
    <td>Field of the original object that it needs to map to next lodge bill API call.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>4.4.3</td>
    <td>fieldLabel</td>
    <td>String</td>
    <td></td>
    <td>Max 200</td>
    <td>Label to be provided in the UI.</td>
    <td>M</td>
  </tr>
</table>


**addnBillPayParameter Object**

<table>
  <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Format</th>
    <th>Length</th>
    <th>Description</th>
    <th>Presence</th>
  </tr>
  <tr>
    <td>5.1</td>
    <td>fieldname</td>
    <td>String</td>
    <td></td>
    <td>Max 100</td>
    <td>Field to be considered in the response if the response code is positive.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>5.2</td>
    <td>mapField</td>
    <td>String</td>
    <td></td>
    <td>Max 100</td>
    <td>Field of the original object that it needs to map next lodge bill API call.</td>
    <td>M</td>
  </tr>
  <tr>
    <td>5.3</td>
    <td>fieldLabel</td>
    <td>String</td>
    <td></td>
    <td>Max 200</td>
    <td>Label to be provided in the UI.</td>
    <td>M</td>
  </tr>
</table>


**Creditor Additional Details**

<table>
  <tr>
    <th>#</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Format</th>
    <th>Length</th>
    <th>Description</th>
    <th>Presence</th>
  </tr>
  <tr>
    <td>6.1</td>
    <td>appId</td>
    <td>String</td>
    <td></td>
    <td>Max. 50</td>
    <td>Code associated to the ultimate creditor/merchant</td>
    <td>O</td>
  </tr>
  <tr>
    <td>6.2</td>
    <td>appGroup</td>
    <td>String</td>
    <td></td>
    <td>Max. 4</td>
    <td>Group code assigned to the creditor category</td>
    <td>O</td>
  </tr>
</table>




The below example is given for the traffic payment. Kindly follow the similar approach for all the services.

**Post URL: /billers/v2/appjourneydetails**

**Example 1**

**Sample Request:** 

```json
{
“appCode”:” GON-7-TVRS-1” 
}
```

 Note: appCode is the value received in the response of app details with category type APP.


**Sample Response**
 ```json
{
   "responseCode":"000",
   "responseMessage":"SUCCESS",
   "totalProcessSeq":1,
   "data":[
      {
         "processSeq":1,
         "requiredFields":[
            {
               "fieldName":"refId",
               "fieldLabel":"Chit Number",
               "fieldType":"TEXTFIELD",
               "dataType":{
                  "type":"ANS",
                  "length":30
               }
            },
            {
               "fieldName":"remarks",
               "fieldLabel":"Fiscal Year",
               "fieldType":"TEXTFIELD",
               "dataType":{
                  "type":"ANS",
                  "length":100
               }
            }
         ],
         "processUrl":"default",
         "responseFieldMapping":[
            {
               "fieldName":"amount",
               "mapField":"amount",
               "fieldLabel":"Transaction Amount"
            },
            {
               "fieldName":"refId",
               "mapField":"refId",
               "fieldLabel":"Chit Number"
            },
            {
               "fieldName":"remarks",
               "mapField":"freeCode1",
               "fieldLabel":"Fiscal Year"
            }
         ]
      }
   ]
}
```

Specification for the list object on additional url post has been provide as follows:


**Data object:**

**Example 2**

**Sample Request:**

```json

{
 "appCode":"KSK-NICA-APP-3"
}
 ```

**Sample Response**
```json
{
   "responseCode":"000",
   "responseMessage":"SUCCESS",
   "data":[
      {
         "fieldName":"freeCode1",
         "value":"209524",
         "mapField":"freeCode1",
         "fieldLabel":"PF Number"
      },
      {
              "fieldName":"refId",
              "value":"207510271088718",
              "mapField":"appId",
              "fieldLabel":"Service Provider"
            },
            {
               "fieldName":"freeText2",
               "mapField":"freeText2",
               "fieldLabel":"Principal Amount"
            },
            {
               "fieldName":"freeText3",
               "mapField":"freeText3",
               "fieldLabel":"Max Loan Amount"
            },
            {
               "fieldName":"freeText4",
               "mapField":"freeText4",
               "fieldLabel":"Interest Amount"
            },
            {
               "fieldName":"freeText5",
               "mapField":"freeText5",
               "fieldLabel":"Permanent Address"
            }
         ]
      }
   ],
   "appGroup":"122",
   "appId":"KSK-NICA-APP-3"
}
```

**OPTIONFIELD**


Here option is used for displaying the dropdown list of services as provided by the service provider. User 
is supposed to pass value on respective field – “OPTIONFIELD fieldname”. 

**POST URL: /billers/v1/epf/deposit/type**

**Sample Request** 
```json
{
 "appGroup": "122",
 "fieldName": "addenda3"
}
```
Note: appGroup to be taken from the response of appjourney and addenda3 is the field to be taken for 
mapping the loan (drop down) type.


**Sample Response**
```json
{
   "responseCode":"000",
   "responseMessage":"SUCCESS",
   "data":[
      {
         "id":1,
         "option":"Special Loan",
         "value":"2"
      },
      {
         "id":2,
         "option":"House Loan 57",
         "value":"7"
      },
      {
         "id":3,
         "option":"Education Loan",
         "value":"8"
      },
      {
         "id":4,
         "option":"Revolving Loan",
         "value":"10"
      },
      {
         "id":5,
         "option":"House Maintenance",
         "value":"11"
      }
   ]
}
```

**Process Sequence**

Process sequence implies a series of events that take place one after another in a particular order. It is a 
part of payment process that generate sequence of process while executing payment via connectIPS 
application. Basically, there are two types of process sequence mentioned in this document. Those 
sequence forms an ordered list of activities while performing any transaction namely – ProcessSeq 1 & 
ProcessSeq2.

ProcessSeq 1 refers to the sequence of payment process whereby user simply inputs required data and 
initiate payment. Based on the input provided, payment is executed and hence the customer is notified 
about the payment. This can be referred as direct merchant/creditor payment. Process Seq2 denotes the 
series of payment procedure whereby specific API needs to be called for each request to fetch required 
information/details of user. Only then the transaction is processed further and payment gets executed 
based on input provided by the user. 
For an example the url is defined in “processUrl” as below;


**POST URL: /billers/v1/epf/contributor/detail**

**Sample Request**

```json
{
 "instructionId": "EPF-12818780885-9",
 "endToEndId": "EPF payment",
 "amount": 0,
 "appId": "KSK-MPBL-APP-2",
 "refId": "207510271088718",
 "freeText1": "PURAN THAPA",
 "addenda3": "2",
 "addenda4": "9848096000"
}

```
**Sample Response**

```json

{
   "responseCode":"000",
   "responseMessage":"SUCCESS",
   "data":[
      {
         "fieldName":"freeCode1",
         "value":"209524",
         "mapField":"freeCode1",
         "fieldLabel":"PF Number"
      },
      {
         "fieldName":"refId",
         "value":"207510271088718",
         "mapField":"refId",
         "fieldLabel":"UCIN"
      },
      {
         "fieldName":"freeText4",
         "value":"73083.16",
         "mapField":"freeText4",
         "fieldLabel":"Interest Amount"
      },
      {
         "fieldName":"freeText3",
         "value":"981334.84",
         "mapField":"freeText3",
         "fieldLabel":"Max Loan Amount"
      },
      {
         "fieldName":"addenda4",
         "value":"9848096000",
         "mapField":"addenda4",
         "fieldLabel":"Mobile No."
      },
      {
         "fieldName":"freeText2",
         "value":"908251.6799999999",
         "mapField":"freeText2",
         "fieldLabel":"Principal Amount"
      },
      {
         "fieldName":"freeText1",
         "value":"PURAN THAPA",
         "mapField":"freeText1",
         "fieldLabel":"Contributors Name"
      },
      {
         "fieldName":"freeText5",
         "value":"Province-5 ,Banke ,Nepalganj Sub Metropolitan ,9 ,AANANDA NAGAR",
         "mapField":"freeText5",
         "fieldLabel":"Address"
      },
      {
         "fieldName":"addenda3",
         "value":"2",
         "mapField":"addenda3",
         "fieldLabel":"Deposite Type"
      }
   ]
}


```