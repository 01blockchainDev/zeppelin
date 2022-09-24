const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
 const hre = require('hardhat');

const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("Box", function () {
    before(async function() {
        this.Box = await hre.ethers.getContractFactory('Box');
        this.box = await this.Box.deploy();
        await this.box.deployed();
    })

    // beforeEach(async function() {
    // })

    it('retrieve returns a value previously stored', async function() {
        await this.box.store(310);
        const value = await this.box._retrieve();
        expect((await this.box._retrieve())).to.equal('310');
    })
});
  