import { QNBleAction, QNBleUnit, QNBleErrorType } from './consts';
import QNBleProtocol from './QNBleProtocol';
import QNEvent from './QNEvent';
import QNBleDevice from './QNBleDevice';
import QNBleNativeDevice from './QNBleNativeDevice';
import QNBleError from './QNBleError';
import QNBleNative from './QNBleNative';
import QNEventManager from './QNEventManager';
declare namespace QNBleTypings {
    interface QNBleErrorDesc<T extends QNBleErrorType> {
        T: {
            code: T;
            desc: string;
        };
    }
    interface WxMiniprogramFunctionParams {
        success?(res: any): void;
        fail?(err: any): void;
        complete?(): void;
        deviceId?: string;
        [x: string]: any;
    }
    type WxMiniprogramFunction = (params: WxMiniprogramFunctionParams) => void;
    type WxMiniprogramFunctionFaillParams = {
        errMsg: string;
        code?: number;
    };
    interface InitFuncReturnValue {
        bleEnableState: boolean;
        available: boolean;
        discovering: boolean;
    }
    interface BleState {
        available: boolean;
        discovering: boolean;
    }
    type QNBleTypedSdkConfig = {
        business_info: {
            default_model: string;
            default_method: number;
            default_added_flag: 0 | 1;
            default_index_flag: number;
            connect_other: 0 | 1;
        };
        business_models: {
            dis_model: string;
            internal_model: string;
            body_index_flag: number;
            method: number;
            added_index_flag: 0 | 1;
        }[];
    };
    interface QNBleConfig {
        appId: string;
        appType?: string;
        algorithmUrl?: string;
        autoStopDiscovery?: boolean;
        connectOverTime?: number;
        useSdk?: boolean;
        sdkUrl?: string;
        sdkConfig?: QNBleTypedSdkConfig;
        useHerbalife?: boolean;
        logger?: {
            log(...arg: any[]): void;
            [x: string]: any;
        };
        protocols?: typeof QNBleProtocol[];
        multipleListenersEnable?: boolean;
        mpwx?: any;
    }
    interface QNBleServer {
        addService(params: {
            uuid: string;
            properties?: {
                write: boolean;
                read: boolean;
                notify: boolean;
                indicate: boolean;
            };
            permission: {
                readable: boolean;
                writeable: boolean;
                readEncryptionRequired: boolean;
                writeEncryptionRequired: boolean;
            };
            descriptors: {
                uuid: string;
                value: ArrayBuffer;
                permission: {
                    write: boolean;
                    read: boolean;
                };
            };
            value: ArrayBuffer;
        }): Promise<any>;
        startAdvertising(params: {
            advertiseRequest: {
                connectable?: boolean;
                deviceName?: string;
                serviceUuids: string[];
            };
            powerLevel: 'high' | 'low' | 'medium';
        }): Promise<any>;
        stopAdvertising(): Promise<any>;
        close(): Promise<any>;
    }
    /**
     * ????????????????????????
     */
    namespace QNBleEventListenerNS {
        type onBluetoothEnableChange = (e: QNEvent<boolean>) => void;
        type onStartDiscoveryDevice = (e: QNEvent<undefined>) => void;
        type onStopDiscoveryDevice = (e: QNEvent<undefined>) => void;
        type onBleDeviceFound = (e: QNEvent<QNBleDevice>) => void;
        type onConnected = (e: QNEvent<QNBleDevice>) => void;
        type onDisconnected = (e: QNEvent<QNBleDevice>) => void;
        type onConnectOverTime = (e: QNEvent<string>) => void;
    }
    interface QNEventHandler {
        (event?: QNEvent<any>): any;
        _once_handler_?(): void;
    }
    interface QNBleEventListener {
        /**
         * ???????????????????????????available ???true ??????????????????false ?????????????????????
         */
        onBluetoothEnableChange: (payload: {
            available: boolean;
        }) => void;
        /**
         * ???????????????????????????
         */
        onStartDiscoveryDevice: () => void;
        /**
         * ???????????????????????????
         */
        onStopDiscoveryDevice: () => void;
        /**
         * ??????????????????????????????
         */
        onBleDeviceFound: (device: QNBleDevice) => void;
        /**
         * ??????????????????
         */
        onConnected: (payload: {
            deviceId: string;
        }) => void;
        /**
         * ??????????????????
         */
        onDisconnected: (payload: {
            deviceId: string;
        }) => void;
        /**
         * ??????????????????
         */
        onConnectOverTime: (payload: {
            deviceId: string;
        }) => void;
    }
    interface TypedCharacteristicValueChangePayload {
        deviceId: string;
        serviceId: string;
        characteristicId: string;
        data: number[];
    }
    /**
     * BleNative????????????
     */
    interface QNBleNativeEventListener {
        onNativeBluetoothEnableChange: (available: boolean) => void;
        onNativeStartDiscoveryDevice: () => void;
        onNativeStopDiscoveryDevice: () => void;
        onNativeBleDeviceFound: (nativeDevice: QNBleNativeDevice) => void;
        onNativeConnected: (deviceId: string) => void;
        onNativeDisconnected: (deviceId: string) => void;
        onNativeConnectOverTime: (deviceId: string) => void;
        onNativeCharacteristicValueChange: (payload: TypedCharacteristicValueChangePayload) => void;
        onDeviceConnectStateChange: (res: {
            connected: boolean;
            deviceId: string;
        }) => void;
        onError: (err: QNBleError | Error) => void;
    }
    type TypeGetScaleDataCallbackParam = {
        measure: TypedMeasure;
        response?: QNBleTypings.TypedMeasureData;
        scaleData?: TypedScaleData;
        sdkObj?: {
            method: number;
            bodyIndexFlag: number;
            extraFlag: number;
        };
    };
    type TypedProtocolDeviceInfo<T extends object> = {
        deviceId: string;
        info: T;
    };
    /**
     * ????????????????????????
     */
    namespace QNDeviceEventListener {
        type onGetDeviceInfo = (e: QNEvent<TypedProtocolDeviceInfo<object>>) => void;
        type onGetUnsteadyWeight = (e: QNEvent<number>) => void;
        type onGetUnsteadyHeight = (e: QNEvent<any>) => void;
        type onMeasureHeightEnd = (e: QNEvent<any>) => void;
        type onGetScaleData = (e: QNEvent<TypeGetScaleDataCallbackParam>) => void;
        type onStartFetchScaleData = (e: QNEvent<undefined>) => void;
        type onFetchScaleDataFail = (e: QNEvent<QNBleError>) => void;
        type onSetWifiSuccess = (e: QNEvent<undefined>) => void;
        type onRegisterUserSuccess = (e: QNEvent<number>) => void;
        type onStartMeasureFat = (e: QNEvent<undefined>) => void;
        type onStartMeasureHeart = (e: QNEvent<undefined>) => void;
    }
    interface QNDeviceEventListener {
        onGetDeviceInfo: (payload: TypedProtocolDeviceInfo<any>) => void;
        onError: (err: QNBleError | Error) => void;
    }
    interface QNHeightScaleEventListener extends QNDeviceEventListener {
        onSetWifiSuccess: () => void;
        /**
         * ?????????????????????
         */
        onGetDeviceInfo: (payload: TypedProtocolDeviceInfo<{
            fwVersion: number;
            bleVersion: number;
        }>) => void;
        /**
         * ????????????????????????
         */
        onGetUnsteadyWeight: (payload: {
            weight: number;
        }) => void;
        /**
         * ????????????????????????
         */
        onGetUnsteadyHeight: (payload: {
            height: number;
        }) => void;
        /**
         * ??????????????????????????????
         */
        onMeasureHeightEnd: (payload: {
            weight: number;
            height: number;
        }) => void;
        /**
         * ?????????????????????
         */
        onGetScaleData: (payload: TypeGetScaleDataCallbackParam) => void;
        onStartFetchScaleData: () => void;
        onFetchScaleDataFail: (err: Error) => void;
        onStartMeasureFat: () => void;
        onStartMeasureHeart: () => void;
    }
    interface QNBaseScaleMeasureEventListener extends QNDeviceEventListener {
        /**
         * ?????????????????????
         */
        onGetDeviceInfo: (payload: TypedProtocolDeviceInfo<{
            fwVersion: number;
            bleVersion: number;
        }>) => void;
        /**
         * ????????????????????????
         */
        onGetUnsteadyWeight: (payload: {
            weight: number;
        }) => void;
        /**
         * ?????????????????????
         */
        onGetScaleData: (payload: TypeGetScaleDataCallbackParam) => void;
        onStartFetchScaleData: () => void;
        onFetchScaleDataFail: (err: Error) => void;
        onStartMeasureFat: () => void;
        onStartMeasureHeart: () => void;
    }
    /**
     * ???wifi???????????????????????????
     */
    interface QNWifiScaleScaleMeasureEventListener extends QNBaseScaleMeasureEventListener {
        /**
         * ??????????????????
         */
        onGetSetWifiResult: (isSuccess: boolean) => void;
        /**
         * wifi??????????????????
         */
        onScanWifiFinished: () => void;
        /**
         * ??????????????????
         */
        onGetQueryWifiConnectStatusResult: (result: number) => void;
    }
    interface QNWspDualScaleMeasureEventListener extends QNWifiScaleScaleMeasureEventListener {
        /**
         * ????????????????????????
         */
        onGetRegisterUserResult: (payload: {
            isSuccess: boolean;
            userIndex?: number;
        }) => void;
        /**
         * ??????????????????????????????????????????????????????????????????????????????????????? ???????????? userIndex ??? ???????????? userKey ????????????
         */
        onGetVisitUserResult: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * ??????????????????????????????
         */
        onGetDeleteUserResult: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * ???????????????????????????
         */
        onGetStoredDatas: (records: Array<TypeGetScaleDataCallbackParam>) => void;
        onGetWifiInfo: (info: {
            rssi: number;
            ssid: string;
            /**
             * ????????????
             * 0??? rssi < -100
             * 1??? rssi [-100, -85) 1?????????
             * 2??? rssi [-85, -70) 2?????????
             * 3??? rssi [-70, -55) 3?????????
             * 4??? rssi >= -55 4????????????????????????
             */
            level: number;
        }) => void;
    }
    interface TypeOriginScaleData {
        weight?: number;
        height?: number;
        res50?: number;
        res500?: number;
        lf20?: number;
        lf100?: number;
        rf20?: number;
        rf100?: number;
        lh20?: number;
        lh100?: number;
        rh20?: number;
        rh100?: number;
        t20?: number;
        t100?: number;
    }
    /**
     * Mes????????????????????????
     */
    interface QNMesEventLisenter extends QNDeviceEventListener {
        /**
         * ????????????SN
         */
        onGetSnCode: (paylod: {
            sn: string;
        }) => void;
        onModuleTestWriteSnState: (payload: {
            isSuccess: boolean;
        }) => void;
        onModuleTestWeightData: (payload: {
            weight: number;
        }) => void;
        onModuleTestHeightData: (payload: {
            height: number;
        }) => void;
        onModuleTestResistanceData: (payload: TypeOriginScaleData) => void;
        onModuleTestCodeStatus: (payload: {
            isSuccess: boolean;
        }) => void;
        onGetCalibrationData: (payload: {
            calibrationType: string;
            weight: number;
        }) => void;
        /**
         * ???????????????????????????
         */
        onCalibrationCodeStatus: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * ????????????????????????
         */
        onGetUnsteadyWeight: (payload: {
            weight: number;
        }) => void;
        /**
         * ?????????????????????
         */
        onGetReviewWeightData: (payload: {
            weight: number;
        }) => void;
        /**
         * ??????????????????????????????
         */
        onReviewCodeStatus: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * ??????????????????
         */
        onGetPartialWeightData: (payload: {
            weight: number;
        }) => void;
        /**
         * ????????????????????????
         */
        onPartialCodeStatus: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * ?????????????????????????????????
         */
        onGetUnsteadyHeightWeight: (payload: {
            weight: number;
            height: number;
        }) => void;
        /**
         * ????????????????????????????????????
         */
        onGetOriginScaleData: (payload: TypeOriginScaleData) => void;
        /**
         * ????????????????????????
         */
        onGetWriteModelIdResult: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * ?????????wifi??????
         */
        onGetWifiResult: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * ??????????????????
         */
        onDeviceStateChange: (payload: {
            behavior: string;
        }) => void;
    }
    type TypedSpProtocolDeviceInfo = {
        modelId: string;
        deviceInfo: {
            chargeType: number;
            supportChangeLanguage: number;
            standardType: number;
        };
        deviceStatus: {
            chargeStatus: number;
            unit: string;
            language: number;
            volume: number;
        };
        historyCount: number;
        softwareVersion: number;
        bleVersion: number;
        bleProtocolVersion: number;
    };
    type TypedSpMeasureInfo = {
        user: number;
        dateTimeString: string;
        hyper: number;
        hypot: number;
        heartRate: number;
        unit: string;
        value: number;
    };
    interface QNSPMeasureEventListener extends QNDeviceEventListener {
        onGetDeviceInfo: (payload: TypedProtocolDeviceInfo<TypedSpProtocolDeviceInfo>) => void;
        onGetDeviceSetStatus: (retValue: number) => void;
        onMeasuring: (data: TypedSpMeasureInfo) => void;
        onMeasureSuccess: (data: TypedSpMeasureInfo) => void;
        onMeasureFail: (data: TypedSpMeasureInfo) => void;
        onGetHistoryData: (data: TypedSpMeasureInfo) => void;
        onSetWifiSuccess: () => void;
        onSetWifiFail: (status: number) => void;
        onGetWifiInfo: (info: {
            rssi: number;
            ssid: string;
            /**
             * ????????????
             * 0??? rssi < -100
             * 1??? rssi [-100, -85) 1?????????
             * 2??? rssi [-85, -70) 2?????????
             * 3??? rssi [-70, -55) 3?????????
             * 4??? rssi >= -55 4????????????????????????
             */
            level: number;
        }) => void;
        onScanWifiFinished: () => void;
        onGetQueryWifiConnectStatusResult: (ret: number) => void;
        onGetBlePaireStatus: (status: 0 | 1 | 2) => void;
    }
    type TypedThermoProtocolDeviceInfo = {
        modelId: string;
        mac: string;
        deviceStatus: {
            unit: number;
            mode: number;
        };
        historyCount: number;
        softwareVersion: number;
        bleVersion: number;
        bleProtocolVersion: number;
    };
    type TypedThermoMeasureInfo = {
        value: number;
        mode: number;
        unit: number;
    };
    interface QNThermoMeasureEventListener extends QNDeviceEventListener {
        onGetDeviceInfo: (payload: TypedProtocolDeviceInfo<TypedThermoProtocolDeviceInfo>) => void;
        onGetCurrentData: (payload: TypedThermoMeasureInfo) => void;
        onGetBlePaireStatus: (status: 0 | 1 | 2) => void;
    }
    interface QNKitchenEventListener extends QNDeviceEventListener {
        onGetScaleData: (data: TypedKitchenScaleData) => void;
    }
    type QNBleErrorListener = (event: QNEvent<QNBleError>) => void;
    type QNBleReadyListener = (event: QNEvent<InitFuncReturnValue>) => void;
    type QNEventType = 'ready' | 'ble' | 'device' | 'error';
    type QNBleEventName = 'bluetooth_enable_change' | 'start_discovery_device' | 'stop_discovery_device' | 'ble_device_found' | 'connected' | 'disconnected' | 'connect_overtime';
    type QNEventName = QNBleEventName | string | 'error' | 'ready' | 'event';
    /**
     * ??????????????????
     */
    namespace QNBleOperation {
        interface user {
            /**
             * ??????????????? cm
             */
            height: number;
            /**
             * ???????????? YYYY-MM-dd ?????????
             */
            birthday: string;
            /**
             * ??????
             */
            gender: 'male' | 'female' | 1 | 0;
            /**
             * ??????
             */
            age?: number;
            /**
             * ???????????????????????????????????????????????????????????????????????????APP??????????????????????????????
             * ????????????????????????????????????
             * @type {number}
             * ## ????????????
             * 1????????????????????????????????????
             * 2?????????????????????????????????????????????????????????
             * 3??????????????????????????????????????????
             * ## ???????????????????????????bodyShape=2
             * 1????????????????????????????????????
             * 4??????????????????????????????????????????
             * 5?????????????????????????????????????????????????????????
             * ## ???????????????????????????bodyShape=3
             * 2????????????????????????????????????????????????
             * 6??????????????????????????????????????????
             * 7??????????????????????????????????????????
             */
            personGoal?: number;
            /**
             * ????????????
             * @type {number}
             * 1??????????????????
             * 2??????????????????
             * 3??????????????????
             * 4??????????????????
             */
            bodyShape?: number;
            isSport?: boolean;
        }
    }
    interface QNBleOperation {
        action: QNBleAction;
        user: QNBleOperation.user;
        unit: QNBleUnit;
        config: Partial<QNBleConfig>;
        wifiSsid?: string;
        wifiPwd?: string;
        dataServerUrl?: string;
        otaServerUrl?: string;
        encryptKey?: string;
        sound?: number;
        isRegisterUser?: boolean;
        userIndex?: number;
        userKey?: number;
        isUpdateUser?: boolean;
        deletedUserIndexArr?: number[];
        sn?: string;
        isHeartRate?: boolean;
        minWeight?: string;
        maxWeight?: string;
        overrideWeight?: string;
        batteryType?: number;
        modelId?: string;
    }
    type QNBleCommonConstructorParams = {
        config: QNBleConfig;
        operation: QNBleOperation;
        bleDevice: QNBleDevice;
        bleNative: QNBleNative;
        eventManager: QNEventManager;
        isAndroid: boolean;
    };
    type QNBleProtocolConstructorParams = {
        listener?: Partial<QNBleTypings.QNDeviceEventListener>;
    } & QNBleCommonConstructorParams;
    type TypedSdkObj = {
        method: number;
        bodyIndexFlag: number;
        extraFlag: 0 | 1;
    };
    /**
     * ????????????
     */
    interface TypedScaleData {
        mac?: string;
        weight?: number;
        height?: number;
        resistance50?: number;
        resistance500?: number;
        heartRate?: number;
        hasResistance?: 0 | 1;
        resistance20_left_arm?: number;
        resistance20_left_leg?: number;
        resistance20_right_arm?: number;
        resistance20_right_leg?: number;
        resistance20_trunk?: number;
        resistance100_left_arm?: number;
        resistance100_left_leg?: number;
        resistance100_right_arm?: number;
        resistance100_right_leg?: number;
        resistance100_trunk?: number;
    }
    /**
     * ??????????????????
     */
    interface TypedKitchenScaleData {
        weight: number;
        weightUnit: string;
        /**
         * ?????????????????????
         * 0???????????????1?????????
         */
        type: 0 | 1;
        /**
         * ??????????????????
         * 0????????????1?????????
         */
        isSteady: 0 | 1;
        overWeight: boolean;
        isPeeled: 0 | 1;
        range?: 0 | 1;
    }
    /**
     * ??????????????????
     */
    interface TypedMeasure {
        user: QNBleTypings.QNBleOperation.user;
        device: QNBleDevice;
        time: Date;
        score: number;
        weight: number;
        bmi: number;
        water: number;
        subfat: number;
        muscleMass: number;
        muscle: number;
        bone: number;
        bmr: number;
        protein: number;
        lbm: number;
        visfat: number;
        bodyAge: number;
        bodyShape: number;
        bodyfat: number;
        heartIndex: number;
        heartRate: number;
        stature: number;
    }
    interface TypedMeasureData {
        weight?: number;
        stature?: number;
        bodyfat?: number;
        subfat?: number;
        visfat?: number;
        water?: number;
        bmr?: number;
        muscle?: number;
        bone?: number;
        fat_free_weight?: number;
        protein?: number;
        sinew?: number;
        score: number;
        bodyage?: number;
        bmi?: number;
        body_shape?: number;
        cardiac_index?: number;
        left_weight?: number;
        right_weight?: number;
        heart_rate?: number;
        body_shape_flag?: number;
        fat_free_weight_flag?: number;
        weight_flag?: number;
        stature_flag?: number;
        bmi_flag?: number;
        bodyfat_flag?: number;
        subfat_flag?: number;
        visfat_flag?: number;
        water_flag?: number;
        muscle_flag?: number;
        bone_flag?: number;
        sinew_flag?: number;
        protein_flag?: number;
        bmr_flag?: number;
        bodyage_flag: number;
        whr_flag?: number;
        fatty_liver_risk_flag?: number;
        heart_rate_flag?: number;
        cardiac_index_flag?: number;
        depth_report_flag?: number;
        gender?: number;
        height?: number;
        birthday?: string;
        age?: number;
        local_updated_at?: string;
        time: Date;
        muscle_rh?: number;
        muscle_lh?: number;
        muscle_t?: number;
        muscle_rf?: number;
        muscle_lf?: number;
        fat_rh?: number;
        fat_fh?: number;
        fat_lh?: number;
        fat_t?: number;
        fat_rf?: number;
        fat_lf?: number;
        muscleLf?: number;
        muscleRf?: number;
        muscleRh?: number;
        muscleT?: number;
        muscleLh?: number;
        fatLf?: number;
        fatLh?: number;
        fatRf?: number;
        fatRh?: number;
        fatT?: number;
        pregnant_flag?: number;
        muscleMass: number;
        lbm?: number;
        bodyAge?: number;
        bodyShape?: number;
        heartIndex?: number;
        heartRate?: number;
    }
    interface TypedWspMeasureData extends Partial<TypedMeasureData> {
        muscleMass: number;
        lbm: number;
        bodyAge: number;
        bodyShape: number;
        heartIndex: number;
        heartRate: number;
        time: Date;
    }
    interface TypedEightWspMeasureData extends Partial<TypedMeasureData> {
        muscle_rh?: number;
        muscle_lh?: number;
        muscle_t?: number;
        muscle_rf?: number;
        muscle_lf?: number;
        fat_fh?: number;
        fat_rh?: number;
        fat_lh?: number;
        fat_t?: number;
        fat_rf?: number;
        fat_lf?: number;
        resistance20_left_arm?: number;
        resistance20_left_leg?: number;
        resistance20_right_arm?: number;
        resistance20_right_leg?: number;
        resistance20_trunk?: number;
        resistance100_left_arm?: number;
        resistance100_left_leg?: number;
        resistance100_right_arm?: number;
        resistance100_right_leg?: number;
        resistance100_trunk?: number;
    }
    type TypedProtocolMethodCallbackRetValue = {
        errCode: number;
    };
    type TypedProtocolMethodCallback<T extends TypedProtocolMethodCallbackRetValue> = (arg0: T, data: QNBleTypings.TypedCharacteristicValueChangePayload, protocolImp: QNBleProtocol<QNDeviceEventListener>) => any;
}
export default QNBleTypings;
