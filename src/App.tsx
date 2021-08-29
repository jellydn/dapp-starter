import { Web3ReactProvider } from "@web3-react/core";
import React from "react";

import "./App.css";
import SimpleStoreApp from "./SimpleStoreApp";
import Demo from "./components/Demo";
import { getLibrary } from "./components/Demo";

const VITE_BOX_ADDRESS = import.meta.env.VITE_BOX_ADDRESS;

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Demo />
        <header className="App-header">
          <SimpleStoreApp contractAddress={VITE_BOX_ADDRESS} />
        </header>
        <footer className="p-10 footer bg-base-200 text-base-content">
          <div>
            <p>
              ProductsWay
              <br />
              Built with love from{" "}
              <a className="link" href="https://github.com/jellydn">
                jellydn
              </a>
            </p>
          </div>
          <div>
            <span className="footer-title">Document</span>
            <a
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              Vite Docs
            </a>
            <a href="https://hardhat.org/" target="_blank" rel="noopener noreferrer" className="link link-hover">
              Hardhat
            </a>
            <a href="https://daisyui.com/" target="_blank" rel="noopener noreferrer" className="link link-hover">
              daisyUI
            </a>
            <a
              href="https://github.com/NoahZinsmeister/web3-react"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              Web3 React
            </a>
          </div>
          <div>
            <span className="footer-title">1-click Deployment</span>
            <a
              className="pl-2"
              href="https://vercel.com/new/git/external?repository-url=https://github.com/jellydn/dapp-starter/"
            >
              <img src="https://vercel.com/button" alt="Deploy with Vercel" />
            </a>
          </div>
        </footer>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
