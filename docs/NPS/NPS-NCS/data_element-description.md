---
sidebar_position: 6
---


# 6. Data Element Description

## 6.1 Convention

This chapter defines each of the data element included in the bitmaps currently supported by NPS-NCS. The conventions that are used to represent the data elements are defined first, followed by the fields themselves. 

###  6.1.1 Field Type Attribute 
The following table defines how the data elements are interpreted in standard format of field attributes: 

<table border="1">
  <tr>
    <th>Notation</th>
    <th>Interpretation</th>
  </tr>
  <tr>
    <td>a</td>
    <td>Alphabetic characters only (includes blanks)</td>
  </tr>
  <tr>
    <td>b</td>
    <td>Binary data</td>
  </tr>
  <tr>
    <td>n</td>
    <td>Numeric characters only (0,1,2,3,4,5,6,7,8,9)</td>
  </tr>
  <tr>
    <td>s</td>
    <td>Special characters only</td>
  </tr>
  <tr>
    <td>an</td>
    <td>Alpha and numeric characters only</td>
  </tr>
  <tr>
    <td>cn</td>
    <td>Compressed numeric code, namely BCD code</td>
  </tr>
  <tr>
    <td>as</td>
    <td>Alpha and special characters only</td>
  </tr>
  <tr>
    <td>ns</td>
    <td>Numeric and special characters only</td>
  </tr>
  <tr>
    <td>ans</td>
    <td>Alphanumeric and special characters only</td>
  </tr>
  <tr>
    <td>z</td>
    <td>Track data</td>
  </tr>
  <tr>
    <td>x</td>
    <td>The character 'C' or 'D' to indicate Credit or Debit value</td>
  </tr>
</table>


 Table 47: Abbreviation used in data element description

 ###  6.1.2 Field Length

  Each data element is described in a standard field length format, the following table define how field length is to be interpreted:

  <table border="1">
  <tr>
    <th>Field Length</th>
    <th>Interpretation</th>
  </tr>
  <tr>
    <td>-digit(s)</td>
    <td>Fixed length in number of positions. For example, n-10 indicates a 10 digit numeric field.</td>
  </tr>
  <tr>
    <td>...digit(s)</td>
    <td>Variable length in number of positions. For example, an...7 indicates a variable alphanumeric field with up to 7 positions.</td>
  </tr>
  <tr>
    <td>LLVAR</td>
    <td>Variable length (LLVAR) fields are composed of a length indicator and the data. The length indicator refers to the number of bytes contained in the data portion of the field whose length shall be less than 100. 

    Example (LLVAR):Length 

    Indicator = 07 

    Data Field: PAYMENT 
    
</td>
  </tr>
  <tr>
    <td>LLLVAR</td>
    <td>Variable length (LLLVAR) fields are composed of a length indicator and the data. The length indicator refers to the number of bytes contained in the data portion of the field whose length shall be less than 1000.

    Example (LLLVAR):Length
    
    Indicator = 013
    
    Data Field: SPECIFICATION 
</td>
  </tr>
</table>


Table 48: Abbreviation used in data element length

###  6.1.3 Date and Time 

Data elements defining date and time are described in a standard format, the following table defines how date and time are to be interpreted:

<table border="1">
  <tr>
    <th>Notation</th>
    <th>Interpretation</th>
  </tr>
  <tr>
    <td>YY</td>
    <td>Year (two digits, 00 – 99)</td>
  </tr>
  <tr>
    <td>MM</td>
    <td>Month (two digits, 01 – 12)</td>
  </tr>
  <tr>
    <td>DD</td>
    <td>Day (two digits, 01 – 31)</td>
  </tr>
  <tr>
    <td>hh</td>
    <td>Hour (two digits, 00 – 23)</td>
  </tr>
  <tr>
    <td>mm</td>
    <td>Minute (two digits, 00 – 59)</td>
  </tr>
  <tr>
    <td>ss</td>
    <td>Second (two digits, 00 – 59)</td>
  </tr>
</table>



Table 49: Abbreviation used for date and time

### 6.1.4 Data Representation


•	All message data fields are aligned on a byte boundary.

•	All data is encoded either in EBCDIC or ASCII display representation. The choice of character set depends upon the configuration.

•	All fields with data type "b" (binary) are encoded as the display representation of the hexadecimal value. For example, if the field contains the decimal number 959, the application would first convert it into the equivalent hexadecimal representation, 3BF, and then convert that number into the display representation.

•	All lengths given indicate the logical number of positions required. For example, a field specified as n-12 indicates that 12 digits are required. The physical length of the field is inferred from the encoding. Using the above example, the physical length of a field of type n-12 would be 12.

•	All numeric, type n, fields are right-justified with leading zeros.

•	All binary, type b, fields are right-justified with leading zeros.

•	All other field types are left-justified with trailing blanks. This only applies if the field is of fixed length. 

•	Where a field expresses an amount, it will be represented without a decimal point. For example, the amount 23.47 would be represented as 2347. The decimal places are implied.

•	Where a field expresses a rate (i.e. a conversion rate), the rate is expressed as xnnnnnnn, where x denotes decimal positions from the right. For example, the number 67123890 is interpreted as 7.123890.



## 6.2 Data Elements Description Components

Following parameters are covered while describing the data elements of NPS-NCS Switching Interface Specification:

<table border="1">
  <tr>
    <th>Components</th>
    <th>Information Type</th>
  </tr>
  <tr>
    <td>Type</td>
    <td>Type of data element with field length</td>
  </tr>
  <tr>
    <td>Format</td>
    <td>Format of data element</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>Description of data element</td>
  </tr>
  <tr>
    <td>Echo</td>
    <td>Requirement of echoing the data element in response</td>
  </tr>
  <tr>
    <td>Validation</td>
    <td>Rules to validate the data element</td>
  </tr>
  <tr>
    <td>Presence</td>
    <td>Participation of data element in messages</td>
  </tr>
</table>


Table 50: Data Elements Description Components


## 6.3  Detailed Descriptions of Data Elements

 ### 6.3.1 DE - 2 Primary Account Number (PAN)

 
<table>
  <tr>
    <th colspan="2">DE- Primary Account Number (PAN)</th>
    
  </tr>
  <tr>
    <td>Type</td>
    <td>n..19</td>
  </tr>
  <tr>
    <td>Format</td>
    <td>LLVAR</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>This is the Card Number or Primary Account Number of up to 19 digits encoded on Track 1 & Track 2 of the magnetic stripe and tag 5A in EMV data.</td>
  </tr>
  <tr>
    <td>Echo</td>
    <td>It should be echoed in response.</td>
  </tr>
  <tr>
    <td>Validation</td>
    <td>The length of PAN should be between 14 – 19 digits.</td>
  </tr>
  <tr>
    <td>Presence</td>
    <td>The switch requires this field in all 01xx, 02xx, 03xx, 04xx messages.</td>
  </tr>
</table>


### 6.3.2 DE - 3 Processing Code (Pcode)

<table>
<tr>
    <th colspan="2">DE- 3 Processing Code (Pcode)</th>
    
  </tr>
<tr>
<td>Type:</td>
<td>n-6</td>
</tr>
<tr>
<td>Format:</td>
<td>Fixed</td>
</tr>
<tr>
<td rowspan="5">Description:</td>
<td>This field describes the type of a Card Transaction along with the affected account. The Processing Code is used with the Message type to define the type of Card Transaction sent by the Card Acceptor. This element is composed of 3 subfields:


<table border="1">
  <tr>
    <th>Position</th>
    <th>Length</th>
    <th>Description</th>
    </tr>
    <tr>
    <td>1-2</td>
    <td>2</td>
    <td>Describes a specific Card Transaction </td>
    </tr>
    <tr>
    <td>3-4</td>
    <td>2</td>
    <td>“From” Account for Card Transactions</td>
    </tr>
    <tr>
    <td>5-6</td>
    <td>2</td>
    <td>“To” Account for transfers</td>
    </tr>
    
</table>

</td>
</tr>

<table>
  <thead>
    <tr>
      <th>Position 1 & 2</th>
      <th>Transaction Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00</td>
      <td>Purchase (of goods or services)</td>
    </tr>
    <tr>
      <td></td>
      <td>Purchase with Gratuity or Tip</td>
    </tr>
    <tr>
      <td></td>
      <td>Purchase Cancellation / VOID</td>
    </tr>
    <tr>
      <td>01</td>
      <td>Cash Withdrawal/Cash Advance</td>
    </tr>
    <tr>
      <td>03</td>
      <td>Preauthorization</td>
    </tr>
    <tr>
      <td></td>
      <td>Preauthorization Cancellation</td>
    </tr>
    <tr>
      <td></td>
      <td>Preauthorization Completion</td>
    </tr>
    <tr>
      <td>09</td>
      <td>Purchase with Cashback</td>
    </tr>
    <tr>
      <td></td>
      <td>Purchase with Cashback Cancellation</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Recurring Billing (Recurring Payments) – goods or services</td>
    </tr>
    <tr>
      <td>15</td>
      <td>EMI/Installment Payment – goods or services</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Account Verification</td>
    </tr>
    <tr>
      <td>20</td>
      <td>Refund/ Merchandise Return</td>
    </tr>
    <tr>
      <td>21</td>
      <td>Deposit</td>
    </tr>
    <tr>
      <td>22</td>
      <td>Credit Adjustment</td>
    </tr>
    <tr>
      <td>26</td>
      <td>Original Credit Transaction (OCT)</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Load Transaction</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Fund Transfer Credit</td>
    </tr>
    <tr>
      <td>30</td>
      <td>Balance Inquiry</td>
    </tr>
    <tr>
      <td>36</td>
      <td>Cheque Book Request</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Statement Request</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Mini Statement</td>
    </tr>
    <tr>
      <td>40</td>
      <td>Fund Transfer Debit</td>
    </tr>
    <tr>
      <td>90</td>
      <td>Utility Payment</td>
    </tr>
    <tr>
      <td>98</td>
      <td>PIN Change</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Position 3 & 4</th>
      <th>From Account Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00</td>
      <td>Default Account</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Saving Account</td>
    </tr>
    <tr>
      <td>20</td>
      <td>Checking Account</td>
    </tr>
    <tr>
      <td>30</td>
      <td>Credit Account</td>
    </tr>
  </tbody>
</table>


<table>
  <thead>
    <tr>
      <th>Position 5 & 6</th>
      <th>To Account Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00</td>
      <td>Default Account</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Saving Account</td>
    </tr>
    <tr>
      <td>20</td>
      <td>Checking Account</td>
    </tr>
    <tr>
      <td>30</td>
      <td>Credit Account</td>
    </tr>
  </tbody>
</table>
<table>
<tr>
    <td>Echo</td>
    <td>It should be echoed in response.</td>
  </tr>
  <tr>
    <td>Validation</td>
    <td>Processing Code should be from above list.</td>
  </tr>
  <tr>
    <td>Presence</td>
    <td>This field is required in all 01xx, 02xx and 04xx messages.</td>
  </tr>
</table>

</table>




### 6.3.3 DE - 4 Amount, Transaction

 <table border="1">
  <tr>
    <th colspan="2">DE - 4 Amount Transaction</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-12</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field is the Card Transaction amount requested by the Cardholder in the local currency of the Card Acceptor. The value is right justified with leading zeros.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should be echoed in response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>The amount field is zero filled and right justified. The decimal places are implied. Example, 000000150070 represents amount 1500.70.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>The switch requires this field in all messages except network management and file update messages. This field should be zero-filled for Account Verification transactions, Balance Inquiry transactions, Mini Statement transactions, and PIN Change transactions.</td>
  </tr>
</table>




### 6.3.4 DE - 5 Amount, Settlement

<table border="1">
  <tr>
    <th colspan="2">DE - 5 Amount Settlement</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-12</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>Settlement Amount is the Card Transaction amount in the Issuer’s currency. This field represents the amount for which the transaction will settle in the settlement currency. If the fees are to be applied by the switch, this field will include the fees.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should be echoed in response if this presents in request message.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>The amount field is zero filled and right justified. The decimal places are implied. Example, 000000150070 represents amount 1500.70. Whenever Field 5 – Amount, Settlement is present, Field 9 - Conversion Rate, Settlement, Field 16 - Conversion Date, and Field 50 – Currency, Settlement Code must also be present within a Message.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>The switch requires this field in the messages when field 50 is present. If the Card Transaction currency and Issuer’s currency are the same, this field will not be populated.</td>
  </tr>
</table>


### 6.3.5 DE - 6 Amount, Cardholder Billing

<table border="1">
  <tr>
    <th colspan="2">DE - 6 Amount Cardholder Billing</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-12</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field represents the amount billed to the cardholder in the currency of the cardholder's account, exclusive of cardholder billing fees. It is the representation of the amount converted from the currency of the acquiring country to the cardholder's billing currency. The rate used to make the conversion is taken from data element 10.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should be echoed in response if this presents in request message.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>The amount field is zero filled and right justified. The decimal places are implied. Example, 000000150070 represents amount 1500.70.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>The switch requires this field in the messages when field 10 and field 51 are present.</td>
  </tr>
</table>


### 6.3.6 DE - 7 Transmission Date and Time

<table border="1">
  <tr>
    <th colspan="2">DE - 7 Transmission Date and Time</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-10</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed, MMDDhhmmss</td>
  </tr>
  <tr>
    <td>Formatted as below:</td>
    <td>
      <table border="1">
        <tr>
          <th>Position</th>
          <th>Length</th>
          <th>Definition</th>
          <th>Range</th>
        </tr>
        <tr>
          <td>1-2</td>
          <td>2</td>
          <td>Month</td>
          <td>01-12</td>
        </tr>
        <tr>
          <td>3-4</td>
          <td>2</td>
          <td>Day</td>
          <td>01-31</td>
        </tr>
        <tr>
          <td>5-6</td>
          <td>2</td>
          <td>Hour</td>
          <td>00-23</td>
        </tr>
        <tr>
          <td>7-8</td>
          <td>2</td>
          <td>Minute</td>
          <td>00-59</td>
        </tr>
        <tr>
          <td>9-10</td>
          <td>2</td>
          <td>Second</td>
          <td>00-59</td>
        </tr>
      </table>
    </td>
  </tr>
<tr>
    <td>Description:</td>
    <td>The date and time the request is first entered into the data interchange system, expressed in Coordinated Universal Time (UTC) (formerly known as Greenwich Mean Time - GMT). The value must be a valid date and time. Once set, this field remains unchanged for the life of the transaction. The Transmission Date and Time and the Field 11- Systems Trace Audit Number are used to uniquely identify Card Transactions.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should be echoed in response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>This field should be in numeric format. Example, Feb 8, 2:30:37 pm represented as 0208143037.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>The switch requires this field in every message.</td>
  </tr>

</table>


### 6.3.7 DE - 9 Conversion Rate, Settlement

<table border="1">
  <tr>
    <th colspan="2">DE - 9 Conversion Rate, Settlement</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-8</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>It contains the conversion rate for settlement amount. The Settlement Conversion Rate is the factor used by NCHL, based upon the Currency Conversion Source, in the conversion from the currency in which the Card Transaction was conducted to the Issuer’s currency. The Transaction Amount (Field 4) is multiplied by the Settlement Conversion Rate (Field 9) to determine the Settlement Amount (Field 5).</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should be echoed in response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>The left-most digit denotes the number of positions that the decimal separator shall be moved from the right. This field should be in numeric format. For example, the number 67123890 is interprets for rate 7.123890%.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>If the Card Transaction currency differs from the Issuer’s currency, NPS-NCS will automatically insert this field during transmission. If the Card Transaction currency and Issuer’s currency are the same, this field will not be populated.</td>
  </tr>
</table>


### 6.3.8 DE - 10 Conversion Rate, Cardholder Billing


<table border="1">
  <tr>
    <th colspan="2">DE - 10 Cardholder Billing</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-8</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>In cases where a transaction takes place in a currency other than the cardholder's billing currency, this field represents the rate used to make a conversion from the transaction amount in the acquiring institution's currency to the currency of the cardholder's account. Transaction amount is multiplied by cardholder billing conversion rate to determine cardholder billing amount.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should be echoed in response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>The left-most digit denotes the number of positions that the decimal separator shall be moved from the right. This field should be in numeric format. For example, the number 67123890 is interprets for rate 7.123890%.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>The field is required for cross country transactions when field DE-51 is present.</td>
  </tr>
</table>


### 6.3.9 DE - 11 System Trace Audit Number (STAN)


<table border="1">
  <tr>
    <th colspan="2">DE - 11 System Trace Audit Number (STAN)</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-6</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>The Systems Trace Audit Number (STAN) is a number assigned by a transaction originator to assist in identifying a Card Transaction. The STAN remains unchanged for the life of the Card Transaction.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should be echoed in response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>This field should be in numeric format with zero filled and right justified.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>This data element is required in all messages. An audit number starting at 1 that will increment for each subsequent transaction from 000001 to 999999.</td>
  </tr>
</table>



### 6.3.10 DE - 12 Local Transaction Time

<table border="1">
  <tr>
    <th colspan="2">DE - 12 Local Transaction Time</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-6</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed, HHMMSS
    <p>Formatted as below:</p>
      <table border="1">
        <tr>
          <th>Position</th>
          <th>Length</th>
          <th>Definition</th>
          <th>Range</th>
        </tr>
        <tr>
          <td>1-2</td>
          <td>2</td>
          <td>Hour</td>
          <td>00-23</td>
        </tr>
        <tr>
          <td>3-4</td>
          <td>2</td>
          <td>Minute</td>
          <td>00-59</td>
        </tr>
        <tr>
          <td>5-6</td>
          <td>2</td>
          <td>Second</td>
          <td>00-59</td>
        </tr> 
      </table>
    </td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>The Local Transaction Time represents the time of the transaction in the local time zone of the transaction originator, expressed in hours, minutes, and seconds.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should be echoed in response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>This field should be in numeric format. For example, value 171453 represents local time 5:14:53 pm.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>This data element is required in all messages. This field must remain unaltered for the life of the message.</td>
  </tr>
</table>


### 6.3.11 DE - 13 Local Transaction Date

<table border="1">
  <tr>
    <th colspan="2">DE - 13 Local Transaction Date</th>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field represents the local date at the terminal when the transaction occurred.</td>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-4</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>
    Fixed, MMDD
     <p> Formatted as below:</p>
    <table border="1">
        <tr>
          <th>Position</th>
          <th>Length</th>
          <th>Definition</th>
          <th>Range</th>
        </tr>
        <tr>
          <td>1-2</td>
          <td>2</td>
          <td>Month</td>
          <td>01-12</td>
        </tr>
        <tr>
          <td>3-4</td>
          <td>2</td>
          <td>Day</td>
          <td>01-31</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
  </tr>
<tr>
    <td>Description:</td>
    <td>This field represents the local month and day at the terminal when the transaction takes place. The value in this field must be a valid date.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should be echoed in response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>This field should be in numeric format. For example, value 0214 represents local date: 14 February.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>This data element is required in all messages. This field must remain unaltered for the life of the message.</td>
  </tr>
</table>


### 6.3.12 DE - 14 Expiration Date

<table border="1">
  <tr>
    <th colspan="2">DE - 14 Expiration Date</th>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field represents the expiration date of the card in the format YYMM.</td>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-4</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed, YYMM
    <p>Formatted as below:</p>
      <table border="1">
        <tr>
          <th>Position</th>
          <th>Length</th>
          <th>Definition</th>
          <th>Range</th>
        </tr>
        <tr>
          <td>1-2</td>
          <td>2</td>
          <td>Year</td>
          <td>00-99</td>
        </tr>
        <tr>
          <td>3-4</td>
          <td>2</td>
          <td>Month</td>
          <td>01-12</td>
        </tr>
      </table>
    </td>
  </tr>
    <tr>
    <td>Description:</td>
    <td>The year and month after which the Card Number expires. The value in this field must be a valid date.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It does not require to be echoed in response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>This field should be in numeric format. For example, value 2311 represents card expiry date as November 2023.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>
      <ul>
        <li>This field is required for all 0100 Authorization Request and 0120 Authorization Advice Messages from a Merchant/Acquirer.</li>
        <li>For all other Message requests, this field is required for Card Transactions not containing valid Track Data.</li>
        <li>For 0420 Reversal Advice Messages, the Expiration Date is not required if it is not received in the Response that is being used to generate the Reversal Advice.</li>
        <li>This data element is required in all card not present transactions such as e-commerce, manual entry transactions. If either track1 or track2 is captured by the terminal, this field becomes optional.</li>
        <li>If this field is present, it will be forwarded to the Issuer member.</li>
      </ul>
    </td>
  </tr>

</table>


### 6.3.13 DE - 15 Settlement Date


<table border="1">
  <tr>
    <th colspan="2">DE - 15 Settlement Date</th>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field represents the settlement date of the transaction in the format MMDD.</td>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-4</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed, MMDD
    <p>Formatted as below:</p>
      <table border="1">
        <tr>
          <th>Position</th>
          <th>Length</th>
          <th>Definition</th>
          <th>Range</th>
        </tr>
        <tr>
          <td>1-2</td>
          <td>2</td>
          <td>Month</td>
          <td>01-12</td>
        </tr>
        <tr>
          <td>3-4</td>
          <td>2</td>
          <td>Day</td>
          <td>01-31</td>
        </tr>
      </table>
    </td>
  </tr>
    
   <tr>
    <td>Description:</td>
    <td>The month and day funds will be transferred between Acquirer member and Issuer member.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should be echoed back in the response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>This field should be in numeric format. For example, value 0911 represents for a transaction which will settle on September 11.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>
      <ul>
        <li>This field is mandatory for all Card Transactions that originate from an ATM Network.</li>
        <li>For all other Card Transactions, this field may optionally be sent by the Merchant/Acquirer.</li>
      </ul>
    </td>
  </tr>

</table>



### 6.3.14 DE - 16 Conversion Date


<table border="1">
  <tr>
    <th colspan="2">DE - 16 Conversion Date</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-4</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed, MMDD
    <p>Formatted as below:</p>
      <table border="1">
        <tr>
          <th>Position</th>
          <th>Length</th>
          <th>Definition</th>
          <th>Range</th>
        </tr>
        <tr>
          <td>1-2</td>
          <td>2</td>
          <td>Month</td>
          <td>01-12</td>
        </tr>
        <tr>
          <td>3-4</td>
          <td>2</td>
          <td>Day</td>
          <td>01-31</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
  </tr>
   <tr>
    <td>Description:</td>
    <td>The month and day the conversion rate is effective to convert the Card Transaction amount from the original Card Transaction currency into the Settlement currency based on the Currency Conversion Source.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>When present, it should be echoed back in the response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>This field should be in numeric format. For example, value 0911 represents the currency conversion date for September 11.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>If the Card Transaction currency differs from the Issuer’s currency, NCHL will automatically insert this field during transmission. If the Card Transaction currency and Issuer’s currency are the same, this field will not be populated. For a cross-currency conversion, Field 16 should be present along with Field 6 and Field 51.</td>
  </tr>
</table>




###  6.3.15 DE - 18 Merchant Category Code (MCC)


<table border="1">
  <tr>
    <th colspan="2">DE - 18 Merchant Category Code (MCC)</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-4</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field is used to represent the merchant’s type of business, product, or service using the standard Merchant Category Code (MCC) while generating the request which is used to determine the validity of the requested transaction.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It is not to be echoed back in the response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>This field should be in numeric format with zero filled and right justified. The value should be present as per ISO 18245 MCC codes.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>This field is mandatory for all 01XX, 02XX, 04XX Messages. The preferred MCC list is provided in <strong>Annexure 1</strong>.</td>
  </tr>
</table>


### 6.3.16 DE - 19 Acquiring Country Code

<table border="1">
  <tr>
    <th colspan="2">DE - 19 Acquiring Country Code</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-3</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field contains the code of the country where the acquiring institution is located.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>If present, it is to be echoed back in the response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>This field should be in numeric format. The value should be present as per ISO 3166 for country code list.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>Issuers member will always receive this field for 0200 Financial Transaction Messages as this is a mandatory field from Acquirers member/network. The valid country code list is provided in <strong>Annexure 2.</strong></td>
  </tr>
</table>


### 6.3.17 DE - 22 Point of Service Entry Mode

