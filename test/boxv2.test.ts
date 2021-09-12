import { expect } from "chai";
import { ethers } from "hardhat";

describe("BoxV2", () => {
  it("Should return the new value once it's changed", async () => {
    const Box = await ethers.getContractFactory("BoxV2");
    const box = await Box.deploy();
    await box.deployed();

    expect(await box.retrieve()).to.equal(0);

    const setStoreTx = await box.store(42);

    // wait until the transaction is mined
    await setStoreTx.wait();

    expect(await box.retrieve()).to.equal(42);
  });
  it("Should increase the new value", async () => {
    const Box = await ethers.getContractFactory("BoxV2");
    const box = await Box.deploy();
    await box.deployed();

    expect(await box.retrieve()).to.equal(0);

    const setStoreTx = await box.increment();

    // wait until the transaction is mined
    await setStoreTx.wait();

    expect(await box.retrieve()).to.equal(1);
  });
});
