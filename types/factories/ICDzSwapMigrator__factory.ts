/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICDzSwapMigrator,
  ICDzSwapMigratorInterface,
} from "../ICDzSwapMigrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICDzSwapMigrator__factory {
  static readonly abi = _abi;
  static createInterface(): ICDzSwapMigratorInterface {
    return new utils.Interface(_abi) as ICDzSwapMigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICDzSwapMigrator {
    return new Contract(address, _abi, signerOrProvider) as ICDzSwapMigrator;
  }
}