<table border="1">
  <tr>
    <th colspan="2" align="center">DE - 22 Point of Service Entry Mode</th>
  </tr>
   <tr>
    <td>Type:</td>
    <td>n-3</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field indicates the method by which the PAN was entered as well as the terminal's PIN entry capabilities. This element is composed of 2 subfields and formatted as below: 
    <table border="1">
        <tr>
          <th>Position</th>
          <th>Length</th>
          <th>Meaning</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>1-2</td>
          <td>2</td>
          <td>PAN Entry Mode</td>
          <td>Indicates the method by which the Card Number was entered into the system</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1</td>
          <td>PIN Entry Capability</td>
          <td>Indicates the ability of a terminal (POS Device) to accept PIN data</td>
        </tr>
        </table>
          <table border="1">
  <tr>
    <th>Digit 1 & 2</th>
    <th>PAN Entry Mode</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>00</td>
    <td>PAN Entry Mode Unknown</td>
    <td>Assign “00” by default when other values listed for this field do not apply or the PAN Entry Mode is unknown</td>
  </tr>
  <tr>
    <td>01</td>
    <td>Manual</td>
    <td>Card Number is manually entered into a POS Device (key entry), including mail and phone orders</td>
  </tr>
  <tr>
    <td>02</td>
    <td>Magnetic Stripe</td>
    <td>Card swiped using a POS Device</td>
  </tr>
  <tr>
    <td>03</td>
    <td>Barcode/QR Code/Payment Code</td>
    <td>Used for scanning Bar Code or QR code payment, containing either Payment Token or a Card Number, using a POS Device</td>
  </tr>
  <tr>
    <td>04</td>
    <td>Optical Character Reader (OCR)</td>
    <td>Used for scanning special characters, such as the account numbers on the bottom of a check</td>
  </tr>
  <tr>
    <td>05</td>
    <td>Integrated Circuit (IC) Card Reader (Contact)</td>
    <td>Chip Card Transaction (Chip Card is inserted into a Contact Chip Payment Device)</td>
  </tr>
  <tr>
    <td>07</td>
    <td>ECommerce</td>
    <td>Card Transactions by Internet or online orders for which the Cardholder enters their Card Account information into a computer-based browser (not a Merchant mobile app, or any payment method in which Card Account information is stored by the Merchant or their Agent)</td>
  </tr>
 <tr>
    <td>10</td>
    <td>Stored Card Account</td>
    <td>
      <ul>
        <li>Stored Card Account: Where directed by the Cardholder, a Merchant may use Stored Card Account information to conduct Card Not Present Card Sales.</li>
        <li>PAN Entry Mode 10 is required for Card Sales that are processed using Stored Card Account information.</li>
        <li>PAN Entry Mode 10 is optional for Merchant-Initiated Transactions, which includes Recurring Payments, Installment Payments, and Unscheduled Payments.</li>
        <li>PAN Entry Mode 10 must not be assigned to QR Code/Bar Code/Payment Code Transactions, Contactless Card Transactions, or Card Sales with Card Account information stored by an Issuer or provisioned in a digital wallet.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>81</td>
    <td>Radio Frequency Identification Indicator – Magnetic Stripe</td>
    <td>
      <ul>
        <li>Radio Frequency Identification Indicator – Magnetic Stripe:</li>
        <li>Contactless ZIP® Card Transactions (“tap and pay”) for which the Track Data is obtained from the chip.</li>
        <li>Contactless transactions using a Mobile Payment Device containing magnetic stripe Card data.</li>
        <li>Contactless transactions using a Mobile Payment Device containing tokenized magnetic stripe Card data.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>82</td>
    <td>Mobile Commerce (mCommerce)</td>
    <td>
      <ul>
        <li>Mobile Commerce (mCommerce):</li>
        <li>Online purchases using a Mobile Payment Device with Merchant mobile apps or mobile browsers connected to either cellular data networks or WiFi networks.</li>
        <li>PAN Entry Mode 82 must not be assigned to Card Transactions for which the Cardholder uses their Stored Card Account information.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>83</td>
    <td>Radio Frequency Identification Indicator - Chip</td>
    <td>
      <ul>
        <li>Radio Frequency Identification Indicator - Chip:</li>
        <li>Contactless Chip Card transactions (“tap and pay”).</li>
        <li>Contactless transaction using a Mobile Payment Device containing Chip Card data.</li>
        <li>Contactless transaction using tokenized Chip Card data.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>86</td>
    <td>Contactless Interface Change</td>
    <td>
      <ul>
        <li>Contactless Interface Change: Identifies when a Chip Card Transaction with a dual-interface Card switches from a contactless Chip Card Transaction to a contact Chip Card Transaction.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>90</td>
    <td>Voice Authorizations</td>
  </tr>
  <tr>
    <td>91</td>
    <td>Voice Response Unit (VRU)</td>
  </tr>
  <tr>
    <td>92</td>
    <td>Batch Authorizations</td>
  </tr>
  <tr>
    <td>93</td>
    <td>Batch Authorization Cash Access</td>
  </tr>
  <tr>
    <td>95</td>
    <td>Chip card with unreliable CVD or iCVD</td>
  </tr>
  <tr>
    <td>99</td>
    <td>Reserved for NCHL</td>
  </tr>
</table>
<table border="1">
  <tr>
    <th>Digit 3</th>
    <th>PIN Entry Capability</th>
    
  </tr>
  <tr>
    <td>0</td>
    <td>Unspecified or Unknown</td>
  </tr>
  <tr>
    <td>1</td>
    <td>PIN Entry Capability</td>
    <td> Terminal (POS Device) having PIN entry capability</td>
  </tr>
  <tr>
    <td>2</td>
    <td>No PIN Entry Capability</td>
    <td>Terminal (POS Device) does not have PIN entry capability</td>
  </tr>
  <tr>
    <td>8</td>
    <td>PIN PAD Inoperative</td>
    <td> Terminal (POS Device) has PIN entry capability, but PIN pad is not currently operative</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Terminal Verified PIN</td>
    <td> PIN verified by terminal device (POS Device)</td>
  </tr>
</table>
</td>
  </tr>
  <tr>
      <td>Echo</td>
      <td>It is not mandatory to be echoed in response.</td>
      </tr>
      <tr>
      <td>Validation</td>
      <td>POS Entry Mode should be from the above list.</td>
      </tr>
      <tr>
      <td>Presence</td>
      <td>This field is required in all 01XX, 02XX, 04XX request messages.</td>
    </tr>
</table>

### 6.3.18 DE - 23 Card Sequence Number

<table border="1">
  <tr>
    <th colspan="2">DE - 23 Card Sequence Number</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n-3</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field is a number used to uniquely identify the Card used to access the Account. It is used for distinguishing between separate cards having the same PAN and is only used in IC card transactions.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It is not mandatory to be echoed back in the response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>This field should be in numeric format.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>For quick EMV issuer and full chip issuer, DE 23 will be sent to the issuer in the request.</td>
  </tr>
</table>

### 6.3.19 DE - 25 Point of Service Condition Code


<table border="1">

 <tr>
      <th colspan = "2"> DE - 25 Point of Service Condition Code</th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>n-2</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>Fixed</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This field is used to indicate the condition under which the transaction occurred.
            <table border="1">
  <tr>
    <th>Value</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>00</td>
    <td>Normal</td>
  </tr>
  <tr>
    <td>01</td>
    <td>Customer Not Present</td>
  </tr>
  <tr>
    <td>02</td>
    <td>Unattended Terminal</td>
  </tr>
  <tr>
    <td>03</td>
    <td>Merchant Suspicious</td>
  </tr>
  <tr>
    <td>05</td>
    <td>Customer Present, Card Not Present</td>
  </tr>
  <tr>
    <td>06</td>
    <td>EMI Transaction</td>
  </tr>
  <tr>
    <td>07</td>
    <td>Recurring Payment</td>
  </tr>
  <tr>
    <td>08</td>
    <td>MO / TO Request</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Customer Identity Verified</td>
  </tr>
  <tr>
    <td>51</td>
    <td>Request for Account and CVD verification without authorization for Standing Instruction</td>
  </tr>
  <tr>
    <td>59</td>
    <td>e-Commerce Request</td>
  </tr>
  <tr>
    <td>71</td>
    <td>Card present, Magnetic stripe cannot be read</td>
  </tr>
</table>        
            </td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>It is not mandatory to be echoed back in the response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field should be from above list. This field should compare with DE-22 and DE-61.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>It is required in all 01XX, 02XX, 04XX request messages.</td>
        </tr>
    </table>


### 6.3.20 DE - 28 Amount, Fees


<table border="1">

 <tr>
      <th colspan = "2">DE - 28 Amount, Fees </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>an-9, x + n8</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>Fixed 
             <p> Formatted as below. 
             <table border="1">
  <tr>
    <th>Position</th>
    <th>Length</th>
    <th>Definition</th>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>Valid values for Transaction Fee:
    C = Credit
    D = Debit</td>
  </tr>
  <tr>
    <td>2-9</td>
    <td>8</td>
    <td>Fee Amount (Numeric)</td>
  </tr>
</table>
</p>
             </td>    
        </tr>
        <tr>
            <td>Description:</td>
                        <td>This field represents an additional fee amount such as acquirer convenience fee / terminal surcharge etc. applied to the international transactions. This field consists the same currency value as used in DE-4.</td>
   </tr>
        <tr>
            <td>Echo:</td>
            <td>When present is to be echoed back in a response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field should be in alphanumeric format.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>It is required if additional fee is applied in transaction. First character contains C or D (for Credit or Debit) following the 8-digit amount where last two digits will represent the decimal places. For example, fee amount 499.75 is represented with value D00049975.</td>
        </tr>
    </table>

### 6.3.21 DE - 29 Amount, Fees



<table border="1">

 <tr>
      <th colspan = "2">DE - 29 Amount, Fees </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>an-9, x + n8</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>Fixed
            <p>Formatted as below.
            <table border="1">
  <tr>
    <th>Position</th>
    <th>Length</th>
    <th>Definition</th>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>Valid values for Transaction Fee:</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>C = Credit</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>D = Debit</td>
  </tr>
  <tr>
    <td>2-9</td>
    <td>8</td>
    <td>Fee Amount (Numeric)</td>
  </tr>
</table>
 </p>  </td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This field represents an additional transaction fee amount applicable to the cardholder for any kind of transactions. This field consists the same currency value as used in DE-4.</td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>When present is to be echoed back in a response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field should be in alphanumeric format.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>It is required if transaction fee is applied in transaction. First character contains C or D (for Credit or Debit) following the 8-digit amount where last two digits will represent the decimal places. For example, fee amount 499.75 is represented with value D00049975.</td>
        </tr>
    </table>


### 6.3.22 DE - 32 Acquiring Institution Code


<table border="1">

 <tr>
      <th colspan = "2">DE - 32 Acquiring Institution Code </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>n..11</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLVAR
            <p>Formatted as below.<table border="1">
  <tr>
    <th>Position</th>
    <th>Length</th>
    <th>Definition</th>
  </tr>
  <tr>
    <td>1-2</td>
    <td>2</td>
    <td>Length of AIC digits (LL)</td>
  </tr>
  <tr>
    <td>3-(LL+2)</td>
    <td>Variable</td>
    <td>Acquiring Institution Code</td>
  </tr>
</table>
 </p>
            </td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This field identifies the unique number assigned by NCHL to the Acquirer member institutions.</td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>It should be echoed back in the response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field contains a 2-byte length followed by assigned Acquiring Institution Code. The maximum length of Acquiring Institution Code is 11. For example, If the assigned Acquiring Institution Identification Code is ‘36123456’, the length of this field will be 08 bytes.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This field is required in all type of messages.</td>
        </tr>
    </table>


### 6.3.23 DE - 33 Forwarding Institution Code

<table border="1">
  <tr>
    <th colspan="2">DE - 33 Forwarding Institution Code</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n..11</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>LLVAR <p>Formatted as below:
     <table border="1">
        <tr>
          <th>Position</th>
          <th>Length</th>
          <th>Definition</th>
        </tr>
        <tr>
          <td>1-2</td>
          <td>2</td>
          <td>Length of FIC digits (LL)</td>
        </tr>
        <tr>
          <td>3-(LL+2)</td>
          <td>LL</td>
          <td>Forwarding Institution Code</td>
        </tr>
      </table>
</p></td>
  </tr>
  
  <tr>
    <td>Description:</td>
    <td>The prearranged code which serves to identify the institution forwarding a request message to NCHL. This field can be changed for a particular transaction.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should be echoed back in the response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>
      <ul>
        <li>This field contains a 2-byte length followed by Forwarding Institution Code. The maximum length of Forwarding Institution Code is 11.</li>
        <li>If the institution forwarding the message to NCHL has no assigned Processor ID, the value in this field would be '00000000', and the length of this field would be 8 bytes.</li>
        <li>If the institution forwarding the message to NCHL has a Processor ID of '12345678', the length of this field would be 8 bytes.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>This field is required in all types of international transactions and domestic transactions when Third Party Processor (TPP) is involved.</td>
  </tr>
</table>


### 6.3.24 DE - 35 Track 2 Data

<table border="1">
  <tr>
    <th colspan="2">DE - 35 Track 2 Data</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>z..37, ans</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>LLVAR</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field is the standard Track 2 data encoded on the magnetic stripe of the Card as captured by the device, excluding the LRC (Longitudinal Redundancy Check), beginning sentinel, and end sentinel data. The Track 2 data field is present when valid Track 2 is used to initiate the Card Transaction.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It should not be echoed back in the response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>
      <ul>
        <li>This field contains a 2-byte length which is zero-filled and right-justified.</li>
        <li>This length is followed by up to 37 digits Track 2 data as per ISO 7813 standard.</li>
        <li>The Track 2 data must contain characters from the set '0-9', '=', and 'D'; any other characters are considered illegal.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>
      <ul>
        <li>This field is required in all types of card present transactions.</li>
        <li>If the Card information is magnetically captured and Track 2 Data is captured, this field must be sent. If both Track 1 Data and Track 2 Data are present in a message, Track 1 will not be validated, and preference may be given to Track 2 Data validation.</li>
        <li>For Chip Card Transactions, this field must contain the track data from the chip image, not from the magnetic stripe.</li>
        <li>This remains the same for a particular transaction. This is not used in reversal.</li>
      </ul>
    </td>
  </tr>
</table>

### 6.3.25 DE - 37 Retrieval Reference Number (RRN)


<table border="1">

 <tr>
      <th colspan = "2">DE - 37 Retrieval Reference Number (RRN)</th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>an-12</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>Fixed, YDDDHHSSSSSS
            <p>Formatted as below.</p></td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This field is a document reference number to track all messages related to a given transaction and is supplied by the acquirer, which identifies all Messages and correlates the Response Message with the original Request.</td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>It should be echoed back in the response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
                        <td> •	‘HH’ should be derived from DE-12 Time, Local transaction.
            •	Last 6 digits of RRN should be equal to the STAN (DE-11).
            •	For International transactions (acquiring outside Nepal), NCHL may receive an RRN in a format other than NCHL format i.e. 12 digits alpha numeric but not in YDDDHHSSSSSS format.
</td>
        </tr>
        <tr>
            <td>Presence:</td>
                      <td> •	Presence of this field is mandatory for all types of transactions. 
          •	In reversal messages, the acquirer is required to transmit DE-11 and DE-37 of the original transaction.
          •	The value should be same in request as well as response. And this value should remain same during complete transaction cycle.
</td>
        </tr>
    </table>


### 6.3.26 DE - 38 Authorization Identification Response

<table border="1">
  <tr>
    <th colspan="2">DE - 38 Authorization Identification Response</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>an-6</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field is the six-position approval Response Code (Authorization Code) that is assigned by the source of the approved Response.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>This authorization code is assigned by an issuer/NCHL.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>
      <ul>
        <li>This field contains a 6 bytes alphanumeric value including spaces.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>
      <ul>
        <li>This field is required for all successful authorized transactions.</li>
        <li>This is to be generated by the issuer / NCHL and should not be filled by the acquirer.</li>
        <li>For domestic transactions, this field should not contain all zeroes or all blank spaces or special characters in response.</li>
      </ul>
    </td>
  </tr>
</table>



### 6.3.27 DE - 39 Response Code


<table border="1">
  <tr>
    <th colspan="2"> DE - 39 Response Code</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>an-2</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field is the standard ISO Response Code that indicates the status of the Request/Advice.</td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>It is assigned by an Issuer.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>
      <ul>
        <li>This field contains a 2 bytes alphanumeric value as per below Response Code List.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>Mandatory for all transactions whether successful or unsuccessful, this field is present in response as per below list.</td>
    
  </tr>
</table>



Response codes and their definition is listed here.

<table border="1">
  <tr>
    <th>Response Code</th>
    <th>Definition</th>
    <th>Required Action</th>
  </tr>
  <tr>
    <td>00</td>
    <td>Approved or completed Successfully</td>
    <td>Approve</td>
  </tr>
  <tr>
    <td>03</td>
    <td>Invalid Merchant</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>04</td>
    <td>Capture Card</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>05</td>
    <td>Do not Honor, In case CVD, CVD2, iCVD, CAVV verification fails, Inactive or Dormant account</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>07</td>
    <td>Pick-up Card, special condition</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>08</td>
    <td>Issuer Timed Out</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Invalid transaction or if member is not able to find any appropriate response code</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Invalid amount</td>
    <td>Decline</td>
  </tr>
</table>


<table border="1">
  <tr>
    <th>Response Code</th>
    <th>Definition</th>
    <th>Required Action</th>
  </tr>
  <tr>
    <td>14</td>
    <td>Invalid card number</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>15</td>
    <td>No such issuer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>17</td>
    <td>Customer cancellation (for void)</td>
    <td>-</td>
  </tr>
  <tr>
    <td>20</td>
    <td>Invalid response</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>21</td>
    <td>No action taken</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>22</td>
    <td>Suspected malfunction</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>25</td>
    <td>Unable to locate record</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>27</td>
    <td>File Update field edit error</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>28</td>
    <td>Record already exists in the file</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>29</td>
    <td>File Update not successful</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>30</td>
    <td>Format error</td>
    <td>Decline</td>
  </tr>
   <tr>
    <td>34</td>
    <td>Suspected fraud</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>36</td>
    <td>Restricted card</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>38</td>
    <td>Allowable PIN tries exceeded</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>39</td>
    <td>No credit Account</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>40</td>
    <td>Requested function not supported</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>41</td>
    <td>Lost Card</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>43</td>
    <td>Stolen Card</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>51</td>
    <td>Not sufficient funds</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>52</td>
    <td>No checking account</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>53</td>
    <td>No savings account</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>54</td>
    <td>Expired card</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>55</td>
    <td>Invalid PIN</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>56</td>
    <td>No Card record</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>57</td>
    <td>Transaction not permitted to Issuer/Cardholder</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>58</td>
    <td>Transaction not permitted to Acquirer/terminal</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>59</td>
    <td>Transactions declined based on Risk Score</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>61</td>
    <td>Exceeds withdrawal amount limit</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>62</td>
    <td>Restricted card</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>63</td>
    <td>Security violation</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>64</td>
    <td>Original amount incorrect</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>65</td>
    <td>Exceeds withdrawal count limit</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>67</td>
    <td>Hard capture (requires ATM pick-up)</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>68</td>
    <td>Response received too late</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>71</td>
    <td>Deemed Acceptance</td>
    <td>Approve</td>
  </tr>
  <tr>
    <td>74</td>
    <td>Transactions declined by Issuer based on Risk Score</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>75</td>
    <td>Allowable number of PIN tries exceeded</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>76</td>
    <td>Invalid/nonexistent “to” Account specified</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>77</td>
    <td>Invalid/nonexistent “from” Account specified</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>78</td>
    <td>Invalid/nonexistent Account specified (general)</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>81</td>
    <td>Cryptographic Error</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>82</td>
    <td>Invalid CAVV</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>87</td>
    <td>Network unavailable</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>89</td>
    <td>Invalid MAC</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>90</td>
    <td>Cut-off is in process</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>91</td>
    <td>Authorization system or Issuer system inoperative</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>92</td>
    <td>Unable to route transaction</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>93</td>
    <td>Transaction cannot be completed. Compliance violation</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>94</td>
    <td>Duplicate transmission detected</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>95</td>
    <td>Reconcile error</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>96</td>
    <td>System malfunction</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>97</td>
    <td>Fallback Transaction declined</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>98</td>
    <td>Duplicate Reversal</td>
    <td>Decline</td>
  </tr>
</table>

<table border="1">
  <tr>
    <th>Response Code</th>
    <th>Definition</th>
    <th>Required Action</th>
  </tr>
  <tr>
    <td>99</td>
    <td>Duplicate Transaction</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>CI</td>
    <td>Compliance error code for issuer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>CA</td>
    <td>Compliance error code for acquirer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>E1</td>
    <td>AAC Generated</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>E2</td>
    <td>Terminal does not receive AAC and TC</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>E3</td>
    <td>ARQC validation failed by Issuer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>E4</td>
    <td>TVR validation failed by Issuer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>E5</td>
    <td>CVR validation failed by Issuer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>ED</td>
    <td>E-commerce decline</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>P5</td>
    <td>PIN Change/Unblock failed</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>P6</td>
    <td>New PIN not accepted</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>I1</td>
    <td>Transaction type not supported for acquirer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>I2</td>
    <td>Transaction type not supported for issuer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>I3</td>
    <td>Transaction from originating country not allowed for acquirer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>I4</td>
    <td>Originating country not supported by issuer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>I5</td>
    <td>Originating channel not allowed for issuer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>I6</td>
    <td>Origination point not supported for bin</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>I7</td>
    <td>Invalid transaction currency for acquirer</td>
    <td>Decline</td>
  </tr>
  <tr>
    <td>1A</td>
    <td>Customer Authentication Required</td>
    <td>Only applicable to Process Code 18, Account Verification.</td>
  </tr>
  <tr>
    <td>N1</td>
    <td>System up</td>
    <td>The Messages can be routed through this connection.</td>
  </tr>
  <tr>
    <td>N2</td>
    <td>Soft down</td>
    <td>The system is available but Messages should only be routed through this connection as a last resort.</td>
  </tr>
  <tr>
    <td>N3</td>
    <td>System down</td>
    <td>No Messages should be routed through this connection.</td>
  </tr>
  <tr>
    <td>N7</td>
    <td>Decline for AVS or CID mismatch</td>
    <td>This Response Code is only applicable to Host Capture Authorizations.</td>
  </tr>
</table>


Table 51: Response Code List

### 6.3.27.1 Response Code Scenario

**1.	Message Validation Error**

a.	When NCHL receives 0100/0200 request from Acquirer member bank and at the time of data validation if NCHL detects an error, then NCHL would decline the transaction and respond back to acquirer with response code ‘CA’ in 0110 / 0210 response message and DE-44 specifying data element in error. For this response code member acquirer bank should not send a reversal.

b.	When NCHL receives 0110 / 0210 response from Issuer member bank and at the time of data validation in response if NCHL detects an error, then NCHL would decline the transaction and respond back to acquirer with response code ‘CI’ in 0110 / 0210 response message. At same time NCHL would generate a reversal to member issuer bank with response code ‘CI’ with DE-44 specifying data element in error.

c.	If NCHL receives 0420 reversal from Acquirer member bank and at the time of data validation if NCHL detects error, then NCHL would respond with 0430 back to acquirer with response code ‘00’ and DE-44 specifying the data element in error only for presence of DE 14/35/45/52/63 and absence of DE 39. For this response code member acquirer bank should not raise repeat reversal. Acquirer has to rectify their message and settle those specific transaction offline.


**2.Issuer response Timed Out/Late response (STIP not activated)**


When NCHL sends 0100 / 0200 request to Issuer member bank and do not receive response within the stipulated time, NCHL response back to acquirer with response code ‘91’and sends reversal to issuing member bank with response code ‘91’ indicating a full reversal.

**3.Issuer offline/Signed off**

If Issuer member bank is in offline/signed off and NCHL receives 0100 / 0200 request from the acquirer and if issuer member bank is not a part of STIP, then NCHL will response back with ‘91’ response code to Acquirer member bank. Acquirer need not generate reversal for this transaction.

**4.Acquirer Time-out**

