const hre = require("hardhat");

async function main() {
    const accounts = await hre.ethers.provider.listAccounts();
    console.log(accounts);

    const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const Box = await hre.ethers.getContractFactory('Box');
    const box = await Box.attach(address);

    const value = await box._retrieve();
    console.log('Box value is:', value);

    await box.store("310");

    const value1 = await box._retrieve();
    console.log("Changed Box value is:", value1);
}

main()
.then(()=> process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
})


