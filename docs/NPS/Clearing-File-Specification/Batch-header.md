---
sidebar_position: 5
---

 # 5. Batch Header Description
Clearing file have multiple batches as per transaction codes. Fields are separated by caret (^).

Example: 
1664^601^1^25

Batch header field contains MTI, batch function code, sequence number and transaction codes which varies as per transaction types.

Description for each field of the batch header is as follows,


## 5.1 MTI (Message Type Identifier)

MTI for batch header is always starts with 1664



<table border="1">
    <tr>
        <td>Position</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Max Length</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Data Type</td>
        <td>Number</td>
    </tr>

 </table>



 ## 5.2 Batch Header Function Code
601 is the function code for batch header.


<table border="1">
    <tr>
        <th>Field</th>
        <th>Description</th>
        <th>Max Length</th>
        <th>Data Type</th>
        <th>Value</th>
    </tr>
    <tr>
        <td>MTI</td>
        <td>Batch Identifier</td>
        <td>4</td>
        <td>Number</td>
        <td>1664</td>
    </tr>
</table>


 ## 5.3 Batch Sequence Number
Batch sequence number is a sequence number given for each batch. The sequence number is in 
incremental order in each batch in a file.





<table border="1">
    <tr>
        <td>Position</td>
        <td>3</td>
    </tr>
    <tr>
        <td>Max Length</td>
        <td>8</td>
    </tr>
    <tr>
        <td>Data Type</td>
        <td>Numeric</td>
    </tr>

 </table>


 ## 5.4 Transaction Code
Transaction Code indicates whether a transaction is original or reversal or dispute transactions type. 


<table border="1">
    <tr>
        <td>Position</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Max Length</td>
        <td>2</td>
    </tr>
    <tr>
        <td>Data Type</td>
        <td>String</td>
    </tr>

 </table>


<table border="1">
    <tr>
        <th>Code</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>05</td>
        <td>Sales</td>
    </tr>
    <tr>
        <td>25</td>
        <td>Sales Reversal</td>
    </tr>
    <tr>
        <td>06</td>
        <td>Credit Voucher (Manual)</td>
    </tr>
    <tr>
        <td>26</td>
        <td>Credit Voucher Reversal (Manual)</td>
    </tr>
    <tr>
        <td>07</td>
        <td>Cash Disbursements</td>
    </tr>
    <tr>
        <td>27</td>
        <td>Cash Disbursement Reversal</td>
    </tr>
    <tr>
        <td>08</td>
        <td>Refund</td>
    </tr>
    <tr>
        <td>28</td>
        <td>Refund Reversal</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Sales Dispute Financial</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Credit Voucher Dispute Financial (Manual)</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Cash Disbursement Dispute Financial</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Refund Dispute Financial</td>
    </tr>
    <tr>
        <td>35</td>
        <td>Sales Dispute Financial Reversal</td>
    </tr>
    <tr>
        <td>36</td>
        <td>Credit Voucher Dispute Financial Reversal (Manual)</td>
    </tr>
    <tr>
        <td>37</td>
        <td>Cash Disbursement Dispute Financial Reversal</td>
    </tr>
    <tr>
        <td>38</td>
        <td>Refund Dispute Financial Reversal</td>
    </tr>
    <tr>
        <td>45</td>
        <td>Non-Financial Transactions</td>
    </tr>
    <tr>
        <td>46</td>
        <td>AFT</td>
    </tr>
    <tr>
        <td>47</td>
        <td>OCT</td>
    </tr>
    <tr>
        <td>56</td>
        <td>AFT Reversal</td>
    </tr>
    <tr>
        <td>57</td>
        <td>OCT Reversal</td>
    </tr>
</table>
Table 8: Transaction Code

