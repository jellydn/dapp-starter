// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// eslint-disable-next-line import/no-extraneous-dependencies
import hre from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ITManToken = await hre.ethers.getContractFactory("ITManToken");
  const itManToken = await hre.upgrades.deployProxy(ITManToken);

  await itManToken.deployed();
  console.log("ITManToken deployed to:", itManToken.address);
  console.log("Name", await itManToken.name());
  console.log("Symbol", await itManToken.symbol());
  console.log("Decimals", await itManToken.decimals());
  console.log("Total Supply", await itManToken.totalSupply());
  console.log("Owner", await itManToken.owner());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
