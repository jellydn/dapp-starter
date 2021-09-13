import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const POLLING_INTERVAL = 12000;
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 88, 89, 97, 137, 1337, 80001],
});

const RPC_URLS: { [chainId: number]: string } = {
  1: import.meta.env.VITE_RPC_URL_1,
  3: import.meta.env.VITE_RPC_URL_3,
  4: import.meta.env.VITE_RPC_URL_4,
  1337: "http://127.0.0.1:8545/",
};

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  qrcode: true,
});
