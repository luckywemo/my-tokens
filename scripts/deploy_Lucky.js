const hre = require("hardhat");

async function main() {
  // Replace this with the desired owner address
  const ownerAddress = "0x3665145cf8512Ef9A73d287B3389D561050c317D";
  
  const Lucky = await hre.ethers.getContractFactory("Lucky");
  const lucky = await Lucky.deploy(ownerAddress);

  await lucky.waitForDeployment();

  console.log("Lucky deployed to:", await lucky.getAddress());
  console.log("Owner address:", ownerAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 