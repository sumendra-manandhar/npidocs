---
sidebar_position: 10
---

# 10. File Settlement Summary
Whenever a clearing file submitted by acquirer is processed successfully, a settlement summary file is created. “SettlementSummary” text is appended in filename. Sample is given below:

•	NCHLRAWDATABankA20241101.C1.SettlementSummary.csv

The function code in file header will be changed to 605, however other details in header will be same as original file. 
Original File Header:			1644^601^O^00000004567^20240402^1^I^T
Settlement summary File Header:	1644^605^O^00000004567^20240402^1^I^T

In between file header and trailer, each new line is created according to settlement currency and transaction code for which the settlement is done successfully. 

	Currency Code^Sequence Number^Transaction Code^Total Amount^Total Count

Example:

	524^1^05^10000.00^100

	524^2^25^5000.00^40

Function code in file trailer will also change to 605, while other details in trailer will remain as original file.

Original File Trailer:			1644^602^2^15000.00^140

Settlement summary File Trailer:	1644^605^2^15000.00^140

 ## 10.1 Sample File Summary Messages
Below is the sample message for settlement summary file:

**1.File Header**

1644^605^O^00000004567^20240402^1^I^T

**2.	Record Detail**

**3.**

356^1^05^5000.00^2

524^2^05^10000.00^1

524^3^25^5000.00^4

524^4^07^10000.00^10

840^5^05^10000.00^100

840^6^25^5000.00^40

**4.	File Trailer**

1644^605^3^45000.00^157


