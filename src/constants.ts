import { NodeHelper } from "./helpers/NodeHelper";
import { EnvHelper } from "./helpers/Environment";
import ethereum from "./assets/tokens/wETH.svg";
import arbitrum from "./assets/arbitrum.png";
import avalanche from "./assets/tokens/AVAX.svg";
import polygon from "./assets/tokens/polygon.svg";
import binance from "./assets/binance.png";

export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-protocol-metrics";
// export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/teradev203/crypstarterdao";


export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  4: {
    // DAI_ADDRESS: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C", // duplicate
    FAIRLAUNCH_ADDRESS: "0xAb4b6c165fCD15dBbdF9276Ef974479A314054AB",
    CSTP_ADDRESS: "0xbfA776B797De1A99a29Fde68b63f114c6eBaDcc0", // duplicate
    PRESALE_ADDRESS:"0xAb4b6c165fCD15dBbdF9276Ef974479A314054AB",
    DAI_ADDRESS: "0xF95BD116A3A3E0053b0B757892450E5FCD55CaBF", // duplicate
    CST_ADDRESS: "0x6959a327a1EF8eA58A732a9548C775aB9Ac76002", // 0xC0b491daBf3709Ee5Eb79E603D73289Ca6060932
    STAKING_ADDRESS: "0xE46264D6b1FA3923Dcddc2f34E9d7ADE0c8eBDCe", // 0xC5d3318C0d74a72cD7C55bdf844e24516796BaB2
    STAKING_HELPER_ADDRESS: "0x701127E09553404086FA28f5348EF4a396aC1651", // 0xf73f23Bb0edCf4719b12ccEa8638355BF33604A1
    OLD_STAKING_ADDRESS: "0xb640AA9082ad720c60102489b806E665d67DCE32",
    SCST_ADDRESS: "0xbcffc2Eed8cb2272dF7dad67AFa6AF5261d50676", // 0x1Fecda1dE7b6951B248C0B62CaeBD5BAbedc2084
    OLD_SPID_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x9dB85ba9fB6fEF9796FdbeacB3cb2E0F09ceBF87", // "0x0626D5aD2a230E05Fb94DF035Abbd97F2f839C3a",
    BONDINGCALC_ADDRESS: "0xaDBE4FA3c2fcf36412D618AfCfC519C869400CEB",
    CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0xca25ff1d6daa8eb782b85f688a446750e2458cd6", // 0x0d722D813601E4y8b7DAcb2DF9bae282cFd98c6E7
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
    USDT_ADDRESS:'0x01547Ef97f9140dbDF5ae50f06B77337B95cF4BB',
  },
  56: {
    CST_ADDRESS: "0xC182A1995C0fe330B88fB3f3c04B3c59004f1AC5",
    FAIRLAUNCH_ADDRESS: "0x802bc8838E3A700a1E986F7d1316c4f5B935E529",
    PRESALE_ADDRESS:"",
    CSTP_ADDRESS: "0xF95BD116A3A3E0053b0B757892450E5FCD55CaBF", // duplicate
    DAI_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // duplicate
    STAKING_ADDRESS: "0xE46264D6b1FA3923Dcddc2f34E9d7ADE0c8eBDCe", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xD4BAB1B30002073a02eAA325e0Fc04C208ca6a49", // Helper contract used for Staking only
    SCST_ADDRESS: "0x8f74a681D5357DddeC9bd9967e256a2fb467B9A4",
    DISTRIBUTOR_ADDRESS: "0xE375C9E5745FDA11f0DfE76383bfC102Ae599aD6",
    BONDINGCALC_ADDRESS: "0xd9145CCE52D386f254917e481eB44e9943F39138",
    TREASURY_ADDRESS: "0xc1F2477B33a987605377b600f5406e89DE70f017",
    REDEEM_HELPER_ADDRESS: "0x912B1989391BD8Ee98ccE3D1F92a6231416619e9",
    BUSDBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    DAIBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    USDTBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    BUSDLPBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",

    IDO_ADDRESS:'0x3Ae07374d7C89f608906321444e8AFdED91aDA5E',
    BUSD_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56',
    USDT_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56',
  },
  97: {
    KAGE_ADDRESS:"0x3796Ccb72dafBC8A09D88C7Fe8E340E7d7063655",
    KAGESTAKING_ADDRESS:"0x79ED076B10C849f068E071B6AD46a76F4ebF7850",

    CST_ADDRESS: "0xC182A1995C0fe330B88fB3f3c04B3c59004f1AC5",
    FAIRLAUNCH_ADDRESS: "0x802bc8838E3A700a1E986F7d1316c4f5B935E529",
    PRESALE_ADDRESS:"",
    CSTP_ADDRESS: "0xF95BD116A3A3E0053b0B757892450E5FCD55CaBF", // duplicate
    DAI_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // duplicate
    STAKING_ADDRESS: "0xE46264D6b1FA3923Dcddc2f34E9d7ADE0c8eBDCe", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xD4BAB1B30002073a02eAA325e0Fc04C208ca6a49", // Helper contract used for Staking only
    SCST_ADDRESS: "0x8f74a681D5357DddeC9bd9967e256a2fb467B9A4",
    DISTRIBUTOR_ADDRESS: "0xE375C9E5745FDA11f0DfE76383bfC102Ae599aD6",
    BONDINGCALC_ADDRESS: "0xd9145CCE52D386f254917e481eB44e9943F39138",
    TREASURY_ADDRESS: "0xc1F2477B33a987605377b600f5406e89DE70f017",
    REDEEM_HELPER_ADDRESS: "0x912B1989391BD8Ee98ccE3D1F92a6231416619e9",
    BUSDBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    DAIBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    USDTBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    BUSDLPBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",

    IDO_ADDRESS:'0x3Ae07374d7C89f608906321444e8AFdED91aDA5E',
    BUSD_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56',
    USDT_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56',
  },
  4002: {
    FAIRLAUNCH_ADDRESS: "0x5b55e27bCD7522E4e393DaF2c754498a0c2d818A",
    DAI_ADDRESS: "0x3923D2ec541e8dD40D8C0fA3cB4d109f59E7d35C", // duplicate
    BUSD_ADDRESS:'0x3923D2ec541e8dD40D8C0fA3cB4d109f59E7d35C'
  },
};

