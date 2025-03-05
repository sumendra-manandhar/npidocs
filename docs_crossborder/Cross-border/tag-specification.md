---
sidebar_position: 9
---

# 9. Tag Specifications
# 9.1 Request Response Specifications
Table below is to be referred along with the sample JSON request response provided above:

| Data Items            | Type | Length         | Required | Remarks                                                | Occurrence |
|-----------------------|------|----------------|----------|--------------------------------------------------------|------------|
| participantCode       | A    | 10             | Y        | Unique code assigned to each xBorder participant      | Customer-validation |
| participantService    | A    | 10             | Y        | Service code allowed to consume by each participant  | Customer-validation |
| requestUniqueId       | AN   | 35             | Y        | Unique Request Id with specific format: Participant Code followed by unique Id | Customer-validation |
| amount                | N    |                | Y        | Transaction Amount                                   | Customer-validation |
| purpose               | AN   | 10             | Y        | Purpose code                                          |            |
| remarks               | AN   | Min:10 Max: 50 | Y        | Customer remarks of transaction                     |            |
| currency              | A    | 3              | Y        | Currency Code: NPR|INR                               |            |
| payerDetail           | O    |                |          |                                                        |            |
| name                  | A    | Min: 5, Max: 50| Y        | Full name of payer/Payer                             |            |
| type                  | A    | 20             | Y        | PERSON|ORGANIZATION                                  |            |
| accountType           | A    | 10             | Y        | VPA|ACCOUNT                                          |            |
| accountDetail         | O    |                |          |                                                        |            |
| vpa                   | AN   | 30             | Y        | Customer’s virtual payment address followed by @ bank handle |            |
| accountNumber         | AN   | 50             | C        | Account Number of customers                         |            |
| bankCode              | AN   | 20             | C        | Bank code                                            |            |
| identificationType    | A    | 20             | Y        | CTZN|PASSPORT|PAN|NID                                |            |
| identificationNumber  | AN   | 30             | Y        | Identification Number of Customer                   |            |
| address               | O    |                |          |                                                        |            |
| country               | A    | 20             | Y        | Name of payer’s Country                              |            |
| city                  | A    | 30             | Y        | Name of payer’s City                                 |            |
| location              | AN   | 30             | Y        | Name of payer’s location                             |            |
| deviceInformation     | O    |                |          |                                                        |            |
| mobile                | AN   | 15             | Y        | Mobile number of payers in +977- 9800000000 format  |            |
| geoCode               | AN   | 30             | Y        | nn.nnnn,nn.nnnn format                               |            |
| location              | AN   | 30             | Y        | Current location of payer                            |            |
| ip                    | AN   | 20             | Y        | Current IP address of Device from where transaction is initiated. |          |
| os                      | AN   | 30             | Y        | Operating system of device                          |            |
| teleCom                 | AN   | 30             | O        | Name of telecom service provider                    |            |
| payeeDetail             | O    |                |          |                                                        |            |
| type                    | A    | 10             | Y        | PERSON|MTO|ORGANIZATION                            |            |
| accountType             | A    | 10             | Y        | VPA|ACCOUNT Fixed keywords                        |            |
| accountDetail           | O    |                |          |                                                        |            |
| vpa                     | AN   | 30             | Y        | Payee Virtual Payment Address                      |            |
| accountNumber           | AN   | 30             | C        | Account Number of payee agent                     |            |
| bankCode                | AN   | Min: 5, Max: 20| Y        | Bank code of Payee Agent                           |            |
| payeeRelationShip       | AN   | 5              | C        | Payee relationship – if participant add flow is not implemented |            |
| mobileNumber            | AN   | 15             | O        | Payee mobile number.                               |            |
| email                   | AN   | 30             | O        | Payee Mobile Number                                |            |
| ValCust Response        |      |                |          |                                                        |            |
| orgRequestUniqueId      | AN   | 35             |          | Origination Transaction Id                         | ValCust Response |
| validationTraceId       | AN   | 35             |          | Id generated from network used for transaction reconciliation |            |
| chargeAmount            | N    |                |          | Charge Amount                                       |            |
| conversionRate          | N    |                |          | Conversion Rate                                     |            |
| Payment Request/Response|      |                |          |                                                        |            |
| debitStatus             | A    | 3              |          | Debit status                                        |            |
| creditStatus            | A    | 3              |          | Credit Status                                       |            |
| customerValidatedDate   | D    |                |          | Customer validation Date and Time                  |            |
| transactionRequestDate  | D    |                |          | Transaction requested Date                         |            |
|                         |      |                |          | Format: YYYY-MM-DD HH:MM: SSS                      |            |
| transactionDate         | D    |                |          | Actual Transaction Date                            |            |
| Charge and Limit        |      |                |          |                                                        |            |
| service                 | AN   | 4              | Y        | Transaction service code                           | Charge and Limit Req |
| instrument              | A    | 10             | Y        | Transaction Instrument Fixed Values: CIPS|MB|IBANK|WALLET |            |
| purposeCode             | AN   | 10             | C        | Transaction purpose code                           |            |
| mcc                     | AN   | 10             | C        | MCC code                                            |            |
| chargeType              | A    | 10             |          | Charge Type Fixed Values: SLAB|PERCENT|RANGE      |            |
| Charge and Limit Resp   |      |                |          |                                                        |            |
| minTxnAmount            | N    |                |          | Min Transaction Amount                             |            |
| maxTxnAmount            | N    |                |          | Max Transaction Amount                             |            |
| maxChargeAmount         | N    |                |          | Max Charge Amount per transaction                 |            |
| minChargeAmount         | N    |                |          | Min Charge Amount applicable per transaction.      |            |
| minAmount               | N    |                |          | Min Transaction Amount for charge calculation     |            |
| maxAmount           | N    |              |          | Max Transaction Amount for charge Calculation    |                      |
| chargePercent       | N    |              |          | If charge type is of PERCENTAGE, then charge calculation will be based on this value. |                      |
| count               | N    |              |          | Transaction Limit count                          |                      |
| amount              | N    |              |          | Transaction Limit Amount                         |                      |
| limitExceeded       | B    |              |          | Boolean if true transaction limit is exceeded.   |                      |
| consentRequired     | B    |              |          | If consent is not provided by payee agent for xBorder payment than this field will be set to true. | Customer KYC         |
| consentUniqueId     | AN   | 35           | C        | Unique Id used to uniquely identify consent request |                      |
| payerName           | A    | 50           | C        | Payer Name in consent notification request      |                      |
| payerVPA            | AN   | 30           | C        | Payer VPA                                         |                      |
| payeeVPA            | AN   | 30           | C        | Payee VPA                                         |                      |
| payeeName           | A    | 50           | C        | Payee Name                                        |                      |
| payerMobileNumber   | AN   | 15           | C        | Payer Mobile Number                              |                      |
| fullName            | A    | 50           |          | Full Name of Customer against VPA.               | Customer KYC Resp    |
| accountNumber       | AN   | 30           |          | Payee’s Bank account Number                      |                      |
| documentNumber      | AN   | 30           |          | Payee’s identity document number                 |                      |
| documentType        | AN   | 30           |          | Payee’s identity document Type: CTZN|PASSPORT|DRIVING_LICENCE |                      |
| permanentAddress    | AN   | MAX:100      |          | Payee’s permanent Address                        |                      |
| temporaryAddress    | AN   | MAX:100      |          | Payee’s Temporary Address                        |                      |
| type                | AN   | 20           |          | Payee’s type: PERSON|ORGANIZATION                |                      |
| riskScore           | AN   | 30           |          | Payee’s Risk Score                                |                      |
| direction           | A    | 10           | Y        | Transaction’s direction: INWARD|OUTWARD|BOTH      | Consent Enable API   |
| consent             | A    | 10           | Y        | Consent value: Fixed: APPROVED|DECLINED           |                      |
| uniqueTransactingId | AN   | 30           | Y        | Unique Transacting Id like account number in case of bank and mobile number or email in case of PSP. |                      |




