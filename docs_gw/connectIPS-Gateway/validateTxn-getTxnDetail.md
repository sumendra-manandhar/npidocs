---
sidebar_position: 6
---
# 6. ValidateTxn  And GetTxnDetail Response List


<table>
     <thead>
       <tr>
         <th>Field Name </th>
         <th>Data Type</th>
         <th>Length </th>
       </tr>
     </thead>
     <tbody>
    <tr>
      <td>SUCCESS</td>
      <td>TRANSACTION 
SUCCESSFUL</td>
      <td>When a transaction is successful.</td>
       </tr>
     <tr>
      <td>FAILED</td> 
      <td>TRANSACTION 
UNSUCCESSFUL</td>
      <td>When a transaction fails i.e., Debit or 
Credit failed. </td>
      </tr>
      <tr>
      <td>ERROR</td> 
      <td>TRANSACTION NOT FOUND </td>
      <td>When a transaction has not been 
performed by the customer and the 
validatetxn/gettxn details API is 
called.</td>
     </tr>
      <tr>
      <td>ERROR</td>
      <td>TRANSACTION INCOMPLETE </td>
      <td>When the customer leaves the 
transaction page without entering 
OTP and the validatetxn/gettxn details 
API is called.</td>
     </tr>
      </tbody>
</table>

