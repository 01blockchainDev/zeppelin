// SPD-License-Identifier: MIT
pragma solidity ^0.6.0;

// import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "@openzeppelin/upgrades-core/contracts/Initializable.sol";

contract AdminBox is Initializable {
    uint256 private _value;
    address private _admin;

    event ValueChanged(uint256 value);

    function initialize(address admin) public initializer {
        _admin = admin;
    }

    constructor() initializer() {}

    function store(uint256 value) public {
        require(msg.sender == _amdin, "AdminBox: not admin");
        _value = value;
        emit ValueChanged(_value);
    }

    function retrieve() public view returns(uint256) {
        return _value;
    }
}