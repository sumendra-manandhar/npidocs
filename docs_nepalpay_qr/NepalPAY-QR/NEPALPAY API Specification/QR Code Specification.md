---
sidebar_position: 3
---

# 3. QR Code Payload Data Object

The content of the NEPALPAY QR Code includes the following 5 groups of data objects and as per EMV
QRCPS.


1. QR Code Conventions

2. Merchant Account Information

3. Additional Merchant Information

4. Transaction Value

5. Additional Data Template

## 3.1. QR Code Convention
The QR Code Conventions (Table 4.1) specify conventions used for the QR Code content, such as
Payload Format indicator, which defines the version of the QR Code template and hence the conventions
on the identifiers, lengths and values.

Table 4.1: QR Code Conventions
<table>
  <thead>
    <tr>
    <th>ID</th>
      <th>Name</th>
      <th>Length</th>
      <th>Presence</th>
      <th>Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>"00"</td>
      <td>Payload Format Indicator </td>
      <td>"02"</td>
      <td>M</td>
      <td>A fixed value of “01”</td>
    </tr>
    <tr>
    <td>"01"</td>
      <td>Point of Initiation Method </td>
      <td>"02"</td>
      <td>O</td>
      <td>“11” for static QR Codes; 
          “12” for dynamic QR Codes
    </td>
    </tr>
    <tr>
    <td>"63"</td>
      <td>Cyclic Redundancy Check (CRC)</td>
      <td>"04"</td>
      <td>M</td>
      <td>Checksum calculated over all the data
objects included in the QR code</td>
    </tr>
  </tbody>
</table>

The Payload Format Indicator (ID “00”) shall contain a value of "01". All other values are RFU.

NEPALPAY QR Techncial & API Specification Public
9/47
The Point of Initiation Method (ID “01”) shall contain a value of "11" or "12". All other values are RFU.
The value of "11" should be used when the same QR Code [static] is shown for more than one
transaction and the value of “12” should be used when a new QR Code [dynamic] is shown for each
transaction.

The CRC (ID “63”) shall be calculated according to [ISO/IEC 13239] using the polynomial '1021' (hex)
and initial value 'FFFF' (hex). The data over which the checksum is calculated shall cover all the data
objects, including their ID, Length and Value, to be included in the QR Code, in their respective order,
as well as the ID and Length of the CRC itself (but excluding its Value). Following the calculation of the
checksum, the resulting 2-byte hexadecimal value shall be encoded as a 4-character Alphanumeric
Special value by converting each nibble to an Alphanumeric Special character. For example, a CRC
with a two-byte hexadecimal value of '007B' is included in the QR Code as "6304007B".

## 3.2. Merchant Account Information
The Merchant Account Information specifies the identity of a merchant. Each payment operator may
define its own format of the Merchant Account Information IDs. Table 3.2A shows the allocation of
Merchant Account Information IDs among various payment operators.


Table 3.2A: Merchant Account Information

<table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Length</th>
    <th>Presence</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>“02” - “03”</td>
    <td>Reserved for Visa</td>
    <td rowspan="11">Var up to “99”</td>
    <td rowspan="11"><ol>M  </ol>   
                    <ol>One or more data objects (IDs "02" to "51" shall be included)</ol></td>
    <td></td>
  </tr>
  <tr>
    <td>“04” - “05”</td>
    <td>Reserved for Mastercard</td>
    <td></td>
  </tr>
  <tr>
    <td>“06” - “08”</td>
    <td>Reserved by EMVCo</td>
    <td></td>
  </tr>
  <tr>
    <td>“09” - “10”</td>
    <td>Reserved for Discover</td>
    <td></td>
  </tr>
  <tr>
    <td>“11” - “12”</td>
    <td>Reserved for Amex</td>
    <td></td>
  </tr>
  <tr>
    <td>“13” - “14”</td>
    <td>Reserved for JCB</td>
    <td></td>
  </tr>
  <tr>
    <td>“15” - “16”</td>
    <td>Reserved for UnionPay</td>
    <td></td>
  </tr>
  <tr>
    <td>“17” - “25”</td>
    <td>Reserved by EMVCo</td>
    <td></td>
  </tr>
  <tr>
    <td>“26” - “28”</td>
    <td>Used by PSOs in Nepal</td>
    <td></td>
  </tr>
  <tr>
    <td>“29”</td>
    <td>Used for NEPALPAY QR of NCHL in Nepal</td>
    <td></td>
  </tr>
  <tr>
    <td>“30” - “51”</td>
    <td>NOT USED Reserved for the future Dynamically used by payment operators for use in Nepal</td>
    <td>Dynamically used by payment operators
