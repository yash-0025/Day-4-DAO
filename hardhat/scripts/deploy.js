const {  ethers } = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS }  = require("../constants");


async function main() {
// *        lets deploy the FakeNFTMarketplace 
const FakeNFTMarketPlace = await ethers.getContractFactory("FakeNFTMarketplace");
const fakeNftMarketplace = await FakeNFTMarketPlace.deploy();
await fakeNftMarketplace.deployed();

console.log("Fake NFT Market Place contract address: ", fakeNftMarketplace.address);

// *   Now deploy the CryptoDevDAO contract 

const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    fakeNftMarketplace.address,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    {
        //      This will assume that the users account have at least 1 ether in account
        value: ethers.utils.parseEther("1"),
    }
);
await cryptoDevsDAO.deployed();
console.log("Crypto Devs DAO Contract Address: ", cryptoDevsDAO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });