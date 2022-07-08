export enum EventsEnum {
  DaoContractDeployed = 'ProxyDeployed',
  MembershipClaimed = 'Claimed',
  IssueBadge = 'Issue',
  FunctionRouted = 'FunctionRouted',
}

export const eventListener = async (
  contractInstance: any,
  eventType: EventsEnum,
  callbackFunction: Function,
  txHash: string
) => {
  contractInstance?.on(eventType, async (...args: any[]) => {
    if (args[args.length - 1].transactionHash === txHash) {
      try {
        await callbackFunction(args);
      } catch (error) {
        throw error;
      }
    }
  });
};
