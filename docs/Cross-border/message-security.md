---
sidebar_position: 11
---

# 11. Message Security

## 11.1  API Security
We secure our messaging API through the following best practices to reinforce security standard:
1. Token-based Access Control 
2. Digital Signature

### 11.1.1 Authentication and Authorization
The primary API authentication method is via OAuth2 framework using Access Tokens. The OAuth 2.0 authorization framework is a protocol that allows grant a third-party application access to the protected resources, without necessarily revealing their long-term credentials or even their identity. The client needs to provide client specific credentials in the authorization header and user credentials in the body with grant type as password for token generation on first login or during refresh token expiration.  After login with client credentials on first authentication a long-lived refresh token is provided along with access token.

⚠️These tokens contain your API access privileges, so be sure to keep them secret.

### 11.1.2 API Authorization
The generated access token by one of the above methods can be used to access the authenticated routes. This can be done by setting the Authorization HTTP Header value as Bearer [access token]
The default token expiration time is 300 sec for the access token and 12 hours for the refresh token in a test environment. This will be different for the Production environment.
We recommend you have a dynamic way of retrieving new tokens. For example, when the access and refresh tokens are expires, you will receive a 401 unauthorized in the response.
Auth API Endpoints
We provide one primary API endpoints to obtaining the access tokens. This endpoint supports two Authorization Grant methods:

# 11.1.3 API Endpoints and Grant Types

| URL           | Grant Type   | Description                                                |
|---------------|--------------|------------------------------------------------------------|
| /oauth/token  | password     | Retrieve Access Token and Refresh Token using the Client ID and Client Secret |
| /oauth/token  | refresh token| Retrieve Access Token using the corresponding Refresh Token only |


**Sample Request**
```jsx
curl --location --request POST 'http://localhost:9095/oauth/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Basic ZHBhaXNhOkFiY2RAMTIz' \
--data-urlencode 'username=RAJIM' \
--data-urlencode 'password=********' \
--data-urlencode 'grant_type=password'

```
**Response**
```json
{
  "access_token": "d9c98780-0eec-4cdb-8b17-5396414f8017",
  "token_type": "bearer",
  "refresh_token": "4e7de866-ac51-402d-b34a-625a3f5c1647",
  "expires_in": 1799,
  "scope": "read write trust",
  "customerdetails": null
}
```

**Method to generate & use access and refresh token**
1. Use the provided basic authentication credentials along with username/password and grant type as password to obtain a refresh token. Refresh token has validity of 12 hours, so store the refresh token to retrieve the access token further. Do not use the access token obtained during this initial request.
2. Use the stored refresh token obtained from step 1 to generate new access token keeping grant type as refresh token. Access tokens are valid for 300 seconds. Use this access token for resources requests within this period. On expiry of access token re-request using the stored refresh token.
3. On expiry of refresh token, repeat the process from step 1.
4. Now pass this access token while accessing the API resource as a Bearer Token in Authorization header.

###  11.2 Signature Generation
For generating signature, the request body must be signed by the private key of the initiator and must be passed as the customer header with header name as “signature”.
For example:
For the request body:

```json
{
  "tranId": "12345",
  "bankId": "0401",
  "solId": "28",
  "accountId": "2810017501564"
}
```

**Signature will be:** 

```
gVPfVdXSFEPgcp1nAhxbqHtE2bDOUuSR2dApIcjFxMyYrOWZGR0xcsuWuLI+2tuzWTHRv3YjxtGGYb2EctZmgdcD50crEapXFSML0MUR572uSCFUXXuFiHLvJ59hIfn/mQEDSSoUorW3UxKQ6wf6KTTcplYjeV26FqNkAd5s6D4=
```

This must be passed in request header with name **“Message-Signature”** and value as follows:
```
gVPfVdXSFEPgcp1nAhxbqHtE2bDOUuSR2dApIcjFxMyYrOWZGR0xcsuWuLI+2tuzWTHRv3YjxtGGYb2EctZmgdcD50crEapXFSML0MUR572uSCFUXXuFiHLvJ59hIfn/mQEDSSoUorW3UxKQ6wf6KTTcplYjeV26FqNkAd5s6D4=
```

### The sample Java code for generating the signature is

```jsx
	public String signUsingPrivateKey(String plainText, PrivateKey privateKey) throws Exception {
		Signature privateSignature = Signature.getInstance("SHA256withRSA");
		privateSignature.initSign(privateKey);
		privateSignature.update(plainText.getBytes(StandardCharsets.UTF_8));
		byte[] signature = privateSignature.sign();
		return Base64.encodeBase64String(signature);
	}
```

The private Key can be generated from the .pfx file.


Also, the response from NCHL will also contain a signature in the header which must be verified by the respective members. 
The signature can be verified from the public key of NCHL. The public key can be generated from .cer file.
The response signature will also be on header with name **“Message-Signature”**
Here is the sample response signature on header

### The sample Java code for verifying signature is

```jsx
	public boolean verifySignatureUsingPublicKey(String plainText, String signature, PublicKey publicKey) throws Exception { 
		Signature publicSignature = Signature.getInstance( "SHA256withRSA");
		publicSignature.initVerify(publicKey);
		publicSignature.update(plainText.getBytes (StandardCharsets.UTF_8));
		byte[] signatureBytes = Base64.decodeBase64(signature);
		return publicSignature.verify(signatureBytes);
	}
```



For data encryption and decryption,
The mode used is **RSA/None/OAEPWITHSHA-256ANDMGF1PADDING**

Sample code for Encryption and decryption:

**Encryption**
```jsx
	public String encryptData(String data, PublicKey key) {
		try {
			Security.addProvider(new Bouncy CastleProvider());
			Cipher cipher = Cipher.getInstance("RSA/None/OAEPWITHSHA-256ANDMGF1PADDING");
			cipher.init(Cipher.ENCRYPT_MODE, key);
			return Base64.encodeBase64String(cipher.doFinal(data.getBytes(StandardCharsets.UTF_8)));
		} catch (Exception ex) {
			Log.error("Encryption Error ", ex);
			return null;
		}
	}
```

**Decryption**

```jsx
public String decryptData(String data, PrivateKey key) {
    try {
        Security.addProvider(new Bouncy CastleProvider());
        Cipher cipher = Cipher.getInstance("RSA/None/OAEPWITHSHA-256ANDMGF1PADDING");
        cipher.init(Cipher.DECRYPT_MODE,  key);
        return new String(cipher.doFinal(Base64.decodeBase64(data)), StandardCharsets.UTF_8);
    } catch (Exception ex) {
        Log.error(ex.getMessage(), ex);
        return data;
    }
}
```

