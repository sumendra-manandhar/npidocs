---
sidebar_position: 10
---

# 10. UI Reference

## 10.1 Consent Flow
### 10.1.1 Inward Consent Flow
User will have to provide an explicit consent to enable xBorder payment from its channel/ device. If
such consent is not available for a VPA, then the first incoming xBorder transfer will initiate such
consent process. However, the issuing instrument/ channel will also have a seprerate consent
workflow available. Upon accepting the consent by the user for such incoming xBorder transaction,
the Payee member will pass mentioned details of the user required for such international remittance
and as part of the Virtual Payment Address (VPA) creation (mentioned in section II). The user’s
consent will then be recorded in NPIx for validation during transaction.

![Example Image](/img/uiux/inward-consent-1.png)
<p align="center" class="centered-caption">Fig: Inward consent.</p>

![Example Image](/img/uiux/inward-consent-2.png)
<p align="center" class="centered-caption">Fig: Inward consent Revoke.</p>

## 10.2. Outward Consent Flow
User will have to provide an explicit consent to enable outward xBorder transfer from its channel/
device. Upon accepting the consent by the user for such outgoing xBorder transaction, the Payer
member will pass mentioned details of the user required for such international remittance and as part
of the Virtual Payment Address (VPA). The user’s consent will then be recorded in NPIx for further
record and transaction processing.

![Example Image](/img/uiux/outward-consent-2.png)
<p align="center" class="centered-caption">Fig: Outward consent.</p>

![Example Image](/img/uiux/outward-consent-1.png)
<p align="center" class="centered-caption">Fig: Outward consent.</p>


## 10.3 Outward xBorder Fund Transfer
### 10.3.1 Outward Fund Transfer with VPA Id
After enabling the xBorder fund transfer option in respective channels, user can initiate outward
xBorder fund transfer using VPA/Proxy address. Following is a reference UI/UX for such transfer.


![Example Image](/img/uiux/outward-transfer-with-vpa.png)
<p align="center" class="centered-caption">Fig: Outward Transfer Using VPA.</p>


### 10.3.2 Outward Fund Transfer via Beneficiary
This option allows user to initiate xBorder outward fund transfer using added beneficiary from the list.

![Example Image](/img/uiux/outward-tranfer-via-ben.png)
<p align="center" class="centered-caption">Fig: Outward Fund Transfer via Beneficiary.</p>

![Example Image](/img/uiux/outward-tranfer-via-ben-1.png)
<p align="center" class="centered-caption">Fig: Outward Fund Transfer via Beneficiary.</p>


## 10.4 Add Beneficiary (Optional)
Before initiating a xBorder outward fund transfer, user shall be provided with an option to add
Beneficiary along with the necessary beneficiary information. This will enable the user to perform quick
fund transfers based on added beneficiary. This is an optional workflow.

![Example Image](/img/uiux/add-ben.png)
<p align="center" class="centered-caption">Fig: Add Beneficiary (Optional)</p>

![Example Image](/img/uiux/add-ben-1.png)
<p align="center" class="centered-caption">Fig: Add Beneficiary (Optional)</p>