When an acquirer sends a 0100/ 0200 message to NCHL but do not receive the response within the stipulated time, then acquirer sends a reversal 0420 message with response code ‘68’.


**5.Terminal Failure**

When an acquirer has received an approved response 0110/ 0210 with a valid DE-38 but fails to send the response to the terminal, then acquirer sends a reversal 0420 message with response code ‘22’. For ATM transactions response code may be ’21’.

**6.	Customer Cancellation**

When an acquirer sends a 0100 and has received an approved response 0110 with a valid DE-38 but customer cancels the transaction by sending a void transaction at POS terminal, then acquirer sends this void as reversal with response code ‘17’ to NCHL.

**7.	E-commerce Implementation**

a.	If for an E-commerce transaction, acquirer is sending DE 48 Tag 054 as 05/06/07/08 in request then NCHL will route the transaction to the issuer and if issuer approves the transaction NCHL will route the successful response code ‘00’ to the acquirer.

b.	If for an E-commerce transaction, acquirer is sending DE 48 Tag 056 as 05/06/07/08 in request then NCHL will route the transaction to the issuer and if issuer decides to reject this with decline response code ‘ED’. NCHL will route the declined response to the acquirer.

c.	If for an E-commerce transaction, acquirer is sending DE 48 Tag 056 as 05/06/07/08 in request then NCHL will route the transaction to the issuer and if issuer declines the transaction with response code other than ‘ED’ transaction then NCHL will route the declined response code to the acquirer.

d.	If for an E-commerce transaction, acquirer is sending DE 48 Tag 056 as 05/06/07/08 in request then NCHL will route the transaction to the issuer and if issuer declines the transaction with response code other than ‘ED’ and that response is not from the table defined in DE 39 then NCHL will route this to the acquirer with response code ‘CI’ and NCHL will log this as issuer compliance as IEC039. NCHL will also send reversal to the issuer for the same with response code ‘CI’ and DE 44 as IEC039.


**8.International e-Commerce Transactions of NepalPay Cards**


a.	In case of International e-Commerce transactions, NCHL will populate e-Commerce Indicator Tag054 in DE-48 as ‘08’ irrespective of CVD2 presence in the transaction.

b.	Issuer can identify an e-commerce transaction from value ‘810’ in DE-22 (PoS Entry Mode) and value ’59’ in DE-25 (PoS Condition Code). 

c.	Issuer from values in data fields, like DE-6 (Amount, Cardholder Billing), DE-51 (Currency  Code, Cardholder Billing), DE-19 (Acquiring Country Code), Merchant Country Code in DE-43 (Card Acceptor Name/Location), can identify the transaction as International.



**9.	Original Credit Transaction (OCT) Message**

In case of OCT transaction, the merchant acquirer bank will reject the transaction with response code 03 in case of incorrect merchant PAN or merchant (merchant account) status. Merchant acquirer bank shall not populate response code 71 (deemed acceptance) in any case. In case the originator is receiving response code 71 from NCHL, originator bank shall not reverse the debit to the consumer. In case the originator bank times out with NCHL, originator should mark the transaction with response code 71. Originator has to reconcile the OCT messages having response code 71 with the raw data file / settlement report received from NCHL.

### 6.3.28 DE - 41 Card Acceptor Terminal Identification

<table border="1">
 <tr>
      <th colspan = "2">DE - 41 Card Acceptor Terminal Identification </th>
      </tr>
  <tr>
    <td>Description</td>
    <td>Card Acceptor Terminal Identification identifies a Point of Service Device at the Card Acceptor location where the Card Transaction originates. Merchants, Acquirers, and TPP Networks can fill this field with any ID number that assists them in identifying specific Point of Service Devices. It should be unique within that acquirer but need not be unique within the several acquirers/networks.</td>
  </tr>
  <tr>
    <td>Type</td>
    <td>ans-8</td>
  </tr>
  <tr>
    <td>Format</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Echo</td>
    <td>It is to be echoed back in response.</td>
  </tr>
  <tr>
    <td>Validation</td>
    <td>This field contains 8 bytes alphanumeric and special characters.</td>
  </tr>
  <tr>
    <td>Presence</td>
    <td>This field is required in all messages.</td>
  </tr>
</table>


### 6.3.29 DE - 42 Card Acceptor Identification Code


<table border="1">
  <tr>
    <th colspan="2">DE - 42 Card Acceptor Identification Code</th>
  </tr>
  <tr>
    <td>Type</td>
    <td>ans-15</td>
  </tr>
  <tr>
    <td>Format</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>This field contains the identifier of card acceptor i.e. Merchant ID operating the point of service. The value in this field is network dependent.</td>
  </tr>
  <tr>
    <td>Echo</td>
    <td>It is not to be echoed back in response.</td>
  </tr>
  <tr>
    <td>Validation</td>
    <td>This field contains 15 bytes alphanumeric and special characters.</td>
  </tr>
  <tr>
    <td>Presence</td>
    <td>This field is required in all transaction request messages.</td>
  </tr>
</table>


### 6.3.30 DE - 43 Card Acceptor Name / Location



<table border="1">
  <tr>
    <th colspan="2">DE - 43 Card Acceptor Name / Location</th>
  </tr>
  <tr>
    <td>Type</td>
    <td>ans-40</td>
  </tr>
  <tr>
    <td>Format</td>
    <td>Fixed,
     Formatted as below.
     <table border="1">
  <tr>
    <th>Position</th>
    <th>Length</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1-22</td>
    <td>22</td>
    <td>Terminal/Merchant’s Name, left-aligned and space-padded.</td>
  </tr>
  <tr>
    <td>23-35</td>
    <td>13</td>
    <td>Terminal/Merchant’s City, left-aligned and space-padded.</td>
  </tr>
  <tr>
    <td>36-37</td>
    <td>2</td>
    <td>Terminal/Merchant’s state (01-07)</td>
  </tr>
  <tr>
    <td>38-40</td>
    <td>3</td>
    <td>Terminal/Merchant’s country code (524)</td>
  </tr>
</table>
    </td>
    </tr>
  </table>
  <table border="1">
  <tr>
    <td>Description</td>
    <td>This field is used for the card acceptor name and location. It is presented in a format which is printed on the customer's statement.</td>
  </tr>
  <tr>
    <td>Echo</td>
    <td>It is not mandatory to be echoed back in response.</td>
  </tr>
  <tr>
    <td>Validation</td>
    <td>This field contains 40 bytes alphanumeric and special characters.</td>
  </tr>
  <tr>
    <td>Presence</td>
    <td>This field is required in all transaction request messages.</td>
  </tr>
</table>


### 6.3.31 DE - 44 Additional Response Data 


<table border="1">
  <tr>
      <th colspan = "2"> DE - 44 Additional Response Data </th>
      </tr>
  <tr>
  <td>Type:</td>
  <td>an..50</td>
  </tr>
  <tr>
  <td>Format:</td>
  <td>LLVAR</td>
  </tr><tr>
    <td>Description</td>
    <td>Data element number of the first field where error occurred for which the rejection has happened. The detail of the reject reason is listed in below table.</td></tr>
  <tr>
    <td>Echo</td>
    <td>This is to be generated and populated by NCHL for response messages.</td>
  </tr>
  <tr>
    <td>Validation</td>
    <td>This field contains a 2-byte length field which is zero filled and right justified, followed by up to 50 alphanumeric characters. The total length of this field cannot exceed 52 bytes.</td>
  </tr>
  <tr>
    <td>Presence</td>
    <td>This is conditional and should be present in responses for all those transactions which are rejected by NCHL.</td>
  </tr>
</table>

Reject Reason codes and their values is listed here.


<table border="1">
  <tr>
    <th >Reject Reason Code</th>
    <th >Entity</th>
    <th >Error in Data Element</th>
    <th >Reject Reason</th>
  </tr>
  <tr>
    <th colspan = "4">Issuer Compliance Reject Reason code</th>
    </tr>
    <tr>
    <td>AMTI </td>
    <td>Acquirer</td>
    <td>MTI</td>
    <td>Invalid MTI for this transaction type

     -	If MTI is 0200 when transaction is DMS type 

      -	If MTI is 0100 when transaction is SMS type
 </td>
  </tr>
  <tr>
    <td>A002</td>
    <td>Acquirer</td>
    <td>2</td>
    <td>Card number absent in transaction request.</td>
  </tr>
  <tr>
    <td>A003</td>
    <td>Acquirer</td>
    <td>3</td>
    <td>Processing code does not match with standard values.</td>
  </tr>
  <tr>
    <td>A004</td>
    <td>Acquirer</td>
    <td>4</td>
    <td>Amount absent in financial transactions.</td>
  </tr>
  <tr>
    <td>A005</td>
    <td>Acquirer</td>
    <td>5</td>
    <td>For international transaction this should be present.</td>
  </tr>
  <tr>
    <td>A006</td>
    <td>Acquirer</td>
    <td>6</td>
    <td>For international transaction this should be present.</td>
  </tr>
  <tr>
    <td>A007</td>
    <td>Acquirer</td>
    <td>7</td>
    <td>Transmission date and time absent in request.</td>
  </tr>
  <tr>
    <td>A011</td>
    <td>Acquirer</td>
    <td>11</td>
    <td>DE-11 i.e. STAN is absent in Request.</td>
  </tr>
  <tr>
    <td>A012</td>
    <td>Acquirer</td>
    <td>12</td>
    <td>Transaction time is absent or Time exceeds its max limit i.e. DE-12.</td>
  </tr>
   <tr>
    <td>A013</td>
    <td>Acquirer</td>
    <td>13</td>
    <td>Transaction date is absent or Date exceeds its max limit.</td>
  </tr>
  <tr>
    <td>A014</td>
    <td>Acquirer</td>
    <td>14</td>
    <td>Card expiration date is absent in CNP transaction.</td>
  </tr>
  <tr>
    <td>A015</td>
    <td>Acquirer</td>
    <td>15</td>
    <td>Settlement date is absent.</td>
  </tr>
  <tr>
    <td>A018</td>
    <td>Acquirer</td>
    <td>18</td>
    <td>MCC is absent or present in negative MCC list.</td>
  </tr>
  <tr>
    <td>A019</td>
    <td>Acquirer</td>
    <td>19</td>
    <td>Acquirer institution country code is absent.</td>
  </tr>
  <tr>
    <td>A022</td>
    <td>Acquirer</td>
    <td>22</td>
    <td>Pan entry mode and pin entry Cap is absent or not as per standard list.</td>
  </tr>
  <tr>
    <td>A023</td>
    <td>Acquirer</td>
    <td>23</td>
    <td>For an EMV based transaction this should be present.</td>
  </tr>
  <tr>
    <td>A025</td>
    <td>Acquirer</td>
    <td>25</td>
    <td>POS condition code is absent or not as per the standard list.</td>
  </tr>
  <tr>
    <td>A032</td>
    <td>Acquirer</td>
    <td>32</td>
    <td>Acquirer ID absent or not as per the value for the acquirer in standard table.</td>
  </tr>
  <tr>
    <td>A033</td>
    <td>Acquirer</td>
    <td>33</td>
    <td>For international transaction this should be present.</td>
  </tr>
  <tr>
    <td>A035</td>
    <td>Acquirer</td>
    <td>35</td>
    <td>Track2 absent in card present transaction.</td>
  </tr>
  <tr>
    <td>A037</td>
    <td>Acquirer</td>
    <td>37</td>
    <td>RRN is absent.</td>
  </tr>
  <tr>
    <td>A038</td>
    <td>Acquirer</td>
    <td>38</td>
    <td>DE38 is present in Request from acquirer.</td>
  </tr>
  <tr>
    <td>A039</td>
    <td>Acquirer</td>
    <td>39</td>
    <td>DE39 is absent in the reversal.</td>
  </tr>
  <tr>
    <td>A041</td>
    <td>Acquirer</td>
    <td>41</td>
    <td>DE-41 is absent.</td>
  </tr>
  <tr>
    <td>A042</td>
    <td>Acquirer</td>
    <td>42</td>
    <td>DE-42 is absent.</td>
  </tr>
  <tr>
    <td>A043</td>
    <td>Acquirer</td>
    <td>43</td>
    <td>DE-43 is absent.</td>
  </tr>
  <tr>
    <td>A044</td>
    <td>Acquirer</td>
    <td>44</td>
    <td>DE-44 is present in request from acquirer.</td>
  </tr>
  <tr>
    <td>A048</td>
    <td>Acquirer</td>
    <td>48</td>
    <td>DE-48 is absent for this transaction.</td>
  </tr>
  <tr>
    <td>A049</td>
    <td>Acquirer</td>
    <td>49</td>
    <td>DE-49 is absent.</td>
  </tr>
  <tr>
    <td>A052</td>
    <td>Acquirer</td>
    <td>52</td>
    <td>PIN block is not present in pin based transaction</td>
  </tr>
  <tr>
    <td>A054</td>
    <td>Acquirer</td>
    <td>54</td>
    <td>In Cashback transaction, value in DE-54 greater than DE-4 or DE 54 is absent</td>
  </tr>
  <tr>
    <td>A055</td>
    <td>Acquirer</td>
    <td>55</td>
    <td>IC data is absent in chip based transaction</td>
  </tr>
  <tr>
    <td>A061</td>
    <td>Acquirer</td>
    <td>61</td>
    <td>DE-61 is absent</td>
  </tr>
  <tr>
    <td>A063</td>
    <td>Acquirer</td>
    <td>63</td>
    <td>DE-63 is absent for Account Verification message.</td>
  </tr>
  <tr>
    <td>A070</td>
    <td>Acquirer</td>
    <td>70</td>
    <td>DE-70 is absent for Network management message.</td>
  </tr>
  <tr>
    <td>A090</td>
    <td>Acquirer</td>
    <td>90</td>
    <td>DE-90 is not present in reversal request / advice</td>
  </tr>
  <tr>
    <td>A091</td>
    <td>Acquirer</td>
    <td>91</td>
    <td>DE-91 is not present in file update message</td>
  </tr>
  <tr>
    <td>A104</td>
    <td>Acquirer</td>
    <td>104</td>
    <td>DE 104 is absent in OCT Message received from originator</td>
  </tr>
  <tr>
    <td>A105</td>
    <td>Acquirer</td>
    <td>105</td>
    <td>DE 105 is absent in token based transaction</td>
  </tr>
  <tr>
    <td>A106</td>
    <td>Acquirer</td>
    <td>106</td>
    <td>DE 106 is absent in cardless transaction</td>
  </tr>
  <tr>
    <td>A120</td>
    <td>Acquirer</td>
    <td>120</td>
    <td>DE 105 is absent</td>
  </tr>
  <tr>
    <td>A125</td>
    <td>Acquirer</td>
    <td>125</td>
    <td>DE-125 is absent for file update message.</td>
  </tr>
</table>
<table border="1">
  <tr>
    <th>Reject Reason Code</th>
    <th>Entity</th>
    <th>Error in Data Element</th>
    <th>Reject Reason</th>
  </tr>
<tr>
    <th colspan = "4">Acquirer Compliance Reject Reason code</th>
    </tr>

  <tr>
    <td>I003</td>
    <td>Issuer</td>
    <td>3</td>
    <td>Processing code does not match with request.</td>
  </tr>
  <tr>
    <td>I004</td>
    <td>Issuer</td>
    <td>4</td>
    <td>Transaction Amount does not match with request.</td>
  </tr>
  <tr>
    <td>I006</td>
    <td>Issuer</td>
    <td>6</td>
    <td>Cardholder Billing Amount does not match with request.</td>
  </tr>
  <tr>
    <td>I007</td>
    <td>Issuer</td>
    <td>7</td>
    <td>Transmission Date and Time does not match with the request.</td>
  </tr>
  <tr>
    <td>I012</td>
    <td>Issuer</td>
    <td>12</td>
    <td>Transaction time does not match with the request.</td>
  </tr>
  <tr>
    <td>I013</td>
    <td>Issuer</td>
    <td>13</td>
    <td>Transaction date does not match with the request.</td>
  </tr>
  <tr>
   <td>I014</td>
    <td>Issuer</td>
    <td>14</td>
    <td>Card Expiration date is present in response.</td>
  </tr>
  <tr>
    <td>I019</td>
    <td>Issuer</td>
    <td>19</td>
    <td>Acquiring institution country code does not match with the request.</td>
  </tr>
  <tr>
    <td>I023</td>
    <td>Issuer</td>
    <td>23</td>
    <td>Card sequence number is not present in response for full issuer chip based transaction.</td>
  </tr>
  <tr>
    <td>I035</td>
    <td>Issuer</td>
    <td>35</td>
    <td>Track2 present in response.</td>
  </tr>
  <tr>
    <td>I038</td>
    <td>Issuer</td>
    <td>38</td>
    <td>Authorization code not present in successful response. Transaction will be rejected.</td>
  </tr>
  <tr>
    <td>I039</td>
    <td>Issuer</td>
    <td>39</td>
    <td>Response code not present in response or not from the valid list. Transaction will be rejected.</td>
  </tr>
  <tr>
    <td>I048</td>
    <td>Issuer</td>
    <td>48</td>
    <td>DE-48 is absent for this transaction.</td>
  </tr>
  <tr>
    <td>I049</td>
    <td>Issuer</td>
    <td>49</td>
    <td>Value does not match with the request or not present in response.</td>
  </tr>
  <tr>
    <td>I051</td>
    <td>Issuer</td>
    <td>51</td>
    <td>Value does not match with the request or not present in response.</td>
  </tr>
  <tr>
    <td>I052</td>
    <td>Issuer</td>
    <td>52</td>
    <td>PIN block present in response.</td>
  </tr>
  <tr>
    <td>I054</td>
    <td>Issuer</td>
    <td>54</td>
    <td>Absent in balance inquiry reply and logging in cash based transaction.</td>
  </tr>
  <tr>
    <td>I055</td>
    <td>Issuer</td>
    <td>55</td>
    <td>ARPC is not present in response for full issuer chip based transaction.</td>
  </tr>
  <tr>
    <td>I061</td>
    <td>Issuer</td>
    <td>61</td>
    <td>DE-61 present in response.</td>
  </tr>
  <tr>
    <td>I063</td>
    <td>Issuer</td>
    <td>63</td>
    <td>DE-63 present in response.</td>
  </tr>
  <tr>
    <td>I090</td>
    <td>Issuer</td>
    <td>90</td>
    <td>DE-90  present in 0110/ 0210 response or absent in 0430 response.</td>
  </tr>
  <tr>
    <td>I102</td>
    <td>Issuer</td>
    <td>102</td>
    <td>Present in response from issuer but value does not match with request.</td>
  </tr>
  <tr>
    <td>I103</td>
    <td>Issuer</td>
    <td>103</td>
    <td>Present in response from issuer but value does not match with request.</td>
  </tr>
  <tr>
    <td>I104</td>
    <td>Issuer</td>
    <td>104</td>
    <td>Field Missing in Response message from merchant acquirer in OCT message.</td>
  </tr>
  <tr>
    <td>I120</td>
    <td>Issuer</td>
    <td>120</td>
    <td>Value does not match with the request or not present in response.</td>
  </tr>
</table>



Table 52: Response Code List




### 6.3.32 DE - 45 Track 1 Data


<table border="1">
<tr>
<td>Type:</td>
<td>z..76</td>
</tr>
<tr>
<td>Format:</td>
<td>LLVAR</td>
</tr>
  <tr>
    <td>Description</td>
    <td>This field contains the Track1 data as read from the card stripe by the terminal. The format of the track should be in ISO 7813 format. The transaction will contain this field if track2 data is not available or the terminal cannot read track2.</td>
  </tr>
  <tr>
    <td>Echo</td>
    <td>It should not be echoed back in response.</td>
  </tr>
  <tr>
    <td>Validation</td>
    <td>This field contains a 2-byte length field which is zero filled and right justified, followed by up to 76 alphanumeric characters. The total length of this field cannot exceed 78 bytes.</td>
  </tr>
  <tr>
    <td>Presence</td>
    <td>This field is optional in all transaction messages.</td>
  </tr>
</table>



### 6.3.33 DE - 48 Additional Data 1 (Private Use)



<table>
<tr>
    <th colspan="2">DE - 48 Additional Data 1 (Private Use)</th>
    
  </tr>
<tr>
<td>Type:</td>
<td>an...999</td>
</tr>
<tr>
<td>Format:</td>
<td>LLLVAR</td>
</tr>
<tr>
<td rowspan="5">Description:</td>
<td>This field contains private data associated with NCHL messages. The contents of field 48 are tag based to identify the individual element within the data field. The tag based value is formatted using the “tag-length-value (TLV)” encoding procedure.


<table>
  <thead>
    <tr>
      <th>Tag</th>
      <th>Presence</th>
      <th>Length</th>
      <th>Description</th>
      <th>Values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>050</td>
      <td>Mandatory</td>
      <td>an-6</td>
      <td>Channel Code</td>
      <td>
      <table>
     <tr>
      <th>Channel</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>GENATM</td>
      <td>Transactions from ATM</td>
    </tr>
    <tr>
      <td>MICATM</td>
      <td>Transactions from Micro ATM</td>
    </tr>
    <tr>
      <td>GENPOS</td>
      <td>Transactions from POS</td>
    </tr>
    <tr>
      <td>ECOMRC</td>
      <td>Transactions from Ecommerce</td>
    </tr>
    <tr>
      <td>WALLET</td>
      <td>Transactions from wallet</td>
    </tr>
    <tr>
      <td>MOBILE</td>
      <td>Transactions from mobile</td>
    </tr>
      </table>
      </td>
    </tr>
    <tr>
      <td>051</td>
      <td>Conditional</td>
      <td>n..4</td>
      <td>CVD2 Value</td>
      <td>-</td>
    </tr>
    <tr>
      <td>052</td>
      <td>Conditional</td>
      <td>a-1</td>
      <td>CVD2 Match result</td>
      <td> <table border="1">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>M</td>
      <td>Matched</td>
    </tr>
    <tr>
      <td>N</td>
      <td>Not matched</td>
    </tr>
  </tbody>
</table></td>
    </tr>
    <tr>
      <td>053</td>
      <td>Conditional</td>
      <td>a-1</td>
      <td>CVD/iCVD Match result code</td>
      <td> <table border="1">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>M</td>
      <td>Matched</td>
    </tr>
    <tr>
      <td>N</td>
      <td>Not matched</td>
    </tr>
  </tbody>
</table></td>
    </tr>
    <tr>
      <td>054</td>
      <td>Conditional</td>
      <td>n-2</td>
      <td>Ecommerce indicators</td>
      <td> <table border="1">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>05</td>
      <td>Secure Ecommerce with 3D Secure</td>
    </tr>
    <tr>
      <td>06</td>
      <td>Not authenticated security transaction. Merchant attempted to authenticate using 3D secure</td>
    </tr>
    <tr>
      <td>07</td>
      <td>Non-authenticated Security Transaction</td>
    </tr>
    <tr>
      <td>08</td>
      <td>Non-secure transaction</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Secure E-Commerce transaction registration with OTP</td>
    </tr>
    <tr>
      <td>17</td>
      <td>Secure E-commerce transaction registration with other method</td>
    </tr>
    <tr>
      <td>21</td>
      <td>Secure E-commerce transaction with valid Image select or valid OTP</td>
    </tr>
    <tr>
      <td>31</td>
      <td>e-Commerce (Card + OTP) - OTP Authentication by IAS</td>
    </tr>
    <tr>
      <td>33</td>
      <td>e-Commerce (with only card details)</td>
    </tr>
    <tr>
      <td>35</td>
      <td>e-Commerce with Card and Online Pin</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Quick Checkout, Authenticated by Issuer IAS (Card + OTP)</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Quick Checkout Authenticated by Issuer (Card + Online Pin)</td>
    </tr>
  </tbody>
</table>
</td>
    </tr>

   <tr>
      <td>055</td>
      <td>Conditional</td>
      <td>n-6</td>
      <td>Fraud Score</td>
      <td>To be populated by NCHL

NCHL will send 999999 to the issuer as default value indicating that fraud checking is not performed by NCHL.
 </td>
    </tr>
 <tr>
      <td>060</td>
      <td>Conditional</td>
      <td>n-2</td>
      <td>Transaction Authorization Indicator 
      During chip transactions, if the issuer has opted for on-behalf or EMV STIP services, NCHL is populated, ensuring a seamless and secure request process.
