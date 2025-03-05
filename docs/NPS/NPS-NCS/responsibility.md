---
sidebar_position: 8
---

# 8. Responsibility

Payment entities such as NCHL, issuer member, acquirer member shall be responsible to provide the required features, functions and facilities to accomplish a below normal transaction cycle. When transaction completes in normal flow, then there could not be any issue for mentioned payment entities. Sometimes transactions fail due to some reasons, in this case payment entities could be blamed to each other for the failure and forced to manage their system. Below sections explore the responsibilities of issuers and acquirers for the case of failed scenario. 


![Example Image](/img/fig30.png)
<p align="center" class="centered-caption"></p>



Figure 30: Normal Transaction Cycle

<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request/financial request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>NCHL forwards the authorization request/financial request message to the issuer.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>The issuer validates, authorizes, and generates an authorization response/financial response message and sends it to NCHL within NCHL’s time-out period.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>NCHL forwards the authorization response/financial response message to the acquirer within the acquirer’s time-out period.</td>
        </tr>
    </tbody>
</table>

## 8.1 Acquirer Responsibility

The following section describes various responsibilities required for acquirer side in case the transaction gets failure in different entities.
1.	Acquirer failed to send authorization request/ financial request
2.	NCHL failed to receive authorization request/ financial request due to system failure
3.	Validation failure at NCHL for acquirer message
4.	Acquirer is unable to complete a transaction due to the terminal failure
5.	Acquirer failed to receive authorization response/ financial response due to system failure


### 8.1.1 Acquirer failed to send authorization request/ financial request



![Example Image](/img/fig31.png)
<p align="center" class="centered-caption"></p>

Figure 31: Acquirer failed to send authorization request/ financial request

<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates an authorization request/financial request but it cannot be delivered to the NCHL because of the system failure at the acquirer’s end, and the acquirer denies the transaction request.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>Note:</strong><i>In this case, the acquirer does not need to generate a reversal to NCHL.</i></td>
        </tr>
    </tbody>
</table>


###  8.1.2 Validation failure at NCHL for acquirer message



![Example Image](/img/fig32.png)
<p align="center" class="centered-caption"></p>
Figure 32: Validation failure at NCHL for acquirer message


<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2</td>
            <td>NCHL validates the message and detects an error in the message. In this case, NCHL will send a response message to the acquirer with a declined response code indicating a format error, and DE44 will contain the reject reason code.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>Note:</strong> <i>In this case, the acquirer does not need to generate a reversal to NCHL.</i></td>
        </tr>
    </tbody>
</table>

### 8.1.3 Acquirer is unable to complete a transaction due to the terminal failure



![Example Image](/img/fig33.png)
<p align="center" class="centered-caption"></p>

Figure 33: Acquirer is unable to complete a transaction due to the terminal failure

<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request/financial request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>NCHL forwards the authorization request/financial request message to the issuer.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>The issuer validates, authorizes, and generates an authorization response/financial response message with response code ‘00’ and sends it to NCHL within NCHL’s time-out period.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>NCHL forwards the authorization response/financial response message with response code ‘00’ to the acquirer within the acquirer’s time-out period.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>The transaction could not be successfully completed due to some problem at the terminal. Then the acquirer generates a full reversal advice message and sends it to NCHL.</td>
        </tr>
        <tr>
            <td>6</td>
            <td>NCHL logs the reversal into SAF and forwards that reversal advice message to the issuer.</td>
        </tr>
        <tr>
            <td>7</td>
            <td>The Issuer responds to the acquirer reversal advice message and updates the cardholder account.</td>
        </tr>
        <tr>
            <td>8</td>
            <td>NCHL responds with a reversal advice response message to the acquirer.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>Note:</strong> <i>It must be noted by the issuer that it may get multiple reversals for the transaction, and it is the Issuer’s responsibility to verify the duplicate reversal before posting to the customer account. If the authorization response/financial response is successful ('00'), then only the acquirer should initiate a reversal to NCHL.</i></td>
        </tr>
    </tbody>
</table>




###  8.1.4 Acquirer is unable to complete a transaction due to the acquirer’s system failure



![Example Image](/img/fig34.png)
<p align="center" class="centered-caption"></p>

Figure 34: Acquirer is unable to complete a transaction due to the acquirer system failure

