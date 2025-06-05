const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    address: "0x91a7472C5BC8D6ceAAe20acA0828ba09aE644E77",
    contract: "contracts/Lucky.sol:Lucky",
    constructorArguments: ["0x3665145cf8512Ef9A73d287B3389D561050c317D"],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 