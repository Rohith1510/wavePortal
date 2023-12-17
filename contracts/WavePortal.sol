// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;
import "hardhat/console.sol";
contract WavePortal {
    uint public totalWaves;
    
    mapping(address => uint) public waveCounts;

    event Wave(address indexed from, uint timestamp);

     constructor() {
        console.log("Yo yo, I'am Iron man and I'am smart");
    }
    
    function wave() public {
        totalWaves++;
        waveCounts[msg.sender]++;

        emit Wave(msg.sender, block.timestamp);
    
    }

    function getTotalWaves() external view returns (uint256) {
        return totalWaves;
    }

    function getWaveCount(address _address) external view returns (uint256) {
        return waveCounts[_address];
    }
}
