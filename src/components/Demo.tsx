import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { useEffect, useState } from "react";

import { injected, walletconnect, POLLING_INTERVAL } from "../dapp/connectors";
import { useEagerConnect, useInactiveListener } from "../dapp/hooks";
import logger from "../logger";
import { Header } from "./Header";

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  }
  if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  }
  if (error instanceof UserRejectedRequestErrorInjected || error instanceof UserRejectedRequestErrorWalletConnect) {
    return "Please authorize this website to access your Ethereum account.";
  }
  logger.error(error);
  return "An unknown error occurred. Check the console for more details.";
}

export function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
}

export default function Demo() {
  const context = useWeb3React<Web3Provider>();
  const { connector, library, account, activate, deactivate, active, error } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const activating = (connection: typeof injected | typeof walletconnect) => connection === activatingConnector;
  const connected = (connection: typeof injected | typeof walletconnect) => connection === connector;
  const disabled = !triedEager || !!activatingConnector || connected(injected) || connected(walletconnect) || !!error;
  return (
    <>
      <Header />
      <div>{!!error && <h4 style={{ marginTop: "1rem", marginBottom: "0" }}>{getErrorMessage(error)}</h4>}</div>
      <div className="grid grid-cols-2 gap-2 px-2 py-4">
        <div className="card bordered">
          <figure>
            <img className="h-24" src="https://metamask.io/images/mm-logo.svg" alt="metamask" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <a className="link link-hover" href="https://metamask.io/" target="_blank" rel="noreferrer">
                MetaMask
              </a>
            </h2>
            <p>A crypto wallet & gateway to blockchain apps</p>
            <div className="justify-end card-actions">
              <button
                type="button"
                className="btn btn-primary"
                disabled={disabled}
                onClick={() => {
                  setActivatingConnector(injected);
                  activate(injected);
                }}
              >
                <div className="px-2 py-4">
                  {activating(injected) && <p className="btn loading">loading...</p>}
                  {connected(injected) && (
                    <span role="img" aria-label="check">
                      ✅
                    </span>
                  )}
                </div>
                Connect with MetaMask
              </button>
              {(active || error) && connected(injected) && (
                <>
                  {!!(library && account) && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        library
                          .getSigner(account)
                          .signMessage("👋")
                          .then((signature: any) => {
                            window.alert(`Success!\n\n${signature}`);
                          })
                          .catch((err: Error) => {
                            window.alert(`Failure!${err && err.message ? `\n\n${err.message}` : ""}`);
                          });
                      }}
                    >
                      Sign Message
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      if (connected(walletconnect)) {
                        (connector as any).close();
                      }
                      deactivate();
                    }}
                  >
                    Deactivate
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="card bordered">
          <figure>
            <img className="h-24" src="https://walletconnect.org/walletconnect-logo.svg" alt="wallet connect" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <a className="link link-hover" href="https://walletconnect.org/" target="_blank" rel="noreferrer">
                Wallet Connect
              </a>
            </h2>
            <p>Open protocol for connecting Wallets to Dapps</p>
            <div className="justify-end card-actions">
              <button
                type="button"
                className="btn btn-primary"
                disabled={disabled}
                onClick={() => {
                  setActivatingConnector(walletconnect);
                  activate(walletconnect);
                }}
              >
                <div className="px-2 py-4">
                  {activating(walletconnect) && <p className="btn loading">loading...</p>}
                  {connected(walletconnect) && (
                    <span role="img" aria-label="check">
                      ✅
                    </span>
                  )}
                </div>
                Connect with WalletConnect
              </button>
              {(active || error) && connected(walletconnect) && (
                <>
                  {!!(library && account) && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        library
                          .getSigner(account)
                          .signMessage("👋")
                          .then((signature: any) => {
                            window.alert(`Success!\n\n${signature}`);
                          })
                          .catch((err: Error) => {
                            window.alert(`Failure!${err && err.message ? `\n\n${err.message}` : ""}`);
                          });
                      }}
                    >
                      Sign Message
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      if (connected(walletconnect)) {
                        (connector as any).close();
                      }
                      deactivate();
                    }}
                  >
                    Deactivate
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
