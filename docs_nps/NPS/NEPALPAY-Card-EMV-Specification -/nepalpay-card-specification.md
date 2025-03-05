---
sidebar_position: 4
---

 # 4. NEPALPAY Card Specification
This chapter describes the specification of NEPALPAY IC card.

## 4.1	Track 1 Specification

The Track 1 should confirm to ISO 7811-2 and ISO 7813. ISO 7811-2 comply for following elements. 

i)	Physical properties

ii)	Performance characteristics

iii)	Density

iv )Signal level

v)	Recording angle tolerances

vi )	Error detection

vii)	Permissible surface variation

viii)	Character sets

ix ) Appearance of the magnetic stripe




### 4.1.1	Track 1 Encoding Format
The table below lists the Track 1 field names and their length as per ISO 7813. The maximum length of Track 1 is 79 characters.



<table>
        <tr>
            <th>Field Number</th>
            <th>Length</th>
            <th>Field Name</th>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>Start Sentinel</td>
        </tr>
        <tr>
            <td>2</td>
            <td>1</td>
            <td>Format Code</td>
        </tr>
        <tr>
            <td>3</td>
            <td>16 - 19</td>
            <td>Primary Account Number (PAN)</td>
        </tr>
        <tr>
            <td>4</td>
            <td>1</td>
            <td>Separator</td>
        </tr>
        <tr>
            <td>5</td>
            <td>2 - 26</td>
            <td>Cardholder Name</td>
        </tr>
        <tr>
            <td>6</td>
            <td>1</td>
            <td>Separator</td>
        </tr>
        <tr>
            <td>7</td>
            <td>4</td>
            <td>Card Expiration Date</td>
        </tr>
        <tr>
            <td>8</td>
            <td>3</td>
            <td>Service Code</td>
        </tr>
        <tr>
            <td>9</td>
            <td>3</td>
            <td>Card Verification Data 1</td>
        </tr>
        <tr>
            <td>10</td>
            <td>10</td>
            <td>National Identification Number</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Balance of Available Digits</td>
            <td>Discretionary Data</td>
        </tr>
        <tr>
            <td>12</td>
            <td>1</td>
            <td>End Sentinel</td>
        </tr>
        <tr>
            <td>13</td>
            <td>1</td>
            <td>Longitudinal Redundancy Check</td>
        </tr>
        <tr>
            <td><strong>Total</strong></td>
            <td>79 Characters</td>
        </tr>
        <tr>
        </tr>
    </table>



Table 4: Track 1 Encoding Format

### 4.1.2 Track 1 Data Element Description

Field 1: Start Sentinel

<table>
        <tr>
            <th colspan = '2'>Field 1: Start Sentinel</th>     
        </tr>
        <tr>
            <td>Length:</td>
            <td>1</td>
        </tr>
         <tr>
            <td>Format:</td>
            <td>Alphanumeric</td>
        </tr>
         <tr>
            <td>Description:</td>
            <td>Indicates the initial data position on the track.</td>
        </tr>
         <tr>
            <td>Valid Value:</td>
            <td>% (Percentage Sign)</td>
        </tr>
    </table>



Field 2: Format Code


<table>
    <tr>
        <th colspan = '2'>Field 2: Format Code</th>     
    </tr>
    <tr>
        <td>Length:</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Alphanumeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Specifies the format for Track 1 encoding.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>B</td>
    </tr>
</table>



Field 3: Primary Account Number (PAN)


<table>
    <tr>
        <th colspan = '2'>Field 3: Primary Account Number (PAN)</th>     
    </tr>
    <tr>
        <td>Length:</td>
        <td>16 - 19</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Numeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>A number identifying the card number.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>0 to 9</td>
    </tr>
</table>


Field 4: Separator


<table>
    <tr>
        <th colspan = '2' >Field 4: Separator</th>     
    </tr>
    <tr>
        <td>Length:</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Alphanumeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Indicates the end of a variable length of PAN.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>^ (Caret Symbol)</td>
    </tr>
</table>




Field 5: Cardholder Name

<table>
    <tr>
        <th colspan = '2'>Field 5: Cardholder Name</th>     
    </tr>
    <tr>
        <td>Length:</td>
        <td>2 - 26</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Alphanumeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Cardholder’s Name.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>Alphanumeric including Hyphen, Suffix, Surname separator, Title separator, Title (optional)</td>
    </tr>
</table>





Field 6: Separator


<table>
    <tr>
        <th colspan = '2'>Field 6: Separator</th>     
    </tr>
    <tr>
        <td>Length:</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Alphanumeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Indicates the end of a variable length of Cardholder Name.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>^ (Caret Symbol)</td>
    </tr>
</table>


Field 7: Card Expiration Date

<table>
    <tr>
        <th colspan = '2' >Field 7: Card Expiration Date</th>     
    </tr>
    <tr>
        <td>Length:</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Numeric Date (YYMM)</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Year and month after which the card can no longer be used.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>YY must be 00 to 99; MM must be 01 to 12</td>
    </tr>
</table>





Field 8: Service Code


<table>
    <tr>
        <th colspan = '2' >Field 8: Service Code</th>     
    </tr>
    <tr>
        <td>Length:</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Numeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>A sequence of digits that, taken as a whole, defines various services; and identifies card restrictions.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>1.	The value allowed for EMV domestic and International Cards is 226 (2 – International Integrated Circuit Card, 2 – Positive Authorization Mandatory, 6 – Prompt for PIN if PIN pad present)</td>
    </tr>
</table>

Service Code can be expressed with the following digit combinations.

<table border="1">
    <thead>
    <tr>
    <th colspan = '2'>Digit 1 (most significant):  Interchange and technology</th></tr>
        <tr>
            <th>Digit 1</th>
            <th align = 'center'>Meaning</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>Reserved for future use by ISO</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Available for international interchange</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Available for international interchange and with integrated circuit, which should be used for the financial transaction when feasible</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Reserved for future use by ISO</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Reserved for future use by ISO</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Available for national interchange only, except under bilateral agreement</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Available for national interchange only, except under bilateral agreement, and with integrated circuit, which should be used for the financial transaction when feasible</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Not available for general interchange, except under bilateral agreement</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Reserved for future use by ISO</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Test</td>
        </tr>
    </tbody>
</table>



<table border="1">
    <caption>Digit 2: Authorization processing</caption>
    <thead>
        <tr>
            <th>Digit 2</th>
            <th>Meaning</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>Transactions are authorized following the normal rules</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Reserved for future use by ISO</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Transactions are authorized by issuer and should be online</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Reserved for future use by ISO</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Transactions are authorized by issuer and should be online, except under bilateral agreement</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Reserved for future use by ISO</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Reserved for future use by ISO</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Reserved for future use by ISO</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Reserved for future use by ISO</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Reserved for future use by ISO</td>
        </tr>
    </tbody>
</table>


<table border="1">
    <caption>Digit 3: Range of services and PIN requirements</caption>
    <thead>
        <tr>
            <th>Digit 3</th>
            <th>Meaning</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>No restrictions and PIN required</td>
        </tr>
        <tr>
            <td>1</td>
            <td>No restrictions</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Goods and services only (no cash)</td>
        </tr>
        <tr>
            <td>3</td>
            <td>ATM only and PIN required</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Cash only</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Goods and services only (no cash) and PIN required</td>
        </tr>
        <tr>
            <td>6</td>
            <td>No restrictions and require PIN when feasible</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Goods and services only (no cash) and require PIN when feasible</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Reserved for future use by ISO</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Reserved for future use by ISO</td>
        </tr>
    </tbody>
</table>


Field 9: Card Verification Data 1

<table>
    <tr>
        <th colspan="2">Field 9: Card Verification Data 1 (CVD 1)</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Numeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>CVD 1 is a three-digit value encoded on Track 1 in 3 contiguous positions on NEPALPAY cards.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>0 to 9</td>
    </tr>
</table>




Field 10: National Identification Number




<table>
    <tr>
        <th colspan="2">Field 10: National Identification Number</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>10</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Alphanumeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>10 Digit National ID Number</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>0 to 9</td>
    </tr>
</table>




Field 11: Discretionary Data



<table>
    <tr>
        <th colspan="2">Field 11: Discretionary Data</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>79 – used no. of digits (Balance of Available Digits)</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Alphanumeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Includes any valid information that the issuer wants to have transmitted in the transactions.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>Any valid non-control or non-reserved character. E.g. of reserved or control characters are separator characters, start sentinel, end sentinel, etc.</td>
    </tr>
</table>





Field 12: End Sentinel



<table>
    <tr>
        <th colspan="2">Field 12: End Sentinel</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Alphanumeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Character that follows the final character of data recorded on the track.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>?</td>
    </tr>
</table>



Field 13: Longitudinal Redundancy Check



<table>
    <tr>
        <th colspan="2">Field 13: Longitudinal Redundancy Check</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Numeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Verification value that ensures that no data has been lost in the stripe-reading process. The LRC is equivalent to a check digit of the entire track, including the control characters.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>Any computed value</td>
    </tr>
</table>



 ## 4.2	Track 2 Specification
The Track 2 should confirm to ISO 7811-2 and ISO 7813. ISO 7811-2 comply for following elements. 
i)	Physical properties
ii)	Performance characteristics
iii)	Density
iv)	Signal level
v)	Recording angle tolerances
vi)	Error detection
vii)	Permissible surface variation
viii)	Character sets
ix)	Appearance of the magnetic stripe

 ### 4.2.1	Track 2 Encoding Format
The table below lists the Track 2 field names and their length as per ISO 7813. The maximum length of Track 2 is 40 characters.

<table>
    <thead>
        <tr>
            <th>Field Number</th>
            <th>Length</th>
            <th>Field Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>Start Sentinel</td>
        </tr>
        <tr>
            <td>2</td>
            <td>16 - 19</td>
            <td>Primary Account Number (PAN)</td>
        </tr>
        <tr>
            <td>3</td>
            <td>1</td>
            <td>Separator</td>
        </tr>
        <tr>
            <td>4</td>
            <td>4</td>
            <td>Card Expiration Date</td>
        </tr>
        <tr>
            <td>5</td>
            <td>3</td>
            <td>Service Code</td>
        </tr>
        <tr>
            <td>6</td>
            <td>3</td>
            <td>Card Verification Data 1</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Balance of Available Digits</td>
            <td>Discretionary Data</td>
        </tr>
        <tr>
            <td>8</td>
            <td>1</td>
            <td>End Sentinel</td>
        </tr>
        <tr>
            <td>9</td>
            <td>1</td>
            <td>Longitudinal Redundancy Check</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>40 Characters</td>
            <td></td>
        </tr>
    </tbody>
</table>




Table 5: Track 2 Encoding Format

### 4.2.2	Track 2 Data Element Description

Field 1: Start Sentinel
<table border="1">
    <tr>
        <th colspan = '2'>Field 1: Start Sentinel</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Alphanumeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Indicates the initial data position on the track.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>;</td>
    </tr>
</table>


Field 2: Primary Account Number (PAN)

<table border="1">
    <tr>
        <th colspan = '2'>Field 2: Primary Account Number (PAN)</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>16 - 19</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Numeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>A number identifying the card number.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>0 to 9 without spaces</td>
    </tr>
</table>




Field 3: Separator


<table border="1">
    <tr>
        <th colspan = '2'>Field 3: Separator</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Alphanumeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Indicates the end of a variable length of PAN.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>= (equal sign)</td>
    </tr>
</table>





Field 4: Card Expiration Date


<table border="1">
    <tr>
        <th colspan = '2'>Field 4: Card Expiration Date</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Numeric Date (YYMM)</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Year and month after which the card can no longer be used.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>YY must be 00 to 99; MM must be 01 to 12</td>
    </tr>
</table>




Field 5: Service Code


<table border="1">
    <tr>
        <th colspan = '2'>Field 5: Service Code</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Numeric Date</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>A sequence of digits that, taken as a whole, defines various services; and identifies card restrictions.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>The value allowed for EMV domestic and International Cards is 226 (2 – International Integrated Circuit Card, 2 – Positive Authorization Mandatory, 6 – Prompt for PIN if PIN pad present)</td>
    </tr>
</table>

Service Code can be expressed with the following digit combinations.


<table border="1">
    <tr>
        <th>Digit 1</th>
        <th>Meaning</th>
    </tr>
    <tr>
        <td>0</td>
        <td>Reserved for future use by ISO</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Available for international interchange</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Available for international interchange and with integrated circuit, which should be used for the financial transaction when feasible</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Reserved for future use by ISO</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Reserved for future use by ISO</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Available for national interchange only, except under bilateral agreement</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Available for national interchange only, except under bilateral agreement, and with integrated circuit, which should be used for the financial transaction when feasible</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Not available for general interchange, except under bilateral agreement</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Reserved for future use by ISO</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Test</td>
    </tr>
</table>


<table border="1">
    <tr>
        <th>Digit 2</th>
        <th>Meaning</th>
    </tr>
    <tr>
        <td>0</td>
        <td>Transactions are authorized following the normal rules</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Reserved for future use by ISO</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Transactions are authorized by issuer and should be online</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Reserved for future use by ISO</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Transactions are authorized by issuer and should be online, except under bilateral agreement</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Reserved for future use by ISO</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Reserved for future use by ISO</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Reserved for future use by ISO</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Reserved for future use by ISO</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Reserved for future use by ISO</td>
    </tr>
</table>


<table border="1">
    <tr>
        <th>Digit 3</th>
        <th>Meaning</th>
    </tr>
    <tr>
        <td>0</td>
        <td>No restrictions and PIN required</td>
    </tr>
    <tr>
        <td>1</td>
        <td>No restrictions</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Goods and services only (no cash)</td>
    </tr>
    <tr>
        <td>3</td>
        <td>ATM only and PIN required</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Cash only</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Goods and services only (no cash) and PIN required</td>
    </tr>
    <tr>
        <td>6</td>
        <td>No restrictions and require PIN when feasible</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Goods and services only (no cash) and require PIN when feasible</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Reserved for future use by ISO</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Reserved for future use by ISO</td>
    </tr>
</table>



**Field 6: Card Verification Data 1**

<table border="1">
    <tr>
        <th colspan = '2'>Field 6: Card Verification Data 1 (CVD 1)</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Numeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>CVD 1 is a three-digit value encoded on Track 2 in 3 contiguous positions on NEPALPAY cards.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>0 to 9</td>
    </tr>
</table>


**Field 7: Discretionary Data**

<table border="1">
    <tr>
        <th colspan = '2'>Field 7: Discretionary Data</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>40 – used no. of digits (Balance of Available Digits)</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Alphanumeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Includes any valid information that the issuer wants to have transmitted in the transactions.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>Any valid non-control or non-reserved character. E.g. of reserved or control characters are separator characters, start sentinel, end sentinel, etc.</td>
    </tr>
</table>


**Field 8: End Sentinel**


<table border="1">
    <tr>
        <th colspan = '2'>Field 8: End Sentinel</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Alphanumeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Character that follows the final character of data recorded on the track.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>? (Question Mark)</td>
    </tr>
</table>



**Field 9: Longitudinal Redundancy Check**




<table border="1">
    <tr>
        <th colspan = '2'>Field 9: Longitudinal Redundancy Check</th>
    </tr>
    <tr>
        <td>Length:</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Format:</td>
        <td>Numeric</td>
    </tr>
    <tr>
        <td>Description:</td>
        <td>Verification value that ensures that no data has been lost in the stripe-reading process. The LRC is equivalent to a check digit of the entire track, including the control characters.</td>
    </tr>
    <tr>
        <td>Valid Value:</td>
        <td>Any computed value</td>
    </tr>
</table>






## 4.3	EMV Chip Specification


The EMV Chip Specifications significantly improve the security for face-to-face payment transactions by providing features for reducing the fraud that result from counterfeit and lost and stolen cards. By reducing counterfeit and lost and stolen card fraud, EMV chip technology offers real benefits to retailers, acquirers, card issuers and cardholders with following features:

i)	Authentication of the chip card: Verifies that the card is genuine so as to protect against counterfeit fraud for both online authorized and offline transactions.

ii)	Risk management parameters: Defines the conditions under which the issuer will permit the transaction to be conducted offline and the conditions that force transactions online for authorization, such as if offline limits have been exceeded.

iii)	Transaction Integrity: For Digitally signing payment data.

iv)	Cardholder Verification Method: To protect against lost and stolen card fraud.


## 4.4	EMV IC Card File Structure
An application in the Integrated Circuit Card (ICC) includes a set of items of information. These items of information may be accessible to the terminal after a successful application selection. An item of information is called a data element. A data element is the smallest piece of information that may be identified by a name, a description of logical content, a format, and a coding.

 ### 4.4.1	File Structure of ICC
The files within the ICC are seen from the terminal as a tree structure. Every branch of the tree is an Application Definition File (ADF) or a Directory Definition File (DDF). An ADF is the entry point to one or more Application Elementary Files (AEFs). An ADF and its related data files are seen as being on the same branch of the tree. A DDF is an entry point to AEFs, ADFs or other DDFs.

![Example Image](/img/fig2.png)
<p align="center" class="centered-caption"></p>

Figure 2: ICC File Structure


A dedicated file (DF) as defined in ISO/IEC 7816-4 and containing an FCI is mapped onto an ADF or a DDF. It may give access to elementary files and DFs. The DF at the highest level of the card is the master file (MF). 

An elementary file (EF) as defined in ISO/IEC 7816-4 is mapped onto the AEF. An EF is never used as an entry point to another file.

An ADF is seen from the terminal as a file containing only data objects encapsulated in its file control information (FCI). The tree structure of ADFs:

Enables the attachment of data files to an application.

Ensures the separation between applications.

Allows access to the logical structure of an application by its selection.



The structure of AIDs, ADF Names and DF Names is according to ISO/IEC 7816-4 and consists of two parts:
i)	A Registered Application Provider Identifier (RID) of 5 bytes, unique to an application provider and assigned according to ISO/IEC 7816-4.
ii)	An optional field assigned by the application provider of up to 11 bytes. This field is known as a Proprietary Application Identifier Extension (PIX) and may contain any 0–11 Byte value specified by the provider. The meaning of this field is defined only for the specific RID and need not be unique across different RIDs.

Additional ADFs defined under the control of other application providers may be present in the ICC but shall avoid duplicating the range of RIDs assigned to payment systems. Compliance with ISO/IEC 7816-4 will assure this avoidance.

### 4.4.3	Structure of Payment System Environment (PSE)

For the contact card, the PSE is accessed via a DDF with the name ‘1PAY.SYS.DDF01’. In case the card is an NFC card then it will have PPSE (Proximity Payment System Environment) with the name "2PAY.SYS.DDF01". The presence of this DDF in the ICC is optional but if it is present, this DDF is mapped onto a DF within the card, which may or may not be the MF, and shall contain a Payment System Directory. The directory attached to the PSE DDF contains entries for ADFs. Files revealed by this PSE assures international operability of the card.

### 4.4.4	Matching Terminal Applications to ICC Applications
The terminal shall maintain a list of applications supported by the terminal identified by their AIDs. The terminal determines which applications in the ICC are supported by comparing the AIDs for applications supported by the terminal with the DF Names of applications supported by the ICC. This can be done using two approaches as:

i)	Using the PSE: If a terminal chooses to support application selection using the PSE method, it can determine the applications supported by the card.

ii)	Using a List of AIDs: If either the card or the terminal does not support the PSE method or if the terminal is unable to find a matching application using the Payment System Directory selection method, the terminal shall use a list of AIDs that it supports to build the candidate list.

### 4.4.5	EMV IC Card Data Objects
A data object consists of a tag, a length, and a value (TLV). 

A tag (T) uniquely identifies a data object within the environment of an application. 

The length (L) is the length of the value field of the data object. 

The value (V) field of a data object may consist of either a single data element or one or more data objects. 
As illustrated below, when a data object encapsulates a single data element, it is called a primitive data object. When a data object encapsulates one or more data objects, it is called a constructed data object. The value field of a constructed data object is called a template. The terminal shall be capable of correctly interpreting Tag Length Value (TLV) data objects.

Primitive data object



| Tag (T) | Length (L) | Value (V) |
|---------|------------|-----------|



Constructed data object

<table border="1">
  <tr>
    <th>Tag (T)</th>
    <th>Length (L)</th>
    <th>Primitive or constructed Data object number 1</th>
    <th>...</th>
    <th>Primitive or constructed
      data object number n </th>
  </tr>
</table>





 ## 4.5	NEPALPAY IC Card Data Objects
The NEPALPAY application has been developed to work on chip cards that have two external interfaces: a contact and a contactless interface. This is a dual-interface application capable of performing transactions through both the contact and contactless interfaces with the restriction that a card can only use one interface at a time. The NEPALPAY card application maintains three sets of data: 

i)	Data objects for when the contact interface is used 

ii)	Data objects for when the contactless interface is used 

iii)	Common data objects used across both interfaces 

The NEPALPAY card application has been developed in such a way that it knows at every stage of the transaction which set of data to use. Most data objects are shared between the contact and contactless interface and need to be personalized only once. The persistent data objects that are not shared are the following: 

•	Application Control 

•	Card Issuer Action Codes 

•	Application Interchange Profile (AIP) 

•	Application File Locator (AFL) 

When personalizing the additional NEPALPAY data objects, the following must be considered: 

•	The Card Issuer Action Codes and Application Control must be configured to indicate that offline PIN is not supported over the contactless interface. 


