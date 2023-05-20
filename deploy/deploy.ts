import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Wallet } from "zksync-web3";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Factory contract`);

  // 填写你钱包私钥 需要zksync有足够的eth用于支付gas费用，大于0.008eth
  const wallet = new Wallet("");

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("Factory");

  // Estimate contract deployment fee
  //   const greeting = "Hi there!";
  const deploymentFee = await deployer.estimateDeployFee(artifact, []);

  // OPTIONAL: Deposit funds to L2
  // Comment this block if you already have funds on zkSync.
  //   const depositHandle = await deployer.zkWallet.deposit({
  //     to: deployer.zkWallet.address,
  //     token: utils.ETH_ADDRESS,
  //     amount: deploymentFee.mul(2),
  //   });
  //   // Wait until the deposit is processed on zkSync
  //   await depositHandle.wait();

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  // `greeting` is an argument for contract constructor.
  const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
  console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

  const FactoryContract = await deployer.deploy(artifact, []);

  //obtain the Constructor Arguments
  console.log("constructor args:" + FactoryContract.interface.encodeDeploy([]));

  // Show the contract info.
  const contractAddress = FactoryContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
