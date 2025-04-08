---
sidebar_position: 3
---

# 3. Security

## 3.1 Security Overview

NPI Billers puts security first, ensuring that communication between third-party participants is 
safe. All information is exchanged in a highly secure and encrypted format to protect data at all 
times.

## 3.2.Payload Data Exchange
During communication between NPI Billers and third-party participants, the exchange of 
confidential payload data is handled securely, ensuring confidentiality, integrity, and authenticity. 
This process follows the JOSE (Javascript Object Signing and Encryption) framework, which 
provides a standardized approach for securing and transmitting data using JSON-based formats. 
JOSE combines signing and encryption to protect sensitive information.
The JOSE framework is built around key standards such as JWT (JSON Web Token), JWS 
(JSON Web Signature), and JWE (JSON Web Encryption). In this context, the payload is 
transmitted as a JSON Web Token (JWT) that is signed and encrypted to ensure robust security. 
All RSA keys must be at least 2048-bit to meet encryption standards.
JWT Signing and Encryption Process:

1) The sender signs the JWT using their private key with the PS256 algorithm (as per JWS 
standards).

2) The signed JWT is then encrypted using the receiver’s public key with the RSA_OAEP_256 
algorithm and A256GCM encryption method (as per JWE standards).

JWT Decryption and Signature Verification Process:

1) The receiver decrypts the JWT using their private key, following the RSA_OAEP_256 
algorithm and A256GCM encryption method.

2) After decryption, the JWT payload is extracted, and the signature is verified using the 
sender’s public key with the RS256 algorithm, ensuring authenticity and integrity of the 
message.

## 3.3. NPI Billers session

The NPI Billers session is time-limited to prevent misuse and enhance security. The session 
duration is currently set to 1 hour. Each session is initiated using a unique “session_id”, which is 
safeguarded through digital signature and encryption to ensure the integrity and confidentiality of 
the session.

 ## 3.4. NPI Billers Origin Validation
The NPI Billers performs origin validation to prevent requests from unwanted parties and restrict 
NPI Billers to be loaded in iframe for valid origins/hosts.