•	The AIP must be configured to indicate that the card supports the NEPALPAY profile. This automatically results in a different Signed Static Application Data (SSAD) for the contactless and contact interface. 


•	The AFL must be personalized with the predefined NEPALPAY value. The fixed value for the AFL imposes constraints on the organization of the data objects into the files referenced in the AFL. 


### 4.5.1	NEPALPAY IC Card Chip Data Elements

The Card personalization profile defines the application configuration for use in a dual-interface Card. It uses NEPALPAY Profile-I (For NEPALPAY Domestic Cards) and NEPALPAY Profile-II (For NEPALPAY International Cards) which can be used for NEPALPAY dual interface Cards. 
The NEPALPAY card specification adheres to the D-PAS Specification Profile 10 for the Contact interface, Profile 30 for the Contactless interface and encompassing both for dual interface standards.


#### 4.5.1.1	Chip Data Elements for NEPALPAY Profile-I
The following tables summarize the chip data elements required for Cardholder data, application data, and Card Authentication Method (CAM) data elements for NEPALPAY Domestic Debit/Prepaid/Credit contact and contactless common interface:


<table>
<tr>
<td rowspan = '27'>Card Profile</td>
</tr>

<tr>

<td></td>
<td></td>
<td></td>
<td>Contact</td>
<td>Contactless D-PAS</td>
</tr>
<tr>
<td></td>
<td colspan = '2'>P/PSE Supported</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td></td>
<td colspan = '2'>Offline Data Authentication Supported</td>
<td>DDA, CDA</td>
<td>CDA only</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Is the Card Online Only?</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Consecutive Transaction limit 1 (CVM-Cons limit 1) </td>
<td></td>
<td>0</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Consecutive Transaction limit 2 (CVM-Cons limit 2) </td>
<td></td>
<td>0</td>
</tr>
<tr>
<td></td>
<td></td>
<td>CVM Cumulative Transaction limit 1 (CVM-Cum limit 1)</td>
<td></td>
<td>000000000000</td>
</tr>
<tr>
<td></td>
<td></td>
<td>CVM Cumulative Transaction limit 2 (CVM-Cum limit 2)</td>
<td></td>
<td>000000000000</td>
</tr>
<tr>
<td></td>
<td></td>
<td>CVM Single Transaction Amount limit 1 (CVM-STA 1)</td>
<td></td>
<td>000000000000</td>
</tr>
<tr>
<td></td>
<td></td>
<td>CVM Single Transaction Amount limit 2 (CVM-STA 2)</td>
<td></td>
<td>000000000000</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Contactless Consecutive Transaction limit (CL-Cons limit) </td>
<td></td>
<td>0</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Contactless Cumulative Transaction limit (CL-Cum limit)</td>
<td></td>
<td>000000000000</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Cumulative Single Transaction Amount limit (CL-STA)</td>
<td></td>
<td>000000000000</td>
</tr>
<tr>
<td></td>
<td colspan='2'> Online PIN </td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td></td>
<td colspan = '2'> Offline PIN </td>
<td>None</td>
<td>None</td>
</tr>
<tr>
<td></td>
<td colspan = '2'>Is transaction recovery supported on Contactless?</td>
<td></td>
<td>No</td>
</tr>
<tr>
<td></td>
<td colspan = '2'>Track 1 Discretionary Data (Tag 9F1F) supported?</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td></td>
<td colspan = '2'>Which Cryptogram Version Number (CVN) supported</td>
<td>5</td>
<td>15</td>
</tr>
<tr>
<td></td>
<td colspan = '2'>Tearing Recovery</td>
<td></td>
<td>NO</td>
</tr>
<tr>
<td></td>
<td colspan = '2'>Derivation Key Index (DKI)</td>
<td colspan = '2'>01</td>
</tr>
<tr>
<td></td>
<td colspan = '2' >Security Limits</td>
<td colspan = '3'></td>
</tr>
<tr>
<td></td>
<td rowspan = '6'></td>
<td>ATC Limits</td>
<td colspan = '2'>FFFF</td>
</tr>
<tr>
<td></td>
<td>Encrypted PIN cryptography failure limit </td>
<td colspan = '2'>FFFF</td>
</tr>
<tr>
<td></td>
<td>Failed MAC limit</td>
<td colspan = '2'>FF</td>

</tr>
<tr>
<td></td>
<td>Lifetime MAC Limit</td>
<td colspan = '2'>FFFFFF</td>

</tr>
<tr>
<td></td>
<td>Session MAC Limit </td>
<td colspan = '2'>OF</td>

</tr>
</table>

<table border="1">
    <tr>
      <td rowspan ='22'> P/PSE</td>
      </tr>
      <tr>
      <td rowspan = '2'>Length</td>
      <td rowspan = '2'>Data object name</td>
      <td rowspan = '2'>Tag</td>
      <td>Contact</td>
      <td>Contactless</td>
      </tr>
      <tr>
      <td colspan ='2'>Value</td>
    </tr> 
    <tr>
    <td>var.</td>
    <td>DF Name</td>
    <td>84</td>
    <td>1PAY.SYS.DDF01</td>
    <td>2PAY.SYS.DDF01</td>
    </tr>
    <tr>
    <td>var. (5-16)</td>
    <td>FCI Proprietary Template</td>
    <td>A5</td>
    <td colspan = ''></td>
    </tr>
    <tr>
    <td>2</td>
    <td>SFI of the Directory Elementary File </td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>var. (2-8)</td>
    <td> Language Preference</td>
    <td>5F2D</td>
    <td>Yes</td>
    </tr>
    <tr>
    <td rowspan = '5'></td>
    <td>  High to low Priority</td>
    <td></td>
    <td></td>
    </tr>
      <tr>
    <td>  1  </td>
    <td rowspan = '4'></td>
    <td>en</td>
    </tr>
      <tr>
    <td> 2 </td>
    </tr>
      <tr>
    <td>  3  </td>
    </tr>
      <tr>
    <td>  4 </td>
    </tr>
<tr>
<td>var.</td>
<td>  FCI Issuer Discretionary Data</td>
<td>BF0C</td>
<td colspan = '2'></td>
</tr>
<tr>
<td>Var. max 252</td>
<td>Directory Entry: Contactless D-PAS</td>
<td>61</td>
<td></td>
<td></td>
</tr>
<tr>
<td>5-16</td>
<td>ADF Name</td>
<td>4F</td>
<td>A0000001523010</td>
<td>A0000001523010</td>
</tr>
<tr>
<td>var. (1-16)</td>
<td>Application Label</td>
<td>50</td>
<td>DISCOVER</td>
<td>DISCOVER</td>
</tr>

<tr>
<td>1</td>
<td>Application Priority Indicator</td>
<td>87</td>
<td>01</td>
<td>01</td>
<td></td>
</tr>

<tr>
<td>4</td>
<td>  Issuer Identification Number Extended</td>
<td>9F0C</td>
<td></td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>  Issuer Identifier Number</td>
<td>42</td>
<td></td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Kernel Identifier</td>
<td>9F2A</td>
<td></td>
<td>06</td>
</tr>
<tr>
<td>var.</td>
<td>Extended Selection</td>
<td>9F29</td>
<td></td>
<td></td>
</tr>
<tr>
<td>var.</td>
<td> Application Selection Registered Proprietary Data </td>
<td>9F0A</td>
<td></td>
<td></td>
</tr>
</table>


<table border="1">
    <tr>
      <td rowspan ='26'>FCI Information </td>
      </tr>
      <tr>
      <td rowspan = '2'>Length</td>
      <td rowspan = '2'>Data object name</td>
      <td rowspan = '2'>Tag</td>
      <td>Contact</td>
      <td>Contactless D-PAS </td>
      </tr>
      <tr>
      <td colspan ='2'>Value</td>
    </tr> 
    <tr>
    <td>var.</td>
    <td>File Control Information</td>
    <td></td>
    <td colspan = '2'></td>
    </tr>
    <tr>
    <td>var. (7-16)</td>
    <td>  DF Name</td>
    <td>84</td>
    <td>A0000001523010</td>
    <td>A0000001523010</td>
    </tr>
    <tr>
    <td>var.</td>
    <td>       FCI Proprietary Template</td>
    <td>A5</td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>var. (1-16)</td>
    <td> Application Label</td>
    <td>50</td>
    <td>DISCOVER</td>
     <td>DISCOVER</td>
    </tr>
    <tr>
    <td>1</td>
    <td> Application Priority Indicator</td>
    <td>87</td>
    <td>01</td>
    <td>01</td>
    </tr>
      <tr>
    <td>  Var. </td>
    <td>PDOL</td>
    <td>9F38</td>
    <td></td>
    <td>9F66049F02069F03069F1A025F2A029A039C019F3704</td>
</tr>
      <tr>
    <td> var. (2-8)</td>
    <td>Language Preference</td>
    <td>5F2D</td>
    <td>Yes</td>
    <td></td>
    </tr>
      <tr>
      <td></td>
     <td> High to low Priority </td>
     <td></td>
      <td colspan = '2'></td>
     </tr>
      <tr>
    <td> </td>
    <td>1</td>
    <td> </td>
    <td>en</td>
    <td></td>
    </tr>
      <tr>
    <td> </td>
    <td>2</td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
      <tr>
    <td> </td>
    <td>3</td>
    <td> </td>
    <td></td>
    <td></td>
    </tr>
      <tr>
    <td> </td>
    <td>4</td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
<tr>

<td> 1</td>
<td>Issuer Code Table Index</td>
<td>9F11</td>
<td>01</td>
<td>01</td>
</tr>
<tr>
<td>Var.(1-16)</td>
<td>           Application Preferred Name</td>
<td>9F12</td>
<td>NEPALPAY</td>
<td>NEPALPAY</td>
</tr>
<tr>
<td>var.</td>
<td> FCI Issuer Discretionary Data</td>
<td>BF0C</td>
<td colspan = '2'></td>
</tr>
<tr>
<td>4</td>
<td> Issuer Identification Number Extended</td>
<td>9F0C</td>
<td></td>
<td></td>
</tr>

<tr>
<td>3</td>
<td>                   Issuer Identifier Number</td>
<td>42</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>2</td>
<td>                   Application Selection tag  </td>
<td>DF62</td>
<td></td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>  Log Entry</td>
<td>9F4D</td>
<td>0D0A</td>
<td>0D0A</td>
</tr>
<tr>

<td>1</td>
<td>                    Card Feature Version Number  </td>
<td>DF3A</td>
<td></td>
<td></td>
</tr>
<tr>
<td>var.</td>
<td>                  Card Feature Descriptor </td>
<td>DF3B</td>
<td></td>
<td></td>
</tr>
<tr>

<td>8</td>
<td> Form Factor Identifier </td>
<td>9F6E</td>
<td></td>
<td></td>
</tr>
<tr>

<td>var.</td>
<td>Application Selection Registered Proprietary Data  </td>
<td>9F0A</td>
<td></td>
<td></td>
</tr>
</table>


<table border="1">
    <tr>
      <td rowspan ='26'>Get Processing Options</td>
      </tr>
      <tr>
      <td rowspan = '2'>Length</td>
      <td rowspan = '2'>Data object name</td>
      <td rowspan = '2'>Tag</td>
      <td>Contact</td>
      <td>Contactless D-PAS </td>
      </tr>
      <tr>
      <td colspan ='2'>Value</td>
    </tr> 
    <tr>
    <td>Var.</td>
    <td>Application File Locator</td>
    <td>94</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
    </tr>
  <tr>
    <td>var.</td>
    <td>Track 2 Equivalent Data</td>
    <td>57</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Application Interchange Profile</td>
    <td>82</td>
     <td>3D 00</td>
    <td>19 00</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Application Configuration Options</td>
    <td>C1/C0</td>
    <td>01 00 00</td>
    <td>03 00 00</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Card Action Code-Denial</td>
    <td>C5</td>
    <td>00 00 00</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Card Action Code-Default</td>
    <td>C6</td>
    <td>06 50 00</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Card Action Code-Online</td>
    <td>C7</td>
    <td>06 FB 00</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CRM Country Code</td>
    <td>D2</td>
    <td>524</td>
    <td>Nepal</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CRM Currency Code</td>
    <td>D3</td>
    <td>524</td>
    <td>Nepalese rupee</td>
  </tr>
   <tr>
    <td>5</td>
    <td>Currency Conversion Code1</td>
    <td>C3</td>
    <td colspan = '2'>0000000000</td>
  </tr>
   <tr>
    <td>5</td>
    <td>Currency Conversion Code 2</td>
    <td>C4</td>
    <td colspan = '2'>0000000000</td>
  </tr>
<tr>
    <td>var. </td>
    <td>Log Format</td>
    <td>9F4F</td>
    <td>9F02065F2A029A039F36029F34039F5
    2079F1A0295059C018A029F37049F03
    069F53089F66049F7102</td>
    </tr>
      <tr>
    <td>1-32 </td>
    <td>Extended Logging Data</td>
    <td> DF3C</td>
    <td colspan = '2'></td>
    </tr>
    <tr>
    <td> 2</td>
    <td>Card Processing Requirement (CPR)</td>
    <td>9F71</td>
    <td></td>
    <td>00 CB</td>
    </tr>
<tr>

<td> 3</td>
<td>CRM-Card Action Code-Switch Interface</td>
<td>DF30</td>
<td></td>
<td>04 08 00</td>
</tr>

<tr>
<td>3</td>
<td>CRM - Card Action Code - Denial </td>
<td>DF31</td>
<td></td>
<td>00 00 00</td>
</tr>

<tr>
<td>3</td>
<td>   CRM-Card Action Code-Online   </td>
<td>DF32</td>
<td></td>
<td>DC FE FF</td>
</tr>
<tr>
<td>3</td>
<td> CRM-Card Action Code-Default     </td>
<td>DF33</td>
<td></td>
<td>DC BE EB</td>
</tr>
<tr>
<td>2</td>
<td> CVM-Card Action Code-Online PIN     </td>
<td>DF34</td>
<td></td>
<td>DC 80</td>
</tr>
<tr>
<td>2</td>
<td>  CVM-Card Action Code-Signature    </td>
<td>DF35</td>
<td></td>
<td>9C 80
</td>
</tr>
<tr>
<td>10-32</td>
<td>Issuer Application Data      </td>
<td>9F10</td>
<td>0105000000000000000000</td>
<td>0115000000000000000000</td>
</tr>
</table>

<table border="1">
    <tr>
      <td rowspan ='83'>Data Objects</td>
      </tr>
      <tr>
      <td rowspan = '2'>Length</td>
      <td rowspan = '2'>Data object name</td>
      <td rowspan = '2'>Tag</td>
      <td>Contact</td>
      <td>Contactless D-PAS </td>
      </tr>
      <tr>
      <td colspan ='2'>Value</td>
    </tr> 
    <tr>
    <td>48</td>
    <td>Issuer Life Cycle Data</td>
    <td>C2</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
    </tr>
  <tr>
    <td>1</td>
    <td>Application State</td>
    <td>9F78</td>
    <td>01</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>CVM List</td>
    <td>8E</td>
    <td>00000000 00000000 0203 1E03 1F03 </td>
    <td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Application Currency Code</td>
    <td>9F42</td>
    <td>524</td>
    <td>Nepalese rupee</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Application Currency Exponent</td>
    <td>9F44</td>
    <td colspan = '2'>2</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Issuer Country Code</td>
    <td>5F28</td>
    <td>524</td>
    <td>Nepal</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Service Code</td>
    <td>5F30</td>
    <td colspan = '2'>226</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Pin Try Counter</td>
    <td>9F17</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Application Primary Account Number</td>
    <td>5A</td>
    <td colspan = '2'>Data preparation</td>
    
  </tr>
   <tr>
    <td>var.</td>
    <td>Cardholder Name</td>
    <td>5F20</td>
    <td>Issuer Defined</td>
    <td>Issuer Defined</td>
  </tr>
   <tr>
    <td>var.</td>
    <td>Cardholder Name Extended</td>
    <td>9F0B</td>
    <td>Issuer Defined</td>
  </tr>
<tr>
    <td>var. </td>
    <td>Track 2 Equivalent Data</td>
    <td>57</td>
    <td>Data preparation</td>
    </tr>
      <tr>
    <td>var.</td>
    <td>Track 1 Discretionary Data</td>
    <td>9F1F </td>
    <td>Data preparation</td>
    </tr>
    <tr>
    <td> 1</td>
    <td>Application PAN Sequence Number</td>
    <td>5F34</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
    </tr>
<tr>

<td> 3</td>
<td>Application Effective Date</td>
<td>5F25</td>
<td>Issuer Defined</td>
</tr>

<tr>
<td>3</td>
<td>Application Expiration Date</td>
<td>5F24</td>
<td colspan = '2'>Issuer Defined</td>

</tr>

<tr>
<td>2</td>
<td>   Application Version Number   </td>
<td>9F08</td>
<td colspan = '2'>0001</td>

</tr>
<tr>
<td>2</td>
<td> Application Usage Control    </td>
<td>9F07</td>
<td colspan = '2'>FF 00</td>

</tr>
<tr>
<td>5</td>
<td> Issuer Action Code - Default    </td>
<td>9F0D</td>
<td>BC 60 8C 88 00</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td> Issuer Action Code - Denial    </td>
<td>9F0E</td>
<td>00 00 00 00 00</td>
</tr>
<tr>
<td>5</td>
<td>Issuer Action Code - Online  </td>
<td>9F0F</td>
<td>BC 68 9C 98 00</td>
</tr>
<tr>
<td>Var.</td>
<td>Payment Account Reference - PAR</td>
<td>9F24</td>
<td colspan = '2'></td>
</tr>
<tr>
<td>Var.</td>
<td>CDOL1</td>
<td>8C</td>
<td>9F02069F03069F
1A0295055F2A029A03
9C019F37049F35019F3403</td>
<td></td>
</tr>
<tr>
<td>Var.</td>
<td>CDOL2</td>
<td>8D</td>
<td>910A8A0295059F3704</td>
</tr>
<tr>
<td>1</td>
<td>Static Data Authentication Tag List</td>
<td>9F4A</td>
<td>82</td>
<td>82</td>
</tr>
<tr>
<td>Var.</td>
<td>Key Length</td>
<td></td>
<td>1984</td>
</tr>
<tr>
<td>NI-NCA+36</td>
<td>Issuer Public Key Remainder</td>
<td>Data preparation</td>
<td>Data preparation</td>
</tr>
<tr>
<td>NCA</td>
<td>Issuer Public Key Certificate</td>
<td>90</td>
<td>Data preparation</td>
<td>Data preparation</td>
</tr>
<tr>
<td>1 or 3</td>
<td>ICC Public Key Exponent</td>
<td>9F47</td>
<td>Data preparation</td>
<td>Data preparation</td>
</tr>
<tr>
<td>N1</td>
<td>ICC Public Key Certificate</td>
<td>9F46</td>
<td>Data preparation</td>
<td>Data preparation</td>
</tr>
<tr>
<td>NIC-NI+42</td>
<td>ICC Public Key Remainder</td>
<td>9F48</td>
<td>Data preparation</td>
<td>Data preparation</td>
</tr>
<tr>
<td>var.</td>
<td>Issuer Application Data Object List </td>
<td>D0</td>
<td colspan = '2'>Issuer Defined</td>
</tr>
<tr>
<td>var.</td>
<td>Issuer Defined Data Tags </td>
<td>DF01</td>
<td colspan = '2'>Issuer Defined</td>
</tr>
<tr>
<td></td>
<td></td>
<td>DF02</td>
<td colspan = '2'>Issuer Defined</td>
</tr>
<tr>
<td></td>
<td></td>
<td>DF03</td>
<td colspan = '2'>Issuer Defined</td>
</tr>
<tr>
<td></td>
<td></td>
<td>DF04</td>
<td colspan = '2'>Issuer Defined</td>
</tr>
<tr>
<td></td>
<td></td>
<td>DF05</td>
<td colspan = '2'>Issuer Defined</td>
</tr>
<tr>
<td></td>
<td></td>
<td>DF06</td>
<td colspan = '2' >Issuer Defined</td>
</tr>
<tr>
<td></td>
<td></td>
<td>DF07</td>
<td colspan = '2' >Issuer Defined</td>
</tr>
<tr>
<td></td>
<td></td>
<td>DF08</td>
<td colspan = '2'>Issuer Defined</td>
</tr>
<tr>
<td></td>
<td></td>
<td>DF09</td>
<td colspan = '2' >Issuer Defined</td>
</tr>
<tr>
<td></td>
<td></td>
<td>DF0A</td>
<td colspan = '2'>Issuer Defined</td>
</tr>
<tr>
<td>6</td>
<td>Lower Cumulative Offline Amount (LCOA)</td>
<td>C8</td>
<td colspan = '2'>000000000000</td>
</tr>
<tr>
<td>6</td>
<td>Upper Cumulative Offline Amount (UCOA)</td>
<td>C9</td>
<td colspan = '2'>000000000000</td>
</tr>

<tr>
<td>6</td>
<td>Single Transaction Amount (STA) limit</td>
<td>CA</td>
<td colspan = '2'>000000000000</td>
</tr>

<tr>
<td>1</td>
<td>Lower Consecutive Offline Limit (LCOL)</td>
<td>CB</td>
<td colspan = '2'>00</td>
</tr>

