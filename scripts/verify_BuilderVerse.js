const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    address: "0x73AFb2008C5735d4493d6BaEce8bdEE653760118",
    contract: "contracts/BuilderVerse.sol:BuilderVerse",
    constructorArguments: ["0x1234567890123456789012345678901234567890"],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 