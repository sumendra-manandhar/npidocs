---
sidebar_position: 5
---

# 5. Lodge Bill Response Parameter

Below is the list of lodge bill response parameters (service wise) to be considered during the customer 
journey and to be displayed for the user confirmation.


**1.Government Payments**

<table>
  <tr>
    <th>S.N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>appTxnId</td>
    <td>String</td>
    <td>Voucher number</td>
  </tr>
  <tr>
    <td>2</td>
    <td>endToEndId</td>
    <td>String</td>
    <td>Voucher number with rcAgency Code</td>
  </tr>
  <tr>
    <td>3</td>
    <td>particulars</td>
    <td>String</td>
    <td>Customer name</td>
  </tr>
  <tr>
    <td>4</td>
    <td>remarks</td>
    <td>String</td>
    <td>rcAgencyEDesc</td>
  </tr>
  <tr>
    <td>5</td>
    <td>appId</td>
    <td>String</td>
    <td>Based on bank code provided by system</td>
  </tr>
</table>


**2.Department of Custom.**

<table>
  <tr>
    <th>S.N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>refId</td>
    <td>String</td>
    <td>Registration number</td>
  </tr>
  <tr>
    <td>2</td>
    <td>freeText1</td>
    <td>String</td>
    <td>Serial Number</td>
  </tr>
  <tr>
    <td>3</td>
    <td>addenda3</td>
    <td>String</td>
    <td>Registration Year</td>
  </tr>
  <tr>
    <td>4</td>
    <td>freeText2</td>
    <td>String</td>
    <td>Company Code</td>
  </tr>
  <tr>
    <td>5</td>
    <td>freeCode1</td>
    <td>String</td>
    <td>Instance Id</td>
  </tr>
  <tr>
    <td>6</td>
    <td>freeCode2</td>
    <td>String</td>
    <td>Post Entry Id</td>
  </tr>
</table>

**3.Traffic Fine Payment**
<table>
  <tr>
    <th>S.N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>refId</td>
    <td>String</td>
    <td>Chit number</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Particulars</td>
    <td>String</td>
    <td>Violator Full Name</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Remarks</td>
    <td>String</td>
    <td>Violation Description</td>
  </tr>
  <tr>
    <td>4</td>
    <td>appTxnId</td>
    <td>String</td>
    <td>EBP Number</td>
  </tr>
  <tr>
    <td>5</td>
    <td>addenda3</td>
    <td>String</td>
    <td>Vehicle category</td>
  </tr>
  <tr>
    <td>6</td>
    <td>addenda4</td>
    <td>String</td>
    <td>Voucher number</td>
  </tr>
</table>

**4.Social security payment**

<table>
  <tr>
    <th>S.N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>freeText1</td>
    <td>String</td>
    <td>Employer id in SSF System</td>
  </tr>
  <tr>
    <td>2</td>
    <td>addenda3</td>
    <td>String</td>
    <td>Employer Name in SSF System</td>
  </tr>
  <tr>
    <td>3</td>
    <td>batchAmount</td>
    <td>BigDecimal</td>
    <td>Amount retrieved from SSF to make payment</td>
  </tr>
  <tr>
    <td>4</td>
    <td>amount</td>
    <td>BigDecimal</td>
    <td>Amount retrieved from SSF to make payment</td>
  </tr>
</table>

**5.CIT Loan/Pension Payment**




It will be available in updated document.

**6. EPF Loan payment**

<table>
  <tr>
    <th>S. N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>particulars</td>
    <td>String</td>
    <td>End to end id</td>
  </tr>
  <tr>
    <td>2</td>
    <td>remarks</td>
    <td>String</td>
    <td>Instruction id</td>
  </tr>
  <tr>
    <td>3</td>
    <td>freeText2</td>
    <td>String</td>
    <td>Ucin number</td>
  </tr>
  <tr>
    <td>4</td>
    <td>appId</td>
    <td>String</td>
    <td>appId based on bank and account</td>
  </tr>
  <tr>
    <td>5</td>
    <td>freeCode2</td>
    <td>String</td>
    <td>Batch id</td>
  </tr>
</table>

**7. VRS Payment**

<table>
  <tr>
    <th>S. N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>addenda4</td>
    <td>String</td>
    <td>fiscal year "-" requested date</td>
  </tr>
  <tr>
    <td>2</td>
    <td>freeText4</td>
    <td>String</td>
    <td>Transaction token from VRS</td>
  </tr>
  <tr>
    <td>3</td>
    <td>freeText5</td>
    <td>String</td>
    <td>EPB numbers</td>
  </tr>
  <tr>
    <td>4</td>
    <td>freeText6</td>
    <td>String</td>
    <td>Voucher number</td>
  </tr>
  <tr>
    <td>5</td>
    <td>freeText7</td>
    <td>String</td>
    <td>String format response of Object vehicleDetail and voucherDetail</td>
  </tr>
  <tr>
    <td>6</td>
    <td>appTxnId</td>
    <td>String</td>
    <td>Voucher number</td>
  </tr>
  <tr>
    <td>7</td>
    <td>batchAmount</td>
    <td>BigDecimal</td>
    <td>Total amount to pay</td>
  </tr>
  <tr>
    <td>8</td>
    <td>amount</td>
    <td>BigDecimal</td>
    <td>Total amount to pay</td>
  </tr>
</table>

**8. Insurance Payment**