<tr>
<td>1</td>
<td>Upper Consecutive Offline Limit (UCOL)</td>
<td>CC</td>
<td colspan = '2'>00</td>
</tr>

<tr>
<td>1</td>
<td>Number of Consecutive Offline Transactions (NCOT) Counter </td>
<td>CD</td>
<td colspan = '2'>Data preparation</td>
</tr>

<tr>
<td>6</td>
<td>Cumulative Offline Amount Counter (COA)</td>
<td>CE</td>
<td colspan = '2'>Data preparation</td>
</tr>
<tr>
    <td>6</td>
    <td>CVM-Accumulator</td>
    <td>D4</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>1</td>
    <td>CVM-Counter</td>
    <td>D9</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Consecutive Transaction limit 1 (CVM-Cons limit 1)</td>
    <td>DA</td>
    <td>00</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Consecutive Transaction limit 2 (CVM-Cons limit 2)</td>
    <td>DB</td>
    <td>00</td>
  </tr>
  <tr>
    <td>6</td>
    <td>CVM Cumulative Transaction limit 1 (CVM-Cum limit 1)</td>
    <td>D5</td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td>6</td>
    <td>CVM Cumulative Transaction limit 2 (CVM-Cum limit 2)</td>
    <td>D6</td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td>6</td>
    <td>CVM Single Transaction Amount limit 1 (CVM-STA 1)</td>
    <td>D7</td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td>6</td>
    <td>CVM Single Transaction Amount limit 2 (CVM-STA 2)</td>
    <td>D8</td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Contactless Consecutive Transaction limit (CL-Cons limit)</td>
    <td>DF44</td>
    <td>00</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Contactless Cumulative Transaction limit (CL-Cum limit)</td>
    <td>DF41</td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Cumulative Single Transaction Amount limit (CL-STA)</td>
    <td>DF42</td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Contactless - Accumulator</td>
    <td>DF40</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Contactless - Counter</td>
    <td>DF43</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Counters and Accumulator Control Options (CACO)</td>
    <td>DE</td>
    <td>E0 01 61 01 01 00</td>
  </tr>
  <tr>
    <td>3</td>
    <td>DCVV</td>
    <td>9F7E</td>
    <td></td>
  </tr>
  <tr>
    <td>5-16</td>
    <td>Card Authentication Related Data (CARD)</td>
    <td>9F69</td>
    <td></td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Track 1 Data</td>
    <td>56</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Contactless D-PAS Default Profile</td>
    <td>BF50</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Transaction Profile Object</td>
    <td>DF20</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>var. (11-64)</td>
    <td>Card ID</td>
    <td>DF3E</td>
    <td>Data preparation</td>
  </tr>










</table>




Table 6: NEPALPAY Profile-I



#### 4.5.1.2	Chip Data Elements for NEPALPAY Profile-II 
NEPALPAY Profile-II summarize the chip data elements required for Cardholder data, application data, and Card Authentication Method (CAM) data elements for NEPALPAY International Debit/Prepaid/Credit Dual Interface Card:
Implementation of this profile is identical to NEPAL PAY CARD Profile-I except for application currency code and application usage control.


<table border="1">
  <tr>
    <td rowspan="27">Card Profile</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>Contact</td>
  <td>Contactless D-PAS</td>
  </tr>
  <tr>
    <td colspan = '2'>P/PSE Supported</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td colspan = '2'>Offline Data Authentication Supported</td>
    <td>DDA, CDA</td>
    <td>CDA only</td>
  </tr>
  <tr>
  <td></td>
    <td>Is the Card Online Only?</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
  <td></td>
    <td>Consecutive Transaction limit 1 (CVM-Cons limit 1)</td>
    <td></td>
    <td>0</td>
  </tr>
  <tr>
  <td></td>
    <td>Consecutive Transaction limit 2 (CVM-Cons limit 2)</td>
    <td></td>
    <td>0</td>
  </tr>
  <tr>
  <td></td>
    <td>CVM Cumulative Transaction limit 1 (CVM-Cum limit 1)</td>
    <td></td>
    <td>000000000000</td>
  </tr>
  <tr>
  <td></td>
    <td>CVM Cumulative Transaction limit 2 (CVM-Cum limit 2)</td>
    <td></td>
    <td>000000000000</td>
  </tr>
  <tr>
  <td></td>
    <td>CVM Single Transaction Amount limit 1 (CVM-STA 1)</td>
    <td></td>
    <td>000000000000</td>
  </tr>
  <tr>
  <td></td>
    <td>CVM Single Transaction Amount limit 2 (CVM-STA 2)</td>
    <td></td>
    <td>000000000000</td>
  </tr>
  <tr>
  <td></td>
    <td>Contactless Consecutive Transaction limit (CL-Cons limit)</td>
    <td></td>
    <td>0</td>
  </tr>
  <tr>
  <td></td>
    <td>Contactless Cumulative Transaction limit (CL-Cum limit)</td>
    <td></td>
    <td>000000000000</td>
  </tr>
  <tr>
  <td></td>
    <td>Cumulative Single Transaction Amount limit (CL-STA)</td>
    <td></td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td colspan = '2'>Online PIN</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td colspan = '2'>Offline PIN</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td colspan = '2'>Is transaction recovery supported on Contactless?</td>
    <td></td>
    <td>No</td>
  </tr>
  <tr>
    <td colspan = '2'>Track 1 Discretionary Data (Tag 9F1F) supported?</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td colspan = '2'>Which Cryptogram Version Number (CVN) supported</td>
    <td>5</td>
    <td>15</td>
  </tr>
  <tr>
    <td colspan = '2'>Tearing Recovery</td>
    <td></td>
    <td>No</td>
  </tr>
  <tr>
    <td colspan = '2'>Derivation Key Index (DKI)</td>
    <td colspan="2">01</td>
  </tr>
  <tr>
    <td colspan = '2'>Security Limits</td>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td></td>
    <td>ATC Limits</td>
    <td colspan = '2' >FFFF</td>
  </tr>
  <tr>
    <td></td>
    <td>Encrypted PIN cryptography failure limit</td>
    <td colspan = '2' >FFFF</td>
  </tr>
  <tr>
    <td></td>
    <td>Failed MAC limit</td>
    <td colspan = '2'>FF</td>
  </tr>
  <tr>
    <td></td>
    <td>Lifetime MAC Limit</td>
    <td colspan = '2'>FFFFFF</td>
  </tr>
  <tr>
    <td></td>
    <td>Session MAC Limit</td>
    <td colspan = '2'>0F</td>
  </tr>
</table>


<table border="1">
  <tr>
    <td rowspan='21'>P/PSE</td>
    <td rowspan='2'>Length</td>
    <td rowspan='2'>Data object name</td>
    <td rowspan='2'>Tag</td>
    <td>Contact</td>
    <td>Contactless</td>
  </tr>
  <tr>
    <td colspan='2'>Value</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>DF Name</td>
    <td>84</td>
    <td>1PAY.SYS.DDF01</td>
    <td>2PAY.SYS.DDF01</td>
  </tr>
  <tr>
    <td>var. (5-16)</td>
    <td>FCI Proprietary Template</td>
    <td>A5</td>
    <td colspan='2'></td>
  </tr>
  <tr>
    <td>2</td>
    <td>SFI of the Directory Elementary File</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>var. (2-8)</td>
    <td>Language Preference</td>
    <td>5F2D</td>
    <td>Yes</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan='5'></td>
    <td>High to low Priority</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td rowspan='4'></td>
    <td>en</td>
  </tr>
  <tr>
    <td>2</td>
  </tr>
  <tr>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>FCI Issuer Discretionary Data</td>
    <td>BF0C</td>
    <td colspan='2'></td>
  </tr>
  <tr>
    <td>Var. max 252</td>
    <td>Directory Entry: Contactless D-PAS</td>
    <td>61</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>5-16</td>
    <td>ADF Name</td>
    <td>4F</td>
    <td>A0000001523010</td>
    <td>A0000001523010</td>
  </tr>
  <tr>
    <td>var. (1-16)</td>
    <td>Application Label</td>
    <td>50</td>
    <td>DISCOVER</td>
    <td>DISCOVER</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Application Priority Indicator</td>
    <td>87</td>
    <td>01</td>
    <td>01</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Issuer Identification Number Extended</td>
    <td>9F0C</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Issuer Identifier Number</td>
    <td>42</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Kernel Identifier</td>
    <td>9F2A</td>
    <td></td>
    <td>06</td>
  </tr>
  <tr>
    <td>Var.</td>
    <td>Extended Selection</td>
    <td>9F29</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Var.</td>
    <td>Application Selection Registered Proprietary Data</td>
    <td>9F0A</td>
    <td></td>
    <td></td>
  </tr>
</table>

<table border="1">
  <tr>
    <td rowspan="26">FCI Information</td>
  </tr>
  <tr>
    <td rowspan="2">Length</td>
    <td rowspan="2">Data object name</td>
    <td rowspan="2">Tag</td>
    <td>Contact</td>
    <td>Contactless D-PAS</td>
  </tr>
  <tr>
    <td colspan="2">Value</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>File Control Information</td>
    <td></td>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td>var. (7-16)</td>
    <td>DF Name</td>
    <td>84</td>
    <td>A0000001523010</td>
    <td>A0000001523010</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>FCI Proprietary Template</td>
    <td>A5</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>var. (1-16)</td>
    <td>Application Label</td>
    <td>50</td>
    <td>DISCOVER</td>
    <td>DISCOVER</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Application Priority Indicator</td>
    <td>87</td>
    <td>01</td>
    <td>01</td>
  </tr>
  <tr>
    <td>Var.</td>
    <td>PDOL</td>
    <td>9F38</td>
    <td></td>
    <td>9F66049F02069F03069F1
    A025F2A029A039C019F3704</td>
  </tr>
  <tr>
    <td>var. (2-8)</td>
    <td>Language Preference</td>
    <td>5F2D</td>
    <td>Yes</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>High to low Priority</td>
    <td></td>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td></td>
    <td>1</td>
    <td></td>
    <td>en</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>2</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>3</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>4</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Issuer Code Table Index</td>
    <td>9F11</td>
    <td>01</td>
    <td>01</td>
  </tr>
  <tr>
    <td>Var.(1-16)</td>
    <td>Application Preferred Name</td>
    <td>9F12</td>
    <td>NEPALPAY</td>
    <td>NEPALPAY</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>FCI Issuer Discretionary Data</td>
    <td>BF0C</td>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td>4</td>
    <td>Issuer Identification Number Extended</td>
    <td>9F0C</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Issuer Identifier Number</td>
    <td>42</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Application Selection tag</td>
    <td>DF62</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Log Entry</td>
    <td>9F4D</td>
    <td>0D0A</td>
    <td>0D0A</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Card Feature Version Number</td>
    <td>DF3A</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Card Feature Descriptor</td>
    <td>DF3B</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>8</td>
    <td>Form Factor Identifier</td>
    <td>9F6E</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Application Selection Registered Proprietary Data</td>
    <td>9F0A</td>
    <td></td>
    <td></td>
  </tr>
</table>


<table border="1">
  <tr>
    <td rowspan="26">Get Processing Options</td>
  </tr>
  <tr>
    <td rowspan="2">Length</td>
    <td rowspan="2">Data object name</td>
    <td rowspan="2">Tag</td>
    <td>Contact</td>
    <td>Contactless D-PAS</td>
  </tr>
  <tr>
    <td colspan="2">Value</td>
  </tr>
  <tr>
    <td>Var.</td>
    <td>Application File Locator</td>
    <td>94</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Track 2 Equivalent Data</td>
    <td>57</td>
    <td>Data preparation</td>
    <td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Application Interchange Profile</td>
    <td>82</td>
    <td>3D 00</td>
    <td>19 00</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Application Configuration Options</td>
    <td>C1/C0</td>
    <td>01 00 00</td>
    <td>03 00 00</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Card Action Code-Denial</td>
    <td>C5</td>
    <td>00 00 00</td>
    <td></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Card Action Code-Default</td>
    <td>C6</td>
    <td>06 50 00</td>
    <td></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Card Action Code-Online</td>
    <td>C7</td>
    <td>06 FB 00</td>
    <td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>CRM Country Code</td>
    <td>D2</td>
    <td>524</td>
    <td>Nepal</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CRM Currency Code</td>
    <td>D3</td>
    <td>524</td>
    <td>Nepalese rupee</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Currency Conversion Code1</td>
    <td>C3</td>
    <td colspan="2">0000000000</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Currency Conversion Code 2</td>
    <td>C4</td>
    <td colspan="2">0000000000</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Log Format</td>
    <td>9F4F</td>
    <td colspan="2">9F02065F2A029A039F36029F34039F52079F1A0295059C018A029F37049F03069F53089F66049F7102</td>
  </tr>
  <tr>
    <td>1-32</td>
    <td>Extended Logging Data</td>
    <td>DF3C</td>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Card Processing Requirement (CPR)</td>
    <td>9F71</td>
    <td></td>
    <td>00 CB</td>
  </tr>
  <tr>
    <td>3</td>
    <td>CRM-Card Action Code-Switch Interface</td>
    <td>DF30</td>
    <td></td>
    <td>04 08 00</td>
  </tr>
  <tr>
    <td>3</td>
    <td>CRM - Card Action Code - Denial</td>
    <td>DF31</td>
    <td></td>
    <td>00 00 00</td>
  </tr>
  <tr>
    <td>3</td>
    <td>CRM-Card Action Code-Online</td>
    <td>DF32</td>
    <td></td>
    <td>DC FE FF</td>
  </tr>
  <tr>
    <td>3</td>
    <td>CRM-Card Action Code-Default</td>
    <td>DF33</td>
    <td></td>
    <td>DC BE EB</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CVM-Card Action Code-Online PIN</td>
    <td>DF34</td>
    <td></td>
    <td>DC 80</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CVM-Card Action Code-Signature</td>
    <td>DF35</td>
    <td></td>
    <td>9C 80</td>
  </tr>
  <tr>
    <td>10-32</td>
    <td>Issuer Application Data</td>
    <td>9F10</td>
    <td>0105000000000000000000</td>
    <td>0115000000000000000000</td>
  </tr>
</table>



<table border="1">
  <tr>
    <td rowspan="72">Data Objects</td>
  </tr>
  <tr>
    <td rowspan="2">Length</td>
    <td rowspan="2">Data object name</td>
    <td rowspan="2">Tag</td>
    <td>Contact</td>
    <td>Contactless D-PAS</td>
  </tr>
  <tr>
    <td colspan="2">Value</td>
  </tr>
  <tr>
  <td>48</td>
  <td>Issuer Life Cycle Data</td>
  <td>C2</td>
  <td>Data preparation</td>
  <td>Data preparation</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Application State</td>
    <td>9F78</td>
    <td>01</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>CVM List</td>
    <td>8E</td>
    <td>00000000 00000000 0203 1E03 1F03</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Application Currency Code</td>
    <td>9F42</td>
   <td>840</td>
   <td>(USD)</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Application Currency Exponent</td>
    <td>9F44</td>
    <td colspan = '2'>2</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Issuer Country Code</td>
    <td>5F28</td>
    <td>524</td>
    <td>Nepal</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Service Code</td>
    <td>5F30</td>
    <td colspan = '2'>226</td>
  </tr>
  <tr>
   <td>1</td>
    <td>Pin Try Counter</td>
    <td>9F17</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Application Primary Account Number</td>
    <td>5A</td>
    <td colspan = '2'>Data preparation</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Cardholder Name</td>
    <td>5F20</td>
    <td>Issuer Defined</td>
    <td>Issuer Defined</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Cardholder Name Extended</td>
    <td>9F0B</td>
    <td>Issuer Defined</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Track 2 Equivalent Data</td>
    <td>57</td>
    <td>Data preparation</td>
    <td></td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Track 1 Discretionary Data</td>
    <td>9F1F</td>
    <td>Data preparation</td>
    <td></td>
  </tr>
  <tr>
   <td>1</td>
    <td>Application PAN Sequence Number</td>
    <td>5F34</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
  </tr>
  <tr>
   <td>3</td>
    <td>Application Effective Date</td>
    <td>5F25</td>
    <td colspan = '2'>Issuer Defined</td>
    
  </tr>
  <tr>
   <td>3</td>
    <td>Application Expiration Date</td>
    <td>5F24</td>
    <td colspan = '2' >Issuer Defined</td>
  </tr>
  <tr>
  <td>2</td>
    <td>Application Version Number</td>
    <td>9F08</td>
    <td>0001</td>
  </tr>
  <tr>
  <td>2</td>
    <td>Application Usage Control</td>
    <td>9F07</td>
    <td>56 00</td>
  </tr>
  <tr>
  <td>5</td>
    <td>Issuer Action Code - Default</td>
    <td>9F0D</td>
    <td>BC 60 8C 88 00</td>
  </tr>
  <tr>
  <td>5</td>
    <td>Issuer Action Code - Denial</td>
    <td>9F0E</td>
    <td>00 00 00 00 00</td>
  </tr>
  <tr>
  <td>5</td>
    <td>Issuer Action Code - Online</td>
    <td>9F0F</td>
    <td>BC 68 9C 98 00</td>
  </tr>
  <tr>
   <td>var</td>
    <td>Payment Account Reference - PAR</td>
    <td>9F24</td>
    <td colspan = '2'></td>
  </tr>
  <tr>
    <td>39</td>
    <td>CDOL1</td>
    <td>8C</td>
    <td>9F02069F03069F1A0295055F2A029A039C019F37049F35019F3403</td>
    <td></td>
  </tr>
  <tr>
    <td>12 or 18</td>
    <td>CDOL2</td>
    <td>8D</td>
    <td>910A8A0295059F3704</td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Static Data Authentication Tag List</td>
    <td>9F4A</td>
    <td>82</td>
    <td>82</td>
  </tr>
  <tr>
    <td>1 or 3</td>
    <td>Issuer Public Key Exponent</td>
    <td>9F32</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>NI-NCA+36</td>
    <td>Issuer Public Key Remainder</td>
    <td>92</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>NCA</td>
    <td>Issuer Public Key Certificate</td>
    <td>90</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>1 or 3</td>
    <td>ICC Public Key Exponent</td>
    <td>9F47</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>NI</td>
    <td>ICC Public Key Certificate</td>
    <td>9F46</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>NIC-NI+42</td>
    <td>ICC Public Key Remainder</td>
    <td>9F48</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Issuer Application Data Object List</td>
    <td>D0</td>
    <td>Issuer Defined</td>
    <td></td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Issuer Defined Data Tags</td>
    <td>DF01</td>
    <td>Issuer Defined</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>DF02</td>
    <td>Issuer Defined</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>DF03</td>
    <td>Issuer Defined</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>DF04</td>
    <td>Issuer Defined</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>DF05</td>
    <td>Issuer Defined</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>DF06</td>
    <td>Issuer Defined</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>DF07</td>
    <td>Issuer Defined</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>DF08</td>
    <td>Issuer Defined</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>DF09</td>
    <td>Issuer Defined</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>DF0A</td>
    <td>Issuer Defined</td>
    <td></td>
  </tr>
  <tr>
    <td>6</td>
    <td>Lower Cumulative Offline Amount (LCOA)</td>
    <td>C8</td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Upper Cumulative Offline Amount (UCOA)</td>
    <td>C9</td>
    <td>000000000000</td>
    <td></td>
  </tr>
  <tr>
    <td>6</td>
    <td>Single Transaction Amount (STA) limit</td>
    <td>CA</td>
    <td>000000000000</td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Lower Consecutive Offline Limit (LCOL)</td>
    <td>CB</td>
    <td>00</td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Upper Consecutive Offline Limit (UCOL)</td>
    <td>CC</td>
    <td>00</td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Number of Consecutive Offline Transactions (NCOT) Counter</td>
    <td>CD</td>
    <td>Data preparation</td>
    <td></td>
  </tr>
  <tr>
    <td>6</td>
    <td>Cumulative Offline Amount Counter (COA)</td>
    <td>CE</td>
    <td>Data preparation</td>
    <td></td>
  </tr>
  <tr>
    <td>6</td>
    <td>CVM-Accumulator</td>
    <td>D4</td>
    <td>Data preparation</td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>CVM-Counter</td>
    <td>D9</td>
    <td>Data preparation</td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Consecutive Transaction limit 1 (CVM-Cons limit 1)</td>
    <td>DA</td>
    <td></td>
    <td>00</td></tr>
  <tr>
    <td>1</td>
    <td>Consecutive Transaction limit 2 (CVM-Cons limit 2)</td>
    <td>DB</td>
    <td></td>
    <td>00</td>
    
  </tr>
  <tr>
    <td>6</td>
    <td>CVM Cumulative Transaction limit 1 (CVM-Cum limit 1)</td>
    <td>D5</td>
    <td></td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td>6</td>
    <td>CVM Cumulative Transaction limit 2 (CVM-Cum limit 2)</td>
    <td>D6</td>
    <td></td>
    <td>000000000000</td>
    
  </tr>
  <tr>
    <td>6</td>
    <td>CVM Single Transaction Amount limit 1 (CVM-STA 1)</td>
    <td>D7</td>
    <td></td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td>6</td>
    <td>CVM Single Transaction Amount limit 2 (CVM-STA 2)</td>
    <td>D8</td>
    <td></td>
    <td>000000000000</td>
    
  </tr>
  <tr>
    <td>1</td>
    <td>Contactless Consecutive Transaction limit (CL-Cons limit)</td>
    <td>DF44</td>
    <td></td>
    <td>00</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Contactless Cumulative Transaction limit (CL-Cum limit)</td>
    <td>DF41</td>
    <td></td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Cumulative Single Transaction Amount limit (CL-STA)</td>
    <td>DF42</td>
    <td></td>
    <td>000000000000</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Contactless - Accumulator</td>
    <td>DF40</td>
    <td></td>
    <td>Data preparation</td>
    
  </tr>
  <tr>
    <td>1</td>
    <td>Contactless - Counter</td>
    <td>DF43</td>
    <td></td>
    <td>Data preparation</td>
    
  </tr>
  <tr>
    <td>6</td>
    <td>Counters and Accumulator Control Options (CACO)</td>
    <td>DE</td>
    <td></td>
    <td>E0 01 61 01 01 00</td>
  </tr>
  <tr>
    <td>3</td>
    <td>DCVV</td>
    <td>9F7E</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>5-16</td>
    <td>Card Authentication Related Data (CARD)</td>
    <td>9F69</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>var.</td>
    <td>Track 1 Data</td>
    <td>56</td>
     <td></td>
    <td>Data preparation</td>
   
  </tr>
  <tr>
    <td>var.</td>
    <td>Contactless D-PAS Default Profile</td>
    <td>BF50</td>
    <td></td>
    <td>Data preparation</td>
    
  </tr>
  <tr>
    <td>var.</td>
    <td>Transaction Profile Object</td>
    <td>DF20</td>
    <td>Data preparation</td>
    <td></td>

  </tr>
  <tr>
    <td>var. (11-64)</td>
    <td>Card ID</td>
    <td>DF3E</td>
    <td>Data preparation</td>
    <td>Data preparation</td>
  </tr>
