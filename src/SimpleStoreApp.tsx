import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import React from "react";

import BoxArtifacts from "./artifacts/contracts/Box.sol/Box.json";
import BoxV2Artifacts from "./artifacts/contracts/BoxV2.sol/BoxV2.json";
import logger from "./logger";
import { Box, BoxV2 } from "./types";

interface Props {
  contractAddress: string;
}

declare global {
  interface Window {
    ethereum: ethers.providers.ExternalProvider;
  }
}

const SimpleStoreApp = ({ contractAddress }: Props) => {
  const { library, account } = useWeb3React();

  // get store value form smart contract
  const fetchValue = () => {
    logger.warn("fetchValue");
    const provider = library || new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, BoxArtifacts.abi, provider) as Box;
    contract.retrieve().then(logger.warn).catch(logger.error);
  };

  // set random number for store
  const setValue = async (val: number) => {
    logger.warn("setValue", val);
    const provider = library || new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, BoxArtifacts.abi, signer) as Box;

    try {
      const transaction = await contract.store(val);
      await transaction.wait();
    } catch (error) {
      logger.error(error);
    }
  };

  // increase store + 1
  const increase = async () => {
    logger.warn("increase");
    const provider = library || new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, BoxV2Artifacts.abi, signer) as BoxV2;

    try {
      const transaction = await contract.increment();
      await transaction.wait();
    } catch (error) {
      logger.error(error);
    }
  };

  React.useEffect(() => {
    const provider = library || new ethers.providers.Web3Provider(window.ethereum);
    if (account) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, BoxArtifacts.abi, signer) as Box;
      const listener = (newValue: BigNumber) => {
        logger.warn("ValueChanged", newValue);
      };

      contract.on("ValueChanged", listener);
      return () => {
        contract.removeListener("ValueChanged", listener);
      };
    }
  }, [library, account]);

  return (
    <div>
      SimpleStoreApp
      <h3>Contract Address: {contractAddress}</h3>
      <div>
        <button type="button" className="btn" onClick={fetchValue}>
          Fetch value
        </button>
        <button disabled={!account} type="button" className="btn" onClick={() => setValue(Date.now())}>
          Set value
        </button>
        <button disabled={!account} type="button" className="btn" onClick={increase}>
          Increase +1
        </button>
      </div>
    </div>
  );
};

export default SimpleStoreApp;
