---
sidebar_position: 4
---
# 4. Payment Validation
REST based API has been provided to validate the status of a transaction. The API requires a basic 
authentication process which is completed using the provided app id as user name along with password. 
JSON request must contain merchant id, app id, reference id, transaction amount and token. Reference Id 
is the TXNID field value supplied during the payment request as described in previous sections. Token is 
basically a hash value signed with the digital certificate of the creditor. 
 
**URL:** https://{base_url}/connectipswebws/api/creditor/validatetxn
 


**Basic Authentication:**
<pre><code parentName="pre"{...{"className":"language-json"}}>
{' User Id: <Merchant’s provided App Id> Password: < Merchant’s provided Password>'}</code></pre>

 
**Example:** 

<pre><code parentName="pre"{...{"className":"language-json"}}>
{' User Id: MER-550-APP-1 Password: <Password provided in email>'}</code></pre>
 
 
**Token String Format:** 
 
<pre><code parentName="pre"{...{"className":"language-json"}}>
{'MERCHANTID=<MerchantId>,APPID=<AppId>,REFERENCEID=<TXNIDintheRequest>,TXNAMT=<Transaction Amount>'}</code></pre>

 
**Example:** 
**Text to be signature:** 
 
<pre><code parentName="pre"{...{"className":"language-json"}}>
{'MERCHANTID=550,APPID=MER-550-APP-1,REFERENCEID=txn-123,TXNAMT=500 '}</code></pre>


**Signature text:** 
<pre><code parentName="pre"{...{"className":"language-json"}}>
{'T74OgCzlK1+R0oITlYLTB23gR/4kSeLC1c620+ndvtPEAEg9x9N+fAqQURy0oJG4shGp9tsbaewDp/OuN7dMrief2Ibr9r0zT3THDpHdvws3qvXiZ67J2pZ4OV1AMe0uWQwAppLIUFml+HVqHW7ZBiwZhgE/dCFLlBjIXRGZBvI='}</code></pre>




**Request:**
```json
{
  "merchantId": 550,
  "appId": "MER-550-APP-1",
  "referenceId": "txn-123",
  "txnAmt": 500,
  "token": "T74OgCzlK1+R0oITlYLTB23gR/4kSeLC1c620+ndvtPEAEg9x9N+fAqQURy0oJG4shGp9tsbaewDp/OuN7dMrief2Ibr9r0zT3THDpHdvws3qvXiZ67J2pZ4OV1AMe0uWQwAppLIUFml+HVqHW7ZBiwZhgE/dCFLlBjIXRGZBvI="
}
```
 
**Response:** 
```json
{
   "merchantId":550,
   "appId":"MER-550-APP-1",
   "referenceId":"txn-123",
   "txnAmt":"500",
   "token":null,
   "status":"SUCCESS",
   "statusDesc":"TRANSACTION SUCESSFULL"
}
```