</table>



Table 7:  NEPALPAY Profile-II



## 4.6	Card Profile Data Elements
This section provides a set of tables showing the technical specifications for each of the data elements required to implement this profile including, as appropriate: definitions, conditions, values, tags, field names and field lengths.

 ### 4.6.1	Payment System Environment (PSE):
A logical construct within the ICC, the entry point to which is a Directory Definition File (DDF) named 1PAY.SYS.DDF01. This DDF contains a Payment System Directory which in turn contains entries for one or more Application Definition Files (ADFs) which are formatted according to this specification. The presence of the PSE on the ICC is optional. PSE entry for each registered payment application shall have the following format.



<table border="1">
  <tr>
    <th>Tag-Length</th>
    <th colspan = '5'>VALUE</th>
  </tr>
  <tr>
    <td rowspan='9'>70xx</td>
    <td colspan = '5'>Template (xx denotes length of following bytes)</td>
  </tr>
  <tr>
    <td rowspan='8' colspan = '2'>61xx</td>
    <td colspan = '3'>Application Template</td>
  </tr>
  <tr>
    <td>4Fxx</td>
    <td colspan = '2'>‘A0000001523010’ || PIX</td>
  </tr>
  <tr>
    <td>50xx</td>
    <td colspan = '2'>Alphanumeric encoded name of application e.g., “DISCOVER”</td>
  </tr>
  <tr>
    <td>8701</td>
    <td colspan = '2'>Priority Indicator</td>
  </tr>
  <tr>
    <td>Tag || ‘xx’</td>
    <td  colspan = '2'>Other optional Data Objects allowed in EMV</td>
  </tr>
  <tr>
    <td rowspan = '3'>73xx</td>
    <td colspan = '2'>Directory Discretionary Template</td>
  </tr>
  <tr>
    <td>9F0Axx</td>
    <td>Application Selection Registered Proprietary Data</td>
  </tr>
  <tr>
    <td>Tag || ‘xx’</td>
    <td>Other optional Data Objects allowed in EMV within template ‘73’</td>
  </tr>
</table>




Table 8: - PSE Record Format


### 4.6.2	Proximity Payment System Environment (PPSE):
The list of applications supported by a contactless card and used during the selection process. For NEPALPAY, the PPSE list would include the Contactless (CTL) NEPALPAY applications (credit, debit, prepaid).

### 4.6.3	Offline Data Authentication(ODA):
A process whereby the card is validated at the point of transaction using RSA(Rivest–Shamir–Adleman) public key technology to protect against counterfeit or skimming. EMV includes three forms:

i)	Static Data Authentication (SDA)

ii)	Dynamic Data Authentication (DDA)

iii)	Combined DDA/AC Generation (CDA)
		
 ### 4.6.4	CVM Consecutive Transaction limit 1 (CVM-Cons limit 1): 
CTL NEPALPAY proprietary data element specifying the maximum number of Contactless transactions allowed before a particular CVM is required by the card. If the CVM-Counter is used and has exceeded the CVM-Cons limit 1, the ‘Consecutive CVM Transaction limit 1 exceeded’ bit (B3b6) of CVR is set. 

 ### 4.6.5	CVM Consecutive Transaction limit 2 (CVM-Cons limit 2):
CTL NEPALPAY proprietary data element specifying the maximum number of Contactless transactions allowed before a particular CVM is required by the card. If the CVM-Counter is used and has exceeded the CVM-Cons limit 2, the ‘Consecutive CVM Transaction limit 2 exceeded’ bit (B3b5) of CVR is set.
	
 ### 4.6.6	CVM Cumulative Transaction limit 1 (CVM-Cum limit 1):  

CTL NEPALPAY proprietary data element specifying the maximum total amount of Contactless transactions in the supported currencies allowed before a particular CVM is required by the card. If the CVM-Accumulator is used and has exceeded the CVM-Cum limit 1, the ‘Cumulative CVM Transaction Amount limit 1 exceeded’ bit (B3b4) of CVR is set. Note: the value of this limit shall be less than 999999999999. 


 ### 4.6.7	CVM Cumulative Transaction limit 2 (CVM-Cum limit 2):  

CTL NEPALPAY proprietary data element specifying the maximum total amount of Contactless transactions in the supported currencies allowed before a particular CVM is required by the card. If the CVM-Accumulator is used and has exceeded the CVM-Cum limit 2, the ‘Cumulative CVM Transaction Amount limit 2 exceeded’ bit (B3b3) of CVR is set. Note: the value of this limit shall be less than 999999999999. 

### 4.6.8	CVM Single Transaction Amount limit 1 (CVM-STA 1): 

CTL NEPALPAY proprietary data element specifying the single amount of the transaction in the reference currency allowed before a particular CVM is required by the card. If the transaction amount has exceeded this limit, the ‘CVM Single Transaction Amount limit 1 exceeded’ bit (B3b2) of CVR bit is set. Note: the value of this limit shall be less than 999999999999.


### 4.6.9	CVM Single Transaction Amount limit 2 (CVM-STA 2):

CTL NEPALPAY proprietary data element specifying the single amount of the transaction in the reference currency allowed before a particular CVM is required by the card. If the transaction amount has exceeded this limit, the ‘CVM Single Transaction Amount limit 2 exceeded’ bit (B3b1) of CVR bit is set. Note: the value of this limit shall be less than 999999999999.

 ### 4.6.10	Contactless Consecutive Transaction limit (CL-Cons limit): 
CTL NEPALPAY proprietary data element specifying the maximum number of Contactless transactions allowed before a transaction is forced to be processed with another interface (for a Dual-Interface implementation) or online and declined if the transaction cannot be completed online. If the CL-NCOT counter is used and has exceeded the CL-Cons limit, the ‘Consecutive Contactless Transaction limit exceeded’ bit (B5b8) of CVR is set.


 ### 4.6.11	Contactless Cumulative Transaction limit (CL-Cum limit): 
CTL NEPALPAY proprietary data element specifying the maximum total amount of Contactless transactions in the supported currencies allowed before a transaction is forced to be processed with another interface (for a Dual Interface implementation) or online and declined if the transaction cannot be completed online. If the CL-COA accumulator is used and has exceeded the CL-COA limit, the ‘Cumulative Contactless Transaction limit exceeded’ bit (B5b7) of CVR is set.


 ### 4.6.12	Cumulative Single Transaction Amount limit (CL-STA): 
CTL NEPALPAY proprietary data element specifying the single amount of the transaction in the reference currency allowed before a transaction is forced to be processed with another interface. If the transaction amount has exceeded this limit, the ‘Single Contactless Transaction Amount limit exceeded’ bit (B5b6) of CVR bit is set. Note: the value of this limit shall be less than 999999999999. 

 ### 4.6.13	Online PIN:
A method of PIN verification whereby the PIN entered by the cardholder into the Terminal PIN pad is enciphered and included in the online authorization request message sent to the Issuer.
	
 ### 4.6.14	Offline PIN:
A PIN value stored on the card that is validated at the point of transaction between the card and the Terminal. Offline PIN Verification is the process whereby a cardholder-entered PIN is passed to the card for comparison to a PIN value stored secretly on the card.

 ### 4.6.15	Track 1 Discretionary Data:
Discretionary part of track 1 according to [ISO/IEC 7813]. Contains data equivalent to Magnetic Stripe Track 1 discretionary data. Optionally contained in Terminal file records. See Table 4: Track 1 Encoding Format


 ### 4.6.16	Cryptogram Version Number (CVN):
The version of the algorithm that is included in the CL-ACO and used by the card to generate an Application Cryptogram (TC, ARQC, or AAC). CTL NEPALPAY supports differing Cryptogram Version Numbers (CVNs) depending on the chosen cryptographic key type (i.e. 3DES or AES), interface (i.e. contact or contactless), and data elements included in the generation of Application Cryptograms (i.e. depending on CL-ACO B2b7).


<table border="1">
  <tr>
    <th rowspan="2">Algorithm</th>
    <th colspan="2">For Contact:</th>
    <th colspan="3">For Contactless:</th>
  </tr>
  <tr>
    <th>ACO B2b3</th>
    <th>ACO B2b7</th>
    <th>CVN</th>
    <th>CL-ACO B2B7</th>
    <th>CVN</th>
  </tr>
  <tr>
    <td>3DES</td>
    <td>0</td>
    <td>0</td>
    <td>5</td>
    <td>0</td>
    <td>15</td>
  </tr>
  <tr>
  <td>3DES</td>
    <td>0</td>
    <td>1</td>
    <td>6</td>
    <td>1</td>
    <td>16</td>
  </tr>
  <tr>
  <td>AES</td>
    <td>0</td>
    <td>0</td>
    <td>7</td>
    <td>0</td>
    <td>17</td>
  </tr>
  <tr>
  <td>AES</td>
    <td>0</td>
    <td>1</td>
    <td>8</td>
    <td>1</td>
    <td>18</td>
  </tr>

  <tr>
  <td>3DES</td>
    <td>1</td>
    <td>0</td>
    <td>25</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
  <td>3DES</td>
    <td>1</td>
    <td>1</td>
    <td>26</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>AES</td>
    <td>1</td>
    <td>0</td>
    <td>27</td>
    <td></td>
    <td></td>
  </tr>
   <tr>
    <td>AES</td>
    <td>1</td>
    <td>1</td>
    <td>28</td>
    <td></td>
    <td></td>
  </tr>
</table>




Table 9: – CVN Value


 ### 4.6.17	Tearing Recovery (TR):
An optional Terminal capability to recover and resume processing in the event of a torn contactless transaction. Interaction between card and the reader can be interrupted if the card is removed prematurely from the RF field or when a protocol error occurs. Contactless NEPALPAY allows for recovery from this kind of error, commonly known as a “torn transaction”, by requesting the card be re-presented to the reader and by using the RESUME GET PROCESSING OPTIONS command to resume transaction processing, as shown in the following figure. Tearing Recovery may be used when supported by both the card and the Terminal.

 ### 4.6.18	Derivation Key Index (DKI):
It specifies the Issuer’s master key set used to derive the card’s ICC Master keys (used to generate the Application Cryptogram, or verify secure messaging). Up to 16 ICC Master Keys may be personalized, each key set having its own DKI value. The value of DKI is sent to the Issuer as part of the Issuer Application Data (IAD).

 ### 4.6.19	Security Limits (Data Content for DGI ‘4001’):
This DGI (Data Group Identifier) pertains to personalizing the security domain.


<table border="1">
  <tr>
    <th>Tag</th>
    <th>Data Element Length</th>
    <th>Byte</th>
    <th>Recommended Value</th>
  </tr>
  <tr>
    <td>-</td>
    <td>ATC Limit</td>
    <td>2</td>
    <td>FFFF</td>
  </tr>
  <tr>
    <td>-</td>
    <td>Encrypted PIN cryptography failure limit</td>
    <td>2</td>
    <td>FFFF</td>
  </tr>
  <tr>
    <td>-</td>
    <td>Failed MAC limit</td>
    <td>1</td>
    <td>FF</td>
  </tr>
  <tr>
    <td>-</td>
    <td>Lifetime MAC Limit</td>
    <td>3</td>
    <td>FFFFFF</td>
  </tr>
  <tr>
    <td>-</td>
    <td>Session MAC Limit</td>
    <td>1</td>
    <td>0F</td>
  </tr>
</table>




Table 10: - DGI ‘4001’ – Security limits

 ### 4.6.20	Application Transaction Counter Limits (ATCL): 
ATC Incremented during successful processing of a GET PROCESSING OPTIONS (GPO) command unless there is an early exit from this command. When the ATC reaches the ATC limit the application is disabled and returns an error response of ‘6985’ to all subsequent commands, except the SELECT command. This shall be shared with Contact NEPALPAY application for a Dual Interface implementation. 

 ### 4.6.21	Encrypted PIN cryptography failure limit (EPCFL):
EPCF Counts the number of unsuccessful offline encrypted PIN decryptions occurring in the application’s lifetime. When the EPCF counter reaches the “EPCF limit” the application is disabled and returns ‘6985’ on all subsequent commands, except the ‘Select’ command.

 ### 4.6.22	Failed Message Authentication Code limit(FMACL):
Indicates the allowed number of scripted command MACs which have failed verification. Used to protect SMI keys. When the “Failed MAC” counter reaches the “Failed MAC limit” the current command is aborted with a ‘6985’ error response, and no other scripted commands will be accepted in the current session. 

 ### 4.6.23	Lifetime Message Authentication Code Limit (LMACL):
It indicates the allowed total number of scripted command MAC verifications that may be performed over the lifetime of the application. When the “Lifetime Failed MAC” counter reaches the “Lifetime MAC limit” the application is disabled and returns ‘6985’ on all subsequent commands, except the ‘Select’ command.

 ### 4.6.24	Session Message Authentication Code Limit (SMACL):
It indicates the allowed total number of scripted command MACs verified during the current session. When the “Session MAC” counter reaches the “Session MAC limit” the current command is aborted with a ‘6985’ error response, and no other scripted commands will be accepted in the current session.

 ### 4.6.25	DF Name:
Identifies the name of the DF as described in [ISO/IEC 7816-4] and containing a FCI (File Control Information) mapped on to an ADF (Application Definition Files) or a DDF (Directory Definition File).

### 4.6.26	FCI (File Control Information) Proprietary Template:
Identifies the data object proprietary to this specification in the FCI template according to ISO/IEC 7816-4

 ### 4.6.27	SFI (Short File Identifier) of the Directory Elementary File:
SFI identifies the AEF referenced in commands related to a given ADF or DDF. The SFI is a binary value in the range 1 to 30, coded on the first 5 bits [MSB (Most Significant Byte)] of a byte. Actual value is thus 'left-shifted' by 3 bits.

### 4.6.28	Language Preference:
1-4 languages stored in order of preference, each represented by 2 alphabetical characters according to ISO 639-1.

### 4.6.29	FCI (File Control Information) Issuer Discretionary Data:
Issuer discretionary part of the FCI Proprietary Template. Chip cards that support data storage will include a Card Feature Version Number (tag ‘DF3A’) and Card Feature Descriptor (tag ‘DF3B’) in the FCI Issuer Discretionary Data (tag ‘BF0C’) of their application SELECT response messages. FCI is the information that is returned to the terminal in response to a SELECT command.

 ### 4.6.30	Directory Entry:
A data object that holds the mapping of a Container ID to a Data Container, and other information about the Data Container. It contains one or more data objects relevant to an application directory entry according to [ISO 7816-5]. It is an entry in a chip card’s Data Storage Directory that identifies an allocated Data Container’s Container ID and other attributes.

<table border="1">
  <tr>
    <th>Byte</th>
    <th colspan = '10'>Meaning</th>
  </tr>
  <tr>
    <td>1-4</td>
    <td colspan = '10'>The Data Container’s unique Container ID.</td>
  </tr>
  <tr>
    <td colspan = '9'>5</td>
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
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
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
          <td>x</td>
          <td>1</td>
          <td>Record number (1-24).</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>RFU</td>
        </tr>
  <tr>
    <td colspan = '9'>6</td></tr>
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
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>0</td>
          <td>0</td>
          <td>Unallocated</td>
        </tr>
        <tr>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>0</td>
          <td>1</td>
          <td>Issuer Container</td>
        </tr>
        <tr>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>1</td>
          <td>0</td>
          <td>Transient Container</td>
        </tr>
        <tr>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>1</td>
          <td>1</td>
          <td>Operator Container</td>
        </tr>
        <tr>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>-</td>
          <td>-</td>
          <td>RFU</td>
        </tr>
  <tr>
    <td>7-8</td>
    <td colspan = '9'>Write Counter – a counter incremented by the chip card each time the associated Data Container is updated. A container’s initial Write Counter value is loaded during container allocation, and is defined by:
      <ul>
        <li>The Issuer for Operator Containers and Issuer Containers, or</li>
        <li>The card for Transient Containers, and is set to 1 (specifically, it is set to zero during allocation but is immediately incremented by 1 because it has been updated).</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>9-10</td>
    <td colspan = '9'>Integrity Code – a value set by the card each time the associated Data Container is updated, where it is set to equal: ((leftmost 2 bytes of DSD_UN) OR ‘000F’). i.e., the Integrity Code equals the most significant three nibbles of DSD_UN and the least significant nibble. Note: When reading the Data Storage Directory, the least significant nibble of an Integrity Code may not always equal ‘F’. Other values are possible for dual interface cards, where Data Containers may be updated via the contactless interface equals ‘F’.</td>
  </tr>
</table>





Table 11:  Directory Entry Format



 ### 4.6.31	Application Definition File (ADF) Name:
A file that contains information specific to an application on the chip card. It Identifies the application (AID) as described in [ISO/IEC 7816-5]. The AID is made up of the Registered Application Provider Identifier (RID) and the Proprietary Identifier Extension (PIX).

 ### 4.6.32	Application Label:
Mnemonic associated with AID according to [ISO/IEC 7816-5]. Used in application selection. Application Label is mandatory in the File Control Information (FCI) of an Application Definition File (ADF) and mandatory in an ADF directory entry.

 ### 4.6.33	Application Priority Indicator (API):
It indicates the priority of a given application or group of applications in a directory. Issuers shall pay attention to the setting of bit 8 of the API. If the bit is set, the associated application is not eligible at terminals that do not support a terminal customer dialogue cardholder confirmation facility, such as vending machines and toll gates. A priority indicator value of 1 indicates the highest priority.



<table>
  <tr>
    <th colspan="9">Byte 1</th>
  </tr>
  <tr>
    <td>b8</td>
    <td>b7</td>
    <td>b6</td>
    <td>b5</td>
    <td>b4</td>
    <td>b3</td>
    <td>b2</td>
    <td>b1</td>
    <td>Meaning</td>
  </tr>
  <tr>
    <td>1</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>Application may not be selected without confirmation of cardholder</td>
  </tr>
  <tr>
    <td>-</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>No priority Assigned/Order in which application is to be listed or selected</td>
  </tr>
</table>




Table 12:   Application Priority Indicator (API) Encoding




### 4.6.34	Issuer Identification Number Extended:
It is an additional value of BIN that can’t be included in Tag 42.

 ### 4.6.35	Issuer Identifier Number (IIN):
The number that identifies the major industry and the card issuer forms the first part of the primary account number (PAN). It carries the same meaning as a bank identification number (BIN). 

 ### 4.6.36	Kernel Identifier:
The term Kernel ID is used to identify the kernel(s) kept in the Reader, and the term Kernel Identifier is used to identify the kernel(s) indicated by the card.

 ### 4.6.37	Extended Selection:
An option in which Entry Point appends the value indicated by the Extended Selection data element to the ADF name in the SELECT command.

### 4.6.38	Application Selection Registered Proprietary Data:
Data element that is conveyed to the terminal to enable market specific proprietary terminal functionality that is based on application proprietary data. 
The value field of the Application Selection Registered Proprietary Data object follows the following format: ID1, L1, V1, ID2, L2, V2, … 
Where:  

•	ID is a two-byte Proprietary Data Identifier. Proprietary Data Identifiers are registered by EMVCo. 

•	L is the length of the value field coded in 1 byte (0 to 255). 

•	V is the value field. Its content is proprietary and format is out of scope of D-PAS. 
The Application Selection Registered Proprietary Data is a primitive data object and its value field is not BER-TLV coded. 

In particular: 

•	IDs have no structure (they are not tags according to BER-TLV coding). 

•	The lengths L are always 1 byte. 

•	IDs can appear in the Application Selection Registered Proprietary Data only if: 

•	they have been registered by EMVCo; 

