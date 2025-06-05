const hre = require("hardhat");

async function main() {
  const BASED = await hre.ethers.getContractFactory("BASED");
  const based = await BASED.deploy();

  await based.waitForDeployment();

  console.log("BASED deployed to:", await based.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 