</td>
      <td>
      <table border="1">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>If it is authorized successfully in STIP. Only available in STIP for EMV full chip Issuers in STIP mode.</td>
    </tr>
    <tr>
      <td>02</td>
      <td>If it is authorized successfully in STIP. Only available in STIP for Quick EMV Issuance.</td>
    </tr>
    <tr>
      <td>03</td>
      <td>Decline in STIP</td>
    </tr>
    <tr>
      <td>04</td>
      <td>ARQC validation is done by NCHL and is successful.</td>
    </tr>
    <tr>
      <td>05</td>
      <td>ARQC & CVV/iCVV validation is done by NCHL and is successful.</td>
    </tr>
    <tr>
      <td>06</td>
      <td>ARQC, CVV/iCVV & PIN validation is done by NCHL and is successful.</td>
    </tr>
    <tr>
      <td>07</td>
      <td>NCHL will reject the transaction based on CVR validation in case of Quick EMV. Issuer will receive authorization advice with this value.</td>
    </tr>
    <tr>
      <td>08</td>
      <td>ARQC validation failed at NCHL when issuer is participating in quick EMV issuance or EMV STIP. Issuer will received authorization advice message with this value.</td>
    </tr>
    <tr>
      <td>09</td>
      <td>NCHL will reject the transaction based on TVR validation in case of Quick EMV. Issuer will receive authorization advice with this value.</td>
    </tr>
  </tbody>
</table>
      </td>
    </tr>
     <tr>
      <td>061</td>
      <td>Conditional</td>
      <td>n-30</td>
      <td>Transaction Id</td>
      <td>Transaction Id-contains a unique transaction id that is used for E-Commerce transaction</td>
    </tr>
    <tr>
      <td>070</td>
      <td>Conditional</td>
      <td>an-10</td>
      <td>Loyalty Points</td>
      <td>
      
<table border="1">
  <thead>
    <tr>
      <th>Digits</th>
      <th>Position</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2</td>
      <td>1-2</td>
      <td>LT = Loyalty
      CB = Cashback</td>
    </tr>
    <tr>
      <td>8</td>
      <td>3-10</td>
      <td>The value of loyalty point or cashback amount supporting 2 decimal points, right justified with leading zeros.</td>
    </tr>
    <tr>
      <td colspan = "3">Example: Loyalty based transaction with loyalty point 10.75, value of tag 070 becomes LT00001075
