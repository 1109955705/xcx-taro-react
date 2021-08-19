/**
 * 一对一广播秤
 */
import { QNBleProtocolProfile, QNBleBaseScaleProtocol } from '../QNBleProtocol';
import QNBleNativeDevice from '../QNBleNativeDevice';
import QNBleDevice from '../QNBleDevice';
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from '../consts';
import QNBleTypings from '../typings';
declare class OneToOneBroadcastScaleProfile implements QNBleProtocolProfile {
  defaultAction: QNBleAction;
  type: QNBleDeviceType;
  transferType: QNBleTransferType;
  isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
  buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class OneToOneBroadcastScaleProtocol extends QNBleBaseScaleProtocol<QNBleTypings.QNBaseScaleMeasureEventListener> {
  static bleProfile: OneToOneBroadcastScaleProfile;
  measureCount: number;
  currentAdvertis: string;
  baseTime: number;
  appMac: number[];
  prepare(): Promise<any>;
  /**
   * @override
   * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
   */
  decode(
    payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>
  ): Promise<any>;
  buildAdvertisingData(data: number[]): number[];
  dispatchSteadyData(weight: number, data: number[]): Promise<any>;
}
export {};
