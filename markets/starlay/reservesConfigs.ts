import { eContractid, IReserveParams } from '../../helpers/types';
import {
  rateStrategyLAY,
  rateStrategyStable,
  rateStrategyStableTwo,
  rateStrategyWASTR,
  rateStrategyWBTC,
  rateStrategyWETH,
  rateStrategyWSDN,
} from './rateStrategies';

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyStable,
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '6',
  lTokenImpl: eContractid.LToken,
  reserveFactor: '1000',
};

export const strategyUSDT: IReserveParams = strategyUSDC;

export const strategyLAY: IReserveParams = {
  strategy: rateStrategyLAY,
  baseLTVAsCollateral: '0',
  liquidationThreshold: '0',
  liquidationBonus: '0',
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  lTokenImpl: eContractid.LToken,
  reserveFactor: '0',
};

export const strategyWETH: IReserveParams = {
  strategy: rateStrategyWETH,
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  lTokenImpl: eContractid.LToken,
  reserveFactor: '1000',
};

export const strategyWBTC: IReserveParams = {
  strategy: rateStrategyWBTC,
  baseLTVAsCollateral: '7000',
  liquidationThreshold: '7500',
  liquidationBonus: '11000',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '8',
  lTokenImpl: eContractid.LToken,
  reserveFactor: '2000',
};

export const strategyWASTR: IReserveParams = {
  strategy: rateStrategyWASTR,
  baseLTVAsCollateral: '4000',
  liquidationThreshold: '5500',
  liquidationBonus: '11500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  lTokenImpl: eContractid.LToken,
  reserveFactor: '2000',
};

export const strategyWSDN: IReserveParams = {
  strategy: rateStrategyWSDN,
  baseLTVAsCollateral: '4000',
  liquidationThreshold: '5500',
  liquidationBonus: '11500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  lTokenImpl: eContractid.LToken,
  reserveFactor: '2000',
};

// only for test
export const strategyDAI: IReserveParams = {
  strategy: rateStrategyStableTwo,
  baseLTVAsCollateral: '7500',
  liquidationThreshold: '8000',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  lTokenImpl: eContractid.LToken,
  reserveFactor: '1000',
};
