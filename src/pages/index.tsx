import { Web3ReactProvider } from "@web3-react/core";
import dynamic from "next/dynamic";

import Demo, { getLibrary } from "../components/Demo";

const ThemeToggle = dynamic(async () => import("../components/ThemeToggle"), {
  ssr: false,
});

function App() {
  return (
    <>
      <ThemeToggle />
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className="container mx-auto min-h-screen">
          <Demo />
          <div className="hero">
            <div className="text-center hero-content">
              <div className="py-8 px-4 max-w-md">
                <figure className="mb-5">
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="mask mask-squircle"
                  />
                </figure>
                <h1 className="mb-5 text-5xl font-bold">Hello Dapp Starter</h1>
                <p className="mb-5">
                  Edit <code>pages/index.tsx</code> and save to test HMR
                  updates.
                </p>
              </div>
            </div>
          </div>
        </div>
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
              href="https://nextjs.org/docs/getting-started"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              Nextjs Docs
            </a>
            <a
              href="https://hardhat.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              Hardhat
            </a>
            <a
              href="https://daisyui.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
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
      </Web3ReactProvider>
    </>
  );
}

export default App;