Cashback based transaction with cashback value 1055.83, value of tag 070 becomes CB00105583 [Note: Cashback amount will also be populated in DE-54 of the request message.
</td>
</tr>
  </tbody>
</table>
      </td>
    </tr>
     <tr>
      <td>071</td>
      <td>Conditional</td>
      <td>n-8</td>
      <td> Loyalty Redemption Points</td>
      <td>Contains the value of loyalty redemption point (supporting 2 decimal points), right justified with leading zeros. Example: For redemption point 1534, value of tag 071 becomes ‘00153400’.</td>
    </tr>
    <tr>
      <td>080</td>
      <td>Optional</td>
      <td>n-9</td>
      <td>Income tax PAN number</td>
      <td>This contains the income tax PAN number</td>
    </tr>
    <tr>
      <td>081</td>
      <td>Optional</td>
      <td>n-13</td>
      <td>Customer mobile /telephone number</td>
      <td>This tag captures the customer mobile number including country code</td>
    </tr>
    <tr>
    <td colspan = "5">Note: Tag data length is always represented in 3 bytes.</td>
    
  </tr>
  </tbody>
</table>

</td>
</tr>
<table>
<tr>
<td>Echo:</td>
<td>When NCHL sends a request, it is essential to note that the information should not be echoed back in the response.</td>

</tr>
<tr>
<td>Validation:</td>
<td>This field contains a 3-byte length field which is zero filled and right justified, followed by up to 999 alphanumeric characters. The total length of this field cannot exceed 1002 bytes.
Each tag is required to have a length of 3 bytes, and the data must be populated in accordance with the specified format.
</td>
</tr>
<tr>
<td>Presence:</td>
<td>
<table border="1">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Requirements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> Tag 050</td>
      <td>Should be present for all transactions (01XX, 02XX, 04XX) both in request and response.</td>
    </tr>
    <tr>
      <td> Tag 051</td>
      <td>Shall be present for ‘Card Not Present’ transaction in request. Same will be optional for Token based E-Com transactions.</td>
    </tr>
    <tr>
      <td> Tag 052</td>
      <td>Should be present for all 'Card Not Present' scenarios and value should be 'M' in response, after successful CVD2 verification by Issuer. Should be present for all 'Card Not Present' scenarios and value should be 'N' in response, in case of a failed CVD2 verification by Issuer. It is strongly recommended that for every transaction issuer must perform CVD2 verification.</td>
    </tr>
    <tr>
      <td> Tag 053</td>
      <td>Should be present for all 'Card Present' scenarios and value should be 'M' in response, after successful CVD/iCVD verification by Issuer. Should be present for all 'Card Present' scenarios and value should be 'N' in response, in case of a failed CVD/iCVD verification by Issuer. It is strongly recommended that for every transaction issuer must perform CVD/iCVD verification.</td>
    </tr>
    <tr>
      <td> Tag 054</td>
      <td>Should be present for all E-Commerce transaction in request.</td>
    </tr>
    <tr>
      <td> Tag 055</td>
      <td>Should be populated by NCHL and will be sent to the issuer as per issuer configuration for generating fraud score. Issuer will not send this to NCHL in response.</td>
    </tr>
    <tr>
      <td> Tag 060</td>
      <td>Should be present for all EMV based transactions and to be populated by NCHL and issuer will not send this in response.</td>
    </tr>
    <tr>
      <td> Tag 061</td>
      <td>Should be present in all E-commerce transaction request and not to be echoed in response from the issuer, However NCHL will populate this field in response and send this to the acquirer.</td>
    </tr>
    <tr>
      <td> Tag 070</td>
      <td>Should be present for loyalty-based transactions both in request and response.</td>
    </tr>
    <tr>
      <td> Tag 071</td>
      <td>Should be present for loyalty redemption-based transactions both in request and response.</td>
    </tr>
    <tr>
      <td> Tag 080</td>
      <td>Acquirer can populate Income Tax PAN number in request.</td>
    </tr>
    <tr>
      <td> Tag 081</td>
      <td>Acquirer can populate mobile/telephone number in request.</td>
    </tr>
  </tbody>
</table></td>
</tr>
</table>
</table>

### 6.3.33.1 DE – 48 for Dynamic Key Exchange

DE-48 specification for network messages will not follow TLV format. DE-48 will follow LLLVAR format where last 6 digits of the field will have key check value. Key length will vary basis on Double/ Triple length key. The below is applicable in Network Management messages to be used in Dynamic Key Exchange.




Table 53: Key Exchange Format


### 6.3.34 DE - 49 Currency Code, Transaction

 <table border="1">
 <tr>
            <th colspan ="2"> DE - 49 Currency Code, Transaction</th>
            
        </tr>
<tr>
            <td>Type:</td>
            <td>n – 3</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>Fixed</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This field identifies the currency as per ISO 4217 for currency code of a particular transaction amount as listed in Annexure 2. For example, NPR transactions will contain value 524, INR transactions will contain value 356 and dollar transactions will contain value 840. This field identifies the Currency type of the following amount fields:</td>
        </tr>
        <tr>
            <td>Amount Fields:</td>
            <td>
                <ul>
                    <li>Amount, Transaction (DE - 4)</li>
                    <li>Amount, Fees (DE - 28)</li>
                    <li>Amount, Fees (DE - 29)</li>
                    <li>Replacement Amounts (DE - 95)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>It should be echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field is composed of 3 digits, zero filled and right justified.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This field requires in all transaction messages.</td>
        </tr>
    </table>




### 6.3.35 DE - 50 Currency Code, Settlement
 <table border="1">
   <tr>
<th colspan ="2"> DE - 50 Currency Code, Settlement</th>
     </tr>
        <tr>
            <td>Type:</td>
            <td>n – 3</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>Fixed</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This field identifies the currency as per ISO 4217 for currency code of a particular settlement amount as listed in Annexure 2. This field identifies the Currency type of the following amount fields:</td>
        </tr>
        <tr>
            <td>Amount Fields:</td>
            <td>
                <ul>
                    <li>Amount, Transaction (DE - 5)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>It should be echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field is composed of 3 digits, zero filled and right justified. When DE – 5 is present, this field should be present.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This field requires in all cross-country transaction messages.</td>
        </tr>
    </table>

### 6.3.36 DE - 51 Currency Code, Cardholder Billing

<table border="1">
      <tr>
      <th colspan = "2">DE - 51 Currency Code, Cardholder Billing </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>n - 3</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>Fixed</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This field identifies the currency as per ISO 4217 for currency code of a particular cardholder billing amount as listed in Annexure 2. This field identifies the Currency type of the following amount fields:</td>
        </tr>
        <tr>
            <td>Amount Fields:</td>
            <td>
                <ul>
                    <li>Amount, Transaction (DE - 6)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>It should be echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field is composed of 3 digits, zero filled and right justified. When DE – 6 is present, this field should be present.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This field requires in all cross-country transaction messages.</td>
        </tr>
    </table>

### 6.3.37 DE - 52 Personal Identification Number (PIN) Data

<table border="1">
 <tr>
      <th colspan = "2"> DE - 52 Personal Identification Number (PIN) Data</th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>b - 16</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>Fixed, ANSI Format</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>The block of data containing encrypted PIN block. PIN should be encrypted as a block of 16 hexadecimal digits. This field must contain the encrypted ANSI PIN block.</td>
        </tr>
        <tr>
            <td>Conditions for Presence:</td>
            <td>
                <ul>
                    <li>Positions 1-2 of Field 22 (POS Entry Mode) equals 05 or 95</li>
                    <li>The Cardholder verification method is online PIN, and</li>
                    <li>The Chip Card Terminal and Acquirer support online PIN.</li>
                    <li>Additionally, this field must be present for PIN Change (Process Code 98) transactions and must contain the current PIN.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>It should not be echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>It should be 16 characters hexadecimal numbers which can be validated through HSM.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>Mandatory for all pin-based transactions.</td>
        </tr>
    </table>

### 6.3.38 DE - 54 Additional Amounts

<table border="1">
 <tr>
      <th colspan = "2"> DE - 54 Additional Amounts</th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>an…120</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLLVAR</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>
            <li>This field indicates additional amounts for a transaction. </li>
            <li>In a 0100/0120/0200/0220 message, this field represents the cashback amount.</li>
            <li>In any 01xx/02xx response message, it can be used to deliver account balances to acquirer. Each balance is represented as a 20-byte field and is managed as below.</li>
             
 <table border="1">
  <thead>
    <tr>
      <th>Digit 01 - 02</th>
      <th>Account Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00</td>
      <td>Unspecified / Unknown</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Saving</td>
    </tr>
    <tr>
      <td>20</td>
      <td>Checking</td>
    </tr>
    <tr>
      <td>30</td>
      <td>Credit</td>
    </tr>
    <tr>
      <td>90</td>
      <td>Cash Back</td>
    </tr>
  </tbody>
</table>
<table border="1">
  <thead>
    <tr>
      <th>Digit 03 - 04</th>
      <th>Balance / Amount Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00</td>
      <td>Default</td>
    </tr>
    <tr>
      <td>01</td>
      <td>(ATM Only) Ledger Balance</td>
    </tr>
    <tr>
      <td>02</td>
      <td>(ATM Only) Available Balance</td>
    </tr>
    <tr>
      <td>90</td>
      <td>Cash Back</td>
    </tr>
  </tbody>
</table>
<table border="1">
  <thead>
    <tr>
      <th>Digit 05 - 07</th>
      <th>Currency Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NNN</td>
      <td>ISO Currency Code as per Annexure 2</td>
    </tr>
  </tbody>
</table>

<table border="1">
  <thead>
    <tr>
      <th>Digit 08</th>
      <th>Amount Sign</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>C</td>
      <td>Positive Balance</td>
    </tr>
    <tr>
      <td>D</td>
      <td>Negative Balance</td>
    </tr>
  </tbody>
</table>
<table border="1">
  <thead>
    <tr>
      <th>Digit 09 - 20</th>
      <th>Amount</th>  
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NNNNNNNNNNNN</td>
      <td>For balance enquiry this shall be populated in response.
          For purchase with cashback request message (DE-3 = 09), this field shall be populated and value would be:
          <table border="1">
  <thead>
    <tr>
      <th>Position</th>
      <th>Length</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1-2</td>
      <td>2</td>
      <td>90</td>
    </tr>
    <tr>
      <td>3-4</td>
      <td>2</td>
      <td>90</td>
    </tr>
    <tr>
      <td>5-7</td>
      <td>3</td>
      <td>524</td>
    </tr>
    <tr>
      <td>8</td>
      <td>1</td>
      <td>D</td>
    </tr>
    <tr>
      <td>9-20</td>
      <td>12</td>
      <td>Cash bank amount</td>
    </tr>
  </tbody>
</table>
     </td>
    </tr>
  </tbody>
</table>
        </td>
        </tr>
       
  <tr>
    <td>Echo:</td>
    <td>It should be populated in transaction response message. For cashback, when presents in request message, should not be echoed in response message.</td>
    </tr>
    <tr>
    <td>Validation:</td>
    <td>This field contains a 3-byte length field which denotes the total field length followed by up to six balance subfields. Each subfield is 20 bytes in total. The maximum length is 123 bytes.</td>
    </tr>
    <tr>
    <td>Presence:</td>
    <td>This field is conditional one, for all balance inquiry this should contain the customer balance and for purchase with cashback transactions this should contain the cash back amount.
    For example:
    •	ATM Balance Inquiry and Cash Withdrawal with Balance would be: 0401001524C0000012345001002524C000001234567.
    •	Purchase with cashback would be: 0209090524D000001234500.
</td>
    </tr>

 </table>




### 6.3.39 DE - 55 Chip Data (IC Data)

The following tables consists of mandatory (M), conditional (C) and optional (O) subfields (tags) associated for field 55 (IC Data).


<table border="1">
 <tr>
      <th colspan = "2"> DE - 54 Additional Amounts</th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>an…120</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLLVAR</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This data element is present in full-issuance chip transactions. DE 55 must be ‘TLV’ encoded and must contain the information (mandatory and optional) as specified in below message layouts. Each element will consist of three sub components, a “Tag”, a “Length” and a “Value”. The tags and the length are hexadecimal values.
            <table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Length (Byte)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tag</td>
      <td>1 - 2</td>
    </tr>
    <tr>
      <td>Tag Length</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Tag Value</td>
      <td>Variable</td>
    </tr>
  </tbody>
</table>
  This field will contain as many tags as required in the above manner as long as the maximum length of the field does not exceed the maximum permissible limit. The length of DE 55 will be equal to the total length of all the tag-length-value sets. This field may contain some tags that the receiving issuer or acquirer does not recognize or does not expect. The receiver must ignore such tags and continue processing the next tag in DE 55          
            </td>
            </tr>
            <tr>
            <td>Echo:</td>
            <td>ARQC should not be echoed back in response. Issuer should generate the ARPC and send back to acquirer.</td>
    </tr>
    <tr>
    <td>Validation:</td>
    <td>It can be validated as per TLV rules.</td>
    </tr>
    <tr>
    <td>Presence:</td>
          <td>To meet the needs of changing of the subfields, this field uses a TLV (tag-length-value) representation, i.e. each subfield consists of tag (T), length of subfield value (L) and subfield value (V). 
      The attribute of tag is bit and is represented with hexadecimal system occupying 1~2 bytes. For example, “9F33” is a tag that occupies two bytes, while “95” is a tag that occupies one byte. If the last five bits of the first byte of the tag (note: bytes are sequenced from the left to the right, so that the first byte is the byte at far left. bit sequencing follows the same rule) are “11111”, it shows this tag occupies two bytes, e.g. “9F33”; otherwise the tag occupies one byte, e.g. “95”.
      •	Tag 9F33 = 10011111 00110011, here last five bits of first byte (9F) is 11111 this means this tag would be of 2 byte length.
      •	Tag 95 = 10010101, here last five bits of first byte (95) is 10101 this means this tag would be of 1 byte length.
</td>
            </tr>
</table>

The following tables consists of mandatory (M), conditional (C) and optional (O) subfields (tags) associated for field 55 (IC Data).

<table border="1">
  <thead>
    <tr>
      <th>S.N.</th>
      <th>Data Element</th>
      <th>Description</th>
      <th>Tag</th>
      <th>Length</th>
      <th>Format</th>
      <th>0100/0200</th>
      <th>0110/0210</th>
      <th>0120/0220</th>
      <th>0420</th>
      <th>Content Condition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Amount Authorized</td>
      <td>Authorized amount of the transaction</td>
      <td>9F02</td>
      <td>6</td>
      <td>n-12</td>
      <td>M</td>
      <td>-</td>
      <td>M</td>
      <td>O</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Amount Other</td>
      <td>Secondary amount associated with the transaction representing a cash back amount</td>
      <td>9F03</td>
      <td>6</td>
      <td>n-12</td>
      <td>C</td>
      <td>-</td>
      <td>C</td>
      <td>O</td>
      <td>Mandatory when Cash at Checkout is allowed and there is a Cash at Checkout amount except 0400/0420</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Application Identifier (AID)</td>
      <td>Identifies the application as described in ISO 7816-5</td>
      <td>9F06</td>
      <td>5-16</td>
      <td>b</td>
      <td>O</td>
      <td>-</td>
      <td>O</td>
      <td>O</td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Application Interchange Profile (AIP)</td>
      <td>Indicates the capabilities of the Card to support specific functions in the application</td>
      <td>82</td>
      <td>2</td>
      <td>b</td>
      <td>M</td>
      <td>-</td>
      <td>M</td>
      <td>O</td>
      <td></td>
    </tr>
    <tr>
      <td>5</td>
      <td>Transaction Counter (ATC)</td>
      <td>Counter maintained by the application in the chip (incrementing the ATC is managed by the chip ICC)</td>
      <td>9F36</td>
      <td>2</td>
      <td>b</td>
      <td>M</td>
      <td>-</td>
      <td>M</td>
      <td>O</td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td>Application Cryptogram (AC)</td>
      <td>Application Cryptogram generated by the Chip Card when requesting online processing and used by the Issuer to verify the authenticity of the Card in online authorization messages</td>
      <td>9F26</td>
      <td>8</td>
      <td>b</td>
      <td>M</td>
      <td>-</td>
      <td>M</td>
      <td>O</td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td>Application Usage Control (AUC)</td>
      <td>Indicates the Issuer’s specified restrictions on the geographic usage and services allowed for the application</td>
      <td>9F07</td>
      <td>2</td>
      <td>b</td>
      <td>O</td>
      <td>-</td>
      <td>O</td>
      <td>O</td>
      <td></td>
    </tr>
    <tr>
      <td>8</td>
      <td>Cryptogram Information Data</td>
      <td>Indicates type of cryptogram i.e., Application Authentication Cryptogram (AAC), Transaction Certificate (TC), Application Request Cryptogram (ARQC)</td>
      <td>9F27</td>
      <td>1</td>
      <td>b</td>
      <td>O</td>
      <td>-</td>
      <td>O</td>
      <td>O</td>
      <td></td>
      </tr>
    <tr>
      <td>9</td>
      <td>Card Verification Method (CVM) </td>
      <td>Indicates the results of the last CVM performed</td>
      <td>9F34</td>
      <td>3</td>
      <td>b</td>
      <td>O</td>
      <td>-</td>
      <td>O</td>
      <td>O</td>
      <td></td>
      </tr>
      <tr>
  <td>10</td>
  <td>Results Dedicated File (DF) Name</td>
  <td>Identifies the name of the DF as described in ISO 7816-4</td>
  <td>84</td>
  <td>5-16</td>
  <td>b</td>
  <td>M</td>
  <td>-</td>
  <td>O</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>11</td>
  <td>Form Factor Indicator</td>
  <td>The type of payment Card used in a Card Transaction.</td>
  <td>9F6E</td>
  <td>8, var.</td>
  <td>b</td>
  <td>C</td>
  <td>-</td>
  <td>C</td>
  <td>C</td>
  <td>If the Form Factor Indicator data is available on the Card, the Merchant, Acquirer or Processor must forward this information to the Issuer.</td>
</tr>
<tr>
  <td>12</td>
  <td>Interface Device (IFD) Serial Number</td>
  <td>Unique and permanent serial number assigned to the IFD by the manufacturer</td>
  <td>9F1E</td>
  <td>8</td>
  <td>an-8</td>
  <td>O</td>
  <td>-</td>
  <td>O</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>13</td>
  <td>Issuer Application Data</td>
  <td>Contains proprietary application data for transmission to the Issuer in an online transaction.</td>
  <td>9F10</td>
  <td>Var. up to 32</td>
  <td>b</td>
  <td>M</td>
  <td>-</td>
  <td>M</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>14</td>
  <td>Issuer Authentication Data (IAD)</td>
  <td>Data sent to the Integrated Circuit Card (ICC) for online Issuer authentication must contain a concatenation of the following data</td>
  <td>91</td>
  <td>8-16</td>
  <td>b</td>
  <td>-</td>
  <td>C</td>
  <td>-</td>
  <td>-</td>
  <td>Present if online Issuer authentication performed</td>
</tr>
<tr>
  <td>15</td>
  <td>Issuer Script Template 1</td>
  <td>Contains proprietary Issuer data for transmission to the Integrated Circuit Card (ICC) before the second GENERATE AC command</td>
  <td>71</td>
  <td>Var. up to 127</td>
  <td>b</td>
  <td>-</td>
  <td>C</td>
  <td>-</td>
  <td>-</td>
  <td>Present if sent by Issuer</td>
</tr>
<tr>
  <td>16</td>
  <td>Issuer Script Template 2</td>
  <td>Contains proprietary Issuer data for transmission to the Integrated Circuit Card (ICC) after the second GENERATE AC command</td>
  <td>72</td>
  <td>Var. up to 127</td>
  <td>b</td>
  <td>-</td>
  <td>C</td>
  <td>-</td>
  <td>-</td>
  <td>Present if sent by Issuer</td>
</tr>
<tr>
  <td>17</td>
  <td>Storage Data</td>
  <td>A location for Merchants to store information in the chip on the Chip Card during a Card Transaction.</td>
  <td>DF3F</td>
  <td>Var. up to 114</td>
  <td>b</td>
  <td>O</td>
  <td>-</td>
  <td>O</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>18</td>
  <td>Terminal Application Version Number</td>
  <td>Version number assigned by the payment system for the application</td>
  <td>9F09</td>
  <td>2</td>
  <td>b</td>
  <td>O</td>
  <td>-</td>
  <td>O</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>19</td>
  <td>Terminal Capabilities</td>
  <td>Indicates the Card data input, CVM, and security capabilities of the terminal</td>
  <td>9F33</td>
  <td>3</td>
  <td>b</td>
  <td>M</td>
  <td>-</td>
  <td>M</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>20</td>
  <td>Terminal Country Code</td>
  <td>Indicates the country of the terminal represented</td>
  <td>9F1A</td>
  <td>2</td>
  <td>n-3</td>
  <td>M</td>
  <td>-</td>
  <td>M</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>21</td>
  <td>Terminal Type</td>
  <td>Indicates the environment of the terminal, its communications capability, and its operational control</td>
  <td>9F35</td>
  <td>1</td>
  <td>n-1</td>
  <td>O</td>
  <td>-</td>
  <td>O</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>22</td>
  <td>Terminal Verification Results (TVR)</td>
  <td>Status of the different functions as seen from the terminal</td>
  <td>95</td>
  <td>5</td>
  <td>b</td>
  <td>M</td>
  <td>-</td>
  <td>M</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>23</td>
  <td>Transaction Date</td>
  <td>Local date that the transaction was authorized</td>
  <td>9A</td>
  <td>3</td>
  <td>n-6, YYMMDD</td>
  <td>M</td>
  <td>-</td>
  <td>M</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>24</td>
  <td>Transaction Type</td>
  <td>Indicates the type of financial transaction represented by the first two digits of the Processing Code</td>
  <td>9C</td>
  <td>1</td>
  <td>n-2</td>
  <td>M</td>
  <td>-</td>
  <td>M</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>25</td>
  <td>Transaction Currency Code</td>
  <td>Indicates the Currency Code of the transaction</td>
  <td>5F2A</td>
  <td>2</td>
  <td>n-3</td>
  <td>M</td>
  <td>-</td>
  <td>M</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>26</td>
  <td>Unpredictable Number (UN)</td>
  <td>Value to provide variability and uniqueness to the generation of a Cryptogram</td>
  <td>9F37</td>
  <td>4</td>
  <td>b</td>
  <td>M</td>
  <td>-</td>
  <td>M</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>27</td>
  <td>Transaction Sequence Counter (TSC)</td>
  <td>Counter maintained by the terminal that is incremented by one for each transaction</td>
  <td>9F41</td>
  <td>2-4</td>
  <td>n, 4-8</td>
  <td>O</td>
  <td>-</td>
  <td>O</td>
  <td>O</td>
  <td>-</td>
</tr>
<tr>
  <td>28</td>
  <td>Issuer Script Results</td>
  <td>Indicates the result of the terminal script processing</td>
  <td>9F5B</td>
  <td>Var</td>
  <td>b</td>
  <td>-</td>
  <td>-</td>
  <td>C</td>
  <td>O</td>
  <td>Present if scripts were sent by Issuer in original response</td>
</tr>

  </tbody>
</table>



Table 54: List of Basic Information (Mandatory) Subfields of Field 55

### 6.3.40 DE - 56 Customer Related Data



<table border="1">
 <tr>
      <th colspan = "2">DE - 56 Customer Related Data </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>ans…999</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLLVAR,Binary, TLV</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This field is used by Merchants, Acquirers, and Issuers to support the exchange of Customer Related data. This field uses binary data based on TLV format, and each record is formatted as below.
                      <table border="1">
            <thead>
              <tr>
                <th>Position</th>
                <th>Length</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>Hexadecimal value</td>
              </tr>
              <tr>
                <td>2-3</td>
                <td>2</td>
                <td>Data set length (hexadecimal value of the length of the data set)</td>
              </tr>
              <tr>
                <td>4-999</td>
                <td>996</td>
                <td>Data</td>
              </tr>
            </tbody>
          </table>
               Data Set ID 01, Account Related Data
        Data Set 01 - Account Related Data enables Merchants and Acquirers to consistently link transactions initiated with PAN or Payment Tokens.
        <table border="1">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Length</th>
      <th>Tag Name</th>
      <th>Description</th>
      <th>Encoding</th>
      <th>Condition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>Variable up to 29 bytes</td>
      <td>Payment Account Reference (PAR)</td>
      <td>A unique non-financial reference assigned to a given PAN or Payment Token.</td>
      <td>LLVAR, an..29</td>
      <td>Optional</td>
    </tr>
    <tr>
      <td>02</td>
      <td>Variable up to 29 bytes</td>
      <td>PAN Reference Identifier</td>
      <td>A unique non-financial reference assigned to a given PAN. May be used for non-transaction activity for that PAN.May be used for non-transaction activity for that PAN.</td>
      <td>LLVAR, an..29</td>
      <td>Optional</td>
    </tr>
    <tr><td colspan ="6"> Note:Note: For the data set, each Tag Number and Tag Length within the data set is to be sent in hexadecimal format. However, Tag values are not sent in hexadecimal format. </td></tr>
  </tbody>
</table>
  </td>
   </tr>
   <tr>
   <td>Echo:</td>
    <td>It should be echoed back in response if presents in request.</td>
    </tr>
    <tr>
    <td>Validation:</td>
    <td>It can be validated as per TLV rules.</td>
    </tr>
    <tr>
    <td>Presence:</td>
    <td>This field is optional in all messages (01XX, 02XX, 04XX).</td>
   </tr>    
 </table>


### 6.3.41 DE - 61 Point of Sale (POS) Data

<table border="1">
  <tr>
    <th colspan="2">DE - 61 Point of Sale (POS) Data</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>ans…13</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>LLLVAR</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field indicates the specific Card information capture conditions that are present at the time a Card Transaction took place at the point of sale. This field is formatted as follows:
      <table border="1">
        <thead>
          <tr>
            <th>Position</th>
            <th>Length</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
      <td>1</td>
      <td>1</td>
      <td>POS Device Attendance Indicator</td>
    </tr>
    <tr>
      <td>2</td>
      <td>1</td>
      <td>Partial Approval Indicator</td>
    </tr>
    <tr>
      <td>3</td>
      <td>1</td>
      <td>POS Terminal Location Indicator</td>
    </tr>
    <tr>
      <td>4</td>
      <td>1</td>
      <td>POS Cardholder Presence Indicator</td>
    </tr>
    <tr>
      <td>5</td>
      <td>1</td>
      <td>POS Card Presence Indicator</td>
    </tr>
    <tr>
      <td>6</td>
      <td>1</td>
      <td>POS Card Capture Capabilities Indicator</td>
    </tr>
    <tr>
      <td>7</td>
      <td>1</td>
      <td>POS Transaction Status Indicator</td>
    </tr>
    <tr>
      <td>8</td>
      <td>1</td>
      <td>POS Transaction Security Indicator</td>
    </tr>
    <tr>
      <td>9</td>
      <td>1</td>
      <td>POS E-commerce Transaction Indicator</td>
    </tr>
    <tr>
      <td>10</td>
      <td>1</td>
      <td>POS Type of Terminal Device</td>
    </tr>
    <tr>
      <td>11</td>
      <td>1</td>
      <td>POS Card Data Terminal Input Capability Indicator</td>
    </tr>
    <tr>
      <td>12-13</td>
      <td>2</td>
      <td>Reserved (zero-filled)</td>
    </tr>
        </tbody>
      </table>
      Digit 1 Code: POS Device Attendance Indicator
      This is a 1-digit code indicating whether the POS Device is attended by the Merchant’s representative or operated by the Cardholder.
      <table border="1">
        <thead>
          <tr>
            <th>Digit 1 Code: : POS Device Attendance Indicator</th>
            <th>Definition (Digit - 1)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
      <td>0</td>
      <td>Attended terminal (POS Device)</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Unattended terminal (POS Device)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>No terminal (POS Device) used</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Unknown</td>
    </tr>
        </tbody>
      </table>
            Digit 2 Code: Partial Approval Indicator 
        This is a 1-digit code indicating whether the Merchant, Merchant Processor, ATM, etc., supports Partial Authorization Approvals.
        Note: A positive Authorization Response must be provided for the full amount of the 
        merchandise portion of a Card Transaction prior to approving the Cash at Checkout 
        portion of the Card Transaction.
      <table border="1">
        <thead>
          <tr>
            <th>Digit 2 Code: Partial Approval Indicator </th>
            <th>Definition (Digit - 2)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
      <td>0</td>
      <td>Partial Approval Not Supported</td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        Partial Approval Supported:
        <ul>
          <li>Merchandise can be partially approved</li>
          <li>Cash at Checkout can be partially approved</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Partial Approval Supported:
        <ul>
          <li>Merchandise can be partially approved</li>
          <li>Cash at Checkout must be fully approved or declined</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        Partial Approval Supported:
        <ul>
          <li>Merchandise must be fully approved or declined</li>
          <li>Cash at Checkout can be partially approved</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td>
        Partial Approval Supported:
        <ul>
          <li>Merchandise must be fully approved or declined</li>
          <li>Cash at Checkout must be fully approved or declined</li>
        </ul>
      </td>
    </tr>
        </tbody>
      </table>
        Digit 3 Code: POS Terminal Location Indicator 
        This is a 1-digit code indicating the location of terminal (POS Device).
      <table border="1">
        <thead>
          <tr>
            <th>Digit 3 Code:POS Terminal Location Indicator</th>
            <th>Definition (Digit - 3)</th>
          </tr>
        </thead>
        <tbody>
           <tr>
      <td>0</td>
      <td>On premises of Merchant facility</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Off premises of Merchant facility (Merchant terminal-remote location)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>On premises of Cardholder (home PC)</td>
    </tr>
    <tr>
      <td>3</td>
      <td>No terminal (POS Device) used (voice/ARU authorization)</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Unknown</td>
    </tr>
        </tbody>
      </table>
         Digit 4 Code: POS Cardholder Presence Indicator 
          This is a 1-digit or letter code indicating whether the Cardholder is present at the point of sale, and explains the condition if the Cardholder is not present.
      <table border="1">
        <thead>
          <tr>
            <th>Digit 4  Code:POS Cardholder Presence Indicator </th>
            <th>Definition (Digit - 4)</th>
          </tr>
        </thead>
        <tbody>
           <tr>
      <td>0</td>
      <td>Cardholder present</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Cardholder not present, unspecified</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Cardholder not present, mail/facsimile order</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Cardholder not present, telephone/ARU order</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Cardholder not present, standing order/Merchant-Initiated Transactions (i.e., Recurring Payments)</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Electronic Order</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Unknown</td>
    </tr>
        </tbody>
      </table>
      Digit 5 Code: POS Card Presence Indicator 
      This is a 1-digit code indicating whether the Card is present at the point of sale.
      <table border="1">
        <thead>
          <tr>
            <th>Digit 5 Code: POS Card Presence Indicator</th>
            <th>Definition (Digit - 5)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Card Present</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Card Not Present</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Unknown</td>
          </tr>
        </tbody>
      </table>
      Digit 6 Code: POS Card Capture Capabilities Indicator 
      This is a 1-digit code indicating whether the terminal (POS Device) has Card capture capabilities.
      <table border="1">
        <thead>
          <tr>
            <th>Digit 6 Code:POS Card Capture Capabilities Indicator </th>
            <th>Definition (Digit - 6)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Terminal (POS Device)/operator has no Card capture capability</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Terminal (POS Device)/operator has Card capture capability</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Unknown</td>
          </tr>
        </tbody>
      </table>
              Digit 7 Code: POS Transaction Status Indicator 
        When the final Card Sale amount is not known at time of the Authorization Request, such as for Automated Fuel Dispenser, Incremental Authorization, and restaurant and transit fare Card Transactions, a 1-digit or letter code indicating the purpose or status of the Request. 0100 Authorization Message Requests with the pre-Authorization indicator is used in Position 7: POS Transaction Status Indicator. 
        Usage of “A, D, E, I, N, P, R, S, T, and U” is mandatory for Merchant-Initiated Transactions (MIT) using a Payment Token, and recommended for MIT transactions using a PAN.
        Usage of “V” is recommended for Issuer Installment Payments using a Payment Token or a PAN.
      <table border="1">
        <thead>
          <tr>
            <th>Digit 7 Code: POS Transaction Status Indicator</th>
            <th>Definition (Digit - 7)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Partial Approval Not Supported</td>
          </tr>
        </tbody>
      </table>
      Digit 8 Code: POS Transaction Security Indicator 
      This is a 1-digit code indicating the Card Acceptor’s security assessment of the Card presenter.
      <table border="1">
        <thead>
          <tr>
            <th>Digit 8 Code: POS Transaction Security Indicator</th>
            <th>Definition (Digit - 8)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>No security concern</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Suspected fraud (Merchant suspicious)</td>
          </tr>
          <tr>
            <td>2</td>
            <td>ID verified </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Unknown</td>
          </tr>
        </tbody>
      </table>
       Digit 9 Code: POS E-commerce Transaction Indicator 
        This is a 1-digit code indicating the POS transaction type for the 0100 Authorization Request. Merchants and Acquirers must populate this field with ZERO (0) if the POS transaction type is unknown.
      <table border="1">
        <thead>
          <tr>
            <th>Digit 9 Code: POS E-commerce Transaction Indicator </th>
            <th>Definition (Digit - 9)</th>
          </tr>
        </thead>
        <tbody>
    <tr>
      <td>0</td>
      <td>Unknown/Unspecified</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Transaction is not an e-commerce transaction</td>
    </tr>
    <tr>
      <td>4</td>
      <td>In-App Authentication</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Card Transaction is a secure e-commerce transaction (Cardholder authenticated)</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Merchant attempted to authenticate the Cardholder information, but was not able to complete authentication</td>
    </tr>
    <tr>
      <td>7</td>
      <td>E-commerce Card Transaction with data protection but not using Cardholder authentication</td>
    </tr>
    <tr>
      <td>8</td>
      <td>E-commerce Card Transaction without data protection</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Reserved</td>
    </tr>
    <tr>
      <td>B</td>
      <td>Buy Online Pickup In Store (BOPIS)</td>
    </tr>
        </tbody>
      </table>
     Digit 10 Code: POS Type of Terminal Device 
This is a 1-digit code indicating the type of terminal used during the transaction.
      <table border="1">
        <thead>
          <tr>
            <th>Digit 10 Code: POS Type of Terminal Device </th>
            <th>Definition (Digit - 10)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>M</td>
            <td>Mobile POS</td>
          </tr>
          <tr>
            <td>0</td>
            <td>Unspecified</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Mobile POS</td>
          </tr>
        </tbody>
      </table>
            Digit 11 Code: POS Card Data Terminal Input Capability Indicator 
      This is a 1-digit code indicating the ability of the terminal (POS Device) used by the Merchant to electronically capture Card Transaction Data. This position should reflect the highest level of capability of the POS Device: if the terminal is capable of reading Chip Cards and magnetic stripes, the POS Device should be identified as an integrated circuit card reader (using value 5).
      <table border="1">
        <thead>
          <tr>
            <th>Digit 11 Code: POS Card Data Terminal Input Capability Indicator </th>
            <th>Definition (Digit - 11)</th>
          </tr>
        </thead>
        <tbody>
           <tr>
      <td>0</td>
      <td>Unspecified</td>
    </tr>
    <tr>
      <td>1</td>
      <td>No terminal (POS Device) used (voice/ARU authorization)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Magnetic stripe reader</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Bar Code/Payment Code</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Optical Character Recognition</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Integrated Circuit Card Reader</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Key entry only (manual)</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Magnetic stripe reader and key entry</td>
    </tr>
    <tr>
      <td>C</td>
      <td>Radio Frequency Identification (RFID) – Chip</td>
    </tr>
    <tr>
      <td>H</td>
      <td>Hybrid – Integrated Circuit Card Reader & contactless capabilities</td>
    </tr>
    <tr>
      <td>R</td>
      <td>Radio Frequency Identification (RFID) – Magnetic Stripe</td>
    </tr>
    <tr>
      <td>S</td>
      <td>Secure Electronic Transaction (SET) with certificate</td>
    </tr>
    <tr>
      <td>T</td>
      <td>SET without certificate</td>
    </tr>
    <tr>
      <td>U</td>
      <td>Channel-encrypted Electronic Commerce Transaction (SSL)</td>
    </tr>
    <tr>
      <td>V</td>
      <td>Non-secure Electronic Commerce Transaction</td>
    </tr>
        </tbody>
      </table>
      Digit 12-13 Code: Reserved (zero-filled)
      Reserved and zero-filled.
      <table border="1">
        <thead>
          <tr>
            <th>Digit 12-13 Code: Reserved (zero-filled)</th>
            <th>Definition (Digit - 12-13)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00</td>
            <td>Zero-filled</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
  <tr>
   <td>Echo:</td>
    <td>It should not be echoed back in response.</td>
    </tr>
    <tr>
    <td>Validation:</td>
    <td>This field should be in the format as described above.</td>
    </tr>
    <tr>
    <td>Presence:</td>
    <td>This field requires in all transactions.</td>
   </tr>  
</table>


### 6.3.42 DE - 63 Account Verification Service (AVS)


<table border="1">
  <tr>
    <th colspan="2">DE - 63 Account Verification Service (AVS)</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>ans…999</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>LLLVAR</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field is self-defined field for cardholder verification purpose.
The presence of this field indicates the Address Verification Service should be used to perform Address Verification for the Card Transaction. 
This field is mandatory if Positions 1-2 of Field 3 (Processing Code) contains a value of 18 (Card Account Verification) and the Merchant elects to validate the identity of the Cardholder via the Cardholder's billing address.
      <table border="1">
  <thead>
    <tr>
      <th>Seq.</th>
      <th>Definition</th>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>ID Verification Indicator</td>
      <td>n-1</td>
      <td>0 – Not Present
      1 - Present</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Name Verification Indicator</td>
      <td>n-1</td>
      <td>0 – Not Present 
      1 - Present</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Mobile Verification Indicator</td>
      <td>n-1</td>
      <td>0 – Not Present 
      1 - Present</td>
    </tr>
    <tr>
      <td>4</td>
      <td>OTP Verification Indicator</td>
      <td>n-1</td>
      <td>0 – Not Present 
      1 - Present</td>
    </tr>
    <tr>
      <td>5</td>
      <td>CVV Verification Indicator</td>
      <td>n-1</td>
      <td>0 – Not Present
      1 - Present</td>
    </tr>
    <tr>
      <td>6</td>
      <td>ID Type</td>
      <td>n-2</td>
      <td>
        01 – Nationality
        02 – National ID
        03 – Driving License
        04 – Voter Card
        99 – Other ID Card
      </td>
    </tr>
    <tr>
      <td>7</td>
      <td>ID Number</td>
      <td>n..20</td>
      <td>LLVAR
      Filled with the serial number of the corresponding ID type. Note: If the serial number is less than 20 bytes, spaces will be padded to the right.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Name</td>
      <td>ans..50</td>
      <td>LLVAR
      Name is a field with variable length.</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Mobile</td>
      <td>n..15</td>
      <td>LLVAR
      Mobile phone number is a field with variable length.</td>
    </tr>
    <tr>
      <td>10</td>
      <td>OTP</td>
      <td>ans..40</td>
      <td>LLVAR
      The first 20 bytes used to store the OTP key value, which is submitted by the Acquirer, and the last 20 bytes used to store the OTP.</td>
    </tr>
    <tr>
      <td>11</td>
      <td>CVN2</td>
      <td>n-3</td>
      <td>Acquirer need to fill CVN2 for the Issuer to conduct CVN2 verification.</td>
    </tr>
  </tbody>
</table>
</td>
  </tr>
  <tr>
            <td>Echo:</td>
            <td>It is assigned by an Acquirer, echo is not required</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field should be of numeric 3 byte length followed by up to 999 bytes alphanumeric and symbol characters.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This field requires in all account verification transaction messages.</td>
        </tr>
</table>




### 6.3.43 DE - 70 Network Management Information

<table border="1">

 <tr>
      <th colspan = "2"> DE - 70 Network Management Information</th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>n – 3</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>Fixed</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This field is required in all 08xx messages. It indicates the type of network request to be processed. The following table lists the available codes:</td>
        </tr>
        <tr>
            <td>Available Codes:</td>
            <td>
                <table border="1">
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Logon</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Logoff</td>
                    </tr>
                    <tr>
                        <td>012</td>
                        <td>Logoff due to Debit Cap Limit Exceed</td>
                    </tr>
                    <tr>
                        <td>201</td>
                        <td>Cutoff</td>
                    </tr>
                    <tr>
                        <td>301</td>
                        <td>Echo Test</td>
                    </tr>
                    <tr>
                        <td>161</td>
                        <td>Member Bank Initiated Key Exchange Request</td>
                    </tr>
                    <tr>
                        <td>162</td>
                        <td>NCHL Initiated Key Exchange Request</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>It should be echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field is a numeric zero filled field which is right justified.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This field requires in all network messages (08XX).</td>
        </tr>
    </table>

### 6.3.44 DE - 90 Original Data Element

<table border="1">
  <tr>
    <th colspan="2">DE - 90 Original Data Element</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>ans…13</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>LLLVAR</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field indicates the specific Card information capture conditions that are present at the time a Card Transaction took place at the point of sale. This field is formatted as follows:</td>
  </tr>
  <tr>
    <td colspan="2">
      <table border="1">
        <thead>
          <tr>
            <th>Position</th>
            <th>Length</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 – 4</td>
            <td>4</td>
            <td>Original Message Type Identifier (0100, 0120, 0200)</td>
          </tr>
          <tr>
            <td>5 – 10</td>
            <td>6</td>
            <td>Original Systems Trace Audit Number (STAN) from Field 11</td>
          </tr>
          <tr>
            <td>11 - 16</td>
            <td>6</td>
            <td>Original Local Transaction Time from Field 12</td>
          </tr>
          <tr>
            <td>17 - 20</td>
            <td>4</td>
            <td>Original Local Transaction Date from Field 13</td>
          </tr>
          <tr>
            <td>21 – 31</td>
            <td>11</td>
            <td>Original Acquiring Institution Identification Code from Field 32, right justified, zero-filled</td>
          </tr>
          <tr>
            <td>32 - 42</td>
            <td>11</td>
            <td>Original Forwarding Institution Identification Code from Field 33, right justified, zero-filled</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
  <tr>
   <td>Echo:</td>
    <td>If present, it should be echoed back in response.</td>
    </tr>
    <tr>
    <td>Validation:</td>
    <td>Original data elements should be of this format as described. If DE 90 is absent in request / not matching with the original transaction then the transaction will not be sent to the issuer.</td>
    </tr>
    <tr>
    <td>Presence:</td>
    <td>This field requires in all reversal messages (04XX) and conditional in some financial messages such as refund (01XX / 02XX).</td>
   </tr>  
</table>


### 6.3.45 DE - 91 File Update Code


<table border="1">
  <tr>
    <th colspan="2">DE - 91 File Update Code</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>n – 3</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field is required in file update messages either to add a record, delete a record, change an existing record, replace a record, or retrieve a copy of the existing record. The following table lists the field structure:</td>
  </tr>
  <tr>
    <td colspan="2">
      <table border="1">
        <thead>
          <tr>
            <th>Function</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>301</td>
            <td>Add Record</td>
          </tr>
          <tr>
            <td>302</td>
            <td>Update Record</td>
          </tr>
          <tr>
            <td>303</td>
            <td>Delete Record</td>
          </tr>
          <tr>
            <td>304</td>
            <td>Replace Record</td>
          </tr>
          <tr>
            <td>305</td>
            <td>Inquire Record</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>If present, it should be echoed back in response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>Field data shall be provided as per the given format.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>This field requires in file update messages (0302/0312).</td>
  </tr>
</table>


### 6.3.46 DE - 95 Replacement Amounts

<table border="1">
  <tr>
    <th colspan="2">DE - 95 Replacement Amounts</th>
  </tr>
  <tr>
    <td>Type:</td>
    <td>an – 42</td>
  </tr>
  <tr>
    <td>Format:</td>
    <td>Fixed</td>
  </tr>
  <tr>
    <td>Description:</td>
    <td>This field is required in reversal messages 04xx where partial amount was dispensed. The following table lists the field structure:</td>
  </tr>
  <tr>
    <td colspan="2">
      <table border="1">
        <thead>
          <tr>
            <th>Position</th>
            <th>Length</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 – 12</td>
            <td>n - 12</td>
            <td>Actual Amount, Transaction</td>
          </tr>
          <tr>
            <td>13 – 24</td>
            <td>n - 12</td>
            <td>Actual Amount, Settlement</td>
          </tr>
          <tr>
            <td>25</td>
            <td>a - 1</td>
            <td>Actual Transaction Fee Sign</td>
          </tr>
          <tr>
            <td>26 – 33</td>
            <td>n - 8</td>
            <td>Actual Transaction Fee</td>
          </tr>
          <tr>
            <td>34</td>
            <td>a - 1</td>
            <td>Actual Settlement Fee Sign</td>
          </tr>
          <tr>
            <td>35 - 42</td>
            <td>n - 8</td>
            <td>Actual Settlement Fee</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
  <tr>
    <td>Echo:</td>
    <td>If present, it should be echoed back in response.</td>
  </tr>
  <tr>
    <td>Validation:</td>
    <td>For an ATM transaction if DE 95 is greater than DE 4 then the transaction should get rejected.</td>
  </tr>
  <tr>
    <td>Presence:</td>
    <td>This field requires in partial reversal messages (04XX).</td>
  </tr>
  <tr>
    <td>Note:</td>
    <td>Partial reversal is not supported/recommended from ATM terminals.</td>
  </tr>
</table>


### 6.3.47 DE - 102 Account Identification 1

<table border="1">

 <tr>
      <th colspan = "2"> DE - 102 Account Identification 1</th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>ans..20</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLVAR</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This field is used to contain “from account number” of the cardholder to debit an authorized amount. Alternatively, this field can be used to return a “from account number” by the issuer host after authorization. In Card to Card fund transfer, for debit transaction, issuer Bank must send the “From Account Number” from which will be debited for transfer amount. i.e. the cardholder account number.</td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>It is optional to echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field should be of numeric 2 byte length followed by up to 20 bytes alphanumeric and symbol characters (From Account Number).</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This field requires in all transaction messages.</td>
        </tr>
    </table>

### 6.3.48 DE - 103 Account Identification 2

<table border="1">

 <tr>
      <th colspan = "2">DE - 103 Account Identification 2 </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>ans..20</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLVAR</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This field is used to contain “to account number” of the beneficiary to credit an authorized amount. Alternatively, this field can be used to return a “to account number” by the beneficiary / acquirer host after credit. In Card to Card fund transfer, for credit transaction, Acquirer/beneficiary Bank must send the “To Card Number/ To Account Number” which is to be credited for the transfer amount.</td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>It is optional to echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field should be of numeric 2 byte length followed by up to 20 bytes alphanumeric and symbol characters (To Card Number/ To Account Number).</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This field requires in all FT/ Credit transaction messages.</td>
        </tr>
    </table>

### 6.3.49 DE - 104 OCT Data


<table border="1">

 <tr>
      <th colspan = "2">DE - 104 OCT Data </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>ans..999</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLVAR,TLV Format</td>
        </tr>
        <tr>
            <td>Description:
            </td>
            <td><table border="1">
    <tr>
        <th>Tag</th>
        <th>Presence</th>
        <th>Length</th>
        <th>Terminology</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>001</td>
        <td>C</td>
        <td>ans-30</td>
        <td>Bill number</td>
        <td>Invoice number or bill number</td>
    </tr>
    <tr>
        <td>002</td>
        <td>C</td>
        <td>ans-15</td>
        <td>Mobile number</td>
        <td>Mobile number for top-up or bill payment</td>
    </tr>
    <tr>
        <td>003</td>
        <td>C</td>
        <td>ans-30</td>
        <td>Store ID</td>
        <td>A distinctive number associated to a Store</td>
    </tr>
    <tr>
        <td>004</td>
        <td>C</td>
        <td>ans-30</td>
        <td>Loyalty number</td>
        <td>Loyalty card number as provided by store or airline</td>
    </tr>
    <tr>
        <td>005</td>
        <td>C</td>
        <td>ans-30</td>
        <td>Reference ID</td>
        <td>Any value as defined by merchant or acquirer in order to identify the transaction</td>
    </tr>
    <tr>
        <td>006</td>
        <td>C</td>
        <td>ans-30</td>
        <td>Consumer ID</td>
        <td>A subscriber ID given by the merchant for subscription services</td>
    </tr>
    <tr>
        <td>007</td>
        <td>C</td>
        <td>ans-100</td>
        <td>Purpose</td>
        <td>Remarks for the Purchase</td>
    </tr>
    <tr>
        <td>008</td>
        <td>M</td>
        <td>n-1</td>
        <td>Remitter instrument type</td>
        <td>This will contain the instrument type by which the Debit was processed.
        1- Card
        2- QR</td>
    </tr>
    <tr>
        <td>009</td>
        <td>M</td>
        <td>ans-50</td>
        <td>Remitter instrument ID</td>
        <td>This will contain the ID of the Instrument used for Debit (Card Number, Account Number, VPA ID etc. ...)</td>
    </tr>
    <tr>
        <td>010</td>
        <td>C</td>
        <td>ans-50</td>
        <td>Remitter Name</td>
        <td>This field will contain remitter name, if remitter name is greater than 50 characters, use first 50 characters</td>
    </tr>
    <tr>
        <td>011</td>
        <td>C</td>
        <td>ans-20</td>
        <td>Merchant Account Number</td>
        <td>Merchant Bank Account Number</td>
    </tr>
    <tr>
        <td>012</td>
        <td>C</td>
        <td>n-2</td>
        <td>Payload Format Indicator</td>
        <td>Defines the version release, the first version should be numbered “01”.</td>
    </tr>
    <tr>
        <td>013</td>
        <td>C</td>
        <td>n-2</td>
        <td>Point of initiation method</td>
        <td>1st character: Method of data presentation by Merchant
        1 = QR
        2 = NFC
        3-9 = Reserved for future use
        2nd character: Static/ Dynamic indication
        1 = static
        2 = dynamic
        3-9 = Reserved for future use</td>
    </tr>
    <tr>
        <td>014</td>
        <td>C</td>
        <td>n-2</td>
        <td>Tip or Convenience fee indicator</td>
        <td>01: Indicates Consumer should be prompted to enter tip
        02: Indicates that merchant would mandatorily charge a flat convenience fee
        03: Indicates that merchant would charge a percentage convenience fee</td>
    </tr>
    <tr>
        <td>015</td>
        <td>C</td>
        <td>n-12</td>
        <td>Tip or Convenience fee – amount</td>
        <td>Tip OR Convenience fee amount</td>
    </tr>
    <tr>
        <td>016</td>
        <td>C</td>
        <td>ans-5</td>
        <td>Convenience fee percentage</td>
        <td>The Convenience Fee Percentage is specified as whole integers between 000.00 (for 0%) to 100 (100.00%). 
        E.g. “11.95”
        Note: 0 or 100 is not a valid value.
</td>
    </tr>
    <tr>
        <td>017-025</td>
        <td>C</td>
        <td>ans-100</td>
        <td>Reserved</td>
        <td>Reserved for NCHL</td>
    </tr>
      </table></td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>If present, it should be echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>Field data shall be provided as per given format. Tag length is always represented in 3 bytes.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This remains same for a transaction.
          For all OCT transactions this field is mandatory. For all other transactions this field shall not be present.
</td>
        </tr>
    </table>


### 6.3.50 DE - 105 Token Data

<table border="1">

 <tr>
      <th colspan = "2">DE - 105 Token Data </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>ans..999</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLVAR,TLV Format</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>
            <table border="1">
    <tr>
        <th>Tag</th>
        <th>Presence</th>
        <th>Length</th>
        <th>Terminology</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>001</td>
        <td>M</td>
        <td>an-19</td>
        <td>Token ID</td>
        <td>Token Value corresponding to the PAN</td>
    </tr>
    <tr>
        <td>002</td>
        <td>M</td>
        <td>n-4</td>
        <td>Token Expiration Date</td>
        <td>Expiry Date for the Token. The date is in YYMM format, where YY = year (00–99) and MM = month (01–12).</td>
    </tr>
    <tr>
        <td>003</td>
        <td>C</td>
        <td>ans-36</td>
        <td>Token Reference ID</td>
        <td>Reference ID corresponding to the Token. Optional for Token Reference based E-com transaction. Mandatory in other scenarios.</td>
    </tr>
    <tr>
        <td>004</td>
        <td>C</td>
        <td>n-10</td>
        <td>Wallet ID</td>
        <td>ID allocated for the Particular Wallet. Optional for wallet-based E-com transaction. Mandatory in other scenarios.</td>
    </tr>
    <tr>
        <td>005</td>
        <td>M</td>
        <td>an-2</td>
        <td>Token Type</td>
        <td>EC - ECOM/COF (e-commerce/ card on file)
        SE - SE (secure element)
        HC - CBP (cloud-based payment)</td>
    </tr>
    <tr>
        <td>006</td>
        <td>C</td>
        <td>an-1</td>
        <td>Token Status</td>
        <td>A - Active for payment
        I - Inactive for payment (not yet active)
        S - Temporarily suspended for payments
        D - Permanently deactivated for payments</td>
    </tr>
     <tr>
        <td>007</td>
        <td>C</td>
        <td>ans-29</td>
        <td>Payment Account Reference (PAR)</td>
        <td>This will have data if provided by the issuer. The value needs to be Populated from Tag 9F24</td>
    </tr>
    <tr>
        <td>008</td>
        <td>C</td>
        <td>ans-11</td>
        <td>Token Requestor ID</td>
        <td>Contains the assigned Token Requestor ID</td>
    </tr>
    <tr>
        <td>009</td>
        <td>M</td>
        <td>an-2</td>
        <td>TSP Validation Result</td>
        <td>01 –Token / Cryptogram Validation Successful
        02 – Token / Cryptogram Validation Failed
        03 – Token Validation Successful
        04 – Token Validation Failed</td>
    </tr>
    <tr>
        <td>010</td>
        <td>C</td>
        <td>n-2</td>
        <td>Device Type</td>
        <td>Device from which the transaction was initiated.
        01 - Mobile phone
        02 – Tablet
        03 – Wearable
        99 - Unknown</td>
    </tr>
    <tr>
        <td>011</td>
        <td>C</td>
        <td>ans-48</td>
        <td>Device ID</td>
        <td>Contains Device ID</td>
    </tr>
    <tr>
        <td>012</td>
        <td>C</td>
        <td>n-15</td>
        <td>Device Number</td>
        <td>This tag contains the full or partial phone number when available.</td>
    </tr>
    <tr>
        <td>013</td>
        <td>C</td>
        <td>n-2</td>
        <td>Number of Active Tokens</td>
        <td>Number of Tokens Currently Active for this PAN</td>
    </tr>
    <tr>
        <td>014</td>
        <td>C</td>
        <td>n-2</td>
        <td>Number of Inactive Tokens</td>
        <td>Number of Token currently Inactive for this PAN</td>
    </tr>
    <tr>
        <td>015</td>
        <td>C</td>
        <td>n-2</td>
        <td>Number of Suspended Tokens</td>
        <td>Number of Token currently Suspended for this PAN</td>
    </tr>
    <tr>
        <td>016</td>
        <td>C</td>
        <td>n-2</td>
        <td>User Account Score</td>
        <td>A score between 1 and 5 indicating how trustworthy the device user's account is. Five is most trusted. A value of 0 (zero) means that the account was not checked by wallet or wallet owner.</td>
    </tr>
    <tr>
        <td>017</td>
        <td>C</td>
        <td>n-2</td>
        <td>Device Score</td>
        <td>A score between 1 and 5 indicating how trustworthy the device is. Five is most trusted. A value of 0 (zero) means that the account was not checked by wallet or wallet owner.</td>
    </tr>
    <tr>
        <td>018</td>
        <td>O</td>
        <td>ans-100</td>
        <td>Card Holder Address</td>
        <td>Address of the Card Holder</td>
    </tr>
    <tr>
        <td>019</td>
        <td>O</td>
        <td>ans-9</td>
        <td>Device Location</td>
        <td>Latitude and longitude coordinates of device location</td>
    </tr>
    <tr>
        <td>020</td>
        <td>O</td>
        <td>ans-45</td>
        <td>Device IP</td>
        <td>Cardholder’s device IP address</td>
    </tr>
    <tr>
        <td>021</td>
        <td>O</td>
        <td>ans-25</td>
        <td>Card Holder Name</td>
        <td>Name of the Card Holder</td>
    </tr>
    <tr>
        <td>022</td>
        <td>C</td>
        <td>n-2</td>
        <td>Token Advice Reason</td>
        <td>01 - Provision complete notification.
        02 - State of token changed on device upon lifecycle management request from Issuer.
        03 - State of token changed on vault upon lifecycle management request.
        04 - State of token changed on vault upon lifecycle management request from TSP CSP.
        05 - Meta data changed</td>
    </tr>
    <tr>
        <td>023</td>
        <td>C</td>
        <td>n-2</td>
        <td>Previous Token State</td>
        <td>Possible Values are:
        01-LINKED
        02-ACTIVE
        03-SUSPENDED
        04-UNLINKED</td>
    </tr>
    <tr>
        <td>024</td>
        <td>C</td>
        <td>n-2</td>
        <td>New Token State</td>
        <td>Possible Values are:
        01-LINKED
        02-ACTIVE
        03-SUSPENDED
        04-UNLINKED</td>
    </tr>
    <tr>
        <td>025</td>
        <td>C</td>
        <td>n-16</td>
        <td>SI registration ID</td>
        <td>When there is a token registration/replenishment/cancellation against a SI registration ID</td>
    </tr>
    <tr>
        <td>026</td>
        <td>C</td>
        <td>ans-15</td>
        <td>Merchant ID</td>
        <td>ID of the merchant requesting the token. Mandatory for Card on file scenarios</td>
    </tr>
    <tr>
        <td>027</td>
        <td>C</td>
        <td>ans-45</td>
        <td>Merchant Name</td>
        <td>Name of the merchant requesting the token. Mandatory for Card on file scenarios</td>
    </tr>
    <tr>
        <td>028</td>
        <td>C</td>
        <td>ans-45</td>
        <td>TR Name</td>
        <td>Token requestor name. Mandatory for Card on file scenarios</td>
    </tr>

</table>
</td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>If present, it should be echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This remains same for a transaction. Tag length is always represented in 3 bytes.
            For any Token based transaction this field should be mandatory. For all other transactions this field will not be present.
            For Token based E-Com/SI/SFA transactions, these fields will be received from the acquirer. Same will be forwarded to the issuer only if the issuer if certified to receive token based fields.
</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This is mandatory for all Token Based transactions.</td>
        </tr>
    </table>



### 6.3.51 DE - 106 Cardless Transaction Data


<table border="1">

 <tr>
      <th colspan = "2">DE - 106 Cardless Transaction Data </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>ans..999</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLVAR,TLV Format</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td><table border="1">
    <tr>
        <th>Tag</th>
        <th>Presence</th>
        <th>Length</th>
        <th>Terminology</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>001</td>
        <td>M</td>
        <td>an-20</td>
        <td>Acquirer ATM account/ VPA</td>
        <td>Account Number/ VPA allocated for the account used by Acquirer for Cardless cash withdrawal transactions.</td>
    </tr>
    <tr>
        <td>002</td>
        <td>C</td>
        <td>an-16</td>
        <td>TXN ID</td>
        <td>The transaction ID generated by the Acquirer to confirm on the Debit.</td>
    </tr>
    <tr>
        <td>003</td>
        <td>M</td>
        <td>n-10</td>
        <td>Mobile Number</td>
        <td>Customer Mobile Number from which the Debit will happen.</td>
    </tr>
    <tr>
        <td>004</td>
        <td>M</td>
        <td>an-10</td>
        <td>Verification Code</td>
        <td>First 4 characters for Bank/ third party channel Code as defined by Nepal Rastra Bank + 6 characters of issuer generated verification code.
        Note: First 4 characters = “0000”, is assigned for NCHL.</td>
    </tr>
    <tr>
        <td>005</td>
        <td>M</td>
        <td>n-4</td>
        <td>Bank Code</td>
        <td>Unique Bank Code of the Acquirer provided by Nepal Rastra Bank.</td>
    </tr>
    <tr>
        <td>006</td>
        <td>M</td>
        <td>n-12</td>
        <td>RRN</td>
        <td>The RRN received for Customer Debit</td>
    </tr>
    <tr>
        <td>007</td>
        <td>M</td>
        <td>n-12</td>
        <td>Transaction Amount</td>
        <td>Transaction amount of cardless withdrawal.</td>
    </tr>
    <tr>
        <td>008</td>
        <td>M</td>
        <td>an-8</td>
        <td>Terminal ID</td>
        <td>Terminal ID of the terminal assigned by acquirer.</td>
    </tr>
</table>
        </td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>If present, it should be echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This remains same for a transaction. Tag length is always represented in 3 bytes.
For any Cardless cash withdrawal transaction this field should be mandatory, for all other transactions this field will not be present.
</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This is mandatory for all Cardless cash withdrawal transaction.</td>
        </tr>
    </table>

###  6.3.52 DE - 120 Additional Data 2 (Private Use)

<table border="1">
 <tr>
      <th colspan = "2">DE - 120 Additional Data 2 (Private Use) </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>ans..999</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLLVAR, TLV Format</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>This contains additional data for ATM, POS, e-Commerce and other transactions.</td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>If present, it should be echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This remains same for a transaction. Tag data length is always represented in 3 bytes.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This is optional for all messages.</td>
        </tr>
    </table>


#### 6.3.52.1 DE – 120, Pin Change Transaction

**1.		For PIN Change - Request**

The PIN change transaction can be initiated from any ATM terminals, and it is also within the scope of this transaction to be initiated from POS terminals managed by banks and their branches providing flexibility to facilitate customers in remote areas.


<table border="1">
    <tr>
        <th>Tag</th>
        <th>Description</th>
        <th>Length</th>
        <th>Format</th>
        <th>Value</th>
        <th>Remarks</th>
    </tr>
    <tr>
        <td>001</td>
        <td>Transaction Type</td>
        <td>2</td>
        <td>an-2</td>
        <td>98</td>
        <td>PIN Change Processing Code (First two characters of DE – 3)</td>
    </tr>
    <tr>
        <td>002</td>
        <td>Channel Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>ATM</td>
        <td>ATM based transaction</td>
    </tr>
    <tr>
        <td>003</td>
        <td>Product Indicator</td>
        <td>3</td>
        <td>An-3</td>
        <td>PNC</td>
        <td>Pin Change</td>
    </tr>
    <tr>
        <td>004</td>
        <td>New PIN Block</td>
        <td>16</td>
        <td>b-16</td>
        <td></td>
        <td>New PIN Block</td>
    </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td colspan = "3" >For example, the field 120 for PIN Change request transaction is as follows: 
            04800100298002003ATM003003PNC004016A1B2C3D4E5F610F9
            047 - Length of the field 120
            001 - Tag 1 
            002 – Length of tag 1 data
            98 – Value of Tag 1 (Transaction Type) 
            002 – Tag 2 
            003 – Length of tag 2 data
            ATM – Value of Tag 2 (Channel Indicator)
            003 – Tag 3 
            003 – Length of tag 3 data
            PNC – Value of Tag 3 (Product Indicator)
            004 – Tag 4 
            016 – Length of tag 4 data
            A1B2C3D4E5F610F9 – Value of Tag 4 (New PIN Block)
</td></tr>
</table>




**2.		For PIN Change - Response**




<table border="1">
    <tr>
        <th>Tag</th>
        <th>Description</th>
        <th>Length</th>
        <th>Format</th>
        <th>Value</th>
        <th>Remarks</th>
    </tr>
    <tr>
        <td>001</td>
        <td>Transaction Type</td>
        <td>2</td>
        <td>an-2</td>
        <td>98</td>
        <td>PIN Change Processing Code (First two characters of DE – 3)</td>
    </tr>
    <tr>
        <td>002</td>
        <td>Channel Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>ATM</td>
        <td>ATM based transaction</td>
    </tr>
    <tr>
        <td>003</td>
        <td>Product Indicator</td>
        <td>3</td>
        <td>An-3</td>
        <td>PNC</td>
        <td>Pin Change</td>
    </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                            <td colspan = "3" >For example, the field 120 for PIN Change response transaction is as follows: 
            02600100298002003ATM003003PNC
            025 - Length of the field 120
            001 - Tag 1 
            002 – Length of tag 1 data 
            98 – Value of Tag 1 (Transaction Type) 
            002 – Tag 2 
            003 – Length of tag 2 data
            ATM – Value of Tag 2 (Channel Indicator)
            003 – Tag 3 
            003 – Length of tag 3 data
            PNC – Value of Tag 3 (Product Indicator)

</td></tr>
</table>

#### 6.3.52.2 DE – 120 for ATM Transaction, Mini Statement
**1.		For Mini Statement - Request**


<table border="1">
  <tr>
        <th>Tag</th>
        <th>Description</th>
        <th>Length</th>
        <th>Format</th>
        <th>Value</th>
        <th>Remarks</th>
    </tr>
    <tr>
        <td>001</td>
        <td>Transaction Type</td>
        <td>2</td>
        <td>an-2</td>
        <td>38</td>
        <td>Mini Statement Processing Code (First two characters of DE – 3)</td>
    </tr>
    <tr>
        <td>002</td>
        <td>Channel Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>ATM</td>
        <td>ATM based transaction</td>
    </tr>
    <tr>
        <td>003</td>
        <td>Product Indicator</td>
        <td>3</td>
        <td>An-3</td>
        <td>MST</td>
        <td>Mini Statement</td>
    </tr>
    <tr>
        <td>005</td>
        <td>Number of Mini Statement Records</td>
        <td>2</td>
        <td>n-10</td>
        <td>Number of statement records</td>
        <td>Number of statement records for mini statement data is 10.</td>
    </tr>  
                <tr>
                <td></td>
                <td></td>
                <td></td>
                            <td colspan = "3" >For example, the field 120 for Mini Statement request transaction is as follows: 
04200100238002003ATM00300210003003MST00500207
033 - Length of the field 120
001 - Tag 1 
002 – Length of tag 1 data
38 – Value of Tag 1 (Transaction Type) 
002 – Tag 2 
003 – Length of tag 2 data
ATM – Value of Tag 2 (Channel Indicator)
003 – Tag 3 
003 – Length of tag 3 data
MST – Value of Tag 3 (Product Indicator)
005 – Tag 5 
002 – Length of tag 5 data
07 – Value of Tag 5 (statement for last 7 transactions)

</td></tr>
</table>



**For Mini Statement - Response**


<table border="1">
  <tr>
        <th>Tag</th>
        <th>Description</th>
        <th>Length</th>
        <th>Format</th>
        <th>Value</th>
        <th>Remarks</th>
    </tr>
    <tr>
        <td>001</td>
        <td>Transaction Type</td>
        <td>2</td>
        <td>an-2</td>
        <td>38</td>
        <td>Mini Statement Processing Code (First two characters of DE – 3)</td>
    </tr>
    <tr>
        <td>002</td>
        <td>Channel Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>ATM</td>
        <td>ATM based transaction</td>
    </tr>
    <tr>
        <td>003</td>
        <td>Product Indicator</td>
        <td>3</td>
        <td>An-3</td>
        <td>MST</td>
        <td>Mini Statement</td>
    </tr>
    <tr>
        <td>005</td>
        <td>Number of Mini Statement Records</td>
        <td>2</td>
        <td>n-10</td>
        <td>Number of statement records</td>
        <td>Number of statement records for mini statement data is 10.</td>
    </tr>
    <tr>
        <td>006</td>
        <td>Mini Statement Data</td>
        <td>297</td>
        <td>ans-297</td>
        <td>Statement Data</td>
        <td>Last 10 transaction data along with final balance.</td>
    </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                            <td colspan = "3" >The mini statement format consists of 27-character width for each statement, with trailing spaces sent if no additional data exists. A total of 11 rows, comprising 10 rows statements and 1 row account balance, should be transmitted. For all rows, each row (27-characters) shall comprise of below format.

   <table border="1">
    <tr>
        <th>Digits</th>
        <th>Length</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>1-8</td>
        <td>8</td>
        <td>Date (YYYYMMDD)</td>
    </tr>
    <tr>
        <td>9</td>
        <td>1</td>
        <td>Space character</td>
    </tr>
    <tr>
        <td>10-12</td>
        <td>3</td>
        <td>Channel of the performed transaction</td>
    </tr>
    <tr>
        <td>13</td>
        <td>1</td>
        <td>Space character</td>
    </tr>
    <tr>
        <td>14-15</td>
        <td>2</td>
        <td>Entry (DR/CR for Debit/Credit)</td>
    </tr>
    <tr>
        <td>16-27</td>
        <td>12</td>
        <td>Amount</td>
    </tr>
</table>
         For example, field 120 for 10 mini statement transactions is structured as follows: 

          33700100238002003ATM003003MST0050021000629720231201 
          ATM DR00000050000020231202 POS DR00000025000020231203
          ATM DR00000100000020231204 ATM DR00000120000020231205
          ECM DR00000170000020231206  ATM DR00000070000020231207
          ATM DR00000100000020231208 DEP CR00005000000020231209
          CHK DR00000900000020231210  IPS CR00000250000020231215
          BAL CR000035703487


            336 - Length of the field 120

            001 - Tag 1 

            002 – Length of tag 1 data 

            38 – Value of Tag 1 (Transaction Type) 

            002 – Tag 2 

            003 – Length of tag 2 data
            ATM – Value of Tag 2 (Channel Indicator)
            003 – Tag 3 
             003 – Length of tag 3 data
            MST – Value of Tag 3 (Product Indicator)
            005 – Tag 5 
            002 – Length of tag 5 data
            10 – Value of Tag 5 (Number of Mini Statement Records)
            006 – Tag 6 
            297 – Length of tag 6 data (Mini Statement Data)

    This tag contains mini statement data of 10 statements and 1 balance containing of 27 characters each.
    The data is as follows:
                20231201 ATM DR000000500000
                20231202 POS DR000000250000
                20231203 ATM DR000001000000
                20231204 ATM DR000001200000
                20231205 ECM DR000001700000
                20231206 ATM DR000000700000
                20231207 ATM DR000001000000
                20231208 DEP CR000050000000
                20231209 CHK DR000009000000
                20231210 IPS CR000002500000
                20231215 BAL CR000035703487


</td></tr>
</table>


#### 6.3.52.3 DE – 120 for ATM Transaction, Card to Card Fund Transfer

**Transaction Flow for Card to Card Funds Transfer**


1.	The Cardholder inserts his card into the ATM.
2.	Cardholder enters his card PIN.
3.	Cardholder selects card-to-card funds transfer.
4.	Cardholder inputs the beneficiary’s card number.
5.	After proceeding, the ATM initiates a new fund transfer message.
6.	The Acquirer switch forwards fund transfer Debit transaction requests to NCHL. 
7.	NCHL forwards a Debit transaction request to Issuer.
8.	Issuer bank debits the cardholder's account, responds with success to NCHL.
9.	NCHL responds with Debit success to Acquirer.
10.	The Acquirer switch then forwards fund transfer Credit transaction requests to NCHL. 
11.	NCHL forwards a Credit transaction request to Beneficiary.
12.	Beneficiary bank credits the receiver's account, responds with success to NCHL.
13.	NCHL responds to the acquirer switch with a successful response.
14.	Acquirer switch responds to the ATM with a successful response.
15.	Cardholder receives a receipt at the ATM confirming the successful fund transfer.



In the outlined card-to-card fund transfer scenario as above, three essential processes must be meticulously managed to ensure the seamless completion of the transaction. Firstly, the cardholder initiates the transfer by inserting their card, entering the recipient's details, and authorizing the transaction at the ATM. Secondly, the financial transaction undergoes a debit leg, involving the issuer bank. Thirdly, the financial transaction undergoes a credit leg, involving the beneficiary bank. Finally, the successful completion of the fund transfer is communicated back to the cardholder through the ATM, providing a comprehensive and transparent confirmation of the transaction. 


**1.	For Fund Transfer – Debit Leg fund transfer message**

**a)Request**