for use in Nepal</td>
  </tr>
</table>

The IDs ”26” to “51” are Merchant Account Information templates, which may include primitive data
objects and other templates that can be defined by individual payment operators. The ID “29” is to be
used by the entities associated with NEPALPAY QR.

The Merchant Account Information template shall contain a primitive Globally Unique Identifier data
object with a data object ID "00" to identify the payment operator and the corresponding merchant
account information specific to that payment operator as shown in below table.

Table 3.2B: Data Object ID Allocation in Merchant Account Information Template for NEPALPAY QR
(ID 29)
<table border="1">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Format</th>
    <th>Length</th>
    <th>Presence</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>"00"</td>
    <td>Globally Unique Identifier</td>
    <td>ans</td>
    <td>Var. up to "32"</td>
    <td>M</td>
    <td>An identifier to identify the payment operator which uses this template to define the Merchant Account Information. The specification for this field is provided below.</td>
  </tr>
  <tr>
    <td>"01"-"99"</td>
    <td>Payment network specific</td>
    <td>S</td>
    <td></td>
    <td>O</td>
    <td>Additional data objects to define the Merchant Account Information specific to the payment operator</td>

  </tr>
</table>


The value of the Globally Unique Identifier (GUID) field shall be in the following format:<strong>GUID</strong>

<ul>
<li><b>“NCHL” + 8 CHARACTER ACQUIRER_CODE + MERCHANT_CODE</b></li>
<li>“NCHL” will be a constant to be appended as a prefix while creating the GUID</li>
<li>8 Character Acquirer Code will be provided by NCHL after enrollment in the NPI system</li>
<li>MERCHANT_CODE will be a variable length representation as made by the acquirer.</li>
    <ul><li> This code is supposed to be unique for a particular acquirer.</li>
    <li>The maximum length of this code is 20 characters.</li></ul>
</ul>

Payment Network Specific

Any other specific information to further define merchant account can be further accommodated under
payment network specific data. These data will be context specific and outside of the scope of
specification.

## 3.3. Additional Merchant Information
The Additional Merchant Information (Table 3.3A) specifies the information about a merchant such as
merchant name and business location.

Table 3.3A: Additional Merchant Information
<table border="1">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Format</th>
    <th>Length</th>
    <th>Presence</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>"52"</td>
    <td>Merchant Category Code</td>
    <td>N</td>
    <td>"04"</td>
    <td>M</td>
    <td>Four-digit number listed in <a href="https://en.wikipedia.org/wiki/ISO_18245">ISO 18245</a></td>
  </tr>
  <tr>
    <td>"58"</td>
    <td>Country Code</td>
    <td>ans</td>
    <td>"02"</td>
    <td>M</td>
    <td></td>
  </tr>
  <tr>
    <td>"59"</td>
    <td>Merchant Name</td>
    <td>ans</td>
    <td>var upto "25"</td>
    <td>M</td>
    <td></td>
  </tr>
  <tr>
    <td>"60"</td>
    <td>Merchant City</td>
    <td>ans</td>
    <td>var upto "15"</td>
    <td>M</td>
    <td></td>
  </tr>
  <tr>
    <td>"61"</td>
    <td>Postal Code</td>
    <td>ans</td>
    <td>var upto "10"</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"64"</td>
    <td>Merchant Information - Language Template</td>
    <td>S</td>
    <td>var upto "99"</td>
    <td>O</td>
    <td>A template with other primitive data objects (See EMV QRCPS for details)</td>
  </tr>
