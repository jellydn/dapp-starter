/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SafeCast,
  SafeCastInterface,
} from "../../../../../@openzeppelin/contracts/utils/math/SafeCast";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "bits",
        type: "uint8",
      },
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
    ],
    name: "SafeCastOverflowedIntDowncast",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
    ],
    name: "SafeCastOverflowedIntToUint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "bits",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SafeCastOverflowedUintToInt",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f555b99f34b1c067f4d2ea441095768d54040c479b869b2116f2283c5ea029cc64736f6c634300081b0033";

type SafeCastConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeCastConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeCast__factory extends ContractFactory {
  constructor(...args: SafeCastConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<SafeCast> {
    return super.deploy(overrides || {}) as Promise<SafeCast>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SafeCast {
    return super.attach(address) as SafeCast;
  }
  override connect(signer: Signer): SafeCast__factory {
    return super.connect(signer) as SafeCast__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeCastInterface {
    return new utils.Interface(_abi) as SafeCastInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeCast {
    return new Contract(address, _abi, signerOrProvider) as SafeCast;
  }
}