<table>
  <tr>
    <th>S.N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>freeText1</td>
    <td>String</td>
    <td>Address</td>
  </tr>
  <tr>
    <td>2</td>
    <td>freeText2</td>
    <td>String</td>
    <td>Product name or insurance details</td>
  </tr>
  <tr>
    <td>3</td>
    <td>particulars</td>
    <td>String</td>
    <td>Customer name</td>
  </tr>
  <tr>
    <td>4</td>
    <td>addenda1</td>
    <td>BigDecimal</td>
    <td>Premium amount</td>
  </tr>
  <tr>
    <td>5</td>
    <td>addenda3</td>
    <td>String</td>
    <td>Insurance type</td>
  </tr>
  <tr>
    <td>6</td>
    <td>addenda4</td>
    <td>String</td>
    <td>Transaction id from third party API</td>
  </tr>
  <tr>
    <td>7</td>
    <td>freeCode1</td>
    <td>String</td>
    <td>Fine amount: Citizen life sum Insured: Premier</td>
  </tr>
  <tr>
    <td>8</td>
    <td>freeCode2</td>
    <td>String</td>
    <td>Premium amount + fine amount</td>
  </tr>
  <tr>
    <td>9</td>
    <td>batchAmount</td>
    <td>BigDecimal</td>
    <td>Final net amount from Insurance system</td>
  </tr>
  <tr>
    <td>10</td>
    <td>amount</td>
    <td>BigDecimal</td>
    <td>Final net amount from Insurance system</td>
  </tr>
</table>

**9. School/College**

<table>
  <tr>
    <th>S.N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>addenda4</td>
    <td>String</td>
    <td>PlayGroup</td>
  </tr>
  <tr>
    <td>2</td>
    <td>freeText2</td>
    <td>String</td>
    <td>Program/Faculty</td>
  </tr>
  <tr>
    <td>3</td>
    <td>remarks</td>
    <td>String</td>
    <td>Mobile Number</td>
  </tr>
  <tr>
    <td>4</td>
    <td>particulars</td>
    <td>BigDecimal</td>
    <td>Student Name</td>
  </tr>
</table>

**10. Broker Payment**

<table>
  <tr>
    <th>S.N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>refId</td>
    <td>String</td>
    <td>Customer/Client mobile number</td>
  </tr>
  <tr>
    <td>2</td>
    <td>particulars</td>
    <td>String</td>
    <td>Customer/Client registered name</td>
  </tr>
  <tr>
    <td>3</td>
    <td>remarks</td>
    <td>String</td>
    <td>Customer/Client id</td>
  </tr>
</table>

**11. Credit Card Payment**

<table>
  <tr>
    <th>S. N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>refId</td>
    <td>String</td>
    <td>16</td>
  </tr>
  <tr>
    <td>2</td>
    <td>particulars</td>
    <td>String</td>
    <td>100</td>
  </tr>
</table>


**12. DOFE (Baidesik Rojgar) Payment**

<table>
  <tr>
    <th>S. N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Particulars</td>
    <td>String</td>
    <td>Name</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Remarks</td>
    <td>String</td>
    <td>Address</td>
  </tr>
  <tr>
    <td>3</td>
    <td>freeText1</td>
    <td>String</td>
    <td>Employee Type</td>
  </tr>
  <tr>
    <td>4</td>
    <td>freeText2</td>
    <td>String</td>
    <td>Individual work detail id</td>
  </tr>
  <tr>
    <td>5</td>
    <td>addenda3</td>
    <td>String</td>
    <td>Company Name</td>
  </tr>
  <tr>
    <td>6</td>
    <td>addenda4</td>
    <td>String</td>
    <td>Country</td>
  </tr>
  <tr>
    <td>7</td>
    <td>freeCode2</td>
    <td>String</td>
    <td>Date of birth</td>
  </tr>
</table>

**13. Travel and Tours**

<table>
  <tr>
    <th>S.N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>refId</td>
    <td>String</td>
    <td>Mobile number entered</td>
  </tr>
  <tr>
    <td>2</td>
    <td>remarks</td>
    <td>String</td>
    <td>Invoice number / id</td>
  </tr>
  <tr>
    <td>3</td>
    <td>particulars</td>
    <td>BigDecimal</td>
    <td>Customer name</td>
  </tr>
</table>

**14. Bonus Tax share**

<table>
  <tr>
    <th>S.N</th>
    <th>Parameter Name</th>
    <th>Data Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>freeText1</td>
    <td>String</td>
    <td>Address</td>
  </tr>
  <tr>
    <td>2</td>
    <td>freeText2</td>
    <td>String</td>
    <td>Total kitta of share</td>
  </tr>
  <tr>
    <td>3</td>
    <td>particulars</td>
    <td>String</td>
    <td>Customer name</td>
  </tr>
  <tr>
    <td>4</td>
    <td>addenda3</td>
    <td>String</td>
    <td>Actual bonus share</td>
  </tr>
  <tr>
    <td>5</td>
    <td>addenda4</td>
    <td>String</td>
    <td>Issue bonus share</td>
  </tr>
  <tr>
    <td>6</td>
    <td>batchAmount</td>
    <td>BigDecimal</td>
    <td>Amount retrieved from Bonus payment system</td>
  </tr>
  <tr>
    <td>7</td>
    <td>amount</td>
    <td>BigDecimal</td>
    <td>Amount retrieved from Bonus payment system</td>
  </tr>
</table>


# Transaction Reporting and Other APIs.
These are related to query or reporting of transaction, settlement and extracting other master 
information. The standard APIs available in NPI for normal transactions are to be used and applicable 
for reporting of the service payment transaction and for other query. Refer to NPI Specification 
document for further details.


