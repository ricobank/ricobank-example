import '@nomiclabs/hardhat-ethers'

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  networks: {
      arbitrum: {
        url: process.env["ARB_RPC_URL"],
        accounts: {
          mnemonic: process.env["ARB_MNEMONIC"]
        },
        chainId: 42161
      }
  }
}
