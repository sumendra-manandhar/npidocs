---
sidebar_position: 8
---

# 8. File Trailer Field Description


Clearing file have only one file trailer at the end of a file.
Example: 
1644^602^2^300.00^2
Trailer field contains fixed value for MTI (1644) and function code (602) but the other field values may vary.
Description for each field of the file trailer is as follows,

 ## 8.1 	MTI (Message Type Identifier)
MTI specifies the type of transaction/record such as header/trailer, financial, non-financial, dispute etc. MTI is placed at the beginning of the transaction i.e. each transaction/record in the file should start with the MTI.






<table border="1">
    <tr>
        <td>Position:</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Length:</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Data Type:</td>
        <td>Numeric</td>
    </tr>

  </table>



<table border="1">
    <thead>
        <tr>
            <th>MTI</th>
            <th>Transaction Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="4">1644</td>
            </tr>
        <tr>
            <td>File Trailer</td>
            </tr>
        <tr>
            <td>Reject File Trailer</td>
        </tr>
        <tr>
            <td>Settlement Summary Trailer</td>
        </tr>
    </tbody>
</table>



Table 12: File Trailer MTI Matrix



## 8.2 Function Code
Function code specifies the type of functionality used for a transaction/record. MTI can have multiple 
function codes



<table border="1">
    <tr>
        <td>Position:</td>
        <td>2</td>
    </tr>
    <tr>
        <td>Length:</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Data Type:</td>
        <td>Numeric</td>
    </tr>

  </table>



<table>
    <thead>
        <tr>
            <th>MTI</th>
            <th>Function Code</th>
            <th>Transaction Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1644</td>
            <td>602</td>
            <td>File Trailer</td>
        </tr>
        <tr>
        <td>1644</td>
            <td>605</td>
            <td>Settlement Summary Trailer</td>
        </tr>
        <tr>
        <td>1644</td>
            <td>699</td>
            <td>Reject File Trailer</td>
        </tr>
    </tbody>
</table>



Table 13: File Trailer Function Code Matrix


 ## 8.3 Total Batch Count
Total batch count specifies the total number of batches available in the file.




<table border="1">
    <tr>
        <td>Position:</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Length:</td>
        <td>8</td>
    </tr>
    <tr>
        <td>Data Type:</td>
        <td>Numeric</td>
    </tr>

  </table>



## 8.4 Total Amount
Total amount specifies the total amount of all the transactions within the file.




<table border="1">
    <tr>
        <td>Position:</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Length:</td>
        <td>20(length is inclusive of dot and decimal digits)</td>
    </tr>
    <tr>
        <td>Data Type:</td>
        <td>Numeric with 2 decimal places (Example: 543000.00)
umeric</td>
    </tr>

  </table>




 ## 8.5 Total Count
Total count specifies the total number of transactions available in the file excluding header and 
trailer




<table border="1">
    <tr>
        <td>Position:</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Length:</td>
        <td>8</td>
    </tr>
    <tr>
        <td>Data Type:</td>
        <td>Numeric</td>
    </tr>

  </table>