</table>

The Merchant Category Code (MCC) (ID “52”) shall contain an MCC as defined by [ISO 18245]. The
MCC should indicate the Merchant Category Code of the merchant. Put a dummy code of “0000” in the
MCC field if the payment operator does not use this information.

The Country Code (ID “58”) shall contain a value as defined by [ISO 3166-1 alpha 2]. The Country Code
should indicate the country in which the merchant transacts. Put “NP” in the Country Code field if the
merchant transacts in Nepal.

The Merchant Name (ID “59”) shall be present. The Merchant Name should indicate the “doing business
as” name for the merchant. If the QR code information supports only payment operators who supply
merchant information via the payment operator’s centralized database, this field may be populated with
a dummy code of “NA” in the Merchant Name field. In all other instances, the Merchant Name field must
indicate the “doing business as” name for the merchant.

The Merchant City shall be present (ID “60”). The Merchant City should indicate the city of the merchant's
physical location. Mention “KATHMANDU” in the Merchant City Code field if the merchant is located in
Kathmandu.

The Merchant Information – Language Template (ID “64”) is a template, which contains other data fields,
which may be used by a mobile application to present the merchant information in an alternate language.

Table 3.3B: Data Fields for Merchant Information – Language Template (ID “64”)
<table border="1">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Format</th>
    <th>Length</th>
    <th>Presence</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>"00"</td>
    <td>Language Preference</td>
    <td>ans</td>
    <td>"02"</td>
    <td>M</td>
    <td></td>
  </tr>
  <tr>
    <td>"01"</td>
    <td>Merchant Name - Alternate Language</td>
    <td>S</td>
    <td>Var upto "25"</td>
    <td>M</td>
    <td></td>
  </tr>
  <tr>
    <td>"02"</td>
    <td>Merchant City - Alternate Language</td>
    <td>S</td>
    <td>Var upto "15"</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"03" - "99"</td>
    <td>RFU for EMVCo</td>
    <td>S</td>
    <td>Var upto "99"</td>
    <td></td>
    <td>Data objects reserved for EMVCo</td>
  </tr>
</table>

If the Merchant Information – Language Template (ID “64”) is present, the template shall contain the
Language Preference field (ID "00") and Merchant Name — Alternate Language field (ID "01"). It may
contain the Merchant City — Alternate Language field (ID "02"). All other IDs within the Merchant
Information—Language Template are RFU for EMVCo.

The data fields with IDs "01" and "02" are used as an addition to the merchant information under the
root. While the equivalent data objects under the root are defined with a format of Alphanumeric Special,
and as such can only contain the Common Character Set, the data fields with IDs “01” and “02”, if
present, are defined with a format of String, so therefore may contain a different character set.

The Language Preference field (ID “00”) shall contain 2 alphabetical characters coded to a value defined
by [ISO 639]. The value should represent the single language used to encode the Merchant Name—
Alternate Language field (ID “01”) and the optional Merchant City—Alternate Language field (ID “02”).

## 3.4. Transaction Value
The Transaction Value data objects (listed in Table 3.4) specify the currency and amount of transaction.
They also include tip or convenience indicators, which allow merchants or customers to specify the
convenience fee in fixed value or percentage.

