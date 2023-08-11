# ERC20 Goerli to Mumbai Bridge Using fxPortal
This project demonstrates how to use the fxPortal contracts to transfer ERC20 tokens from Goerli to Mumbai.

## Description

This assignment is a simple bunch of contracts which will be used to deploy our MetaToken contract on ERC721A. ALso, minting the amount of NFTs in contract. 
we have sent that NFTs from goerli to mumbai network in polygon. we have approved, deposited and atlast we have checked the balance of NFTs on mumbai testnet.

### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC20 contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance


## Author
A R Ashutosh
