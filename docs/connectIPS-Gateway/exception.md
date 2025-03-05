---
sidebar_position: 7
---
# 7. Exception Handling

i. For 403 session expired response after entering captcha: Check if the browser is blocking cookies of 
connectIPS. 

ii. For 403 session expired response after entering OTP: Redirection URLs are not set. For that, provide 
success URL and failure URL as described in section 3.6 to connectIPS integration support team. 

iii. For 401 unauthorized response in validatetxn or gettxndetails api: Check if the entered credentials for 
basic authentication are correct. 

iv. Check if the values being passed are under the character limitations as described in section 3.2.

v. TXNID must be unique in every post request in each session. connectIPS will check if a duplicate 
transaction is being sent to avoid double payment. In this event also, you will get 403 response citing 
“Dear customer, it seems you are trying to make multiple gateway payments at once...”. 

vi. For test user account creation, please contact connectIPS technical support team via email. 

vii. For further details, contact connectIPS technical support team via email with your query and proper 
screenshots/screen recordings if necessary. 