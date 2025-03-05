---
sidebar_position: 9
---

# 9. Annexure

***Return Reason and Response Codes***

Return reasons expected by the system from Acquirer in QR validation and Payment Confirmation
response are as follows:

<table>
  <tr>
    <th>Reason Code</th>
    <th>Reason Description</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>000</td>
    <td>QR Validation Successful</td>
    <td>QR validation success response. All business and technical validation is successful from acquirer in validation request. Could proceed with payment.</td>
  </tr>
  <tr>
    <td>000</td>
    <td>Payment Transaction Successful</td>
    <td>Transaction is accepted/successful and merchant will be notified as successful.</td>
  </tr>
  <tr>
    <td>B101</td>
    <td>Invalid Amount For the Bill Number</td>
    <td>Amount in the payment confirmation request is not equal to bill amount.</td>
  </tr>
  <tr>
    <td>B102</td>
    <td>Invalid Merchant</td>
    <td>Merchant doesn't exist in the system.</td>
  </tr>
  <tr>
    <td>B103</td>
    <td>Merchant Inactive</td>
    <td>Merchant is no longer active in the system.</td>
  </tr>
  <tr>
    <td>B104</td>
    <td>Merchant Transaction Amount Exceeded</td>
    <td>Merchant cannot accept the payment amount.</td>
  </tr>
  <tr>
    <td>B105</td>
    <td>Merchant Transaction Count Exceeded</td>
    <td>Merchant allowed transaction count exceeded.</td>
  </tr>
  <tr>
    <td>B106</td>
    <td>Invalid Acquirer</td>
    <td>Acquirer does not exist.</td>
  </tr>
  <tr>
    <td>B199</td>
    <td>Generic Business Error:&lt;Msg&gt;</td>
    <td>Any other business validation failed at acquirer or acquirer network.</td>
  </tr>
  <tr>
    <td>T101</td>
    <td>Invalid Message Token</td>
    <td>Signature token in payment confirmation is mis-match.</td>
  </tr>
  <tr>
    <td>T102</td>
    <td>Time Out</td>
    <td>Time out during communication with merchant/system. Merchant transaction will be marked as failed.</td>
  </tr>
  <tr>
    <td>T199</td>
    <td>Generic Technical Error:&lt;Msg&gt;</td>
    <td>Any other technical error at acquirer or acquirer network. Merchant transaction will be marked as failed.</td>
  </tr>
</table>



***NEPALPAY QR Return reasons***


<table>
  <tr>
    <th>Reason Code</th>
    <th>Reason Description</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>000</td>
    <td>SUCCESS</td>
    <td>Payment or Validation is successful.</td>
  </tr>
  <tr>
    <td>E001</td>
    <td>INVALID IP ADDRESS</td>
    <td>IP address from where the NPI API is accessed is not whitelisted.</td>
  </tr>
  <tr>
    <td>E007</td>
    <td>TECHNICAL VALIDATION FAILED</td>
    <td>Technically invalid request to the API. Please check the class field error for further details.</td>
  </tr>
  <tr>
    <td>E003</td>
    <td>INVALID TOKEN</td>
    <td>Digital signature in the request is not matching.</td>
  </tr>
  <tr>
    <td>E004</td>
    <td>INVALID ACCOUNT</td>
    <td>Debit account provided in the request is not whitelisted.</td>
  </tr>
  <tr>
    <td>E019</td>
    <td>INVALID DEBTOR AGENT</td>
    <td>Debtor agent provided in the request is not valid.</td>
  </tr>
  <tr>
    <td>E099</td>
    <td>DUPLICATE REQUEST</td>
    <td>Duplicate instruction id is used.</td>
  </tr>
  <tr>
    <td>E999</td>
    <td>ERROR</td>
    <td>Generic Error. Need to verify before initiating new transaction.</td>
  </tr>
  <tr>
    <td>B001</td>
    <td>ACCOUNT DEBIT TIME OUT</td>
    <td>Time out while debiting the account.</td>
  </tr>
  <tr>
    <td>B002</td>
    <td>ACCOUNT DEBIT FAILED</td>
    <td>Couldn't debit the account.</td>
  </tr>
  <tr>
    <td>B999</td>
    <td>INVESTIGATION REQUIRED</td>
    <td>Transaction status needs manual investigation. Could be refunded only after proper resolution.</td>
  </tr>
</table>

***Refund Return Reasons***

<table>
 <tr>
    <th colspan='3'>NEPALPAY QR Cancellation/Refund Reason Codes(Could be extended in future)</th>
    
  </tr>
  <tr>
    <th>S.N.</th>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>R101</td>
    <td>Refund/cancellation of duplicate Transaction</td>
  </tr>
  <tr>
    <td>2</td>
    <td>R102</td>
    <td>Ordered Item out of stock</td>
  </tr>
  <tr>
    <td>3</td>
    <td>R103</td>
    <td>Unable to deliver ordered item/different item than ordered one</td>
  </tr>
  <tr>
    <td>4</td>
    <td>R104</td>
    <td>Invalid amount</td>
  </tr>
  <tr>
    <td>5</td>
    <td>R105</td>
    <td>Dispute transaction/settlement</td>
  </tr>
  <tr>
    <td>6</td>
    <td>R106</td>
    <td>Purchase item damage or defective</td>
  </tr>
  <tr>
    <td>7</td>
    <td>R107</td>
    <td>Fraudulent purchase</td>
  </tr>
  <tr>
    <td>8</td>
    <td>R199</td>
    <td>Other Reason &lt;Message&gt;</td>
  </tr>
</table>

