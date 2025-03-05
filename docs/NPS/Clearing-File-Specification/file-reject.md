---
sidebar_position: 9
---

#  9.	File Reject Messages
If a clearing file submitted by acquirer is rejected while processing, a rejection file is created. “FileReject” text is appended in filename. Sample is given below:
•	NCHLRAWDATABankA20241101.C1.FileReject.csv

The function code in file header will be changed to 699, however other details in header will be same as original file. 
Original File Header:	1644^601^O^00000004567^20240402^1^I^T
Rejection File Header:	1644^699^O^00000004567^20240402^1^I^T

In between file header and trailer, the line from original file is copied which is causing the file reject. The next line after that will have error code and its description separated by caret (^).
	Field^Value^Error Description

Function code in file trailer will also change to 699, while other details in trailer will remain as original file.
Original File Trailer:	1644^602^2^300.00^2
Rejection File Trailer:	1644^699^2^300.00^2
 

 ## 9.1 Sample File Reject Messages
Below are sample messages for rejection file:

 ### 9.1.1 Duplicate File Reject
1.	File Header
1644^699^O^00000004567^20240402^1^I^T

2.	Record Detail
1644^601^O^00000004567^20240402^1^I^T
File ID^00000004567202404021^Duplicate File ID

3.	File Trailer
1644^699^2^300.00^2

 ### 9.1.2 Invalid Data Value Error File Reject
1.	File Header
1644^699^O^00000004567^20240402^1^I^T

2.	Record Detail

   **2.1	Error line coped from original file** 1240^200^101100^9592605678986058^567345^975568938144^12345678901234	567890123^6011^20240401074516^T001B034B458P503^BANGKOK1                 	BAAC                  BANGKOK      	001TH^500.00^524^500.00^524^^^^^0000000928A^00000004567^00000009289	^00000004567^20240401^^^0^C^0.00^524^0.00^524^0.00^524^C^BankA^B	ankB ^1^5^^^^^A^^(Additional data for future use)

  **2.2 Error Description**
Forwarding ID^0000000928A^Value should be numeric

3.	File Trailer
1644^699^2^500.00^2
 
