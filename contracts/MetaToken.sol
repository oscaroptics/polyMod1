// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MetaToken is ERC721A, Ownable {
    constructor() Ownable() ERC721A("MetaToekn", "MTN") {}

    uint256 private limit= 3;
    string[] private NFTdescription =[
        "A 3D render of an astronaut walking in a green desert",
        "A computer from the 90s in the style of vaporwave",
        "A hand-drawn sailboat circled by birds on the sea at sunrise"
    ];

    mapping(uint256 => string) private _tokenURIs;

    function _baseURI() internal pure override returns(string memory){
        return "QmVF9uZV1AJmwqiSDq9TCZebadUmeCrb6Xu2BKq1Q9PW9A";
    }

    function promptDescription(uint256 tokenId) public view returns(string memory){
        return NFTdescription[tokenId];
    }


    function mint(address minter, uint256 amount) external onlyOwner {
        require (minter != address(0), "please provide the address which deployed the contract");
        require(totalSupply() < limit, "maximum number of NFTs have minted");
        _safeMint(minter, amount);
    }
}