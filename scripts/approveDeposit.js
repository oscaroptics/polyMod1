// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0xeE9a0d7F1a169611F57E81De3e80FFc53d51341A"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const FxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x35FDBa668B979B424f05bd8BDB059fB5E87AFb1d"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, FxERC721RootAddress);

    const totalNFTs = await tokenContract.totalSupply();

    for(let i=0; i<totalNFTs; i++){
      const approveTx = await tokenContract.approve(FxERC721RootAddress, i);
      await approveTx.wait();
      console.log('${i} NFT is approved');
    }
    console.log("all the NFTs approved");

    for(let i=0; i<totalNFTs; i++){
      const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
      await depositTx.wait();
      console.log('${i} NFT is deposited');
    }

    console.log("all the NFTs are successfully deposited");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });