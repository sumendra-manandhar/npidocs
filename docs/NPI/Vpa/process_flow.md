---
sidebar_position: 2
---
# 2. Process Flow

With the current implementation, VPA based payments can be initiated either direct to the bank 
providing the beneficiary registered mobile number in banks KYC or through connectIPS system. 
1. Sender initiates the VPA based payment by providing the sender mobile number registered in 
banks KYC. In case of connectIPS system based VPA payment, recipient should have linked 
account in connectIPS system and set as primary.
2. The VPA engine resolves the corresponding bank account details based on the mobile number 
provided by the sender.
3. Sender will get the beneficiary account number and name with masking to make sure the 
correctness of recipient.
4. After sender confirms that payment, it will follow the normal payment flow where sender account 
will be debited and beneficiary account will be credited. In case of VPA based payment initiated 
from PSPs respective wallet, pool account will be debited and beneficiary account will be credited.
5. After payment is successful, notification is sent back to the sender.