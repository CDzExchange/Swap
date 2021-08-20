// SPDX-License-Identifier: GPL-3.0

pragma solidity =0.6.12;

import './interfaces/ICDzSwapFactory.sol';
import './CDzSwapPair.sol';

contract CDzSwapFactory is ICDzSwapFactory {
    address public override feeTo;
    address public override feeToSetter;

    mapping(address => mapping(address => address)) public override getPair;
    address[] public override allPairs;

    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    constructor(address _feeToSetter) public {
        require(_feeToSetter != address(0), "_feeToSetter is zero address!");
        feeToSetter = _feeToSetter;
    }

    function allPairsLength() external override view returns (uint) {
        return allPairs.length;
    }

    function createPair(address tokenA, address tokenB) external override returns (address pair) {
        require(tokenA != tokenB, 'CDzSwap: IDENTICAL_ADDRESSES');
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), 'CDzSwap: ZERO_ADDRESS');
        require(getPair[token0][token1] == address(0), 'CDzSwap: PAIR_EXISTS'); // single check is sufficient
        bytes memory bytecode = type(CDzSwapPair).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        assembly {
            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }
        ICDzSwapPair(pair).initialize(token0, token1);
        getPair[token0][token1] = pair;
        getPair[token1][token0] = pair; // populate mapping in the reverse direction
        allPairs.push(pair);
        emit PairCreated(token0, token1, pair, allPairs.length);
    }

    function setFeeTo(address _feeTo) external override {
        require(msg.sender == feeToSetter, 'CDzSwap: FORBIDDEN');
        feeTo = _feeTo;
    }

    function setFeeToSetter(address _feeToSetter) external override {
        require(msg.sender == feeToSetter, 'CDzSwap: FORBIDDEN');
        require(_feeToSetter != address(0), "_feeToSetter is zero address!");
        feeToSetter = _feeToSetter;
    }
}
