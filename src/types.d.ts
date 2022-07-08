export interface IContractAddress {
  pocpManger: string;
  pocpBeacon: string;
  pocpRouter: string;
}

export interface IContractAbi {
  pocpManger: string | any;
  pocpBeacon: string | any;
  pocpProxy: string | any;
  pocpRouter: string | any;
}

export interface IContractFactory {
  network: number;
  getAddress(): IContractAddress;
  getAbi(): any;
}

export interface IContract {
  pocpManager: any | undefined;
  pocpBeacon: any | undefined;
}

export interface RegisterDaoResponse {
  transactionReceipt: any;
  communityId: number;
}

export interface RelayRequestResponse {
  transactionHash: string;
}

export interface IPocpConfig {
  biconomyInstance?: any;
  apiKey: number;
  relayURL: string;
}

export interface relayerData {
  daoName?: string;
  approverAddresses?: [string];
  communityId?: number;
  claimerAddresses?: [string];
  ipfsUrls?: [string];
  arrayOfIdentifiers?: [string];
  tokenIds?: [number];
}

export interface relayerRequestData {
  from: string;
  to: string;
  nonce: number;
  value: number;
  gas: number;
  data: string | boolean | undefined;
}

export type RegisterEventCallback = (
  communityId: number,
  communityName: string,
  txSigner: string
) => any;
