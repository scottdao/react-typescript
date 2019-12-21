import * as bip39 from "bip39";
import changeNet from "./changeNet";
import * as bitCoin from "bitcoinjs-lib";
import hdKey from "ethereumjs-wallet/hdkey";

const commonMethod = () => {
  const mnemonic = bip39.generateMnemonic();
  const seed = bip39.mnemonicToSeed(mnemonic);
  const hdWallet = hdKey.fromMasterSeed(seed); //生成钱包，钱包存在公私钥
  return hdWallet;
};
const Net = bitCoin.networks[changeNet.coinNet].pubKeyHash;
export const btcFn = () => {
  // btc 地址
  const keyBtc = commonMethod().derivePath(changeNet.btcNetProtocol);
  const publicKey = keyBtc._hdkey._publicKey;
  const addressBtc = bitCoin.address.toBase58Check(
    bitCoin.crypto.hash160(publicKey),
    Net
  );
  return addressBtc;
};
