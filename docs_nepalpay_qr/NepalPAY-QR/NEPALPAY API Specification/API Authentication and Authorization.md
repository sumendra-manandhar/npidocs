---
sidebar_position: 8
---

# 8. API Authentication and Authorization

OAuth 2.0 API authentication mechanism has been implemented for authentication and authorization
process in NPI. The client needs to provide client specific credentials in the authorization header and
user credentials in the body with grant type as password for token generation on first login or during
refresh token expiration.
On successful authentication, system will provide access token and refresh token pair. Access tokens
are used for accessing the resources and refresh tokens are used for renewal of access tokens. Validity
of access token is 30 seconds and validity of refresh token is 12 hours (which may vary as per NCHL
Policy). Access tokens could be obtained by using non-expired refresh tokens in the body with grant
type as refresh token.

***Method to generate & use access and refresh token***
1. Use the provided basic authentication credentials along with username/password and grant type as
password to obtain a refresh token. Refresh token has validity of 12 hours for now, so store the
refresh token for future access token requests. Do not use the access token obtained during this
initial request.
2. Use the stored refresh token obtained from step 1 to generate new access token putting grant type
as refresh token. Access tokens are valid for 300 seconds. Use the obtained access token for
resources requests within this period. On expiry of access token re-request using the stored refresh
token.
3. On expiry of refresh token, repeat the process from step 1.
4. Now pass this access token while accessing the API resource as a Bearer Token in Authorization
header.

***POST URL*** :<hostname: port /oauth/token

echo `echo -ne 'basicusername:basicpassword' | base64`

***Obtain Refresh Token***
***Request:***
```json
    curl --location --request POST 'http://hostname:port/oauth/token' \
    --header 'Authorization: Basic YmlzaGFsOkFiY2RAMTIz' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'username=client_usenrame\
    --data-urlencode 'password=client_password\
    --data-urlencode 'grant_type=password
```

***Response***
```json
    {
        "access_token": "7cef3fca-6862-4a88-8d26-c056bef96662",
        "token_type": "bearer",
        "refresh_token": "ba0d526b-41dd-4d5f-af09-a148aec459d9",
        "expires_in": 299,
        "scope": "read write trust",
        "customerdetails": null
    }
```

***Obtain Refresh Token***
***Request:***
```json
    curl --location --request POST 'http://hostname:port/oauth/token' \
    --header 'Authorization: Basic YmlzaGFsOkFiY2RAMTIz' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'grant_type=refresh_token' \
    --data-urlencode 'refresh_token=1c9fd9f7-08e0-42c1-90f9-09322e8419d7'
```

***Response***
```json
{
    "access_token": "5daf505e-3960-44ad-9ff7-b0403c016cce",
    "token_type": "bearer",
    "refresh_token": " ba0d526b-41dd-4d5f-af09-a148aec459d9",
    "expires_in": 299,
    "scope": "read write trust",
    "customerdetails": null
}
```

***Access API resource with access token***
```json
    curl --location --request POST 'http://hostname:port/customer/account/link/validate ' \
    --header 'Authorization: Bearer ba0d526b-41dd-4d5f-af09-a148aec459d9' \
    --header 'Content-Type: application/json'
```


***Decryption Mechanism***

1. Decrypt with issuer private certificate.
2. Decryption algorithm is: RSA/ECB/OAEPWITHSHA-256ANDMGF1PADDING
3. Base64ToByteArray

***Encryption Mechanism***
1. Encrypt with network (NEPALPAY) public certificate (NPI.cer).
2. Encryption algorithm is: RSA/ECB/OAEPWITHSHA-256ANDMGF1PADDING
3. ByteArray2Base64

