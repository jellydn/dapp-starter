/* eslint-disable no-nested-ternary */
import { useWeb3React } from "@web3-react/core";
import Head from "next/head";

import { Account } from "./Account";
import { Balance } from "./Balance";
import { ChainId } from "./ChainId";

export const Header = function () {
  const { active, error } = useWeb3React();

  return (
    <div className="mb-2 shadow-lg navbar bg-neutral text-neutral-content rounded-box">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5337133458846513"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">{active ? "🟢" : error ? "🔴" : "🟠"}</span>
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <ChainId />
          <Account />
          <Balance />
        </div>
      </div>
    </div>
  );
};

export default Header;