•	and their usage by the Terminal is according to their intended usage, as agreed by EMVCo during registration.

 ### 4.6.39	File Control Information:
It contains application information and is returned as response data in a SELECT command. This is a constructed data object.


<table border="1">
  <tr>
    <th>Tag</th>
    <th colspan = '4'>Value</th>
  </tr>
  <tr>
    <td rowspan='18'>6F</td>
    <td colspan = '4'>FCI Template</td>
  </tr>
  <tr>
    <td>84</td>
    <td colspan = '3' >DF Name</td>
  </tr>
  <tr>
    <td rowspan='16'>A5</td>
    <td colspan = '3'>FCI Proprietary Template</td>
  </tr>
  <tr>
    <td>50</td>
    <td colspan = '2'>Application Label</td>
  </tr>
  <tr>
    <td>87</td>
    <td colspan = '2'>Application Priority Indicator</td>
  </tr>
  <tr>
    <td>5F2D</td>
    <td colspan = '2'>Language Preference</td>
  </tr>
  <tr>
    <td>9F11</td>
    <td colspan = '2'>Issuer Code Table Index</td>
  </tr>
  <tr>
    <td>9F12</td>
    <td colspan = '2'>Application Preferred Name</td>
  </tr>
  <tr>
    <td>9F38</td>
    <td colspan = '2'>PDOL</td>
  </tr>
  <tr>
    <td rowspan='9'>BF0C</td>
    <td colpsan = '3'>FCI Issuer Discretionary Data</td>
  </tr>
  <tr>
    <td>42</td>
    <td>Issuer Identifier Number</td>
  </tr>
  <tr>
    <td>5F28</td>
    <td>Issuer Country Code</td>
  </tr>
  <tr>
    <td>9F4D</td>
    <td>Log Entry</td>
  </tr>
  <tr>
    <td>DF62</td>
    <td>Application Selection Tag</td>
  </tr>
  <tr>
    <td>DF3A</td>
    <td>Card Feature Version Number</td>
  </tr>
  <tr>
    <td>DF3B</td>
    <td>Card Feature Descriptor</td>
  </tr>
  <tr>
    <td>9F6E</td>
    <td>Form Factor Indicator</td>
  </tr>
  <tr>
    <td>9F0A</td>
    <td>Application Selection Registered Proprietary Data</td>
  </tr>
  <tr>
    <td rowsapn = '2' colspan='5'>C1 = Mandatory if Extended Logging is enabled</td>
  </tr>
  <tr>
    <td colspan='5'>C2 = Mandatory if Data Storage and / or Extended Logging are enabled.</td>
  </tr>
</table>


Table 13:  The FCI structure



 ### 4.6.40	Processing Data Objects List (PDOL):
It contains a list of terminal resident data objects (tags and lengths) needed by the card application in processing the GET PROCESSING OPTIONS command.


<table border="1">
  <tr>
    <th>Tag</th>
    <th>Data</th>
    <th>Length</th>
  </tr>
  <tr>
    <td>9F66</td>
    <td>Terminal Transaction Qualifiers (TTQ)</td>
    <td>4</td>
  </tr>
  <tr>
    <td>9F02</td>
    <td>Amount, Authorized</td>
    <td>6</td>
  </tr>
  <tr>
    <td>9F03</td>
    <td>Amount, Other</td>
    <td>6</td>
  </tr>
  <tr>
    <td>9F1A</td>
    <td>Terminal Country Code</td>
    <td>2</td>
  </tr>
  <tr>
    <td>5F2A</td>
    <td>Transaction Currency Code</td>
    <td>2</td>
  </tr>
  <tr>
    <td>9A</td>
    <td>Transaction Date</td>
    <td>3</td>
  </tr>
  <tr>
    <td>9C</td>
    <td>Transaction Type</td>
    <td>1</td>
  </tr>
  <tr>
    <td>9F37</td>
    <td>Unpredictable Number</td>
    <td>4</td>
  </tr>
</table>




Table 14:  Processing Data Objects List


### 4.6.41	Issuer Code Table Index:
Indicates the code table according to ISO/IEC 8859-1 for displaying the Application Preferred Name.

 ### 4.6.42	Application Preferred Name:
It is preferred mnemonic associated with the AID.

 ### 4.6.43	Application Selection tag:
It contains Terminal provided data to be forwarded to the Card with the GENERATE AC command, as per DSDOL formatting.


### 4.6.44	Transaction Log Entry:

If transaction Logging is supported, devices that read the Transaction Log use the Log Entry data element to determine the location (SFI) and the maximum number of Transaction Log records A terminal obtains this value from the SELECT response in the FCI. This data element is also personalized outside the SELECT response, so that the application knows where to log transactions and the maximum number of records supported in the Transaction Log file. Note: [EMV] specifies that the transaction log file should be in an SFI between 11 and 30.


<table border="1">
  <tr>
    <th colspan="11">Byte 1</th>
  </tr>
  <tr>
    <td>b8</td>
    <td >b7</td>
    <td >b6</td>
    <td >b5</td>
    <td>b4</td>
    <td >b3</td>
    <td >b2</td>
    <td >b1</td>
    <td>Meaning</td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td >-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td >-</td>
    <td >-</td>
    <td >-</td>
    <td >X</td>
    <td >X</td>
    <td >X</td>
    <td >X</td>
    <td >X</td>
    <td>SFI containing the cyclic Transaction Log file</td>
  </tr>
  <tr>
    <th colspan="10">Byte 2</th>
  </tr>
  <tr>
    <td >b8</td>
    <td >b7</td>
    <td >b6</td>
    <td >b5</td>
    <td >b4</td>
    <td >b3</td>
    <td >b2</td>
    <td >b1</td>
    <td >Meaning</td>
  </tr>
  <tr>
    <td >X</td>
    <td >X</td>
    <td >X</td>
    <td >X</td>
    <td >X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td >Maximum number of records in the Transaction Log file</td>
  </tr>
</table>




Table 15:  Transaction Log Entry Data Element format


Example:  A Log Entry Data Element (Tag 9F4D) with the following content ‘0D0A’ indicates that the transaction log file is located in SFI 13 and contains a maximum of 10 records.


### 4.6.45	Card Feature Version Number:
The Card Feature Version Number shall be personalized if Data Storage or Extended Logging is required. The current Card Feature Version Number is ‘02’.

 ### 4.6.46	Card Feature Descriptor:
The card feature description shall be personalized if data storage or extended logging are required. Where the Multiple Application Mechanism is implemented, bytes 2 and 3 of the Card Feature Descriptor of the Subsidiary Data Storage Application shall be personalized with the same values as in the Principal Data Storage Application.


<table>
  <tr>
  <th>Byte</th>
  <th>Meaning</th>
  </tr>
  <tr>
  <td rowspan = '6'>1</td>
  <td>Feature configuration options, encoded as:</td>
  </tr>
  <tr>
  <td>Bits 8-6: 000 (RFU)</td>
  </tr>
  <tr>
  <td>Bits 5-4: 00 (Reserved for transit use).</td>
  </tr>
  <tr>
  <td>Bit 3: 0 = Contactless tearing recovery is not supported*, 1 = Contactless tearing recovery is supported*.</td>
  </tr>
  <tr>
  <td>Bit 2: 0 = Extended Logging is not supported, 1 = Extended Logging is supported.</td>
  </tr>
  <tr>
  <td>Bit 1: 0 = Data Storage not supported, 1 = Data Storage supported.</td>
  </tr>
  <tr>
  <td rowspan = '3'>2</td>
  <td>Short File Identifier (SFI) of the Data Store. Format b, encoded as:</td>
  </tr>
  <tr>
  <td>	Bits 8-4: SFI (set to 00000b if the card does not support Data Storage)</td>
  </tr>
  <tr>
  <td>Bits 3-1: 000 (RFU)</td>
  </tr>
  <tr>
  <td>3</td>
  <td>The number of Data Containers in the Data Store. Format b. Set to ’00’ if the card does not support Data Storage.</td>
  </tr>
  <tr>
  <td>4+</td>
   <td>Card ID – the card’s globally unique identifier. Format b. Shall match the Card ID (tag ‘DF3E’) personalized in one of the signed AFL records.</td>
  </tr>
  <tr>
  <td colspan = '2'>* Relevant for dual interface cards</td>
  </tr>
  
</table>

Table 16:  Card Feature Descriptor Format


 ### 4.6.47	Form Factor Identifier:
Element indicates the form factor of the device used. The value of the data element is proprietary and defined by ***NEPALPAY***.

<table>

<tr>
<td>Byte/Bit</td>
<td>Value</td> 
<td>Attribute</td> 
<td>Comments</td>   
</tr>
<tr>
<td>1/8-5</td>
<td>01</td>
<td>FFI Version</td>
<td></td>
</tr>
<tr>
<td rowspan = '4'>1/4-3</td>
<td>00 – Regular EMV</td>
<td rowspan = '4'>Payment Platform</td>
<td>Regular chip based Transactions e.g.: chip card, stickers, key fob, etc.</td>
</tr>
<tr>
<td>01 – SE</td>
<td>Secure Element based solution e.g. Apple Pay</td>

</tr>
<tr>
<td>10 – HCE</td>
<td>Host Card Emulation based solution e.g. Android Pay</td>
</tr>
<tr>
<td>11 – RFU</td>
<td></td>
</tr>
<tr>
<td>1/2-1</td>
<td>00</td>
<td>RFU</td>
<td></td>
</tr>
<tr>
<td  rowspan = '12'>2/8-1</td>
<td>00 – Plastic Contact Only Card</td>
<td rowspan = '12'>Device Type</td>
<td rowspan = '12'></td>
</tr>
<tr>
<td>01 – Plastic Dual Interface Card</td>
</tr>
<tr>
<td>02 – Plastic Contactless Only Card</td>
</tr>
<tr>
<td>03 – Plastic Contactless Sticker</td>
</tr>
<tr>
<td>04 – Phone</td>
</tr>
<tr>
<td>05 – Watch</td>
</tr>
<tr>
<td>06 – Glasses/VR Headset</td>
</tr>
<tr>
<td>07 – Bracelet</td>
</tr>
<tr>
<td>08 – Key fob</td>
</tr>
<tr>
<td>09 – Smart ring</td>
</tr>
<tr>
<td>0A-EF – RFU</td>
</tr>
<tr>
<td>FF – Other Device type</td>
</tr>
<tr>
    <td rowspan='9'>3/8-3</td>
    <td>00 – Java Plastic Card</td>
    <td rowspan='9'>OS Family</td>
    <td  rowspan='9'></td>
  </tr>
  <tr>
    <td>01 – Multos Plastic Card</td>
  </tr>
  <tr>
    <td>02 – Apple iOS</td>
  </tr>
  <tr>
    <td>03 – Apple Watch OS</td>
  </tr>
  <tr>
    <td>04 – Google Android</td>
  </tr>
  <tr>
    <td>05 – Samsung Tizen</td>
  </tr>
  <tr>
    <td>06 – Microsoft Windows</td>
  </tr>
  <tr>
    <td>07-3E – RFU</td>
  </tr>
  <tr>
    <td>3F – Other OS Family</td>
  </tr>
  <tr>
    <td>3/2-1</td>
    <td>00</td>
    <td>RFU</td>
  </tr>
  <tr>
    <td rowspan='2'>4/8</td>
    <td>1 – Contact Supported</td>
    <td rowspan='2'>Interfaces Supported</td>
    <td rowspan = '2'> </td>
  </tr>
  <tr>
    <td>0 – Contact Not Supported</td>
  </tr>
  <tr>
    <td rowspan='2'>4/7</td>
    <td>1 – Contactless Supported</td>
    <td rowspan = '2'> </td>
    <td rowspan = '2'> </td>
  </tr>
  <tr>
    <td>0 – Contactless Not Supported</td>
  </tr>
  <tr>
    <td rowspan='2'>4/6</td>
    <td>1 – In-App Supported</td>
    <td rowspan = '2'> </td>
    <td rowspan = '2'> </td>
  </tr>
  <tr>
    <td>0 – In-App Not Supported</td>
  </tr>
  <tr>
    <td>4/5-1</td>
    <td>00000 – RFU</td>
    <td rowspan = '2'> </td>
    <td rowspan = '2'> </td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td rowspan='2'>5/8</td>
    <td>1 – CDCVM based on Passcode Supported</td>
    <td rowspan='2'>Security Features</td>
    <td rowspan = '2'> </td>
  </tr>
  <tr>
    <td>0 – CDCVM based on Passcode Not Supported</td>
  </tr>
 <tr>
    <td rowspan='4'>5/7</td>
    <td>1 – CDCVM based on Fingerprint/Palmprint Matching Supported</td>
    <td rowspan='4'></td>
    <td rowspan='4'></td>
  </tr>
  <tr>
    <td>0 – CDCVM based on Fingerprint/Palmprint Matching Not Supported</td>
  </tr>
  <tr>
    <td>1 – CDCVM based on Face Recognition Supported</td>
  </tr>
  <tr>
    <td>0 – CDCVM based on Face Recognition Not Supported</td>
  </tr>
  <tr>
    <td rowspan='2'>5/5</td>
    <td>1 – CDCVM based on Pulse/Heartbeat Recognition Supported</td>
    <td rowspan='2'></td>
    <td rowspan='3'></td>
  </tr>
  <tr>
    <td>0 – CDCVM based on Pulse/Heartbeat Recognition Not Supported</td>
  </tr>
  <tr>
    <td rowspan='2'>5/4</td>
    <td>0000 – RFU</td>
    <td></td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td rowspan= '2'>6/8</td>
    <td>1 – Non Financial Infrastructure Communication Supported</td>
    <td rowspan='8'>Communication Features</td>
    <td rowspan = '2'>Device has ability to communicate outside of the Financial Infrastructure (internet, Bluetooth, telephony etc.)

</td>
  </tr>
  <tr>
    <td>0 – Non Financial Infrastructure Communication Not Supported</td>
  </tr>
  <tr>
    <td rowspan='2'>6/7</td>
    <td>1 – Accepts Input</td>
    <td rowspan='2'>Device has ability to accept input from cardholder (keyboard, voice, etc.)</td>
  </tr>
  <tr>
    <td>0 – Does not Accept Input</td>
  </tr>
  <tr>
    <td rowspan='2'>6/6</td>
    <td>1 – On Device OTP Supported</td>
    <td rowspan='2'>Device can accept/generate a one-time password (e.g.: RSA token)</td>
  </tr>
  <tr>
    <td>0 – On Device OTP Not Supported</td>
  </tr>
  <tr>
    <td rowspan='2'>6/5</td>
    <td>1 – 2-Way Messaging Supported</td>
    <td rowspan='2'>Device can send and receive text messages (special variety of non- financial infrastructure communication)</td>
  </tr>
  <tr>
    <td>0 – 2-Way Messaging Not Supported</td>
  </tr>
  <tr>
    <td rowspan='2'>6/4-1</td>
    <td>0000 – RFU</td>
    <td></td>
  </tr>
  <tr>
   
  </tr>
  <tr>
    <td rowspan='2'>7/8-1</td>
    <td>00 – RFU</td>
    <td></td>
  </tr>
  <tr>
    
  </tr>
  <tr>
    <td rowspan='2'>8/8-1</td>
    <td>00 – RFU</td>
   <td></td>
  </tr>
  <tr>
  
  </tr>










</table>


Table 17:  Form Factor Indicator


### 4.6.48	Application File Locator (AFL):
The AFL is a list identifying the files and records to be used in the processing of a transaction. The terminal shall only read the records named in the AFL.

<table border="1">
  <tr>
    <th colspan = '2'>B1</th>
    <th>B2</th>
    <th>B3</th>
    <th>B4</th>
  </tr>
  <tr>
    <td rowspan="2">SFI XXXXX</td>
    <td>000</td>
    <td>First Record no.</td>
    <td>Last Record no.</td>
    <td>Last Authenticated Record no.</td>
  </tr>
</table>


Table 18:  Structure of an Application File Locator (AFL) entry


 <table border="1">
  <tr>
    <th>Byte</th>
    <th>Acceptable Range</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>B1</td>
    <td>NA</td>
    <td>The first five MSB contain the SFI number. The three LSB bits shall always be 0.</td>
  </tr>
  <tr>
    <td>B2</td>
    <td>Never 0</td>
    <td>The first/only record number read from the file.</td>
  </tr>
  <tr>
    <td>B3</td>
    <td>>= B2</td>
    <td>The last record number to be read from the file. If (B3 > B2) read records B2 to B3 from the file. If (B3 == B2) read record B2 from the file.</td>
  </tr>
  <tr>
    <td>B4</td>
    <td>0 to (B3-B2) + 1</td>
    <td>Number of records involved in Offline Data Authentication. Starting from B2.</td>
  </tr>
</table>


Table 19:  AFL Description



 ### 4.6.49	Track 2 Equivalent Data:
It contains data equivalent to Track 2 Magnetic Stripe data. Contained in Terminal file records. See Table 5: Track 2 Encoding Format

 ### 4.6.50	Application Interchange Profile (AIP):
The AIP indicates the capabilities of the card to support specific functions in the application.

<table border="1">
  <tr>
    <th>Byte</th>
    <th>Bit</th>
    <th>Definition</th>
    <th>Contact Value</th>
    <th>Contactless EMV</th>
  </tr>
  <tr>
    <td rowspan="8">1</td>
    <td>8</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Static Data Authentication (SDA) supported</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Dynamic Data Authentication (DDA) supported</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Cardholder verification is supported</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Terminal risk management is to be performed</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Issuer authentication is supported</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Combined Data Authentication (CDA) supported</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
  <td></td>
   <td colspan = '2'></td>
     <td>3D</td>
      <td>19</td>
  </tr>
  <tr>
    <td rowspan="8">2</td>
    <td>8</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
  <td></td>
  <td colspan = '2'></td>
  <td>00</td>
  <td>00</td>
  </tr>
</table>

Table 20:  Application Interchange Profile (AIP)


### 4.6.51	Application Configuration Options C1/C0:



<table border="1">
  <tr>
    <th>Byte</th>
    <th>Bit</th>
    <th>Definition Contact - Tag C1</th>
    <th>Val</th>
    <th>Definition Contactless - Tag C0</th>
    <th>Val</th>
  </tr>
  <tr>
    <td rowspan="9">1</td>
    <td>8</td>
    <td>Offline enciphered PIN verification supported (RFU for SDA-only application)</td>
    <td>0</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Separate Key pair used for Offline enciphered PIN verification (RFU for SDA-only application)</td>
    <td>0</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Skip CAC Default check on CAT3 Terminals</td>
    <td>0</td>
    <td>PTC checking is supported (dual interface implementation only).</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Authorization response with no Issuer authentication data accepted</td>
    <td>0</td>
    <td>Confirmation Code supported only if CDCVM supported</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Reset Offline counters during Partial Chip Implementation Transaction</td>
    <td>0</td>
    <td>Prepaid Product</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Transaction logging is supported: Log approved Transactions</td>
    <td>0</td>
    <td>Wearable device</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Transaction logging is supported: Log online requested Transactions</td>
    <td>0</td>
    <td>Transaction logging is supported: log all Transactions</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Transaction logging is supported: Log declined offline and online Transactions</td>
    <td>1</td>
    <td>Domestic Transaction based on Country Code (otherwise it is based on Currency Code)</td>
    <td>1</td>
  </tr>
  <tr>
  <td colspan = '2'></td>
  <td>01</td>
  <td></td>
  <td>03</td>
  </tr>
<tr>
    <td rowspan="9">2</td>
    <td>8</td>
    <td>Offline plaintext PIN verification supported</td>
    <td>0</td>
    <td>AFL inclusion for online Transaction</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Data input for ARQC (0=include IAD, 1=include only CVR)</td>
    <td>0</td>
    <td>Data input for ARQC (0 = Include IAD, 1 = Include only CVR)</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Use of Issuer Discretionary Data (IDD)/IADOL in Issuer Application Data</td>
    <td>0</td>
    <td>Use of Issuer Discretionary Data (IDD)/IADOL in Issuer Application Data</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Enable Issuer Defined Data Tags (IDDT)</td>
    <td>0</td>
    <td>Enable Issuer Defined Data Tags (IDDT)</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Activate / Enable all predefined PDOL checks</td>
    <td>0</td>
    <td>Activate /enable all predefined PDOL checks</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>CVR input for ARQC and IAD (0 = Use first six CVR bytes, 1 = Use all seven CVR bytes)</td>
    <td>0</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>READ RECORD, and GET DATA only after GET PROCESSING OPTIONS (GPO)</td>
    <td>0</td>
    <td>GET DATA only after GET PROCESSING OPTIONS (GPO)</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Allow retrieval of values and limits of counters, as well as ‘Offline balance’.</td>
    <td>0</td>
    <td>Separate Key pair used for CDA computation over contactless interface</td>
    <td>0</td>

  </tr>
<tr>
<td colspan = '2'></td>
<td>00</td>
<td></td>
<td>00</td>
</tr>

<tr>
    <td rowspan="9">3</td>
    <td>8</td>
    <td>RFU</td>
    <td>0</td>
    <td>Offline Data Authentication supported for online transactions</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>RFU</td>
    <td>0</td>
    <td>CDCVM Allowed for Cash Advance</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>RFU</td>
    <td>0</td>
    <td>Commit after READ RECORD</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>CDCVM Reader requires pre-entry only (as it is powered by the card)</td>
    <td>0</td>
    <td>Card Only: CDCVM Reader requires pre-entry only (as it is powered by the card)</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Card has a display</td>
    <td>0</td>
    <td>Card Only: Card has a display</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Confirmation Code supported (only if CDCVM supported)</td>
    <td>0</td>
    <td>Mobile Only: Passcode Verification required for non-matching currency</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>RFU</td>
    <td>0</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>RFU</td>
    <td>0</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
