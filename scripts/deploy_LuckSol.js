const hre = require("hardhat");

async function main() {
  // Replace this with the desired owner address
  const ownerAddress = "0x3665145cf8512Ef9A73d287B3389D561050c317D";
  
  const LuckSol = await hre.ethers.getContractFactory("LuckSol");
  const luckSol = await LuckSol.deploy(ownerAddress);

  await luckSol.waitForDeployment();

  console.log("LuckSol deployed to:", await luckSol.getAddress());
  console.log("Owner address:", ownerAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 