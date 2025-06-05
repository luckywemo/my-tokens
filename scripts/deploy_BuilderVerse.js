const hre = require("hardhat");

async function main() {
  // Replace this with the desired owner address
  const ownerAddress = "0x3665145cf8512Ef9A73d287B3389D561050c317D"; // Example address
  
  const BuilderVerse = await hre.ethers.getContractFactory("BuilderVerse");
  const builderVerse = await BuilderVerse.deploy(ownerAddress);

  await builderVerse.waitForDeployment();

  console.log("BuilderVerse deployed to:", await builderVerse.getAddress());
  console.log("Owner address:", ownerAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 