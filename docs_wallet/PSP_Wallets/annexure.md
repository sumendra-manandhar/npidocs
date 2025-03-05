---
sidebar_position: 3
---

 # 3.Annexure
 
**List of Response codes for both customer validation and Payment Request**

<table border="1">
  <thead>
    <tr>
      <th>Reason Code</th>
      <th>Reason Description</th>
      <th>Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>000</td>
      <td>User Validation and Payment Confirmation Successful</td>
      <td></td>
    </tr>
    <tr>
      <td>T001</td>
      <td>Invalid credentials</td>
      <td></td>
    </tr>
    <tr>
      <td>T002</td>
      <td>Technical validation Failed: Invalid input request</td>
      <td></td>
    </tr>
    <tr>
      <td>T003</td>
      <td>Invalid message signature</td>
      <td></td>
    </tr>
    <tr>
      <td>T004</td>
      <td>Generic Technical Error:&lt;Msg&gt;</td>
      <td>Any technical errors</td>
    </tr>
    <tr>
      <td>B001</td>
      <td>Business validation failed: User not found</td>
      <td></td>
    </tr>
    <tr>
      <td>B002</td>
      <td>Business validation Failed: Transaction amount limit or counts limit exceeded.</td>
      <td></td>
    </tr>
    <tr>
      <td>B003</td>
      <td>Payment (Load Wallet) not allowed.</td>
      <td></td>
    </tr>
    <tr>
      <td>B004</td>
      <td>Transaction amount/count limit not allowed (Min/Max)</td>
      <td></td>
    </tr>
    <tr>
      <td>B005</td>
      <td>Cross-Border Payments not allowed</td>
      <td></td>
    </tr>
    </tbody>
  </table>
  <table>
  <tbody>
  <tr>
  <th colspan = '3'><strong>Specific to Payment Confirmation</strong></th></tr>
    <tr>
      <td>E001</td>
      <td>Duplicate Payment Request</td>
      <td>In case of payment confirmation retry, if the payment is already successful. OR same payment confirmation request is received multiple times.</td>
    </tr>
    <tr>
      <td>ENTR</td>
      <td>Payment confirmation in progress</td>
      <td>In case of status ENTR, the payment confirmation will be retried up to the configured limit. Thereafter, the transaction is considered as failed and reversed to the customer account.</td>
    </tr>
  </tbody>
</table>





