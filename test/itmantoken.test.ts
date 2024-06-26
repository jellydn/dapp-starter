import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("ITManToken", () => {
  it("Should return the token name", async () => {
    const ITManToken = await ethers.getContractFactory("ITManToken");
    const owner = await ethers.getSigner(
      "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
    );
    const itManToken = await upgrades.deployProxy(ITManToken, [owner.address]);
    await itManToken.deployed();

    expect(await itManToken.name()).to.equal("ITManToken");
  });

  it("Should return the token symbol", async () => {
    const ITManToken = await ethers.getContractFactory("ITManToken");
    const owner = await ethers.getSigner(
      "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
    );
    const itManToken = await upgrades.deployProxy(ITManToken, [owner.address]);
    await itManToken.deployed();

    expect(await itManToken.symbol()).to.equal("ITM");
  });

  it("Should return decimals", async () => {
    const ITManToken = await ethers.getContractFactory("ITManToken");
    const owner = await ethers.getSigner(
      "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
    );
    const itManToken = await upgrades.deployProxy(ITManToken, [owner.address]);
    await itManToken.deployed();

    expect(await itManToken.decimals()).to.equal(18);
  });

  it("Should have total supply", async () => {
    const ITManToken = await ethers.getContractFactory("ITManToken");
    const owner = await ethers.getSigner(
      "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
    );
    const itManToken = await upgrades.deployProxy(ITManToken, [owner.address]);
    await itManToken.deployed();

    expect(await itManToken.totalSupply()).to.equal(
      ethers.BigNumber.from("1000000000000000000000000"),
    );
  });
});
