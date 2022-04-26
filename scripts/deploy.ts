import { ethers } from "hardhat";

async function main() {

  const TimeLock = await ethers.getContractFactory("TimeLock");
  const timelock = await TimeLock.deploy(60);

  await timelock.deployed();

  console.log("TimeLock deployed to:", timelock.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
