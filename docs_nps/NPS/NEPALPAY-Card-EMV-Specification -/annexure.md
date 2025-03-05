---
sidebar_position : 6
---



#  6. Annexure
## Annexure 1: Multi-App Command Permissions


<table border="1">
<tr>
<th colspan = '4' align = 'center'> Multi-App Command Permissions</th>
</tr>

  <tr>
    <th>Byte/Bit</th>
    <th>Definition</th>
    <th>Condition</th>
    <th>Recommended Value</th>
  </tr>
  <tr>
    <td>1/8-3</td>
    <td>RFU</td>
    <td>Not Used</td>
    <td>000000</td>
  </tr>
  <tr>
    <td rowspan="2">1/2</td>
    <td> 0-Updates Initiated by Another Authorized Application Not Allowed</td>
    <td  rowspan="2">O</td>
    <td rowspan="2">Issuer Defined</td>
  </tr>
  <tr>
    <td>Updates Initiated by Another Authorized Application Allowed</td>
    
  </tr>
  <tr>
    <td rowspan = '2'>1/1</td>
    <td> 0- Multi-App Commands Not Allowed</td>
    <td rowspan = '2'>O</td>
    <td rowspan = '2'>Issuer Defined</td>
  </tr>
  <tr>
    <td>Multi-App Commands Allowed</td>
  
  </tr>
</table>



Table 46: Multi-App Command Permissions



## Annexure 2: Integrated Circuit Cards Specification References


The following International Standards apply to all NEPALPAY Cards:


<table>
    <thead>
        <tr>
            <th>S.N.</th>
            <th>ISO Standard Number</th>
            <th>Title</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>7810</td>
            <td>Identification Cards – Physical Characteristics</td>
        </tr>
        <tr>
            <td >2</td>
            <td>7811</td>
            <td>
            <li>Identification Cards – Recording Techniques</li>
             
<li> Part 1: Embossing </li>
            <li> Part 2: Magnetic Stripe </li>
             <li>Part 3: Location of Embossed Characters on ID – 1 Card</li>
             <li> Part 4: Location of Read Only Magnetic Tracks – Tracks 1 and 2 </li>
             <li> Part 5: Location on Read–Write Magnetic Tracks – Track 3 </li>
             <li> Part 6: Magnetic Stripe – High Coercivity</li>
              
 </td>
        </tr>
        <tr>
            <td>3</td>
            <td>7812</td>
            <td>Identification Cards – Numbering System and Registration Procedures for Participant Identifiers</td>
        </tr>
        <tr>
            <td>4</td>
            <td>7813</td>
            <td>Identification Cards – Financial Transaction Cards</td>
        </tr>
        <tr>
            <td>5</td>
            <td>7816</td>
            <td>
            <li>Identification Cards – Integrated Circuit Cards with Contacts </li>
             
<li> Part 1: Physical Characteristics</li>
              
  <li>Part 2: Dimensions and Locations of the Contacts</li>
              
  </td>
        </tr>
        <tr>
            <td>6</td>
            <td>14443–1</td>
            <td>
            
  <li>Identification Cards - Contactless Integrated Circuit Cards - Proximity Cards</li>
            <li>  Part 1: Physical Characteristics</li>
             <li>  Part 2: Radio Frequency Power and Signal Interface</li>
               <li> Part 3: Initialization and Anti-collision</li>
                <li> Part 4: Transmission Protocol </li></td>
        </tr>
    </tbody>
</table>



Table 47:  Integrated Circuit Cards Specification References


## Annexure 3: Cardholder Verification (CV) Rule Format

CV Rule Byte 1 (Leftmost): Cardholder Verification Method (CVM) Codes

