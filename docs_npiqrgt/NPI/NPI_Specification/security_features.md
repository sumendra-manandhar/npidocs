---
sidebar_position: 4
---

# 4. Security Features / Source Authentication
## 4.1 Network Layer (L2 VPN and Source IP whitelisting) 

All the NPI members will be connected with NCHL using the layer 2 VPN. In special cases, whereby 
such service providers could not be on-boarded on L2, then L3 SSL VPN may be established. After 
completing the VPN setup, a private IP (Within the network IP pool of NCHL) will be assigned to the 
application server of the service seeking client from which NCHL NPI will be receiving request traffic 
from. 
 
### 4.2. API Layer (Basic/User authentication and Access/Refresh token to get the API resources) 

OAuth 2.0 API authentication mechanism has been implemented for authentication and authorization 
process in NPI. The client needs to provide client specific credentials in the authorization header and 
user credentials in the body with grant type as password for token generation on first login or during 
refresh token expiration. 
On successful authentication, system will provide access token and refresh token pair. Access tokens 
are used for accessing the resources and refresh tokens are used for renewal of access tokens. Validity 
of access token is 300 seconds and validity of refresh token is 12 hours (which may vary as per NCHL 
Policy). Access tokens could be obtained by using non-expired refresh tokens in the body with grant 
type as refresh token. 


### 4.3. Accounting Layer (Whitelisting of Source Debtor Account) 
Each member who has subscribed to NPI, will have to provide its debtor account as a source account 
from which it shall initiate transactions. Such an account needs to be provided to NCHL by the account 
holding bank of the member in proper letter head under heading “Debit Authorization Letter”. If a member 
wishes to add another account from the same bank or another bank, then similar approach is to be 
followed. After whitelisting the account, the member is only allowed to debit its account for transaction 
from that particular account only. In addition to debit account, a debit cap is applied to the member with 
a certain value amount which limits the maximum ceiling under which the member can debit its account 
for a particular bank. Such a debit cap is applied to all the banks under which the member is associated. 
However, in case whereby direct customer account to be debited for example transaction initiated from 
bank’s mobile and internet banking where no account whitelisting is required in NPI.

### 4.4 Message/Token Signing 
Message/token signing in API integration is a crucial security mechanism that involves adding a unique 
digital signature token to each request and response payload, ensuring the authenticity, non-repudiation
and integrity of the transmitted data. This process relies on cryptographic algorithms and shared keys to 
generate and verify these signatures, preventing unauthorized access, data tampering, and enhancing 
trust between NPI and its members.
A signature token is generated taking the financial information from the request & response payload.
The token is further digitally signed by the client’s private key (pfx) using SHA256withRSA algorithm. 
The resulting signed token is encoded in base 64 format and include in “token” tag within request and 
response payloads.