<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request/financial request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>NCHL forwards the authorization request/financial request message to the issuer.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>The issuer validates, authorizes, and generates an authorization response/financial response message with response code ‘00’ and sends it to NCHL within NCHL’s time-out period.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>NCHL forwards the authorization response/financial response message with response code ‘00’ to the acquirer within the acquirer’s time-out period.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>The transaction could not be successfully completed due to some problem at the acquirer’s system. Then the acquirer generates a full reversal advice message and sends it to NCHL.</td>
        </tr>
        <tr>
            <td>6</td>
            <td>NCHL logs the reversal into SAF and forwards that reversal advice message to the issuer.</td>
        </tr>
        <tr>
            <td>7</td>
            <td>The Issuer responds to the acquirer reversal advice message and updates the cardholder account.</td>
        </tr>
        <tr>
            <td>8</td>
            <td>NCHL responds with a reversal advice response message to the acquirer.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>Note:</strong><i> It must be noted by the issuer that it may get multiple reversals for the transaction, and it is the Issuer’s responsibility to verify the duplicate reversal before posting to the customer account. If the authorization response/financial response is successful ('00'), then only the acquirer should initiate a reversal to NCHL.</i></td>
        </tr>
    </tbody>
</table>





### 8.1.5 Acquirer failed to receive authorization response/ financial response due to system failure at NCHL


![Example Image](/img/fig35.png)
<p align="center" class="centered-caption"></p>


Figure 35: Acquirer failed to receive authorization response/ financial response due to system failure at NCHL


<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request/financial request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>NCHL forwards the authorization request/financial request message to the issuer.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>The issuer validates, authorizes, and generates an authorization response/financial response message with response code ‘00’ and sends it to NCHL within NCHL’s time-out period.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>NCHL forwards the authorization response/financial response message to the acquirer but the message fails to reach the acquirer.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>NCHL generates a full reversal advice message, logs the reversal into SAF, and forwards that reversal advice message to the issuer.</td>
        </tr>
        <tr>
            <td>6</td>
            <td>The Issuer responds to the reversal advice message and updates the cardholder account.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>Note:</strong><i> In this case, the acquirer does not need to generate a reversal to NCHL. It is the NCHL’s responsibility to generate a reversal with response code ‘68’ indicating time-out in case the acquirer does not receive any kind of reversal advice response. It must be noted by the issuer that it may get multiple reversals for the transaction, and it is the Issuer’s responsibility to verify the duplicate reversal before posting to the customer account. If the authorization response/financial response is successful ('00'), then only NCHL should initiate a reversal to the issuer.</i></td>
        </tr>
    </tbody>
</table>




### 8.1.6 Acquirer is unable to complete a transaction due to late good response


![Example Image](/img/fig36.png)
<p align="center" class="centered-caption"></p>

Figure 36: Acquirer is unable to complete a transaction due to late good response at the acquirer


<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request/financial request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>NCHL forwards the authorization request/financial request message to the issuer.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>The issuer validates, authorizes, and generates an authorization response/financial response message with response code ‘00’ and sends it to NCHL within NCHL’s time-out period.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>NCHL forwards the authorization response/financial response message with response code ‘00’ to the acquirer after the acquirer’s time-out period.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>The transaction was already declined due to no response at the acquirer’s system. After this, the acquirer receives a late good response, then it is the acquirer’s responsibility to generate a full reversal advice message and send it to NCHL.</td>
        </tr>
        <tr>
            <td>6</td>
            <td>NCHL logs the reversal into SAF and forwards that reversal advice message to the issuer.</td>
        </tr>
        <tr>
            <td>7</td>
            <td>The Issuer responds to the acquirer reversal advice message and updates the cardholder account.</td>
        </tr>
        <tr>
            <td>8</td>
            <td>NCHL responds with a reversal advice response message to the acquirer.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>Note:</strong> <i>It must be noted by the issuer that it may get multiple reversals for the transaction, and it is the Issuer’s responsibility to verify the duplicate reversal before posting to the customer account. If the authorization response/financial response is successful ('00'), then only the acquirer should initiate a reversal to NCHL.</i></td>
        </tr>
    </tbody>
</table>



##  8.2 Issuer Responsibility


