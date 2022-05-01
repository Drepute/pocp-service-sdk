import axios from 'axios';
import { relayerRequestData, RelayRequestResponse } from '../types';

export enum RelayMethodFunctionCall {
  REGISTER,
  ADD_APPROVER,
  REMOVE_APPROVER,
  CLAIM,
  BURN,
  APPROVE,
}

export const relayerServerCall = async (
  relayerToken: string,
  functionCall: RelayMethodFunctionCall,
  request: relayerRequestData,
  signature: string
): Promise<RelayRequestResponse> => {
  const data = {
    function: functionCall,
    request_data: request,
    signature,
    callback_api: 'https://staging.api.drepute.xyz/eth/callback',
  };
  try {
    const res = await axios.post(
      `https://staging.api.drepute.xyz:5001/eth/relay`,
      data,
      {
        headers: {
          'X-Authentication': relayerToken,
        },
      }
    );

    return { transactionHash: res.data.data.hash };
  } catch (error) {
    throw error;
  }
};