<table>
    <thead>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>40</td>
            <td>Fund Transfer Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM</td>
            <td>ATM based transaction</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>FTD</td>
            <td>Fund Transfer Debit</td>
        </tr>
        <tr>
            <td>007</td>
            <td>Sender PAN</td>
            <td>LLVAR</td>
            <td>n..19</td>
            <td></td>
            <td>Card number of the sender</td>
        </tr>
        <tr>
            <td>008</td>
            <td>Beneficiary PAN</td>
            <td>LLVAR</td>
            <td>n..19</td>
            <td></td>
            <td>Card number of the beneficiary</td>
        </tr>
    </tbody>
</table>



**b)Response**

<table>
    <thead>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>40</td>
            <td>Fund Transfer Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM</td>
            <td>ATM based transaction</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>FTD</td>
            <td>Fund Transfer Debit</td>
        </tr>
        <tr>
            <td>007</td>
            <td>Sender PAN</td>
            <td>LLVAR</td>
            <td>n..19</td>
            <td></td>
            <td>Card number of the sender</td>
        </tr>
        <tr>
            <td>008</td>
            <td>Beneficiary PAN</td>
            <td>LLVAR</td>
            <td>n..19</td>
            <td></td>
            <td>Card number of the beneficiary</td>
        </tr>
    </tbody>