Table 3.4: Transaction Value
<table border="1">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Format</th>
    <th>Length</th>
    <th>Presence</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td>“53”</td>
    <td>Transaction Currency</td>
    <td>N</td>
    <td>“03”</td>
    <td>M</td>
    <td>A numeric code based on <a href="https://en.wikipedia.org/wiki/ISO_4217">ISO 4217</a>, e.g., put “524” for NPR.</td>
  </tr>
  <tr>
    <td>“54”</td>
    <td>Transaction Amount</td>
    <td>ans</td>
    <td>Var. up to “13”</td>
    <td>C</td>
    <td></td>
  </tr>
  <tr>
    <td>“55”</td>
    <td>Tip or Convenience Indicator</td>
    <td>N</td>
    <td>“02”</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>“56”</td>
    <td>Value of Convenience Fee Fixed</td>
    <td>ans</td>
    <td>Var. up to “13”</td>
    <td>C</td>
    <td></td>
  </tr>
  <tr>
    <td>“57”</td>
    <td>Value of Convenience Fee Percentage</td>
    <td>ans</td>
    <td>Var. up to “05”</td>
    <td>C</td>
    <td></td>
  </tr>
</table>

The Transaction Currency (ID “53”) shall conform to [ISO 4217] and shall contain the 3-digit numeric
representation of the currency. For example, NPR is represented by the value "524". The value should
indicate the transaction currency in which the merchant transacts.

The Transaction Amount (ID “54”), if present, shall be different from zero, shall only include (numeric)
digits "0" to "9" and may contain a single "." character as the decimal mark. When the amount includes
decimals, the "." character shall be used to separate the decimals from the integer value and the "."
character may be present even if there are no decimals. The Transaction Amount shall not be included
if the mobile application should prompt the consumer to enter the amount to be paid to the Merchant.

The payment system operators should follow the rules and format in accordance with the EMV QRCPS
to process the Transaction Value IDs of the QR Code.

## 3.5. Additional Data Template
The ID “62” is a template which includes common additional data objects such as Bill Number and
Reference Label. It also allows payment operators to define their own additional data objects.

Table 3.5: Additional Data
<table border="1">
  <tr>
    <th>ID</th>
    <th>Sub-ID</th>
    <th>Name</th>
    <th>Format</th>
    <th>Length</th>
    <th>Presence</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td rowspan="13">"62"</td>
    <td>"01"</td>
    <td>Bill Number</td>
    <td>ans</td>
    <td>Var up to "25"</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"02"</td>
    <td>Mobile Number</td>
    <td>ans</td>
    <td>Var up to "25"</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"03"</td>
    <td>Store Label</td>
    <td>ans</td>
    <td>Var up to "25"</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"04"</td>
    <td>Loyalty Number</td>
    <td>ans</td>
    <td>Var up to "25"</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"05"</td>
    <td>Reference Label</td>
    <td>ans</td>
    <td>Var up to "25"</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"06"</td>
    <td>Customer Label</td>
    <td>ans</td>
    <td>Var up to "25"</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"07"</td>
    <td>Terminal Label</td>
    <td>ans</td>
    <td>Var up to "25"</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"08"</td>
    <td>Purpose of Transaction</td>
    <td>ans</td>
    <td>Var up to "25"</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"09"</td>
    <td>Transaction Additional Consumer Data</td>
    <td>ans</td>
    <td>Var up to "25"</td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"10" - "49"</td>
    <td>Reserved for EMVCo</td>
    <td>S</td>
    <td></td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"50"</td>
    <td>Reserved for FPS</td>
    <td>S</td>
    <td></td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"51"</td>
    <td>Used for the NCHL</td>
    <td>S</td>
    <td></td>
    <td>O</td>
    <td></td>
  </tr>
  <tr>
    <td>"52" - "99"</td>
    <td>Reserved for payment system operators in Nepal</td>
    <td>S</td>
    <td></td>
    <td>O</td>
    <td>Dynamically used by payment operators for use in Nepal</td>
  </tr>
</table>

The payment operators should follow the rules and format in accordance with the EMV QRCPS to
process the Data Objects for Additional Data Field Template of the QR Code. As the maximum data size
of this Additional Data Field Template (ID “62”) is only 99 characters, it is highly recommended that the
operators make use of the pre-defined additional data objects (Sub-IDs “01” – “09”) and avoid defining
their own additional data objects in this template so as to prevent data overflow when QR codes of
several payment system operators are combined into one NEPALPAY QR Code