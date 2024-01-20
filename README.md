# Overview of project

This project aims to enhance the [existing SGQR](https://www.mas.gov.sg/development/e-payments/sgqr) functionality, enhancing and improving Singapore's B2C payment system.

Singapore's business entities [use UEN as identifier](https://www.uen.gov.sg/ueninternet/faces/pages/admin/aboutUEN.jspx), sort of like an identity card or passport number. This UEN is used in everything, including for use in banking and existing payment systems. Consumers can scan existing SGQR which includes UEN as the identifer to pay with the [PayNow](https://www.abs.org.sg/consumer-banking/pay-now) instant settlement payment network that every major bank in Singapore participates in. We aim to augment and enhance this feature. 

Traditional EVM based chains use wallet addresses as identifier. As every existing [SGQR](https://www.mas.gov.sg/development/e-payments/sgqr) has a UEN on them, using them as identifier instead of wallets can enable a country-wide switch to a blockchain e-wallet instant settlement payment system extremely easily. 

As these [UENs are all public data](https://beta.data.gov.sg/collections/2/view), we can onboard the entire Singapore automatically. They only need to approach us if they want to withdraw their balance, but otherwise they can already use this sysytem to start accepting payments.

For our project, we have created a fictitious stablecoin SGDk (k for constant) to use as an example. 

## Usage scenarios

### Tourists
A tourist from the USA has some USDC on the Blockchain as a CBDC.

He visits a hawker centre in Singapore and scans the SGQR code there. He pays directly to the UEN of the merchant using his USDC. 

No cash needed, even for small roadside stalls.

### Merchants
The 70 years old hawker auntie heard about this new payment method. Instead of spending hours calling and setting up an email, all she has to do is to navigate to a website and key in her UEN to view how much money she has received. At the end of the month when she has more time, she approaches us to onboard. 

No need to spend time onboarding, entire Singapore is already onboarded. 

### Banks
DBS had experienced several server failures in 2023 resulting in millions of dollars lost for the economy. Our smart contracts can replace DBS PayLah backend entirely. 

The DBS PayLah app pings their central server and if there is no response, switches to using the smart contract on the blockchain instead. Merchants and users will not feel the difference in usage and once central server resumes operations, the transactions can be combined back together. 

No money wasted on maintaining critical server infrastructures. All our financial data are decentralised and available on every continent around the globe for maximum redundancy even in the event of war.

## Layout of Repository
1. Usage Intructions
2. ReactJS Frontend
3. Solidity Smart Contracts Backend

### Pay to merchant
1. Download metamask on your phone
2. Import an onboarded merchant account here. `table obtain ship purse entire recall vendor olympic keen angry genius bounce`
3. Import SGDk `0xa462f79a8c09a0770614140B9f53Ebc9fD8413b5` and SGDm `0x1F11B837513dF2F3e17D5b017f83C5c17C76261f`. 
   1. SGDk is the stablecoin that will be used by merchants and users for payments.
   1. SGDm is the merchant ERC20 for merchants who have onboarded and whitelisted their wallets. They will be able to see their balance as SGDm and transfer it out if they want to. 
4. Go to our [website](https://payliao.github.io/payliao/) with the metamask browser.
5. Go to the merchant tab and check the balance of the merchant you will pay to `198402065R`.
6. Scan the merchant's [QR code](sgqr/198402065R.jpg).
7. Pay to this merchant however much SGDk you want.
8. Check the balance of the merchant again. You will see the balance of the merchant has increase.
   1. This is also the step to take if you want to receive payment as a merchant without onboarding and wants to check the balance and transaction history. 

### Merchant
1. To view the balance of any merchant, including a merchant who has not onboarded, go to merchant tab and enter the UEN. An example UEN is `198402065R`. 
   1. This is the step to take if you want to receive payment as a merchant without onboarding and wants to check the balance and transaction history. 
1. Now we assume the role of a merchant who has onboarded with us. Import this account `1465ef7ce4ee81fdef9e854e51b97013c1ff740dfd494ddbbb60176c999f581f` into metamask. This is the whitelisted account of the sample UEN `198402065R` you paid to.
1. Import SGDk `0xa462f79a8c09a0770614140B9f53Ebc9fD8413b5` and SGDm `0x1F11B837513dF2F3e17D5b017f83C5c17C76261f`. 
1. You will see SGDm matches the balance if you query the balance of the UEN on our website. This works as this wallet is whitelisted to be the owner of the UEN. 
1. Transfer SGDm to yourself or anyone else. You will realise you receive SGDk. 

### SGDk
To receive SGDk, simply mint any amount from SGDk contract `0xa462f79a8c09a0770614140B9f53Ebc9fD8413b5`.

### UEN Management
[The UENs present on-chain are here](contract/script/python/uen_data/full_uen_filtered_list/d_0cc5f52a1f298b916f317800251057f3).

## Frontend
The frontend was built with React, HTML and CSS to create a website that works on both computer and mobile.

To access the website, user will be prompted to connect his/her Metamask wallet to the website when the user clicks on the "Login with Metamask" button.
Upon entering the website, the user has access to a number of pages.

### Pay To QR Page
First, the user needs to approve an amount of SGDk tokens for our backend smart contract to use.

Next, there is a QR code scanner that the user can use to scan SGQR codes across Singapore. Upon successfully the code, the website will return the retrieved name and UEN for the user to verify.
The user can then key the desired amount of tokens he/she wants to transfer to the merchant and then approve and sign the transaction. Our smart contract will then transfer the SGDk tokens from the user's wallet to the merchant's wallet address under the specific UEN.

Below the QR code scanner, there is the user's transaction history.

### Profile Page
Here the user can view his/her SGDk token balance as well as the wallet address connected to the site and the network the wallet is connected to.

### Merchant Dashboard Page
This page is for merchants to withdraw their SGDk tokens from their UEN wallets to their own wallets, whose wallet addresses have already been whitelisted in our backend smart contracts.
The merchant just needs to key in their wallet address as well as the amount of SGDk they would like to withdraw.

Merchants can also check their SGDk token balance based on the UEN.

## Backend
The smart contracts are developed with [foundry](https://github.com/foundry-rs/foundry).

#### Security
The main chain has never had a single hack that has occurred since inception in 2012, resulting in the most secure chain in terms of enterprise use. As the main chain is not programmable, the chain offers enough core feature to hold the SGDk safely and securely. 

#### Liquidity
As the main chain has many FIs who are involved in the chain, there is a large amount of liquidity present on the chain, great for people who wants to swap for SGDk. Prices will also be closest to midmarket rates as banks use the chain to trade forex. 

In general, the main chain could be seen as the "DBS app", which is the primary "vault" holding all the cash. Meanwhile, the EVM chain can be seen as the "e-wallet" holding a small amount of SGDk for daily transactions and use. 

### EVM side chain
The EVM side chain will hold all the smart contract backend, enabling payment processing for everyone in Singapore. 

#### SGDk 
Address: `0xa462f79a8c09a0770614140B9f53Ebc9fD8413b5`

#### SGDm
Address: `0x1F11B837513dF2F3e17D5b017f83C5c17C76261f`
This is a modified ERC20 smart contract. This smart contract holds SGDk and records how many SGDk each UEN hold. As soon as the standard ERC20 transfer function is called, this transfers the underlying SGDk out from the SGDm smart contract belonging to the whitelisted UEN address to the specified address. The smart contract will show 0 and not allow a random address to transfer SGDk out if the address is not whitelisted and does not belong to any UEN. 

There is also a custom transfer function which allows a custom transfer to a specified UEN instead of an address. This allows UEN to UEN transfers which does not require the recipient to be whitelisted. 

As the view functions are all public, any merchant that has not onboarded can also use the website to view their UEN transfer history, without whitelisting and onboarding. 

#### UEN Management
Address: `0x228dfCFf73CcF0a65034aA55621122a5aaD49FE7`
The UEN Management contract holds the entire list of UENs and their names in Singapore. They are scrapped with a helper script from [data.gov](https://beta.data.gov.sg/collections/2/view) which are all public information. More info on the script in the next section. 

#### Whitelist
The whitelist is for merchants to onboard themselves with our platform so they can withdraw. After adding their wallet address to the whitelist, they can then add the SGDm as a standard ERC20 to their wallet app. This enables them to "send" (or withdraw) to their wallet or any other wallet. They can also use the transfer function on our web app which can transfer to a specific UEN which may not have onboarded with us yet. 

### Other helper scripts 
#### UEN Grabber
This script grabs all the UEN from govtech and dumps them in a nice format locally.

#### UEN Deployment
This script deploys the UEN to the smart contract taking the data from the local data dump. 

## Front and backend interaction
* Users link their wallet to metamask when they log in to the front end. 
* User can choose to send tokens to merchant via UEN by scanning the standard SGQR.
  * After scanning, the front end queries the SGDk token allowance.
    * This is done by calling the `sgdm.sol` deployment's `check_allowance()` function which returns how many SGDk token the user has allowed to be sent to the `sgdm.sol` backend.
  * To transfer, the `send_tokens_to_uen(string memory _uen, uint256 _amount)` is called to send SGDk tokens to the UEN. The allowance is checked to make sure that the token to transfer is within the allowance.
* For merchants, what they want to do is to view the amount of SGDk token they have. The merchant have 2 options to do this:
  * Merchants that are not onboarded can use the frontend and enter their UEN to view the amount of tokens they currently have. 
  * Merchants that have already onboarded can add the deployment address of `sgdm.sol` directly to any wallet of their choice and it will be shown as an ERC20 token.