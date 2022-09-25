// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract BoxV2 {
    uint256 private _value;
    event ValueChanged(uint256 value);

    constructor () {

    }

    function store(uint256 value) public{
        _value = value;
        emit ValueChanged(_value);
    }

    function retrieve() public view returns(uint256) {
        return _value;
    }

    function increment() public {
        _value = _value + 1;
        emit ValueChanged(_value);
    }
    
}

//0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