<table border="1">
  <tr>
    <th>b8</th>
    <th>b7</th>
    <th>b6</th>
    <th>b5</th>
    <th>b4</th>
    <th>b3</th>
    <th>b2</th>
    <th>b1</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>0</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>RFU</td>
  </tr>
  <tr>
    <td></td>
    <td>0</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Fail cardholder verification if this CVM is unsuccessful</td>
  </tr>
  <tr>
    <td></td>
    <td>1</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Apply succeeding CV Rule if this CVM is unsuccessful</td>
  </tr>
<tr>
<td></td>
    <td></td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>Fail CVM processing</td>
  </tr>
  <tr>
  <td></td>
    <td></td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>Plaintext PIN verification performed by ICC</td>
  </tr>
  <tr>
  <td></td>
    <td></td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>Enciphered PIN verified online</td>
  </tr>
  <tr>
  <td></td>
    <td></td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>Plaintext PIN verification performed by ICC and signature (paper)</td>
  </tr>
  <tr>
  <td></td>
    <td></td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>Enciphered PIN verification performed by ICC</td>
  </tr>
  <tr>
  <td></td>
    <td></td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>Enciphered PIN verification performed by ICC and signature (paper)</td>
  </tr>
  <tr>
  <td></td>
    <td></td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
     <td>x</td>
    <td>Values in the range 000110-011101 reserved for future use by this specification</td>
  </tr>
  <tr>
  <td></td>
    <td></td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>Signature (paper)</td>
  </tr>
  <tr>
  <td></td>
    <td></td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>No CVM required</td>
  </tr>
  <tr>
  <td></td>
    <td></td>
    <td>1</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
     <td>x</td>
    <td>Values in the range 100000-101111 reserved for use by the individual payment systems</td>
  </tr>
  <tr>
  <td></td>
    <td></td>
    <td>1</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Values in the range 110000-111110 reserved for use by the issuer</td>
  </tr>
  <tr>
  <td></td>
    <td></td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>This value is not available for use</td>
  </tr>

</table>

CV Rule Byte 2 (Rightmost): Cardholder Verification Method (CVM) Codes

<table border="1">
  <tr>
    <th>Value</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>00H</td>
    <td>Always</td>
  </tr>
  <tr>
    <td>01H</td>
    <td>If unattended cash</td>
  </tr>
  <tr>
    <td>02H</td>
    <td>If not unattended cash and not manual cash and not purchase with cashback</td>
  </tr>
  <tr>
    <td>03H</td>
    <td>If terminal supports the CVM</td>
  </tr>
  <tr>
    <td>04H</td>
    <td>If manual cash</td>
  </tr>
  <tr>
    <td>05H</td>
    <td>If purchase with cashback</td>
  </tr>
  <tr>
    <td>06H</td>
    <td>If transaction is in the application currency 21 and is under X value</td>
  </tr>
  <tr>
    <td>07H</td>
    <td>If transaction is in the application currency and is over X value</td>
  </tr>
  <tr>
    <td>08H</td>
    <td>If transaction is in the application currency and is under Y value</td>
  </tr>
  <tr>
    <td>09H</td>
    <td>If transaction is in the application currency and is over Y value</td>
  </tr>
  <tr>
    <td>0AH - 7FH</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>80H - FFH</td>
    <td>Reserved for use by individual payment systems</td>
  </tr>
</table>



Table 48:  Cardholder Verification (CV) Rule Format


## Annexure 4: Terminal Verification Result (TVR)



<table border="1">
 <tr>
  <th colspan = '9' align = 'center'>Terminal Verification Result (TVR) - Byte 1 (Leftmost)</th>
  </tr>
  <tr>
    <th>b8</th>
    <th>b7</th>
    <th>b6</th>
    <th>b5</th>
    <th>b4</th>
    <th>b3</th>
    <th>b2</th>
    <th>b1</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Offline data authentication was not performed</td>
  </tr>
  <tr>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>SDA failed</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>ICC data missing</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Card appears on terminal exception file</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>DDA failed</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>CDA failed</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>RFU</td>
  </tr>
  <tr>
    <th colspan="9" align="center">Terminal Verification Result (TVR) - Byte 2</th>
  </tr>
  <tr>
    <th>b8</th>
    <th>b7</th>
    <th>b6</th>
    <th>b5</th>
    <th>b4</th>
    <th>b3</th>
    <th>b2</th>
    <th>b1</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>ICC and terminal have different application versions</td>
  </tr>
  <tr>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Expired application</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Application not yet effective</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Requested service not allowed for card product</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>New card</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>RFU</td>
  </tr>
