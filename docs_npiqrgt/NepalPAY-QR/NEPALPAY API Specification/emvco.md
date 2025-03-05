---
sidebar_position: 2
---


# 2. EMVCo & NepalQR
According to the EMV QRCPS, the data within a QR code are organized in a tree-like structure of data
objects. A data object may be a primitive data object or a template. A template may include other
primitive data objects and templates.


Each data object is made up of three individual fields. The first field is an identifier (ID) by which the data
object can be referenced. The second field is a length field that explicitly indicates the number of
characters included in the third field, i.e. the value field. A data object therefore comprises of the
followings:


• ID field, which is coded as a two-digit numeric value, with a value ranging from "00" to "99"

• Length field, which is coded as a two-digit numeric value, with a value ranging from "01" to "99"

• Value field, which has a minimum length of one character and maximum length of 99 characters.

A NEPALPAY QR code can support multiple payment operators, where individual BFI or payment
service provider may define their own structures of merchant account information and make use of the
common data fields, such as transaction currency and amount, contained in the NEPALPAY QR code.
NepalQR Merchant-Presented QR Code is as per EMV standard with QR scheme operators identified
through the use of IDs “02” to “25” for the EMVCo payment operators and IDs “26” to “51” for any
operators, identified as Other Network. Individual payment operators may also include some proprietary
data in the Additional Merchant Information data objects.
