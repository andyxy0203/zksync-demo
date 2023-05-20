# 编译合约
pnpm hardhat compile

# 部署主网合约
pnpm hardhat deploy-zksync --network zkSyncMainnet
# 部署测试网合约
pnpm hardhat deploy-zksync --network zkSyncTestnet

# 以上部署完合约，会得到你要部署的合约地址，比如 0x91DD5a420b26C47DBe939fF29Ecc06ad588184FD
# Running deploy script for the Factory contract
# The deployment is estimated to cost 0.000693792 ETH
# constructor args:0x
# Factory was deployed to 0x91DD5a420b26C47DBe939fF29Ecc06ad588184FD

# 开源测试网合约
pnpm hardhat verify --network zkSyncTestnet {contractAddress}
# 开源主网合约
pnpm hardhat verify --network zkSyncMainnet {contractAddress}