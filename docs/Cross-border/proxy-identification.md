---
sidebar_position: 3
---

# 3. VPA (Proxy Identification)
## 3. VPA Address (Proxy Identifier)
   ## 3.1 VPA/ Proxy Background
   Virtual Payment Address (VPA) or Proxy Identifiers is introduced in xBorder transfer to simplify
   and enhance user experience, as well as to increase data security. Proxy Identifiers link payer’s
   or payee’s account information with a short identifier allowing them to transact in a seamless
   manner without needing to know and input beneficiary’s bank account details. Common types of
   VPAs or proxy identifiers include mobile numbers, email addresses, and scheme specific
   identifiers.
   The mapping and resolution of a proxy identifier with actual customer account is maintained in a
   VPA or proxy database in any real-time retail payment. Proxy identifiers can be stored on
   centralized (within the network) or de-centralized (typically at the BFIs) basis. It is used to map
   and resolute the customer account.
   There are basically two parameters which are required for maintaining the proxy databases: Base
   Identifier and Proxy Identifiers. Base identifier acts as the underlying verified or verifiable
   information that forms a foundation of a proxy identifier. Any or multiple information used to identity
   a customer during KYC or account opening will serve as Base Identifiers, which will be linked to
   Proxy Identifier. Proxy Identifier is used to initiate a transaction thereby eliminating a need to input
   beneficiary's bank account detail. And Base Identifier is used to verify Proxy Identifiers during the
   registration process and other AML/compliance related checks.
   ## 3.2 VPA or Proxy Identifier for NPIx
   The existing NEPALPAY Instant framework of RPS, which used mobile number of the customer
   linked with bank account, will be used as basic architecture of VPA or Proxy Identifier for xBorder
   transfer. This is already in use for domestic VPA based P2P transfer and so the prerequisite for
   the participating banks will be NEPALPAY Instant. However, for acceptability of the architecture,
   it has been further enhanced to accept using mobile number or scheme-based id (alphanumeric
   code) concatenated with issuer bank code (separated by ‘@) will be used as VPA/ Proxy Identifier.
   The underlying Base Identifiers will be customer identification document type, identification
   number and issue date/place. Such information could be citizenship, National Id, Driving License,
   PAN Details, or other accepted customer identification. Such information held at the bank’s end
   will be shared through existing NPI Banks (existing middleware at bank’s end that is currently
   resolving mobile number to bank account with addition of Base Identifiers within the same
   component).
   xBorder participating members are required to provide the details under Base Identifiers during
   consent flow of a customer for xBorder transaction. Additionally, members need to outline the
   mechanism for resolving VPA or proxy address during each transaction processing, utilizing the
   concept of a decentralized proxy database via APIs or database views. Further details about the
   consent process and API specifications are provided in the later sections.
   ## 3.3 Sample VPA or Proxy Identifier
   <table>
     <thead>
       <tr>
         <th>Transaction Type</th>
         <th>Payer</th>
         <th>Payee (Option)</th>
         <th>Instruments</th>
         <th>Identifier</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td rowspan="3" >xBorder Inward Fund Transfer</td>
         <td rowspan="3">Pre-approved(Pre-funded account)</td>
         <td rowspan="3">VPA</td>
         <td>Bank Channels</td>
         <td>
            <p> 1.&lt;Registered Mobile NO&gt;@&lt;bankcode&gt;
                     Eg. 98524*****@ACBD</p>
            <p>2.&lt;Alphanumeric String>@&lt;bankcode&gt;
                  Eg. RAM***001@XYZ</p>
         </td>
       </tr>
       <tr>
         <td>connectIPS</td>
         <td>
            <p>&lt;Registered Mobile NO&gt;@&lt;cips&gt;98524*****@cips</p>
         </td>
       </tr>
       <tr>
         <td>PSPs/Wallets</td>
         <td>
            <p>&lt;Registered Mobile NO.gt;@&lt;walletcodegt; Eg. 98524*****@XYZPAY</p>
         </td>
       </tr>
     </tbody>
   </table>
