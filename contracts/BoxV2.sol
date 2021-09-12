// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract BoxV2 is Initializable {
    uint256 private _value;

    function initialize(uint256 value) public initializer {
         _value = value;
    }

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    // Stores a new value in the contract
    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }

     // Increments the stored value by 1
    function increment() public {
        _value = _value + 1;
        emit ValueChanged(_value);
    }
}