import { ethers, deployments, getNamedAccounts } from "hardhat";

describe("CDzSwapRouter02", function () {
    it("AddLiquidity", async function(){
        const { deployer }  = await getNamedAccounts()
        const tokenA = await ethers.getContractAt("BEP20", "0x333668B7AD6f861b81136164E6adE4469873724A")
        const tokenB = await ethers.getContractAt("BEP20", "0x0D2Abd1B8DF7ac7007c06813768861990bceEF18")
        const router = await ethers.getContractAt("CDzSwapRouter02", "0x6915e23FF02F77A035C2658e68ac14d2ed01AE57")
        const amountA = "10000000000000000000000"
        const amountB = "10000000000000000000000"
        await (await tokenA.connect(deployer).approval(router.address, amountA).wait())
        await (await tokenB.connect(deployer).approval(router.address, amountB).wait())
        const result = await router.connect(deployer).addLiquidity(tokenA.address, tokenB.address, amountA, amountB, "100", "100", deployer)
        console.log(result)
    })
})