<td colspan = '2'></td>
<td>00</td>
<td></td>
<td>00</td>
</tr>



</table>





Table 21:  Application Configuration Options (ACO)


 ### 4.6.52	Card Action Codes (CACs): 
NEPALPAY application proprietary data elements indicating Issuer-specified action for the card to take for certain exception conditions. Each profile contains Card Action Codes for Denial, Default, and Online. Each CAC is compared to the Card Verification Results to take transaction decisions. CAC bytes 1, 2 and 3 match CVR bytes 4, 5 and 7.


<table border="1">
  <tr>
    <th>Byte</th>
    <th>Bit</th>
    <th>Definition</th>
    <th>Denial</th>
    <th>Online</th>
    <th>Default</th>
  </tr>
  <tr>
    <td rowspan="9">1</td>
    <td>8</td>
    <td>Unable to go on-line during previous Transaction</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Issuer Authentication not performed during previous online Transaction.</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Issuer Authentication failed during previous Transaction</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Script received on previous transaction</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Script failed on previous transaction</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>PTH forced on-line ('Go online next Transaction')</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>PDOL forced on-line (during GPO)</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>PDOL forced decline (during GPO)</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan = '2'></td>
    <td>00</td>
    <td>06</td>
    <td>06</td>
  </tr>
  <tr>
    <td rowspan="9">2</td>
    <td>8</td>
    <td>Invalid PDOL check</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Offline PIN verification failed</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>6</td>
    <td>PIN Try Limit Exceeded</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Lower Consecutive Offline Transaction limit exceeded (LCOL)</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Upper Consecutive Offline Transaction limit exceeded (UCOL)</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Lower Cumulative Offline Transaction Amount limit exceeded (LCOA)</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Upper Cumulative Offline Transaction Amount limit exceeded (UCOA)</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Single Transaction Amount limit exceeded (STA)</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan="2"></td>
    <td>00</td>
    <td>FB</td>
    <td>50</td>
  </tr>
  <tr>
    <td rowspan="9">3</td>
    <td>8</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Data Storage Failed limit exceeded (only if data storage supported)</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Data Storage Directory retrieved (only if data storage supported)</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Neither Offline PIN verification nor CDCVM performed</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CDCVM performed (only if CDCVM supported)</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>CDCVM performed and failed (only if CDCVM supported)</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan="2"></td>
    <td>00</td>
    <td>00</td>
    <td>00</td>
  </tr>
</table>



Table 22:  Card Action Code (Contact - CAC) - Tag C5, C6, C7


 ### 4.6.52.1	CAC – Denial: 
It is used by the Issuer to set the situations when a transaction is always declined at the 1st GENERATE AC.

 ### 4.6.52.2	CAC - Default:
It is used by the Issuer to set the situations when a transaction is declined if the terminal is not online-capable or if connection to the Issuer is not possible.

 ### 4.6.52.3	CAC – Online:
It is used by the Issuer to set the situations when a transaction goes online if the terminal is online-capable.

 ### 4.6.53	CRM Country Code:
Internal card data element, used in Card Risk Management to identify International / Domestic transactions. Equivalent to EMV element ‘5F28’, which is located in Terminal file records.

 ### 4.6.54	CRM Currency Code:
Internal card data element, used in Card Risk Management to identify transaction currency, and apply currency conversion parameters. Equivalent to EMV element ‘9F42’, which is located in Terminal file records.

 ### 4.6.55	Currency Conversion Code (CCC) 1,2:
The Currency Conversion Code is used to convert transactions in a recognized currency code into the primary currency code. The application increments COA with the converted amount. An Issuer Script may be used to modify this data element

<table border="1">
  <tr>
    <th>Byte</th>
    <th>Data</th>
    <th>Length</th>
  </tr>
  <tr>
    <td>1-2</td>
    <td>Secondary Currency Code (according to [ISO 4217])</td>
    <td>2</td>
  </tr>
  <tr>
    <td>3-4</td>
    <td>Conversion rate: Decimal BCD coding of the multiplication factor used to convert the Secondary Application Currency Code to the card’s Primary Application Currency Code</td>
    <td>2</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Conversion exponent: A signed number used to indicate the power of 10 used to modify the Conversion Rate with b1-b7 indicating the value of the exponent and b8 indicating the sign. If(b8 = 1b) sign is negative Approximate Value = Transaction Amount * Conversion Rate)/10 Conversion exponent(b7 to b1) If(b8 = 0b) sign is positive Approximate Value = Transaction Amount * Conversion Rate *10 Conversion exponent(b7 to b1) Note: Approximate Value shall never be larger than 999999999999</td>
    <td>1</td>
  </tr>
</table>



Table 23:  Currency Conversion Code Content


### 4.6.56	Log Format:
It identifies the content of records (tag and length) that are logged by the card application. This value may be obtained from the application using the GET DATA command. The Log Format is coded like a Data Objects List (DOL).



<table border="1">
  <tr>
    <th>Tag</th>
    <th>Data</th>
    <th>Length</th>
  </tr>
  <tr>
    <td>9F02</td>
    <td>Amount, Authorized</td>
    <td>6</td>
  </tr>
  <tr>
    <td>5F2A</td>
    <td>Transaction Currency Code</td>
    <td>2</td>
  </tr>
  <tr>
    <td>9A</td>
    <td>Transaction Date</td>
    <td>3</td>
  </tr>
  <tr>
    <td>9F36</td>
    <td>Application Transaction Counter (ATC)</td>
    <td>2</td>
  </tr>
  <tr>
    <td>9F34</td>
    <td>CVM Results</td>
    <td>3</td>
  </tr>
  <tr>
    <td>9F52</td>
    <td>Contact CVR</td>
    <td>7</td>
  </tr>
  <tr>
    <td>9F1A</td>
    <td>Terminal Country Code</td>
    <td>2</td>
  </tr>
  <tr>
    <td>95</td>
    <td>TVR</td>
    <td>5</td>
  </tr>
  <tr>
    <td>9C</td>
    <td>Transaction Type</td>
    <td>1</td>
  </tr>
  <tr>
    <td>8A</td>
    <td>Authorization Response Code</td>
    <td>2</td>
  </tr>
  <tr>
    <td>9F37</td>
    <td>Unpredictable Number</td>
    <td>4</td>
  </tr>
  <tr>
    <td>9F03</td>
    <td>Amount, Other</td>
    <td>6</td>
  </tr>
  <tr>
    <td>9F53</td>
    <td>CL CVR</td>
    <td>8</td>
  </tr>
  <tr>
    <td>9F66</td>
    <td>Terminal Transaction Qualifiers (TTQ)</td>
    <td>4</td>
  </tr>
  <tr>
    <td>9F71</td>
    <td>Card Processing Requirement (CPR)</td>
    <td>2</td>
  </tr>
</table>




Table 24: Log Format- Dual Interface




 ### 4.6.57	Extended Logging Data:
It is used to include optional Merchant data in the application’s transaction log. Extended Logging is enabled when the Extended Logging Data tag is personalized in the Transaction Log Format. If enabled, the Card Feature Version Number and Card Feature Descriptor shall also be present, and the Card Feature Descriptor shall be personalized with field B1b2 = 1.


 ### 4.6.58	Card Processing Requirement (CPR):
It indicates the card requirements necessary to process the transaction to the reader.


<table border="1">
  <tr>
    <th>Byte</th>
    <th>Bit</th>
    <th>Definition</th>
    <th>Value</th>
  </tr>
  <tr>
    <td rowspan="9">1</td>
    <td>8</td>
    <td>Online PIN required</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Signature required</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>PID Limit reached - Loyalty Transaction approved</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Consumer Device CVM performed</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
  <td colspan = '2'></td>
  <td>00</td>
  </tr>

  <tr>
    <td rowspan="9">2</td>
    <td>8</td>
    <td>Switch to other interface if unable to process online</td>
    <td>1</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Process online if CDA failed</td>
    <td>1</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Decline/switch other interface if CDA failed</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Issuer update processing supported</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Process online if Card expired</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Decline if Card expired</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CVM fallback to signature allowed</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>CVM fallback to No CVM allowed</td>
    <td>1</td>
  </tr>
  <tr>
    <td colspan="2"></td>
    <td>CB</td>
  </tr>
</table>



Table 25:  Card Processing Requirement (CL-CPR)


 ### 4.6.59	CRM - Card Action Code:
It indicates Issuer-specified actions for the card to take for certain exception conditions. CRM-CACs are used during Card Risk Analysis (CRA). Byte 1 is compared to Byte 2 of the CL-CVR and Bytes 2-3 are compared to Bytes 4 and 5 of the CL-CVR.



<table>
  <tr>
    <th>Byte</th>
    <th>Bit</th>
    <th>Definition</th>
    <th>Other Interface</th>
    <th>Denial</th>
    <th>Online</th>
    <th>Default</th>
  </tr>
  <tr>
    <td rowspan='9'>1</td>
    <td>8</td>
    <td>Online cryptogram (ARQC) required.</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>

<tr>
    <td>7</td>
    <td>Transaction Type required to be processed online with online PIN CVM (e.g., purchase with cash-back, prepaid top-up, etc.)</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Transaction type required to be processed offline without any CVM.</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Domestic Transaction (based on Contactless-ACO setting).</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>4</td>
    <td>International Transaction</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>PIN try limit exceeded (dual-Interface implementation only)</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CDCVM not performed (only if CDCVM supported)</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>CDCVM failed (only if CDCVM supported)</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan="2"></td>
    <td>04</td>
    <td>00</td>
    <td>DC</td>
    <td>DC</td>
  </tr>
<tr>
  <td rowspan='9'>2</td>
    <td>8</td>
    <td>CDA failed during previous contactless Transaction</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Last contactless Transaction not completed</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>“Go on-line next Transaction” was set by contact or contactless application</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Issuer Authentication failed during previous contact or contactless Transaction</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Script failed on previous contact or contactless Transaction</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Invalid PDOL check</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>PDOL forced online (during GPO)</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>PDOL forced decline (during GPO)</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan="2"></td>
    <td>08</td>
    <td>00</td>
    <td>FE</td>
    <td>BE</td>
    </tr>
    <tr>
    <td rowspan="9">3</td>
    <td>8</td>
    <td>CL-Consecutive Transaction Limit exceeded</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>7</td>
    <td>CL- Cum exceeded</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Single Contactless Transaction Amount limit exceeded</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>5</td>
    <td>LCOL exceeded</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>UCOL exceeded</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>LCOA exceeded</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>UCOA exceeded</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Single Transaction Amount limit exceeded</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td colspan="2"></td>
    <td>00</td>
    <td>00</td>
    <td>FF</td>
    <td>EB</td>
  </tr>
</table>




Table 26:  CRM - Card Action Code (CL-CRM CAC) - Tag DF30, DF31, DF32, DF33





 ### 4.6.59.1	CRM - Card Action Code - Switch Interface:
It is used by the Issuer to specify when a transaction is terminated to use another interface.

 ### 4.6.59.2	CRM - Card Action Code - Denial:
It is used by the Issuer to specify when a transaction is declined.

 ### 4.6.59.3	CRM - Card Action Code - Online:
It is used by the Issuer to specify when a transaction goes online.

 ### 4.6.59.4	CRM - Card Action Code - Default:
It is used by the Issuer to specify when a transaction shall be declined at an offline-only reader.

 ### 4.6.60	CVM - Card Action Code:
It indicates Issuer-specified CVMs to verify the cardholder. CVM-CACs are used during Card Risk Analysis (CRA). Byte 1 is compared to Byte 2 of the CL-CVR and Byte2 is compared to Byte 3 of the CL-CVR.



<table>
  <tr>
    <th>Byte</th>
    <th>Bit</th>
    <th>Definition</th>
    <th>Online PIN Value</th>
    <th>Signature Value</th>
  </tr>
  <tr>
    <td rowspan="9">1</td>
    <td>8</td>
    <td>Online cryptogram (ARQC) required.</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Transaction Type required to be processed online with online PIN CVM (e.g., purchase with cash-back, prepaid top-up, etc.)</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Transaction type required to be processed offline without any CVM.</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Domestic Transaction (based on Contactless-ACO setting).</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>4</td>
    <td>International Transaction.</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>PIN try limit exceeded (dual-Interface implementation only)</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CDCVM performed (only if CDCVM supported)</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>CDCVM performed and failed (only if CDCVM supported)</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
  <td colspan = '2'></td>
  <td>DC</td>
   <td>9C</td>
  </tr>
  <tr>
    <td rowspan="9">2</td>
    <td>8</td>
    <td>CVM Required</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Mobile Only: CDCVM local validation performed</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Consecutive CVM Transaction Limit 1 (CVM-Cons 1) exceeded</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Consecutive CVM Transaction Limit 2 (CVM-Cons 2) exceeded</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Cumulative CVM Transaction Amount Limit 1 (CVM-Cum 1) exceeded</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Cumulative CVM Transaction Amount Limit 2 (CVM-Cum 2) exceeded</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CVM-STA 1 exceeded</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>CVM-STA 2 exceeded</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan="2"></td>
    <td>80</td>
    <td>80</td>
  </tr>
</table>

Table 27:  CVM - Card Action Code (CL-CVM CAC) - Tag DF34, DF35



 ### 5.8.61.1	CVM - Card Action Code - Online PIN:
It is used by the Issuer to specify when online PIN shall be processed if supported by the reader.

### 5.8.61.2	CVM- Card Action Code - Signature:
It is used by the Issuer to specify when a signature shall be requested if supported by the reader.

 ### 4.6.61	Issuer Application Data (IAD):
It Contains proprietary application data to be transmitted to the Issuer in an online transaction (in the authorization request) and after transaction completion in the clearing record. It is the concatenation of internal card data elements listed in the following table and Issuer Discretionary Data (IDD). If present, the IDD allows the Issuer to transmit online additional data as PDS items or tags that are not available in the authorization request. The Issuer selects those data by using IADOL.



<table border="1">
  <tr>
    <th>Data Element</th>
    <th>Length (Contact)</th>
    <th>Length (Contactless)</th>
  </tr>
  <tr>
    <td>Derivation Key Index (DKI)</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Cryptogram Version Number (CVN)</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Card Verification Results (CVR) (contains profile ID, PTC, Script Counter)</td>
    <td>6 (if ACO B2b3 = 0) or 7 (if ACO B2b3 = 1)</td>
    <td>8</td>
  </tr>
  <tr>
    <td>Issuer Discretionary Data items listed in IADOL</td>
    <td>n</td>
    <td>n</td>
  </tr>
</table>


Table 28:  Issuer Application Data


 ### 4.6.62	Issuer Life Cycle Data:
It provides application version information, type approval information, and Issuer specified data. Issuer Life Cycle Data is stored at the application level and may be obtained using the GET DATA command



<table border="1">
  <tr>
    <th>Data Element</th>
    <th>Length (bytes)</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Version number</td>
    <td>1</td>
    <td>Identifies the version of NEPALPAY implemented.</td>
  </tr>
  <tr>
    <td>Approval ID</td>
    <td>7</td>
    <td>Identifier assigned by NEPALPAY upon completion of type approval testing, and during letter of approval issuance to vendor.</td>
  </tr>
  <tr>
    <td>Application Issuer Life Cycle Data</td>
    <td>20</td>
    <td>Issuer specified data element. The contents of this data element may be set during data preparation. The coding of the contents of this field is not specified by NEPALPAY but is at the discretion of the Issuer. Typical data might include application AID, Issuer IIN or BIN.</td>
  </tr>
  <tr>
    <td>Application Code ID</td>
    <td>20</td>
    <td>Application provider specified data element. Parameters identify the behavior of the application. This data element is set during pre-personalization or coded into the application. The coding of the contents of this field is not specified by NEPALPAY but is at the discretion of the application provider. Typical data might include application configuration option, PRU, application version, application provider ID.</td>
  </tr>
</table>



Table 29:  Issuer Life Cycle Data




 ### 4.6.63	Application State:
It is used on dual-interface Cards to indicate if Contactless NEPALPAY is activated or deactivated. The value may be obtained using the GET DATA command and can be updated using a PUT DATA command.



<table border="1">
  <tr>
    <th>Meaning</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Application deactivated</td>
    <td>00</td>
  </tr>
  <tr>
    <td>Application activated</td>
    <td>01</td>
  </tr>
</table>





Table 30:  Application State Encoding


 ### 4.6.64	CVM List:
Identifies a prioritized list of methods of verification of the cardholder supported by the application. Each entry in the list specifies a method, encoded in 2 bytes.


<table>
  <tr>
    <th>Byte</th>
    <th>Meaning</th>
    <th colspan = '4'>Condition</th>
    <th>Recommended Value</th>
  </tr>
  <tr>
    <td>1-4</td>
    <td>Amount X</td>
    <td colspan = '4'>M</td>
    <td>00000000</td>
  </tr>
  <tr>
    <td>5-8</td>
    <td>Amount Y</td>
    <td colspan = '4'>M</td>
    <td>00000000</td>
  </tr>
  <tr>
    <td colspan ="7">Byte 9-10</td>
    </tr>
     <tr>
    <th>Order</th>
    <th>Authentication Method</th>
    <th>Selection Condition</th>
    <th>Action for CVM Failure</th>
    <th>CVM Code</th>
    <th>CVM Condition Code</th>
    <th>Value</th>
  </tr>
    
  <tr>
  <td>1</td>
    <td>Online PIN</td>
    <td>If Supported by the Terminal</td>
    <td>Failed CVM Processing</td>
    <td>00000010</td>
    <td>03</td>
    <td>0203</td>
  </tr>
  <tr>
   <td>2</td>
    <td>Signature</td>
    <td>If Supported by the Terminal</td>
    <td>Failed CVM Processing</td>
    <td>00011110</td>
    <td>03</td>
    <td>1E03</td>
  </tr>
  <tr>
   <td>3</td>
    <td>No CVM</td>
    <td>If Supported by the Terminal</td>
    <td>Failed CVM Processing</td>
    <td>00011111</td>
    <td>03</td>
    <td>1F03</td>
  </tr>
</table>



Table 31:  CVM List


### 4.6.65	Application Currency Code:
It indicates the currency in which the account is managed according to ISO4217. This data object shall be present if the CVM List contains a condition code value of 06, 07, 08, or 09.

### 4.6.66	Application Currency Exponent:
It indicates the implied position of the decimal point from the right of the amount represented according to ISO 4217. The decimal point location of amounts expressed in the currency code specified in the Application Currency Code. This Data Object shall be present if the CVM List contains a condition code value of: 06, 07, 08, or 09.

### 4.6.67	Issuer Country Code:
Indicates the country of the Issuer according to ISO 3166. The terminal uses this data with AUC to check geographic restrictions.

 ### 4.6.68	Service Code:
The service code helps determine the card’s acceptance conditions, such as whether it can be used for international transactions, cash withdrawals, or purchases. Pin required or not?




<table border="1">
  <tr>
  <th></th>
    <th>Position 1</th>
    <th>Position 2</th>
    <th>Position 3</th>
  </tr>
  <tr>
    <td>Value</td>
    <td>Interchange- Technology</td>
    <td>Authorization Processing</td>
    <td>Allowed Services- PIN Requirements</td>
  </tr>
  <tr>
    <td>0</td>
    <td>Reserved for future use by ISO</td>
    <td>Normal</td>
    <td>No restrictions -PIN Required</td>
  </tr>
  <tr>
    <td>1</td>
    <td>International Magnetic Card</td>
    <td>Reserved for future use by ISO</td>
    <td>No restrictions</td>
  </tr>
  <tr>
    <td>2</td>
    <td>International Integrated Circuit Card</td>
    <td>By Issuer via Online</td>
    <td>Goods and services only</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Reserved for future use by ISO</td>
    <td>ATM only</td>
    <td>PIN Required</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Reserved for future use by ISO</td>
    <td>By Issuer via Online unless explicit bilateral agreement applies</td>
    <td>Cash only</td>
  </tr>
  <tr>
    <td>5</td>
    <td>National Magnetic Stripe Card</td>
    <td>Reserved for future use by ISO</td>
    <td>Goods and services only -PIN Required</td>
  </tr>
  <tr>
    <td>6</td>
    <td>National Integrated Circuit Card</td>
    <td>Reserved for future use by ISO</td>
    <td>No restrictions -Prompt for PIN if PED present</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Private</td>
    <td>Reserved for future use by ISO</td>
    <td>Goods and services only -Prompt for PIN if PED present</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Reserved for future use by ISO</td>
    <td>Reserved for future use by ISO</td>
    <td>Reserved for future use by ISO</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Test</td>
    <td>Reserved for future use by ISO</td>
    <td>Reserved for future use by ISO</td>
  </tr>
</table>


Table 32:  Service Code


### 4.6.69	Pin Try Counter:
Global counter indicating the number of PIN tries remaining. Initial value is set by the Issuer at personalization time. Decremented by 1 each time an incorrect PIN is entered. Reset to the PIN Try Limit when the correct PIN is entered or when the PIN is changed or unblocked by the Issuer.

