// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BuilderVerse is ERC20 {
    address public owner;
    
    constructor(address _owner) ERC20("BuilderVerse", "BLDR") {
        require(_owner != address(0), "Owner address cannot be zero");
        owner = _owner;
        _mint(owner, 1_000_000_000 * 10 ** decimals());
    }
} 