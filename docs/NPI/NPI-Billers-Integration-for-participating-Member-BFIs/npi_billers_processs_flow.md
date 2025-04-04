---
sidebar_position: 2
---

# 2 NPI Billers Process Flow
  
  
  ## 2.1.Process Flow Diagram


 ![Example Image](/img/NPI_Billers_Process_Flow.png)
<p align="center" class="centered-caption"></p>

**Diagram: NPI Billers Process Flow**


## 2.2. Process Flow

1. The third-party app opens the NPI Billers web URL with the required parameters.

2. NPI Billers validates these parameters and displays the biller form.

3. The user completes and submits the form, after which NPI Billers performs both frontend 
and backend validations.

4. Upon successful validation, a confirmation page with transaction details is presented.

5. Once the user confirms, NPI Billers sends session and transaction information back to the 
third-party app.

6. The third-party app then prompts the user to authorize the transaction using a transaction 
PIN or biometric verification.

7. After successful user authorization, the third-party app backend posts the payment using the 
NPI /api/npibiller/confirmbillerpay.do API.

[/api/npibiller/confirmbillerpay.do](./docs_npi/NPI/NPI-Billers-Integration-for-participating-Member-BFIs/npi_billers_processs_flow)
  




