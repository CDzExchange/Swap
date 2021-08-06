const {
    ethers: { utils: { keccak256, defaultAbiCoder, toUtf8Bytes, solidityPack } },
} = require("ethers")

module.exports = async function ({ ethers, getNamedAccounts, deployments, getChainId }) {
    const { deploy } = deployments;
    const { deployer, dev } = await getNamedAccounts();
    await deploy("CDzSwapFactory", {
        from: deployer,
        args: [dev],
        log: true,
        deterministicDeployment: false,
    });

    const artifacts = await deployments.getArtifact("CDzSwapPair")
    const bytecode = artifacts.bytecode;
    const initCodeHash = keccak256(bytecode)

    console.log("pair hash:", initCodeHash)
};

module.exports.tags = ["CDzSwapFactory", "AMM"];