</table>


**2.	For Fund Transfer – Credit Leg fund transfer message**

**a)Request**

<table>
    <thead>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>29</td>
            <td>Fund Transfer Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM</td>
            <td>ATM based transaction</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>FTC</td>
            <td>Fund Transfer Credit</td>
        </tr>
        <tr>
            <td>007</td>
            <td>Sender PAN</td>
            <td>LLVAR</td>
            <td>n..19</td>
            <td></td>
            <td>Card number of the sender</td>
        </tr>
        <tr>
            <td>008</td>
            <td>Beneficiary PAN</td>
            <td>LLVAR</td>
            <td>n..19</td>
            <td></td>
            <td>Card number of the beneficiary</td>
        </tr>
    </tbody>
</table>



**b)Response**

<table>
    <thead>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>29</td>
            <td>Fund Transfer Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM</td>
            <td>ATM based transaction</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>FTC</td>
            <td>Fund Transfer Credit</td>
        </tr>
        <tr>
            <td>007</td>
            <td>Sender PAN</td>
            <td>LLVAR</td>
            <td>n..19</td>
            <td></td>
            <td>Card number of the sender</td>
        </tr>
        <tr>
            <td>008</td>
            <td>Beneficiary PAN</td>
            <td>LLVAR</td>
            <td>n..19</td>
            <td></td>
            <td>Card number of the beneficiary</td>
        </tr>
    </tbody>
</table>


#### 6.3.52.4 DE – 120 for ATM Transaction, Cheque Book Request


**1.	Cheque Book Request**

<table>

  <thead>
	<th colspan="6" >1.	Cheque Book Request </th>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>36</td>
            <td>Cheque Book Request Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM</td>
            <td>ATM based transaction</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>CQB</td>
            <td>Cheque Book Request</td>
        </tr>
        <tr>
            <td>009</td>
            <td>No of Cheque</td>
            <td>2</td>
            <td>n-2</td>
            <td>-</td>
            <td>Number of pages of the cheque</td>
        </tr>
    </tbody>
</table>

**2.	Response to Cheque Book Request**

<table>
    <thead>
	<th colspan="6">2.	Response to Cheque Book Request </th>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>36</td>
            <td>Cheque Book Request Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM</td>
            <td>ATM based transaction</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>CQB</td>
            <td>Cheque Book Request</td>
        </tr>
        <tr>
            <td>009</td>
            <td>No of Cheque</td>
            <td>2</td>
            <td>n-2</td>
            <td>-</td>
            <td>Number of pages of the cheque</td>
        </tr>
    </tbody>
</table>


#### 6.3.52.5 DE – 120 for ATM Transaction, Statement Request



**1.	Statement Request**

<table>
    <thead>
	<th colspan="6">1.Statement Request </th>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>37</td>
            <td>Statement Request Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM</td>
            <td>ATM based transaction</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>STM</td>
            <td>Statement Request</td>
        </tr>
        <tr>
            <td>010</td>
            <td>From date</td>
            <td>8</td>
            <td>yyyymmdd</td>
            <td>-</td>
            <td>Statement date starting from</td>
        </tr>
    </tbody>
</table>


**2.	Response to Statement Request**

<table>
    <thead>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>37</td>
            <td>Statement Request Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM</td>
            <td>ATM based transaction</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>STM</td>
            <td>Statement Request</td>
        </tr>
        <tr>
            <td>010</td>
            <td>From date</td>
            <td>8</td>
            <td>yyyymmdd</td>
            <td>-</td>
            <td>Statement date starting from</td>
        </tr>
    </tbody>
</table>


####  6.3.52.6 DE – 120 for Utility Payment (Bill Payment)


**1.	Bill Payment Request**


<table border="1">
    <tr>
        <th>Tag</th>
        <th>Description</th>
        <th>Length</th>
        <th>Format</th>
        <th>Value</th>
        <th>Remarks</th>
    </tr>
    <tr>
        <td>001</td>
        <td>Transaction Type</td>
        <td>2</td>
        <td>an-2</td>
        <td>90</td>
        <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
    </tr>
    <tr>
        <td>002</td>
        <td>Channel Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>ATM
        POS
        ECM
        OTH</td>
        <td>ATM based transaction
        POS based transaction
        Ecom based transaction
        Other Channels</td>
    </tr>
    <tr>
        <td>003</td>
        <td>Product Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>BIL
        FEE
        INT
        DTH
        RNT
        TOP
        NEA
        WAT
        BRO
        OTH</td>
        <td>Bill Payment
        Fee Payment
        Internet Bill Payments
        Direct To Home and Cable TV
        House Rent Payment
        Telecom Mobile Top-up
        NEA Bill Payment
        Khanepani Bill Payment
        Broker or Capital Payments
        Others</td>
    </tr>
    <tr>
        <td>011</td>
        <td>Bill Number/ In-voice Number</td>
        <td>100</td>
        <td>ans…40</td>
        <td>…</td>
        <td>Bill Payment Transaction Unique Reference Number.</td>
    </tr>
    <tr>
        <td>012</td>
        <td>Payer Details</td>
        <td>100</td>
        <td>ans…40</td>
        <td>…</td>
        <td>Bill Payment Transaction Payer Details</td>
    </tr>
    <tr>
        <td>013</td>
        <td>Payee Details</td>
        <td>100</td>
        <td>ans…40</td>
        <td>…</td>
        <td>The Ultimate Beneficiary of Bill Payment Transaction.</td>
    </tr>
    <tr>
        <td>014</td>
        <td>Consumer ID</td>
        <td>35</td>
        <td>ans…35</td>
        <td>…</td>
        <td>Customer Identification Number</td>
    </tr>
    <tr>
        <td>015</td>
        <td>End to End Id</td>
        <td>35</td>
        <td>ans…35</td>
        <td>…</td>
        <td>Payment End to End Id for reconciliation</td>
    </tr>
    <tr>
        <td>099</td>
        <td>Purpose</td>
        <td>100</td>
        <td>ans…50</td>
        <td>…</td>
        <td>Remarks for the Purchase</td>
    </tr>
</table>


**2.	Response to Bill Payment Request**

<table border="1">
    <tr>
        <th>Tag</th>
        <th>Description</th>
        <th>Length</th>
        <th>Format</th>
        <th>Value</th>
        <th>Remarks</th>
    </tr>
    <tr>
        <td>001</td>
        <td>Transaction Type</td>
        <td>2</td>
        <td>an-2</td>
        <td>90</td>
        <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
    </tr>
    <tr>
        <td>002</td>
        <td>Channel Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>
            <ul>
                <li>ATM - ATM based transaction</li>
                <li>POS - POS based transaction</li>
                <li>ECM - Ecom based transaction</li>
                <li>OTH - Other Channels</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>ATM based transaction</li>
                <li>POS based transaction</li>
                <li>Ecom based transaction</li>
                <li>Other Channels</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>003</td>
        <td>Product Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>
            <ul>
                <li>BIL - Bill Payment</li>
                <li>FEE - Fee Payment</li>
                <li>INT - Internet Bill Payments</li>
                <li>DTH - Direct To Home and Cable TV</li>
                <li>RNT - House Rent Payment</li>
                <li>TOP - Telecom Mobile Top-up</li>
                <li>NEA - NEA Bill Payment</li>
                <li>WAT - Khanepani Bill Payment</li>
                <li>BRO - Broker or Capital Payments</li>
                <li>OTH - Others</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Bill Payment</li>
                <li>Fee Payment</li>
                <li>Internet Bill Payments</li>
                <li>Direct To Home and Cable TV</li>
                <li>House Rent Payment</li>
                <li>Telecom Mobile Top-up</li>
                <li>NEA Bill Payment</li>
                <li>Khanepani Bill Payment</li>
                <li>Broker or Capital Payments</li>
                <li>Others</li>
            </ul>
        </td>
    </tr>
</table>


####  6.3.52.7 DE – 120 for Utility Payment (Government Revenue Payment)

**1.	Government Revenue Payment Request**

<table border="1">
  <tr>
    <th>Tag</th>
    <th>Description</th>
    <th>Length</th>
    <th>Format</th>
    <th>Value</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>001</td>
    <td>Transaction Type</td>
    <td>2</td>
    <td>an-2</td>
    <td>90</td>
    <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
  </tr>
  <tr>
    <td>002</td>
    <td>Channel Indicator</td>
    <td>3</td>
    <td>an-3</td>
    <td>ATM
    POS
    ECM
    OTH</td>
    <td>ATM based transaction
    POS based transaction
    Ecom based transaction
    Others</td>
  </tr>
  <tr>
    <td>003</td>
    <td>Product Indicator</td>
    <td>3</td>
    <td>an-3</td>
    <td>
    FTX
    PTX
    LTX</td>
    <td>
    Federal Government Revenue Payment
    Provincial Government Revenue Payment
    Local Government Revenue Payment</td>
  </tr>
  <tr>
    <td>012</td>
    <td>Payer Details</td>
    <td>100</td>
    <td>ans ...40</td>
    <td>...</td>
    <td>Payers Details</td>
  </tr>
  <tr>
    <td>015</td>
    <td>End to End Id</td>
    <td>35</td>
    <td>ans...35</td>
    <td>...</td>
    <td>Payment End to End Id for reconciliation</td>
  </tr>
  <tr>
    <td>016</td>
    <td>Category Purpose</td>
    <td>4</td>
    <td>ans-4</td>
    <td>...</td>
    <td>Category of the payment type defined by NCHL</td>
  </tr>
  <tr>
    <td>017</td>
    <td>EBPP Number</td>
    <td>100</td>
    <td>ans...35</td>
    <td>...</td>
    <td>Electronic Bill Presentment Payment generated from GoN Portal</td>
  </tr>
  <tr>
    <td>018</td>
    <td>rcAgency Code</td>
    <td>100</td>
    <td>ans...35</td>
    <td>...</td>
    <td>Revenue collecting agency/office code and name</td>
  </tr>
  <tr>
    <td>019</td>
    <td>rcAgency Name</td>
    <td>100</td>
    <td>ans...50</td>
    <td>...</td>
    <td>Revenue collecting agency/office code and name</td>
  </tr>
  <tr>
    <td>020</td>
    <td>Fiscal Year</td>
    <td>4</td>
    <td>yyyy</td>
    <td>...</td>
    <td>Fiscal Year</td>
  </tr>
  <tr>
    <td>021</td>
    <td>Tax Payer Id</td>
    <td>35</td>
    <td>an...35</td>
    <td>...</td>
    <td>Tax Payer Id</td>
  </tr>
  <tr>
    <td>022</td>
    <td>Revenue Collecting Bank</td>
    <td>35</td>
    <td>ans...35</td>
    <td>...</td>
    <td>Revenue collecting Bank</td>
  </tr>
  <tr>
    <td>099</td>
    <td>Purpose</td>
    <td>100</td>
    <td>ans...50</td>
    <td>...</td>
    <td>Remarks for the Purchase</td>
  </tr>
</table>




**2.	Response to Government Revenue Payment Request**

<table border="1">
    <tr>
        <th>Tag</th>
        <th>Description</th>
        <th>Length</th>
        <th>Format</th>
        <th>Value</th>
        <th>Remarks</th>
    </tr>
    <tr>
        <td>001</td>
        <td>Transaction Type</td>
        <td>2</td>
        <td>an-2</td>
        <td>90</td>
        <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
    </tr>
    <tr>
        <td>002</td>
        <td>Channel Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>ATM</td>
        <td>ATM based transaction</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>POS</td>
        <td>POS based transaction</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>ECM</td>
        <td>Ecom based transaction</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>OTH</td>
        <td>Others</td>
    </tr>
    <tr>
        <td>003</td>
        <td>Product Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>FTX</td>
        <td>Federal Government Revenue Payment</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>PTX</td>
        <td>Provincial Government Revenue Payment</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>LTX</td>
        <td>Local Government Revenue Payment</td>
    </tr>
    <tr>
        <td>012</td>
        <td>Payer Details</td>
        <td>100</td>
        <td>ans...40</td>
        <td>…</td>
        <td>Payers Details</td>
    </tr>
    <tr>
        <td>015</td>
        <td>End to End Id</td>
        <td>35</td>
        <td>ans...35</td>
        <td>…</td>
        <td>Payment End to End Id for reconciliation</td>
    </tr>
    <tr>
        <td>016</td>
        <td>Category Purpose</td>
        <td>4</td>
        <td>ans-4</td>
        <td>…</td>
        <td>Category of the payment type defined by NCHL</td>
    </tr>
    <tr>
        <td>017</td>
        <td>EBPP Number</td>
        <td>100</td>
        <td>ans...35</td>
        <td>…</td>
        <td>Electronic Bill Presentment Payment generated from GoN Portal</td>
    </tr>
    <tr>
        <td>018</td>
        <td>rcAgency Code</td>
        <td>100</td>
        <td>ans...35</td>
        <td>…</td>
        <td>Revenue collecting agency/office code and name</td>
    </tr>
    <tr>
        <td>019</td>
        <td>rcAgency Name</td>
        <td>100</td>
        <td>ans...50</td>
        <td>…</td>
        <td>Revenue collecting agency/office code and name</td>
    </tr>
    <tr>
        <td>020</td>
        <td>Fiscal Year</td>
        <td>4</td>
        <td>yyyy</td>
        <td>…</td>
        <td>Fiscal Year</td>
    </tr>
    <tr>
        <td>021</td>
        <td>Tax Payer Id</td>
        <td>35</td>
        <td>an…35</td>
        <td>…</td>
        <td>Tax Payer Id</td>
    </tr>
    <tr>
        <td>022</td>
        <td>Revenue Collecting Bank</td>
        <td>35</td>
        <td>ans...35</td>
        <td>…</td>
        <td>Revenue collecting Bank</td>
    </tr>
    <tr>
        <td>099</td>
        <td>Purpose</td>
        <td>100</td>
        <td>ans…50</td>
        <td>…</td>
        <td>Remarks for the Purchase</td>
    </tr>
</table>




#### 6.3.52.8 DE – 120 for Utility Payment (Recurring Payment)

**1.	Recurring Payment Request**

<table border="1">
    <tr>
        <th>Tag</th>
        <th>Description</th>
        <th>Length</th>
        <th>Format</th>
        <th>Value</th>
        <th>Remarks</th>
    </tr>
    <tr>
        <td>001</td>
        <td>Transaction Type</td>
        <td>2</td>
        <td>an-2</td>
        <td>90</td>
        <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
    </tr>
    <tr>
        <td>002</td>
        <td>Channel Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>ATM</td>
        <td>ATM based transaction</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>POS</td>
        <td>POS based transaction</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>ECM</td>
        <td>Ecom based transaction</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>OTH</td>
        <td>Others</td>
    </tr>
    <tr>
        <td>003</td>
        <td>Product Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>INU</td>
        <td>Insurance Premium Payment</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>CCP</td>
        <td>Credit Card Bill Payment</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>SIP</td>
        <td>Capital Mutual Fund Payments</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>FEE</td>
        <td>Fees Payment</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>BIL</td>
        <td>Bill Payment</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>EMI</td>
        <td>EMI/Loan Payment</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>OTH</td>
        <td>Others</td>
    </tr>
    <tr>
        <td>014</td>
        <td>Consumer ID</td>
        <td>35</td>
        <td>ans…35</td>
        <td>…</td>
        <td>A Customer ID given for subscription services</td>
    </tr>
    <tr>
        <td>015</td>
        <td>End to End Id</td>
        <td>35</td>
        <td>ans...35</td>
        <td>…</td>
        <td>Payment End to End Id for reconciliation</td>
    </tr>
    <tr>
        <td>023</td>
        <td>Participant ID</td>
        <td>35</td>
        <td>ans…35</td>
        <td>…</td>
        <td>Unique ID of the Third Party System</td>
    </tr>
    <tr>
        <td>024</td>
        <td>Policy Number or Debit Note</td>
        <td>35</td>
        <td>ans…35</td>
        <td>…</td>
        <td>Policy Number or Debit Note</td>
    </tr>
    <tr>
        <td>025</td>
        <td>Credit Card Number</td>
        <td>19</td>
        <td>n..19</td>
        <td>…</td>
        <td>Credit Card Number</td>
    </tr>
    <tr>
        <td>026</td>
        <td>Recurring Term</td>
        <td>3</td>
        <td>n-3</td>
        <td>…</td>
        <td>Payment term of the particular recurring payment</td>
    </tr>
     <tr>
        <td>027</td>
        <td>Payment (Beneficiary) entity</td>
        <td>35</td>
        <td>ans…35</td>
        <td>…</td>
        <td>Beneficiary to receive the payment</td>
    </tr>
     <tr>
        <td>028</td>
        <td>Reference ID</td>
        <td>35</td>
        <td>ans..35</td>
        <td>…</td>
        <td>Any value as defined by merchant or acquirer in order to identify the transaction</td>
    </tr>
     <tr>
        <td>099</td>
        <td>Purpose</td>
        <td>100</td>
        <td>ans…50</td>
        <td>…</td>
        <td>Remarks for the Purchase</td>
    </tr>


</table>

**2.	Response to Recurring Payment Request**


<table>
<th colspan="6">2.	Response to Recurring Payment Request</th>
    <tr>
        <th>Tag</th>
        <th>Description</th>
        <th>Length</th>
        <th>Format</th>
        <th>Value</th>
        <th>Remarks</th>
    </tr>
    <tr>
        <td>001</td>
        <td>Transaction Type</td>
        <td>2</td>
        <td>an-2</td>
        <td>90</td>
        <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
    </tr>
    <tr>
        <td>002</td>
        <td>Channel Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>ATM
        POS
        ECM
        OTH</td>
        <td>ATM based transaction
        POS based transaction
        Ecom based transaction
        Others</td>
    </tr>
    <tr>
        <td>003</td>
        <td>Product Indicator</td>
        <td>3</td>
        <td>an-3</td>
        <td>INU
        CCP
        SIP
        FEE
        BIL
        EMI
        OTH</td>
        <td>Insurance Premium Payment
        Credit Card Bill Payment
        Capital Mutual Fund Payments
        Fees Payment
        Bill Payment
        EMI/Loan Payment
        Others</td>
    </tr>
    <tr>
        <td>014</td>
        <td>Consumer ID</td>
        <td>35</td>
        <td>ans…35</td>
        <td>...</td>
        <td>A Customer ID given for subscription services</td>
    </tr>
    <tr>
        <td>015</td>
        <td>End to End Id</td>
        <td>35</td>
        <td>ans...35</td>
        <td>...</td>
        <td>Payment End to End Id for reconciliation</td>
    </tr>
    <tr>
        <td>023</td>
        <td>Participant ID</td>
        <td>35</td>
        <td>ans…35</td>
        <td>...</td>
        <td>Unique ID of the Third Party System</td>
    </tr>
    <tr>
        <td>024</td>
        <td>Policy Number or Debit Note</td>
        <td>35</td>
        <td>ans…35</td>
        <td>...</td>
        <td>Policy Number or Debit Note</td>
    </tr>
    <tr>
        <td>025</td>
        <td>Credit Card Number</td>
        <td>19</td>
        <td>n..19</td>
        <td>...</td>
        <td>Credit Card Number</td>
    </tr>
    <tr>
        <td>026</td>
        <td>Recurring Term</td>
        <td>3</td>
        <td>n-3</td>
        <td>...</td>
        <td>Payment term of the particular recurring payment</td>
    </tr>
    <tr>
        <td>027</td>
        <td>Payment (Beneficiary) entity</td>
        <td>35</td>
        <td>ans…35</td>
        <td>...</td>
        <td>Beneficiary to receive the payment</td>
    </tr>
    <tr>
        <td>028</td>
        <td>Reference ID</td>
        <td>35</td>
        <td>ans…35</td>
        <td>...</td>
        <td>Any value as defined by merchant or acquirer in order to identify the transaction</td>
    </tr>
    <tr>
        <td>099</td>
        <td>Purpose</td>
        <td>100</td>
        <td>ans…50</td>
        <td>...</td>
        <td>Remarks for the Purchase</td>
    </tr>
</table>




####  6.3.52.9 DE – 120 for Utility Payment (Insurance Payment)


**1.	Insurance Payment Request**

