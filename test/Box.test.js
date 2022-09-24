const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
//   const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
//   const { expect } = require("chai");
//  const hre = require('hardhat');

// const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

// describe("Box", function () {
//     before(async function() {
//         this.Box = await hre.ethers.getContractFactory('Box');
//         this.box = await this.Box.deploy();
//         await this.box.deployed();
//     })

//     // beforeEach(async function() {
//     // })

//     it('retrieve returns a value previously stored', async function() {
//         await this.box.store(310);
//         const value = await this.box._retrieve();
//         expect((await this.box._retrieve())).to.equal('310');
//     })
// });

const { expect } = require('chai');

const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { artifacts } = require("hardhat");

const Box = artifacts.require('Box');

contract('Box', function([owner, other]) {
    const value = new BN('42');

    beforeEach(async function() {
        this.box = await Box.new({from: owner});
    })

    it('retrieve returns a value previously stored:', async function() {
        await this.box.store(value, {from: owner});

        expect(await this.box._retrieve()).to.be.bignumber.equal(value);
    })

    it('store emits an event', async function() {
        const receipt = await this.box.store(value, {from: owner});
        expectEvent(receipt, 'ValueChanged', {value: value});
    })

    it('non owner cannot store a value', async function() {
        await expectRevert(
            this.box.store(value, {from:other}),
            'Ownable: caller is not the owner'
        )
    })
})