### 4.6.70	Application Primary Account Number:
Valid cardholder account number. Contained in Terminal File records. Odd length PANs are padded with hex ‘F’ for storage in the ICC. Recommendation: pad with a maximum of 1 ‘F’.

### 4.6.71	Cardholder Name:
Indicates cardholder name according to ISO 7813.

### 4.6.72	Cardholder Name Extended:
Extends Cardholder Name to 45 bytes if required.

### 4.6.73	Application PAN Sequence Number:
Identifies and differentiates cards with the same PAN. Contained in Terminal File records.

### 4.6.74	Application Effective Date:
Date from which the application may be used. Contained in Terminal File records.

### 4.6.75	Application Expiration Date:
Date after which the application is no longer valid. Contained in Terminal File records.

### 4.6.76	Application Version Number:
It identifies the format of the Issuer Application Data and the CVR used. Contained in Terminal File Records. The current NEPALPAY application version number is ‘0002’.

### 4.6.77	Application Usage Control:
Indicates Issuer’s specified restrictions on the geographic usage and services allowed for the application.


<table>
  <tr>
    <th>Byte</th>
    <th>Bit</th>
    <th>Definition</th>
    <th>Domestic</th>
    <th>International</th>
  </tr>
  <tr>
    <td rowspan="8">1</td>
    <td>8</td>
    <td>Valid for domestic cash Transactions</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Valid for international cash Transactions</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Valid for domestic goods</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Valid for international goods</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Valid for domestic services</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Valid for international services</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Valid at ATMs</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Valid at terminals other than ATMs</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan="3"></td>
    <td>FF</td>
    <td>56</td>
  </tr>
  <tr>
    <td rowspan="8">2</td>
    <td>8</td>
    <td>Domestic cashback allowed</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>International cashback allowed</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
  <td>6</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
  <td>5</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
  <td>4</td>
    <td >RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
  <td>3</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
  <td>2</td>
    <td >RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
  <td>1</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan="3"></td>
    <td>00</td>
    <td>00</td>
  </tr>
</table>





Table 33:  Application Usage Control (AUC)


Note: As our transactions from Nepal, India, and Bhutan are considered domestic, they have different currency codes, so we can’t segregate domestic and international transactions. Therefore, control should be applied at the network level.


###  4.6.78	Issuer Action Code 
ICC contains Issuer Action Codes used by the terminal for Denial, Default, and Online during the Terminal Action Analysis.

<table border="1">
  <tr>
    <th>Byte</th>
    <th>Bit</th>
    <th>Definition</th>
    <th>Denial</th>
    <th>Online</th>
    <th>Default</th>
  </tr>
  <tr>
    <td rowspan = '9'>1</td>
    <td>8</td>
    <td>Offline data authentication was not performed</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>7</td>
    <td>SDA failed</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>ICC data missing</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Card appears on terminal exception file</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>4</td>
    <td>DDA Failed</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>CDA failed</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>SDA Selected</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
  <td colspan = '2'></td>
  <td>00</td>
  <td>BC</td>
  <td>BC</td>
  </tr>

<tr>
    <td rowspan='9'>2</td>
    <td>8</td>
    <td>ICC and terminal have different application versions</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Expired application</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Application not yet effective</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Requested service not allowed for card product</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>New Card</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan='2'></td>
    <td>00</td>
    <td>68</td>
    <td>60</td>
  </tr>
  <tr>
    <td rowspan='9'>3</td>
    <td>8</td>
    <td>Cardholder verification was not successful</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Unrecognized Cardholder Verification Method (CVM)</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>PIN Try Limit Exceeded</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>PIN entry required but PIN pad not present or not working</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>PIN entry required, PIN pad present but PIN not entered</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Online PIN entered</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan='2'></td>
    <td>00</td>
    <td>9C</td>
    <td>8C</td>
  </tr>
  <tr>
    <td rowspan='9'>4</td>
    <td>8</td>
    <td>Transaction exceeds floor limit</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Lower Consecutive Offline Limit Exceeded</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Upper Consecutive Offline Limit Exceeded</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Transaction selected randomly for online processing</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Merchant forced transaction online</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>RFU</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan='2'></td>
    <td>00</td>
    <td>98</td>
    <td>88</td>
  </tr>
  <tr>
    <td rowspan='9'>5</td>
    <td>8</td>
    <td>Default TDOL Used</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Issuer Authentication was unsuccessful</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Script processing failed before final GENERATE AC</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Script processing failed after final GENERATE AC</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Reserved for future use by the EMV Contactless Specifications</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Reserved for future use by the EMV Contactless Specifications</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Reserved for future use by the EMV Contactless Specifications</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Reserved for future use by the EMV Contactless Specifications</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan='2'></td>
    <td>00</td>
    <td>00</td>
    <td>00</td>
  </tr>


</table>


Table 34:  Issuer Action Code (Contact - IAC) - Tag 9F0D, 9F0E, 9F0F



 ### 4.6.78.1	Issuer Action Code – Default:
It specifies the Issuer’s conditions that cause a transaction to be declined if it might have been approved online, but the terminal is unable to process the transaction online.

###  4.6.78.2	Issuer Action Code – Denial:
It specifies the Issuer’s conditions that cause the decline of a transaction without attempt to go online.

###  4.6.78.3	Issuer Action Code – Online:
It specifies the Issuer’s conditions that cause a transaction to be transmitted online.

###  4.6.79	Payment Account Reference (PAR):
Static reference defined in [EMV SB-167] that represents the account that a PAN is associated with. This can be used to represent multiple PANs associated with an account where business processes shall work across those PANs consistently (e.g. to enable Merchants and Acquirers to make a link between tokenized and non-tokenized PANs on the same payment account in order to enable back-office processing and value-added services).

###  4.6.80	Card Risk Management Data Object List 1(CDOL 1):
It is a list of the tags and lengths of data elements that shall be passed to the ICC in the 1st GENERATE AC command.



<table>
  <tr>
    <th>TAG</th>
    <th>DATA ELEMENT</th>
    <th>LENGTH</th>
  </tr>
  <tr>
    <td>9F02</td>
    <td>Amount, Authorized</td>
    <td>6</td>
  </tr>
  <tr>
    <td>9F03</td>
    <td>Amount, Other</td>
    <td>6</td>
  </tr>
  <tr>
    <td>9F1A</td>
    <td>Terminal Country Code</td>
    <td>2</td>
  </tr>
  <tr>
    <td>95</td>
    <td>Terminal Verification Results</td>
    <td>5</td>
  </tr>
  <tr>
    <td>5F2A</td>
    <td>Transaction Currency Code</td>
    <td>2</td>
  </tr>
  <tr>
    <td>9A</td>
    <td>Transaction Date</td>
    <td>3</td>
  </tr>
  <tr>
    <td>9C</td>
    <td>Transaction Type</td>
    <td>1</td>
  </tr>
  <tr>
    <td>9F37</td>
    <td>Unpredictable Number</td>
    <td>4</td>
  </tr>
  <tr>
    <td>9F35</td>
    <td>Terminal Type</td>
    <td>1</td>
  </tr>
  <tr>
    <td>9F34</td>
    <td>CVM Results</td>
    <td>3</td>
  </tr>
</table>




Table 35:  CDOL1 Content



### 4.6.81	Card Risk Management Data Object List 2 (CDOL2):
It is a list of the tags and lengths of data elements that shall be passed to the ICC in the 2nd GENERATE AC command.

<table>
  <tr>
    <th>TAG</th>
    <th>DATA ELEMENT</th>
    <th>LENGTH</th>
  </tr>
  <tr>
    <td>91</td>
    <td>Issuer Authentication Data</td>
    <td>10</td>
  </tr>
  <tr>
    <td>8A</td>
    <td>Authorization Response Code</td>
    <td>2</td>
  </tr>
  <tr>
    <td>95</td>
    <td>Terminal Verification Results</td>
    <td>5</td>
  </tr>
  <tr>
    <td>9F37</td>
    <td>Unpredictable Number</td>
    <td>4</td>
  </tr>
</table>




Table 36:  CDOL2 Content


###  4.6.82	Static Data Authentication (SDA) Tag List:
List of tags of primitive data objects defined in the EMV specification whose value fields are to be included in the Signed Static Application Data or ICC Public Key Certificate or ICC PIN Encipherment Public Key Certificate. If supported, the SDA Tag List contains only the tag of the Application Interchange Profile.

### 4.6.83	Issuer Public Key Exponent:
Issuer Public Key exponent used for the verification of the Signed Static Application Data and the ICC Public Key Certificate.

### 4.6.84	Certification Authority Public Key Index:
It identifies the DFS Certificate Authority Public Key/Private Key pair used in offline static and dynamic data Authentication (SDA, DDA, and CDA, Offline Enciphered PIN supported)

### 4.6.85	Key Length:
Recommended Value: 1984


###  4.6.86	Issuer Public Key Remainder:
Remaining digits of the Issuer Public Key Modulus.

### 4.6.87	Issuer Public Key Certificate:
Issuer Public Key certified by the DCI Certification Authority for use in offline static and dynamic data authentication (SDA, DDA, CDA).

### 4.6.88	ICC Public Key Exponent:
ICC Public Key exponent used for the verification of the Signed Dynamic Application Data.

### 4.6.89	ICC Public Key Certificate:
ICC Public Key certified by the Issuer.

### 4.6.90	ICC Public Key Remainder:
Remaining digits of the ICC Public Key Modulus.

### 4.6.91	Issuer Application Data Object List (IADOL):
It is personalized by the Issuer, indicates the contents in Issuer Application Data. IADOL allows the Issuer to request date element such as Offline counters or IDDT items. This adds flexibility to the application. The contents of the IADOL shall be such that the total length of the Issuer Discretionary Data is such that the overall length of the IAD is less than or equal to 32 bytes. The following table provides a list of data objects which may be included in IADOL list.



<table border="1">
  <tr>
    <th>Tag</th>
    <th>Data Element</th>
    <th>Length</th>
  </tr>
  <tr>
    <td>‘00C2’</td>
    <td>Issuer Life Cycle Data</td>
    <td>48 *</td>
  </tr>
  <tr>
    <td>‘00C3’</td>
    <td>Currency Conversion Code 1</td>
    <td>5</td>
  </tr>
  <tr>
    <td>‘00C4’</td>
    <td>Currency Conversion Code 2</td>
    <td>5</td>
  </tr>
  <tr>
    <td>‘00C5’</td>
    <td>Card Action Code – Denial *profile-specific</td>
    <td>3 *</td>
  </tr>
  <tr>
    <td>‘00C6’</td>
    <td>Card Action Code – Default *profile-specific</td>
    <td>3 *</td>
  </tr>
  <tr>
    <td>‘00C7’</td>
    <td>Card Action Code – Online *profile-specific</td>
    <td>3 *</td>
  </tr>
  <tr>
    <td>‘00C8’</td>
    <td>Lower Cumulative Offline Amount (LCOA) *profile-specific</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘00C9’</td>
    <td>Upper Cumulative Offline Amount (UCOA) *profile-specific</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘00CA’</td>
    <td>Single Transaction Amount (STA) limit *profile-specific</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘00CB’</td>
    <td>Lower Consecutive Offline Limit (LCOL) *profile-specific</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘00CC’</td>
    <td>Upper Consecutive Offline Limit (UCOL) *profile-specific</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘00CD’</td>
    <td>Number of Consecutive Offline Transactions (NCOT) Counter *profile-specific</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘00CE’</td>
    <td>Cumulative Offline Amount Counter (COA) *profile-specific</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘00D1’</td>
    <td>Offline Balance</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘00DC’</td>
    <td>CDCVM Type</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘DF45’</td>
    <td>CDCVM Status</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘9F34’</td>
    <td>CVM Results</td>
    <td>3</td>
  </tr>
  <tr>
    <td>‘DF01’ – ‘DF0A’</td>
    <td>Issuer Defined Data Tag (IDDT) 0 –- 9</td>
    <td>Var.</td>
  </tr>
  <tr>
    <td>‘DF36’</td>
    <td>Key Index</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘DF38’</td>
    <td>Data Storage Failed Counter</td>
    <td>1</td>
  </tr>
</table>




Table 37:  Tags Supported by Issuer Application Data Object List (IADOL) List – Contact Card



<table border="1">
  <tr>
    <th>Tag</th>
    <th>Data Element</th>
    <th>Length</th>
  </tr>
  <tr>
    <td>‘00C8’</td>
    <td>Lower Cumulative Offline Amount (LCOA) *profile-specific</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘00C9’</td>
    <td>Upper Cumulative Offline Amount (UCOA) *profile-specific</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘00CA’</td>
    <td>Single Transaction Amount (STA) limit *profile-specific</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘00CB’</td>
    <td>Lower Consecutive Offline Limit (LCOL) *profile-specific</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘00CC’</td>
    <td>Upper Consecutive Offline Limit (UCOL) *profile-specific</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘00CD’</td>
    <td>Number of Consecutive Offline Transactions (NCOT) Counter *profile-specific</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘00CE’</td>
    <td>Cumulative Offline Amount Counter (COA) *profile-specific</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘00D4’</td>
    <td>CVM-Accumulator</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘00D9’</td>
    <td>CVM-Counter</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘00DC’</td>
    <td>CDCVM Type</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘DF45’</td>
    <td>CDCVM Status</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘DF40’</td>
    <td>CL-Accumulator</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘DF43’</td>
    <td>CL-Counter</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘00D1’</td>
    <td>Offline Balance</td>
    <td>6</td>
  </tr>
  <tr>
    <td>‘DF01’ – ‘DF0A’</td>
    <td>Issuer Defined Data Tag (IDDT) 0 –- 9</td>
    <td>Var.</td>
  </tr>
  <tr>
    <td>‘DF36’</td>
    <td>Key Index</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘DF38’</td>
    <td>Data Storage Failed Counter</td>
    <td>1</td>
  </tr>
  <tr>
    <td>‘DF6x’</td>
    <td>PID Counter ‘6x’ | PID Counter Limit ‘6x’ | PID Minimum Amount ‘6x’ (where x is ‘A’ to ‘F’)</td>
    <td>20 bytes with the last 12 bytes padded to ‘FF”</td>
  </tr>
  <tr>
    <td>‘DF7x’</td>
    <td>PID Accumulator ‘7x’ | PID Accumulator Limit ‘7x’ (where x is ‘A’ to ‘F’)</td>
    <td>20 bytes with the last 8 bytes padded to ‘FF”</td>
  </tr>
  <tr>
    <td>‘DF5x’</td>
    <td>PID Counter ‘5x’ | PID Counter Limit ‘5x’ | PID Accumulator ‘5x’ | PID Accumulator limit ‘5x’ | PID Minimum Amount ‘5x’</td>
    <td>20 bytes</td>
  </tr>
</table>



Table 38:  Tags Supported by Issuer Application Data Object List (IADOL) List – Contactless Card


### 4.6.92	Issuer Defined Data Tags (IDDT):
IDDT are proprietary data tags in the range DF01 to DF0A which are available to the Issuer for non EMV use. The elements are accessible using PUT DATA and GET DATA commands.

### 4.6.93	Lower Cumulative Offline Amount (LCOA):
It is specifying the maximum total amount of offline transactions in the primary and secondary currencies allowed for the transaction profile before a transaction is forced to go online. The LCOA limit may be profile-specific. If a profile-specific COA has exceeded the profile-specified LCOA limit, the ‘Lower Cumulative Offline Transaction Amount limit exceeded’ bit of CVR is set. Note: the value of this limit shall be less than 999999999999.

### 4.6.94	Upper Cumulative Offline Amount (UCOA):
It is specifying the maximum total amount of offline transactions in the primary and secondary currencies allowed for the transaction profile before a transaction is declined after an online transaction is unable to be performed. UCOA may be profile-specific. If the profile-specific COA counter has exceeded the profile-specified UCOA limit, the ‘Upper Cumulative Offline Transaction Amount limit exceeded’ bit of CVR is set during 1st Generate AC velocity checks. Note: the value of this limit shall be less than 999999999999.

### 4.6.95	Single Transaction Amount (STA) limit:
It is specifying the single amount of the transaction in the reference currency allowed for the card application/transaction profile before a transaction is forced to go online. If the transaction amount has exceeded this limit, the relevant CVR bit is set. Note: the value of this limit shall be less than 999999999999.

### 4.6.96	Lower Consecutive Offline Limit (LCOL):
It is specifying the maximum number of offline transactions allowed for the transaction profile before a transaction is forced to go online. The NCOT counter and LCOL limit may be profile-specific. If the profile-specified NCOT counter has exceeded the profile-specified LCOL, the ‘Lower Consecutive Offline Transaction limit exceeded’ bit of CVR is set (Byte 5, bit 5).

### 4.6.97	Upper Consecutive Offline Limit (UCOL):
It is specifying the maximum number of offline transactions allowed for the transaction profile before a transaction is declined after an online transaction is unable to be performed. UCOL may be profile-specific. If the profile-specified NCOT has exceeded this limit, the ‘Upper Consecutive Offline Transaction limit exceeded’ bit of CVR is set during 1st Generate AC velocity checks.

### 4.6.98	Number of Consecutive Offline Transactions (NCOT) Counter:
It is representing a profile-specific counter of consecutive offline transactions that have occurred for that card application since the last time a transaction went online. NCOT is used to perform card velocity checking. NCOT is initialized to zero. Incremented by 1 each time a transaction is completed offline. Optionally: Not incremented by 1 if the transaction amount is zero (if PRU B2b8 = ‘1’). Optionally: Reset to zero when a transaction is online approved by Issuer, regardless of the presence and validity of Issuer Authentication Data. By default: Reset to zero when a transaction is online approved by Issuer, Issuer Authentication is performed and successful, and appropriate CSU bit is set. The value of the profile-specific NCOT may be sent to the Issuer as part of the Issuer Application Data, if included in the IADOL list. If contained in Issuer application Data, and the appropriate configuration item is set, the NCOT may also be included in the Application Cryptogram.

### 4.6.99	Cumulative Offline Amount Counter (COA):
It is representing a profile-specific counter of cumulative total amount of offline transactions in the in the primary and secondary currencies for the card application since the last time a transaction went online. COA is used to perform card velocity checking. COA is initialized to zero and incremented by the amount authorized each time a transaction in the reference currency is completed offline. COA is reset to zero when a transaction is online approved by Issuer, Issuer Authentication succeeds, and appropriate CSU bit is set. Option: Reset to zero when a transaction is online approved by Issuer, regardless of whether Issuer Authentication Data is received and/or is successfully verified. The value of COA may be sent to the Issuer as part of the Issuer Application Data (if COA tag is included in IADOL). If COA is in Issuer application data, and the appropriate configuration item is set, it may also be included in Application Cryptogram.

### 4.6.100	CVM-Accumulator:
It is representing a counter of the cumulative total amount of transactions in the supported currencies that have occurred for CTL NEPALPAY since the last time a CVM was required. CVM-Accumulator is checked against CVM-Cum limit 1 and CVM-Cum limit 2 to determine the cumulative amount that a card can accept before requiring to perform a particular CVM (i.e., Online PIN or Signature).

### 4.6.101	CVM-Counter:
It is representing a counter of consecutive Contactless transactions that have occurred for the CTL NEPALPAY since the last time a CVM was required. CVM-Counter is checked against CVM-Cons limit 1 and CVM-Cons limit 2 to determine how often a CVM (i.e., Online PIN or Signature) must be performed by the reader.

### 4.6.102	Contactless – Accumulator:
It is representing a counter of the cumulative total amount of Contactless transactions in the supported currencies that have occurred via CTL NEPALPAY since the last time a transaction went online. CL- Accumulator is checked against CL-Cum limit to determine the cumulative offline amount that a card can accept before requiring an online authorization or using the Contact Interface (for a Dual-Interface implementation). CL- Accumulator and CL-Cum limit are only used if CACO B1b8 is set to ‘1’. Otherwise, CTL NEPALPAY uses COA and its related limits LCOA and UCOA.

### 4.6.103	Contactless – Counter:
It is representing a counter of consecutive Contactless transactions that have occurred via CTL NEPALPAY since the last time a transaction went online. CL-Counter is checked against CL-Cons limit to determine how often a Contactless transaction must be processed online or using another interface (for a Dual-Interface implementation). CL-Counter and CL-Cons limit are only used if CACO B1b7 is set to ‘1’. Otherwise, CTL NEPALPAY uses NCOT and its related limits LCOL and UCOL.

### 4.6.104	Counters and Accumulator Control Options (CACO):
Counters and accumulators supported in addition to Number of Consecutive Offline Transaction (NCOT) and Cumulative Offline Amount (COA), Operation of accumulators and counters (e.g., amount or transaction to be used), Conditions of reset, Retrieval access restrictions, and Specific features related to sharing options with the Contact Interface.