<table>
    <thead>
        <tr>
            <th colspan="6" >Insurance Payment Request</th>
        </tr>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>90</td>
            <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM
            POS
            ECM
            OTH</td>
            <td>ATM based transaction 
            POS based transaction
            Ecom based transaction
            Others</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>INU</td>
            <td>Insurance Premium Payment</td>
        </tr>
        <tr>
            <td>024</td>
            <td>Policy Number</td>
            <td>20</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Insurance Policy Number</td>
        </tr>
        <tr>
            <td>027</td>
            <td>Payment (Beneficiary) entity</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Beneficiary to receive the payment</td>
        </tr>
        <tr>
            <td>029</td>
            <td>Consumer Name</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Consumer Name</td>
        </tr>
        <tr>
            <td>030</td>
            <td>Date of Birth</td>
            <td>8</td>
            <td>yyyymmdd</td>
            <td>…</td>
            <td>Date of birth</td>
        </tr>
        <tr>
            <td>031</td>
            <td>Policy Amount</td>
            <td>12</td>
            <td>n-12</td>
            <td>…</td>
            <td>Total Amount with last 2 as decimal</td>
        </tr>
        <tr>
            <td>032</td>
            <td>Premium Amount</td>
            <td>12</td>
            <td>n-12</td>
            <td>…</td>
            <td>Premium Amount with last 2 as decimals</td>
        </tr>
        <tr>
            <td>033</td>
            <td>Policy Period</td>
            <td>2</td>
            <td>n-2</td>
            <td>…</td>
            <td>No of years of the policy</td>
        </tr>
        <tr>
            <td>099</td>
            <td>Purpose</td>
            <td>100</td>
            <td>ans…50</td>
            <td>…</td>
            <td>Remarks or description</td>
        </tr>
    </tbody>
</table>



**2.	Response to Insurance Request**


<table>
    <thead>
        <tr>
            <th colspan="6">Response to Insurance Request</th>
        </tr>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>90</td>
            <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM
            POS
            ECM
            OTH</td>
            <td>ATM based transaction
            POS based transaction
            Ecom based transaction
            Others</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>INU</td>
            <td>Insurance Premium Payment</td>
        </tr>
        <tr>
            <td>024</td>
            <td>Policy Number</td>
            <td>20</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Insurance Policy Number</td>
        </tr>
        <tr>
            <td>027</td>
            <td>Payment (Beneficiary) entity</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Beneficiary to receive the payment</td>
        </tr>
        <tr>
            <td>029</td>
            <td>Consumer Name</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Consumer Name</td>
        </tr>
        <tr>
            <td>030</td>
            <td>Date of Birth</td>
            <td>8</td>
            <td>yyyymmdd</td>
            <td>…</td>
            <td>Date of birth</td>
        </tr>
        <tr>
            <td>031</td>
            <td>Policy Amount</td>
            <td>12</td>
            <td>n-12</td>
            <td>…</td>
            <td>Total Amount with last 2 as decimal</td>
        </tr>
        <tr>
            <td>032</td>
            <td>Premium Amount</td>
            <td>12</td>
            <td>n-12</td>
            <td>…</td>
            <td>Premium Amount with last 2 as decimals</td>
        </tr>
        <tr>
            <td>033</td>
            <td>Policy Period</td>
            <td>2</td>
            <td>n-2</td>
            <td>…</td>
            <td>No of years of the policy</td>
        </tr>
        <tr>
            <td>099</td>
            <td>Purpose</td>
            <td>100</td>
            <td>ans…50</td>
            <td>…</td>
            <td>Remarks or description</td>
        </tr>
    </tbody>
</table>


#### 6.3.52.10 DE – 120 for Utility Payment (EMI Payment)


**1.	EMI Payment Request**


<table>
    <thead>
        <tr>
            <th colspan="6">EMI Payment Request</th>
        </tr>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>90</td>
            <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM
            POS 
            ECM
            OTH</td>
            <td>ATM based transaction
            POS based transaction
            Ecom based transaction
            Others</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>EMI</td>
            <td>EMI Payment</td>
        </tr>
        <tr>
            <td>027</td>
            <td>Payment (Beneficiary) entity</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Beneficiary to receive the payment</td>
        </tr>
        <tr>
            <td>034</td>
            <td>Total Amount</td>
            <td>12</td>
            <td>n-12</td>
            <td>…</td>
            <td>Total Amount with last 2 as decimal</td>
        </tr>
        <tr>
            <td>035</td>
            <td>EMI Amount</td>
            <td>12</td>
            <td>n-12</td>
            <td>…</td>
            <td>EMI Amount with last 2 as decimals</td>
        </tr>
        <tr>
            <td>036</td>
            <td>No of Instalment</td>
            <td>3</td>
            <td>n-3</td>
            <td>…</td>
            <td>No of payment Instalment</td>
        </tr>
        <tr>
            <td>099</td>
            <td>Purpose</td>
            <td>100</td>
            <td>ans…50</td>
            <td>…</td>
            <td>Remarks or description</td>
        </tr>
    </tbody>
</table>



**2.	Response to EMI Request**


<table>
    <thead>
        <tr>
            <th colspan="6" >Response to EMI Request</th>
        </tr>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>90</td>
            <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM
            POS 
            ECM
            OTH</td>
            <td>ATM based transaction
            POS based transaction
            Ecom based transaction
            Others</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>EMI</td>
            <td>EMI Payment</td>
        </tr>
        <tr>
            <td>027</td>
            <td>Payment (Beneficiary) entity</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Beneficiary to receive the payment</td>
        </tr>
        <tr>
            <td>034</td>
            <td>Total Amount</td>
            <td>12</td>
            <td>n-12</td>
            <td>…</td>
            <td>Total Amount with last 2 as decimal</td>
        </tr>
        <tr>
            <td>035</td>
            <td>EMI Amount</td>
            <td>12</td>
            <td>n-12</td>
            <td>…</td>
            <td>EMI Amount with last 2 as decimals</td>
        </tr>
        <tr>
            <td>036</td>
            <td>No of Instalment</td>
            <td>3</td>
            <td>n-3</td>
            <td>…</td>
            <td>No of payment Instalment</td>
        </tr>
        <tr>
            <td>099</td>
            <td>Purpose</td>
            <td>100</td>
            <td>ans…50</td>
            <td>…</td>
            <td>Remarks or description</td>
        </tr>
    </tbody>
</table>


#### 6.3.52.11 DE – 120 for Utility Payment (Tax Refund)


**1.	Tax Refund Request**

<table>
    <thead>
        <tr>
            <th colspan="6">Tax Refund Request</th>
        </tr>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>90</td>
            <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM
            POS 
            ECM
            OTH</td>
            <td>ATM based transaction
            POS based transaction
            Ecom based transaction
            Others</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>TXR</td>
            <td>VAT Refund Transaction</td>
        </tr>
        <tr>
            <td>014</td>
            <td>Consumer ID</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Customer Identification Number</td>
        </tr>
        <tr>
            <td>015</td>
            <td>End to End Id</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Payment End to End Id for reconciliation</td>
        </tr>
        <tr>
            <td>037</td>
            <td>Seller PAN Number</td>
            <td>20</td>
            <td>an-20</td>
            <td>…</td>
            <td>Seller Business PAN Number</td>
        </tr>
        <tr>
            <td>038</td>
            <td>Invoice Date</td>
            <td>8</td>
            <td>yyyymmdd</td>
            <td>…</td>
            <td>Bill Invoice Date</td>
        </tr>
        <tr>
            <td>039</td>
            <td>Consumer Additional Information</td>
            <td>100</td>
            <td>ans…50</td>
            <td>…</td>
            <td>Customer Additional Information</td>
        </tr>
        <tr>
            <td>040</td>
            <td>Original Txn ID</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Original Transaction Id</td>
        </tr>
        <tr>
            <td>041</td>
            <td>Tax Amount</td>
            <td>12</td>
            <td>n-12</td>
            <td>…</td>
            <td>Amount including 2 decimal digits</td>
        </tr>
        <tr>
            <td>099</td>
            <td>Purpose</td>
            <td>100</td>
            <td>ans…50</td>
            <td>…</td>
            <td>Remarks or description</td>
        </tr>
    </tbody>
</table>


**2.	Response to Tax Refund Request**


<table>
    <thead>
        <tr>
            <th colspan="6" >Response to Tax Refund Request</th>
        </tr>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Length</th>
            <th>Format</th>
            <th>Value</th>
            <th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Transaction Type</td>
            <td>2</td>
            <td>an-2</td>
            <td>90</td>
            <td>Utility Payment Processing Code (First two characters of DE – 3)</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Channel Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>ATM
            POS 
            ECM
            OTH</td>
            <td>ATM based transaction
            POS based transaction
            Ecom based transaction
            Others</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Product Indicator</td>
            <td>3</td>
            <td>an-3</td>
            <td>TXR</td>
            <td>VAT Refund Transaction</td>
        </tr>
        <tr>
            <td>014</td>
            <td>Consumer ID</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Customer Identification Number</td>
        </tr>
        <tr>
            <td>015</td>
            <td>End to End Id</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Payment End to End Id for reconciliation</td>
        </tr>
        <tr>
            <td>037</td>
            <td>Seller PAN Number</td>
            <td>20</td>
            <td>an-20</td>
            <td>…</td>
            <td>Seller Business PAN Number</td>
        </tr>
        <tr>
            <td>038</td>
            <td>Invoice Date</td>
            <td>8</td>
            <td>yyyymmdd</td>
            <td>…</td>
            <td>Bill Invoice Date</td>
        </tr>
        <tr>
            <td>039</td>
            <td>Consumer Additional Information</td>
            <td>100</td>
            <td>ans…50</td>
            <td>…</td>
            <td>Customer Additional Information</td>
        </tr>
        <tr>
            <td>040</td>
            <td>Original Txn ID</td>
            <td>35</td>
            <td>ans…35</td>
            <td>…</td>
            <td>Original Transaction Id</td>
        </tr>
        <tr>
            <td>041</td>
            <td>Tax Amount</td>
            <td>12</td>
            <td>n-12</td>
            <td>…</td>
            <td>Amount including 2 decimal digits</td>
        </tr>
        <tr>
            <td>099</td>
            <td>Purpose</td>
            <td>100</td>
            <td>ans…50</td>
            <td>…</td>
            <td>Remarks or description</td>
        </tr>
    </tbody>
</table>



### 6.3.53 DE - 121 Additional Data 3 (Advice Reason Code)


<table>
    <thead>
        <tr>
            <th colspan="2">DE – 121 Additional Data 3 (Advice Reason Code)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Type</td>
            <td>ans..999</td>
        </tr>
        <tr>
            <td>Format</td>
            <td>LLLVAR</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>This field gives the reason for which a STIP advice is sent.</td>
        </tr>
        <tr>
            <td>Useful values</td>
            <td>
                <ul>
                    <li>1001 – Issuer Signed off</li>
                    <li>1002 – Issuer Time out / not responding</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Echo</td>
            <td>It should be echoed back in response, if present in the request.</td>
        </tr>
        <tr>
            <td>Validation</td>
            <td>This field contains a 3-byte length field which is zero-filled and right-justified, followed by up to 999 alphanumeric and symbol characters. The total length of this field cannot exceed 1002 bytes.</td>
        </tr>
        <tr>
            <td>Presence</td>
            <td>This field is conditional and should be present for all STIP-based transactions.</td>
        </tr>
    </tbody>
</table>



### 6.3.54 DE - 122 Additional Data 4 (Private Use)

<table>
    <thead>
        <tr>
            <th colspan="2">DE – 122 Additional Data 4 (Private Use)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Type</td>
            <td>ans..999</td>
        </tr>
        <tr>
            <td>Format</td>
            <td>LLLVAR</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>This field contains private data associated with NCHL messages.</td>
        </tr>
        <tr>
            <td>Echo</td>
            <td>It should be echoed back in response, if present in the request.</td>
        </tr>
        <tr>
            <td>Validation</td>
            <td>This field contains a 3-byte length field which is zero-filled and right-justified, followed by up to 999 alphanumeric and symbol characters. The total length of this field cannot exceed 1002 bytes.</td>
        </tr>
        <tr>
            <td>Presence</td>
            <td>This field is optional in all transaction messages.</td>
        </tr>
    </tbody>
</table>



### 6.3.55 DE - 123 Additional Data 5 (Private Use)



<table>
    <thead>
        <tr>
            <th colspan="2">DE – 123 Additional Data 5 (Private Use)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Type</td>
            <td>ans..999</td>
        </tr>
        <tr>
            <td>Format</td>
            <td>LLLVAR</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>This field contains private data associated with NCHL messages.</td>
        </tr>
        <tr>
            <td>Echo</td>
            <td>It should be echoed back in response, if present in the request.</td>
        </tr>
        <tr>
            <td>Validation</td>
            <td>This field contains a 3-byte length field which is zero-filled and right-justified, followed by up to 999 alphanumeric and symbol characters. The total length of this field cannot exceed 1002 bytes.</td>
        </tr>
        <tr>
            <td>Presence</td>
            <td>This field is optional in all transaction messages.</td>
        </tr>
    </tbody>
</table>

### 6.3.56 DE - 124 Additional Data 6 (File Action Code)



<table border="1">

 <tr>
      <th colspan = "2">DE - 124 Additional Data 6 (File Action Code) </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>ans..999</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLVAR</td>
        </tr>
        <tr>
            <td>Description:</td> 
            <td>This field is required in file update response messages of add a record, delete a record, change an existing record, and replace a record. The following table lists the field structure:
           <table border="1">
                    <tr>
                        <th>Action Code</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>300</td>
                        <td>Ok</td>
                    </tr>
                    <tr>
                        <td>301</td>
                        <td>Unable to locate record on file</td>
                    </tr>
                    <tr>
                        <td>302</td>
                        <td>Duplicate, old record replaced</td>
                    </tr>
                    <tr>
                        <td>303</td>
                        <td>File locked out</td>
                    </tr>
                    <tr>
                        <td>304</td>
                        <td>Format error</td>
                    </tr>
                </table> </td>          
        </tr>
        <tr>
            <td>Echo:</td>
            <td>If present, it should be echoed back in response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>Field data shall be provided as per given format.</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>This field requires in file update response messages (0312).</td>
        </tr>
    </table>



###  6.3.57 DE - 125 Additional Data 7 (File Data Record)



<table border="1">

 <tr>
      <th colspan = "2">DE - 104 OCT Data </th>
      </tr>
        <tr>
            <td>Type:</td>
            <td>ans..999</td>
        </tr>
        <tr>
            <td>Format:</td>
            <td>LLVAR</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td> This field contains file update data associated with file data updates and inquiries. The contents of field 125 are tag based to identify the individual element within the data field. The tag based value is formatted using the “tag-length-value (TLV)” encoding procedure.
            <table border="1">
        <tr>
            <th>Tag</th>
            <th>Presence</th>
            <th>Length</th>
            <th>Description</th>
            <th> Values</th>
        </tr>
        <tr>
            <td>001</td>
            <td>Mandatory</td>
            <td>an-2</td>
            <td>Instrument Type</td>
            <td><table border="1">
        <tr>
            <th>Function</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>NP</td>
            <td>NepalPay Card</td>
        </tr>
        <tr>
            <td>DS</td>
            <td>Discover Card</td>
        </tr>
        <tr>
            <td>VS</td>
            <td>VISA Card</td>
        </tr>
        <tr>
            <td>MC</td>
            <td>Master Card</td>
        </tr>
        <tr>
            <td>CU</td>
            <td>China UnionPay Card</td>
        </tr>
        <tr>
            <td>MT</td>
            <td>Maestro Card</td>
        </tr>
    </table> </td>
        </tr> 
          <tr>
            <td>002</td>
            <td>Mandatory</td>
            <td>an-2</td>
            <td>Card Status</td>
            <td> <table border="1">
        <tr>
            <th>Function</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>00</td>
            <td>Card issued, not active</td>
        </tr>
        <tr>
            <td>01</td>
            <td>Active</td>
        </tr>
        <tr>
            <td>02</td>
            <td>Card lost (blocked), keep card</td>
        </tr>
        <tr>
            <td>03</td>
            <td>Card stolen (blocked), keep card</td>
        </tr>
        <tr>
            <td>04</td>
            <td>Blocked by PRM, return card</td>
        </tr>
        <tr>
            <td>08</td>
            <td>Blocked by Switch, return card</td>
        </tr>
        <tr>
            <td>09</td>
            <td>Blocked by Issuer, return card</td>
        </tr>
    </table></td>
        </tr> 
        <tr>
            <td>003</td>
            <td>Conditional</td>
            <td>an-12</td>
            <td>PVV (PIN Offset)</td>
            <td>Example: 1234FFFFFFFF
It is left filled with ‘F’, tag 27 is mandatory for this.
 </td>
            </tr>
            <tr>
            <td>006</td>
            <td>Conditional</td>
            <td>n-6</td>
            <td>Expiry Date</td>
            <td> <table border="1">
        <tr>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>YYYY</td>
            <td>Year</td>
        </tr>
        <tr>
            <td>MM</td>
            <td>Month</td>
        </tr>
    </table></td>
        </tr> 
        <tr>
            <td>009</td>
            <td>Conditional</td>
            <td>an-2</td>
            <td>Number of Accounts</td>
            <td>The total number of accounts associated with the card</td>
        </tr> 
        <tr>
            <td>010</td>
            <td>Conditional</td>
            <td>Ans…20</td>
            <td>Account Number</td>
            <td> Should match field format received in balance updates.</td>
        </tr> 
        <tr>
            <td>011</td>
            <td>Conditional</td>
            <td>an-2</td>
            <td>Card Status</td>
            <td>  <table border="1">
        <tr>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>00</td>
            <td>Default Account</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Saving Account</td>
        </tr>
        <tr>
            <td>20</td>
            <td>Current Account</td>
        </tr>
        <tr>
            <td>30</td>
            <td>Credit Account</td>
        </tr>
    </table></td>
        </tr> 
        <tr>
            <td>012</td>
            <td>Conditional</td>
            <td>an-2</td>
            <td>Account  Status</td>
            <td>  <table border="1">
        <tr>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>00</td>
            <td>Open</td>
        </tr>
        <tr>
            <td>01</td>
            <td>Dormant</td>
        </tr>
        <tr>
            <td>02</td>
            <td>Blocked</td>
        </tr>
        <tr>
            <td>03</td>
            <td>Closed</td>
        </tr>
    </table></td>
        </tr> 
        <tr>
            <td>015</td>
            <td>Conditional</td>
            <td>ans-10</td>
            <td>Account Description</td>
            <td> </td>
        </tr> 
        <tr>
            <td>022</td>
            <td>Conditional</td>
            <td>n-2</td>
            <td>Default Primary Account Type</td>
            <td>  <table border="1">
        <tr>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>00</td>
            <td>Default Account</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Saving Account</td>
        </tr>
        <tr>
            <td>20</td>
            <td>Current Account</td>
        </tr>
        <tr>
            <td>30</td>
            <td>Credit Account</td>
        </tr>
    </table></td>
        </tr> 
        <tr>
            <td>027</td>
            <td>Conditional</td>
            <td>n-12</td>
            <td>PIN Change Date</td>
            <td> The date, in YYMMDDhhmmss format, the PIN was last changed.</td>
        </tr> 
        <tr>
            <td>030</td>
            <td>Conditional</td>
            <td>ans-154</td>
            <td>Daily Amount Limit Profile</td>
            <td> <table border="1">
        <tr>
            <th>Position</th>
            <th>Length</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>1 - 2</td>
            <td>2</td>
            <td>No of Amount Limit Profile</td>
        </tr>
        <tr>
            <td>3 - 9</td>
            <td>7</td>
            <td>NPRATMD (=Domestic ATM Daily Limit)</td>
        </tr>
        <tr>
            <td>10 - 21</td>
            <td>12</td>
            <td>Amount Limit</td>
        </tr>
        <tr>
            <td>22 - 28</td>
            <td>7</td>
            <td>INRATMD (=India ATM Daily Limit)</td>
        </tr>
        <tr>
            <td>29 - 40</td>
            <td>12</td>
            <td>Amount Limit</td>
        </tr>
        <tr>
            <td>41 - 47</td>
            <td>7</td>
            <td>BTNATMD (=Bhutan ATM Daily Limit)</td>
        </tr>
        <tr>
            <td>48 - 59</td>
            <td>12</td>
            <td>Amount Limit</td>
        </tr>
        <tr>
            <td>60 - 66</td>
            <td>7</td>
            <td>USDATMD (=International ATM Daily Limit)</td>
        </tr>
        <tr>
            <td>67 - 78</td>
            <td>12</td>
            <td>Amount Limit</td>
        </tr>
        <tr>
            <td>79 - 85</td>
            <td>7</td>
            <td>NPRPOSD (=Domestic POS Daily Limit)</td>
        </tr>
        <tr>
            <td>86 - 97</td>
            <td>12</td>
            <td>Amount Limit</td>
        </tr>
        <tr>
            <td>98 - 104</td>
            <td>7</td>
            <td>INRPOSD (=India POS Daily Limit)</td>
        </tr>
        <tr>
            <td>105 - 116</td>
            <td>12</td>
            <td>Amount Limit</td>
        </tr>
        <tr>
            <td>117 - 123</td>
            <td>7</td>
            <td>BTNPOSD (=Bhutan POS Daily Limit)</td>
        </tr>
        <tr>
            <td>124 - 135</td>
            <td>12</td>
            <td>Amount Limit</td>
        </tr>
        <tr>
            <td>136 - 142</td>
            <td>7</td>
            <td>USDPOSD (=International POS Daily Limit)</td>
        </tr>
        <tr>
            <td>143 - 154</td>
            <td>12</td>
            <td>Amount Limit</td>
        </tr>
    </table> </td>
        </tr> 
        <tr>
            <td>031</td>
            <td>Conditional</td>
            <td>ans-82</td>
            <td>Daily Count Limit Profile</td>
            <td> <table border="1">
        <tr>
            <th>Position</th>
            <th>Length</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>1 - 2</td>
            <td>2</td>
            <td>No of Count Limit Profile</td>
        </tr>
        <tr>
            <td>3 - 9</td>
            <td>7</td>
            <td>NPRATMD (=Domestic ATM Daily Limit)</td>
        </tr>
        <tr>
            <td>10 - 12</td>
            <td>3</td>
            <td>Count Limit</td>
        </tr>
        <tr>
            <td>13 - 19</td>
            <td>7</td>
            <td>INRATMD (=India ATM Daily Limit)</td>
        </tr>
        <tr>
            <td>20 - 22</td>
            <td>3</td>
            <td>Count Limit</td>
        </tr>
        <tr>
            <td>23 - 29</td>
            <td>7</td>
            <td>BTNATMD (=Bhutan ATM Daily Limit)</td>
        </tr>
        <tr>
            <td>30 - 32</td>
            <td>3</td>
            <td>Count Limit</td>
        </tr>
        <tr>
            <td>33 - 39</td>
            <td>7</td>
            <td>USDATMD (=International ATM Daily Limit)</td>
        </tr>
        <tr>
            <td>40 - 42</td>
            <td>3</td>
            <td>Count Limit</td>
        </tr>
        <tr>
            <td>43 - 49</td>
            <td>7</td>
            <td>NPRPOSD (=Domestic POS Daily Limit)</td>
        </tr>
        <tr>
            <td>50 - 52</td>
            <td>3</td>
            <td>Count Limit</td>
        </tr>
        <tr>
            <td>53 - 59</td>
            <td>7</td>
            <td>INRPOSD (=India POS Daily Limit)</td>
        </tr>
        <tr>
            <td>60 - 62</td>
            <td>3</td>
            <td>Count Limit</td>
        </tr>
        <tr>
            <td>63 - 69</td>
            <td>7</td>
            <td>BTNPOSD (=Bhutan POS Daily Limit)</td>
        </tr>
        <tr>
            <td>70 - 72</td>
            <td>3</td>
            <td>Count Limit</td>
        </tr>
        <tr>
            <td>73 - 79</td>
            <td>7</td>
            <td>USDPOSD (=International POS Daily Limit)</td>
        </tr>
        <tr>
            <td>80 - 82</td>
            <td>3</td>
            <td>Count Limit</td>
        </tr>
    </table> </td>
        </tr> 
</table>
            </td>
        </tr>
        <tr>
            <td>Echo:</td>
            <td>The information should not be echoed back in the response.</td>
        </tr>
        <tr>
            <td>Validation:</td>
            <td>This field contains a 3-byte length field which is zero filled and right justified, followed by up to 999 alphanumeric characters. The total length of this field cannot exceed 1002 bytes.
Each tag is required to have a length of 3 bytes, and the data must be populated in accordance with the specified format.
</td>
        </tr>
        <tr>
            <td>Presence:</td>
            <td>It shall present in file update related message (0302 and 0312).</td>
        </tr>
    </table>

























