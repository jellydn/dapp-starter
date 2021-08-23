import { Web3ReactProvider } from "@web3-react/core";
import React from "react";

import "./App.css";
import Demo from "./components/Demo";
import { getLibrary } from "./components/Demo";
import logo from "./logo.svg";

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Demo />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Dapp Starter!</p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
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
            <span className="footer-title">Company</span>
          </div>
          <div>
            <span className="footer-title">Legal</span>
          </div>
        </footer>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
