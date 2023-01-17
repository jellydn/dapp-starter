/* eslint-disable no-nested-ternary */
import { useWeb3React } from "@web3-react/core";
import Script from "next/script";

import { Account } from "./Account";
import { Balance } from "./Balance";
import { ChainId } from "./ChainId";

export const Header = function () {
  const { active, error } = useWeb3React();

  return (
    <div className="mb-2 shadow-lg navbar bg-neutral text-neutral-content rounded-box">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5337133458846513"
        crossOrigin="anonymous"
      />
      <Script async defer src="https://analytics.umami.is/script.js" data-website-id="2b85d47b-5bd9-407e-b64d-61f1181a0860" />

      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">{active ? "🟢" : error ? "🔴" : "🟠"}</span>
      </div>
      <div className="hidden flex-none px-2 mx-2 lg:flex">
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