/**
 * Network details required to add a network to a user's wallet, as defined in EIP-3085 (https://eips.ethereum.org/EIPS/eip-3085)
 */

interface INativeCurrency {
  name: string;
  symbol: string;
  decimals?: number;
}

interface INetwork {
  chainName: string;
  chainId: number;
  nativeCurrency: INativeCurrency;
  rpcUrls: string[];
  blockExplorerUrls: string[];
  image: SVGImageElement;
  imageAltText: string;
  uri: () => string;
}

// These networks will be available for users to select. Other networks may be functional
// (e.g. testnets, or mainnets being prepared for launch) but need to be selected directly via the wallet.
// export const USER_SELECTABLE_NETWORKS = [1, 56, 42161, 43114];
export const USER_SELECTABLE_NETWORKS = [3, 97, 80001];

// Set this to the chain number of the most recently added network in order to enable the 'Now supporting X network'
// message in the UI. Set to -1 if we don't want to display the message at the current time.
export const NEWEST_NETWORK_ID = 43114;

export const NETWORKS: { [key: number]: INetwork } = {
  1: {
    chainName: "Ethereum",
    chainId: 1,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.infura.io/v3/"],
    blockExplorerUrls: ["https://etherscan.io/#/"],
    image: ethereum,
    imageAltText: "Ethereum Logo",
    uri: () => NodeHelper.getMainnetURI(1),
  },
  3: {
    chainName: "Ropsten Testnet",
    chainId: 3,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://ropsten.infura.io/v3/"],
    blockExplorerUrls: ["https://ropsten.etherscan.io/#/"],
    image: ethereum,
    imageAltText: "Ethereum Logo",
    uri: () => NodeHelper.getMainnetURI(3),
  },
  56: {
    chainName: "Binance",
    chainId: 56,
    nativeCurrency: {
      name: "Binance",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed1.binance.org/"],
    blockExplorerUrls: ["https://bscscan.io/#/"],
    image: binance,
    imageAltText: "Binance Logo",
    uri: () => NodeHelper.getMainnetURI(56),
  },
  97: {
    chainName: "Binance Test",
    chainId: 97,
    nativeCurrency: {
      name: "Binance",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    blockExplorerUrls: ["https://testnet.bscscan.io/#/"],
    image: binance,
    imageAltText: "Binance Logo",
    uri: () => NodeHelper.getMainnetURI(97),
  },
  137: {
    chainName: "Polygon",
    chainId: 137,
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
    blockExplorerUrls: ["https://explorer.matic.network/"],
    image: polygon,
    imageAltText: "Avalanche Logo",
    uri: () => NodeHelper.getMainnetURI(137),
  },
  42161: {
    chainName: "Arbitrum",
    chainId: 42161,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://explorer.arbitrum.io/#/"],
    image: arbitrum,
    imageAltText: "Arbitrum Logo",
    uri: () => NodeHelper.getMainnetURI(42161),
  },
  43113: {
    chainName: "Avalanche Fuji Testnet",
    chainId: 43113,
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://testnet.snowtrace.io/#/"],
    image: avalanche,
    imageAltText: "Avalanche Logo",
    uri: () => EnvHelper.alchemyAvalancheTestnetURI,
  },
  43114: {
    chainName: "Avalanche",
    chainId: 43114,
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
    image: avalanche,
    imageAltText: "Avalanche Logo",
    uri: () => NodeHelper.getMainnetURI(43114),
  },
  80001: {
    chainName: "Polygon Testnet",
    chainId: 80001,
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"],
    image: polygon,
    imageAltText: "Avalanche Logo",
    uri: () => NodeHelper.getMainnetURI(80001),
  },
  421611: {
    chainName: "Arbitrum Testnet",
    chainId: 421611,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io/#/"],
    image: arbitrum,
    imageAltText: "Arbitrum Logo",
    uri: () => EnvHelper.alchemyArbitrumTestnetURI,
  },
};

// VIEWS FOR NETWORK is used to denote which paths should be viewable on each network
// ... attempting to prevent contract calls that can't complete & prevent user's from getting
// ... stuck on the wrong view
interface IViewsForNetwork {
  dashboard: boolean;
  stake: boolean;
  wrap: boolean;
  zap: boolean;
  threeTogether: boolean;
  bonds: boolean;
  network: boolean;
}

export const VIEWS_FOR_NETWORK: { [key: number]: IViewsForNetwork } = {
  1: {
    dashboard: true,
    stake: true,
    wrap: true,
    zap: true,
    threeTogether: true,
    bonds: true,
    network: true,
  },
  3: {
    dashboard: true,
    stake: true,
    wrap: true,
    zap: true,
    threeTogether: true,
    bonds: true,
    network: true,
  },
  56: {
    dashboard: true,
    stake: true,
    wrap: false,
    zap: false,
    threeTogether: true,
    bonds: true,
    network: true,
  },
  97: {
    dashboard: true,
    stake: true,
    wrap: false,
    zap: false,
    threeTogether: true,
    bonds: true,
    network: true,
  },
  137: {
    dashboard: true,
    stake: false,
    wrap: false,
    zap: false,
    threeTogether: true,
    bonds: false,
    network: true,
  },
  42161: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
  },
  43113: {
    dashboard: true,
    stake: true,
    wrap: false,
    zap: false,
    threeTogether: true,
    bonds: true,
    network: true,
  },
  43114: {
    dashboard: true,
    stake: true,
    wrap: false,
    zap: false,
    threeTogether: true,
    bonds: true,
    network: true,
  },
  80001: {
    dashboard: true,
    stake: false,
    wrap: false,
    zap: false,
    threeTogether: true,
    bonds: false,
    network: true,
  },
  421611: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
  },
};
