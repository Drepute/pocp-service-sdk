//abi imports for mumbai network
import {
  deployed_address,
  deployed_address_polygon,
  networks_ENUM,
} from '../constants';

import pocpMangerAbi from '../contracts/abi/manager/Manager.json';
import pocpBeaconAbi from '../contracts/abi/beacon/Beacon.json';
import pocpProxyAbi from '../contracts/abi/proxy/pocpProxy.json';
import pocpRouterAbi from '../contracts/abi/router/Router.json';

class ContractManager {
  network: number;

  constructor(givenNetwork: number) {
    this.network = givenNetwork;
  }

  getAddress = () => {
    switch (this.network) {
      case networks_ENUM.MUMBAI:
        return {
          pocpManger: deployed_address.POCP_Manager,
          pocpBeacon: deployed_address.POCP_Beacon,
          pocpRouter: deployed_address.POCP_Router,
        };
      case networks_ENUM.POLYGON:
        return {
          pocpManger: deployed_address_polygon.POCP_Manager,
          pocpBeacon: deployed_address_polygon.POCP_Beacon,
          pocpRouter: deployed_address_polygon.POCP_Router,
        };
      default:
        return {
          pocpManger: 'not_deployed',
          pocpBeacon: 'not_deployed',
          pocpRouter: 'not_deployed',
        };
    }
  };

  getAbi = () => {
    switch (this.network) {
      case networks_ENUM.MUMBAI:
        return {
          pocpManger: pocpMangerAbi.abi,
          pocpBeacon: pocpBeaconAbi.abi,
          pocpProxy: pocpProxyAbi.abi,
          pocpRouter: pocpRouterAbi.abi,
        };
      case networks_ENUM.POLYGON:
        return {
          pocpManger: pocpMangerAbi.abi,
          pocpBeacon: pocpBeaconAbi.abi,
          pocpProxy: pocpProxyAbi.abi,
          pocpRouter: pocpRouterAbi.abi,
        };
      default:
        return {
          pocpManger: pocpMangerAbi.abi,
          pocpBeacon: pocpBeaconAbi.abi,
          pocpProxy: pocpProxyAbi.abi,
          pocpRouter: pocpRouterAbi.abi,
        };
    }
  };
}

export default ContractManager;