The following section describes various responsibilities required for acquirer side in case the transaction gets failure in different entities.
1.	Request Message Could not send to Issuer
2.	No response Message from Issuer
3.	Late Response message from Issuer
4.	Message validation failure at NCHL for an issuer response



### 8.2.1 Request Message Could not send to Issuer

![Example Image](/img/fig37.png)
<p align="center" class="centered-caption"></p>


Figure 37: Request Message Could not send to Issuer

<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request/financial request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                NCHL attempts to forward the authorization request/financial request message to the issuer but is unable to send due to a failure or no connection with the issuer, or the issuer is signed off.
                
                NCHL generates an authorization response/financial response message to the acquirer, indicating that the request is denied. Acquirer will not generate a reversal for this transaction.
            </td>
        </tr>
        <tr>
            <td colspan="2"><strong>Note:</strong><i> In this case, NCHL will respond to the Acquirer with response code 91. Acquirer will not generate a reversal for the same.</i>
            </td>
        </tr>
    </tbody>
</table>



### 8.2.2	No response Message from Issuer


![Example Image](/img/fig38.png)
<p align="center" class="centered-caption"></p>


Figure 38: No response Message from Issuer

<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request/financial request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>NCHL forwards the authorization request/financial request message to the issuer.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>The issuer could not return the authorization response/financial response message to NCHL due to a communication failure between the issuer and NCHL or any reason.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>NCHL detects a timeout condition, generates an authorization response/financial response message to the acquirer, indicating that the request is denied.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>Note:</strong><i> In this case, NCHL will respond to the acquirer with response code 91. It is the issuer’s responsibility to generate and send a reversal to the Issuer CBS.</i></td>
        </tr>
    </tbody>
</table>



###  8.2.3 Late Good Response message from Issuer



![Example Image](/img/fig39.png)
<p align="center" class="centered-caption"></p>


Figure 39: Late Good Response message from Issuer

<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request/financial request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>NCHL forwards the authorization request/financial request message to the issuer.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>NCHL detects a timeout condition and generates an authorization response/financial response message to the acquirer, indicating that the request is denied.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>NCHL receives a late good response from the Issuer and NCHL will reject the same.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>NCHL generates a reversal advice message and places it into SAF for later delivery and sends a reversal advice message to the issuer.</td>
        </tr>
        <tr>
            <td>6</td>
            <td>The issuer responds with a reversal advice response message.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>Note:</strong> <i>In this case, NCHL will respond to the acquirer with response code 68. Acquirer will not generate a reversal for the same. NCHL will send the reversal to the Issuer with response code 68. It must be noted by the issuer that it may get multiple reversals for the transaction, and it is the Issuer’s responsibility to verify the duplicate reversal before posting to the customer account.</i></td>
        </tr>
    </tbody>
</table>





### 8.2.4	Message validation failure at NCHL for an issuer response


![Example Image](/img/fig40.png)
<p align="center" class="centered-caption"></p>


Figure 40: Message validation failure at NCHL for an issuer response

<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request/financial request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>NCHL forwards the authorization request/financial request message to the issuer.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>The issuer validates, authorizes, and generates a successful authorization response/financial response message and sends it to NCHL within NCHL’s time-out period.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>After receiving the authorization response/financial response, NCHL validates the response. If it fails, then the transaction will be logged as suspiciously declined. NCHL then sends a response message to the acquirer, indicating that the request is suspiciously denied.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>NCHL creates a reversal advice message and places it into SAF for later delivery and sends it to the issuer.</td>
        </tr>
        <tr>
            <td>6</td>
            <td>The issuer responds with a reversal advice response message.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>Note:</strong><i> In this case, NCHL will respond to the acquirer with response code 91 (In case of message validation failure in DE2, DE 11, DE 32, DE37, and DE41). Acquirer will not generate a reversal for the same. NCHL will send the reversal to the Issuer with response code 91 and populate DE – 44 with the reject reason code. It must be noted by the issuer that it may get multiple reversals for the transaction, and it is the Issuer’s responsibility to verify the duplicate reversal before posting to the customer account.</i></td>
        </tr>
    </tbody>
</table>



## 8.3 Stand-in Functionality