<table border="1">
  <tr>
    <th>Byte</th>
    <th>Bit</th>
    <th>Definition</th>
    <th>Value</th>
  </tr>
  <tr>
  <td colspan = '4' align = 'center'> Global Control Options</td>
  </tr>
  <tr>
    <td rowspan="8">1</td>
    <td>8</td>
    <td>Use CL-Accumulator</td>
    <td>1</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Use CL-Counter</td>
    <td>1</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Use CVM-Accumulator</td>
    <td>1</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Use CVM-Counter</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Count/Accumulate refund Transactions</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Count zero amount Transactions</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Allow retrieval of values and limits of CRM/CVM counters and accumulators through GET DATA command</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan="3"></td>
    <td>E0</td>
  </tr>
    <tr>
  <td colspan = '4' align = 'center'> COA (CRM-Accumulator)</td>
  </tr>
  <tr>
    <td rowspan="8">2</td>
    <td>8</td>
    <td rowspan = '2'>Usage of Amounts, Authorized and Other</td>
    <td rowspan = '2'>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td></td>
  </tr>
  <tr>
    <td>6</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Reset counters and accumulators if ARQC required</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>UCOA and LCOA must be shared with the contact interface</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Shared with contact interface (for dual-interface implementation only)
    
    If set, the accumulator and counter should be reset only over the Contact interface, with appropriate CSU bits set (B2b-1)</td>
    <td>1</td>
  </tr>
  <tr>
    <td colspan="3"></td>
    <td>01</td>
  </tr>
  <tr>
  <td colspan = '4' align = 'center'> NCOT (CRM-Counter)</td>
  </tr>
  <tr>
    <td rowspan="8">3</td>
    <td>8</td>
    <td rowspan = '3'>Count all Transactions with non-matching currency codes</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>1</td>
  </tr>
  <tr>
    <td>6</td>
    <td>1</td>
  </tr>
  <tr>
    <td>5</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Reset counters and accumulators if ARQC required</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>UCOL and LCOL must be shared with the contact interface</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Shared with contact interface (for dual-interface implementation only) If set, the accumulator and counter should be reset only over the Contact interface, with appropriate CSU bits set (B2b-1)</td>
    <td>1</td>
  </tr>
  <tr>
    <td colspan="3"></td>
    <td>61</td>
  </tr>
    <tr>
  <td colspan = '4' align = 'center'>CL-Accumulator and CL-Counter </td>
  </tr>
  <tr>
    <td rowspan="8">4</td>
    <td>8</td>
    <td rowspan = '2'>Use Amount, Authorized provided in tag ‘‘9F02’’</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td rowspan = '2'>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Reset counters and accumulators if ARQC required</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>STA must be shared with the contact interface</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Shared with contact interface (for dual-interface implementation only) If set, the accumulator and counter should be reset only over the Contact interface, with appropriate CSU bits set (B2b-1)</td>
    <td>1</td>
  </tr>
  <tr>
    <td colspan="3"></td>
    <td>01</td>
  </tr>
   <tr>
  <td colspan = '4' align = 'center'>CVM-Accumulator and CVM-Counter </td>
  </tr>
  <tr>
    <td rowspan="8">5</td>
    <td>8</td>
    <td rowspan = '2'>Use Amount, Authorized provided in tag ‘‘9F02’’</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Reset counters and accumulators if ARQC required</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Shared with contact interface (for dual-interface implementation only) to be reset by CSU when appropriate bits are set (B2b2-1)</td>
    <td>1</td>
  </tr>
  <tr>
    <td colspan="3"></td>
    <td>01</td>
  </tr>
    <tr>
  <td colspan = '4' align = 'center'> Prepaid Accumulator</td>
  </tr>
  <tr>
    <td rowspan="8">6</td>
    <td>8</td>
    <td rowspan = '2'>Use Amount, Authorized provided in tag ‘‘9F02’’</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Credit refund transactions</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Debit cashback transactions</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>RFU</td>
    <td>0</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Allow retrieval of values and limits of ‘Offline balance’ using GPO or GET DATA</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Shared with contact interface (for dual-interface implementation only) to be reset by CSU when appropriate bits are set (B2b2-1)</td>
    <td>0</td>
  </tr>
  <tr>
    <td colspan="3"></td>
    <td>00</td>
  </tr>

</table>






Table 39: Counters and Accumulator Control Options


### 4.6.105	Dynamic Card Verification Value (DCVV):
It is generated by the NEPALPAY application as a unique value for each transaction. In this a new CVV is dynamically generated at regular intervals. This CVV will only work until the next number is generated. It adds an extra layer of protection against fraud, especially for online and card-not-present transactions.


### 4.6.106	Card Authentication Related Data (CARD):
It contains the Fast-Dynamic Data Authentication (fDDA) Version Number, Card Unpredictable Number, and Card Transaction Qualifiers. For transactions where fDDA is performed, the Card Authentication Related Data is returned in the last record specified by the Application File Locator for that transaction.

### 4.6.107	Track 1 Data:
Track 1 shall be coded according to [ISO/IEC 7813]. The maximum length of Track 1 is 79 characters as shown in the Table 4: Track 1 Encoding Format.

### 4.6.108	Contactless NEPALPAY Default Profile:
It indicates the Issuer’s configuration of ‘transaction profile’ (AIP and AFL) used in Initiate Application Processing to generate the response to the (DATA) GET PROCESSING OPTIONS command. It also configures the risk management counter limits when a profile is selected. The profile ID is set in relevant CVR bits. CTL NEPALPAY shall be able to support a minimum of 3 profiles. The maximum is limited by Issuer requirement and application design. For Dual-Interface implementations, the application may have the Contact NEPALPAY TPO and Contactless NEPALPAY TPO concatenated to store both sets of tags in the same object. NEPALPAY TPO concatenations shall always begin with Contact NEPALPAY TPO, followed by the Contactless NEPALPAY TPO. The total length in this case would be 220 bytes. Where a counter or accumulator is shared between the contact and contactless interfaces, and that counter or accumulator is in the contact profile concatenated with the contactless profile, it will be this element that is shared. However, where a given counter or accumulator is not shared, the element in the contactless profile, or the default contactless profile will be used, even if the element is present in the contact profile. 



<table>
  <tr>
    <th>Tag</th>
    <th>Value</th>
    <th>Length</th>
  </tr>
  <tr>
    <td>DF67</td>
    <td>Profile Resource Usage (PRU)</td>
    <td>4 bytes</td>
  </tr>
  <tr>
    <td>82</td>
    <td>Application Interchange Profile (AIP)</td>
    <td>2 bytes</td>
  </tr>
  <tr>
    <td>94</td>
    <td>Application File Locator (AFL)</td>
    <td>var up to 32 bytes</td>
  </tr>
  <tr>
    <td>9F07</td>
    <td>Application Usage Control (AUC)</td>
    <td>2 bytes</td>
  </tr>
  <tr>
    <td>9F71</td>
    <td>Card Processing Requirements (CPR)</td>
    <td>2 bytes</td>
  </tr>
  <tr>
    <td>DF30</td>
    <td>Card Risk Management (CRM)-CAC Switch Interface</td>
    <td>3 bytes</td>
  </tr>
  <tr>
    <td>DF31</td>
    <td>CRM-CAC Denial</td>
    <td>3 bytes</td>
  </tr>
  <tr>
    <td>DF32</td>
    <td>CRM-CAC Online</td>
    <td>3 bytes</td>
  </tr>
  <tr>
    <td>DF33</td>
    <td>CRM-CAC Default</td>
    <td>3 bytes</td>
  </tr>
  <tr>
    <td>CD</td>
    <td>Number of Consecutive Offline Transaction (NCOT) Counter</td>
    <td>1 byte</td>
  </tr>
  <tr>
    <td>CE</td>
    <td>Cumulative Offline Amount (COA)</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>CB</td>
    <td>Lower Consecutive Offline Transaction Limit (LCOL) limit</td>
    <td>1 byte</td>
  </tr>
  <tr>
    <td>CC</td>
    <td>Upper Consecutive Offline Transaction Limit (UCOL) limit</td>
    <td>1 byte</td>
  </tr>
  <tr>
    <td>C8</td>
    <td>Lower Cumulative Offline Amount (LCOA) limit</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>C9</td>
    <td>Upper Cumulative Offline Amount (UCOA) limit</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>CA</td>
    <td>Single Transaction Amount (STA) limit</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>DF34</td>
    <td>Card Verification Method (CVM)-CAC Online-PIN</td>
    <td>2 bytes</td>
  </tr>
  <tr>
    <td>DF35</td>
    <td>CVM-CAC Signature</td>
    <td>2 bytes</td>
  </tr>
  <tr>
    <td>D4</td>
    <td>CVM-Accumulator</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>D9</td>
    <td>CVM-Counter</td>
    <td>1 byte</td>
  </tr>
  <tr>
    <td>DA</td>
    <td>CVM-Cons limit 1</td>
    <td>1 byte</td>
  </tr>
  <tr>
    <td>DB</td>
    <td>CVM-Cons limit 2</td>
    <td>1 byte</td>
  </tr>
  <tr>
    <td>D5</td>
    <td>CVM-Cum limit 1</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>D6</td>
    <td>CVM-Cum limit 2</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>D7</td>
    <td>CVM-STA limit 1</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>D8</td>
    <td>CVM-STA limit 2</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>DF40</td>
    <td>Contactless (CL)-Accumulator</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>DF43</td>
    <td>CL-Counter</td>
    <td>1 byte</td>
  </tr>
  <tr>
    <td>DF44</td>
    <td>CL-Cons limit</td>
    <td>1 byte</td>
  </tr>
  <tr>
    <td>DF41</td>
    <td>CL-Cum limit</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>DF42</td>
    <td>CL-STA limit</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>DF36</td>
    <td>Key Index</td>
    <td>1 byte</td>
  </tr>
</table>





Table 40:  Data Content for Template ‘BF50’Entry


### 4.6.109	Transaction Profile Object:
It indicates the Issuer’s configuration of ‘transaction profile’ (AIP, AFL and ACO) used in Initiate Application Processing to generate the response to the GET PROCESSING OPTIONS command. It also configures the risk management counters, limits and Key Index to use when a profile is selected. The profile ID is set in relevant CVR bits. The NEPALPAY application shall be able to support a minimum of 3 profiles. The maximum is limited by Issuer requirement and application design.


<table>
  <tr>
    <th>Tag</th>
    <th>Field Name</th>
    <th>Length</th>
  </tr>
  <tr>
    <td>DF67</td>
    <td>Profile Resource Usage (PRU)</td>
    <td>2 bytes</td>
  </tr>
  <tr>
    <td>82</td>
    <td>Application Interchange Profile (AIP)</td>
    <td>2 bytes</td>
  </tr>
  <tr>
    <td>94</td>
    <td>Application File Locator (AFL)</td>
    <td>32 bytes</td>
  </tr>
  <tr>
    <td>C5</td>
    <td>Card Action Code (CAC) Denial</td>
    <td>3 bytes</td>
  </tr>
  <tr>
    <td>C7</td>
    <td>CAC Online</td>
    <td>3 bytes</td>
  </tr>
  <tr>
    <td>C6</td>
    <td>CAC Default</td>
    <td>3 bytes</td>
  </tr>
  <tr>
    <td>CB</td>
    <td>Lower Consecutive Offline Transaction Limit (LCOL)</td>
    <td>1 byte</td>
  </tr>
  <tr>
    <td>CC</td>
    <td>Upper Consecutive Offline Transaction Limit (UCOL)</td>
    <td>1 byte</td>
  </tr>
  <tr>
    <td>C8</td>
    <td>Lower Cumulative Offline Amount (LCOA) limit</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>C9</td>
    <td>Upper Cumulative Offline Amount (UCOA) limit</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>CA</td>
    <td>Single Transaction Amount (STA) limit</td>
    <td>6 bytes</td>
  </tr>
  <tr>
    <td>DF36</td>
    <td>Key Index</td>
    <td>1 byte</td>
  </tr>
</table>




Table 41:  Transaction Profile Object


### 4.6.110	Card ID:
The Card ID is a NEPALPAY application proprietary data element used conditionally by terminals during ODA. Contained in Terminal File Records. If personalized, the Card ID must match the value encoded into the Card ID field of the Card Feature Descriptor. The terminal will compare the values during ODA and, if they do not match, will consider ODA failed. If used, Card ID must be included in a signed record referenced by the AFL.


<table>
  <tr>
    <th>Code</th>
    <th>Country name</th>
  </tr>
  <tr>
    <td>004</td>
    <td>Afghanistan</td>
  </tr>
  <tr>
    <td>050</td>
    <td>Bangladesh</td>
  </tr>
  <tr>
    <td>064</td>
    <td>Bhutan</td>
  </tr>
  <tr>
    <td>144</td>
    <td>Sri Lanka</td>
  </tr>
  <tr>
    <td>156</td>
    <td>China</td>
  </tr>
  <tr>
    <td>356</td>
    <td>India</td>
  </tr>
  <tr>
    <td>462</td>
    <td>Maldives</td>
  </tr>
  <tr>
    <td>524</td>
    <td>Nepal</td>
  </tr>
  <tr>
    <td>586</td>
    <td>Pakistan</td>
  </tr>
  <tr>
    <td>840</td>
    <td>United States of America</td>
  </tr>
</table>




Table 42: ISO 639 List






### 4.6.112	ISO 4217:
ISO 4217 is the international standard describing three-letter codes (also known as the currency code) to define the names of currencies, as established by the International Organization for Standardization (ISO). The ISO 4217 code list is the common way in banking and business, all over the world, for defining different currencies



<table>
  <tr>
    <th>Code</th>
    <th>Num</th>
    <th>decimal</th>
    <th>Currency</th>
    <th>Country Name</th>
  </tr>
  <tr>
    <td>AFN</td>
    <td>971</td>
    <td>2</td>
    <td>Afghan afghani</td>
    <td>Afghanistan</td>
  </tr>
  <tr>
    <td>BDT</td>
    <td>050</td>
    <td>2</td>
    <td>Bangladeshi taka</td>
    <td>Bangladesh</td>
  </tr>
  <tr>
    <td>BTN</td>
    <td>064</td>
    <td>2</td>
    <td>Bhutanese ngultrum</td>
    <td>Bhutan</td>
  </tr>
  <tr>
    <td>LKR</td>
    <td>144</td>
    <td>2</td>
    <td>Sri Lankan rupee</td>
    <td>Sri Lanka</td>
  </tr>
  <tr>
    <td>INR</td>
    <td>356</td>
    <td>2</td>
    <td>Indian rupee</td>
    <td>India</td>
  </tr>
  <tr>
    <td>CNY</td>
    <td>156</td>
    <td>2</td>
    <td>Chinese yuan</td>
    <td>China</td>
  </tr>
  <tr>
    <td>MVR</td>
    <td>462</td>
    <td>2</td>
    <td>Maldivian rufiyaa</td>
    <td>Maldives</td>
  </tr>
  <tr>
    <td>NPR</td>
    <td>524</td>
    <td>2</td>
    <td>Nepalese rupee</td>
    <td>Nepal</td>
  </tr>
  <tr>
    <td>PKR</td>
    <td>586</td>
    <td>2</td>
    <td>Pakistani rupee</td>
    <td>Pakistan</td>
  </tr>
  <tr>
    <td>USD</td>
    <td>840</td>
    <td>2</td>
    <td>United States dollar</td>
    <td>United States of America</td>
  </tr>
</table>


Table 43:  ISO 4217


### 4.6.113	ISO/IEC 7811-2:
ISO/IEC 7811-2 specifies requirements for a low coercivity magnetic stripe (including any protective overlay) on an identification card, the encoding technique, and coded character sets. It takes into consideration both human and machine aspects and states minimum requirements12. This standard defines the characteristics for identification cards and their use for international interchange. The low coercivity magnetic stripe is commonly found on various cards, such as credit cards, debit cards, and access cards. It plays a crucial role in storing data for identification and transaction purposes. If you’re interested in the technical details, ISO/IEC 7811-2 provides guidelines for creating and using these magnetic stripes effectively.

### 4.6.114	ISO/IEC 7813:
ISO/IEC 7813 is an international standard codified by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC). It defines properties of financial transaction cards, such as ATM or credit cards1. Let’s delve into the details:

a)	Physical Characteristics: Embossed characters, Embossing of expiration date, Magnetic stripe, Integrated circuit with contacts, Integrated circuit without contacts

b)	Magnetic tracks: Track 1, Track 2, Track 3

### 4.6.115	ISO/IEC 7816-4:
ISO/IEC 7816-4 is a standard that specifies the organization, security, and commands for interchange of identification cards and integrated circuit cards. It covers various aspects related to these cards, including:

a)	Command-Response Pairs: This standard defines the contents of command-response pairs exchanged at the interface between the card and the external world.

b)	Data Retrieval: It outlines the means of retrieving data elements and data objects from the card.

c)	Historical Bytes: The document describes the structures and contents of historical bytes used to describe the operating characteristics of the card.

d)	Application Structures: It specifies structures for applications and data within the card, as seen at the interface during command processing.

e)	Access Methods: ISO/IEC 7816-4 defines access methods to files and data within the card.

f)	Security Architecture: The standard establishes a security architecture that defines access rights to files and data within the card.

g)	Application Identification: It provides means and mechanisms for identifying and addressing applications within the card.

h)	Secure Messaging: Methods for secure messaging are also covered.

i)	Algorithms: While it does not describe these algorithms, it does specify access methods to the algorithms processed by the card.

Importantly, ISO/IEC 7816-4 does not describe the physical interface technology or the internal implementation of the cards. It is independent of the physical interface and applies to cards accessed by methods such as contacts, close coupling, and radio frequency. If a card supports multiple physical interfaces simultaneously, the relationship between different physical interfaces falls outside the scope of this.



### 4.6.116	ISO/IEC 7816-5:
ISO/IEC 7816-5 is a standard related to identification cards and integrated circuit cards. It provides guidelines for using an application identifier to determine the presence of an application within a card and retrieve relevant information. Specifically, ISO/IEC 7816-5:2004 focuses on ensuring the uniqueness of application identifiers through international registration. This standard defines the registration procedure, the responsible authorities, and the availability of a register that links the registered parts of the identifiers to the relevant application providers. In summary, ISO/IEC 7816-5 plays a crucial role in maintaining consistency and uniqueness in application identifiers across integrated circuit cards

### 4.6.117	ISO/IEC 8859-1:
ISO/IEC 8859-1:1998, Information technology — 8-bit single-byte coded graphic character sets — Part 1: Latin alphabet No. 1, is part of the ISO/IEC 8859 series of ASCII-based standard character encodings, first edition published in 1987. ISO/IEC 8859-1 encodes what it refers to as “Latin alphabet no. 1", consisting of 191 characters from the Latin script. This character-encoding scheme is used throughout the Americas, Western Europe, Oceania, and much of Africa. It is the basis for some popular 8-bit character sets and the first two blocks of characters in Unicode.


### 4.6.118	Changes required to issue a domestic/international card



<table border="1">
  <tr>
    <th>Card Type</th>
    <th>Domestic Debit/Credit/Prepaid</th>
    <th>International Debit/Credit/Prepaid</th>
  </tr>
  <tr>
    <td>Profile Name</td>
    <td>NEPALPAY CARD Profile-I</td>
    <td>NEPALPAY CARD Profile-II</td>
  </tr>
  <tr>
    <td>Application Currency Code (9F42)</td>
    <td>524</td>
    <td>840</td>
  </tr>
  <tr>
    <td>Application Usage Control (9F07)</td>
    <td>FF 00</td>
    <td>56 00</td>
  </tr>
  <tr>
    <td>Transaction Type</td>
    <td>Online Only</td>
    <td>Online Only</td>
  </tr>
  <tr>
    <td>BIN</td>
    <td>Different</td>
    <td>Different</td>
  </tr>
</table>


Table 44: Changes required to issue a domestic/international card




### 4.6.119	Reference Materials:
This document relied on references from the list provided in the table below.



<table border="1">
  <tr>
    <th>Document Type</th>
    <th>Title</th>
    <th>Source</th>
  </tr>
  <tr>
    <td>D-PAS Documents</td>
    <td>Discover Contact D-PAS Connect: Card Application Specification</td>
    <td>Available from Discover Implementation Manager</td>
  </tr>
  <tr>
    <td></td>
    <td>Discover Contactless D-PAS Connect: Card Application Specification</td>
    <td>Available from Discover Implementation Manager</td>
  </tr>
  <tr>
    <td></td>
    <td>Discover D-PAS and D-PAS Connect: Certification Manual for Issuer and Acquirers</td>
    <td>Available from Discover Implementation Manager</td>
  </tr>
  <tr>
    <td></td>
    <td>Discover Contact D-PAS and D-PAS Connect: Issuer Implementation Guide</td>
    <td>Available from Discover Implementation Manager</td>
  </tr>
  <tr>
    <td></td>
    <td>Discover Contactless D-PAS and D-PAS Connect: Issuer Implementation Guide</td>
    <td>Available from Discover Implementation Manager</td>
  </tr>
  <tr>
    <td></td>
    <td>Discover External DGN D-PAS Connect Personalization Profiles Guide</td>
    <td>Available from Discover Implementation Manager</td>
  </tr>
  <tr>
    <td>EMVCoTM Specification</td>
    <td>EMV® Integrated Circuit Card Specifications for Payment Systems, version 4.3, November 2011</td>
    <td>Available from the EMVCoTM website (<a href="https://www.emvco.com/">https://www.emvco.com/</a>)</td>
  </tr>
  <tr>
    <td></td>
    <td>EMV Contactless Specifications for Payment Systems, version 2.6, March 2016</td>
    <td>Available from the EMVCoTM website (<a href="https://www.emvco.com/">https://www.emvco.com/</a>)</td>
  </tr>
</table>




Table 45:  Reference Materials









