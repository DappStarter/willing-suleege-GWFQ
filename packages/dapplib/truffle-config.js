require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note soccer pulse grace clinic sun gentle'; 
let testAccounts = [
"0x74548517e58cb6974c462f0c48239c863c05371cc7ad9af6158d41895dbad1a5",
"0x96fcdb9b58910fe3024e07361171b433b17a669f20273062f3d7b97b33d12a71",
"0x8a525406c5f68bcc7723b70cb35dcded2962cdfcddb50b00c88bad160edd5e62",
"0xcbfc761906276f7a96b897218c640bdb71becf0cde412542570bf00f889f27eb",
"0x33132ecc852f711287412028944c004c59aeb25025d32ff12ed66bb1787b2024",
"0x0dfbe912ae3684d53b39c0f0ae7b0288574003aee03fc21bd2b1fb3b9f04394e",
"0x143501d8bacac20917d35babd19c9dac75c7ce88831854a4ce7d32d5d80e6e3a",
"0xbe0ace2e50a44823c3cbe6988e0fd5d71ae11747688d84baa5364da081fba181",
"0x40df8b05fa8351b97117d1a2098b43ab0f04c928ccc640ee7a168b4edd755801",
"0xbc79bee184cf3a810f462d13f52f38dea36b90eec3541c8b59d7968b979e5c9d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


