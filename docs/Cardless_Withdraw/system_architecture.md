---
sidebar_position: 2
---

# 2. System Architecture
Cardless ATM withdrawal feature would enable BFIs or other technical members to facilitate their customer in withdrawing cash from ATM through channels such as mobile banking, connectIPS and/or any other NPI Integrated issuing instruments.



   ![Example Image](/img/system_architecture_img_cardless.png)
<p align="center" class="centered-caption"></p>


Based on the architecture mentioned above, the cardless ATM withdrawal shall be executed. However, the basic end-to-end transactional workflow of withdrawing cash from ATM using cardless withdrawal feature enabled instruments app for banks associated with Acquirer Network Switch provider is explained as below:

1.	Customer initiates the cardless ATM withdrawal request from his/her issuing apps.  

2.	Upon the request execution, respective channel validates customer based on requested transaction amount and registered mobile number. After successful validation, an OTP is sent to the customer’s registered mobile number.

3.	Customer enters mobile number, withdrawal amount and OTP in ATM terminal. Further the cardless withdrawal request is forwarded to respective acquirer ATM switch. 

4.	ATM switch passes the withdrawal request to Card Network Switch Provider’s middleware. 

5.	Card Network Switch Provider middleware forwards the request to NPI to validate details entered by the customer in ATM terminal. After successful validation of withdrawal request, NPI forwards to the request to issuing bank to debit the customer account corresponding to the original card-less withdrawal request.

6.	 Once the customer debit is successful, RPS switch credits the respective ATM pool account provided by Acquirer bank. 

Upon successful of debit and credit leg of a transaction, cardless middleware engine respond back to the middleware of Acquirer network. Which further instruct ATM terminal to dispense the cash through Acquirer network switch. 







