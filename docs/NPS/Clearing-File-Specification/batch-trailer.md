---
sidebar_position: 7
---

# 7.Batch Trailer Description
For each batch header, there will be a batch trailer. Each batch trailer starts with 1664 and field are separated by caret (^).
Example: 
1664^602^05^500.00^1
Batch trailer comprised of MTI, function code, transaction code, total batch amount and total batch count. Description for each field of the batch trailer is given below.

 ## 7.1	MTI (Message Type Identifier)
MTI for batch trailer is always 1664


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
        <td>Number</td>
    </tr>

  </table>






## 7.2 Batch Trailer Function Code
602 is function code for batch trailer.



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




 ## 7.3 Transaction Code
Transaction code for batch trailer is same as batch header.





<table border="1">
    <tr>
        <td>Position:</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Length:</td>
        <td>2</td>
    </tr>
    <tr>
        <td>Data Type:</td>
        <td>Number</td>
    </tr>

  </table>



 ## 7.4 Total Amount
Total amount specifies the total amount of all the transactions within the file.




<table border="1">
    <tr>
        <td>Position:</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Length:</td>
        <td>20 (length is inclusive of dot and decimal digits)
</td>
    </tr>
    <tr>
        <td>Data Type:</td>
        <td>Numeric  with 2 decimal places (Example: 543000.00)
 </td>
    </tr>

  </table>



 ## 7.5 Total Count
Total count specifies the total number of transactions available in the file excluding header and 
trailer.


 
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








