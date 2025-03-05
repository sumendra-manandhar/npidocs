---
sidebar_position: 2
---


# 2. System Architecture
## 2. System Architecture and Process Flow
### 2.1 System Architecture
The integration of NCHL’s National Payments Interface (NPI) and NPCI’s Unified Payment
Interface (UPI) will enable both xBorder Inward and Outward fund transfers initiated from the
respective channels like mobile banking, issuing app, internet banking or bank branches.
The xBorder fund transfer transaction will involve domestic leg in Nepal and international leg in
the foreign jurisdiction. NPIx that is an extension of the existing National Payment Interface (NPI)
will be responsible for all kinds of international communications with iUPI of UPI of India. All
domestic processes of xBorder transfer including interconnection with the participants will be
handled by NPI itself.

![Example Image](/img/xBorder_Process_Architecture.png)
<p align="center" class="centered-caption">Fig: An example image for demonstration purposes.</p>

## 2.2 xBorder Inward Transfer
The xBorder inward transfer deals with the inward fund transfer to Payee (Receiver) in Nepal
through a Payer (Sender) in India.
### 2.2.1 Inward Non-Financial Flow
In non-financial leg, activities related to compliance screening, customer validation and limit
checks are performed to ensure the authenticity & validity of the transactions being performed.

![Example Image](/img/Sequence_Diagram_Inward_Non-Financial_Leg.png)
<p align="center" class="centered-caption">Fig: Sequence Diagram: Inward Non-Financial Leg.</p>

<u>Steps</u>

1. Payer initiates a fund transfer using UPI enabled applications of their Payer Bank.
2. Payer Bank transmits the payment request to UPI system.
3. NPCI’s iUPI routes the request to NPIx for the purpose of screening and validation.
4. NPIx verifies the request's authenticity and transfers it to NPI for further processing.
5. Beneficiary bank conducts essential account validation and confirms consent.
6. The bank also performs the necessary AML and CFT checks. For the case of Nepal-India, the
   compliance screening bank and beneficiary bank will be the same.
7. The validation response is then sent by the beneficiary bank to NPI.

### 2.2.2 Inward Financial Flow
Financial Flow starts after successful validation of payer and payee details in the non-financial
leg.

![Example Image](/img/Sequence_Diagram_Inward_Financial_Leg.png)
<p align="center" class="centered-caption">Fig: Sequence Diagram: Inward Financial Leg.</p>

<u>Steps</u>

1. Once the payer's account is successfully validated by iUPI, it will authorize the fund transfer.
2. Payer Bank sends a transfer request to UPI to initiate an international transfer process.
3. NPCI’s iUPI routes the request to NPIx for a fund transfer.
4. NPIx verifies the request's authenticity and then passes to NPI for further processing.
5. After validation for transfer limits and others, NPI routes the request to RPS switch.
6. NPI commences the credit transaction in the beneficiary.
7. After the credit at beneficiary is completed, NPI send a response to NPIx.
8. NPIx gathers the necessary details to create a payment response for iUPI of NPCI.
9. iUPI, after necessary validation, relays the response to its payer's bank.
10. The payer's bank delivers the final payment confirmation to the payer.

## 2.3 xBorder outward transfer
The xBorder outward transfer deals with the outward fund transfer from a Payer (Sender) in Nepal
to Payee (Receiver) in India.
### 2.3.1 Outward Non-Financial Leg
The Non-Financial leg involves activities such as customer validation, compliance screening, and
limit checks are performed to ensure the authenticity of the transactions being performed, as
presented in the sequence diagram below.

![Example Image](/img/Sequence_Diagram_Outward_Non-Financial_Leg.png)
<p align="center" class="centered-caption">Fig: Sequence Diagram: Outward Non-Financial Leg.</p>

<u>Steps</u>

1. Fund transfer process is initiated by a customer (Payer) by using any of the issuing
   instruments provided by its bank.
2. Payer bank transfers the customer's request to NPIx, which subsequently sends a validation
   request to iUPI.
3. iUPI validates the request message and the it forwards the transfer message to its payee bank
   for necessary AML and CFT checks as per its arrangement.
4. Following successful validation of the Payee account, iUPI sends a response back to NPIx for
   initiating a financial leg.
5. NPIx then routes the response to payer's bank, which in turn communicates the validated
   response to the Payer.

### 2.3.2 Outward Financial Leg
Financial leg starts after successful validation of payer and payee details in the non-financial leg.

![Example Image](/img/Sequence_Diagram_Outward_Financial_Leg.png)
<p align="center" class="centered-caption">Fig: Sequence Diagram: Outward Financial Leg.</p>

<u>Steps</u>

1. After the non-financial validating of the customer, the payer authorizes the fund transfer.
2. Payer Bank routes the request to NPI to commence a xBorder transfer process.
3. NPIx conducts the limit and other checks before routing the request to RPS switch.
4. RPS switch initiates a debit instruction to payer's bank & credit instructions to settlement bank.
5. Following successful debit and credit transaction in Nepal leg, an international fund transfer
   request is sent to the Payee Bank through NPIx to iUPI.
6. Payee bank's account is credited once the fund transfer request is successfully validated at
   UPI end. A credit confirmation is then relayed from the Payee Bank to NPIx through iUPI.
7. NPIx forwards the confirmation response to the Payer Bank via NPI.
8. The Payer Bank provides payment confirmation to the payer, completing the process.


## 2.4 xBorder Settlement Process
### 2.4.1 xBorder Settlement and Correspondent Arrangement
The xBorder transactions settlement will be done through a correspondent arrangement between
settlement bank(s) in Nepal and its corresponding bank in India. The settlement bank in Nepal is
required to pre-fund its Nostro account at the corresponding Indian bank in INR currency before
initiating any xBorder transactions. The pre-funding mechanism will be as per the existing
correspondent arrangement between settlement bank in Nepal and its corresponding bank in
India. A necessary authorization will be provided by such settlement bank in Nepal to make
necessary entries in its internal account against its Vostro account.
Technical arrangement will be capable to handle multiple settlement banks in Nepal,
corresponding to which the implementation of multiple correspondent banks will be based on
mutually discussion/ engagement with NPCI.
### 2.4.2 xBorder Transactions Settlement
The domestic settlement for xBorder transactions between participating BFIs and settlement bank
will be managed by the respective networks on both Nepal and Indian sides. NCHL will handle the
domestic settlement of participants BFIs using RTGS system, corresponding to which individual
transactions will be processed through RPS, which is backed by settlement guarantee fund.
### 2.4.3 xBorder Settlement Process Flow

![Example Image](/img/xBorder_Settlement_Process.png)
<p align="center" class="centered-caption">Fig: xBorder Settlement Process.</p>