const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    address: "0x4f49DeF6918Aeaed386128f82E340Adff010C6a2",
    constructorArguments: [],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 