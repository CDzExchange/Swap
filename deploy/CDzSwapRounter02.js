module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();

    const WETH = "0xeA289E94bfEf6EfF3C31C153282FB57AE499E4Fa";

    const factoryAddress = (await deployments.get("CDzSwapFactory")).address;

    await deploy("CDzSwapRouter02", {
        from: deployer,
        args: [factoryAddress, WETH],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["CDzSwapRouter02", "AMM"];
module.exports.dependencies = ["CDzSwapFactory"];