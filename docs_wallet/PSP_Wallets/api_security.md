---
sidebar_position: 2
---

# 2. API Security
The load wallet messaging APIs are secured through best industry practices to reinforce the security standard as described below.

1.	Basic Authentication
2.	Digital Signature (Signature Header)

Basic authentication with a payload signature in a header typically involves combining HTTP Basic Authentication for user credentials and adding a signature to the request payload for integrity verification. This approach enhances the security of API requests by ensuring that both the sender and content of the request can be trusted and verified.

**HTTP Basic Authentication:** HTTP Basic Authentication involves sending a base64-encoded username and password in the Authorization header of the HTTP request. The server then verifies these credentials against its user database.

**Header Format:**
Authorization: Basic <base64(username:password)>
**Example:**
Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
Here, QWxhZGRpbjpvcGVuIHNlc2FtZQ== is the base64 encoding of username:password

**Payload Signature in a Header:** 
To ensure the integrity of the data payload (data being sent in the request), add a base64 encoded signature to the request headers. This signature is typically computed using a shared secret key between the client and server.
    
 **Header Format:**

X-Signature: signature

**Example:** Suppose you have a payload in JSON format like this:
```json
{
  "username": "hari shrestha",
  "action": "print",
  "data": {
    "message": "Hello Wallet!"
  }
}
```
**Steps to generate payload signature (client side)**
1.	Generate RSA key pair (private and public).
2.	Sign the entire payload using SHA256 with RSA algorithm.
3.	Encode the signature to base64.
4.	Send the base64-encoded signature in headers.

This method ensures the integrity and authenticity of the payload, leveraging the security of RSA and the SHA256 hashing algorithm.

**Sample security token**

gVPfVdXSFEPgcp1nAhxbqHtE2bDOUuSR2dApIcjFxMyYrOWZGR0xcsuWuLI+2tuzWTHRv3YjxtGGYb2EctZmgdcD50crEapXFSML0MUR572uSCFUXXuFiHLvJ59hIfn/mQEDSSoUorW3UxKQ6wf6KTTcplYjeV26FqNkAd5s6D4=

This must be passed in request header with name **“X-Signature”** and value as follows:

**X-Signature:** gVPfVdXSFEPgcp1nAhxbqHtE2bDOUuSR2dApIcjFxMyYrOWZGR0xcsuWuLI+2tuzWTHRv3YjxtGGYb2EctZmgdcD50crEapXFSML0MUR572uSCFUXXuFiHLvJ59hIfn/mQEDSSoUorW3UxKQ6wf6KTTcplYjeV26FqNkAd5s6D4=

Sample Java code to generate RSA key pair, generate a signature at client side and verify the signature at server side.
```json
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Signature;
import java.util.Base64;
 
public class RSAWithSHA256SignatureExample {
    // Method to generate RSA key pair
    public static KeyPair generateKeyPair() throws Exception {
        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
        keyGen.initialize(2048);
        return keyGen.generateKeyPair();
    }
     // Method to generate a signature
    public static String generateSignature(String data, PrivateKey privateKey) throws Exception {
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initSign(privateKey);
        signature.update(data.getBytes());
        byte[] signatureBytes = signature.sign();
        return Base64.getEncoder().encodeToString(signatureBytes);
    }
     // Method to verify a signature
    public static boolean verifySignature(String data, PublicKey publicKey, String signatureStr) throws Exception {
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initVerify(publicKey);
        signature.update(data.getBytes());
        byte[] signatureBytes = Base64.getDecoder().decode(signatureStr);
        return signature.verify(signatureBytes);
    }

```
 

Steps to verify the signature (server side)

1.	Extracting the Authorization header to validate Basic Authentication.

2.	Extracting the X-Signature header to verify the integrity of the payload using the shared secret key.

3.	Checking that the payload received verifies the computed signature.


