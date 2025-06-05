const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    address: "0xF7287d281F42d754CcD3bE81bB5CcECA84B7d39C",
    contract: "contracts/LuckSol.sol:LuckSol",
    constructorArguments: ["0x3665145cf8512Ef9A73d287B3389D561050c317D"],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 