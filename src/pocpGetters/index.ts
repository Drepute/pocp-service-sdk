import { subgraphGetterFunction } from '../utils/subgraphGetters';
import {
  daoWithTxHash,
  membershipNFTsForClaimerOfDao,
  membershipNFTsWithHash,
} from '../subgraphQuery';

class PocpGetters {
  subgraphUrl: string;
  constructor(url: string) {
    this.subgraphUrl = url;
  }

  /*
   * @param community id
   * @returns Array of tokens
   * @throws "Error"
   */
  getdaoInfoForHash = async (txHash: string) => {
    try {
      const communityDetail = await subgraphGetterFunction(
        daoWithTxHash,
        {
          txHash,
        },
        this.subgraphUrl
      );
      return communityDetail;
    } catch (error) {
      throw error;
    }
  };

  membershipNftWithClaimerOfDao = async (
    claimer: string,
    contractAddress: string
  ) => {
    try {
      const communityDetail = await subgraphGetterFunction(
        membershipNFTsForClaimerOfDao,
        {
          claimer,
          contractAddress,
        },
        this.subgraphUrl
      );
      return communityDetail;
    } catch (error) {
      throw error;
    }
  };

  getMembershipNftsForHash = async (id: string) => {
    try {
      const communityDetail = await subgraphGetterFunction(
        membershipNFTsWithHash,
        {
          id,
        },
        this.subgraphUrl
      );
      return communityDetail;
    } catch (error) {
      throw error;
    }
  };

  getForCustomQuery = async (
    customQuery: string,
    variableObject?: any | undefined
  ) => {
    try {
      const approveToken = await subgraphGetterFunction(
        customQuery,
        variableObject && variableObject,
        this.subgraphUrl
      );

      return approveToken;
    } catch (error) {
      throw error;
    }
  };
}

export default PocpGetters;
