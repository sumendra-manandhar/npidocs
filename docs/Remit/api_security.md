---
sidebar_position: 2
---

# 2. API Security
## 2.1 API Authentication and Authorization 
OAuth 2.0 API authentication mechanism has been implemented for authentication and authorization process in NPI. The client needs to provide client specific credentials in the authorization header and user credentials in the body with grant type as password for token generation on first login or during refresh token expiration.  
On successful authentication, system will provide access token and refresh token pair. Access tokens are used for accessing the resources and refresh tokens are used for obtaining and renewal of access tokens. Validity of access token is 300 seconds and validity of refresh token is 12 hours (which may vary as per NCHL Security Policy). Access tokens could be obtained by using non-expired refresh tokens in the body with grant type as refresh token. 

**Token Endpoint: (baseurl)/oauth/token** 

## 2.2 Method to generate & use access and refresh token  
1.	Use the provided basic authentication credentials along with username/password and grant type as password to obtain a refresh token. Refresh token has validity of 12 hours for now, so store the refresh token for future access token requests. Do not use the access token obtained during this initial request. 

2.	Use the stored refresh token obtained from step 1 to generate new access token keeping grant type as refresh token. Access tokens are valid for 300 seconds. Use the obtained access token in the authorization header: Bearer {access_token} of all API resources requests within this period. On expiry of access token re-request using the stored refresh token. 

3.	On expiry of refresh token repeat the process from step 1. 

