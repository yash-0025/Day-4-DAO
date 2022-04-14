// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract FakeNFTMarketplace {
    //  map fake tokenid with owner address
    mapping(uint256 => address) public tokens;
    //  Set the price for the Fake nft
    uint256 nftPrice = 0.1 ether;

    // Create a function to purchase like it accepts the ether and marks the owner of the given tokenid as caller address
    //  _tokenid It is the fake NFT token id to purchase
    function purchase(uint256 _tokenId) external payable {
        require(msg.value == nftPrice, "This NFT cost is 0.1 ether");
        tokens[_tokenId] = msg.sender;
    }

    // function to return the price of one NFT
    function getPrice() external view returns (uint256) {
        return nftPrice;
    }

    // Create a function to check whether the tokenId is available or sold out 
    function available(uint256 _tokenId) external view returns (bool) {
        if (tokens[_tokenId] == address(0)) {
            return true;
        }
        return false;
    }
}