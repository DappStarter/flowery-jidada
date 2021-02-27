require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note predict clutch gesture cart equal gasp'; 
let testAccounts = [
"0xd41af6908ac9a346129b7671dabffcfb63d5a8279c86388cd3d4a7b52f2121ae",
"0x3827a030fbf7a8f805bfb2f3a80e8dbc908210a42bf1d8aa5e307c1457ed8f47",
"0xf6bd48a8b1d045701c973eaa024ec0f8d53c2fcc9850c8885873ef00d60af843",
"0x950bcfb7909f68b965e46fa37d5f34c4ff2a4864e181741687d6bc0692363dad",
"0xd64d5cd34d583783fc615ba60eb3ee50d4d571aeb549d7992cec217922387f12",
"0xb690989c7b8ae624a463838e3da5e0d4dea49121b41dd029bf84479e25e0611a",
"0x1ba23a7d2f33c5e5975e1f094966690c19d848e052a917ea7b83f5144a66a673",
"0xc16a94858e4fb525e3259d359d7d884736ef49f407f46bbbe1b7f0eac4da21fe",
"0x0aeca6d9bc4de86afabb86976c3ebf7ef0dd97aa0b19f2de96783e06dd64b4a3",
"0x8f80c2bcca5c12735bb4db905a2fa020ba649d8a3a99f19a783d4a37cbe5d0a8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