When issuer’s system is not available due to some kind of issues such as hardware, software or communication failure; NCHL can authorize the transactions on behalf of issuer and this mechanism is termed as Stand in Processing (STIP). STIP Authorization should get active when there is communication issue between NCHL and Issuing Banks. Also, NCHL will support STIP authorization for small ticket volume transactions based on BIN specific manner (if opted by members). System shall be set up to support stand in functionality for BINs allotted by NCHL. 
•	STIP functionality is supported both for card present as well as card not present transactions.
•	STIP functionality is supported only for credit/ charged card transactions.
•	For domestic transactions, only PIN based transactions will be supported in STIP.
•	For international transactions, both PIN based and PIN less transactions will be supported in STIP.
•	NCHL will not perform actual expiry date validation in stand-in mode. The expiry date received in Track 1 or Track 2 or in DE - 14 of ISO message will be checked with the NCHL system date. If the received expiry date (YYMM) is greater or equal to the NCHL system date (YYMM), the card will be treated as non-expired otherwise the card will be treated as expired.
•	Separate Limit (Amount and Count) of transactions will be maintained in STIP for BIN specific manner.
•	STIP indicators will be sent to acquirers also (in authorization response) along with Issuers (in authorization advice).
Stand in Processing can be accomplished for below scenarios:
1.	Late Response from issuer (Delay)
2.	No Response from Issuer (Timed-Out)
3.	Issuer Member in signed off status (Node Down)



###  8.3.1 Late Response from issuer (Delay)


![Example Image](/img/fig41.png)
<p align="center" class="centered-caption"></p>

Figure 41: Late Response from issuer (Delay)



<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>NCHL forwards the authorization request message to the issuer.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>A transaction timed-out occurs at NCHL. NCHL validates the request, prepares, and sends the STIP authorization response message to the acquirer if the issuer subscribed to the stand-in feature.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>NCHL receives a late good response from the Issuer and declines this response as the transaction is already processed in stand-in mode.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>NCHL generates the reversal message, logs it into SAF, and forwards that reversal message to the issuer.</td>
        </tr>
        <tr>
            <td>6</td>
            <td>The Issuer responds to the reversal message to NCHL.</td>
        </tr>
        <tr>
            <td>7</td>
            <td>NCHL logs the STIP request message into SAF and forwards that authorization advice request message to the issuer.</td>
        </tr>
        <tr>
            <td>8</td>
            <td>The Issuer responds to the authorization advice response message to NCHL. The issuer should ignore this advice message to reflect in customer account if the original message is already processed.</td>
        </tr>
        <tr>
            <td colspan="2"><strong>Note:</strong> <i>In case NCHL receives an authorization response with a response code other than ‘00’ (no Good response) in step 4, NCHL will not generate a reversal to the issuer and only authorization advice shall be processed.</i></td>
        </tr>
    </tbody>
</table>



### 8.3.2 No Response from Issuer (Timed-Out)


![Example Image](/img/fig42.png)
<p align="center" class="centered-caption"></p>

Figure 42: No Response from Issuer (Timed-Out)

<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>NCHL forwards the authorization request message to the issuer.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>The issuer could not return the authorization response message to NCHL, maybe due to a communication failure between the issuer and NCHL.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>NCHL validates the request, prepares, and sends the STIP authorization response message to the acquirer if the issuer subscribed to the stand-in feature.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>NCHL logs the STIP request message into SAF and forwards that authorization advice request message to the issuer.</td>
        </tr>
        <tr>
            <td>6</td>
            <td>The Issuer responds to the authorization advice response message to NCHL. The issuer should ignore this advice message to reflect in customer account if the original message is already processed.</td>
        </tr>
    </tbody>
</table>

###  8.3.3 Issuer Member in signed off status (Node Down)



![Example Image](/img/fig43.png)
<p align="center" class="centered-caption"></p>

Figure 43: Issuer Member in signed off status (Node Down)


<table>
    <thead>
        <tr>
            <th>Sequence</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>The acquirer initiates and sends an authorization request message to NCHL.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Issuer is in offline mode and hence NCHL could not forward the authorization request message to the issuer. Hence, NCHL validates the request, prepares, and sends the STIP authorization response message to the acquirer if the issuer subscribed to the stand-in feature.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>NCHL logs the STIP request message into SAF and forwards that authorization advice request message to the issuer.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>The Issuer responds to the authorization advice response message to NCHL.</td>
        </tr>
    </tbody>
</table>