**NOTE:** **AN**: Alphanumeric, **A:** Alphabetic, **N:** Numeric, **O:** Object, **B:** Boolean, **D:** Date & Time, **Y:**
Required, **O:** Optional, **C:** Conditional


**Error Codes:** Generic Error codes for xBorder payment are as follows where error code starting with
B are business errors and starting with E are transactional errors.

**SUCCESS** ("000", "Success"),

**ERROR** ("999", "Error"),

// technical errors

**SIGNATURE_MISMATCHED** ("E001", "Signature mismatched.")

**BANK_NOT_REACHABLE** ("E002", "Bank Not reachable.")

**ACCOUNT_VALIDATION_FAILED** ("E003", "Account Validation Failed.")

**PARTICIPANT_DETAIL_NOT_FOUND** ("E004", "Participant not found.")

**TRANSACTION_NOT_FOUND** ("E005", "Transaction detail not found.")

// business Errors

**TRANSACTION_LIMIT_EXCEEDED** ("B001", "Transaction limit exceeded."),

**INVALID_MIN_AMOUNT** ("B002", "Invalid Min transaction amount."),

**INVALID_MAX_AMOUNT** ("B003", "Invalid Max transaction amount."),

**INVALID_CHARGE_AMOUNT**("B004", "Invalid Charge amount."),

**INVALID_ACCOUNT**("B005", "Invalid Account information."),

**ACCOUNT_DETAIL_NOT_FOUND**("B006", "Account information not found.")