</table>

<table border="1">
  <tr>
    <th colspan="9" align="center">Terminal Verification Result (TVR) - Byte 3</th>
  </tr>
  <tr>
    <th>b8</th>
    <th>b7</th>
    <th>b6</th>
    <th>b5</th>
    <th>b4</th>
    <th>b3</th>
    <th>b2</th>
    <th>b1</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Cardholder verification was not successful</td>
  </tr>
  <tr>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Unrecognized CVM</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>PIN Try Limit exceeded</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>PIN entry required and PIN pad not present or not working</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>PIN entry required, PIN pad present, but PIN was not entered</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>Online PIN entered</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>RFU</td>
  </tr>
</table>

<table border="1">
  <tr>
    <th colspan="9" align="center">Terminal Verification Result (TVR) - Byte 4</th>
  </tr>
  <tr>
    <th>b8</th>
    <th>b7</th>
    <th>b6</th>
    <th>b5</th>
    <th>b4</th>
    <th>b3</th>
    <th>b2</th>
    <th>b1</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Transaction exceeds floor limit</td>
  </tr>
  <tr>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Lower consecutive offline limit exceeded</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Upper consecutive offline limit exceeded</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Transaction selected randomly for online processing</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Merchant forced transaction online</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>RFU</td>
  </tr>
</table>

<table border="1">
  <tr>
    <th colspan="9" align="center">Terminal Verification Result (TVR) - Byte 5 (Rightmost)</th>
  </tr>
  <tr>
    <th>b8</th>
    <th>b7</th>
    <th>b6</th>
    <th>b5</th>
    <th>b4</th>
    <th>b3</th>
    <th>b2</th>
    <th>b1</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Default TDOL used</td>
  </tr>
  <tr>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Issuer authentication failed</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Script processing failed before final GENERATE AC</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Script processing failed after final GENERATE AC</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>RFU</td>
  </tr>
</table>




Table 49: Terminal Verification Result (TVR)



## Annexure 5: Transaction Status Information (TSI)
Transaction Status Information (TSI) - Byte 1 (Leftmost)
<table border="1">
  <tr>
    <th>b8</th>
    <th>b7</th>
    <th>b6</th>
    <th>b5</th>
    <th>b4</th>
    <th>b3</th>
    <th>b2</th>
    <th>b1</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Script processing was performed</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Terminal risk management was performed</td>
  </tr>
  <tr>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Issuer authentication was performed</td>
  </tr>
  <tr>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Card risk management was performed</td>
  </tr>
  <tr>
    <td>x</td>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Cardholder verification was performed</td>
  </tr>
  <tr>
    <td>1</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>Offline data authentication was performed</td>
  </tr>
  <tr>
  <td colspan = '8' align = 'center'>Transaction Status Information (TSI) - Byte 2 (Rightmost)</td>
  </tr>
    <tr>
    <th>b8</th>
    <th>b7</th>
    <th>b6</th>
    <th>b5</th>
    <th>b4</th>
    <th>b3</th>
    <th>b2</th>
    <th>b1</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>x</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
    <td>0</td>
    <td>RFU</td>
  </tr>
</table>




Table 50:  Transaction Status Information


## Annexure 6: Approved D-PAS Connect Card Products 

Note: This list only contains D-PAS Connect Card products that have been type approved by Discover Global Network. The list of of Approved D-PAS Connect Card Products shall be shared separately and duly be updated into the NCHL site.






