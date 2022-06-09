import { BigNumber, BigNumberish, utils } from 'ethers';

interface Config {
  contractAddr: string;
  logLevel: string;
  minimumProfit: number;
  gasPrice: BigNumber;
  gasLimit: BigNumberish;
  bscScanUrl: string;
  concurrency: number;
}

const contractAddr = '0x40F02A0852c7B2fbf8d8Dd8F4bAF269c385E3CdB'; // flash bot contract address
const gasPrice = utils.parseUnits('10', 'gwei');
const gasLimit = 300000;

const bscScanApiKey = 'ZWZJQVSPH32QFSNWTEFI77M29SR5KVEG86'; // bscscan API key
const bscScanUrl = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=${bscScanApiKey}`;

const config: Config = {
  contractAddr: contractAddr,
  logLevel: 'info',
  concurrency: 50,
  minimumProfit: 1, // in USD
  gasPrice: gasPrice,
  gasLimit: gasLimit,
  bscScanUrl: bscScanUrl,
};

export default config;
