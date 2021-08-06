/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICDzSwapCallee,
  ICDzSwapCalleeInterface,
} from "../ICDzSwapCallee";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV2Call",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICDzSwapCallee__factory {
  static readonly abi = _abi;
  static createInterface(): ICDzSwapCalleeInterface {
    return new utils.Interface(_abi) as ICDzSwapCalleeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICDzSwapCallee {
    return new Contract(address, _abi, signerOrProvider) as ICDzSwapCallee;
  }
}
