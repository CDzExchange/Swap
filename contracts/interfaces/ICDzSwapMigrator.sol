// SPDX-License-Identifier: GPL-3.0

pragma solidity =0.6.12;

interface ICDzSwapMigrator {
    function migrate(address token, uint amountTokenMin, uint amountETHMin, address to, uint deadline) external;
}
